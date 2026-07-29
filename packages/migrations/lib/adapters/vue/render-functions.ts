import ts from "typescript";

import { DiagnosticCode } from "../../core/diagnostic.js";
import {
	kebabToCamelCase,
	tagNameToReactComponentName,
} from "../../core/naming.js";
import type {
	FileAnalysis,
	MigrationDiagnostic,
	RenamePropStepDefinition,
	TextEdit,
} from "../../core/types.js";
import type { VueImportResolution, VueRenderHelperImport } from "./imports.js";

interface SourcePosition {
	start: number;
	end: number;
}

const createSourceFile = (filePath: string, content: string): ts.SourceFile =>
	ts.createSourceFile(
		filePath,
		content,
		ts.ScriptTarget.Latest,
		true,
		filePath.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
	);

const createSingleFileProgram = (
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

const getNodeLocation = (node: ts.Node, sourceFile: ts.SourceFile): SourcePosition => ({
	start: node.getStart(sourceFile),
	end: node.getEnd(),
});

const isTargetComponentArgument = (
	argument: ts.Expression,
	targetComponentNames: Set<string>,
	componentTagName: string,
): boolean => {
	if (ts.isIdentifier(argument) && targetComponentNames.has(argument.text)) {
		return true;
	}

	if (
		ts.isStringLiteral(argument) &&
		(argument.text === componentTagName ||
			argument.text === tagNameToReactComponentName(componentTagName))
	) {
		return true;
	}

	return false;
};

const isImportedVueRenderHelper = (
	callee: ts.Identifier,
	checker: ts.TypeChecker,
	helperImports: VueRenderHelperImport[],
): boolean => {
	const matchingHelper = helperImports.find(
		(helper) => helper.localName === callee.text,
	);
	if (!matchingHelper) {
		return false;
	}

	const symbol = checker.getSymbolAtLocation(callee);
	if (!symbol) {
		return false;
	}

	const declarations = symbol.getDeclarations();
	if (!declarations || declarations.length === 0) {
		return false;
	}

	const declaration = declarations[0];
	if (!declaration || !ts.isImportSpecifier(declaration)) {
		return false;
	}

	const importDeclaration = declaration.parent.parent.parent as ts.Node;
	if (!ts.isImportDeclaration(importDeclaration)) {
		return false;
	}

	const moduleSpecifier = importDeclaration.moduleSpecifier;
	if (!ts.isStringLiteral(moduleSpecifier) || moduleSpecifier.text !== "vue") {
		return false;
	}

	return true;
};

export const analyseRenderFunctions = (
	filePath: string,
	content: string,
	baseRevision: number,
	step: RenamePropStepDefinition,
	imports: VueImportResolution,
): FileAnalysis | null => {
	const { operation } = step;
	const targetComponentNames = new Set<string>(imports.localNames);
	const componentTagName = operation.component;

	const currentPropName = kebabToCamelCase(operation.from);
	const nextPropName = kebabToCamelCase(operation.to);

	let sourceFile: ts.SourceFile;
	let checker: ts.TypeChecker;
	try {
		sourceFile = createSourceFile(filePath, content);
		checker = createSingleFileProgram(filePath, sourceFile).checker;
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		return {
			kind: "modify",
			filePath,
			baseRevision,
			content,
			edits: [],
			changes: [],
			diagnostics: [
				{
					code: DiagnosticCode.PARSE_FAILED,
					severity: "error",
					message,
					operationId: operation.id,
					filePath,
				},
			],
		};
	}

	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];

	const collectParseDiagnostics = (): void => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const syntacticDiagnostics = (sourceFile as any).parseDiagnostics as
			| ts.Diagnostic[]
			| undefined;
		if (!syntacticDiagnostics || syntacticDiagnostics.length === 0) {
			return;
		}

		for (const diagnostic of syntacticDiagnostics) {
			const start =
				diagnostic.start !== undefined
					? diagnostic.start
					: undefined;
			const length =
				diagnostic.length !== undefined ? diagnostic.length : undefined;
			diagnostics.push({
				code: DiagnosticCode.PARSE_FAILED,
				severity: "error",
				message: ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"),
				operationId: operation.id,
				filePath,
				start,
				end:
					start !== undefined && length !== undefined
						? start + length
						: undefined,
			});
		}
	};

	collectParseDiagnostics();

	const visit = (node: ts.Node): void => {
		if (!ts.isCallExpression(node) || !ts.isIdentifier(node.expression)) {
			ts.forEachChild(node, visit);
			return;
		}

		const callee = node.expression;
		if (!isImportedVueRenderHelper(callee, checker, imports.renderHelpers)) {
			ts.forEachChild(node, visit);
			return;
		}

		const [componentArgument, propsArgument] = node.arguments;
		if (
			!componentArgument ||
			!isTargetComponentArgument(
				componentArgument,
				targetComponentNames,
				componentTagName,
			) ||
			!propsArgument ||
			!ts.isObjectLiteralExpression(propsArgument)
		) {
			ts.forEachChild(node, visit);
			return;
		}

		let sourceProperty:
			| ts.PropertyAssignment
			| ts.ShorthandPropertyAssignment
			| null = null;
		let hasTargetConflict = false;

		for (const property of propsArgument.properties) {
			if (ts.isPropertyAssignment(property)) {
				if (
					ts.isIdentifier(property.name) &&
					property.name.text === currentPropName
				) {
					sourceProperty = property;
				}

				if (
					ts.isIdentifier(property.name) &&
					property.name.text === nextPropName
				) {
					hasTargetConflict = true;
				}
			} else if (ts.isShorthandPropertyAssignment(property)) {
				if (property.name.text === currentPropName) {
					sourceProperty = property;
				}

				if (property.name.text === nextPropName) {
					hasTargetConflict = true;
				}
			}
		}

		if (!sourceProperty) {
			ts.forEachChild(node, visit);
			return;
		}

		const { start, end } = getNodeLocation(sourceProperty.name, sourceFile);

		if (hasTargetConflict) {
			diagnostics.push({
				code: DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
				severity: "error",
				message: `Cannot rename "${currentPropName}" to "${nextPropName}" because "${nextPropName}" already exists in the render props object.`,
				operationId: operation.id,
				filePath,
				start,
				end,
				suggestion:
					"Remove or rename the conflicting property before running the migration.",
			});
			ts.forEachChild(node, visit);
			return;
		}

		if (ts.isShorthandPropertyAssignment(sourceProperty)) {
			edits.push({
				start,
				end,
				replacement: `${nextPropName}: ${currentPropName}`,
				operationId: operation.id,
			});
		} else {
			edits.push({
				start,
				end,
				replacement: nextPropName,
				operationId: operation.id,
			});
		}

		ts.forEachChild(node, visit);
	};

	visit(sourceFile);

	if (edits.length === 0 && diagnostics.length === 0) {
		return null;
	}

	return {
		kind: "modify",
		filePath,
		baseRevision,
		content,
		edits,
		changes: [`prop ${currentPropName} -> ${nextPropName}`],
		diagnostics,
	};
};
