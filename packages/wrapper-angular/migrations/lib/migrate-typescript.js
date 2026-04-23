const ts = require("typescript");

const { kebabToCamelCase, pushReplacement, applyReplacements } = require("./replacements");
const { migrateTemplateContent } = require("./migrate-template");

// ─── Shared TS helpers ────────────────────────────────────────────────────────

/**
 * DOM attribute APIs where the first string argument is the attribute/prop name.
 * `setAttribute` with two args → first arg is the name.
 * `setAttribute` with three args (Renderer2) → second arg is the name (handled separately).
 */
const ATTRIBUTE_API_CALLS = new Set([
	"getAttribute",
	"hasAttribute",
	"removeAttribute",
	"setAttribute",
	"toggleAttribute",
]);

/** @param {string} filePath @param {string} content */
function createSourceFile(filePath, content) {
	return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

/**
 * Re-wrap a string literal node in its original quote style with a new value.
 * @param {ts.StringLiteral} node @param {ts.SourceFile} sourceFile @param {string} value
 */
function replaceStringLiteralNode(node, sourceFile, value) {
	const rawText = node.getText(sourceFile);
	const quote = rawText.startsWith("'") ? "'" : '"';
	return `${quote}${value}${quote}`;
}

/**
 * Return the simple name of a call target (e.g. `el.setAttribute` → `"setAttribute"`).
 * @param {ts.LeftHandSideExpression} expression
 * @returns {string | null}
 */
function getCallTargetName(expression) {
	if (ts.isPropertyAccessExpression(expression) || ts.isPropertyAccessChain(expression)) {
		return expression.name.text;
	}
	if (ts.isIdentifier(expression)) {
		return expression.text;
	}
	return null;
}

// ─── Object literal key renaming ─────────────────────────────────────────────

/**
 * Rename matching keys inside an object literal expression.
 *
 * @param {ts.ObjectLiteralExpression} obj
 * @param {ts.SourceFile} sourceFile
 * @param {import('../update-v40/index').MigrationRule[]} rules
 * @param {{ start: number, end: number, text: string, label: string }[]} replacements
 */
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

// ─── Object literal extraction from expressions ───────────────────────────────

/** @param {ts.Expression} expr @returns {ts.ObjectLiteralExpression[]} */
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

/** @param {ts.ConciseBody} body @returns {ts.ObjectLiteralExpression[]} */
function collectReturnObjectsFromBody(body) {
	// Concise arrow body: () => expr or () => ({ … })
	if (!ts.isBlock(body)) {
		return extractObjectLiteralsFromExpr(/** @type {ts.Expression} */ (body));
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

// ─── TypeScript body scanner ──────────────────────────────────────────────────

/**
 * Collect all prop-rename replacements in the TypeScript class body of a component file.
 *
 * Handles:
 *   - `nativeElement.prop = …`         (property access)
 *   - `nativeElement['prop'] = …`       (bracket access)
 *   - `el.setAttribute('prop', …)`      (DOM attribute API, first arg)
 *   - `renderer.setProperty(el, 'prop', …)`  (Renderer2, second arg)
 *   - `renderer.setAttribute(el, 'prop', …)` (Renderer2, second arg)
 *   - `Object.assign(el, { prop: … })`       (inline object)
 *   - `Object.assign(el, constObj)`           (same-file const variable)
 *   - `Object.assign(el, helperFn())`         (same-file function return)
 *
 * @param {ts.SourceFile} sourceFile
 * @param {string} content
 * @param {import('../update-v40/index').MigrationRule[]} rules
 * @returns {{ start: number, end: number, text: string, label: string }[]}
 */
function collectTypeScriptBodyReplacements(sourceFile, content, rules) {
	const replacements = [];

	// Pre-pass 1: collect `const x = { … }` declarations for Object.assign tracing.
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

	// Pre-pass 2: collect same-file function/arrow return objects for Object.assign tracing.
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
				// DOM attribute API: el.setAttribute('prop', val) — first arg is the name.
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

				// Renderer2: renderer.setProperty(el, 'prop', val) and renderer.setAttribute(el, 'prop', val)
				// — prop name is the SECOND argument; 3-arg call distinguishes from DOM setAttribute.
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
							// setProperty uses camelCase; setAttribute uses kebab-case.
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

	// Object.assign pass: inline object, const variable, same-file helper function.
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

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Migrate prop names in a TypeScript component file.
 *
 * Two passes are applied:
 *   1. Inline `template: '…'` strings inside `@Component` decorators are processed
 *      through the Angular template parser.
 *   2. The TypeScript class body is scanned for all prop-rename patterns
 *      (nativeElement access, DOM/Renderer2 APIs, Object.assign).
 *
 * Returns the updated content, or null if nothing changed.
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').MigrationRule[]} rules
 * @returns {string | null}
 */
function migrateTypeScriptContent(content, filePath, rules) {
	const sourceFile = createSourceFile(filePath, content);
	const replacements = [];

	// Pass 1: inline template strings in @Component decorators.
	const visitInlineTemplates = (node) => {
		if (
			ts.isPropertyAssignment(node) &&
			((ts.isIdentifier(node.name) && node.name.text === "template") ||
				(ts.isStringLiteral(node.name) && node.name.text === "template"))
		) {
			const initializer = node.initializer;
			if (ts.isStringLiteral(initializer) || ts.isNoSubstitutionTemplateLiteral(initializer)) {
				const rawTemplate = content.slice(
					initializer.getStart(sourceFile) + 1,
					initializer.getEnd() - 1,
				);
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

		ts.forEachChild(node, visitInlineTemplates);
	};
	visitInlineTemplates(sourceFile);

	// Pass 2: TypeScript class body (nativeElement, setAttribute, Renderer2, Object.assign).
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

module.exports = { migrateTypeScriptContent };
