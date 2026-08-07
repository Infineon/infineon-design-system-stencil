const { parseTemplate } = require("@angular/compiler");

const { DiagnosticCode } = require("./diagnostic-codes.js");
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
function replaceWithinSpan(content, replacements, span, searchValues, getReplacementText, label, operationId) {
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

		const replacementText = getReplacementText(searchValue);
		const editIndex = pushReplacement(
			replacements,
			start + matchIndex,
			start + matchIndex + searchValue.length,
			replacementText,
			label,
		);
		replacements[editIndex].replacement = replacementText;
		replacements[editIndex].operationId = operationId;
		replacements[editIndex].description = label;
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
 * @param {Array<{ id: string, type: string, component: string, from: string, to: string }>} operations
 * @returns {{ start: number, end: number, text: string, label: string }[]}
 */
function createParseFailureDiagnostic(filePath, operation, message) {
	return {
		code: DiagnosticCode.PARSE_FAILED,
		severity: "error",
		message: `Cannot parse Angular template: ${message}`,
		operationId: operation.id,
		filePath,
		suggestion: "Fix the malformed Angular template before running the migration.",
	};
}

function analyseTemplateContent(content, filePath, step) {
	const { operation = step } = { operation: step };
	const edits = [];
	const diagnostics = [];

	let parsed;
	try {
		parsed = parseTemplate(content, filePath, { preserveWhitespaces: true });
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		return {
			edits: [],
			diagnostics: [createParseFailureDiagnostic(filePath, operation, message)],
		};
	}

	const visitNode = (node) => {
		if (typeof node.name === "string" && node.startSourceSpan) {
			if (node.name !== operation.component) {
				for (const child of node.children ?? []) {
					visitNode(child);
				}
				return;
			}

			for (const attribute of node.attributes ?? []) {
				const normalizedAttributeName = attribute.name;
				if (normalizedAttributeName !== operation.from) {
					continue;
				}

				replaceWithinSpan(
					content,
					edits,
					attribute.keySpan,
					[operation.from],
					() => operation.to,
					`prop ${operation.from} -> ${operation.to}`,
					operation.id,
				);
			}

			for (const input of node.inputs ?? []) {
				const currentCamelName = kebabToCamelCase(operation.from);
				const nextCamelName = kebabToCamelCase(operation.to);
				const inputNameMatches = input.name === operation.from || input.name === currentCamelName;
				if (!inputNameMatches) {
					continue;
				}

				replaceWithinSpan(
					content,
					edits,
					input.keySpan,
					[operation.from, currentCamelName],
					(searchValue) => (searchValue.includes("-") ? operation.to : nextCamelName),
					`prop ${operation.from} -> ${operation.to}`,
					operation.id,
				);
			}
		}

		for (const child of node.children ?? []) {
			visitNode(child);
		}
	};

	for (const node of parsed.nodes ?? []) {
		visitNode(node);
	}

	for (const error of parsed.errors ?? []) {
		diagnostics.push({
			code: DiagnosticCode.PARSE_FAILED,
			severity: "error",
			message: error.message,
			operationId: operation.id,
			filePath,
			start: error.span?.start?.offset,
			end: error.span?.end?.offset,
			suggestion: "Fix the malformed Angular template before running the migration.",
		});
	}

	return { edits, diagnostics };
}

/**
 * Migrate prop names in an Angular HTML template string.
 * Returns the updated content, or null if nothing changed.
 *
 * @param {string} content
 * @param {string} filePath
 * @param {import('../update-v40/index').Operation[]} operations
 * @returns {string | null}
 */
function migrateTemplateContent(content, filePath, operations) {
	const replacements = [];

	for (const operation of operations) {
		const analysis = analyseTemplateContent(content, filePath, operation);
		for (const edit of analysis.edits) {
			replacements.push(edit);
		}
		if (analysis.diagnostics.length > 0) {
			return null;
		}
	}

	if (replacements.length === 0) {
		return null;
	}

	const updatedContent = applyReplacements(content, replacements);
	return updatedContent === content ? null : updatedContent;
}

module.exports = { analyseTemplateContent, migrateTemplateContent };
