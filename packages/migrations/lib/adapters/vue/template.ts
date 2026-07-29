import { NodeTypes, parse as parseVueTemplate } from "@vue/compiler-dom";

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

export interface VueElementAnalysis {
	elementRange: PropRange;
	tag: string;
	isTarget: boolean;
	directSourceProp: DirectPropInfo | null;
	directTargetProp: DirectPropInfo | null;
	argumentlessBindings: ArgumentlessBinding[];
	hasUnsupportedBindings: boolean;
	scopeBindings: Set<string>;
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

const V_FOR_KEYWORDS = /\s+(?:in|of)\s+/;

const extractVForAliases = (expression: string): string[] => {
	const match = expression.match(V_FOR_KEYWORDS);
	if (!match || match.index === undefined) {
		return [];
	}

	const left = expression.slice(0, match.index).trim();
	const withoutParens =
		left.startsWith("(") && left.endsWith(")")
			? left.slice(1, -1)
			: left;

	const aliases: string[] = [];
	for (const part of withoutParens.split(",")) {
		const trimmed = part.trim();
		if (!trimmed) {
			continue;
		}

		if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
			const body = trimmed.slice(1, -1);
			for (const keyPart of body.split(",")) {
				const keyTrimmed = keyPart.trim();
				if (/^[A-Za-z_$][\w$]*$/.test(keyTrimmed)) {
					aliases.push(keyTrimmed);
				}
			}
		} else if (/^[A-Za-z_$][\w$]*$/.test(trimmed)) {
			aliases.push(trimmed);
		}
	}

	return aliases;
};

const extractSlotScopeBindings = (expression: string): string[] => {
	const trimmed = expression.trim();
	if (!trimmed.startsWith("{") || !trimmed.endsWith("}")) {
		if (/^[A-Za-z_$][\w$]*$/.test(trimmed)) {
			return [trimmed];
		}
		return [];
	}

	const body = trimmed.slice(1, -1);
	const bindings: string[] = [];
	for (const part of body.split(",")) {
		const segment = part.trim();
		if (!segment) {
			continue;
		}

		const aliasMatch = segment.match(
			/^(?:[A-Za-z_$][\w$]*\s*:\s*)?([A-Za-z_$][\w$]*)$/,
		);
		if (aliasMatch) {
			bindings.push(aliasMatch[1]);
			continue;
		}

		if (segment.startsWith("{") && segment.endsWith("}")) {
			const nested = segment.slice(1, -1);
			for (const nestedPart of nested.split(",")) {
				const nestedTrimmed = nestedPart.trim();
				const nestedAlias = nestedTrimmed.match(
					/^(?:[A-Za-z_$][\w$]*\s*:\s*)?([A-Za-z_$][\w$]*)$/,
				);
				if (nestedAlias) {
					bindings.push(nestedAlias[1]);
				}
			}
		}
	}

	return bindings;
};

const collectScopeBindingsForElement = (node: VueTemplateNode): string[] => {
	const bindings: string[] = [];
	for (const prop of node.props ?? []) {
		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}

		const directive = prop as VueDirectiveNode;
		if (directive.name === "for" && directive.exp?.content) {
			bindings.push(...extractVForAliases(directive.exp.content));
			continue;
		}

		if (directive.name === "slot" && directive.exp?.content) {
			bindings.push(...extractSlotScopeBindings(directive.exp.content));
		}
	}

	return bindings;
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

const analyseElement = (
	node: VueTemplateNode,
	templateStartOffset: number,
	targetTagNames: Set<string>,
	scopeBindings: Set<string>,
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
	let hasUnsupportedBindings = false;

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
				if (isIdentifierExpression(exp.content)) {
					const range = getNodeRange(exp.loc, templateStartOffset);
					if (range) {
						argumentlessBindings.push({
							identifier: exp.content,
							range,
							loc: exp.loc,
						});
					}
				} else {
					hasUnsupportedBindings = true;
				}
			} else {
				hasUnsupportedBindings = true;
			}

			continue;
		}
	}

	return {
		elementRange,
		tag,
		isTarget,
		directSourceProp,
		directTargetProp,
		argumentlessBindings,
		hasUnsupportedBindings,
		scopeBindings: new Set(scopeBindings),
	};
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
	): void => {
		if (node.type === NodeTypes.ELEMENT) {
			const addedBindings = collectScopeBindingsForElement(node);
			const childScope = new Set(scopeBindings);
			for (const binding of addedBindings) {
				childScope.add(binding);
			}

			const analysis = analyseElement(
				node,
				templateStartOffset,
				targetTagNames,
				childScope,
				currentPropName,
				nextPropName,
			);
			if (analysis) {
				elements.push(analysis);
			}

		for (const prop of node.props ?? []) {
			if (prop.type !== NodeTypes.DIRECTIVE) {
				continue;
			}

			const directive = prop as VueDirectiveNode;
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
							scopeBindings: new Set(childScope),
						});
					}
				}
			}
		}

			for (const branch of node.branches ?? []) {
				for (const child of branch.children) {
					visitNode(child, childScope);
				}
			}

			return;
		}

		if (
			isSimpleExpressionNode(node) &&
			!node.isStatic &&
			node.content
		) {
			const range = getNodeRange(node.loc, templateStartOffset);
			if (range) {
				expressions.push({
					content: node.content,
					range,
					scopeBindings: new Set(scopeBindings),
				});
			}
		}

		for (const child of node.children ?? []) {
			visitNode(child, scopeBindings);
		}

		for (const branch of node.branches ?? []) {
			for (const child of branch.children) {
				visitNode(child, scopeBindings);
			}
		}
	};

	for (const child of templateAst.children) {
		visitNode(child, new Set());
	}

	return { templateStartOffset, elements, expressions };
};

export const projectVueTemplate = (
	filePath: string,
	fullContent: string,
	collection: VueTemplateCollection,
	baseRevision: number,
	step: RenamePropStepDefinition,
): FileAnalysis | null => {
	const { operation } = step;
	const currentPropName = operation.from;
	const nextPropName = operation.to;

	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	for (const element of collection.elements) {
		if (!element.isTarget) {
			continue;
		}

		if (element.directSourceProp && element.directTargetProp) {
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists on ${element.tag}.`,
				operationId: operation.id,
				filePath,
				start: element.directSourceProp.range.start,
				end: element.directSourceProp.range.end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});
			continue;
		}

		if (element.directSourceProp && element.argumentlessBindings.length === 0) {
			edits.push({
				start: element.directSourceProp.range.start,
				end: element.directSourceProp.range.end,
				replacement: nextPropName,
				operationId: operation.id,
			});
		}
	}

	if (edits.length === 0 && diagnostics.length === 0) {
		return null;
	}

	return {
		kind: "modify",
		filePath,
		baseRevision,
		content: fullContent,
		edits,
		changes: [`prop ${currentPropName} -> ${nextPropName}`],
		diagnostics,
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
