import { compileScript, parse as parseVueSfc } from "@vue/compiler-sfc";
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
import { resolveVueWrapperImports } from "./imports.js";
import { analyseJsxFile } from "./jsx.js";
import { analyseRenderFunctions } from "./render-functions.js";
import { analyseVueTemplate } from "./template.js";

const VUE_EXTENSIONS = [".vue", ".tsx", ".jsx", ".ts", ".js", ".mts", ".cts"];
const VUE_IMPORT_SOURCE = "@infineon/infineon-design-system-vue";
const SUPPORTED_SCRIPT_LANGUAGES = new Set(["js", "jsx", "ts", "tsx"]);

interface VueSfcBlock {
	content: string;
	loc: {
		start: { offset: number };
		end: { offset: number };
	};
}

interface VueParseError {
	message: string;
	loc?: {
		start?: { offset?: number };
		end?: { offset?: number };
	};
}

const adjustEditsToAbsoluteOffset = (
	edits: TextEdit[],
	offset: number,
): TextEdit[] =>
	edits.map((edit) => ({
		...edit,
		start: edit.start + offset,
		end: edit.end + offset,
	}));

const adjustDiagnosticsToSfcBlock = (
	diagnostics: MigrationDiagnostic[],
	filePath: string,
	blockOffset: number,
): MigrationDiagnostic[] =>
	diagnostics.map((diagnostic) => ({
		...diagnostic,
		filePath,
		start:
			diagnostic.start !== undefined
				? diagnostic.start + blockOffset
				: undefined,
		end:
			diagnostic.end !== undefined
				? diagnostic.end + blockOffset
				: undefined,
	}));

const createParseErrorDiagnostic = (
	filePath: string,
	parseError: VueParseError,
	baseOffset = 0,
): MigrationDiagnostic => {
	const start =
		parseError.loc?.start?.offset !== undefined
			? parseError.loc.start.offset + baseOffset
			: undefined;
	const end =
		parseError.loc?.end?.offset !== undefined
			? parseError.loc.end.offset + baseOffset
			: undefined;
	return {
		code: DiagnosticCode.PARSE_FAILED,
		severity: "error",
		message: parseError.message,
		filePath,
		start,
		end,
		suggestion: "Fix the Vue file syntax before running the migration.",
	};
};

const createParseFailureAnalysis = (
	filePath: string,
	content: string,
	baseRevision: number,
	operationId: string,
	error: unknown,
	offset = 0,
): FileAnalysis => {
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
				operationId,
				filePath,
				start: offset || undefined,
			},
		],
	};
};

const mergeAnalyses = (
	filePath: string,
	fullContent: string,
	baseRevision: number,
	analyses: (FileAnalysis | null)[],
): FileAnalysis | null => {
	const validAnalyses = analyses.filter(
		(analysis): analysis is FileAnalysis => analysis !== null,
	);
	if (validAnalyses.length === 0) {
		return null;
	}

	const edits: TextEdit[] = [];
	const diagnostics: MigrationDiagnostic[] = [];
	const changes: string[] = [];

	for (const analysis of validAnalyses) {
		edits.push(...analysis.edits);
		diagnostics.push(...analysis.diagnostics);
		for (const change of analysis.changes) {
			if (!changes.includes(change)) {
				changes.push(change);
			}
		}
	}

	return {
		kind: "modify",
		filePath,
		baseRevision,
		content: fullContent,
		edits,
		changes,
		diagnostics,
	};
};

const getScriptKindForLanguage = (language: string): ts.ScriptKind => {
	switch (language) {
		case "jsx":
			return ts.ScriptKind.JSX;
		case "tsx":
			return ts.ScriptKind.TSX;
		case "ts":
			return ts.ScriptKind.TS;
		case "js":
		default:
			return ts.ScriptKind.JS;
	}
};

export class VueRenamePropAdapter implements RenamePropAdapter {
	framework = "vue" as const;

	async collectFiles(context: MigrationExecutionContext): Promise<string[]> {
		return collectFilesByExtension(context.rootDirectory, VUE_EXTENSIONS);
	}

	async analyseFile(
		filePath: string,
		content: string,
		baseRevision: number,
		step: RenamePropStepDefinition,
		_context: MigrationExecutionContext,
	): Promise<FileAnalysis | null> {
		if (filePath.endsWith(".vue")) {
			return this.analyseVueSfc(filePath, content, baseRevision, step);
		}

		return this.analyseStandaloneScript(
			filePath,
			content,
			baseRevision,
			step,
		);
	}

	private analyseStandaloneScript(
		filePath: string,
		content: string,
		baseRevision: number,
		step: RenamePropStepDefinition,
	): FileAnalysis | null {
		const scriptKind = filePath.endsWith("x")
			? ts.ScriptKind.TSX
			: ts.ScriptKind.TS;
		const targetComponentName = tagNameToReactComponentName(
			step.operation.component,
		);
		const targetComponentNames = new Set([targetComponentName]);

		let sourceFile: ts.SourceFile;
		let checker: ts.TypeChecker;
		try {
			sourceFile = createSourceFile(filePath, content, scriptKind);
			checker = createSingleFileProgram(filePath, sourceFile).checker;
		} catch (error) {
			return createParseFailureAnalysis(
				filePath,
				content,
				baseRevision,
				step.operation.id,
				error,
			);
		}

		let imports: ReturnType<typeof resolveVueWrapperImports>;
		try {
			imports = resolveVueWrapperImports(
				sourceFile,
				checker,
				VUE_IMPORT_SOURCE,
				targetComponentNames,
			);
		} catch (error) {
			return createParseFailureAnalysis(
				filePath,
				content,
				baseRevision,
				step.operation.id,
				error,
			);
		}

		if (isJsxSourceFile(filePath)) {
			const jsxAnalysis = analyseJsxFile(
				filePath,
				content,
				baseRevision,
				step,
				imports,
				sourceFile,
				checker,
			);
			const renderAnalysis = analyseRenderFunctions(
				filePath,
				content,
				baseRevision,
				step,
				imports,
				sourceFile,
				checker,
			);
			return mergeAnalyses(filePath, content, baseRevision, [
				jsxAnalysis,
				renderAnalysis,
			]);
		}

		return analyseRenderFunctions(
			filePath,
			content,
			baseRevision,
			step,
			imports,
			sourceFile,
			checker,
		);
	}

	private analyseVueSfc(
		filePath: string,
		content: string,
		baseRevision: number,
		step: RenamePropStepDefinition,
	): FileAnalysis | null {
		let parseResult;
		try {
			parseResult = parseVueSfc(content, { filename: filePath });
		} catch (error) {
			return createParseFailureAnalysis(
				filePath,
				content,
				baseRevision,
				step.operation.id,
				error,
			);
		}

		const { descriptor, errors } = parseResult;
		if (errors && errors.length > 0) {
			const diagnostics = errors.map((error) => {
				const parseError =
					typeof error === "object" && error !== null
						? (error as VueParseError)
						: { message: String(error) };
				return createParseErrorDiagnostic(filePath, parseError);
			});

			return {
				kind: "modify",
				filePath,
				baseRevision,
				content,
				edits: [],
				changes: [],
				diagnostics,
			};
		}

		const analyses: (FileAnalysis | null)[] = [];
		let hasScriptBlockParseError = false;

		if (descriptor.template) {
			const templateBlock = descriptor.template as VueSfcBlock;
			try {
				analyses.push(
					analyseVueTemplate(
						filePath,
						content,
						templateBlock.content,
						templateBlock.loc.start.offset,
						baseRevision,
						step,
					),
				);
			} catch (error) {
				return createParseFailureAnalysis(
					filePath,
					content,
					baseRevision,
					step.operation.id,
					error,
					templateBlock.loc.start.offset,
				);
			}
		}

		const targetComponentName = tagNameToReactComponentName(
			step.operation.component,
		);
		const targetComponentNames = new Set([targetComponentName]);

		for (const block of [descriptor.script, descriptor.scriptSetup]) {
			if (!block) {
				continue;
			}

			const scriptBlock = block as VueSfcBlock & { lang?: string };
			const language = scriptBlock.lang ?? "js";
			if (!SUPPORTED_SCRIPT_LANGUAGES.has(language)) {
				continue;
			}

			if (scriptBlock === descriptor.scriptSetup) {
				try {
					compileScript(descriptor, { id: "dds-migration" });
				} catch (error) {
					return createParseFailureAnalysis(
						filePath,
						content,
						baseRevision,
						step.operation.id,
						error,
						scriptBlock.loc.start.offset,
					);
				}
			}

			const blockContent = scriptBlock.content;
			const blockOffset = scriptBlock.loc.start.offset;
			const scriptKind = getScriptKindForLanguage(language);
			const virtualFilePath = `${filePath}.script.${language}`;

			let sourceFile: ts.SourceFile;
			let checker: ts.TypeChecker;
			try {
				sourceFile = createSourceFile(virtualFilePath, blockContent, scriptKind);
				checker = createSingleFileProgram(virtualFilePath, sourceFile).checker;
			} catch (error) {
				return createParseFailureAnalysis(
					filePath,
					content,
					baseRevision,
					step.operation.id,
					error,
					blockOffset,
				);
			}

			let imports: ReturnType<typeof resolveVueWrapperImports>;
			try {
				imports = resolveVueWrapperImports(
					sourceFile,
					checker,
					VUE_IMPORT_SOURCE,
					targetComponentNames,
				);
			} catch (error) {
				return createParseFailureAnalysis(
					filePath,
					content,
					baseRevision,
					step.operation.id,
					error,
					blockOffset,
				);
			}

			if (language === "jsx" || language === "tsx") {
				try {
					const jsxAnalysis = analyseJsxFile(
						virtualFilePath,
						blockContent,
						baseRevision,
						step,
						imports,
						sourceFile,
						checker,
					);
					if (jsxAnalysis) {
						if (
							jsxAnalysis.diagnostics.some(
								(d) => d.code === DiagnosticCode.PARSE_FAILED,
							)
						) {
							hasScriptBlockParseError = true;
						}
						jsxAnalysis.filePath = filePath;
						jsxAnalysis.content = content;
						jsxAnalysis.edits = adjustEditsToAbsoluteOffset(
							jsxAnalysis.edits,
							blockOffset,
						);
						jsxAnalysis.diagnostics = adjustDiagnosticsToSfcBlock(
							jsxAnalysis.diagnostics,
							filePath,
							blockOffset,
						);
						analyses.push(jsxAnalysis);
					}
				} catch (error) {
					return createParseFailureAnalysis(
						filePath,
						content,
						baseRevision,
						step.operation.id,
						error,
						blockOffset,
					);
				}
			}

			try {
				const renderAnalysis = analyseRenderFunctions(
					virtualFilePath,
					blockContent,
					baseRevision,
					step,
					imports,
					sourceFile,
					checker,
				);
				if (renderAnalysis) {
					if (
						renderAnalysis.diagnostics.some(
							(d) => d.code === DiagnosticCode.PARSE_FAILED,
						)
					) {
						hasScriptBlockParseError = true;
					}
					renderAnalysis.filePath = filePath;
					renderAnalysis.content = content;
					renderAnalysis.edits = adjustEditsToAbsoluteOffset(
						renderAnalysis.edits,
						blockOffset,
					);
					renderAnalysis.diagnostics = adjustDiagnosticsToSfcBlock(
						renderAnalysis.diagnostics,
						filePath,
						blockOffset,
					);
					analyses.push(renderAnalysis);
				}
			} catch (error) {
				return createParseFailureAnalysis(
					filePath,
					content,
					baseRevision,
					step.operation.id,
					error,
					blockOffset,
				);
			}
		}

		if (hasScriptBlockParseError) {
			return {
				kind: "modify",
				filePath,
				baseRevision,
				content,
				edits: [],
				changes: [],
				diagnostics: analyses.flatMap(
					(analysis) => analysis?.diagnostics ?? [],
				),
			};
		}

		return mergeAnalyses(filePath, content, baseRevision, analyses);
	}
}
