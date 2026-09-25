import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { kebabToCamelCase } from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import { getNodeLocation } from "../shared/ts.js";
import type { VueImportResolution } from "./imports.js";

interface ElementAnalysis {
	sourceAttribute: ts.JsxAttribute | null;
	directTargetRange?: { start: number; end: number };
	opaqueProvider?: ts.JsxSpreadAttribute;
}

export const analyseJsxFile = (
	filePath: string,
	content: string,
	step: RenamePropStepDefinition,
	imports: VueImportResolution,
	sourceFile: ts.SourceFile,
	_checker: ts.TypeChecker,
): FileAnalysis | null => {
	const { operation } = step;
	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];
	let hasProjectedConflict = false;

	const visit = (node: ts.Node): void => {
		if (!ts.isJsxOpeningElement(node) && !ts.isJsxSelfClosingElement(node)) {
			ts.forEachChild(node, visit);
			return;
		}

		if (!imports.isOfficialWrapperComponent(node.tagName)) {
			ts.forEachChild(node, visit);
			return;
		}

		const componentName = node.tagName.getText(sourceFile);
		const elementAnalysis: ElementAnalysis = {
			sourceAttribute: null,
		};

		for (const attribute of node.attributes.properties) {
			if (ts.isJsxSpreadAttribute(attribute)) {
				elementAnalysis.opaqueProvider ??= attribute;
				continue;
			}
			if (ts.isJsxAttribute(attribute)) {
				const attributeNameNode = attribute.name;
				if (!ts.isIdentifier(attributeNameNode)) {
					continue;
				}

				const attributeName = attributeNameNode.text;
				if (attributeName === currentPropName) {
					elementAnalysis.sourceAttribute = attribute;
				}

				if (attributeName === nextPropName) {
					elementAnalysis.directTargetRange = getNodeLocation(
						attributeNameNode,
						sourceFile,
					);
				}
			}
		}

		const sourceRange = elementAnalysis.sourceAttribute
			? getNodeLocation(elementAnalysis.sourceAttribute.name, sourceFile)
			: undefined;

		const wouldMigrateSource = sourceRange !== undefined;

		if (elementAnalysis.directTargetRange !== undefined && wouldMigrateSource) {
			hasProjectedConflict = true;
			const range = sourceRange ??
				elementAnalysis.directTargetRange ?? {
					start: node.getStart(sourceFile),
					end: node.getEnd(),
				};
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists on ${componentName}.`,
				operationId: operation.id,
				filePath,
				start: range.start,
				end: range.end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});
			ts.forEachChild(node, visit);
			return;
		}

		if (elementAnalysis.opaqueProvider) {
			const { start, end } = getNodeLocation(
				elementAnalysis.opaqueProvider,
				sourceFile,
			);
			diagnostics.push({
				code: DiagnosticCode.OPAQUE_PROP_PROVIDER,
				severity: "warning",
				message: `Props for ${componentName} are supplied dynamically; verify whether "${currentPropName}" is also present in the dynamic provider.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion: "Verify the renamed prop in the dynamic provider.",
			});
		}

		if (sourceRange) {
			edits.push({
				start: sourceRange.start,
				end: sourceRange.end,
				replacement: nextPropName,
				operationId: operation.id,
			});
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);

	if (hasProjectedConflict) {
		return {
			filePath,
			content,
			edits: [],
			changes: [],
			diagnostics,
		};
	}

	if (edits.length === 0 && diagnostics.length === 0) {
		return null;
	}

	return {
		filePath,
		content,
		edits,
		changes: [`prop ${currentPropName} -> ${nextPropName}`],
		diagnostics,
	};
};
