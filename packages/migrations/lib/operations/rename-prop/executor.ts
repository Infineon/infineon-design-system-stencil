import { HtmlRenamePropAdapter } from "../../adapters/html-adapter.js";
import { ReactRenamePropAdapter } from "../../adapters/react/index.js";
import { VueRenamePropAdapter } from "../../adapters/vue-adapter.js";
import type {
	FileAnalysis,
	MigrationAnalysis,
	MigrationExecutionContext,
	MigrationStepExecutor,
	RenamePropAdapter,
	RenamePropStepDefinition,
} from "../../core/types.js";
import { readFileAndSkipBinary } from "../../runners/shared/index.js";

const ADAPTERS: ReadonlyArray<RenamePropAdapter> = [
	new HtmlRenamePropAdapter(),
	new ReactRenamePropAdapter(),
	new VueRenamePropAdapter(),
];

const getAdapter = (framework: string): RenamePropAdapter => {
	const adapter = ADAPTERS.find((candidate) => candidate.framework === framework);
	if (!adapter) {
		throw new Error(`No rename-prop adapter available for framework "${framework}".`);
	}

	return adapter;
};

export class RenamePropExecutor
	implements MigrationStepExecutor<RenamePropStepDefinition>
{
	readonly type = "rename-prop";

	async analyse(
		step: RenamePropStepDefinition,
		context: MigrationExecutionContext,
	): Promise<MigrationAnalysis> {
		const adapter = getAdapter(context.framework);
		const files = await adapter.collectFiles(context);
		const fileAnalyses: FileAnalysis[] = [];
		const processedFilePaths: string[] = [];
		const diagnostics: import("../../core/types.js").MigrationDiagnostic[] = [];

		for (const filePath of files) {
			processedFilePaths.push(filePath);
			const workspaceFile = context.workspace?.read(filePath);
			const content = workspaceFile?.currentContent ?? await readFileAndSkipBinary(filePath);
			if (content === null) {
				continue;
			}

			const baseRevision = workspaceFile?.revision ?? 0;
			const analysis = await adapter.analyseFile(filePath, content, baseRevision, step, context);
			if (!analysis) {
				continue;
			}

			fileAnalyses.push(analysis);

			if (context.workspace) {
				const workspaceDiagnostics = context.workspace.analyse(analysis);
				diagnostics.push(...workspaceDiagnostics);
			}
		}

		return { fileAnalyses, processedFilePaths, diagnostics };
	}
}
