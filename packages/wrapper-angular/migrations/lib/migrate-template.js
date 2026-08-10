const { parseTemplate } = require("@angular/compiler");

const { DiagnosticCode } = require("./diagnostic-codes.js");
const { kebabToCamelCase, pushReplacement, applyReplacements } = require("./replacements");

// BindingType.TwoWay = 5 in @angular/compiler (Angular 17+)
const BINDING_TYPE_TWO_WAY = 5;

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

/**
 * Recurse into all child nodes, including Angular 17+ control-flow block children
 * (@if branches, @for empty, @switch cases, @defer sub-blocks).
 *
 * @param {object} node
 * @param {(node: object) => void} visitor
 */
function visitAllChildren(node, visitor) {
	for (const child of node.children ?? []) visitor(child);
	for (const branch of node.branches ?? []) visitAllChildren(branch, visitor);
	for (const case_ of node.cases ?? []) visitAllChildren(case_, visitor);
	if (node.empty) visitAllChildren(node.empty, visitor);
	if (node.placeholder) visitAllChildren(node.placeholder, visitor);
	if (node.loading) visitAllChildren(node.loading, visitor);
	if (node.error) visitAllChildren(node.error, visitor);
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

	const fromCamel = kebabToCamelCase(operation.from);
	const toCamel = kebabToCamelCase(operation.to);

	const visitNode = (node) => {
		if (typeof node.name === "string" && node.startSourceSpan) {
			if (node.name !== operation.component) {
				visitAllChildren(node, visitNode);
				return;
			}

			// Check for two-way bindings on the from/to properties (DDS010).
			// Only suppress when the two-way binding concerns this operation's source or target.
			const twoWayOnRelevant = (node.inputs ?? []).filter(
				(input) =>
					input.type === BINDING_TYPE_TWO_WAY &&
					(input.name === operation.from ||
						input.name === fromCamel ||
						input.name === operation.to ||
						input.name === toCamel),
			);

			if (twoWayOnRelevant.length > 0) {
				for (const input of twoWayOnRelevant) {
					diagnostics.push({
						code: DiagnosticCode.UNSUPPORTED_ANGULAR_BINDING,
						severity: "warning",
						message: `Two-way binding on "${input.name}" cannot be migrated automatically from "${operation.from}" to "${operation.to}".`,
						operationId: operation.id,
						filePath,
						start: input.sourceSpan?.start?.offset,
						end: input.sourceSpan?.end?.offset,
						suggestion: "Manually convert the two-way binding.",
					});
				}
				visitAllChildren(node, visitNode);
				return;
			}

			// Collect from-side and to-side providers to detect conflicts.
			const fromAttributes = (node.attributes ?? []).filter((attr) => attr.name === operation.from);
			const fromInputs = (node.inputs ?? []).filter(
				(input) => input.name === operation.from || input.name === fromCamel,
			);
			const toAttributes = (node.attributes ?? []).filter(
				(attr) => attr.name === operation.to || attr.name === toCamel,
			);
			const toInputs = (node.inputs ?? []).filter(
				(input) => input.name === operation.to || input.name === toCamel,
			);

			const fromCount = fromAttributes.length + fromInputs.length;
			const toCount = toAttributes.length + toInputs.length;

			if (fromCount > 0 && toCount > 0) {
				// Both source and target are present on the same element.
				diagnostics.push({
					code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
					severity: "error",
					message: `Both "${operation.from}" and "${operation.to}" are present on <${node.name}>. Cannot migrate automatically.`,
					operationId: operation.id,
					filePath,
					start: node.startSourceSpan?.start?.offset,
					end: node.startSourceSpan?.end?.offset,
					suggestion: `Remove the "${operation.to}" attribute before running the migration.`,
				});
				visitAllChildren(node, visitNode);
				return;
			}

			if (fromCount > 1) {
				// The same source property is bound multiple ways (e.g., static + bound).
				diagnostics.push({
					code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
					severity: "error",
					message: `"${operation.from}" appears as both an attribute and a binding on <${node.name}>. Cannot migrate automatically.`,
					operationId: operation.id,
					filePath,
					start: node.startSourceSpan?.start?.offset,
					end: node.startSourceSpan?.end?.offset,
					suggestion: `Remove the duplicate "${operation.from}" binding before running the migration.`,
				});
				visitAllChildren(node, visitNode);
				return;
			}

			// Perform the rename.
			for (const attribute of node.attributes ?? []) {
				if (attribute.name !== operation.from) {
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
				const inputNameMatches = input.name === operation.from || input.name === fromCamel;
				if (!inputNameMatches) {
					continue;
				}

				const nextCamelName = toCamel;
				replaceWithinSpan(
					content,
					edits,
					input.keySpan,
					[operation.from, fromCamel],
					(searchValue) => (searchValue.includes("-") ? operation.to : nextCamelName),
					`prop ${operation.from} -> ${operation.to}`,
					operation.id,
				);
			}
		}

		visitAllChildren(node, visitNode);
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
 * @param {import('../releases/v40/index').Operation[]} operations
 * @returns {string | null}
 */
function migrateTemplateContent(content, filePath, operations) {
	const replacements = [];

	for (const operation of operations) {
		const analysis = analyseTemplateContent(content, filePath, operation);
		for (const edit of analysis.edits) {
			replacements.push(edit);
		}
		if (analysis.diagnostics.some((d) => d.severity === "error")) {
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
