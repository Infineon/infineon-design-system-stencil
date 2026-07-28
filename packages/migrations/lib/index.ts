export { runMigration } from "./cli/index.js";
export { DiagnosticCode, sortDiagnostics } from "./core/diagnostic.js";
export { applyEdits } from "./core/edit.js";
export type {
	CodemodFramework,
	DetectedProject,
	MigrationDiagnostic,
	MigrationManifest,
	MigrationOperation,
	MigrationRelease,
	MigrationRule,
	PropRenameMigration,
	RenamePropOperation,
	RunnerExecutionResult,
	TextEdit,
	UpgradeRange,
} from "./core/types.js";