import type {
	FileAnalysis,
	MigrationAnalysis,
	MigrationDiagnostic,
	MigrationExecutionContext,
	MigrationStepExecutor,
	RenamePropStepDefinition,
} from "../../core/types.js";
import { readFileAndSkipBinary } from "../../runners/shared/index.js";
import type { RenamePropAdapter } from "./adapter.js";

export class RenamePropExecutor
	implements MigrationStepExecutor<RenamePropStepDefinition>
{
	readonly type = "rename-prop";

	readonly #adapters = new Map<string, RenamePropAdapter>();

	constructor(adapters: ReadonlyArray<RenamePropAdapter>) {
		for (const adapter of adapters) {
			if (this.#adapters.has(adapter.framework)) {
				throw new Error(
					`Duplicate rename-prop adapter registered for framework "${adapter.framework}".`,
				);
			}

			this.#adapters.set(adapter.framework, adapter);
		}
	}

	async analyse(
		step: RenamePropStepDefinition,
		context: MigrationExecutionContext,
	): Promise<MigrationAnalysis> {
		const adapter = this.#adapters.get(context.framework);
		if (!adapter) {
			throw new Error(
				`No rename-prop adapter available for framework "${context.framework}".`,
			);
		}
		const files = await adapter.collectFiles(context);
		const fileAnalyses: FileAnalysis[] = [];
		const processedFilePaths: string[] = [];
		const diagnostics: MigrationDiagnostic[] = [];

		for (const filePath of files) {
			const workspaceFile = context.workspace?.read(filePath);
			const content =
				workspaceFile?.currentContent ??
				(await readFileAndSkipBinary(filePath));
			if (content === null) {
				continue;
			}

			processedFilePaths.push(filePath);
			const baseRevision = workspaceFile?.revision ?? 0;
			const analysis = await adapter.analyseFile(
				filePath,
				content,
				baseRevision,
				step,
				context,
			);
			if (!analysis) {
				continue;
			}

			fileAnalyses.push(analysis);
		}

		return { fileAnalyses, processedFilePaths, diagnostics };
	}
}
