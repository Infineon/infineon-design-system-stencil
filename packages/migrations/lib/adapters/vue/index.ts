import { parse as parseVueSfc } from "@vue/compiler-sfc";

import { tagNameToReactComponentName } from "../../core/naming.js";
import type {
	FileAnalysis,
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

interface VueSfcBlock {
	content: string;
	loc: {
		start: { offset: number };
		end: { offset: number };
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

const adjustDiagnosticsFilePath = (
	diagnostics: FileAnalysis["diagnostics"],
	filePath: string,
): FileAnalysis["diagnostics"] =>
	diagnostics.map((diagnostic) =>
		diagnostic.filePath === filePath
			? diagnostic
			: { ...diagnostic, filePath },
	);

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
	const diagnostics = [];
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
		const { descriptor } = parseVueSfc(content, { filename: filePath });
		const analyses: (FileAnalysis | null)[] = [];

		if (descriptor.template) {
			const templateBlock = descriptor.template as VueSfcBlock;
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
		}

		const targetComponentName = tagNameToReactComponentName(
			step.operation.component,
		);
		const targetComponentNames = new Set([targetComponentName]);

		for (const block of [descriptor.script, descriptor.scriptSetup]) {
			if (!block) {
				continue;
			}

			const scriptBlock = block as VueSfcBlock;
			const blockContent = scriptBlock.content;
			const blockOffset = scriptBlock.loc.start.offset;
			const virtualFilePath = `${filePath}.script.ts`;

			const imports = resolveVueWrapperImports(
				blockContent,
				VUE_IMPORT_SOURCE,
				targetComponentNames,
			);

			const jsxAnalysis = analyseJsxFile(
				virtualFilePath,
				blockContent,
				baseRevision,
				step,
				imports,
			);
			if (jsxAnalysis) {
				jsxAnalysis.filePath = filePath;
				jsxAnalysis.content = content;
				jsxAnalysis.edits = adjustEditsToAbsoluteOffset(
					jsxAnalysis.edits,
					blockOffset,
				);
				jsxAnalysis.diagnostics = adjustDiagnosticsFilePath(
					jsxAnalysis.diagnostics,
					filePath,
				);
				analyses.push(jsxAnalysis);
			}

			const renderAnalysis = analyseRenderFunctions(
				virtualFilePath,
				blockContent,
				baseRevision,
				step,
				imports,
			);
			if (renderAnalysis) {
				renderAnalysis.filePath = filePath;
				renderAnalysis.content = content;
				renderAnalysis.edits = adjustEditsToAbsoluteOffset(
					renderAnalysis.edits,
					blockOffset,
				);
				renderAnalysis.diagnostics = adjustDiagnosticsFilePath(
					renderAnalysis.diagnostics,
					filePath,
				);
				analyses.push(renderAnalysis);
			}
		}

		return mergeAnalyses(filePath, content, baseRevision, analyses);
	}
}
