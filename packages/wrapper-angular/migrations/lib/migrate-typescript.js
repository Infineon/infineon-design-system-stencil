const ts = require("typescript");

const { pushReplacement, applyReplacements } = require("./replacements");
const { migrateTemplateContent } = require("./migrate-template");

/** @param {string} filePath @param {string} content */
function createSourceFile(filePath, content) {
	return ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
}

/**
 * Migrate only Angular templates embedded in a component decorator.
 * TypeScript class-body property and DOM API rewrites are intentionally out of scope.
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').Operation[]} operations
 * @returns {string | null}
 */
function migrateTypeScriptContent(content, filePath, operations) {
	const sourceFile = createSourceFile(filePath, content);
	const replacements = [];

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
					operations,
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
	if (replacements.length === 0) {
		return null;
	}

	const updatedContent = applyReplacements(content, replacements);
	return updatedContent === content ? null : updatedContent;
}

module.exports = { migrateTypeScriptContent };
