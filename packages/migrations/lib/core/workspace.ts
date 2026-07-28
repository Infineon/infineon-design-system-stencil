import { DiagnosticCode } from "./diagnostic.js";
import { applyEdits } from "./edit.js";
import type { FileAnalysis, MigrationDiagnostic, TextEdit } from "./types.js";

export interface WorkspaceFile {
	filePath: string;
	originalContent: string;
	currentContent: string;
	revision: number;
	operationIds: string[];
	changes: string[];
}

export interface VirtualWorkspace {
	load(filePath: string, content: string): WorkspaceFile;
	read(filePath: string): WorkspaceFile | undefined;
	analyse(analysis: FileAnalysis): MigrationDiagnostic[];
	getFiles(): WorkspaceFile[];
}

export const createVirtualWorkspace = (initialFiles?: WorkspaceFile[]): VirtualWorkspace => {
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
			revision: 0,
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
				revision: 0,
				operationIds: [],
				changes: [],
			};
			filesByPath.set(filePath, file);
			return file;
		},

		read(filePath: string): WorkspaceFile | undefined {
			return filesByPath.get(filePath);
		},

		analyse(analysis: FileAnalysis): MigrationDiagnostic[] {
			const file = ensureFile(analysis);

			if (analysis.baseRevision !== file.revision) {
				return [
					{
						code: DiagnosticCode.STALE_FILE_ANALYSIS,
						severity: "error",
						message: `Analysis for ${analysis.filePath} is stale (expected revision ${file.revision}, got ${analysis.baseRevision}).`,
						operationId: analysis.edits[0]?.operationId,
						filePath: analysis.filePath,
					},
				];
			}

			const result = applyEdits(file.currentContent, analysis.edits);
			if (result.diagnostics.some((diagnostic) => diagnostic.severity === "error")) {
				return result.diagnostics;
			}

			file.currentContent = result.content;
			file.revision += 1;
			recordOperationIds(file, analysis.edits);
			recordChanges(file, analysis.changes);

			return [];
		},

		getFiles(): WorkspaceFile[] {
			return [...filesByPath.values()].sort((left, right) =>
				left.filePath.localeCompare(right.filePath),
			);
		},
	};
};
