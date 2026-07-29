import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { kebabToCamelCase } from "../../core/naming.js";
import type {
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";

export interface LocalSpreadAnalysisResult {
	edits: TextEdit[];
	changes: string[];
	diagnostics: MigrationDiagnostic[];
}

interface ConstObjectDeclaration {
	name: string;
	declaration: ts.VariableDeclaration;
	isExported: boolean;
}

const createSourceFile = (
	filePath: string,
	content: string,
): ts.SourceFile =>
	ts.createSourceFile(
		filePath,
		content,
		ts.ScriptTarget.Latest,
		true,
		filePath.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
	);

const collectConstObjectDeclarations = (
	sourceFile: ts.SourceFile,
): ConstObjectDeclaration[] => {
	const result: ConstObjectDeclaration[] = [];

	const visit = (node: ts.Node): void => {
		if (!ts.isVariableStatement(node)) {
			ts.forEachChild(node, visit);
			return;
		}

		const isExported = node.modifiers?.some(
			(modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
		);

		const isConst = (node.declarationList.flags & ts.NodeFlags.Const) !== 0;
		if (!isConst) {
			ts.forEachChild(node, visit);
			return;
		}

		for (const declaration of node.declarationList.declarations) {
			if (
				ts.isIdentifier(declaration.name) &&
				declaration.initializer &&
				ts.isObjectLiteralExpression(declaration.initializer)
			) {
				result.push({
					name: declaration.name.text,
					declaration,
					isExported: Boolean(isExported),
				});
			}
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);
	return result;
};

const isJsxSpreadOnTargetComponent = (
	node: ts.Identifier,
	targetComponentNames: Set<string>,
): boolean => {
	const spreadAttribute = node.parent;
	if (!ts.isJsxSpreadAttribute(spreadAttribute)) {
		return false;
	}

	const attributes = spreadAttribute.parent;
	if (!ts.isJsxAttributes(attributes)) {
		return false;
	}

	const openingElement = attributes.parent;
	if (
		!ts.isJsxOpeningElement(openingElement) &&
		!ts.isJsxSelfClosingElement(openingElement)
	) {
		return false;
	}

	const tagName = openingElement.tagName;
	if (!ts.isIdentifier(tagName)) {
		return false;
	}

	return targetComponentNames.has(tagName.text);
};

interface ReferenceAnalysis {
	supportedSpreadCount: number;
	hasUnsupportedReference: boolean;
	firstUnsupportedNode?: ts.Identifier;
}

const analyseObjectReferences = (
	sourceFile: ts.SourceFile,
	objectName: string,
	declaration: ts.VariableDeclaration,
	targetComponentNames: Set<string>,
): ReferenceAnalysis => {
	let supportedSpreadCount = 0;
	let hasUnsupportedReference = false;
	let firstUnsupportedNode: ts.Identifier | undefined;

	const visit = (node: ts.Node): void => {
		if (
			ts.isIdentifier(node) &&
			node.text === objectName &&
			node !== declaration.name
		) {
			if (isJsxSpreadOnTargetComponent(node, targetComponentNames)) {
				supportedSpreadCount += 1;
			} else {
				hasUnsupportedReference = true;
				firstUnsupportedNode ??= node;
			}
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);

	return {
		supportedSpreadCount,
		hasUnsupportedReference,
		firstUnsupportedNode,
	};
};

const getNodeLocation = (
	node: ts.Node,
	sourceFile: ts.SourceFile,
): { start: number; end: number } => ({
	start: node.getStart(sourceFile),
	end: node.getEnd(),
});

const buildObjectPropertyEdits = (
	sourceFile: ts.SourceFile,
	declaration: ts.VariableDeclaration,
	currentPropName: string,
	nextPropName: string,
	operationId: string,
): Pick<LocalSpreadAnalysisResult, "edits" | "diagnostics"> => {
	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];
	const objectLiteral = declaration.initializer as ts.ObjectLiteralExpression;

	let sourceElement:
		| ts.PropertyAssignment
		| ts.ShorthandPropertyAssignment
		| null = null;
	let hasTargetConflict = false;

	for (const property of objectLiteral.properties) {
		if (ts.isPropertyAssignment(property)) {
			if (
				(ts.isIdentifier(property.name) &&
					property.name.text === currentPropName) ||
				(ts.isStringLiteral(property.name) &&
					property.name.text === currentPropName)
			) {
				sourceElement = property;
			}

			if (
				(ts.isIdentifier(property.name) &&
					property.name.text === nextPropName) ||
				(ts.isStringLiteral(property.name) &&
					property.name.text === nextPropName)
			) {
				hasTargetConflict = true;
			}
		} else if (ts.isShorthandPropertyAssignment(property)) {
			if (property.name.text === currentPropName) {
				sourceElement = property;
			}

			if (property.name.text === nextPropName) {
				hasTargetConflict = true;
			}
		}
	}

	if (!sourceElement) {
		return { edits, diagnostics };
	}

	if (hasTargetConflict) {
		const { start, end } = getNodeLocation(
			sourceElement.name,
			sourceFile,
		);
		diagnostics.push({
			code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
			severity: "error",
			message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists in the local prop object.`,
			operationId,
			filePath: sourceFile.fileName,
			start,
			end,
			suggestion:
				"Remove or rename the conflicting property before running the migration.",
		});
		return { edits, diagnostics };
	}

	const { start, end } = getNodeLocation(sourceElement.name, sourceFile);

	if (ts.isShorthandPropertyAssignment(sourceElement)) {
		edits.push({
			start,
			end,
			replacement: `${nextPropName}: ${currentPropName}`,
			operationId,
		});
	} else {
		edits.push({
			start,
			end,
			replacement: nextPropName,
			operationId,
		});
	}

	return { edits, diagnostics };
};

export const analyseLocalSpreads = (
	filePath: string,
	content: string,
	step: RenamePropStepDefinition,
	targetComponentNames: Set<string>,
): LocalSpreadAnalysisResult => {
	const { operation } = step;
	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);
	const sourceFile = createSourceFile(filePath, content);

	const edits: TextEdit[] = [];
	const changes: string[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const constObjects = collectConstObjectDeclarations(sourceFile);
	if (constObjects.length === 0) {
		return { edits, changes, diagnostics };
	}

	for (const { name: objectName, declaration, isExported } of constObjects) {
		const referenceAnalysis = analyseObjectReferences(
			sourceFile,
			objectName,
			declaration,
			targetComponentNames,
		);

		if (referenceAnalysis.supportedSpreadCount === 0) {
			continue;
		}

		if (isExported) {
			const { start, end } = getNodeLocation(declaration.name, sourceFile);
			diagnostics.push({
				code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
				severity: "warning",
				message: `Cannot safely migrate local prop object "${objectName}" because it is exported.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Move the property to the JSX element or keep the object private to the file.",
			});
			continue;
		}

		if (referenceAnalysis.hasUnsupportedReference) {
			const locationNode =
				referenceAnalysis.firstUnsupportedNode ?? declaration.name;
			const { start, end } = getNodeLocation(locationNode, sourceFile);
			diagnostics.push({
				code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
				severity: "warning",
				message: `Cannot safely migrate local prop object "${objectName}" because it is used outside a supported JSX spread on a target component.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Move the property to the JSX element or refactor the object so it is only spread into target components.",
			});
			continue;
		}

		const propertyResult = buildObjectPropertyEdits(
			sourceFile,
			declaration,
			currentPropName,
			nextPropName,
			operation.id,
		);

		if (propertyResult.diagnostics.length > 0) {
			diagnostics.push(...propertyResult.diagnostics);
		}

		if (propertyResult.edits.length > 0) {
			edits.push(...propertyResult.edits);
			changes.push(`prop ${currentPropName} -> ${nextPropName}`);
		}
	}

	return { edits, changes, diagnostics };
};
