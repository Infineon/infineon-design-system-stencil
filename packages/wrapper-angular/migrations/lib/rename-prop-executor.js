const { analyseTemplateContent } = require("./migrate-template.js");
const { analyseTypeScriptContent } = require("./migrate-typescript.js");
const { DiagnosticCode } = require("./diagnostic-codes.js");

class RenamePropExecutor {
	constructor() {
		this.type = "rename-prop";
	}

	analyse(step, context) {
		const stagedFiles = context.stagedFiles ?? context;
		const fileAnalyses = [];
		const diagnostics = [];
		const processedFilePaths = [];

		for (const filePath of context.filePaths ?? []) {
			const file = stagedFiles.get(filePath);
			if (!file) {
				continue;
			}

			const content = file.currentContent;
			const isHtml = filePath.endsWith(".html");
			const isTypeScript = filePath.endsWith(".ts") && !filePath.endsWith(".d.ts");
			if (!isHtml && !isTypeScript) {
				continue;
			}

			processedFilePaths.push(filePath);

			let analysis;
			if (isHtml) {
				analysis = analyseTemplateContent(content, filePath, step.operation ?? step);
			} else {
				analysis = analyseTypeScriptContent(content, filePath, step.operation ?? step);
			}

			diagnostics.push(...analysis.diagnostics);

			const hasErrors = analysis.diagnostics.some((diagnostic) => diagnostic.severity === "error");
			if (hasErrors) {
				continue;
			}

			const changes = [];
			for (const edit of analysis.edits) {
				changes.push({
					start: edit.start,
					end: edit.end,
					replacement: edit.replacement,
					operationId: edit.operationId ?? step.operation?.id ?? step.id,
					description: edit.description ?? "rename property",
				});
			}

			const nextContent = changes.length > 0
				? changes.slice().reverse().reduce((current, change) => `${current.slice(0, change.start)}${change.replacement}${current.slice(change.end)}`, content)
				: content;

			fileAnalyses.push({
				filePath,
				changes,
				diagnostics: analysis.diagnostics,
				currentContent: nextContent,
			});
		}

		return {
			fileAnalyses,
			processedFilePaths,
			diagnostics,
		};
	}
}

module.exports = {
	RenamePropExecutor,
};
