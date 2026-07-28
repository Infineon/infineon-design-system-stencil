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

		for (const filePath of files) {
			const analysis = await adapter.analyseFile(filePath, step, context);
			if (analysis) {
				fileAnalyses.push(analysis);
			}
		}

		return { fileAnalyses, diagnostics: [] };
	}
}
