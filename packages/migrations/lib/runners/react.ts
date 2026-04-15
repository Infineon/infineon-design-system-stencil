import { collectFilesByExtension } from "../file-system.js";
import type { CodemodRunner, FileChange, RunnerContext } from "../types.js";
import { readFileAndSkipBinary } from "./helpers.js";
import { isJsxSourceFile, transformReactFile } from "./react-jscodeshift.js";

const REACT_EXTENSIONS = [".tsx", ".jsx", ".ts", ".js", ".mts", ".cts"];
const REACT_IMPORT_SOURCE = "@infineon/infineon-design-system-react";

export class ReactCodemodRunner implements CodemodRunner {
	framework = "react" as const;

	async collectFiles(cwd: string): Promise<string[]> {
		return collectFilesByExtension(cwd, REACT_EXTENSIONS);
	}

	async transformFile(filePath: string, context: RunnerContext): Promise<FileChange | null> {
		if (!isJsxSourceFile(filePath) && !filePath.endsWith(".ts") && !filePath.endsWith(".js")) {
			return null;
		}

		const originalContent = await readFileAndSkipBinary(filePath);
		if (originalContent === null) {
			return null;
		}

		return transformReactFile(
			filePath,
			originalContent,
			REACT_IMPORT_SOURCE,
			context.manifest.migrations,
		);
	}
}