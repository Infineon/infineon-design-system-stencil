import { compileScript, parse as parseVueSfc } from "@vue/compiler-sfc";

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
): MigrationDiagnostic => {
	const start = parseError.loc?.start?.offset;
	const end = parseError.loc?.end?.offset;
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

		const targetComponentName = tagNameToReactComponentName(
			step.operation.component,
		);
		const targetComponentNames = new Set([targetComponentName]);
		const imports = resolveVueWrapperImports(
			content,
			VUE_IMPORT_SOURCE,
			targetComponentNames,
		);

		if (isJsxSourceFile(filePath)) {
			const jsxAnalysis = analyseJsxFile(
				filePath,
				content,
				baseRevision,
				step,
				imports,
			);
			const renderAnalysis = analyseRenderFunctions(
				filePath,
				content,
				baseRevision,
				step,
				imports,
			);
			return mergeAnalyses(filePath, content, baseRevision, [
				jsxAnalysis,
				renderAnalysis,
			]);
		}

		// Plain JavaScript/TypeScript files may contain render functions.
		return analyseRenderFunctions(
			filePath,
			content,
			baseRevision,
			step,
			imports,
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
			const message = error instanceof Error ? error.message : String(error);
			return {
				kind: "modify",
				filePath,
				baseRevision,
				content,
				edits: [],
				changes: [],
				diagnostics: [
					createParseErrorDiagnostic(filePath, { message }),
				],
			};
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
				const message =
					error instanceof Error ? error.message : String(error);
				return {
					kind: "modify",
					filePath,
					baseRevision,
					content,
					edits: [],
					changes: [],
					diagnostics: [
						createParseErrorDiagnostic(filePath, { message }),
					],
				};
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
					const message =
						error instanceof Error ? error.message : String(error);
					return {
						kind: "modify",
						filePath,
						baseRevision,
						content,
						edits: [],
						changes: [],
						diagnostics: [
							createParseErrorDiagnostic(filePath, {
								message,
								loc: { start: { offset: scriptBlock.loc.start.offset } },
							}),
						],
					};
				}
			}

			const blockContent = scriptBlock.content;
			const blockOffset = scriptBlock.loc.start.offset;
			const extension = language === "js" ? "ts" : language;
			const virtualFilePath = `${filePath}.script.${extension}`;

			const imports = resolveVueWrapperImports(
				blockContent,
				VUE_IMPORT_SOURCE,
				targetComponentNames,
			);

			try {
				const jsxAnalysis = analyseJsxFile(
					virtualFilePath,
					blockContent,
					baseRevision,
					step,
					imports,
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
				const message =
					error instanceof Error ? error.message : String(error);
				analyses.push({
					kind: "modify",
					filePath,
					baseRevision,
					content,
					edits: [],
					changes: [],
					diagnostics: [
						createParseErrorDiagnostic(filePath, {
							message,
							loc: { start: { offset: blockOffset } },
						}),
					],
				});
			}

			try {
				const renderAnalysis = analyseRenderFunctions(
					virtualFilePath,
					blockContent,
					baseRevision,
					step,
					imports,
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
				const message =
					error instanceof Error ? error.message : String(error);
				analyses.push({
					kind: "modify",
					filePath,
					baseRevision,
					content,
					edits: [],
					changes: [],
					diagnostics: [
						createParseErrorDiagnostic(filePath, {
							message,
							loc: { start: { offset: blockOffset } },
						}),
					],
				});
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
