import path from "node:path";

import { NodeTypes, parse as parseVueTemplate } from "@vue/compiler-dom";
import { parse as parseVueSfc } from "@vue/compiler-sfc";

import { collectFilesByExtension } from "../file-system.js";
import { tagNameToReactComponentName } from "../naming.js";
import type { CodemodRunner, FileChange, RunnerContext } from "../types.js";
import { readFileAndSkipBinary } from "./helpers.js";
import { isJsxSourceFile, transformJsxFile } from "./jsx.js";

const VUE_EXTENSIONS = [".vue", ".tsx", ".jsx", ".ts", ".js", ".mts", ".cts"];
const VUE_IMPORT_SOURCE = "@infineon/infineon-design-system-vue";

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
	loc: SourceLocation;
}

interface VueDirectiveNode {
	type: number;
	name: string;
	arg?: VueDirectiveArgumentNode;
	loc: SourceLocation;
}

const isVueAttributeNode = (node: VueAttributeNode | VueDirectiveNode): node is VueAttributeNode =>
	node.type === NodeTypes.ATTRIBUTE;

const isVueDirectiveNode = (node: VueAttributeNode | VueDirectiveNode): node is VueDirectiveNode =>
	node.type === NodeTypes.DIRECTIVE;

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

interface VueSfcBlock {
	content: string;
	lang?: string;
	loc: SourceLocation;
}

interface Replacement {
	start: number;
	end: number;
	text: string;
	labels: string[];
}

const pushReplacement = (
	replacements: Replacement[],
	start: number,
	end: number,
	text: string,
	labels: string | string[],
): void => {
	const normalizedLabels = Array.isArray(labels) ? labels : [labels];
	const existingReplacement = replacements.find(
		(replacement) =>
			replacement.start === start && replacement.end === end && replacement.text === text,
	);

	if (existingReplacement) {
		for (const label of normalizedLabels) {
			if (!existingReplacement.labels.includes(label)) {
				existingReplacement.labels.push(label);
			}
		}
		return;
	}

	replacements.push({ start, end, text, labels: normalizedLabels });
};

const applyReplacements = (content: string, replacements: Replacement[]): string => {
	return [...replacements]
		.sort((left, right) => right.start - left.start)
		.reduce(
			(currentContent, replacement) =>
				`${currentContent.slice(0, replacement.start)}${replacement.text}${currentContent.slice(replacement.end)}`,
			content,
		);
};

const getVirtualScriptPath = (filePath: string, block: VueSfcBlock, suffix: string): string => {
	switch (block.lang) {
		case "ts":
		case "tsx":
		case "js":
		case "jsx":
			return `${filePath}.${suffix}.${block.lang}`;
		default:
			return `${filePath}.${suffix}.js`;
	}
};

const applyVueScriptBlockTransform = (
	filePath: string,
	block: VueSfcBlock,
	suffix: string,
	rules: RunnerContext["manifest"]["migrations"],
	replacements: Replacement[],
): void => {
	const blockChange = transformJsxFile(
		getVirtualScriptPath(filePath, block, suffix),
		block.content,
		VUE_IMPORT_SOURCE,
		rules,
	);

	if (!blockChange) {
		return;
	}

	pushReplacement(
		replacements,
		block.loc.start.offset,
		block.loc.end.offset,
		blockChange.updatedContent,
		blockChange.changes,
	);
};

const collectVueTemplateReplacements = (
	filePath: string,
	block: VueSfcBlock,
	rules: RunnerContext["manifest"]["migrations"],
	replacements: Replacement[],
): void => {
	const fileLabel = path.basename(filePath);
	const templateAst = parseVueTemplate(block.content) as { children: VueTemplateNode[] };
	const baseOffset = block.loc.start.offset;

	const visitNode = (node: VueTemplateNode): void => {
		if (
			node.type === NodeTypes.ELEMENT &&
			typeof node.tag === "string" &&
			node.loc &&
			Array.isArray(node.props)
		) {
			for (const rule of rules) {
				const targetTagNames = new Set([rule.component, tagNameToReactComponentName(rule.component)]);

				if (!targetTagNames.has(node.tag)) {
					continue;
				}

				for (const prop of node.props) {
					for (const operation of rule.operations) {
						if (isVueAttributeNode(prop) && prop.name === operation.from) {
							pushReplacement(
								replacements,
								baseOffset + prop.loc.start.offset,
								baseOffset + prop.loc.start.offset + operation.from.length,
								operation.to,
								`${fileLabel}: ${node.tag} prop ${operation.from} -> ${operation.to}`,
							);
						}

						if (
							isVueDirectiveNode(prop) &&
							prop.name === "bind" &&
							prop.arg?.content === operation.from
						) {
							pushReplacement(
								replacements,
								baseOffset + prop.arg.loc.start.offset,
								baseOffset + prop.arg.loc.end.offset,
								operation.to,
								`${fileLabel}: ${node.tag} prop ${operation.from} -> ${operation.to}`,
							);
						}

					}
				}
			}
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
};

const transformVueSfcFile = (
	filePath: string,
	content: string,
	rules: RunnerContext["manifest"]["migrations"],
): FileChange | null => {
	const { descriptor } = parseVueSfc(content, { filename: filePath });
	const replacements: Replacement[] = [];

	if (descriptor.script) {
		applyVueScriptBlockTransform(filePath, descriptor.script as VueSfcBlock, "script", rules, replacements);
	}

	if (descriptor.scriptSetup) {
		applyVueScriptBlockTransform(filePath, descriptor.scriptSetup as VueSfcBlock, "script-setup", rules, replacements);
	}

	if (descriptor.template) {
		collectVueTemplateReplacements(filePath, descriptor.template as VueSfcBlock, rules, replacements);
	}

	if (replacements.length === 0) {
		return null;
	}

	const updatedContent = applyReplacements(content, replacements);
	if (updatedContent === content) {
		return null;
	}

	return {
		filePath,
		changes: Array.from(new Set(replacements.flatMap((replacement) => replacement.labels))),
		updatedContent,
	};
};

export class VueCodemodRunner implements CodemodRunner {
	framework = "vue" as const;

	async collectFiles(cwd: string): Promise<string[]> {
		return collectFilesByExtension(cwd, VUE_EXTENSIONS);
	}

	async transformFile(filePath: string, context: RunnerContext): Promise<FileChange | null> {
		const originalContent = await readFileAndSkipBinary(filePath);
		if (originalContent === null) {
			return null;
		}

		if (filePath.endsWith(".vue")) {
			return transformVueSfcFile(filePath, originalContent, context.manifest.migrations);
		}

		if (isJsxSourceFile(filePath)) {
			return transformJsxFile(
				filePath,
				originalContent,
				VUE_IMPORT_SOURCE,
				context.manifest.migrations,
			);
		}

		return transformJsxFile(filePath, originalContent, VUE_IMPORT_SOURCE, context.manifest.migrations);
	}
}