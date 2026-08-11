import { HtmlRenamePropAdapter } from "../adapters/html/index.js";
import { ReactRenamePropAdapter } from "../adapters/react/index.js";
import { VueRenamePropAdapter } from "../adapters/vue/index.js";
import { RenamePropExecutor } from "../operations/rename-prop/executor.js";
import { writeTextFile } from "../project/file-system.js";
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
		await writeTextFile(change.filePath, change.updatedContent);
	}
};
