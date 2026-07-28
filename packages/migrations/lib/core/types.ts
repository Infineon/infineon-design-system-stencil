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
	operations: ReadonlyArray<MigrationOperation>;
}

export interface MigrationManifest {
	schemaVersion: 1;
	releases: ReadonlyArray<MigrationRelease>;
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
	fromVersion?: string;
	toVersion?: string;
}

export interface ProjectDetectionResult {
	framework: CodemodFramework;
	installedPackage: string;
	installedVersion?: string;
}

export interface DetectedProject {
	rootDirectory: string;
	framework: CodemodFramework;
	designSystemPackage: string;
	declaredVersion?: string;
}

export interface UpgradeRange {
	fromVersion: string;
	toVersion: string;
}

export interface MigrationDiagnostic {
	code: string;
	severity: "warning" | "error";
	message: string;
	operationId?: string;
	filePath?: string;
	start?: number;
	end?: number;
	suggestion?: string;
}

export interface TextEdit {
	start: number;
	end: number;
	replacement: string;
	operationId: string;
}

export interface FileChange {
	filePath: string;
	changes: string[];
	updatedContent: string;
}

export interface RunnerExecutionResult {
	framework: CodemodFramework;
	dryRun: boolean;
	detectedProject: DetectedProject;
	upgradeRange: UpgradeRange;
	modifiedFiles: Array<Pick<FileChange, "filePath" | "changes">>;
	processedFileCount: number;
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