import { NodeTypes, parse as parseVueTemplate } from "@vue/compiler-dom";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { tagNameToReactComponentName } from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";

interface SourceLocation {
	start: { offset: number };
	end: { offset: number };
}

interface VueAttributeNode {
	type: number;
	name: string;
	loc: SourceLocation;
}

interface VueDirectiveArgumentNode {
	content: string;
	isStatic: boolean;
	loc: SourceLocation;
}

interface VueDirectiveNode {
	type: number;
	name: string;
	arg?: VueDirectiveArgumentNode;
}

interface VueTemplateNode {
	type: number;
	tag?: string;
	loc?: SourceLocation;
	props?: Array<VueAttributeNode | VueDirectiveNode>;
	children?: VueTemplateNode[];
	branches?: Array<{ children: VueTemplateNode[] }>;
}

interface VueCompilerParseError {
	message: string;
	loc?: {
		start?: { offset?: number };
		end?: { offset?: number };
	};
}

interface PropRange {
	start: number;
	end: number;
}

interface DirectPropInfo {
	range: PropRange;
}

export interface VueElementAnalysis {
	id: number;
	elementRange: PropRange;
	tag: string;
	isTarget: boolean;
	directSourceProp: DirectPropInfo | null;
	directTargetProp: DirectPropInfo | null;
}

export interface VueTemplateCollection {
	templateStartOffset: number;
	elements: VueElementAnalysis[];
	diagnostics: MigrationDiagnostic[];
}

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

const analyseElement = (
	node: VueTemplateNode,
	templateStartOffset: number,
	targetTagNames: Set<string>,
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

	let directSourceProp: DirectPropInfo | null = null;
	let directTargetProp: DirectPropInfo | null = null;

	for (const prop of node.props) {
		if (prop.type === NodeTypes.ATTRIBUTE) {
			const attribute = prop as VueAttributeNode;
			const propName = attribute.name;
			const range = {
				start: templateStartOffset + attribute.loc.start.offset,
				end:
					templateStartOffset + attribute.loc.start.offset + propName.length,
			};
			if (propName === currentPropName) {
				directSourceProp = { range };
			}
			if (propName === nextPropName) {
				directTargetProp = { range };
			}
			continue;
		}

		if (prop.type !== NodeTypes.DIRECTIVE) {
			continue;
		}
		const directive = prop as VueDirectiveNode;
		if (directive.name !== "bind" || directive.arg?.isStatic !== true) {
			continue;
		}
		const propName = directive.arg.content;
		const range = {
			start: templateStartOffset + directive.arg.loc.start.offset,
			end: templateStartOffset + directive.arg.loc.end.offset,
		};
		if (propName === currentPropName) {
			directSourceProp = { range };
		}
		if (propName === nextPropName) {
			directTargetProp = { range };
		}
	}

	return {
		id: elementId,
		elementRange,
		tag: node.tag,
		isTarget: targetTagNames.has(node.tag),
		directSourceProp,
		directTargetProp,
	};
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
	const templateParseErrors: VueCompilerParseError[] = [];
	const templateAst = parseVueTemplate(templateContent, {
		onError(error) {
			templateParseErrors.push(error as VueCompilerParseError);
		},
	}) as { children: VueTemplateNode[] };
	const elements: VueElementAnalysis[] = [];
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

	const visitNode = (node: VueTemplateNode): void => {
		const analysis = analyseElement(
			node,
			templateStartOffset,
			targetTagNames,
			operation.from,
			operation.to,
			nextElementId,
		);
		if (analysis) {
			nextElementId += 1;
			elements.push(analysis);
		}
		for (const child of node.children ?? []) {
			visitNode(child);
		}
		for (const branch of node.branches ?? []) {
			for (const child of branch.children) {
				visitNode(child);
			}
		}
	};

	for (const child of templateAst.children) {
		visitNode(child);
	}

	return { templateStartOffset, elements, diagnostics };
};

export const projectVueTemplate = (
	filePath: string,
	fullContent: string,
	collection: VueTemplateCollection,
	step: RenamePropStepDefinition,
): FileAnalysis | null => {
	if (
		collection.diagnostics.some(
			(diagnostic) => diagnostic.code === DiagnosticCode.PARSE_FAILED,
		)
	) {
		return null;
	}

	const { operation } = step;
	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];
	for (const element of collection.elements) {
		if (!element.isTarget || !element.directSourceProp) {
			continue;
		}
		if (element.directTargetProp) {
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${operation.from}" to "${operation.to}" because "${operation.to}" already exists on <${operation.component}>.`,
				operationId: operation.id,
				filePath,
				start: element.directSourceProp.range.start,
				end: element.directSourceProp.range.end,
				suggestion:
					"Remove or rename the conflicting attribute before running the migration.",
			});
			continue;
		}
		edits.push({
			start: element.directSourceProp.range.start,
			end: element.directSourceProp.range.end,
			replacement: operation.to,
			operationId: operation.id,
		});
	}
	if (edits.length === 0 && diagnostics.length === 0) {
		return null;
	}
	return {
		kind: "modify",
		filePath,
		content: fullContent,
		edits,
		changes: [`prop ${operation.from} -> ${operation.to}`],
		diagnostics,
	};
};

export const analyseVueTemplate = (
	filePath: string,
	fullContent: string,
	templateContent: string,
	templateStartOffset: number,
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
		step,
	);
	if (!templateAnalysis) {
		if (collection.diagnostics.length === 0) {
			return null;
		}
		return {
			kind: "modify",
			filePath,
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