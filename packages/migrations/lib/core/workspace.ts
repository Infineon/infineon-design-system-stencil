import { applyEdits } from "./edit.js";
import type { FileAnalysis, MigrationDiagnostic, TextEdit } from "./types.js";

export interface WorkspaceFile {
	filePath: string;
	originalContent: string;
	currentContent: string;
	operationIds: string[];
	changes: string[];
}

export interface VirtualWorkspace {
	load(filePath: string, content: string): WorkspaceFile;
	read(filePath: string): WorkspaceFile | undefined;
	applyStep(fileAnalyses: readonly FileAnalysis[]): MigrationDiagnostic[];
	reset(): void;
	getFiles(): WorkspaceFile[];
}

export const createVirtualWorkspace = (
	initialFiles?: WorkspaceFile[],
): VirtualWorkspace => {
	const filesByPath = new Map<string, WorkspaceFile>();

	const ensureFile = (analysis: FileAnalysis): WorkspaceFile => {
		const existing = filesByPath.get(analysis.filePath);
		if (existing) {
			return existing;
		}

		const file: WorkspaceFile = {
			filePath: analysis.filePath,
			originalContent: analysis.content,
			currentContent: analysis.content,
			operationIds: [],
			changes: [],
		};
		filesByPath.set(analysis.filePath, file);
		return file;
	};

	const recordOperationIds = (file: WorkspaceFile, edits: TextEdit[]): void => {
		for (const edit of edits) {
			if (!file.operationIds.includes(edit.operationId)) {
				file.operationIds.push(edit.operationId);
			}
		}
	};

	const recordChanges = (file: WorkspaceFile, changes: string[]): void => {
		for (const change of changes) {
			if (!file.changes.includes(change)) {
				file.changes.push(change);
			}
		}
	};

	if (initialFiles) {
		for (const file of initialFiles) {
			filesByPath.set(file.filePath, file);
		}
	}

	return {
		load(filePath: string, content: string): WorkspaceFile {
			const existing = filesByPath.get(filePath);
			if (existing) {
				return existing;
			}

			const file: WorkspaceFile = {
				filePath,
				originalContent: content,
				currentContent: content,
				operationIds: [],
				changes: [],
			};
			filesByPath.set(filePath, file);
			return file;
		},

		read(filePath: string): WorkspaceFile | undefined {
			return filesByPath.get(filePath);
		},

		reset(): void {
			for (const file of filesByPath.values()) {
				file.currentContent = file.originalContent;
				file.operationIds = [];
				file.changes = [];
			}
		},

		applyStep(fileAnalyses: readonly FileAnalysis[]): MigrationDiagnostic[] {
			const diagnostics: MigrationDiagnostic[] = [];
			const pending: Array<{
				file: WorkspaceFile;
				analysis: FileAnalysis;
				result: ReturnType<typeof applyEdits>;
			}> = [];
			let hasError = false;

			const resolveFile = (
				analysis: FileAnalysis,
			): WorkspaceFile | undefined => {
				const existing = filesByPath.get(analysis.filePath);
				if (existing) {
					return existing;
				}

				return {
					filePath: analysis.filePath,
					originalContent: analysis.content,
					currentContent: analysis.content,
					operationIds: [],
					changes: [],
				};
			};

			for (const analysis of fileAnalyses) {
				const file = resolveFile(analysis);
				if (!file) {
					continue;
				}

				if (
					analysis.diagnostics.some(
						(diagnostic) => diagnostic.severity === "error",
					)
				) {
					hasError = true;
					continue;
				}

				if (analysis.edits.length === 0) {
					continue;
				}

				const result = applyEdits(file.currentContent, analysis.edits);
				if (
					result.diagnostics.some(
						(diagnostic) => diagnostic.severity === "error",
					)
				) {
					diagnostics.push(...result.diagnostics);
					hasError = true;
					continue;
				}

				if (result.content === file.currentContent) {
					continue;
				}

				pending.push({ file, analysis, result });
			}

			if (hasError) {
				return diagnostics;
			}

			for (const { file, analysis, result } of pending) {
				const existing = filesByPath.get(file.filePath);
				if (!existing) {
					filesByPath.set(file.filePath, file);
				}

				file.currentContent = result.content;
				recordOperationIds(file, analysis.edits);
				recordChanges(file, analysis.changes);
			}

			return diagnostics;
		},

		getFiles(): WorkspaceFile[] {
			return [...filesByPath.values()].sort((left, right) =>
				left.filePath.localeCompare(right.filePath),
			);
		},
	};
};
