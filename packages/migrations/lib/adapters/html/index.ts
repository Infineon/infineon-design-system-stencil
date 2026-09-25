import type {
	FileAnalysis,
	MigrationExecutionContext,
	RenamePropStepDefinition,
} from "../../core/types.js";
import type { RenamePropAdapter } from "../../operations/rename-prop/adapter.js";
import { collectFilesByExtension } from "../../project/file-system.js";
import { analyseHtmlTemplate } from "./template.js";

const HTML_EXTENSIONS = [".html", ".htm"];

export class HtmlRenamePropAdapter implements RenamePropAdapter {
	framework = "html" as const;

	async collectFiles(
		context: MigrationExecutionContext,
	): Promise<string[]> {
		return collectFilesByExtension(context.rootDirectory, HTML_EXTENSIONS);
	}

	async analyseFile(
		filePath: string,
		content: string,
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		const { operation } = step;
		const { edits, diagnostics } = analyseHtmlTemplate(
			content,
			filePath,
			step,
		);

		if (edits.length === 0 && diagnostics.length === 0) {
			return null;
		}

		return {
			filePath,
			content,
			edits,
			changes: [
				`${operation.component} prop ${operation.from} -> ${operation.to}`,
			],
			diagnostics,
		};
	}
}
