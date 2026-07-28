import { parseFragment } from "parse5";

import { DiagnosticCode } from "../core/diagnostic.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	MigrationExecutionContext,
	RenamePropAdapter,
	RenamePropStepDefinition,
	TextEdit,
} from "../core/types.js";
import { collectFilesByExtension } from "../project/file-system.js";

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
		content: string,
		baseRevision: number,
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		const { operation } = step;
		const edits: TextEdit[] = [];
		const diagnostics: MigrationDiagnostic[] = [];
		const fragment = parseFragment(content, { sourceCodeLocationInfo: true }) as HtmlNode;

		const visit = (node: HtmlNode): void => {
			if (
				node.tagName === operation.component &&
				node.attrs &&
				node.sourceCodeLocation
			) {
				const location = node.sourceCodeLocation as HtmlElementLocation;
				const sourceAttributeLocation = location.attrs?.[operation.from];
				const targetAttributeLocation = location.attrs?.[operation.to];

				if (!sourceAttributeLocation) {
					return;
				}

				if (targetAttributeLocation) {
					diagnostics.push({
						code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
						severity: "error",
						message: `Cannot rename "${operation.from}" to "${operation.to}" because "${operation.to}" already exists on <${operation.component}>.`,
						operationId: operation.id,
						filePath,
						start: sourceAttributeLocation.startOffset,
						end: sourceAttributeLocation.endOffset,
						suggestion: "Remove or rename the conflicting attribute before running the migration.",
					});
					return;
				}

				edits.push({
					start: sourceAttributeLocation.startOffset,
					end: sourceAttributeLocation.startOffset + operation.from.length,
					replacement: operation.to,
					operationId: operation.id,
				});
			}

			for (const childNode of node.childNodes ?? []) {
				visit(childNode);
			}
		};

		visit(fragment);

		if (edits.length === 0 && diagnostics.length === 0) {
			return null;
		}

		return {
			kind: "modify",
			filePath,
			baseRevision,
			content,
			edits,
			changes: [`${operation.component} prop ${operation.from} -> ${operation.to}`],
			diagnostics,
		};
	}
}
