import { randomUUID } from "node:crypto";
import { rename, unlink } from "node:fs/promises";
import path from "node:path";
import { HtmlRenamePropAdapter } from "../adapters/html/index.js";
import { ReactRenamePropAdapter } from "../adapters/react/index.js";
import { VueRenamePropAdapter } from "../adapters/vue/index.js";
import { RenamePropExecutor } from "../operations/rename-prop/executor.js";
import { readTextFile, writeTextFile } from "../project/file-system.js";
import { sortDiagnostics } from "./diagnostic.js";
import {
	createExecutorRegistry,
	type ExecutorRegistry,
} from "./executor-registry.js";
import { selectMigrationReleases } from "./select-releases.js";
import type {
	MigrationAnalysis,
	MigrationDiagnostic,
	MigrationExecutionContext,
	MigrationManifest,
	MigrationPlan,
	MigrationStepDefinition,
	PlannedFileChange,
	SharedCodemodFramework,
	VirtualWorkspace,
	WorkspaceFile,
} from "./types.js";
import { createVirtualWorkspace } from "./workspace.js";

const createDefaultExecutors = (): ReadonlyArray<
	import("./types.js").MigrationStepExecutor<MigrationStepDefinition>
> => [
	new RenamePropExecutor([
		new HtmlRenamePropAdapter(),
		new ReactRenamePropAdapter(),
		new VueRenamePropAdapter(),
	]),
];

export interface AnalyseMigrationOptions {
	manifest: MigrationManifest;
	context: MigrationExecutionContext;
	fromVersion: string;
	toVersion: string;
	executors?: ExecutorRegistry;
}

const createStepDefinitions = (
	manifest: MigrationManifest,
	fromVersion: string,
	toVersion: string,
): { steps: MigrationStepDefinition[]; appliedReleases: string[] } => {
	const releases = selectMigrationReleases(manifest, fromVersion, toVersion);
	const steps: MigrationStepDefinition[] = [];
	const appliedReleases: string[] = [];

	for (const release of releases) {
		appliedReleases.push(release.version);
		for (const operation of release.operations) {
			steps.push({
				type: operation.type,
				releaseVersion: release.version,
				operation,
			});
		}
	}

	return { steps, appliedReleases };
};

interface ExecutedStep {
	analysis: MigrationAnalysis;
	workspaceDiagnostics: MigrationDiagnostic[];
}

const executeMigrationSteps = async (
	steps: MigrationStepDefinition[],
	registry: ExecutorRegistry,
	context: MigrationExecutionContext,
): Promise<ExecutedStep[]> => {
	const executed: ExecutedStep[] = [];
	let hasStepError = false;

	for (const step of steps) {
		const stepAnalysis = await registry.analyse(step, context);
		const workspaceDiagnostics =
			context.workspace?.applyStep(stepAnalysis.fileAnalyses) ?? [];
		executed.push({ analysis: stepAnalysis, workspaceDiagnostics });

		const stepDiagnostics = [
			...stepAnalysis.diagnostics,
			...workspaceDiagnostics,
			...stepAnalysis.fileAnalyses.flatMap(
				(fileAnalysis) => fileAnalysis.diagnostics,
			),
		];
		const hasErrors = stepDiagnostics.some(
			(diagnostic) => diagnostic.severity === "error",
		);
		if (hasErrors) {
			hasStepError = true;
			break;
		}
	}

	if (hasStepError) {
		context.workspace?.reset();
	}

	return executed;
};

const workspaceFilesToPlannedChanges = (
	files: WorkspaceFile[],
): PlannedFileChange[] =>
	files
		.filter((file) => file.currentContent !== file.originalContent)
		.map((file) => ({
			filePath: file.filePath,
			originalContent: file.originalContent,
			updatedContent: file.currentContent,
			operationIds: file.operationIds,
			changes: file.changes,
		}));

const buildPlanFromWorkspace = (
	framework: SharedCodemodFramework,
	fromVersion: string,
	toVersion: string,
	appliedReleases: string[],
	workspace: VirtualWorkspace,
	processedFilePaths: string[],
): MigrationPlan => {
	const files = workspace.getFiles();
	const fileChanges = workspaceFilesToPlannedChanges(files);
	const processedFileCount = new Set(processedFilePaths).size;

	return {
		framework,
		fromVersion,
		toVersion,
		appliedReleases,
		processedFileCount,
		fileChanges,
		diagnostics: sortDiagnostics([]),
	};
};

export interface MigrationFileSystem {
	readTextFile(filePath: string): Promise<string>;
	writeTextFile(filePath: string, content: string): Promise<void>;
	rename(oldPath: string, newPath: string): Promise<void>;
	remove(filePath: string): Promise<void>;
}

const defaultMigrationFileSystem: MigrationFileSystem = {
	readTextFile,
	writeTextFile,
	rename,
	remove: unlink,
};

interface StagedChange {
	filePath: string;
	tempPath: string;
	backupPath: string;
	state: "staged" | "backed-up" | "committed";
}

const errorMessage = (error: unknown): string =>
	error instanceof Error ? error.message : String(error);

const isMissingFileError = (error: unknown): boolean =>
	typeof error === "object" &&
	error !== null &&
	"code" in error &&
	(error as { code?: unknown }).code === "ENOENT";

const cleanupPaths = async (
	fileSystem: MigrationFileSystem,
	paths: string[],
): Promise<string[]> => {
	const failures: string[] = [];
	for (const filePath of paths) {
		try {
			await fileSystem.remove(filePath);
		} catch (error) {
			if (!isMissingFileError(error)) {
				failures.push(`${filePath}: ${errorMessage(error)}`);
			}
		}
	}
	return failures;
};

const stageMigrationPlan = async (
	changes: MigrationPlan["fileChanges"],
	fileSystem: MigrationFileSystem,
): Promise<StagedChange[]> => {
	const stagedChanges: StagedChange[] = [];
	try {
		for (const change of changes) {
			const uniqueId = randomUUID();
			const basePath = path.join(
				path.dirname(change.filePath),
				`.${path.basename(change.filePath)}.${uniqueId}`,
			);
			const stagedChange: StagedChange = {
				filePath: change.filePath,
				tempPath: `${basePath}.tmp`,
				backupPath: `${basePath}.bak`,
				state: "staged",
			};
			stagedChanges.push(stagedChange);
			await fileSystem.writeTextFile(
				stagedChange.tempPath,
				change.updatedContent,
			);
		}
		return stagedChanges;
	} catch (error) {
		const cleanupFailures = await cleanupPaths(
			fileSystem,
			stagedChanges.map((change) => change.tempPath),
		);
		const details = `Migration staging failed: ${errorMessage(error)}`;
		if (cleanupFailures.length > 0) {
			throw new Error(
				`${details}; staging cleanup failed: ${cleanupFailures.join("; ")}`,
			);
		}
		throw new Error(details);
	}
};

const commitMigrationTransaction = async (
	stagedChanges: StagedChange[],
	fileSystem: MigrationFileSystem,
): Promise<void> => {
	for (const change of stagedChanges) {
		try {
			await fileSystem.rename(change.filePath, change.backupPath);
			change.state = "backed-up";
			await fileSystem.rename(change.tempPath, change.filePath);
			change.state = "committed";
		} catch (error) {
			throw new Error(
				`Migration commit failed for ${change.filePath}: ${errorMessage(error)}`,
			);
		}
	}
};

const rollbackMigrationTransaction = async (
	stagedChanges: StagedChange[],
	fileSystem: MigrationFileSystem,
): Promise<string[]> => {
	const failures: string[] = [];
	for (const change of [...stagedChanges].reverse()) {
		if (change.state === "staged") {
			continue;
		}

		try {
			if (change.state === "committed") {
				await fileSystem.remove(change.filePath);
			}
			await fileSystem.rename(change.backupPath, change.filePath);
			change.state = "staged";
		} catch (error) {
			failures.push(`${change.filePath}: ${errorMessage(error)}`);
		}
	}

	const cleanupFailures = await cleanupPaths(
		fileSystem,
		stagedChanges.flatMap((change) => [change.tempPath, change.backupPath]),
	);
	return [...failures, ...cleanupFailures];
};

const cleanupMigrationTransaction = async (
	stagedChanges: StagedChange[],
	fileSystem: MigrationFileSystem,
): Promise<void> => {
	const failures = await cleanupPaths(
		fileSystem,
		stagedChanges.flatMap((change) => [change.tempPath, change.backupPath]),
	);
	if (failures.length > 0) {
		throw new Error(`Migration cleanup failed: ${failures.join("; ")}`);
	}
};

const mergeStepsIntoPlan = (
	framework: SharedCodemodFramework,
	fromVersion: string,
	toVersion: string,
	appliedReleases: string[],
	executedSteps: ExecutedStep[],
	workspace: VirtualWorkspace,
): MigrationPlan => {
	const processedFilePaths = executedSteps.flatMap(
		(step) => step.analysis.processedFilePaths,
	);
	const plan = buildPlanFromWorkspace(
		framework,
		fromVersion,
		toVersion,
		appliedReleases,
		workspace,
		processedFilePaths,
	);

	for (const step of executedSteps) {
		plan.diagnostics.push(...step.analysis.diagnostics);
		plan.diagnostics.push(...step.workspaceDiagnostics);
		for (const fileAnalysis of step.analysis.fileAnalyses) {
			plan.diagnostics.push(...fileAnalysis.diagnostics);
		}
	}

	plan.diagnostics = sortDiagnostics(plan.diagnostics);
	return plan;
};

export const analyseMigration = async ({
	manifest,
	context,
	fromVersion,
	toVersion,
	executors = createExecutorRegistry(createDefaultExecutors()),
}: AnalyseMigrationOptions): Promise<MigrationPlan> => {
	const { steps, appliedReleases } = createStepDefinitions(
		manifest,
		fromVersion,
		toVersion,
	);
	const workspace = createVirtualWorkspace();
	const contextWithWorkspace: MigrationExecutionContext = {
		...context,
		workspace,
	};
	const executedSteps = await executeMigrationSteps(
		steps,
		executors,
		contextWithWorkspace,
	);

	return mergeStepsIntoPlan(
		context.framework as SharedCodemodFramework,
		fromVersion,
		toVersion,
		appliedReleases,
		executedSteps,
		workspace,
	);
};

export const applyMigrationPlan = async (
	plan: MigrationPlan,
	fileSystem: MigrationFileSystem = defaultMigrationFileSystem,
): Promise<void> => {
	const hasErrors = plan.diagnostics.some(
		(diagnostic) => diagnostic.severity === "error",
	);
	if (hasErrors) {
		throw new Error(
			"Cannot apply migration plan because one or more errors were detected during analysis.",
		);
	}

	for (const change of plan.fileChanges) {
		const currentContent = await fileSystem.readTextFile(change.filePath);
		if (currentContent !== change.originalContent) {
			throw new Error(
				`Cannot apply migration plan because ${change.filePath} changed after analysis.`,
			);
		}
	}

	const stagedChanges = await stageMigrationPlan(plan.fileChanges, fileSystem);
	try {
		await commitMigrationTransaction(stagedChanges, fileSystem);
	} catch (applyError) {
		const rollbackFailures = await rollbackMigrationTransaction(
			stagedChanges,
			fileSystem,
		);
		if (rollbackFailures.length > 0) {
			throw new Error(
				`Migration apply failed: ${errorMessage(applyError)}; rollback failed: ${rollbackFailures.join("; ")}`,
			);
		}
		throw applyError;
	}

	await cleanupMigrationTransaction(stagedChanges, fileSystem);
};
