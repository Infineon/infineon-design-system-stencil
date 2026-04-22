const fs = require("fs");
const path = require("path");

const ts = require("typescript");
const { parseTemplate } = require("@angular/compiler");

const TARGET_VERSION = "40.0.0";
const ANGULAR_IMPORT_PREFIX = "@infineon/infineon-design-system-angular";
const IGNORED_PATH_SEGMENTS = new Set([".angular", ".git", "dist", "node_modules"]);
const IFX_PREFIX = /^ifx-/;
const SEMVER_PATTERN = /(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?/;

function kebabToCamelCase(value) {
	return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function pushReplacement(replacements, start, end, text, label) {
	if (
		replacements.some(
			(replacement) =>
				replacement.start === start && replacement.end === end && replacement.text === text,
		)
	) {
		return;
	}

	replacements.push({ start, end, text, label });
}

function applyReplacements(content, replacements) {
	return [...replacements]
		.sort((left, right) => right.start - left.start)
		.reduce(
			(currentContent, replacement) =>
				`${currentContent.slice(0, replacement.start)}${replacement.text}${currentContent.slice(replacement.end)}`,
			content,
		);
}

function parseVersion(value) {
	const match = value.match(SEMVER_PATTERN);
	if (!match) {
		return null;
	}

	const [, major, minor, patch, prerelease] = match;
	return {
		major: Number(major),
		minor: Number(minor),
		patch: Number(patch),
		prerelease,
	};
}

function compareVersions(left, right) {
	const leftVersion = parseVersion(left);
	const rightVersion = parseVersion(right);

	if (!leftVersion || !rightVersion) {
		throw new Error(`Unable to compare versions: ${left} and ${right}.`);
	}

	for (const key of ["major", "minor", "patch"]) {
		const difference = leftVersion[key] - rightVersion[key];
		if (difference !== 0) {
			return difference;
		}
	}

	if (leftVersion.prerelease && !rightVersion.prerelease) {
		return -1;
	}

	if (!leftVersion.prerelease && rightVersion.prerelease) {
		return 1;
	}

	if (leftVersion.prerelease && rightVersion.prerelease) {
		return leftVersion.prerelease.localeCompare(rightVersion.prerelease);
	}

	return 0;
}

function hasSameBaseVersion(left, right) {
	return left.major === right.major && left.minor === right.minor && left.patch === right.patch;
}

function isVersionGreaterThanOrEqual(left, right) {
	const leftVersion = parseVersion(left);
	const rightVersion = parseVersion(right);

	if (!leftVersion || !rightVersion) {
		throw new Error(`Unable to compare versions: ${left} and ${right}.`);
	}

	if (hasSameBaseVersion(leftVersion, rightVersion) && leftVersion.prerelease && !rightVersion.prerelease) {
		return true;
	}

	return compareVersions(left, right) >= 0;
}

function getManifestPath(explicitManifestPath) {
	if (explicitManifestPath) {
		return explicitManifestPath;
	}

	const candidates = [
		path.join(__dirname, "..", "shared"),
		path.join(__dirname, "..", "shared", "v1.json"),
		path.resolve(__dirname, "..", "..", "..", "migrations", "migrations", "v1.json"),
	];

	for (const candidate of candidates) {
		if (fs.existsSync(candidate)) {
			return candidate;
		}
	}

	throw new Error("Unable to locate the shared migration manifest for Angular migrations.");
}

function loadMigrationRules(targetVersion, manifestPath) {
	const manifest = JSON.parse(fs.readFileSync(getManifestPath(manifestPath), "utf8"));
	const migrations = Array.isArray(manifest.migrations) ? manifest.migrations : [];

	return migrations.filter(
		(rule) => !rule.targetVersion || isVersionGreaterThanOrEqual(targetVersion, rule.targetVersion),
	);
}

function replaceWithinSpan(content, replacements, span, searchValues, getReplacementText, label) {
	if (!span) {
		return false;
	}

	const start = span.start.offset;
	const end = span.end.offset;
	const source = content.slice(start, end);

	for (const searchValue of searchValues) {
		const matchIndex = source.indexOf(searchValue);
		if (matchIndex === -1) {
			continue;
		}

		pushReplacement(
			replacements,
			start + matchIndex,
			start + matchIndex + searchValue.length,
			getReplacementText(searchValue),
			label,
		);
		return true;
	}

	return false;
}

function collectTemplateReplacements(content, filePath, rules) {
	const parsed = parseTemplate(content, filePath, { preserveWhitespaces: true });
	const replacements = [];

	const visitNode = (node) => {
		if (typeof node.name === "string" && node.startSourceSpan) {
			for (const rule of rules) {
				if (node.name === rule.component) {
					for (const attribute of node.attributes ?? []) {
						for (const operation of rule.operations) {
							if (attribute.name === operation.from) {
								replaceWithinSpan(
									content,
									replacements,
									attribute.keySpan,
									[operation.from],
									() => operation.to,
									`prop ${operation.from} -> ${operation.to}`,
								);
							}
						}
					}

					for (const input of node.inputs ?? []) {
						for (const operation of rule.operations) {
							const currentCamelName = kebabToCamelCase(operation.from);
							const nextCamelName = kebabToCamelCase(operation.to);
							if (input.name === currentCamelName) {
								replaceWithinSpan(
									content,
									replacements,
									input.keySpan,
									[operation.from, currentCamelName],
									(searchValue) => (searchValue.includes("-") ? operation.to : nextCamelName),
									`prop ${operation.from} -> ${operation.to}`,
								);
							}
						}
					}
				}
			}
		}

		for (const child of node.children ?? []) {
			visitNode(child);
		}
	};

	for (const node of parsed.nodes ?? []) {
		visitNode(node);
	}

	return replacements;
}

function migrateTemplateContent(content, filePath, rules) {
	const replacements = collectTemplateReplacements(content, filePath, rules);
	if (replacements.length === 0) {
		return null;
	}

	const updatedContent = applyReplacements(content, replacements);
	return updatedContent === content ? null : updatedContent;
}

function createSourceFile(filePath, content) {
	return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

function isAngularImport(moduleSpecifier) {
	return typeof moduleSpecifier === "string" && moduleSpecifier.startsWith(ANGULAR_IMPORT_PREFIX);
}

// ─── TypeScript body scanning ────────────────────────────────────────────────
// Handles: nativeElement.prop, nativeElement['prop'], el.setAttribute('prop'),
// renderer.setProperty(el, 'prop', …), renderer.setAttribute(el, 'prop', …),
// Object.assign(el, { prop: … }), Object.assign(el, constObj),
// Object.assign(el, helperFn()) where helperFn is defined in the same file.

const ATTRIBUTE_API_CALLS = new Set([
	"getAttribute",
	"hasAttribute",
	"removeAttribute",
	"setAttribute",
	"toggleAttribute",
]);

function replaceStringLiteralNode(node, sourceFile, value) {
	const rawText = node.getText(sourceFile);
	const quote = rawText.startsWith("'") ? "'" : '"';
	return `${quote}${value}${quote}`;
}

function getCallTargetName(expression) {
	if (ts.isPropertyAccessExpression(expression) || ts.isPropertyAccessChain(expression)) {
		return expression.name.text;
	}
	if (ts.isIdentifier(expression)) {
		return expression.text;
	}
	return null;
}

function renameObjectLiteralKeys(obj, sourceFile, rules, replacements) {
	for (const property of obj.properties) {
		if (!ts.isPropertyAssignment(property)) {
			continue;
		}
		for (const rule of rules) {
			for (const operation of rule.operations) {
				if (operation.type !== "prop-rename") {
					continue;
				}
				const currentPropName = kebabToCamelCase(operation.from);
				const nextPropName = kebabToCamelCase(operation.to);

				if (ts.isIdentifier(property.name) && property.name.text === currentPropName) {
					pushReplacement(
						replacements,
						property.name.getStart(sourceFile),
						property.name.getEnd(),
						nextPropName,
						`property ${operation.from} -> ${operation.to}`,
					);
				}

				if (
					ts.isStringLiteral(property.name) &&
					(property.name.text === currentPropName || property.name.text === operation.from)
				) {
					const nextName = property.name.text === operation.from ? operation.to : nextPropName;
					pushReplacement(
						replacements,
						property.name.getStart(sourceFile) + 1,
						property.name.getEnd() - 1,
						nextName,
						`property ${operation.from} -> ${operation.to}`,
					);
				}
			}
		}
	}
}

function extractObjectLiteralsFromExpr(expr) {
	if (ts.isObjectLiteralExpression(expr)) {
		return [expr];
	}
	if (ts.isParenthesizedExpression(expr)) {
		return extractObjectLiteralsFromExpr(expr.expression);
	}
	if (ts.isConditionalExpression(expr)) {
		return [
			...extractObjectLiteralsFromExpr(expr.whenTrue),
			...extractObjectLiteralsFromExpr(expr.whenFalse),
		];
	}
	return [];
}

function collectReturnObjectsFromBody(body) {
	// Concise arrow body: () => expr or () => ({ … })
	if (!ts.isBlock(body)) {
		return extractObjectLiteralsFromExpr(body);
	}
	// Block body: collect all return statements
	const results = [];
	const walkBlock = (node) => {
		if (ts.isReturnStatement(node) && node.expression) {
			results.push(...extractObjectLiteralsFromExpr(node.expression));
		}
		ts.forEachChild(node, walkBlock);
	};
	walkBlock(body);
	return results;
}

function collectTypeScriptBodyReplacements(sourceFile, content, rules) {
	const replacements = [];

	// Pre-pass 1: collect const variable declarations with plain object literal initializers,
	// so we can trace Object.assign(el, constObj) calls.
	const constObjectDeclarations = new Map();
	const collectConstObjects = (node) => {
		if (
			ts.isVariableStatement(node) &&
			(node.declarationList.flags & ts.NodeFlags.Const) !== 0
		) {
			for (const decl of node.declarationList.declarations) {
				if (!ts.isIdentifier(decl.name) || !decl.initializer) {
					continue;
				}
				let initializer = decl.initializer;
				while (ts.isAsExpression(initializer) || ts.isSatisfiesExpression(initializer)) {
					initializer = initializer.expression;
				}
				if (ts.isObjectLiteralExpression(initializer)) {
					constObjectDeclarations.set(decl.name.text, initializer);
				}
			}
		}
		ts.forEachChild(node, collectConstObjects);
	};
	collectConstObjects(sourceFile);

	// Pre-pass 2: collect same-file functions / arrow functions whose return values can be
	// statically analyzed, so we can trace Object.assign(el, helperFn()) calls.
	const functionReturnObjects = new Map();
	const collectFunctionDeclarations = (node) => {
		if (ts.isFunctionDeclaration(node) && node.name && node.body) {
			const objs = collectReturnObjectsFromBody(node.body);
			if (objs.length > 0) {
				functionReturnObjects.set(node.name.text, objs);
			}
		}
		if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
			const init = node.initializer;
			if (ts.isArrowFunction(init) || ts.isFunctionExpression(init)) {
				const objs = collectReturnObjectsFromBody(init.body);
				if (objs.length > 0) {
					functionReturnObjects.set(node.name.text, objs);
				}
			}
		}
		ts.forEachChild(node, collectFunctionDeclarations);
	};
	collectFunctionDeclarations(sourceFile);

	// Main pass: call expressions, property accesses, bracket accesses.
	const visit = (node) => {
		if (ts.isCallExpression(node) && node.arguments.length >= 1) {
			const callTargetName = getCallTargetName(node.expression);
			const [firstArgument] = node.arguments;

			if (callTargetName) {
				// DOM attribute API: el.setAttribute('prop', …) — first arg is the name.
				// Distinguishable from the Renderer2 variant because DOM setAttribute has exactly 2 args,
				// and the first arg is a string literal (not an element reference).
				if (ATTRIBUTE_API_CALLS.has(callTargetName) && ts.isStringLiteral(firstArgument)) {
					for (const rule of rules) {
						for (const operation of rule.operations) {
							if (firstArgument.text === operation.from) {
								pushReplacement(
									replacements,
									firstArgument.getStart(sourceFile),
									firstArgument.getEnd(),
									replaceStringLiteralNode(firstArgument, sourceFile, operation.to),
									`attribute API ${operation.from} -> ${operation.to}`,
								);
							}
						}
					}
				}

				// Renderer2 API: renderer.setProperty(el, 'prop', …) and renderer.setAttribute(el, 'prop', …)
				// — the prop name is the SECOND argument (index 1), and there are exactly 3 arguments.
				if (
					(callTargetName === "setProperty" || callTargetName === "setAttribute") &&
					node.arguments.length >= 3 &&
					ts.isStringLiteral(node.arguments[1])
				) {
					const propArg = node.arguments[1];
					for (const rule of rules) {
						for (const operation of rule.operations) {
							if (operation.type !== "prop-rename") {
								continue;
							}
							const currentCamelName = kebabToCamelCase(operation.from);
							const nextCamelName = kebabToCamelCase(operation.to);
							// setProperty uses camelCase names; setAttribute uses kebab-case names.
							if (propArg.text === currentCamelName) {
								pushReplacement(
									replacements,
									propArg.getStart(sourceFile),
									propArg.getEnd(),
									replaceStringLiteralNode(propArg, sourceFile, nextCamelName),
									`renderer property ${operation.from} -> ${operation.to}`,
								);
							} else if (propArg.text === operation.from) {
								pushReplacement(
									replacements,
									propArg.getStart(sourceFile),
									propArg.getEnd(),
									replaceStringLiteralNode(propArg, sourceFile, operation.to),
									`renderer attribute ${operation.from} -> ${operation.to}`,
								);
							}
						}
					}
				}
			}
		}

		// Property access: el.autoCollapse, nativeElement.success
		if (ts.isPropertyAccessExpression(node) || ts.isPropertyAccessChain(node)) {
			for (const rule of rules) {
				for (const operation of rule.operations) {
					if (operation.type !== "prop-rename") {
						continue;
					}
					const currentPropName = kebabToCamelCase(operation.from);
					const nextPropName = kebabToCamelCase(operation.to);
					if (node.name.text === currentPropName) {
						pushReplacement(
							replacements,
							node.name.getStart(sourceFile),
							node.name.getEnd(),
							nextPropName,
							`property ${operation.from} -> ${operation.to}`,
						);
					}
				}
			}
		}

		// Bracket access: el['autoCollapse'], nativeElement['success']
		if (
			(ts.isElementAccessExpression(node) || ts.isElementAccessChain(node)) &&
			node.argumentExpression &&
			ts.isStringLiteral(node.argumentExpression)
		) {
			for (const rule of rules) {
				for (const operation of rule.operations) {
					if (operation.type !== "prop-rename") {
						continue;
					}
					const currentPropName = kebabToCamelCase(operation.from);
					const nextPropName = kebabToCamelCase(operation.to);
					if (node.argumentExpression.text === currentPropName) {
						pushReplacement(
							replacements,
							node.argumentExpression.getStart(sourceFile),
							node.argumentExpression.getEnd(),
							replaceStringLiteralNode(node.argumentExpression, sourceFile, nextPropName),
							`property ${operation.from} -> ${operation.to}`,
						);
					}
				}
			}
		}

		ts.forEachChild(node, visit);
	};
	visit(sourceFile);

	// Object.assign pass: Object.assign(el, { prop: … }), Object.assign(el, constObj),
	// Object.assign(el, helperFn()).
	const visitObjectAssign = (node) => {
		if (
			ts.isCallExpression(node) &&
			ts.isPropertyAccessExpression(node.expression) &&
			ts.isIdentifier(node.expression.expression) &&
			node.expression.expression.text === "Object" &&
			node.expression.name.text === "assign" &&
			node.arguments.length >= 2
		) {
			for (let i = 1; i < node.arguments.length; i++) {
				const arg = node.arguments[i];
				if (ts.isObjectLiteralExpression(arg)) {
					renameObjectLiteralKeys(arg, sourceFile, rules, replacements);
				} else if (ts.isIdentifier(arg)) {
					const obj = constObjectDeclarations.get(arg.text);
					if (obj) {
						renameObjectLiteralKeys(obj, sourceFile, rules, replacements);
					}
				} else if (ts.isCallExpression(arg) && ts.isIdentifier(arg.expression)) {
					const objs = functionReturnObjects.get(arg.expression.text);
					if (objs) {
						for (const obj of objs) {
							renameObjectLiteralKeys(obj, sourceFile, rules, replacements);
						}
					}
				}
			}
		}
		ts.forEachChild(node, visitObjectAssign);
	};
	visitObjectAssign(sourceFile);

	return replacements;
}

// ─────────────────────────────────────────────────────────────────────────────

function migrateTypeScriptContent(content, filePath, rules) {
	const sourceFile = createSourceFile(filePath, content);
	const replacements = [];

	// Pass 1: rename props inside inline `template: '...'` strings in component decorators.
	const visit = (node) => {
		if (
			ts.isPropertyAssignment(node) &&
			((ts.isIdentifier(node.name) && node.name.text === "template") ||
				(ts.isStringLiteral(node.name) && node.name.text === "template"))
		) {
			const initializer = node.initializer;
			if (
				ts.isStringLiteral(initializer) ||
				ts.isNoSubstitutionTemplateLiteral(initializer)
			) {
				const rawTemplate = content.slice(initializer.getStart(sourceFile) + 1, initializer.getEnd() - 1);
				const migratedTemplate = migrateTemplateContent(
					rawTemplate,
					`${filePath}#inline-template`,
					rules,
				);
				if (migratedTemplate && migratedTemplate !== rawTemplate) {
					pushReplacement(
						replacements,
						initializer.getStart(sourceFile) + 1,
						initializer.getEnd() - 1,
						migratedTemplate,
						"inline template migration",
					);
				}
			}
		}

		ts.forEachChild(node, visit);
	};
	visit(sourceFile);

	// Pass 2: rename prop names in the TypeScript class body
	// (nativeElement access, setAttribute, Renderer2, Object.assign, …).
	const bodyReplacements = collectTypeScriptBodyReplacements(sourceFile, content, rules);
	for (const replacement of bodyReplacements) {
		pushReplacement(replacements, replacement.start, replacement.end, replacement.text, replacement.label);
	}

	if (replacements.length === 0) {
		return null;
	}

	const updatedContent = applyReplacements(content, replacements);
	return updatedContent === content ? null : updatedContent;
}

function shouldSkipFile(filePath) {
	return filePath.split("/").some((segment) => IGNORED_PATH_SEGMENTS.has(segment));
}

function createManifestMigration(targetVersion) {
	return (tree) => {
		const rules = loadMigrationRules(targetVersion);

		tree.getDir("/").visit((filePath) => {
			if (shouldSkipFile(filePath)) {
				return;
			}

			if (!filePath.endsWith(".html") && !filePath.endsWith(".ts")) {
				return;
			}

			const fileEntry = tree.get(filePath);
			if (!fileEntry) {
				return;
			}

			const originalContent = fileEntry.content.toString("utf8");
			const updatedContent = filePath.endsWith(".html")
				? migrateTemplateContent(originalContent, filePath, rules)
				: migrateTypeScriptContent(originalContent, filePath, rules);

			if (updatedContent && updatedContent !== originalContent) {
				tree.overwrite(filePath, updatedContent);
			}
		});

		return tree;
	};
}

function updateToV40() {
	return createManifestMigration(TARGET_VERSION);
}

module.exports = {
	createManifestMigration,
	loadMigrationRules,
	migrateTemplateContent,
	migrateTypeScriptContent,
	updateToV40,
};