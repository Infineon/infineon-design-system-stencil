import path from "node:path";

import { parseFragment } from "parse5";

import type { CodemodRunner, FileChange, PropRenameMigration, RunnerContext } from "../../core/types.js";
import { collectFilesByExtension } from "../../project/file-system.js";
import { readFileAndSkipBinary } from "../shared/index.js";

const HTML_EXTENSIONS = [".html", ".htm"];

interface Replacement {
	start: number;
	end: number;
	text: string;
	label: string;
}

interface OffsetRange {
	startOffset: number;
	endOffset: number;
}

interface HtmlElementLocation extends OffsetRange {
	attrs?: Record<string, OffsetRange>;
}

interface HtmlAttributeNode {
	name: string;
}

interface HtmlNode {
	nodeName: string;
	tagName?: string;
	attrs?: HtmlAttributeNode[];
	childNodes?: HtmlNode[];
	sourceCodeLocation?: OffsetRange | HtmlElementLocation;
}

const pushReplacement = (
	replacements: Replacement[],
	start: number,
	end: number,
	text: string,
	label: string,
): void => {
	if (
		replacements.some(
			(replacement) =>
				replacement.start === start && replacement.end === end && replacement.text === text,
		)
	) {
		return;
	}

	replacements.push({ start, end, text, label });
};

const applyReplacements = (content: string, replacements: Replacement[]): string =>
	[...replacements]
		.sort((left, right) => right.start - left.start)
		.reduce(
			(currentContent, replacement) =>
				`${currentContent.slice(0, replacement.start)}${replacement.text}${currentContent.slice(replacement.end)}`,
			content,
		);

const collectHtmlReplacements = (
	filePath: string,
	content: string,
	rules: PropRenameMigration[],
): Replacement[] => {
	const fileLabel = path.basename(filePath);
	const fragment = parseFragment(content, { sourceCodeLocationInfo: true }) as HtmlNode;
	const replacements: Replacement[] = [];

	const visit = (node: HtmlNode): void => {
		if (node.tagName) {
			const elementLocation = node.sourceCodeLocation as HtmlElementLocation | undefined;

			for (const rule of rules) {
				if (rule.type !== "prop-rename") {
					continue;
				}

				if (node.tagName !== rule.component || !node.attrs || !elementLocation?.attrs) {
					continue;
				}

				for (const attribute of node.attrs) {
					const attributeLocation = elementLocation.attrs[attribute.name];
					if (attributeLocation && attribute.name === rule.from) {
						pushReplacement(
							replacements,
							attributeLocation.startOffset,
							attributeLocation.startOffset + rule.from.length,
							rule.to,
							`${fileLabel}: ${rule.component} prop ${rule.from} -> ${rule.to}`,
						);
					}
				}
			}
		}

		for (const childNode of node.childNodes ?? []) {
			visit(childNode);
		}
	};

	visit(fragment);
	return replacements;
};

export class HtmlCodemodRunner implements CodemodRunner {
	framework = "html" as const;

	async collectFiles(cwd: string): Promise<string[]> {
		return collectFilesByExtension(cwd, HTML_EXTENSIONS);
	}

	async transformFile(filePath: string, context: RunnerContext): Promise<FileChange | null> {
		const originalContent = await readFileAndSkipBinary(filePath);
		if (originalContent === null) {
			return null;
		}

		const replacements = collectHtmlReplacements(filePath, originalContent, context.migrations);
		if (replacements.length === 0) {
			return null;
		}

		const updatedContent = applyReplacements(originalContent, replacements);
		if (updatedContent === originalContent) {
			return null;
		}

		return {
			filePath,
			changes: Array.from(new Set(replacements.map((replacement) => replacement.label))),
			updatedContent,
		};
	}
}
