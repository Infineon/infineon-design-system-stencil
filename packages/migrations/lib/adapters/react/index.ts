import { tagNameToReactComponentName } from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationExecutionContext,
	RenamePropStepDefinition,
} from "../../core/types.js";
import type { RenamePropAdapter } from "../../operations/rename-prop/adapter.js";
import { collectFilesByExtension } from "../../project/file-system.js";
import { isJsxSourceFile } from "../shared/jsx.js";
import { resolveReactWrapperImports } from "./imports.js";
import { analyseJsxFile } from "./jsx.js";

const REACT_EXTENSIONS = [".tsx", ".jsx", ".ts", ".js", ".mts", ".cts"];
const REACT_IMPORT_SOURCE = "@infineon/infineon-design-system-react";

export class ReactRenamePropAdapter implements RenamePropAdapter {
	framework = "react" as const;

	async collectFiles(context: MigrationExecutionContext): Promise<string[]> {
		return collectFilesByExtension(context.rootDirectory, REACT_EXTENSIONS);
	}

	async analyseFile(
		filePath: string,
		content: string,
		baseRevision: number,
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		if (!isJsxSourceFile(filePath)) {
			return null;
		}

		const targetComponentNames = new Set([
			tagNameToReactComponentName(step.operation.component),
		]);
		const imports = resolveReactWrapperImports(
			content,
			REACT_IMPORT_SOURCE,
			targetComponentNames,
		);

		return analyseJsxFile(filePath, content, baseRevision, step, imports);
	}
}
