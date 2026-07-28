import { diffToEdits } from "../core/diff.js";
import type {
	FileAnalysis,
	MigrationExecutionContext,
	PropRenameMigration,
	RenamePropAdapter,
	RenamePropOperation,
	RenamePropStepDefinition,
} from "../core/types.js";
import { collectFilesByExtension } from "../project/file-system.js";
import { isJsxSourceFile, transformJsxFile } from "../runners/jsx.js";
import { transformVueSfcFile } from "../runners/vue/index.js";

const toLegacyRule = (operation: RenamePropOperation): PropRenameMigration => ({
	type: "prop-rename",
	component: operation.component,
	from: operation.from,
	to: operation.to,
	notes: operation.notes,
});

const VUE_EXTENSIONS = [".vue", ".tsx", ".jsx", ".ts", ".js", ".mts", ".cts"];
const VUE_IMPORT_SOURCE = "@infineon/infineon-design-system-vue";

export class VueRenamePropAdapter implements RenamePropAdapter {
	framework = "vue" as const;

	async collectFiles(context: MigrationExecutionContext): Promise<string[]> {
		return collectFilesByExtension(context.rootDirectory, VUE_EXTENSIONS);
	}

	async analyseFile(
		filePath: string,
		content: string,
		baseRevision: number,
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		let change: { filePath: string; changes: string[]; updatedContent: string } | null = null;

		if (filePath.endsWith(".vue")) {
			change = transformVueSfcFile(filePath, content, [toLegacyRule(step.operation)]);
		} else if (isJsxSourceFile(filePath) || filePath.endsWith(".ts") || filePath.endsWith(".js") || filePath.endsWith(".mts") || filePath.endsWith(".cts")) {
			change = transformJsxFile(
				filePath,
				content,
				VUE_IMPORT_SOURCE,
				[toLegacyRule(step.operation)],
				{ requireJsxExtension: false },
			);
		}

		if (!change) {
			return null;
		}

		const edits = diffToEdits(content, change.updatedContent, step.operation.id);

		return {
			kind: "modify",
			filePath,
			baseRevision,
			content,
			edits,
			changes: change.changes,
			diagnostics: [],
		};
	}
}
