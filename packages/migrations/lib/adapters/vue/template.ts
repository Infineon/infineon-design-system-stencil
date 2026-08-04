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

interface VueCompilerParseError {
	message: string;
	loc?: {
		start?: { offset?: number };
		end?: { offset?: number };
	};
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
	visibleBindings: Set<string>;
}

export interface PatternAnalysis {
	bindings: Set<string>;
	referenceExpressions: PatternExpression[];
	ambiguous: boolean;
}

const analyseBindingPattern = (
	patternSource: string,
	initialVisibleBindings: ReadonlySet<string> = new Set(),
): PatternAnalysis => {
	const wrapperPrefix = "(";
	const wrapperSuffix = ") => {}";
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
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	if (!sourceFile.statements || sourceFile.statements.length !== 1) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	const stmt = sourceFile.statements[0];
	if (
		!ts.isExpressionStatement(stmt) ||
		!ts.isArrowFunction(stmt.expression)
	) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	const parameterDeclarations = stmt.expression.parameters;
	if (parameterDeclarations.length !== 1) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	const bindings = new Set<string>();
	const referenceExpressions: PatternExpression[] = [];
	const visibleBindings = new Set(initialVisibleBindings);
	const collectReference = (expr: ts.Expression): void => {
		const relativeStart = expr.getStart(sourceFile) - wrapperPrefix.length;
		const relativeEnd = expr.getEnd() - wrapperPrefix.length;
		referenceExpressions.push({
			content: expr.getText(sourceFile),
			relativeStart,
			relativeEnd,
			visibleBindings: new Set(visibleBindings),
		});
	};
	const visitBindingName = (node: ts.BindingName): void => {
		if (ts.isIdentifier(node)) {
			bindings.add(node.text);
			visibleBindings.add(node.text);
			return;
		}
		for (const element of node.elements) {
			if (ts.isOmittedExpression(element)) {
				continue;
			}
			if (ts.isBindingElement(element)) {
				if (element.propertyName && ts.isComputedPropertyName(element.propertyName)) {
					collectReference(element.propertyName.expression);
				}
				if (element.initializer) {
					collectReference(element.initializer);
				}
				visitBindingName(element.name);
				continue;
			}
		}
	};

	const parameter = parameterDeclarations[0];
	if (ts.isIdentifier(parameter.name)) {
		bindings.add(parameter.name.text);
	} else {
		visitBindingName(parameter.name);
	}

	if (parameter.initializer) {
		const expr = parameter.initializer;
		const relativeStart = expr.getStart(sourceFile) - wrapperPrefix.length;
		const relativeEnd = expr.getEnd() - wrapperPrefix.length;
		referenceExpressions.push({
			content: expr.getText(sourceFile),
			relativeStart,
			relativeEnd,
			visibleBindings: new Set(visibleBindings),
		});
		if (ts.isIdentifier(parameter.name)) {
			visibleBindings.add(parameter.name.text);
		}
	}
	if (ts.isIdentifier(parameter.name) && !parameter.initializer) {
		visibleBindings.add(parameter.name.text);
	}

	const parseDiagnostics = (
		sourceFile as unknown as { parseDiagnostics?: ts.Diagnostic[] }
	).parseDiagnostics;
	if (parseDiagnostics && parseDiagnostics.length > 0) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	return { bindings, referenceExpressions, ambiguous: false };
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

export interface VForAliasAnalysis {
	bindings: Set<string>;
	referenceExpressions: PatternExpression[];
	ambiguous: boolean;
}

const analyseVForAlias = (patternSource: string): VForAliasAnalysis => {
	const trimmed = patternSource.trim();
	if (!trimmed) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	if (!trimmed.startsWith("(") || !trimmed.endsWith(")")) {
		const analysis = analyseBindingPattern(trimmed);
		return {
			bindings: analysis.bindings,
			referenceExpressions: analysis.referenceExpressions,
			ambiguous: analysis.ambiguous,
		};
	}

	const inner = trimmed.slice(1, -1);
	const split = splitTopLevelCommas(inner);
	if (!split) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	const normalizedParts = split.map((part) => part.trim());
	if (normalizedParts.some((part) => part.length === 0)) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	if (normalizedParts.length > 3) {
		return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
	}

	const bindings = new Set<string>();
	const referenceExpressions: PatternExpression[] = [];
	let currentPartOffset = 1;

	const visibleBindings = new Set<string>();
	for (const part of split) {
		let leadingSpaces = 0;
		while (leadingSpaces < part.length && /\s/.test(part[leadingSpaces])) {
			leadingSpaces += 1;
		}
		const partTrimmed = part.trim();
		if (!partTrimmed) {
			return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
		}

		const partAnalysis = analyseBindingPattern(partTrimmed, visibleBindings);
		if (partAnalysis.ambiguous) {
			return { bindings: new Set(), referenceExpressions: [], ambiguous: true };
		}

		for (const binding of partAnalysis.bindings) {
			bindings.add(binding);
			visibleBindings.add(binding);
		}

		for (const expr of partAnalysis.referenceExpressions) {
			referenceExpressions.push({
				content: expr.content,
				relativeStart: expr.relativeStart + currentPartOffset + leadingSpaces,
				relativeEnd: expr.relativeEnd + currentPartOffset + leadingSpaces,
				visibleBindings: new Set(expr.visibleBindings),
			});
		}

		currentPartOffset += part.length + 1;
	}

	return { bindings, referenceExpressions, ambiguous: false };
};

interface ElementScopeExtraction {
	addedBindings: Set<string>;
	ambiguous: boolean;
	vForSourceExpression?: {
		content: string;
		loc: SourceLocation;
	};
	patternReferenceExpressions: Array<{
		content: string;
		range: PropRange;
		visibleBindings: Set<string>;
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
	const patternReferenceExpressions: Array<{
		content: string;
		range: PropRange;
		visibleBindings: Set<string>;
	}> = [];

	for (const prop of node.props ?? []) {
		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}

		const directive = prop as VueDirectiveNode;
		if (directive.name === "for" && directive.exp?.content) {
			const parsed = parseVForExpression(directive.exp.content);
			if (parsed) {
				const patternAnalysis = analyseVForAlias(parsed.aliasExpression);
				for (const b of patternAnalysis.bindings) {
					addedBindings.add(b);
				}
				if (patternAnalysis.ambiguous) {
					ambiguous = true;
				}
				if (directive.exp.loc) {
					const expStart = templateStartOffset + directive.exp.loc.start.offset;
					for (const expr of patternAnalysis.referenceExpressions) {
						patternReferenceExpressions.push({
							content: expr.content,
							range: {
								start: expStart + expr.relativeStart,
								end: expStart + expr.relativeEnd,
							},
							visibleBindings: expr.visibleBindings,
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
				for (const expr of patternAnalysis.referenceExpressions) {
					patternReferenceExpressions.push({
						content: expr.content,
						range: {
							start: expStart + expr.relativeStart,
							end: expStart + expr.relativeEnd,
						},
						visibleBindings: expr.visibleBindings,
					});
				}
			}
		}
	}

	return {
		addedBindings,
		ambiguous,
		vForSourceExpression,
		patternReferenceExpressions,
	};
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
	parentScope: ReadonlySet<string>,
	childScope: ReadonlySet<string>,
	expressions: ObservedTemplateExpression[],
	hasVForSource: boolean,
): void => {
	const collectExpression = (
		expression: VueSimpleExpressionNode | undefined,
		scopeBindings: ReadonlySet<string>,
	): void => {
		if (
			!isSimpleExpressionNode(expression) ||
			expression.isStatic ||
			!expression.content
		) {
			return;
		}

		const range = getNodeRange(expression.loc, templateStartOffset);
		if (!range) {
			return;
		}

		expressions.push({
			content: expression.content,
			range,
			scopeBindings: new Set(scopeBindings),
		});
	};

	for (const prop of node.props ?? []) {
		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}

		const directive = prop as VueDirectiveNode;
		if (directive.name === "for") {
			if (hasVForSource) {
				continue;
			}

			collectExpression(directive.exp, parentScope);
			continue;
		}
		if (directive.name === "slot") {
			collectExpression(directive.arg, parentScope);
			continue;
		}
		if (directive.name === "if" || directive.name === "else-if") {
			collectExpression(directive.exp, parentScope);
			continue;
		}

		collectExpression(directive.arg, childScope);
		collectExpression(directive.exp, childScope);
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

	const templateParseErrors: VueCompilerParseError[] = [];
	const templateAst = parseVueTemplate(templateContent, {
		onError(error) {
			templateParseErrors.push(error as VueCompilerParseError);
		},
	}) as {
		children: VueTemplateNode[];
	};

	const elements: VueElementAnalysis[] = [];
	const expressions: ObservedTemplateExpression[] = [];
	const diagnostics: MigrationDiagnostic[] = [];
	let nextElementId = 0;

	for (const parseError of templateParseErrors) {
		diagnostics.push({
			code: DiagnosticCode.PARSE_FAILED,
			severity: "error",
			message: parseError.message,
			filePath: filePath ?? "",
			start:
				parseError.loc?.start?.offset !== undefined
					? templateStartOffset + parseError.loc.start.offset
					: undefined,
			end:
				parseError.loc?.end?.offset !== undefined
					? templateStartOffset + parseError.loc.end.offset
					: undefined,
			suggestion: "Fix the Vue template syntax before running the migration.",
		});
	}

	const visitNode = (
		node: VueTemplateNode,
		scopeBindings: Set<string>,
		scopeAmbiguous: boolean,
	): void => {
		if (node.type === NodeTypes.ELEMENT) {
			const scopeExtraction = extractElementScope(node, templateStartOffset);
			const nodeAmbiguous = scopeAmbiguous || scopeExtraction.ambiguous;

			for (const patternExpr of scopeExtraction.patternReferenceExpressions) {
				expressions.push({
					content: patternExpr.content,
					range: patternExpr.range,
						scopeBindings: new Set([
							...scopeBindings,
							...patternExpr.visibleBindings,
						]),
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
				scopeBindings,
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
	if (collection.diagnostics.some((diagnostic) => diagnostic.code === DiagnosticCode.PARSE_FAILED)) {
		return null;
	}

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
