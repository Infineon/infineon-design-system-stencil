import path from "node:path";
import { parseFragment } from "parse5";

import type {
	FileAnalysis,
	MigrationExecutionContext,
	RenamePropAdapter,
	RenamePropStepDefinition,
	TextEdit,
} from "../core/types.js";
import { collectFilesByExtension } from "../project/file-system.js";
import { readFileAndSkipBinary } from "../runners/shared/index.js";

const HTML_EXTENSIONS = [".html", ".htm"];

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

export class HtmlRenamePropAdapter implements RenamePropAdapter {
	framework = "html" as const;

	async collectFiles(context: MigrationExecutionContext): Promise<string[]> {
		return collectFilesByExtension(context.rootDirectory, HTML_EXTENSIONS);
	}

	async analyseFile(
		filePath: string,
		step: RenamePropStepDefinition,
		context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		const originalContent = await readFileAndSkipBinary(filePath);
		if (originalContent === null) {
			return null;
		}

		const { operation } = step;
		const edits: TextEdit[] = [];
		const fragment = parseFragment(originalContent, { sourceCodeLocationInfo: true }) as HtmlNode;
		const fileLabel = path.basename(filePath);

		const visit = (node: HtmlNode): void => {
			if (
				node.tagName === operation.component &&
				node.attrs &&
				node.sourceCodeLocation
			) {
				const location = node.sourceCodeLocation as HtmlElementLocation;
				const attributeLocation = location.attrs?.[operation.from];

				if (attributeLocation) {
					edits.push({
						start: attributeLocation.startOffset,
						end: attributeLocation.startOffset + operation.from.length,
						replacement: operation.to,
						operationId: operation.id,
					});
				}
			}

			for (const childNode of node.childNodes ?? []) {
				visit(childNode);
			}
		};

		visit(fragment);

		if (edits.length === 0) {
			return null;
		}

		return {
			kind: "modify",
			filePath,
			baseRevision: 0,
			originalContent,
			edits,
			changes: [`${operation.component} prop ${operation.from} -> ${operation.to}`],
			diagnostics: [],
		};
	}
}
