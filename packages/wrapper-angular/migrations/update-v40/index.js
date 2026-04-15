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

function isVersionGreaterThanOrEqual(left, right) {
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

function migrateTypeScriptContent(content, filePath, rules) {
	const sourceFile = createSourceFile(filePath, content);
	const replacements = [];

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