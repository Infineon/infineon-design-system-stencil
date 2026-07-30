import { NodeTypes, parse as parseVueTemplate } from "@vue/compiler-dom";
import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { tagNameToReactComponentName } from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";

interface SourceOffset {
	offset: number;
}

interface SourceLocation {
	start: SourceOffset;
	end: SourceOffset;
	source: string;
}

interface VueAttributeNode {
	type: number;
	name: string;
	loc: SourceLocation;
}

interface VueDirectiveArgumentNode {
	type: number;
	content: string;
	isStatic: boolean;
	loc: SourceLocation;
}

interface VueSimpleExpressionNode {
	type: number;
	content: string;
	isStatic: boolean;
	loc: SourceLocation;
}

interface VueDirectiveNode {
	type: number;
	name: string;
	arg?: VueDirectiveArgumentNode;
	exp?: VueSimpleExpressionNode;
	loc: SourceLocation;
}

interface VueIfBranch {
	children: VueTemplateNode[];
}

interface VueTemplateNode {
	type: number;
	tag?: string;
	loc?: SourceLocation;
	props?: Array<VueAttributeNode | VueDirectiveNode>;
	children?: VueTemplateNode[];
	branches?: VueIfBranch[];
	content?: VueSimpleExpressionNode;
}

const isVueAttributeNode = (
	node: VueAttributeNode | VueDirectiveNode,
): node is VueAttributeNode => node.type === NodeTypes.ATTRIBUTE;

const isVueDirectiveNode = (
	node: VueAttributeNode | VueDirectiveNode,
): node is VueDirectiveNode => node.type === NodeTypes.DIRECTIVE;

const isSimpleExpressionNode = (
	node: unknown,
): node is VueSimpleExpressionNode =>
	typeof node === "object" &&
	node !== null &&
	(node as VueSimpleExpressionNode).type === NodeTypes.SIMPLE_EXPRESSION;

interface PropRange {
	start: number;
	end: number;
}

interface DirectPropInfo {
	node: VueAttributeNode | VueDirectiveNode;
	range: PropRange;
}

interface ArgumentlessBinding {
	identifier: string;
	range: PropRange;
	loc: SourceLocation;
}

export interface UnsupportedArgumentlessBinding {
	expression: string;
	range: PropRange;
	kind: "call" | "member" | "inline-object" | "other";
}

export interface VueElementAnalysis {
	elementRange: PropRange;
	tag: string;
	isTarget: boolean;
	directSourceProp: DirectPropInfo | null;
	directTargetProp: DirectPropInfo | null;
	argumentlessBindings: ArgumentlessBinding[];
	unsupportedBindings: UnsupportedArgumentlessBinding[];
	scopeBindings: Set<string>;
	scopeAmbiguous: boolean;
}

export interface ObservedTemplateExpression {
	content: string;
	range: PropRange;
	scopeBindings: Set<string>;
}

export interface VueTemplateCollection {
	templateStartOffset: number;
	elements: VueElementAnalysis[];
	expressions: ObservedTemplateExpression[];
}

export interface TemplateScopeResult {
	bindings: Set<string>;
	ambiguous: boolean;
}

const extractBindingsFromNode = (
	node: ts.Node,
	bindings: Set<string>,
): void => {
	if (ts.isIdentifier(node)) {
		bindings.add(node.text);
		return;
	}
	if (ts.isBindingElement(node)) {
		extractBindingsFromNode(node.name, bindings);
		return;
	}
	if (ts.isObjectBindingPattern(node) || ts.isArrayBindingPattern(node)) {
		for (const element of node.elements) {
			if (ts.isOmittedExpression(element)) {
				continue;
			}
			extractBindingsFromNode(element, bindings);
		}
	}
};

export const extractTemplatePatternBindings = (
	expression: string,
): TemplateScopeResult => {
	let trimmed = expression.trim();
	if (!trimmed) {
		return { bindings: new Set(), ambiguous: false };
	}

	if (trimmed.startsWith("(") && trimmed.endsWith(")")) {
		trimmed = trimmed.slice(1, -1).trim();
	}

	const sourceText = `let ${trimmed};`;
	const sourceFile = ts.createSourceFile(
		"template-binding.ts",
		sourceText,
		ts.ScriptTarget.Latest,
		true,
	);

	const parseDiagnostics = (
		sourceFile as unknown as { parseDiagnostics?: ts.Diagnostic[] }
	).parseDiagnostics;
	if (parseDiagnostics && parseDiagnostics.length > 0) {
		return { bindings: new Set(), ambiguous: true };
	}

	if (!sourceFile.statements || sourceFile.statements.length !== 1) {
		return { bindings: new Set(), ambiguous: true };
	}

	const stmt = sourceFile.statements[0];
	if (!ts.isVariableStatement(stmt)) {
		return { bindings: new Set(), ambiguous: true };
	}

	const bindings = new Set<string>();
	for (const decl of stmt.declarationList.declarations) {
		extractBindingsFromNode(decl.name, bindings);
	}

	return { bindings, ambiguous: false };
};

const V_FOR_KEYWORDS = /\s+(?:in|of)\s+/;

const parseVForExpression = (
	expression: string,
): { aliasExpression: string; sourceExpression: string } | null => {
	const match = expression.match(V_FOR_KEYWORDS);
	if (!match || match.index === undefined) {
		return null;
	}
	const aliasExpression = expression.slice(0, match.index).trim();
	const sourceExpression = expression
		.slice(match.index + match[0].length)
		.trim();
	return { aliasExpression, sourceExpression };
};

const isValidVForSourceExpression = (expression: string): boolean => {
	const sourceText = `(${expression})`;
	const sourceFile = ts.createSourceFile(
		"v-for-source.ts",
		sourceText,
		ts.ScriptTarget.Latest,
		true,
	);

	const parseDiagnostics = (
		sourceFile as unknown as { parseDiagnostics?: ts.Diagnostic[] }
	).parseDiagnostics;
	if (parseDiagnostics && parseDiagnostics.length > 0) {
		return false;
	}

	if (sourceFile.statements.length !== 1) {
		return false;
	}

	const statement = sourceFile.statements[0];
	if (!ts.isExpressionStatement(statement)) {
		return false;
	}

	return ts.isParenthesizedExpression(statement.expression);
};

interface ElementScopeExtraction {
	addedBindings: Set<string>;
	ambiguous: boolean;
	vForSourceExpression?: {
		content: string;
		loc: SourceLocation;
	};
}

const extractElementScope = (node: VueTemplateNode): ElementScopeExtraction => {
	const addedBindings = new Set<string>();
	let ambiguous = false;
	let vForSourceExpression:
		| { content: string; loc: SourceLocation }
		| undefined;

	for (const prop of node.props ?? []) {
		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}

		const directive = prop as VueDirectiveNode;
		if (directive.name === "for" && directive.exp?.content) {
			const parsed = parseVForExpression(directive.exp.content);
			if (parsed) {
				const patternResult = extractTemplatePatternBindings(
					parsed.aliasExpression,
				);
				for (const b of patternResult.bindings) {
					addedBindings.add(b);
				}
				if (patternResult.ambiguous) {
					ambiguous = true;
				}
				if (
					parsed.sourceExpression &&
					isValidVForSourceExpression(parsed.sourceExpression) &&
					directive.exp.loc
				) {
					vForSourceExpression = {
						content: parsed.sourceExpression,
						loc: directive.exp.loc,
					};
				} else if (parsed.sourceExpression) {
					ambiguous = true;
				}
			} else {
				ambiguous = true;
			}
			continue;
		}

		if (directive.name === "slot" && directive.exp?.content) {
			const patternResult = extractTemplatePatternBindings(
				directive.exp.content,
			);
			for (const b of patternResult.bindings) {
				addedBindings.add(b);
			}
			if (patternResult.ambiguous) {
				ambiguous = true;
			}
		}
	}

	return { addedBindings, ambiguous, vForSourceExpression };
};

const getNodeRange = (
	loc: SourceLocation | undefined,
	templateStartOffset: number,
): PropRange | null => {
	if (!loc) {
		return null;
	}
	return {
		start: templateStartOffset + loc.start.offset,
		end: templateStartOffset + loc.end.offset,
	};
};

const isIdentifierExpression = (expression: string): boolean =>
	/^[A-Za-z_$][\w$]*$/.test(expression);

const classifyUnsupportedExpression = (
	expression: string,
): UnsupportedArgumentlessBinding["kind"] => {
	const trimmed = expression.trim();
	if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
		return "inline-object";
	}
	if (/^[A-Za-z_$][\w$]*\s*\(/.test(trimmed)) {
		return "call";
	}
	if (trimmed.includes(".") || trimmed.includes("[")) {
		return "member";
	}
	return "other";
};

const analyseElement = (
	node: VueTemplateNode,
	templateStartOffset: number,
	targetTagNames: Set<string>,
	scopeBindings: Set<string>,
	scopeAmbiguous: boolean,
	currentPropName: string,
	nextPropName: string,
): VueElementAnalysis | null => {
	if (
		node.type !== NodeTypes.ELEMENT ||
		typeof node.tag !== "string" ||
		!node.loc ||
		!Array.isArray(node.props)
	) {
		return null;
	}

	const elementRange = getNodeRange(node.loc, templateStartOffset);
	if (!elementRange) {
		return null;
	}

	const tag = node.tag;
	const isTarget = targetTagNames.has(tag);

	let directSourceProp: DirectPropInfo | null = null;
	let directTargetProp: DirectPropInfo | null = null;
	const argumentlessBindings: ArgumentlessBinding[] = [];
	const unsupportedBindings: UnsupportedArgumentlessBinding[] = [];

	for (const prop of node.props) {
		if (prop.type === NodeTypes.ATTRIBUTE) {
			const attribute = prop as VueAttributeNode;
			if (attribute.name === currentPropName) {
				directSourceProp = {
					node: attribute,
					range: {
						start: templateStartOffset + attribute.loc.start.offset,
						end:
							templateStartOffset +
							attribute.loc.start.offset +
							currentPropName.length,
					},
				};
			}

			if (attribute.name === nextPropName) {
				directTargetProp = {
					node: attribute,
					range: {
						start: templateStartOffset + attribute.loc.start.offset,
						end:
							templateStartOffset +
							attribute.loc.start.offset +
							nextPropName.length,
					},
				};
			}

			continue;
		}

		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}

		const directive = prop as VueDirectiveNode;

		if (directive.name === "bind" && directive.arg?.isStatic === true) {
			if (directive.arg.content === currentPropName) {
				directSourceProp = {
					node: directive,
					range: {
						start: templateStartOffset + directive.arg.loc.start.offset,
						end: templateStartOffset + directive.arg.loc.end.offset,
					},
				};
			}

			if (directive.arg.content === nextPropName) {
				directTargetProp = {
					node: directive,
					range: {
						start: templateStartOffset + directive.arg.loc.start.offset,
						end: templateStartOffset + directive.arg.loc.end.offset,
					},
				};
			}

			continue;
		}

		if (directive.name === "bind" && !directive.arg) {
			const exp = directive.exp;
			if (isSimpleExpressionNode(exp) && exp.content) {
				const range = getNodeRange(exp.loc, templateStartOffset);
				if (range) {
					if (isIdentifierExpression(exp.content)) {
						argumentlessBindings.push({
							identifier: exp.content,
							range,
							loc: exp.loc,
						});
					} else {
						unsupportedBindings.push({
							expression: exp.content,
							range,
							kind: classifyUnsupportedExpression(exp.content),
						});
					}
				}
			} else {
				const directiveRange = getNodeRange(directive.loc, templateStartOffset);
				if (directiveRange) {
					unsupportedBindings.push({
						expression: "",
						range: directiveRange,
						kind: "other",
					});
				}
			}
		}
	}

	return {
		elementRange,
		tag,
		isTarget,
		directSourceProp,
		directTargetProp,
		argumentlessBindings,
		unsupportedBindings,
		scopeBindings: new Set(scopeBindings),
		scopeAmbiguous,
	};
};

const collectDirectiveExpressions = (
	node: VueTemplateNode,
	templateStartOffset: number,
	elementScope: Set<string>,
	expressions: ObservedTemplateExpression[],
	hasVForSource: boolean,
): void => {
	for (const prop of node.props ?? []) {
		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}

		const directive = prop as VueDirectiveNode;
		if (hasVForSource && directive.name === "for") {
			// Skip generic directive expression collection for v-for since vForSourceExpression is collected explicitly in parent scope.
			continue;
		}

		for (const exprNode of [directive.arg, directive.exp]) {
			if (
				isSimpleExpressionNode(exprNode) &&
				!exprNode.isStatic &&
				exprNode.content
			) {
				const range = getNodeRange(exprNode.loc, templateStartOffset);
				if (range) {
					expressions.push({
						content: exprNode.content,
						range,
						scopeBindings: new Set(elementScope),
					});
				}
			}
		}
	}
};

export const collectVueTemplate = (
	templateContent: string,
	templateStartOffset: number,
	step: RenamePropStepDefinition,
): VueTemplateCollection => {
	const { operation } = step;
	const targetTagNames = new Set([
		operation.component,
		tagNameToReactComponentName(operation.component),
	]);

	const currentPropName = operation.from;
	const nextPropName = operation.to;

	const templateAst = parseVueTemplate(templateContent) as {
		children: VueTemplateNode[];
	};

	const elements: VueElementAnalysis[] = [];
	const expressions: ObservedTemplateExpression[] = [];

	const visitNode = (
		node: VueTemplateNode,
		scopeBindings: Set<string>,
		scopeAmbiguous: boolean,
	): void => {
		if (node.type === NodeTypes.ELEMENT) {
			const scopeExtraction = extractElementScope(node);
			const nodeAmbiguous = scopeAmbiguous || scopeExtraction.ambiguous;

			if (scopeExtraction.vForSourceExpression) {
				const sourceRange = getNodeRange(
					scopeExtraction.vForSourceExpression.loc,
					templateStartOffset,
				);
				if (sourceRange) {
					expressions.push({
						content: scopeExtraction.vForSourceExpression.content,
						range: sourceRange,
						scopeBindings: new Set(scopeBindings),
					});
				}
			}

			const childScope = new Set(scopeBindings);
			for (const binding of scopeExtraction.addedBindings) {
				childScope.add(binding);
			}

			const analysis = analyseElement(
				node,
				templateStartOffset,
				targetTagNames,
				childScope,
				nodeAmbiguous,
				currentPropName,
				nextPropName,
			);
			if (analysis) {
				elements.push(analysis);
			}

			collectDirectiveExpressions(
				node,
				templateStartOffset,
				childScope,
				expressions,
				Boolean(scopeExtraction.vForSourceExpression),
			);

			for (const child of node.children ?? []) {
				visitNode(child, childScope, nodeAmbiguous);
			}

			for (const branch of node.branches ?? []) {
				for (const child of branch.children) {
					visitNode(child, childScope, nodeAmbiguous);
				}
			}

			return;
		}

		if (node.type === NodeTypes.INTERPOLATION) {
			const interpolation = node as VueTemplateNode & {
				content: VueSimpleExpressionNode;
			};
			const content = interpolation.content;
			if (
				isSimpleExpressionNode(content) &&
				!content.isStatic &&
				content.content
			) {
				const range = getNodeRange(content.loc, templateStartOffset);
				if (range) {
					expressions.push({
						content: content.content,
						range,
						scopeBindings: new Set(scopeBindings),
					});
				}
			}
		}

		if (node.type === NodeTypes.COMPOUND_EXPRESSION) {
			const compound = node as VueTemplateNode & {
				children?: Array<VueTemplateNode | string>;
			};
			for (const child of compound.children ?? []) {
				if (typeof child === "object" && child !== null) {
					visitNode(child as VueTemplateNode, scopeBindings, scopeAmbiguous);
				}
			}
		}

		for (const child of node.children ?? []) {
			visitNode(child, scopeBindings, scopeAmbiguous);
		}

		for (const branch of node.branches ?? []) {
			for (const child of branch.children) {
				visitNode(child, scopeBindings, scopeAmbiguous);
			}
		}
	};

	for (const child of templateAst.children) {
		visitNode(child, new Set(), false);
	}

	return { templateStartOffset, elements, expressions };
};

export const projectVueTemplate = (
	filePath: string,
	fullContent: string,
	collection: VueTemplateCollection,
	baseRevision: number,
	step: RenamePropStepDefinition,
	suppressedElementRanges?: ReadonlyArray<{ start: number; end: number }>,
): FileAnalysis | null => {
	const { operation } = step;
	const currentPropName = operation.from;
	const nextPropName = operation.to;

	const edits: TextEdit[] = [];

	const isSuppressed = (range: { start: number; end: number }): boolean =>
		suppressedElementRanges?.some(
			(suppressed) =>
				range.start >= suppressed.start && range.end <= suppressed.end,
		) ?? false;

	for (const element of collection.elements) {
		if (!element.isTarget) {
			continue;
		}

		if (!element.directSourceProp) {
			continue;
		}

		if (isSuppressed(element.elementRange)) {
			continue;
		}

		edits.push({
			start: element.directSourceProp.range.start,
			end: element.directSourceProp.range.end,
			replacement: nextPropName,
			operationId: operation.id,
		});
	}

	if (edits.length === 0) {
		return null;
	}

	return {
		kind: "modify",
		filePath,
		baseRevision,
		content: fullContent,
		edits,
		changes: [`prop ${currentPropName} -> ${nextPropName}`],
		diagnostics: [],
	};
};

export const analyseVueTemplate = (
	filePath: string,
	fullContent: string,
	templateContent: string,
	templateStartOffset: number,
	baseRevision: number,
	step: RenamePropStepDefinition,
): FileAnalysis | null => {
	const collection = collectVueTemplate(
		templateContent,
		templateStartOffset,
		step,
	);
	return projectVueTemplate(
		filePath,
		fullContent,
		collection,
		baseRevision,
		step,
	);
};
