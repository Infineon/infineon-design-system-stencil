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

interface VueDirectiveNode {
	type: number;
	name: string;
	arg?: VueDirectiveArgumentNode;
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

export const analyseVueTemplate = (
	filePath: string,
	fullContent: string,
	templateContent: string,
	templateStartOffset: number,
	baseRevision: number,
	step: RenamePropStepDefinition,
): FileAnalysis | null => {
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

	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const visitNode = (node: VueTemplateNode): void => {
		if (
			node.type !== NodeTypes.ELEMENT ||
			typeof node.tag !== "string" ||
			!node.loc ||
			!Array.isArray(node.props)
		) {
			visitChildren(node);
			return;
		}

		if (!targetTagNames.has(node.tag)) {
			visitChildren(node);
			return;
		}

		let sourceProp: (VueAttributeNode | VueDirectiveNode) | null = null;
		let sourcePropRange: { start: number; end: number } | null = null;
		let hasTargetConflict = false;

		for (const prop of node.props) {
			if (isVueAttributeNode(prop) && prop.name === currentPropName) {
				sourceProp = prop;
				sourcePropRange = {
					start: templateStartOffset + prop.loc.start.offset,
					end:
						templateStartOffset +
						prop.loc.start.offset +
						currentPropName.length,
				};
			}

			if (
				isVueAttributeNode(prop) &&
				prop.name === nextPropName
			) {
				hasTargetConflict = true;
			}

			if (
				isVueDirectiveNode(prop) &&
				prop.name === "bind" &&
				prop.arg?.isStatic === true &&
				prop.arg.content === currentPropName
			) {
				sourceProp = prop;
				sourcePropRange = {
					start: templateStartOffset + prop.arg.loc.start.offset,
					end: templateStartOffset + prop.arg.loc.end.offset,
				};
			}

			if (
				isVueDirectiveNode(prop) &&
				prop.name === "bind" &&
				prop.arg?.isStatic === true &&
				prop.arg.content === nextPropName
			) {
				hasTargetConflict = true;
			}
		}

		if (!sourceProp || !sourcePropRange) {
			visitChildren(node);
			return;
		}

		if (hasTargetConflict) {
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists on ${node.tag}.`,
				operationId: operation.id,
				filePath,
				start: sourcePropRange.start,
				end: sourcePropRange.end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});
			visitChildren(node);
			return;
		}

		edits.push({
			start: sourcePropRange.start,
			end: sourcePropRange.end,
			replacement: nextPropName,
			operationId: operation.id,
		});

		visitChildren(node);
	};

	const visitChildren = (node: VueTemplateNode): void => {
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
