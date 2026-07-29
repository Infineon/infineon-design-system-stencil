import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import {
	kebabToCamelCase,
	tagNameToReactComponentName,
} from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import type { VueImportResolution } from "./imports.js";

const VUE_RENDER_FUNCTION_NAMES = new Set(["h", "createVNode"]);

interface SourcePosition {
	start: number;
	end: number;
}

const createSourceFile = (filePath: string, content: string): ts.SourceFile =>
	ts.createSourceFile(
		filePath,
		content,
		ts.ScriptTarget.Latest,
		true,
		filePath.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
	);

const getNodeLocation = (node: ts.Node, sourceFile: ts.SourceFile): SourcePosition => ({
	start: node.getStart(sourceFile),
	end: node.getEnd(),
});

const isTargetComponentArgument = (
	argument: ts.Expression,
	targetComponentNames: Set<string>,
	componentTagName: string,
): boolean => {
	if (ts.isIdentifier(argument) && targetComponentNames.has(argument.text)) {
		return true;
	}

	if (
		ts.isStringLiteral(argument) &&
		(argument.text === componentTagName ||
			argument.text === tagNameToReactComponentName(componentTagName))
	) {
		return true;
	}

	return false;
};

export const analyseRenderFunctions = (
	filePath: string,
	content: string,
	baseRevision: number,
	step: RenamePropStepDefinition,
	imports: VueImportResolution,
): FileAnalysis | null => {
	const { operation } = step;
	const targetComponentNames = new Set<string>(imports.localNames);
	const componentTagName = operation.component;

	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const sourceFile = createSourceFile(filePath, content);
	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const visit = (node: ts.Node): void => {
		if (
			!ts.isCallExpression(node) ||
			!ts.isIdentifier(node.expression) ||
			!VUE_RENDER_FUNCTION_NAMES.has(node.expression.text)
		) {
			ts.forEachChild(node, visit);
			return;
		}

		const [componentArgument, propsArgument] = node.arguments;
		if (
			!componentArgument ||
			!isTargetComponentArgument(
				componentArgument,
				targetComponentNames,
				componentTagName,
			) ||
			!propsArgument ||
			!ts.isObjectLiteralExpression(propsArgument)
		) {
			ts.forEachChild(node, visit);
			return;
		}

		let sourceProperty:
			| ts.PropertyAssignment
			| ts.ShorthandPropertyAssignment
			| null = null;
		let hasTargetConflict = false;

		for (const property of propsArgument.properties) {
			if (ts.isPropertyAssignment(property)) {
				if (
					ts.isIdentifier(property.name) &&
					property.name.text === currentPropName
				) {
					sourceProperty = property;
				}

				if (
					ts.isIdentifier(property.name) &&
					property.name.text === nextPropName
				) {
					hasTargetConflict = true;
				}
			} else if (ts.isShorthandPropertyAssignment(property)) {
				if (property.name.text === currentPropName) {
					sourceProperty = property;
				}

				if (property.name.text === nextPropName) {
					hasTargetConflict = true;
				}
			}
		}

		if (!sourceProperty) {
			ts.forEachChild(node, visit);
			return;
		}

		const { start, end } = getNodeLocation(sourceProperty.name, sourceFile);

		if (hasTargetConflict) {
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists in the render props object.`,
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

		if (ts.isShorthandPropertyAssignment(sourceProperty)) {
			edits.push({
				start,
				end,
				replacement: `${nextPropName}: ${currentPropName}`,
				operationId: operation.id,
			});
		} else {
			edits.push({
				start,
				end,
				replacement: nextPropName,
				operationId: operation.id,
			});
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);

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
