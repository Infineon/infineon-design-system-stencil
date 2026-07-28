import { isJsxSourceFile } from "../../runners/jsx.js";
import type {
	FileAnalysis,
	MigrationExecutionContext,
	RenamePropAdapter,
	RenamePropStepDefinition,
} from "../../core/types.js";
import { collectFilesByExtension } from "../../project/file-system.js";
import { readFileAndSkipBinary } from "../../runners/shared/index.js";
import { analyseJsxFile } from "./jsx.js";
import { resolveReactWrapperImports } from "./imports.js";
import { tagNameToReactComponentName } from "../../core/naming.js";

const REACT_EXTENSIONS = [".tsx", ".jsx", ".ts", ".js", ".mts", ".cts"];
const REACT_IMPORT_SOURCE = "@infineon/infineon-design-system-react";

export class ReactRenamePropAdapter implements RenamePropAdapter {
	framework = "react" as const;

	async collectFiles(context: MigrationExecutionContext): Promise<string[]> {
		return collectFilesByExtension(context.rootDirectory, REACT_EXTENSIONS);
	}

	async analyseFile(
		filePath: string,
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		if (!isJsxSourceFile(filePath)) {
			return null;
		}

		const originalContent = await readFileAndSkipBinary(filePath);
		if (originalContent === null) {
			return null;
		}

		const targetComponentNames = new Set([tagNameToReactComponentName(step.operation.component)]);
		const imports = resolveReactWrapperImports(originalContent, REACT_IMPORT_SOURCE, targetComponentNames);

		return analyseJsxFile(filePath, originalContent, step, imports);
	}
}
