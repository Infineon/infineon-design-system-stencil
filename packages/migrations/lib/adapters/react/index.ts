import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import { tagNameToReactComponentName } from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	MigrationExecutionContext,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import type { RenamePropAdapter } from "../../operations/rename-prop/adapter.js";
import { collectFilesByExtension } from "../../project/file-system.js";
import { isJsxSourceFile } from "../shared/jsx.js";
import {
	createSingleFileProgram,
	createSourceFile,
} from "../shared/ts.js";
import { resolveReactWrapperImports } from "./imports.js";
import { analyseJsxFile } from "./jsx.js";
import { analyseLocalSpreads } from "./local-spreads.js";

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

		const sourceFile = createSourceFile(filePath, content);
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
			baseRevision,
			step,
			imports,
			sourceFile,
			checker,
		);
		const localSpreadResult = analyseLocalSpreads(
			filePath,
			content,
			step,
			imports,
			sourceFile,
			checker,
		);

		const hasProjectedConflict = localSpreadResult.diagnostics.some(
			(diagnostic) => diagnostic.code === DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
		);

		const edits: TextEdit[] = hasProjectedConflict
			? []
			: [
					...(directAnalysis?.edits ?? []),
					...localSpreadResult.edits,
				];
		const diagnostics: MigrationDiagnostic[] = [
			...(directAnalysis?.diagnostics ?? []),
			...localSpreadResult.diagnostics,
		];
		const changes: string[] = hasProjectedConflict
			? []
			: [
					...(directAnalysis?.changes ?? []),
					...localSpreadResult.changes,
				];

		if (edits.length === 0 && diagnostics.length === 0) {
			return null;
		}

		return {
			kind: "modify",
			filePath,
			baseRevision,
			content,
			edits,
			changes,
			diagnostics,
		};
	}
}
