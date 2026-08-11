import type {
	CodemodFramework,
	FileAnalysis,
	MigrationExecutionContext,
	RenamePropStepDefinition,
} from "../../core/types.js";

export interface RenamePropAdapter {
	readonly framework: CodemodFramework;

	collectFiles(context: MigrationExecutionContext): Promise<string[]>;

	analyseFile(
		filePath: string,
		content: string,
		step: RenamePropStepDefinition,
		context: MigrationExecutionContext,
	): Promise<FileAnalysis | null>;
}
