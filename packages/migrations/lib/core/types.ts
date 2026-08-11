export type CodemodFramework = "html" | "react" | "angular" | "vue";

export type SharedCodemodFramework = Exclude<CodemodFramework, "angular">;

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

export interface RunnerExecutionResult {
	framework: CodemodFramework;
	dryRun: boolean;
	detectedProject: DetectedProject;
	upgradeRange: UpgradeRange;
	modifiedFiles: Array<{ filePath: string; changes: string[] }>;
	processedFileCount: number;
	warnings: string[];
}

export interface VirtualWorkspace {
	load(filePath: string, content: string): WorkspaceFile;
	read(filePath: string): WorkspaceFile | undefined;
	applyStep(fileAnalyses: readonly FileAnalysis[]): MigrationDiagnostic[];
	reset(): void;
	getFiles(): WorkspaceFile[];
}

export interface MigrationExecutionContext {
	rootDirectory: string;
	framework: CodemodFramework;
	packageName: string;
	fromVersion: string;
	toVersion: string;
	workspace?: VirtualWorkspace;
}

export interface MigrationStepDefinition {
	type: string;
	releaseVersion: string;
	operation: MigrationOperation;
}

export interface RenamePropStepDefinition extends MigrationStepDefinition {
	type: "rename-prop";
	operation: RenamePropOperation;
}

export interface FileAnalysis {
	kind: "modify";
	filePath: string;
	content: string;
	edits: TextEdit[];
	changes: string[];
	diagnostics: MigrationDiagnostic[];
}

export interface MigrationAnalysis {
	fileAnalyses: FileAnalysis[];
	processedFilePaths: string[];
	diagnostics: MigrationDiagnostic[];
}

export interface MigrationStepExecutor<TStep extends MigrationStepDefinition> {
	readonly type: TStep["type"];

	analyse(
		step: TStep,
		context: MigrationExecutionContext,
	): Promise<MigrationAnalysis>;
}

export interface PlannedFileChange {
	filePath: string;
	originalContent: string | null;
	updatedContent: string | null;
	operationIds: string[];
	changes: string[];
}

export interface MigrationPlan {
	framework: SharedCodemodFramework;
	fromVersion: string;
	toVersion: string;
	appliedReleases: string[];
	processedFileCount: number;
	fileChanges: PlannedFileChange[];
	diagnostics: MigrationDiagnostic[];
}

export interface WorkspaceFile {
	filePath: string;
	originalContent: string;
	currentContent: string;
	operationIds: string[];
	changes: string[];
}
