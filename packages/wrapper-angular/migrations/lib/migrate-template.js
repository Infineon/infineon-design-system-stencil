const { parseTemplate } = require("@angular/compiler");

const { kebabToCamelCase, pushReplacement, applyReplacements } = require("./replacements");

/**
 * Try to replace a value within an Angular source span.
 * Returns true if a replacement was recorded, false if none of the search values were found.
 *
 * @param {string} content              Full file content.
 * @param {{ start: number, end: number, text: string, label: string }[]} replacements
 * @param {{ start: { offset: number }, end: { offset: number } } | undefined} span
 * @param {string[]} searchValues
 * @param {(searchValue: string) => string} getReplacementText
 * @param {string} label
 */
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

/**
 * Collect all prop-rename replacements for an Angular HTML template string.
 *
 * Handles static attributes (`success="true"`) and property bindings (`[success]="…"`).
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').MigrationRule[]} rules
 * @returns {{ start: number, end: number, text: string, label: string }[]}
 */
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

/**
 * Migrate prop names in an Angular HTML template string.
 * Returns the updated content, or null if nothing changed.
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').MigrationRule[]} rules
 * @returns {string | null}
 */
function migrateTemplateContent(content, filePath, rules) {
	const replacements = collectTemplateReplacements(content, filePath, rules);
	if (replacements.length === 0) {
		return null;
	}

	const updatedContent = applyReplacements(content, replacements);
	return updatedContent === content ? null : updatedContent;
}

module.exports = { migrateTemplateContent };
