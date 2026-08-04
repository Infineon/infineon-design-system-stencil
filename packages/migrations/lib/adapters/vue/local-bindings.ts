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
import type {
	UnsupportedArgumentlessBinding,
	VueTemplateCollection,
} from "./template.js";

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
	safeToProject: boolean;
	editable: boolean;
}

export interface TemplateBindingUsage {
	elementIndex: number;
	identifier: string;
	resolvedScriptBinding: ResolvedLocalBinding | null;
	scopeResolution: "visible" | "shadowed" | "ambiguous";
	argumentlessRange: { start: number; end: number };
	unsupportedBinding?: UnsupportedArgumentlessBinding | null;
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
		if (ts.isIdentifier(nameNode)) {
			return {
				name: nameNode.text,
				node: nameNode,
				isQuoted: false,
			};
		}
		if (ts.isStringLiteral(nameNode)) {
			return {
				name: nameNode.text,
				node: nameNode,
				isQuoted: true,
			};
		}
		if (ts.isComputedPropertyName(nameNode)) {
			return null;
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

const normalizePropertyNameForRename = (
	name: string,
	currentPropName: string,
	nextPropName: string,
): string => {
	const camel = kebabToCamelCase(name);
	const currentCamel = kebabToCamelCase(currentPropName);
	const nextCamel = kebabToCamelCase(nextPropName);
	if (camel === currentCamel || camel === nextCamel) {
		return camel;
	}
	return name;
};

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

		const normalized = normalizePropertyNameForRename(
			nameInfo.name,
			currentPropName,
			nextPropName,
		);
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

const hasExportSpecifierInScript = (
	declaration: ts.VariableDeclaration,
	scriptSourceFile: ts.SourceFile,
): boolean => {
	if (!ts.isIdentifier(declaration.name)) {
		return false;
	}

	const identifier = declaration.name.text;
	for (const statement of scriptSourceFile.statements) {
		if (
			!ts.isExportDeclaration(statement) ||
			!statement.exportClause ||
			!ts.isNamedExports(statement.exportClause)
		) {
			continue;
		}

		for (const element of statement.exportClause.elements) {
			const localName = element.propertyName?.text ?? element.name.text;
			if (localName === identifier) {
				return true;
			}
		}
	}

	return false;
};

const hasExportSpecifierInOtherScript = (
	declaration: ts.VariableDeclaration,
	otherScriptSourceFile?: ts.SourceFile,
): boolean => {
	if (!otherScriptSourceFile) {
		return false;
	}

	return hasExportSpecifierInScript(declaration, otherScriptSourceFile);
};

const isExportedDeclaration = (
	declaration: ts.VariableDeclaration,
	otherScriptSourceFile?: ts.SourceFile,
): boolean => {
	let current: ts.Node = declaration;
	while (current) {
		if (ts.isVariableStatement(current)) {
			const hasExportModifier =
				current.modifiers?.some(
					(modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword,
				) ?? false;
			if (hasExportModifier) {
				return true;
			}
			break;
		}
		current = current.parent;
	}

	if (hasExportSpecifierInOtherScript(declaration, otherScriptSourceFile)) {
		return true;
	}

	return hasExportSpecifierInScript(declaration, declaration.getSourceFile());
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
	if (!binding.shapeValid)
		reasons.push("it contains an unsupported property shape");

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

const buildDuplicateDeclarationDiagnostic = (
	identifier: string,
	declarations: ts.VariableDeclaration[],
	filePath: string,
	scriptOffset: number,
	operationId: string,
): MigrationDiagnostic => {
	const firstDeclaration = declarations[0];
	const { start, end } = firstDeclaration
		? getNodeLocation(firstDeclaration.name, firstDeclaration.getSourceFile())
		: { start: 0, end: 0 };

	return {
		code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
		severity: "warning",
		message: `Cannot migrate "${identifier}" because it is declared more than once at the top level.`,
		operationId,
		filePath,
		start: start + scriptOffset,
		end: end + scriptOffset,
		suggestion:
			"Use a single top-level const object with simple property assignments.",
	};
};

export const resolveLocalBindings = (
	sourceFile: ts.SourceFile,
	_checker: ts.TypeChecker,
	step: RenamePropStepDefinition,
	scriptOffset: number,
	filePath: string,
	candidateIdentifiers: ReadonlyArray<string>,
	otherScriptSourceFile?: ts.SourceFile,
): { bindings: ResolvedLocalBinding[]; diagnostics: MigrationDiagnostic[] } => {
	const { operation } = step;
	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const bindings: ResolvedLocalBinding[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const declarationsByIdentifier = new Map<string, ts.VariableDeclaration[]>();

	for (const statement of sourceFile.statements) {
		if (!ts.isVariableStatement(statement)) {
			continue;
		}

		const isConst =
			(statement.declarationList.flags & ts.NodeFlags.Const) !== 0;

		for (const declaration of statement.declarationList.declarations) {
			if (!ts.isIdentifier(declaration.name) || !declaration.initializer) {
				continue;
			}

			const identifier = declaration.name.text;

			const isExported = isExportedDeclaration(
				declaration,
				otherScriptSourceFile,
			);

			const list = declarationsByIdentifier.get(identifier) ?? [];
			list.push(declaration);
			declarationsByIdentifier.set(identifier, list);

			const objectLiteral = unwrapObjectLiteral(declaration.initializer);
			if (!objectLiteral) {
				continue;
			}

			const shape = validateObjectShape(objectLiteral);
			const { sourceProperty, targetProperty, sourceCount, targetCount } =
				collectSourceAndTargetProperties(
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

			const safeToProject = isConst && !isExported && shapeValid;
			const editable = safeToProject && sourceCount === 1;

			const binding: ResolvedLocalBinding = {
				declaration,
				objectLiteral,
				identifier,
				sourceProperty,
				targetProperty,
				hasSourceProp: sourceCount > 0,
				hasTargetProp: targetCount > 0,
				shapeValid,
				firstUnsupportedShapeNode,
				isConst,
				isExported,
				safeToProject,
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
	}

	for (const [identifier, declarations] of declarationsByIdentifier) {
		if (declarations.length > 1) {
			diagnostics.push(
				buildDuplicateDeclarationDiagnostic(
					identifier,
					declarations,
					filePath,
					scriptOffset,
					operation.id,
				),
			);
		}
	}

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

	const resolveName = (
		checker as unknown as {
			resolveName?: (...args: unknown[]) => ts.Symbol | undefined;
		}
	).resolveName;
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

const createUnsupportedBindingDiagnostic = (
	unsupported: UnsupportedArgumentlessBinding,
	filePath: string,
	operation: RenamePropOperation,
): MigrationDiagnostic => {
	const range = unsupported.range;
	const expression = unsupported.expression || "the binding";

	if (unsupported.kind === "call") {
		return {
			code: DiagnosticCode.HELPER_PROP_OBJECT_UNSUPPORTED,
			severity: "warning",
			message: `Cannot migrate prop object ${expression} because it is produced by a call or compiler macro.`,
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
		message: `Cannot migrate prop object ${expression} because it is not a simple local identifier.`,
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
	scriptSourceFile: ts.SourceFile | undefined,
	checker: ts.TypeChecker | undefined,
	resolvedBindings: ResolvedLocalBinding[],
	step: RenamePropStepDefinition,
	_scriptOffset: number,
	filePath: string,
): LocalBindingAnalysis => {
	const { operation } = step;
	const bindingsByName = new Map<string, ResolvedLocalBinding>();
	for (const binding of resolvedBindings) {
		bindingsByName.set(binding.identifier, binding);
	}

	const usages: TemplateBindingUsage[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	for (
		let elementIndex = 0;
		elementIndex < templateCollection.elements.length;
		elementIndex++
	) {
		const element = templateCollection.elements[elementIndex];

		if (element.scopeAmbiguous) {
			for (const argumentless of element.argumentlessBindings) {
				const resolvedScriptBinding = bindingsByName.get(argumentless.identifier) ?? null;
				usages.push({
					elementIndex,
					identifier: argumentless.identifier,
					resolvedScriptBinding,
					scopeResolution: "ambiguous",
					argumentlessRange: argumentless.range,
				});
				if (!resolvedScriptBinding) {
					diagnostics.push({
						code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
						severity: "warning",
						message: `Cannot migrate prop object "${argumentless.identifier}" because its scope resolution is ambiguous.`,
						operationId: operation.id,
						filePath,
						start: argumentless.range.start,
						end: argumentless.range.end,
						suggestion:
							"Simplify the template scope pattern or inline the property explicitly.",
					});
				}
			}

			for (const unsupported of element.unsupportedBindings) {
				usages.push({
					elementIndex,
					identifier: unsupported.expression || "",
					resolvedScriptBinding: null,
					scopeResolution: "ambiguous",
					argumentlessRange: unsupported.range,
					unsupportedBinding: unsupported,
				});

				diagnostics.push(
					createUnsupportedBindingDiagnostic(unsupported, filePath, operation),
				);
			}

			continue;
		}

		for (const unsupported of element.unsupportedBindings) {
			usages.push({
				elementIndex,
				identifier: unsupported.expression || "",
				resolvedScriptBinding: null,
				scopeResolution: "visible",
				argumentlessRange: unsupported.range,
				unsupportedBinding: unsupported,
			});

			diagnostics.push(
				createUnsupportedBindingDiagnostic(unsupported, filePath, operation),
			);
		}

		for (const argumentless of element.argumentlessBindings) {
			const shadowed = element.scopeBindings.has(argumentless.identifier);
			let origin: TemplateIdentifierOrigin;

			if (shadowed) {
				usages.push({
					elementIndex,
					identifier: argumentless.identifier,
					resolvedScriptBinding: null,
					scopeResolution: "shadowed",
					argumentlessRange: argumentless.range,
				});
				continue;
			} else if (!checker || !scriptSourceFile) {
				origin = { kind: "unknown" };
			} else {
				origin = resolveTemplateIdentifierOrigin(
					argumentless.identifier,
					checker,
					scriptSourceFile,
					bindingsByName,
				);
			}

			if (origin.kind === "local") {
				usages.push({
					elementIndex,
					identifier: argumentless.identifier,
					resolvedScriptBinding: origin.binding,
					scopeResolution: "visible",
					argumentlessRange: argumentless.range,
				});
				continue;
			}

			const resolvedScriptBinding = bindingsByName.get(argumentless.identifier) ?? null;

			usages.push({
				elementIndex,
				identifier: argumentless.identifier,
				resolvedScriptBinding,
				scopeResolution: "visible",
				argumentlessRange: argumentless.range,
			});

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

const getReplacementPropertyName = (
	sourceProperty: ObjectPropertyMatch,
	targetPropName: string,
): string => {
	const camelTarget = kebabToCamelCase(targetPropName);

	if (ts.isIdentifier(sourceProperty.nameNode)) {
		return camelTarget;
	}

	const originalValue = sourceProperty.nameNode.text;
	const usesKebabCase = originalValue.includes("-");

	return usesKebabCase ? targetPropName : camelTarget;
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
	const replacementName = getReplacementPropertyName(
		sourceProperty,
		nextPropName,
	);

	if (ts.isShorthandPropertyAssignment(property)) {
		const { start, end } = getNodeLocation(nameNode, sourceFile);
		return {
			start,
			end,
			replacement: `${replacementName}: ${rawName}`,
			operationId,
		};
	}

	if (ts.isPropertyAssignment(property)) {
		const quote =
			rawName.length >= 2 &&
			(rawName.startsWith('"') || rawName.startsWith("'"))
				? rawName[0]
				: "";
		const replacement = quote
			? `${quote}${replacementName}${quote}`
			: replacementName;
		const { start, end } = getNodeLocation(
			nameNode as ts.Identifier | ts.StringLiteral,
			sourceFile,
		);
		return {
			start,
			end,
			replacement,
			operationId,
		};
	}

	return null;
};

const isInsideDeclarationInitializer = (
	node: ts.Node,
	declaration: ts.VariableDeclaration,
): boolean => {
	let current: ts.Node | undefined = node;
	while (current) {
		if (current === declaration.initializer) {
			return true;
		}
		if (current === declaration) {
			return false;
		}
		current = current.parent;
	}
	return false;
};

const escapeRegExp = (value: string): string =>
	value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const identifierPattern = (identifier: string): RegExp =>
	new RegExp(`(?<![A-Za-z0-9_$])${escapeRegExp(identifier)}(?![A-Za-z0-9_$])`);

	type UnsafeReferenceKind = "script" | "template" | "ambiguous";

interface UnsupportedReference {
	start: number;
	end: number;
	kind: UnsafeReferenceKind;
}

const unsafeReferencePriority: Record<UnsafeReferenceKind, number> = {
	script: 0,
	template: 1,
	ambiguous: 2,
};

export interface ReferenceSafetyAnalysis {
	contaminatedIdentifiers: Set<string>;
	diagnostics: MigrationDiagnostic[];
}

export const analyseReferenceSafety = (
	bindings: ResolvedLocalBinding[],
	templateCollection: VueTemplateCollection,
	scriptSourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
	step: RenamePropStepDefinition,
	scriptOffset: number,
	filePath: string,
): ReferenceSafetyAnalysis => {
	const { operation } = step;
	const diagnostics: MigrationDiagnostic[] = [];
	const contaminatedIdentifiers = new Set<string>();

	const bindingByName = new Map<string, ResolvedLocalBinding>();
	const bindingBySymbol = new Map<ts.Symbol, ResolvedLocalBinding>();
	for (const binding of bindings) {
		bindingByName.set(binding.identifier, binding);
		const symbol = checker.getSymbolAtLocation(binding.declaration.name);
		if (symbol) {
			bindingBySymbol.set(symbol, binding);
		}
	}

	const firstUnsupportedByBinding = new Map<
		ResolvedLocalBinding,
		UnsupportedReference
	>();

	const recordUnsupported = (
		binding: ResolvedLocalBinding,
		reference: UnsupportedReference,
	): void => {
		const existing = firstUnsupportedByBinding.get(binding);
		if (!existing) {
			firstUnsupportedByBinding.set(binding, reference);
			return;
		}

		const existingPriority = unsafeReferencePriority[existing.kind];
		const nextPriority = unsafeReferencePriority[reference.kind];
		if (
			nextPriority < existingPriority ||
			(nextPriority === existingPriority && reference.start < existing.start) ||
			(
				nextPriority === existingPriority &&
				reference.start === existing.start &&
				reference.end < existing.end
			)
		) {
			firstUnsupportedByBinding.set(binding, reference);
		}
	};

	const allowedArgumentlessRanges = new Set<string>();
	for (const element of templateCollection.elements) {
		if (!element.isTarget || element.scopeAmbiguous) {
			continue;
		}
		for (const argumentless of element.argumentlessBindings) {
			if (element.scopeBindings.has(argumentless.identifier)) {
				continue;
			}
			allowedArgumentlessRanges.add(
				`${argumentless.range.start}-${argumentless.range.end}`,
			);
		}
	}

	const visitScript = (node: ts.Node): void => {
		if (!ts.isIdentifier(node)) {
			ts.forEachChild(node, visitScript);
			return;
		}

		const binding = bindingByName.get(node.text);
		if (!binding) {
			ts.forEachChild(node, visitScript);
			return;
		}

		if (node === binding.declaration.name) {
			ts.forEachChild(node, visitScript);
			return;
		}

		if (isInsideDeclarationInitializer(node, binding.declaration)) {
			ts.forEachChild(node, visitScript);
			return;
		}

		const symbol = checker.getSymbolAtLocation(node) ?? undefined;
		if (!symbol || bindingBySymbol.get(symbol) !== binding) {
			ts.forEachChild(node, visitScript);
			return;
		}

		const { start, end } = getNodeLocation(node, scriptSourceFile);
		recordUnsupported(binding, {
			start: start + scriptOffset,
			end: end + scriptOffset,
			kind: "script",
		});
		ts.forEachChild(node, visitScript);
	};

	visitScript(scriptSourceFile);

	for (const element of templateCollection.elements) {
		if (element.scopeAmbiguous) {
			for (const argumentless of element.argumentlessBindings) {
				const binding = bindingByName.get(argumentless.identifier);
				if (binding) {
					contaminatedIdentifiers.add(binding.identifier);
					recordUnsupported(binding, {
						...argumentless.range,
						kind: "ambiguous",
					});
				}
			}
			continue;
		}

		for (const argumentless of element.argumentlessBindings) {
			if (element.scopeBindings.has(argumentless.identifier)) {
				continue;
			}

			const binding = bindingByName.get(argumentless.identifier);
			if (!binding) {
				continue;
			}

			const isAllowedTargetUse =
				element.isTarget && !element.scopeBindings.has(argumentless.identifier);
			if (isAllowedTargetUse) {
				continue;
			}

			recordUnsupported(binding, {
				...argumentless.range,
				kind: "template",
			});
		}
	}

	for (const expression of templateCollection.expressions) {
		for (const binding of bindings) {
			if (expression.scopeBindings.has(binding.identifier)) {
				continue;
			}

			if (
				allowedArgumentlessRanges.has(
					`${expression.range.start}-${expression.range.end}`,
				)
			) {
				continue;
			}

			if (identifierPattern(binding.identifier).test(expression.content)) {
				recordUnsupported(binding, {
					...expression.range,
					kind: "template",
				});
			}
		}
	}

	for (const binding of bindings) {
		const reference = firstUnsupportedByBinding.get(binding);
		if (!reference) {
			continue;
		}

		const reasonMessage =
			reference.kind === "script"
				? `because it is referenced in script code`
				: reference.kind === "ambiguous"
					? `because a template scope pattern makes one or more uses ambiguous`
					: `because it is used outside a supported v-bind on a target component`;

		diagnostics.push({
			code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
			severity: "warning",
			message: `Cannot safely migrate local prop object "${binding.identifier}" ${reasonMessage}.`,
			operationId: operation.id,
			filePath,
			start: reference.start,
			end: reference.end,
			suggestion:
				"Use the object only in v-bind on compatible target components, or update the property manually.",
		});
		contaminatedIdentifiers.add(binding.identifier);
	}

	return { contaminatedIdentifiers, diagnostics };
};

interface ProjectedProvider {
	kind: "direct-source" | "direct-target" | "object-source" | "object-target";
	range: { start: number; end: number };
	binding?: ResolvedLocalBinding;
}

export interface VueBindingProjectionResult {
	declarationEdits: TextEdit[];
	suppressedElementIds: ReadonlySet<number>;
	diagnostics: MigrationDiagnostic[];
}

export const projectVueBindings = (
	templateCollection: VueTemplateCollection,
	localBindingAnalysis: LocalBindingAnalysis,
	referenceSafety: ReferenceSafetyAnalysis,
	step: RenamePropStepDefinition,
	scriptSourceFile: ts.SourceFile | undefined,
	scriptOffset: number,
	filePath: string,
): VueBindingProjectionResult => {
	const { operation } = step;
	const currentPropName = operation.from;
	const nextPropName = operation.to;

	const diagnostics: MigrationDiagnostic[] = [];
	const suppressedElementIds = new Set<number>();
	const forbiddenDeclarationIdentifiers = new Set<string>(
		referenceSafety.contaminatedIdentifiers,
	);

	const usagesByElement = new Map<number, TemplateBindingUsage[]>();
	for (const usage of localBindingAnalysis.usages) {
		const list = usagesByElement.get(usage.elementIndex) ?? [];
		list.push(usage);
		usagesByElement.set(usage.elementIndex, list);
	}

	const editedBindings = new Set<string>();

	for (
		let elementIndex = 0;
		elementIndex < templateCollection.elements.length;
		elementIndex++
	) {
		const element = templateCollection.elements[elementIndex];
		const elementUsages = usagesByElement.get(elementIndex) ?? [];

		if (!element.isTarget) {
			for (const usage of elementUsages) {
				const binding = usage.resolvedScriptBinding;
				if (!binding) {
					continue;
				}
				forbiddenDeclarationIdentifiers.add(binding.identifier);
			}
			continue;
		}

		const providers: ProjectedProvider[] = [];
		let hasUnknownProvider = false;

		if (element.directSourceProp) {
			providers.push({
				kind: "direct-source",
				range: element.directSourceProp.range,
			});
		}

		if (element.directTargetProp) {
			providers.push({
				kind: "direct-target",
				range: element.directTargetProp.range,
			});
		}

		for (const usage of elementUsages) {
			if (
				usage.scopeResolution === "shadowed" ||
				usage.unsupportedBinding
			) {
				hasUnknownProvider = true;
				continue;
			}

			if (usage.scopeResolution === "ambiguous") {
				hasUnknownProvider = true;
				if (usage.resolvedScriptBinding) {
					forbiddenDeclarationIdentifiers.add(
						usage.resolvedScriptBinding.identifier,
					);
				}
				continue;
			}

			const binding = usage.resolvedScriptBinding;
			if (!binding) {
				hasUnknownProvider = true;
				continue;
			}

			if (forbiddenDeclarationIdentifiers.has(binding.identifier)) {
				hasUnknownProvider = true;
				continue;
			}

			if (!binding.safeToProject) {
				hasUnknownProvider = true;
				forbiddenDeclarationIdentifiers.add(binding.identifier);
				continue;
			}

			if (binding.hasSourceProp) {
				providers.push({
					kind: "object-source",
					range: usage.argumentlessRange,
					binding,
				});
			}

			if (binding.hasTargetProp) {
				providers.push({
					kind: "object-target",
					range: usage.argumentlessRange,
					binding,
				});
			}
		}

		const sourceProviders = providers.filter(
			(
				p,
			): p is ProjectedProvider & { kind: "direct-source" | "object-source" } =>
				p.kind === "direct-source" || p.kind === "object-source",
		);
		const targetProviders = providers.filter(
			(
				p,
			): p is ProjectedProvider & { kind: "direct-target" | "object-target" } =>
				p.kind === "direct-target" || p.kind === "object-target",
		);

		const hasKnownConflict =
			sourceProviders.length > 1 ||
			(sourceProviders.length > 0 && targetProviders.length > 0);

		if (hasKnownConflict) {
			const range =
				sourceProviders[0]?.range ??
				providers[0]?.range ??
				element.elementRange;

			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists on ${element.tag}.`,
				operationId: operation.id,
				filePath,
				start: range.start,
				end: range.end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});

			suppressedElementIds.add(element.id);
			for (const provider of providers) {
				if (provider.binding) {
					forbiddenDeclarationIdentifiers.add(provider.binding.identifier);
				}
			}
			continue;
		}

		if (hasUnknownProvider) {
			suppressedElementIds.add(element.id);
			for (const usage of elementUsages) {
				if (usage.resolvedScriptBinding) {
					forbiddenDeclarationIdentifiers.add(usage.resolvedScriptBinding.identifier);
				}
			}
			continue;
		}

		for (const provider of providers) {
			if (provider.kind === "object-source" && provider.binding) {
				editedBindings.add(provider.binding.identifier);
			}
		}
	}

	const declarationEdits: TextEdit[] = [];
	for (const binding of localBindingAnalysis.bindings) {
		if (!editedBindings.has(binding.identifier)) {
			continue;
		}
		if (forbiddenDeclarationIdentifiers.has(binding.identifier)) {
			continue;
		}
		if (!binding.editable || !binding.sourceProperty) {
			continue;
		}
		if (!scriptSourceFile) {
			continue;
		}

		const edit = buildDeclarationPropertyEdit(
			binding,
			scriptSourceFile,
			nextPropName,
			operation.id,
		);
		if (edit) {
			declarationEdits.push({
				...edit,
				start: edit.start + scriptOffset,
				end: edit.end + scriptOffset,
			});
		}
	}

	return {
		declarationEdits,
		suppressedElementIds,
		diagnostics,
	};
};
