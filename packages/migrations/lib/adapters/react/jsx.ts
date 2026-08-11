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
import type { ReactImportResolution } from "./imports.js";

export const analyseJsxFile = (
	filePath: string,
	content: string,
	step: RenamePropStepDefinition,
	imports: ReactImportResolution,
	sourceFile: ts.SourceFile,
	_checker: ts.TypeChecker,
): FileAnalysis | null => {
	const { operation } = step;
	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

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
		const attributes = node.attributes.properties;
		let sourceAttribute: ts.JsxAttribute | null = null;
		let hasTargetConflict = false;

		for (const attribute of attributes) {
			if (!ts.isJsxAttribute(attribute)) {
				continue;
			}

			const attributeNameNode = attribute.name;
			if (!ts.isIdentifier(attributeNameNode)) {
				continue;
			}

			const attributeName = attributeNameNode.text;
			if (attributeName === currentPropName) {
				sourceAttribute = attribute;
			}

			if (attributeName === nextPropName) {
				hasTargetConflict = true;
			}
		}

		if (!sourceAttribute) {
			ts.forEachChild(node, visit);
			return;
		}

		const { start, end } = getNodeLocation(sourceAttribute.name, sourceFile);

		if (hasTargetConflict) {
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists on ${componentName}.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});
			ts.forEachChild(node, visit);
			return;
		}

		edits.push({
			start,
			end,
			replacement: nextPropName,
			operationId: operation.id,
		});

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);

	if (edits.length === 0 && diagnostics.length === 0) {
		return null;
	}

	return {
		kind: "modify",
		filePath,
		content,
		edits,
		changes: [`prop ${currentPropName} -> ${nextPropName}`],
		diagnostics,
	};
};
