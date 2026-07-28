import { DiagnosticCode } from "./diagnostic.js";
import type {
	MigrationAnalysis,
	MigrationDiagnostic,
	MigrationExecutionContext,
	MigrationStepDefinition,
	MigrationStepExecutor,
} from "./types.js";

export interface ExecutorRegistry {
	analyse(
		step: MigrationStepDefinition,
		context: MigrationExecutionContext,
	): Promise<MigrationAnalysis>;
}

/**
 * Creates an internal executor registry from the supplied trusted executors.
 *
 * The registry validates that every step type is registered before analysis
 * begins and rejects duplicate registrations deterministically.
 */
export const createExecutorRegistry = (
	executors: ReadonlyArray<MigrationStepExecutor<MigrationStepDefinition>>,
): ExecutorRegistry => {
	const byType = new Map<string, MigrationStepExecutor<MigrationStepDefinition>>();
	const seenTypes = new Set<string>();

	for (const executor of executors) {
		if (seenTypes.has(executor.type)) {
			throw new Error(`Duplicate migration step executor registration for type "${executor.type}".`);
		}

		seenTypes.add(executor.type);
		byType.set(executor.type, executor);
	}

	const assertRegistered = (step: MigrationStepDefinition): MigrationDiagnostic | null => {
		if (byType.has(step.type)) {
			return null;
		}

		return {
			code: DiagnosticCode.INVALID_MANIFEST,
			severity: "error",
			message: `No executor is registered for migration step type "${step.type}".`,
			operationId: step.operation.id,
		};
	};

	return {
		async analyse(step, context) {
			const diagnostic = assertRegistered(step);
			if (diagnostic) {
				return { fileAnalyses: [], diagnostics: [diagnostic] };
			}

			const executor = byType.get(step.type) as MigrationStepExecutor<MigrationStepDefinition>;
			return executor.analyse(step, context);
		},
	};
};
