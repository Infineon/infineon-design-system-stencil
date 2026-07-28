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
import { readFileAndSkipBinary } from "../runners/shared/index.js";
import { isJsxSourceFile, transformReactFile } from "../runners/react-jscodeshift.js";

const toLegacyRule = (operation: RenamePropOperation): PropRenameMigration => ({
	type: "prop-rename",
	component: operation.component,
	from: operation.from,
	to: operation.to,
	notes: operation.notes,
});

const REACT_EXTENSIONS = [".tsx", ".jsx", ".ts", ".js", ".mts", ".cts"];
const REACT_IMPORT_SOURCE = "@infineon/infineon-design-system-react";

export class ReactRenamePropAdapter implements RenamePropAdapter {
	framework = "react" as const;

	async collectFiles(context: MigrationExecutionContext): Promise<string[]> {
		return collectFilesByExtension(context.rootDirectory, REACT_EXTENSIONS);
	}

	async analyseFile(
		filePath: string,
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		if (!isJsxSourceFile(filePath)) {
			return null;
		}

		const originalContent = await readFileAndSkipBinary(filePath);
		if (originalContent === null) {
			return null;
		}

		const change = transformReactFile(
			filePath,
			originalContent,
			REACT_IMPORT_SOURCE,
			[toLegacyRule(step.operation)],
		);

		if (!change) {
			return null;
		}

		const edits = diffToEdits(originalContent, change.updatedContent, step.operation.id);

		return {
			kind: "modify",
			filePath,
			baseRevision: 0,
			originalContent,
			edits,
			changes: change.changes,
			diagnostics: [],
		};
	}
}
