import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { kebabToCamelCase } from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import { inspectJsxSpread } from "../shared/jsx-spreads.js";
import { getNodeLocation } from "../shared/ts.js";
import type { VueImportResolution } from "./imports.js";

interface ElementSpreadAnalysis {
	sourceAttribute: ts.JsxAttribute | null;
	directTargetRange?: { start: number; end: number };
	inlineSpreadSourceCount: number;
	inlineSpreadTargetCount: number;
	inlineSourceEdits: TextEdit[];
	hasUnsafeSpread: boolean;
}

const buildInlineObjectPropertyEdit = (
	sourceProperty: ts.ObjectLiteralElementLike,
	sourceFile: ts.SourceFile,
	nextPropName: string,
	operationId: string,
): TextEdit | null => {
	if (ts.isShorthandPropertyAssignment(sourceProperty)) {
		const { start, end } = getNodeLocation(sourceProperty.name, sourceFile);
		return {
			start,
			end,
			replacement: `${nextPropName}: ${sourceProperty.name.text}`,
			operationId,
		};
	}

	if (ts.isPropertyAssignment(sourceProperty)) {
		const nameNode = sourceProperty.name;
		if (ts.isIdentifier(nameNode) || ts.isStringLiteral(nameNode)) {
			const { start, end } = getNodeLocation(nameNode, sourceFile);
			const rawName = nameNode.getText(sourceFile);
			const quote =
				rawName.length >= 2 &&
				(rawName.startsWith('"') || rawName.startsWith("'"))
					? rawName[0]
					: "";
			const replacement = quote
				? `${quote}${nextPropName}${quote}`
				: nextPropName;
			return {
				start,
				end,
				replacement,
				operationId,
			};
		}
	}

	return null;
};

export const analyseJsxFile = (
	filePath: string,
	content: string,
	baseRevision: number,
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
		const elementAnalysis: ElementSpreadAnalysis = {
			sourceAttribute: null,
			inlineSpreadSourceCount: 0,
			inlineSpreadTargetCount: 0,
			inlineSourceEdits: [],
			hasUnsafeSpread: false,
		};

		for (const attribute of node.attributes.properties) {
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
			} else if (ts.isJsxSpreadAttribute(attribute)) {
				const inspection = inspectJsxSpread(
					attribute.expression,
					currentPropName,
					nextPropName,
				);

				if (inspection.kind === "object") {
					const sourceCount = inspection.sourceProperties.length;
					const targetCount = inspection.targetProperties.length;

					if (sourceCount > 1 || targetCount > 1) {
						elementAnalysis.hasUnsafeSpread = true;
						continue;
					}

					if (sourceCount === 1) {
						elementAnalysis.inlineSpreadSourceCount += 1;
					}

					if (targetCount === 1) {
						elementAnalysis.inlineSpreadTargetCount += 1;
					}

					if (sourceCount === 1 && targetCount === 0) {
						const edit = buildInlineObjectPropertyEdit(
							inspection.sourceProperties[0],
							sourceFile,
							nextPropName,
							operation.id,
						);
						if (edit) {
							elementAnalysis.inlineSourceEdits.push(edit);
						}
					}
				} else if (inspection.kind === "identifier") {
					// Identifier spreads are not resolved for Vue JSX; treat them
					// as unknown shapes because their contents are not visible here.
					elementAnalysis.hasUnsafeSpread = true;
				} else {
					elementAnalysis.hasUnsafeSpread = true;
				}
			}
		}

		const sourceRange = elementAnalysis.sourceAttribute
			? getNodeLocation(elementAnalysis.sourceAttribute.name, sourceFile)
			: undefined;

		const projectedProviderCount =
			Number(sourceRange !== undefined) +
			Number(elementAnalysis.directTargetRange !== undefined) +
			elementAnalysis.inlineSpreadSourceCount +
			elementAnalysis.inlineSpreadTargetCount;

		const wouldMigrateSource =
			sourceRange !== undefined || elementAnalysis.inlineSpreadSourceCount > 0;

		if (projectedProviderCount > 1 && wouldMigrateSource) {
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

		if (elementAnalysis.hasUnsafeSpread) {
			diagnostics.push({
				code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
				severity: "warning",
				message: `Cannot safely migrate inline spread because its shape is not fully known.`,
				operationId: operation.id,
				filePath,
				start: node.getStart(sourceFile),
				end: node.getEnd(),
				suggestion:
					"Inline the property explicitly or use a const object with simple property assignments.",
			});
		}

		if (!elementAnalysis.hasUnsafeSpread) {
			edits.push(...elementAnalysis.inlineSourceEdits);
		}

		if (sourceRange && !elementAnalysis.hasUnsafeSpread) {
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
			kind: "modify",
			filePath,
			baseRevision,
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
		kind: "modify",
		filePath,
		baseRevision,
		content,
		edits,
		changes: [`prop ${currentPropName} -> ${nextPropName}`],
		diagnostics,
	};
};
