import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { kebabToCamelCase } from "../../core/naming.js";
import type {
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import { inspectJsxSpread } from "../shared/jsx-spreads.js";
import { getNodeLocation } from "../shared/ts.js";
import type { ReactImportResolution } from "./imports.js";

export interface LocalSpreadAnalysisResult {
	edits: TextEdit[];
	changes: string[];
	diagnostics: MigrationDiagnostic[];
	suppressedElementRanges: SourceRange[];
}

export interface SourceRange {
	start: number;
	end: number;
}

export interface ResolvedLocalSpread {
	declaration: ts.VariableDeclaration;
	objectLiteral: ts.ObjectLiteralExpression;
	references: ts.Identifier[];
	hasSourceProp: boolean;
	hasTargetProp: boolean;
	observable: boolean;
	editable: boolean;
}

export interface TargetElementAnalysis {
	directSourceProp?: SourceRange;
	directTargetProp?: SourceRange;
	spreadBindings: ResolvedLocalSpread[];
	inlineSpreadSourceCount: number;
	inlineSpreadTargetCount: number;
	hasUnsafeSpread: boolean;
	elementRange: SourceRange;
}

interface ObjectShapeValidationResult {
	valid: boolean;
	firstUnsupportedNode?: ts.Node;
}

interface BindingReferenceAnalysis {
	references: ts.Identifier[];
	hasUnsupportedReference: boolean;
	firstUnsupportedNode?: ts.Identifier;
}

const isExportedDeclaration = (
	declaration: ts.VariableDeclaration,
): boolean => {
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

const collectLocalObjectDeclarations = (
	sourceFile: ts.SourceFile,
): ts.VariableDeclaration[] => {
	const result: ts.VariableDeclaration[] = [];

	const visit = (node: ts.Node): void => {
		if (!ts.isVariableStatement(node)) {
			ts.forEachChild(node, visit);
			return;
		}

		for (const declaration of node.declarationList.declarations) {
			if (
				ts.isIdentifier(declaration.name) &&
				declaration.initializer &&
				ts.isObjectLiteralExpression(declaration.initializer)
			) {
				result.push(declaration);
			}
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);
	return result;
};

const getDeclarationSymbol = (
	declaration: ts.VariableDeclaration,
	checker: ts.TypeChecker,
): ts.Symbol | undefined => {
	const nameNode = declaration.name;
	if (!ts.isIdentifier(nameNode)) {
		return undefined;
	}
	return checker.getSymbolAtLocation(nameNode) ?? undefined;
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

const analyseBindingReferences = (
	sourceFile: ts.SourceFile,
	declaration: ts.VariableDeclaration,
	checker: ts.TypeChecker,
	isTargetComponent: (tagName: ts.JsxTagNameExpression) => boolean,
): BindingReferenceAnalysis => {
	const declarationSymbol = getDeclarationSymbol(declaration, checker);
	const objectName = (declaration.name as ts.Identifier).text;
	const references: ts.Identifier[] = [];
	let hasUnsupportedReference = false;
	let firstUnsupportedNode: ts.Identifier | undefined;

	const isJsxSpreadOnTargetComponent = (node: ts.Identifier): boolean => {
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

		return isTargetComponent(openingElement.tagName);
	};

	const visit = (node: ts.Node): void => {
		if (!ts.isIdentifier(node) || node.text !== objectName) {
			ts.forEachChild(node, visit);
			return;
		}

		if (node === declaration.name) {
			ts.forEachChild(node, visit);
			return;
		}

		if (isInsideDeclarationInitializer(node, declaration)) {
			// A self-reference inside the initializer is not a usage site.
			ts.forEachChild(node, visit);
			return;
		}

		const symbol = checker.getSymbolAtLocation(node) ?? undefined;
		if (symbol !== declarationSymbol) {
			ts.forEachChild(node, visit);
			return;
		}

		if (isJsxSpreadOnTargetComponent(node)) {
			references.push(node);
		} else {
			hasUnsupportedReference = true;
			firstUnsupportedNode ??= node;
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);

	return {
		references,
		hasUnsupportedReference,
		firstUnsupportedNode,
	};
};

const validateObjectShape = (
	objectLiteral: ts.ObjectLiteralExpression,
	currentPropName: string,
	nextPropName: string,
): ObjectShapeValidationResult => {
	let firstUnsupportedNode: ts.Node | undefined;
	let sourceCount = 0;
	let targetCount = 0;

	for (const property of objectLiteral.properties) {
		if (ts.isSpreadAssignment(property)) {
			firstUnsupportedNode ??= property;
			continue;
		}

		if (ts.isShorthandPropertyAssignment(property)) {
			const name = property.name.text;
			if (name === currentPropName) sourceCount += 1;
			if (name === nextPropName) targetCount += 1;
			continue;
		}

		if (ts.isPropertyAssignment(property)) {
			if (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) {
				const name = property.name.text;
				if (name === currentPropName) sourceCount += 1;
				if (name === nextPropName) targetCount += 1;
				continue;
			}

			firstUnsupportedNode ??= property.name;
			continue;
		}

		// Methods, accessors, computed names, etc.
		firstUnsupportedNode ??= property;
	}

	if (sourceCount > 1 || targetCount > 1) {
		return {
			valid: false,
			firstUnsupportedNode: firstUnsupportedNode ?? objectLiteral.properties[0],
		};
	}

	return { valid: firstUnsupportedNode === undefined, firstUnsupportedNode };
};

const resolveSpreadBinding = (
	spreadIdentifier: ts.Identifier,
	checker: ts.TypeChecker,
): {
	kind: "local" | "import" | "helper" | "parameter" | "unknown";
	declaration?: ts.Declaration;
} => {
	const symbol = checker.getSymbolAtLocation(spreadIdentifier);
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
		if (
			declaration.initializer &&
			ts.isObjectLiteralExpression(declaration.initializer)
		) {
			return { kind: "local", declaration };
		}
		return { kind: "helper", declaration };
	}

	return { kind: "helper", declaration };
};

const hasSourceOrTargetProp = (
	objectLiteral: ts.ObjectLiteralExpression,
	currentPropName: string,
	nextPropName: string,
): { hasSourceProp: boolean; hasTargetProp: boolean } => {
	let hasSourceProp = false;
	let hasTargetProp = false;

	for (const property of objectLiteral.properties) {
		if (ts.isShorthandPropertyAssignment(property)) {
			if (property.name.text === currentPropName) hasSourceProp = true;
			if (property.name.text === nextPropName) hasTargetProp = true;
		} else if (ts.isPropertyAssignment(property)) {
			if (
				(ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
				property.name.text === currentPropName
			) {
				hasSourceProp = true;
			}
			if (
				(ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
				property.name.text === nextPropName
			) {
				hasTargetProp = true;
			}
		}
	}

	return { hasSourceProp, hasTargetProp };
};

const buildObjectPropertyEdit = (
	sourceFile: ts.SourceFile,
	declaration: ts.VariableDeclaration,
	currentPropName: string,
	nextPropName: string,
	operationId: string,
): TextEdit | null => {
	const objectLiteral = declaration.initializer as ts.ObjectLiteralExpression;

	for (const property of objectLiteral.properties) {
		if (ts.isShorthandPropertyAssignment(property)) {
			if (property.name.text === currentPropName) {
				const { start, end } = getNodeLocation(property.name, sourceFile);
				return {
					start,
					end,
					replacement: `${nextPropName}: ${currentPropName}`,
					operationId,
				};
			}
		}

		if (ts.isPropertyAssignment(property)) {
			if (
				(ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
				property.name.text === currentPropName
			) {
				const { start, end } = getNodeLocation(property.name, sourceFile);
				const rawName = property.name.getText(sourceFile);
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
	}

	return null;
};

const buildInlineObjectPropertyEdit = (
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

interface InlineSpreadSource {
	objectLiteral: ts.ObjectLiteralExpression;
	property: ts.ObjectLiteralElementLike;
	elementRange: SourceRange;
}

interface UnsupportedInlineSpread {
	objectLiteral: ts.ObjectLiteralExpression;
	elementRange: SourceRange;
}

interface UnresolvedIdentifierSpread {
	identifier: ts.Identifier;
	elementRange: SourceRange;
}

const collectTargetElementAnalyses = (
	sourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
	isTargetComponent: (tagName: ts.JsxTagNameExpression) => boolean,
	currentPropName: string,
	nextPropName: string,
	resolvedSpreads: readonly ResolvedLocalSpread[],
): {
	elements: TargetElementAnalysis[];
	inlineSources: InlineSpreadSource[];
	unsupportedInlineSpreads: UnsupportedInlineSpread[];
	unresolvedIdentifierSpreads: UnresolvedIdentifierSpread[];
} => {
	const elements: TargetElementAnalysis[] = [];
	const inlineSources: InlineSpreadSource[] = [];
	const unsupportedInlineSpreads: UnsupportedInlineSpread[] = [];
	const unresolvedIdentifierSpreads: UnresolvedIdentifierSpread[] = [];

	const findSpreadBinding = (
		identifier: ts.Identifier,
	): ResolvedLocalSpread | undefined => {
		const symbol = checker.getSymbolAtLocation(identifier) ?? undefined;
		if (!symbol) {
			return undefined;
		}

		return resolvedSpreads.find((spread) => {
			const spreadSymbol = getDeclarationSymbol(spread.declaration, checker);
			return spreadSymbol === symbol;
		});
	};

	const visit = (node: ts.Node): void => {
		if (!ts.isJsxOpeningElement(node) && !ts.isJsxSelfClosingElement(node)) {
			ts.forEachChild(node, visit);
			return;
		}

		if (!isTargetComponent(node.tagName)) {
			ts.forEachChild(node, visit);
			return;
		}

		const attributes = node.attributes;
		const analysis: TargetElementAnalysis = {
			spreadBindings: [],
			inlineSpreadSourceCount: 0,
			inlineSpreadTargetCount: 0,
			hasUnsafeSpread: false,
			elementRange: getNodeLocation(node, sourceFile),
		};

		for (const attribute of attributes.properties) {
			if (ts.isJsxAttribute(attribute)) {
				const attributeNameNode = attribute.name;
				if (!ts.isIdentifier(attributeNameNode)) {
					continue;
				}

				const name = attributeNameNode.text;
				const range = getNodeLocation(attributeNameNode, sourceFile);
				if (name === currentPropName) {
					analysis.directSourceProp = range;
				}

				if (name === nextPropName) {
					analysis.directTargetProp = range;
				}
			} else if (ts.isJsxSpreadAttribute(attribute)) {
				const expression = attribute.expression;
				const inspection = inspectJsxSpread(
					expression,
					currentPropName,
					nextPropName,
				);

				if (inspection.kind === "identifier") {
					const binding = findSpreadBinding(inspection.identifier);
					if (binding) {
						analysis.spreadBindings.push(binding);
					} else {
						analysis.hasUnsafeSpread = true;
						unresolvedIdentifierSpreads.push({
							identifier: inspection.identifier,
							elementRange: analysis.elementRange,
						});
					}
				} else if (inspection.kind === "object") {
					const sourceCount = inspection.sourceProperties.length;
					const targetCount = inspection.targetProperties.length;

					if (sourceCount > 1 || targetCount > 1) {
						analysis.hasUnsafeSpread = true;
						unsupportedInlineSpreads.push({
							objectLiteral: expression as ts.ObjectLiteralExpression,
							elementRange: analysis.elementRange,
						});
						continue;
					}

					if (sourceCount === 1) {
						analysis.inlineSpreadSourceCount += 1;
					}

					if (targetCount === 1) {
						analysis.inlineSpreadTargetCount += 1;
					}

					if (sourceCount === 1 && targetCount === 0) {
						inlineSources.push({
							objectLiteral: expression as ts.ObjectLiteralExpression,
							property: inspection.sourceProperties[0],
							elementRange: analysis.elementRange,
						});
					}
				} else {
					analysis.hasUnsafeSpread = true;
					unsupportedInlineSpreads.push({
						objectLiteral: expression as ts.ObjectLiteralExpression,
						elementRange: analysis.elementRange,
					});
				}
			}
		}

		elements.push(analysis);
		ts.forEachChild(node, visit);
	};

	visit(sourceFile);
	return {
		elements,
		inlineSources,
		unsupportedInlineSpreads,
		unresolvedIdentifierSpreads,
	};
};

interface ProjectedTargetSummary {
	localSpreadSourceCount: number;
	localSpreadTargetCount: number;
	inlineSpreadSourceCount: number;
	inlineSpreadTargetCount: number;
}

const projectTargetSummary = (
	analysis: TargetElementAnalysis,
): ProjectedTargetSummary => {
	let localSpreadSourceCount = 0;
	let localSpreadTargetCount = 0;
	for (const spread of analysis.spreadBindings) {
		if (spread.hasSourceProp) localSpreadSourceCount += 1;
		if (spread.hasTargetProp) localSpreadTargetCount += 1;
	}

	return {
		localSpreadSourceCount,
		localSpreadTargetCount,
		inlineSpreadSourceCount: analysis.inlineSpreadSourceCount,
		inlineSpreadTargetCount: analysis.inlineSpreadTargetCount,
	};
};

const hasProjectedElementConflict = (
	analysis: TargetElementAnalysis,
): boolean => {
	const {
		localSpreadSourceCount,
		localSpreadTargetCount,
		inlineSpreadSourceCount,
		inlineSpreadTargetCount,
	} = projectTargetSummary(analysis);

	if (
		analysis.spreadBindings.length === 0 &&
		inlineSpreadSourceCount === 0 &&
		inlineSpreadTargetCount === 0
	) {
		// Pure direct-prop conflicts are reported by the JSX adapter.
		return false;
	}

	const projectedTargetProviderCount =
		Number(analysis.directSourceProp !== undefined) +
		Number(analysis.directTargetProp !== undefined) +
		localSpreadSourceCount +
		localSpreadTargetCount +
		inlineSpreadSourceCount +
		inlineSpreadTargetCount;

	const wouldMigrateSource =
		analysis.directSourceProp !== undefined ||
		localSpreadSourceCount > 0 ||
		inlineSpreadSourceCount > 0;

	return projectedTargetProviderCount > 1 && wouldMigrateSource;
};

export const analyseLocalSpreads = (
	filePath: string,
	_content: string,
	step: RenamePropStepDefinition,
	imports: ReactImportResolution,
	sourceFile: ts.SourceFile,
	checker: ts.TypeChecker,
): LocalSpreadAnalysisResult => {
	const { operation } = step;
	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	const edits: TextEdit[] = [];
	const changes: string[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const localObjects = collectLocalObjectDeclarations(sourceFile);
	const resolvedSpreads: ResolvedLocalSpread[] = [];

	for (const declaration of localObjects) {
		const referenceAnalysis = analyseBindingReferences(
			sourceFile,
			declaration,
			checker,
			imports.isOfficialWrapperComponent,
		);

		if (referenceAnalysis.references.length === 0) {
			continue;
		}

		const objectLiteral = declaration.initializer as ts.ObjectLiteralExpression;
		const shapeValidation = validateObjectShape(
			objectLiteral,
			currentPropName,
			nextPropName,
		);

		const isConst = isConstDeclaration(declaration);
		const isExported = isExportedDeclaration(declaration);

		const { hasSourceProp, hasTargetProp } = hasSourceOrTargetProp(
			objectLiteral,
			currentPropName,
			nextPropName,
		);

		const editable =
			isConst &&
			!isExported &&
			!referenceAnalysis.hasUnsupportedReference &&
			shapeValidation.valid;

		if (!editable) {
			const reasons: string[] = [];
			if (!isConst) reasons.push("the binding is mutable");
			if (isExported) reasons.push("it is exported");
			if (referenceAnalysis.hasUnsupportedReference)
				reasons.push(
					"it is used outside a supported JSX spread on a target component",
				);
			if (!shapeValidation.valid)
				reasons.push("it contains an unsupported property shape");

			if (reasons.length > 0) {
				const locationNode =
					shapeValidation.firstUnsupportedNode ??
					referenceAnalysis.firstUnsupportedNode ??
					declaration.name;
				const { start, end } = getNodeLocation(locationNode, sourceFile);
				const objectName = (declaration.name as ts.Identifier).text;
				const reasonText =
					reasons.length === 1
						? reasons[0]
						: `${reasons.slice(0, -1).join(", ")} and ${reasons[reasons.length - 1]}`;
				diagnostics.push({
					code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
					severity: "warning",
					message: `Cannot safely migrate local prop object "${objectName}" because ${reasonText}.`,
					operationId: operation.id,
					filePath,
					start,
					end,
					suggestion:
						"Use a const object that is only spread into compatible target components, or update the property manually.",
				});
			}
		}

		resolvedSpreads.push({
			declaration,
			objectLiteral,
			references: referenceAnalysis.references,
			hasSourceProp,
			hasTargetProp,
			observable: true,
			editable,
		});
	}

	const {
		elements: elementAnalyses,
		inlineSources,
		unsupportedInlineSpreads,
		unresolvedIdentifierSpreads,
	} = collectTargetElementAnalyses(
		sourceFile,
		checker,
		imports.isOfficialWrapperComponent,
		currentPropName,
		nextPropName,
		resolvedSpreads,
	);

	for (const unsupported of unsupportedInlineSpreads) {
		const { start, end } = getNodeLocation(
			unsupported.objectLiteral,
			sourceFile,
		);
		diagnostics.push({
			code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
			severity: "warning",
			message: `Cannot safely migrate inline spread because its shape is not fully known.`,
			operationId: operation.id,
			filePath,
			start,
			end,
			suggestion:
				"Inline the property explicitly or use a const object with simple property assignments.",
		});
	}

	for (const unresolved of unresolvedIdentifierSpreads) {
		const { identifier } = unresolved;
		const resolved = resolveSpreadBinding(identifier, checker);
		const { start, end } = getNodeLocation(identifier, sourceFile);

		if (resolved.kind === "import") {
			diagnostics.push({
				code: DiagnosticCode.IMPORTED_PROP_OBJECT_UNSUPPORTED,
				severity: "warning",
				message: `Cannot migrate imported prop object "${identifier.text}" because its shape is not visible in this file.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Update the imported object or inline the property in the JSX element.",
			});
		} else if (resolved.kind === "helper" || resolved.kind === "parameter") {
			const code =
				resolved.kind === "helper"
					? DiagnosticCode.HELPER_PROP_OBJECT_UNSUPPORTED
					: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT;
			diagnostics.push({
				code,
				severity: "warning",
				message: `Cannot migrate prop object "${identifier.text}" because it is produced outside a local object literal.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Inline the property in the JSX element or use a local object literal.",
			});
		} else {
			diagnostics.push({
				code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
				severity: "warning",
				message: `Cannot migrate prop object "${identifier.text}" because its origin could not be determined.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Inline the property in the JSX element or use a local object literal.",
			});
		}
	}

	const conflictingElements = elementAnalyses.filter((analysis) =>
		hasProjectedElementConflict(analysis),
	);

	if (conflictingElements.length > 0) {
		for (const element of conflictingElements) {
			let range: SourceRange;
			if (element.directSourceProp) {
				range = element.directSourceProp;
			} else if (element.directTargetProp) {
				range = element.directTargetProp;
			} else if (element.spreadBindings[0]?.references[0]) {
				range = getNodeLocation(
					element.spreadBindings[0].references[0],
					sourceFile,
				);
			} else {
				range = element.elementRange;
			}

			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because the migrated JSX element would contain duplicate "${nextPropName}" props.`,
				operationId: operation.id,
				filePath,
				start: range.start,
				end: range.end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});
		}

		return {
			edits: [],
			changes: [],
			diagnostics,
			suppressedElementRanges: elementAnalyses
				.filter((analysis) => analysis.hasUnsafeSpread)
				.map((analysis) => analysis.elementRange),
		};
	}

	const suppressedElementRanges = elementAnalyses
		.filter((analysis) => analysis.hasUnsafeSpread)
		.map((analysis) => analysis.elementRange);

	const isNodeWithinSuppressedRange = (node: ts.Node): boolean => {
		const start = node.getStart(sourceFile);
		const end = node.getEnd();
		return suppressedElementRanges.some(
			(range) => start >= range.start && end <= range.end,
		);
	};

	const conflictingObjectLiterals = new Set<ts.ObjectLiteralExpression>();
	for (const element of elementAnalyses) {
		if (element.spreadBindings.length > 1) {
			let sourceSpreadCount = 0;
			let targetSpreadCount = 0;
			for (const spread of element.spreadBindings) {
				if (spread.hasSourceProp) sourceSpreadCount += 1;
				if (spread.hasTargetProp) targetSpreadCount += 1;
			}

			if (sourceSpreadCount > 1 || targetSpreadCount > 1) {
				for (const spread of element.spreadBindings) {
					conflictingObjectLiterals.add(spread.objectLiteral);
				}
			}
		}
	}

	for (const spread of resolvedSpreads) {
		if (spread.hasSourceProp && spread.hasTargetProp) {
			const { start, end } = getNodeLocation(
				spread.declaration.name,
				sourceFile,
			);
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists in the local prop object.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});
			conflictingObjectLiterals.add(spread.objectLiteral);
			continue;
		}

		if (conflictingObjectLiterals.has(spread.objectLiteral)) {
			continue;
		}

		if (!spread.editable) {
			continue;
		}

		const isOnSuppressedElement = spread.references.some((reference) =>
			isNodeWithinSuppressedRange(reference),
		);
		if (isOnSuppressedElement) {
			continue;
		}

		if (spread.hasSourceProp) {
			const edit = buildObjectPropertyEdit(
				sourceFile,
				spread.declaration,
				currentPropName,
				nextPropName,
				operation.id,
			);
			if (edit) {
				edits.push(edit);
				if (!changes.includes(`prop ${currentPropName} -> ${nextPropName}`)) {
					changes.push(`prop ${currentPropName} -> ${nextPropName}`);
				}
			}
		}
	}

	for (const inlineSource of inlineSources) {
		if (
			suppressedElementRanges.some(
				(range) =>
					inlineSource.elementRange.start === range.start &&
					inlineSource.elementRange.end === range.end,
			)
		) {
			continue;
		}

		const edit = buildInlineObjectPropertyEdit(
			inlineSource.property,
			sourceFile,
			currentPropName,
			nextPropName,
			operation.id,
		);
		if (edit) {
			edits.push(edit);
			if (!changes.includes(`prop ${currentPropName} -> ${nextPropName}`)) {
				changes.push(`prop ${currentPropName} -> ${nextPropName}`);
			}
		}
	}

	if (conflictingObjectLiterals.size > 0) {
		return {
			edits: [],
			changes: [],
			diagnostics,
			suppressedElementRanges,
		};
	}

	return { edits, changes, diagnostics, suppressedElementRanges };
};
