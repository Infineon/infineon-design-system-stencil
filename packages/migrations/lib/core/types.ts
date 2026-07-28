export type CodemodFramework = "html" | "react" | "angular" | "vue";

export interface RenamePropOperation {
	id: string;
	type: "rename-prop";
	component: string;
	from: string;
	to: string;
	notes?: string;
}

export type MigrationOperation = RenamePropOperation;

export interface MigrationRelease {
	version: string;
	operations: MigrationOperation[];
}

export interface MigrationManifest {
	schemaVersion: 1;
	releases: MigrationRelease[];
}

/** @deprecated legacy flat rename rule, kept briefly for adapter migration */
export interface PropRenameMigration {
	type: "prop-rename";
	component: string;
	from: string;
	to: string;
	targetVersion?: string;
	notes?: string;
}

/** @deprecated legacy flat rule union */
export type MigrationRule = PropRenameMigration;

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
	/** Flattened legacy rename rules, bridged from the canonical release manifest. */
	migrations: PropRenameMigration[];
}

export interface CodemodRunner {
	framework: CodemodFramework;
	collectFiles(cwd: string): Promise<string[]>;
	transformFile(filePath: string, context: RunnerContext): Promise<FileChange | null>;
}