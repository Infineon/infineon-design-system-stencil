import ts from "typescript";

import { tagNameToReactComponentName } from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	MigrationExecutionContext,
	RenamePropStepDefinition,
} from "../../core/types.js";
import type { RenamePropAdapter } from "../../operations/rename-prop/adapter.js";
import { collectFilesByExtension } from "../../project/file-system.js";
import { isJsxSourceFile } from "../shared/jsx.js";
import {
	collectTypeScriptParseDiagnostics,
	createSingleFileProgram,
	createSourceFile,
	getScriptKindForFilePath,
} from "../shared/ts.js";
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
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		if (!isJsxSourceFile(filePath)) {
			return null;
		}

		const targetComponentNames = new Set([
			tagNameToReactComponentName(step.operation.component),
		]);

		const sourceFile = createSourceFile(
			filePath,
			content,
			getScriptKindForFilePath(filePath),
		);
		const parseDiagnostics = collectTypeScriptParseDiagnostics(
			sourceFile,
			filePath,
			step.operation.id,
		);

		if (parseDiagnostics.length > 0) {
			return {
				filePath,
				content,
				edits: [],
				changes: [],
				diagnostics: parseDiagnostics,
			};
		}

		const { checker } = createSingleFileProgram(filePath, sourceFile);
		const imports = resolveReactWrapperImports(
			sourceFile,
			checker,
			REACT_IMPORT_SOURCE,
			targetComponentNames,
		);

		const directAnalysis = analyseJsxFile(
			filePath,
			content,
			step,
			imports,
			sourceFile,
			checker,
		);

		const edits = directAnalysis?.edits ?? [];
		const diagnostics: MigrationDiagnostic[] = directAnalysis?.diagnostics ?? [];
		const changes: string[] = directAnalysis?.changes ?? [];

		if (edits.length === 0 && diagnostics.length === 0) {
			return null;
		}

		return {
			filePath,
			content,
			edits,
			changes,
			diagnostics,
		};
	}
}
