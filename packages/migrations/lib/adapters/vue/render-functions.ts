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
import {
	createSingleFileProgram,
	createSourceFile,
	getNodeLocation,
} from "../shared/ts.js";
import type { VueImportResolution } from "./imports.js";

interface SourcePosition {
	start: number;
	end: number;
}

const getPropertyNameText = (
	property: ts.ObjectLiteralElementLike,
): { name: string; node: ts.Node } | null => {
	if (ts.isPropertyAssignment(property)) {
		const nameNode = property.name;
		if (ts.isIdentifier(nameNode) || ts.isStringLiteral(nameNode)) {
			return { name: nameNode.text, node: nameNode };
		}
		return null;
	}

	if (ts.isShorthandPropertyAssignment(property)) {
		return { name: property.name.text, node: property.name };
	}

	return null;
};

const isTargetComponentArgument = (
	argument: ts.Expression,
	isOfficialWrapperComponent: (tagName: ts.JsxTagNameExpression) => boolean,
	componentTagName: string,
): boolean => {
	if (ts.isIdentifier(argument)) {
		return isOfficialWrapperComponent(argument);
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

const isImportedVueRenderHelper = (
	callee: ts.Identifier,
	checker: ts.TypeChecker,
): boolean => {
	const symbol = checker.getSymbolAtLocation(callee);
	if (!symbol) {
		return false;
	}

	const declarations = symbol.getDeclarations();
	if (!declarations || declarations.length === 0) {
		return false;
	}

	const declaration = declarations[0];
	if (!declaration || !ts.isImportSpecifier(declaration)) {
		return false;
	}

	const importedName = declaration.propertyName?.text ?? declaration.name.text;
	if (importedName !== "h" && importedName !== "createVNode") {
		return false;
	}

	const importDeclaration = declaration.parent.parent.parent;
	if (!ts.isImportDeclaration(importDeclaration)) {
		return false;
	}

	const moduleSpecifier = importDeclaration.moduleSpecifier;
	if (!ts.isStringLiteral(moduleSpecifier) || moduleSpecifier.text !== "vue") {
		return false;
	}

	return true;
};

interface PropsObjectValidationResult {
	valid: boolean;
	sourceProperty: ts.ObjectLiteralElementLike | null;
	targetProperty: ts.ObjectLiteralElementLike | null;
	firstUnsupportedNode?: ts.Node;
}

const validatePropsObject = (
	propsObject: ts.ObjectLiteralExpression,
	currentPropName: string,
	nextPropName: string,
): PropsObjectValidationResult => {
	let firstUnsupportedNode: ts.Node | undefined;
	let sourceProperty: ts.ObjectLiteralElementLike | null = null;
	let targetProperty: ts.ObjectLiteralElementLike | null = null;
	let sourceCount = 0;
	let targetCount = 0;

	for (const property of propsObject.properties) {
		if (ts.isSpreadAssignment(property)) {
			firstUnsupportedNode ??= property;
			continue;
		}

		const nameInfo = getPropertyNameText(property);
		if (!nameInfo) {
			firstUnsupportedNode ??= property;
			continue;
		}

		const { name, node } = nameInfo;
		if (name === currentPropName) {
			sourceProperty = property;
			sourceCount += 1;
		}

		if (name === nextPropName) {
			targetProperty = property;
			targetCount += 1;
		}
	}

	if (sourceCount > 1 || targetCount > 1 || firstUnsupportedNode) {
		return {
			valid: false,
			sourceProperty,
			targetProperty,
			firstUnsupportedNode,
		};
	}

	return {
		valid: true,
		sourceProperty,
		targetProperty,
	};
};

const buildPropertyEdit = (
	sourceProperty: ts.ObjectLiteralElementLike,
	sourceFile: ts.SourceFile,
	currentPropName: string,
	nextPropName: string,
	operationId: string,
): TextEdit | null => {
	if (ts.isShorthandPropertyAssignment(sourceProperty)) {
		const { start, end } = getNodeLocation(sourceProperty.name, sourceFile);
		return {
			start,
			end,
			replacement: `${nextPropName}: ${currentPropName}`,
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
			const replacement = quote ? `${quote}${nextPropName}${quote}` : nextPropName;
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

export const analyseRenderFunctions = (
	filePath: string,
	content: string,
	baseRevision: number,
	step: RenamePropStepDefinition,
	imports: VueImportResolution,
	sourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
): FileAnalysis | null => {
	const { operation } = step;
	const componentTagName = operation.component;

	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const collectParseDiagnostics = (): void => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const syntacticDiagnostics = (sourceFile as any).parseDiagnostics as
			| ts.Diagnostic[]
			| undefined;
		if (!syntacticDiagnostics || syntacticDiagnostics.length === 0) {
			return;
		}

		for (const diagnostic of syntacticDiagnostics) {
			const start =
				diagnostic.start !== undefined
					? diagnostic.start
					: undefined;
			const length =
				diagnostic.length !== undefined ? diagnostic.length : undefined;
			diagnostics.push({
				code: DiagnosticCode.PARSE_FAILED,
				severity: "error",
				message: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
				operationId: operation.id,
				filePath,
				start,
				end:
					start !== undefined && length !== undefined
						? start + length
						: undefined,
			});
		}
	};

	collectParseDiagnostics();

	if (diagnostics.length > 0) {
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

	const visit = (node: ts.Node): void => {
		if (!ts.isCallExpression(node) || !ts.isIdentifier(node.expression)) {
			ts.forEachChild(node, visit);
			return;
		}

		const callee = node.expression;
		if (!isImportedVueRenderHelper(callee, checker)) {
			ts.forEachChild(node, visit);
			return;
		}

		const [componentArgument, propsArgument] = node.arguments;
		if (
			!componentArgument ||
			!isTargetComponentArgument(
				componentArgument,
				imports.isOfficialWrapperComponent,
				componentTagName,
			) ||
			!propsArgument ||
			!ts.isObjectLiteralExpression(propsArgument)
		) {
			ts.forEachChild(node, visit);
			return;
		}

		const validation = validatePropsObject(
			propsArgument,
			currentPropName,
			nextPropName,
		);

		const sourceProperty = validation.sourceProperty;
		const hasExplicitConflict =
			sourceProperty !== null && validation.targetProperty !== null;
		const hasUnsupportedShape = !validation.valid;

		if (hasExplicitConflict) {
			const { start, end } = getNodeLocation(
				getPropertyNameText(sourceProperty)?.node ?? sourceProperty,
				sourceFile,
			);
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
		}

		if (hasUnsupportedShape) {
			const locationNode =
				validation.firstUnsupportedNode ??
				validation.sourceProperty ??
				validation.targetProperty ??
				propsArgument;
			const { start, end } = getNodeLocation(locationNode, sourceFile);
			diagnostics.push({
				code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
				severity: "warning",
				message: `Cannot safely migrate render props object because it contains an unsupported property shape.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Use simple non-computed property assignments or shorthand properties only.",
			});
		}

		if (hasExplicitConflict || hasUnsupportedShape || !sourceProperty) {
			ts.forEachChild(node, visit);
			return;
		}

		const edit = buildPropertyEdit(
			sourceProperty,
			sourceFile,
			currentPropName,
			nextPropName,
			operation.id,
		);
		if (edit) {
			edits.push(edit);
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
