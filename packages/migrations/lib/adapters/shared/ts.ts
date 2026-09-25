import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import type { MigrationDiagnostic } from "../../core/types.js";

export const createSourceFile = (
	filePath: string,
	content: string,
	scriptKind: ts.ScriptKind = filePath.endsWith("x")
		? ts.ScriptKind.TSX
		: ts.ScriptKind.TS,
): ts.SourceFile =>
	ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true, scriptKind);

export const createSingleFileProgram = (
	filePath: string,
	sourceFile: ts.SourceFile,
): { checker: ts.TypeChecker } => {
	const compilerHost: ts.CompilerHost = {
		getSourceFile: (name) => (name === filePath ? sourceFile : undefined),
		getDefaultLibFileName: () => "lib.d.ts",
		writeFile: () => {},
		getCurrentDirectory: () => "",
		getDirectories: () => [],
		fileExists: () => false,
		readFile: () => undefined,
		getCanonicalFileName: (name) => name,
		useCaseSensitiveFileNames: () => true,
		getNewLine: () => "\n",
	};

	const program = ts.createProgram(
		[filePath],
		{
			noLib: true,
			target: ts.ScriptTarget.Latest,
			allowJs: true,
			module: ts.ModuleKind.ESNext,
		},
		compilerHost,
	);
	return { checker: program.getTypeChecker() };
};

export const getScriptKindForFilePath = (filePath: string): ts.ScriptKind => {
	const lower = filePath.toLowerCase();
	if (lower.endsWith(".jsx")) {
		return ts.ScriptKind.JSX;
	}
	if (lower.endsWith(".tsx")) {
		return ts.ScriptKind.TSX;
	}
	if (lower.endsWith(".ts") || lower.endsWith(".mts") || lower.endsWith(".cts")) {
		return ts.ScriptKind.TS;
	}
	return ts.ScriptKind.JS;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getParseDiagnostics = (sourceFile: ts.SourceFile): ts.Diagnostic[] => {
	const syntacticDiagnostics = (sourceFile as any).parseDiagnostics as
		| ts.Diagnostic[]
		| undefined;
	return syntacticDiagnostics ?? [];
};

export const collectTypeScriptParseDiagnostics = (
	sourceFile: ts.SourceFile,
	filePath: string,
	operationId: string,
): MigrationDiagnostic[] => {
	const parseDiagnostics = getParseDiagnostics(sourceFile);
	return parseDiagnostics.map((diagnostic) => {
		const start =
			diagnostic.start !== undefined ? diagnostic.start : undefined;
		const length =
			diagnostic.length !== undefined ? diagnostic.length : undefined;
		return {
			code: DiagnosticCode.PARSE_FAILED,
			severity: "error" as const,
			message: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
			operationId,
			filePath,
			start,
			end:
				start !== undefined && length !== undefined
					? start + length
					: undefined,
			suggestion: "Fix the file syntax before running the migration.",
		};
	});
};

export interface NodeLocation {
	start: number;
	end: number;
}

export const getNodeLocation = (
	node: ts.Node,
	sourceFile: ts.SourceFile,
): NodeLocation => ({
	start: node.getStart(sourceFile),
	end: node.getEnd(),
});
