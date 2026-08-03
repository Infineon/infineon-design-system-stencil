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
	id: number;
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
	diagnostics: MigrationDiagnostic[];
}

export interface PatternExpression {
	content: string;
	relativeStart: number;
	relativeEnd: number;
}

export interface PatternAnalysis {
	bindings: Set<string>;
	expressions: PatternExpression[];
	ambiguous: boolean;
}

const collectPatternExpressionsAndBindings = (
	patternSource: string,
	wrapperPrefix = "const ",
	wrapperSuffix = " = value;",
): PatternAnalysis => {
	const wrappedSource = `${wrapperPrefix}${patternSource}${wrapperSuffix}`;
	const sourceFile = ts.createSourceFile(
		"scope-pattern.ts",
		wrappedSource,
		ts.ScriptTarget.Latest,
		true,
		ts.ScriptKind.TS,
	);

	const diagnostics = (
		sourceFile as unknown as { parseDiagnostics?: ts.Diagnostic[] }
	).parseDiagnostics;
	if (diagnostics && diagnostics.length > 0) {
		return { bindings: new Set(), expressions: [], ambiguous: true };
	}

	if (!sourceFile.statements || sourceFile.statements.length !== 1) {
		return { bindings: new Set(), expressions: [], ambiguous: true };
	}

	const stmt = sourceFile.statements[0];
	if (!ts.isVariableStatement(stmt)) {
		return { bindings: new Set(), expressions: [], ambiguous: true };
	}

	const bindings = new Set<string>();
	const expressions: PatternExpression[] = [];

	const visit = (node: ts.Node): void => {
		if (ts.isIdentifier(node)) {
			if (node.parent && ts.isBindingElement(node.parent) && node.parent.name === node) {
				bindings.add(node.text);
				return;
			}
		}

		if (ts.isBindingElement(node)) {
			if (node.propertyName && ts.isComputedPropertyName(node.propertyName)) {
				const expr = node.propertyName.expression;
				const relativeStart = expr.getStart(sourceFile) - wrapperPrefix.length;
				const relativeEnd = expr.getEnd() - wrapperPrefix.length;
				expressions.push({
					content: expr.getText(sourceFile),
					relativeStart,
					relativeEnd,
				});
			}

			if (node.initializer) {
				const expr = node.initializer;
				const relativeStart = expr.getStart(sourceFile) - wrapperPrefix.length;
				const relativeEnd = expr.getEnd() - wrapperPrefix.length;
				expressions.push({
					content: expr.getText(sourceFile),
					relativeStart,
					relativeEnd,
				});
			}
		}

		ts.forEachChild(node, visit);
	};

	for (const decl of stmt.declarationList.declarations) {
		if (ts.isIdentifier(decl.name)) {
			bindings.add(decl.name.text);
		}
		visit(decl.name);
	}

	const parseDiagnostics = (
		sourceFile as unknown as { parseDiagnostics?: ts.Diagnostic[] }
	).parseDiagnostics;
	if (parseDiagnostics && parseDiagnostics.length > 0) {
		return { bindings: new Set(), expressions: [], ambiguous: true };
	}

	return { bindings, expressions, ambiguous: false };
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

	const diagnostics = (
		sourceFile as unknown as { parseDiagnostics?: ts.Diagnostic[] }
	).parseDiagnostics;
	if (diagnostics && diagnostics.length > 0) {
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

interface TemplateScope {
	bindings: Set<string>;
	ambiguous: boolean;
}

const splitTopLevelCommas = (text: string): string[] | null => {
	const parts: string[] = [];
	let current = "";
	let paren = 0;
	let bracket = 0;
	let brace = 0;
	let inString: string | null = null;
	let inTemplate = false;

	for (let i = 0; i < text.length; i++) {
		const char = text[i];
		const prev = i > 0 ? text[i - 1] : "";

		if (inString) {
			current += char;
			if (char === inString && prev !== "\\") {
				inString = null;
			}
			continue;
		}

		if (inTemplate) {
			current += char;
			if (char === "`" && prev !== "\\") {
				inTemplate = false;
			}
			continue;
		}

		if (char === '"' || char === "'") {
			inString = char;
			current += char;
			continue;
		}

		if (char === "`") {
			inTemplate = true;
			current += char;
			continue;
		}

		if (char === "(") paren++;
		else if (char === ")") paren--;
		else if (char === "[") bracket++;
		else if (char === "]") bracket--;
		else if (char === "{") brace++;
		else if (char === "}") brace--;

		if (paren < 0 || bracket < 0 || brace < 0) {
			return null;
		}

		if (char === "," && paren === 0 && bracket === 0 && brace === 0) {
			parts.push(current);
			current = "";
			continue;
		}

		current += char;
	}

	if (
		paren !== 0 ||
		bracket !== 0 ||
		brace !== 0 ||
		inString !== null ||
		inTemplate
	) {
		return null;
	}

	parts.push(current);
	return parts;
};

export interface PatternAnalysisResult {
	bindings: Set<string>;
	expressions: Array<{
		content: string;
		relativeStart: number;
		relativeEnd: number;
	}>;
	ambiguous: boolean;
}

const analyseBindingPattern = (
	patternSource: string,
	baseRelativeOffset = 0,
): PatternAnalysisResult => {
	let trimmed = patternSource;
	let leadingSpaces = 0;
	while (leadingSpaces < trimmed.length && /\s/.test(trimmed[leadingSpaces])) {
		leadingSpaces++;
	}
	trimmed = trimmed.trim();
	if (!trimmed) {
		return { bindings: new Set(), expressions: [], ambiguous: false };
	}

	const overallOffset = baseRelativeOffset + leadingSpaces;

	if (trimmed.startsWith("(") && trimmed.endsWith(")")) {
		const inner = trimmed.slice(1, -1);
		const split = splitTopLevelCommas(inner);
		if (split !== null) {
			if (split.length === 0 || split.length > 3) {
				return { bindings: new Set(), expressions: [], ambiguous: true };
			}
			const bindings = new Set<string>();
			const expressions: PatternExpression[] = [];

			let currentPartOffset = overallOffset + 1; // skip outer '('
			for (const part of split) {
				let partLeading = 0;
				while (partLeading < part.length && /\s/.test(part[partLeading])) {
					partLeading++;
				}
				const partTrimmed = part.trim();
				if (!partTrimmed) {
					return { bindings: new Set(), expressions: [], ambiguous: true };
				}

				const partOffset = currentPartOffset + partLeading;
				const res = collectPatternExpressionsAndBindings(partTrimmed);
				if (res.ambiguous) {
					return { bindings: new Set(), expressions: [], ambiguous: true };
				}

				for (const b of res.bindings) {
					bindings.add(b);
				}
				for (const expr of res.expressions) {
					expressions.push({
						content: expr.content,
						relativeStart: expr.relativeStart + partOffset,
						relativeEnd: expr.relativeEnd + partOffset,
					});
				}

				currentPartOffset += part.length + 1; // +1 for comma
			}

			return { bindings, expressions, ambiguous: false };
		}
	}

	const res = collectPatternExpressionsAndBindings(trimmed);
	if (res.ambiguous) {
		return { bindings: new Set(), expressions: [], ambiguous: true };
	}

	const expressions = res.expressions.map((expr) => ({
		content: expr.content,
		relativeStart: expr.relativeStart + overallOffset,
		relativeEnd: expr.relativeEnd + overallOffset,
	}));

	return { bindings: res.bindings, expressions, ambiguous: false };
};

interface ElementScopeExtraction {
	addedBindings: Set<string>;
	ambiguous: boolean;
	vForSourceExpression?: {
		content: string;
		loc: SourceLocation;
	};
	patternExpressions: Array<{
		content: string;
		range: PropRange;
	}>;
}

const extractElementScope = (
	node: VueTemplateNode,
	templateStartOffset: number,
): ElementScopeExtraction => {
	const addedBindings = new Set<string>();
	let ambiguous = false;
	let vForSourceExpression:
		| { content: string; loc: SourceLocation }
		| undefined;
	const patternExpressions: Array<{ content: string; range: PropRange }> = [];

	for (const prop of node.props ?? []) {
		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}

		const directive = prop as VueDirectiveNode;
		if (directive.name === "for" && directive.exp?.content) {
			const parsed = parseVForExpression(directive.exp.content);
			if (parsed) {
				const patternAnalysis = analyseBindingPattern(parsed.aliasExpression);
				for (const b of patternAnalysis.bindings) {
					addedBindings.add(b);
				}
				if (patternAnalysis.ambiguous) {
					ambiguous = true;
				}
				if (directive.exp.loc) {
					const expStart = templateStartOffset + directive.exp.loc.start.offset;
					for (const expr of patternAnalysis.expressions) {
						patternExpressions.push({
							content: expr.content,
							range: {
								start: expStart + expr.relativeStart,
								end: expStart + expr.relativeEnd,
							},
						});
					}
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
				} else {
					ambiguous = true;
				}
			} else {
				ambiguous = true;
			}
			continue;
		}

		if (directive.name === "slot" && directive.exp?.content) {
			const patternAnalysis = analyseBindingPattern(directive.exp.content);
			for (const b of patternAnalysis.bindings) {
				addedBindings.add(b);
			}
			if (patternAnalysis.ambiguous) {
				ambiguous = true;
			}
			if (directive.exp.loc) {
				const expStart = templateStartOffset + directive.exp.loc.start.offset;
				for (const expr of patternAnalysis.expressions) {
					patternExpressions.push({
						content: expr.content,
						range: {
							start: expStart + expr.relativeStart,
							end: expStart + expr.relativeEnd,
						},
					});
				}
			}
		}
	}

	return { addedBindings, ambiguous, vForSourceExpression, patternExpressions };
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
	elementId: number,
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
		id: elementId,
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
	filePath?: string,
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
	const diagnostics: MigrationDiagnostic[] = [];
	let nextElementId = 0;

	const addAmbiguousScopeDiagnostic = (range: PropRange): void => {
		diagnostics.push({
			code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
			severity: "warning",
			message:
				"Cannot analyse a template scope pattern in this element; local prop-object migration is suppressed for the affected subtree.",
			operationId: step.operation.id,
			filePath: filePath ?? "",
			start: range.start,
			end: range.end,
			suggestion:
				"Simplify the template scope pattern or inline the property explicitly.",
		});
	};

	const visitNode = (
		node: VueTemplateNode,
		scopeBindings: Set<string>,
		scopeAmbiguous: boolean,
	): void => {
		if (node.type === NodeTypes.ELEMENT) {
			const scopeExtraction = extractElementScope(node, templateStartOffset);
			if (scopeExtraction.ambiguous && !scopeAmbiguous) {
				const range = getNodeRange(node.loc, templateStartOffset);
				if (range) {
					addAmbiguousScopeDiagnostic(range);
				} else {
					diagnostics.push({
						code: DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT,
						severity: "warning",
						message:
							"Cannot analyse a template scope pattern in this element; local prop-object migration is suppressed for the affected subtree.",
						operationId: step.operation.id,
						filePath: filePath ?? "",
						suggestion:
							"Simplify the template scope pattern or inline the property explicitly.",
					});
				}
			}
			const nodeAmbiguous = scopeAmbiguous || scopeExtraction.ambiguous;

			for (const patternExpr of scopeExtraction.patternExpressions) {
				expressions.push({
					content: patternExpr.content,
					range: patternExpr.range,
					scopeBindings: new Set(scopeBindings),
				});
			}

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
				nextElementId,
			);
			if (analysis) {
				nextElementId += 1;
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

	return { templateStartOffset, elements, expressions, diagnostics };
};

export const projectVueTemplate = (
	filePath: string,
	fullContent: string,
	collection: VueTemplateCollection,
	baseRevision: number,
	step: RenamePropStepDefinition,
	suppressedElementIds?: ReadonlySet<number>,
): FileAnalysis | null => {
	const { operation } = step;
	const currentPropName = operation.from;
	const nextPropName = operation.to;

	const edits: TextEdit[] = [];

	for (const element of collection.elements) {
		if (!element.isTarget) {
			continue;
		}

		if (!element.directSourceProp) {
			continue;
		}

		if (suppressedElementIds?.has(element.id)) {
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
		filePath,
	);
	const templateAnalysis = projectVueTemplate(
		filePath,
		fullContent,
		collection,
		baseRevision,
		step,
	);
	if (!templateAnalysis) {
		if (collection.diagnostics.length === 0) {
			return null;
		}
		return {
			kind: "modify",
			filePath,
			baseRevision,
			content: fullContent,
			edits: [],
			changes: [],
			diagnostics: collection.diagnostics,
		};
	}
	return {
		...templateAnalysis,
		diagnostics: [...templateAnalysis.diagnostics, ...collection.diagnostics],
	};
};
