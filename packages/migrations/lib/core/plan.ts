import { sortDiagnostics } from "./diagnostic.js";
import { applyEdits } from "./edit.js";
import {
	createExecutorRegistry,
	type ExecutorRegistry,
} from "./executor-registry.js";
import { selectMigrationReleases } from "./select-releases.js";
import type {
	FileAnalysis,
	MigrationAnalysis,
	MigrationDiagnostic,
	MigrationExecutionContext,
	MigrationManifest,
	MigrationPlan,
	MigrationStepDefinition,
	PlannedFileChange,
	RenamePropOperation,
	SharedCodemodFramework,
	TextEdit,
} from "./types.js";
import { writeTextFile } from "../project/file-system.js";
import { RenamePropExecutor } from "../operations/rename-prop/executor.js";

const DEFAULT_EXECUTORS: ReadonlyArray<
	import("./types.js").MigrationStepExecutor<MigrationStepDefinition>
> = [new RenamePropExecutor()];

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

const executeMigrationSteps = async (
	steps: MigrationStepDefinition[],
	registry: ExecutorRegistry,
	context: MigrationExecutionContext,
): Promise<MigrationAnalysis[]> => {
	const analyses: MigrationAnalysis[] = [];

	for (const step of steps) {
		analyses.push(await registry.analyse(step, context));
	}

	return analyses;
};

const mergeAnalysesIntoPlan = (
	framework: SharedCodemodFramework,
	fromVersion: string,
	toVersion: string,
	appliedReleases: string[],
	analyses: MigrationAnalysis[],
): MigrationPlan => {
	const diagnostics: MigrationDiagnostic[] = [];
	const fileAnalysesByPath = new Map<string, FileAnalysis[]>();
	let processedFileCount = 0;

	for (const analysis of analyses) {
		for (const fileAnalysis of analysis.fileAnalyses) {
			processedFileCount++;
			const existing = fileAnalysesByPath.get(fileAnalysis.filePath) ?? [];
			existing.push(fileAnalysis);
			fileAnalysesByPath.set(fileAnalysis.filePath, existing);
		}
	}

	for (const analysis of analyses) {
		diagnostics.push(...analysis.diagnostics);
	}

	for (const fileAnalyses of fileAnalysesByPath.values()) {
		for (const fileAnalysis of fileAnalyses) {
			diagnostics.push(...fileAnalysis.diagnostics);
		}
	}

	const fileChanges: PlannedFileChange[] = [];

	for (const [filePath, fileAnalyses] of fileAnalysesByPath) {
		const originalContent = fileAnalyses[0].originalContent;
		const operationIds: string[] = [];
		const changes: string[] = [];
		const allEdits: TextEdit[] = [];

		for (const analysis of fileAnalyses) {
			for (const change of analysis.changes) {
				if (!changes.includes(change)) {
					changes.push(change);
				}
			}

			for (const edit of analysis.edits) {
				if (!operationIds.includes(edit.operationId)) {
					operationIds.push(edit.operationId);
				}
			}
			allEdits.push(...analysis.edits);
		}

		const { content: updatedContent, diagnostics: editDiagnostics } = applyEdits(
			originalContent,
			allEdits,
		);

		diagnostics.push(...editDiagnostics);

		fileChanges.push({
			filePath,
			originalContent,
			updatedContent: updatedContent === originalContent ? null : updatedContent,
			operationIds,
			changes,
		});
	}

	return {
		framework,
		fromVersion,
		toVersion,
		appliedReleases,
		processedFileCount,
		fileChanges,
		diagnostics: sortDiagnostics(diagnostics),
	};
};

export const analyseMigration = async ({
	manifest,
	context,
	fromVersion,
	toVersion,
	executors = createExecutorRegistry(DEFAULT_EXECUTORS),
}: AnalyseMigrationOptions): Promise<MigrationPlan> => {
	const { steps, appliedReleases } = createStepDefinitions(
		manifest,
		fromVersion,
		toVersion,
	);
	const analyses = await executeMigrationSteps(steps, executors, context);

	return mergeAnalysesIntoPlan(
		context.framework as SharedCodemodFramework,
		fromVersion,
		toVersion,
		appliedReleases,
		analyses,
	);
};

export const applyMigrationPlan = async (plan: MigrationPlan): Promise<void> => {
	const hasErrors = plan.diagnostics.some((diagnostic) => diagnostic.severity === "error");
	if (hasErrors) {
		throw new Error("Cannot apply migration plan because one or more errors were detected during analysis.");
	}

	for (const change of plan.fileChanges) {
		if (change.updatedContent !== null) {
			await writeTextFile(change.filePath, change.updatedContent);
		}
	}
};
