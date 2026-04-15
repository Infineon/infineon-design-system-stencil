export type CodemodFramework = "html" | "react" | "angular" | "vue";

export interface PropRenameOperation {
	type: "prop-rename";
	from: string;
	to: string;
}

export type RenameOperation = PropRenameOperation;

export interface MigrationRule {
	component: string;
	operations: RenameOperation[];
	notes?: string;
	targetVersion?: string;
}

export interface MigrationManifest {
	schemaVersion: number;
	migrations: MigrationRule[];
}

export interface CliOptions {
	configPath?: string;
	cwd: string;
	dryRun: boolean;
	framework?: CodemodFramework;
}

export interface ProjectDetectionResult {
	framework: CodemodFramework;
	installedPackage: string;
	installedVersion?: string;
}

export interface FileChange {
	filePath: string;
	changes: string[];
	updatedContent: string;
}

export interface RunnerExecutionResult {
	framework: CodemodFramework;
	dryRun: boolean;
	detectedProject: ProjectDetectionResult;
	modifiedFiles: Array<Pick<FileChange, "filePath" | "changes">>;
	processedFileCount: number;
	targetVersion?: string;
	warnings: string[];
}

export interface RunnerContext {
	manifest: MigrationManifest;
}

export interface CodemodRunner {
	framework: CodemodFramework;
	collectFiles(cwd: string): Promise<string[]>;
	transformFile(filePath: string, context: RunnerContext): Promise<FileChange | null>;
}