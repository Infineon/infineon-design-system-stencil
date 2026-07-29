import ts from "typescript";

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
		{ noLib: true, target: ts.ScriptTarget.Latest },
		compilerHost,
	);
	return { checker: program.getTypeChecker() };
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
