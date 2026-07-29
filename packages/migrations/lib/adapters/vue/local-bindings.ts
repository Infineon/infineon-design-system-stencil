import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { kebabToCamelCase } from "../../core/naming.js";
import type {
	MigrationDiagnostic,
	RenamePropOperation,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import { getNodeLocation } from "../shared/ts.js";
import type { VueTemplateCollection } from "./template.js";

interface ObjectShapeValidation {
	valid: boolean;
	firstUnsupportedNode?: ts.Node;
}

interface PropertyNameInfo {
	name: string;
	node: ts.Node;
	isQuoted: boolean;
}

export interface ObjectPropertyMatch {
	property: ts.ObjectLiteralElementLike;
	nameNode: ts.Identifier | ts.StringLiteral;
	rawName: string;
	normalizedName: string;
}

export interface ResolvedLocalBinding {
	declaration: ts.VariableDeclaration;
	objectLiteral: ts.ObjectLiteralExpression;
	identifier: string;
	sourceProperty: ObjectPropertyMatch | null;
	targetProperty: ObjectPropertyMatch | null;
	hasSourceProp: boolean;
	hasTargetProp: boolean;
	shapeValid: boolean;
	firstUnsupportedShapeNode?: ts.Node;
	isConst: boolean;
	isExported: boolean;
	editable: boolean;
}

export interface TemplateBindingUsage {
	elementIndex: number;
	identifier: string;
	binding: ResolvedLocalBinding | null;
	shadowed: boolean;
	argumentlessRange: { start: number; end: number };
}

export interface LocalBindingAnalysis {
	bindings: ResolvedLocalBinding[];
	usages: TemplateBindingUsage[];
	diagnostics: MigrationDiagnostic[];
}

type TemplateIdentifierOrigin =
	| { kind: "local"; binding: ResolvedLocalBinding }
	| { kind: "import"; declaration: ts.Declaration }
	| { kind: "helper"; declaration: ts.Declaration }
	| { kind: "parameter"; declaration: ts.Declaration }
	| { kind: "unknown" };

const unwrapObjectLiteral = (
	node: ts.Expression,
): ts.ObjectLiteralExpression | null => {
	let current: ts.Node = node;

	while (true) {
		if (ts.isObjectLiteralExpression(current)) {
			return current;
		}

		if (ts.isParenthesizedExpression(current)) {
			current = current.expression;
			continue;
		}

		if (ts.isAsExpression(current)) {
			current = current.expression;
			continue;
		}

		if (ts.isTypeAssertionExpression(current)) {
			current = current.expression;
			continue;
		}

		if (ts.isSatisfiesExpression(current)) {
			current = current.expression;
			continue;
		}

		return null;
	}
};

const getPropertyNameInfo = (
	property: ts.ObjectLiteralElementLike,
): PropertyNameInfo | null => {
	if (ts.isPropertyAssignment(property)) {
		const nameNode = property.name;
		if (ts.isIdentifier(nameNode) || ts.isStringLiteral(nameNode)) {
			return {
				name: nameNode.text,
				node: nameNode,
				isQuoted: ts.isStringLiteral(nameNode),
			};
		}
		return null;
	}

	if (ts.isShorthandPropertyAssignment(property)) {
		return {
			name: property.name.text,
			node: property.name,
			isQuoted: false,
		};
	}

	return null;
};

const normalizePropertyName = (name: string): string =>
	kebabToCamelCase(name);

const validateObjectShape = (
	objectLiteral: ts.ObjectLiteralExpression,
): ObjectShapeValidation => {
	let firstUnsupportedNode: ts.Node | undefined;

	for (const property of objectLiteral.properties) {
		if (ts.isSpreadAssignment(property)) {
			firstUnsupportedNode ??= property;
			continue;
		}

		if (
			ts.isMethodDeclaration(property) ||
			ts.isGetAccessorDeclaration(property) ||
			ts.isSetAccessorDeclaration(property)
		) {
			firstUnsupportedNode ??= property;
			continue;
		}

		const nameInfo = getPropertyNameInfo(property);
		if (!nameInfo) {
			firstUnsupportedNode ??= property;
		}
	}

	if (firstUnsupportedNode) {
		return { valid: false, firstUnsupportedNode };
	}

	return { valid: true };
};

const collectSourceAndTargetProperties = (
	objectLiteral: ts.ObjectLiteralExpression,
	currentPropName: string,
	nextPropName: string,
): {
	sourceProperty: ObjectPropertyMatch | null;
	targetProperty: ObjectPropertyMatch | null;
	sourceCount: number;
	targetCount: number;
} => {
	let sourceProperty: ObjectPropertyMatch | null = null;
	let targetProperty: ObjectPropertyMatch | null = null;
	let sourceCount = 0;
	let targetCount = 0;

	for (const property of objectLiteral.properties) {
		const nameInfo = getPropertyNameInfo(property);
		if (!nameInfo) {
			continue;
		}

		const normalized = normalizePropertyName(nameInfo.name);
		const rawName = nameInfo.node.getText(objectLiteral.getSourceFile());
		const match: ObjectPropertyMatch = {
			property,
			nameNode: nameInfo.node as ts.Identifier | ts.StringLiteral,
			rawName,
			normalizedName: normalized,
		};

		if (normalized === currentPropName) {
			sourceProperty = match;
			sourceCount += 1;
		}

		if (normalized === nextPropName) {
			targetProperty = match;
			targetCount += 1;
		}
	}

	return { sourceProperty, targetProperty, sourceCount, targetCount };
};

const isExportedDeclaration = (declaration: ts.VariableDeclaration): boolean => {
	let current: ts.Node = declaration;
	while (current) {
		if (ts.isVariableStatement(current)) {
			return (
				current.modifiers?.some(
					(modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
				) ?? false
			);
		}
		current = current.parent;
	}
	return false;
};

const isConstDeclaration = (declaration: ts.VariableDeclaration): boolean => {
	let current: ts.Node = declaration;
	while (current) {
		if (ts.isVariableStatement(current)) {
			return (current.declarationList.flags & ts.NodeFlags.Const) !== 0;
		}
		current = current.parent;
	}
	return false;
};

const buildBindingWarning = (
	binding: ResolvedLocalBinding,
	filePath: string,
	scriptOffset: number,
	operationId: string,
): MigrationDiagnostic | null => {
	const reasons: string[] = [];
	if (!binding.isConst) reasons.push("the binding is mutable");
	if (binding.isExported) reasons.push("it is exported");
	if (!binding.shapeValid) reasons.push("it contains an unsupported property shape");

	if (reasons.length === 0) {
		return null;
	}

	const locationNode =
		binding.firstUnsupportedShapeNode ?? binding.declaration.name;
	const { start, end } = getNodeLocation(
		locationNode,
		binding.declaration.getSourceFile(),
	);

	const reasonText =
		reasons.length === 1
			? reasons[0]
			: `${reasons.slice(0, -1).join(", ")} and ${reasons[reasons.length - 1]}`;

	return {
		code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
		severity: "warning",
		message: `Cannot safely migrate local prop object "${binding.identifier}" because ${reasonText}.`,
		operationId,
		filePath,
		start: start + scriptOffset,
		end: end + scriptOffset,
		suggestion:
			"Use a const object with simple property assignments that is only bound to compatible target components.",
	};
};

export const resolveLocalBindings = (
	sourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
	step: RenamePropStepDefinition,
	scriptOffset: number,
	filePath: string,
): { bindings: ResolvedLocalBinding[]; diagnostics: MigrationDiagnostic[] } => {
	const { operation } = step;
	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const bindings: ResolvedLocalBinding[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const visit = (node: ts.Node): void => {
		if (!ts.isVariableStatement(node)) {
			ts.forEachChild(node, visit);
			return;
		}

		const isConst =
			(node.declarationList.flags & ts.NodeFlags.Const) !== 0;
		const isExported =
			node.modifiers?.some(
				(modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
			) ?? false;

		for (const declaration of node.declarationList.declarations) {
			if (
				!ts.isIdentifier(declaration.name) ||
				!declaration.initializer
			) {
				continue;
			}

			const objectLiteral = unwrapObjectLiteral(declaration.initializer);
			if (!objectLiteral) {
				continue;
			}

			const shape = validateObjectShape(objectLiteral);
			const {
				sourceProperty,
				targetProperty,
				sourceCount,
				targetCount,
			} = collectSourceAndTargetProperties(
				objectLiteral,
				currentPropName,
				nextPropName,
			);

			const hasDuplicateKeys = sourceCount > 1 || targetCount > 1;
			const shapeValid = shape.valid && !hasDuplicateKeys;
			const firstUnsupportedShapeNode =
				sourceCount > 1 || targetCount > 1
					? objectLiteral.properties[0]
					: shape.firstUnsupportedNode;

			const editable =
				isConst && !isExported && shapeValid && sourceCount === 1;

			const binding: ResolvedLocalBinding = {
				declaration,
				objectLiteral,
				identifier: declaration.name.text,
				sourceProperty,
				targetProperty,
				hasSourceProp: sourceCount > 0,
				hasTargetProp: targetCount > 0,
				shapeValid,
				firstUnsupportedShapeNode,
				isConst,
				isExported,
				editable,
			};

			if (!editable) {
				const warning = buildBindingWarning(
					binding,
					filePath,
					scriptOffset,
					operation.id,
				);
				if (warning) {
					diagnostics.push(warning);
				}
			}

			bindings.push(binding);
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);
	return { bindings, diagnostics };
};

const resolveTemplateIdentifierOrigin = (
	name: string,
	checker: ts.TypeChecker,
	sourceFile: ts.SourceFile,
	resolvedBindings: Map<string, ResolvedLocalBinding>,
): TemplateIdentifierOrigin => {
	const localBinding = resolvedBindings.get(name);
	if (localBinding) {
		return { kind: "local", binding: localBinding };
	}

	const resolveName = (checker as unknown as { resolveName?: (...args: unknown[]) => ts.Symbol | undefined }).resolveName;
	if (typeof resolveName !== "function") {
		return { kind: "unknown" };
	}

	const symbol = resolveName.call(
		checker,
		name,
		sourceFile,
		ts.SymbolFlags.Value,
		false,
	);
	if (!symbol) {
		return { kind: "unknown" };
	}

	const declarations = symbol.getDeclarations();
	if (!declarations || declarations.length === 0) {
		return { kind: "unknown" };
	}

	const declaration = declarations[0];
	if (!declaration) {
		return { kind: "unknown" };
	}

	if (
		ts.isImportSpecifier(declaration) ||
		ts.isImportClause(declaration) ||
		ts.isNamespaceImport(declaration)
	) {
		return { kind: "import", declaration };
	}

	if (ts.isParameter(declaration)) {
		return { kind: "parameter", declaration };
	}

	if (ts.isVariableDeclaration(declaration)) {
		return { kind: "helper", declaration };
	}

	return { kind: "helper", declaration };
};

const createOriginDiagnostic = (
	origin: Exclude<TemplateIdentifierOrigin, { kind: "local" }>,
	filePath: string,
	range: { start: number; end: number },
	identifier: string,
	operation: RenamePropOperation,
): MigrationDiagnostic => {
	if (origin.kind === "import") {
		return {
			code: DiagnosticCode.IMPORTED_PROP_OBJECT_UNSUPPORTED,
			severity: "warning",
			message: `Cannot migrate imported prop object "${identifier}" because its shape is not visible in this file.`,
			operationId: operation.id,
			filePath,
			start: range.start,
			end: range.end,
			suggestion:
				"Update the imported object or inline the property in the template.",
		};
	}

	if (origin.kind === "parameter") {
		return {
			code: DiagnosticCode.HELPER_PROP_OBJECT_UNSUPPORTED,
			severity: "warning",
			message: `Cannot migrate prop object "${identifier}" because it is a parameter.`,
			operationId: operation.id,
			filePath,
			start: range.start,
			end: range.end,
			suggestion:
				"Inline the property in the template or use a local object literal.",
		};
	}

	if (origin.kind === "helper") {
		return {
			code: DiagnosticCode.HELPER_PROP_OBJECT_UNSUPPORTED,
			severity: "warning",
			message: `Cannot migrate prop object "${identifier}" because it is produced outside a local object literal.`,
			operationId: operation.id,
			filePath,
			start: range.start,
			end: range.end,
			suggestion:
				"Inline the property in the template or use a local object literal.",
		};
	}

	return {
		code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
		severity: "warning",
		message: `Cannot migrate prop object "${identifier}" because its origin could not be determined.`,
		operationId: operation.id,
		filePath,
		start: range.start,
		end: range.end,
		suggestion:
			"Inline the property in the template or use a local object literal.",
	};
};

export const analyseTemplateLocalBindings = (
	templateCollection: VueTemplateCollection,
	scriptSourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
	resolvedBindings: ResolvedLocalBinding[],
	step: RenamePropStepDefinition,
	scriptOffset: number,
	filePath: string,
): LocalBindingAnalysis => {
	const { operation } = step;
	const bindingsByName = new Map<string, ResolvedLocalBinding>();
	for (const binding of resolvedBindings) {
		bindingsByName.set(binding.identifier, binding);
	}

	const usages: TemplateBindingUsage[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	for (let elementIndex = 0; elementIndex < templateCollection.elements.length; elementIndex++) {
		const element = templateCollection.elements[elementIndex];
		if (!element.isTarget) {
			continue;
		}

		for (const argumentless of element.argumentlessBindings) {
			const shadowed = element.scopeBindings.has(argumentless.identifier);
			const origin = shadowed
				? { kind: "unknown" as const }
				: resolveTemplateIdentifierOrigin(
						argumentless.identifier,
						checker,
						scriptSourceFile,
						bindingsByName,
				  );

			if (origin.kind === "local") {
				usages.push({
					elementIndex,
					identifier: argumentless.identifier,
					binding: origin.binding,
					shadowed: false,
					argumentlessRange: argumentless.range,
				});
				continue;
			}

			usages.push({
				elementIndex,
				identifier: argumentless.identifier,
				binding: null,
				shadowed,
				argumentlessRange: argumentless.range,
			});

			if (shadowed) {
				diagnostics.push({
					code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
					severity: "warning",
					message: `Cannot migrate prop object "${argumentless.identifier}" because it is shadowed by a template scope binding.`,
					operationId: operation.id,
					filePath,
					start: argumentless.range.start,
					end: argumentless.range.end,
					suggestion:
						"Rename the template scope binding or inline the property explicitly.",
				});
				continue;
			}

			diagnostics.push(
				createOriginDiagnostic(
					origin,
					filePath,
					argumentless.range,
					argumentless.identifier,
					operation,
				),
			);
		}
	}

	return { bindings: resolvedBindings, usages, diagnostics };
};

export const buildDeclarationPropertyEdit = (
	binding: ResolvedLocalBinding,
	sourceFile: ts.SourceFile,
	nextPropName: string,
	operationId: string,
): TextEdit | null => {
	const sourceProperty = binding.sourceProperty;
	if (!sourceProperty) {
		return null;
	}

	const { property, nameNode, rawName } = sourceProperty;

	if (ts.isShorthandPropertyAssignment(property)) {
		const { start, end } = getNodeLocation(nameNode, sourceFile);
		return {
			start,
			end,
			replacement: `${nextPropName}: ${rawName}`,
			operationId,
		};
	}

	if (ts.isPropertyAssignment(property)) {
		const quote =
			rawName.length >= 2 &&
			(rawName.startsWith('"') || rawName.startsWith("'"))
				? rawName[0]
				: "";
		const replacement = quote ? `${quote}${nextPropName}${quote}` : nextPropName;
		const { start, end } = getNodeLocation(nameNode, sourceFile);
		return {
			start,
			end,
			replacement,
			operationId,
		};
	}

	return null;
};
