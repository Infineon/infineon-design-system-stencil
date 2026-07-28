import { DiagnosticCode } from "./diagnostic.js";
import type { MigrationDiagnostic, TextEdit } from "./types.js";

export interface ApplyEditsResult {
	content: string;
	diagnostics: MigrationDiagnostic[];
}

interface IndexedEdit extends TextEdit {
	index: number;
}

const hasValidRange = (edit: TextEdit, contentLength: number): MigrationDiagnostic | null => {
	if (edit.start < 0 || edit.end < 0) {
		return {
			code: DiagnosticCode.OVERLAPPING_EDITS,
			severity: "error",
			message: `Edit for operation ${edit.operationId} has negative range [${edit.start}, ${edit.end}].`,
			operationId: edit.operationId,
		};
	}

	if (edit.start > contentLength || edit.end > contentLength) {
		return {
			code: DiagnosticCode.OVERLAPPING_EDITS,
			severity: "error",
			message: `Edit for operation ${edit.operationId} is out of bounds [${edit.start}, ${edit.end}].`,
			operationId: edit.operationId,
		};
	}

	if (edit.end < edit.start) {
		return {
			code: DiagnosticCode.OVERLAPPING_EDITS,
			severity: "error",
			message: `Edit for operation ${edit.operationId} has inverted range [${edit.start}, ${edit.end}].`,
			operationId: edit.operationId,
		};
	}

	return null;
};

const editsAreIdentical = (left: TextEdit, right: TextEdit): boolean =>
	left.start === right.start && left.end === right.end && left.replacement === right.replacement;

const editsOverlap = (left: TextEdit, right: TextEdit): boolean =>
	left.start < right.end && right.start < left.end;

/**
 * Validates a list of edits against a source string and returns a result
 * containing the updated content and any diagnostics.
 *
 * Rules:
 * - Negative or out-of-bounds ranges produce an error diagnostic.
 * - Identical edits are deduplicated and applied once.
 * - Overlapping non-identical edits produce an error diagnostic and block the
 *   transformation.
 * - Edits are applied from the end of the source toward the beginning so that
 *   earlier offsets remain stable.
 * - All text outside edited ranges is preserved, including line endings.
 */
export const applyEdits = (originalContent: string, edits: TextEdit[]): ApplyEditsResult => {
	const diagnostics: MigrationDiagnostic[] = [];
	const deduplicated: IndexedEdit[] = [];

	for (const [index, edit] of edits.entries()) {
		const rangeDiagnostic = hasValidRange(edit, originalContent.length);
		if (rangeDiagnostic) {
			diagnostics.push(rangeDiagnostic);
			continue;
		}

		const duplicateIndex = deduplicated.findIndex((existing) => editsAreIdentical(existing, edit));
		if (duplicateIndex !== -1) {
			continue;
		}

		deduplicated.push({ ...edit, index });
	}

	// Detect overlapping non-identical edits after deduplication.
	for (let index = 0; index < deduplicated.length; index++) {
		const left = deduplicated[index];
		for (let other = index + 1; other < deduplicated.length; other++) {
			const right = deduplicated[other];
			if (editsOverlap(left, right)) {
				diagnostics.push({
					code: DiagnosticCode.OVERLAPPING_EDITS,
					severity: "error",
					message: `Overlapping edits from operations ${left.operationId} and ${right.operationId} at range [${left.start}, ${left.end}] and [${right.start}, ${right.end}].`,
					operationId: left.operationId,
					start: left.start,
					end: left.end,
				});
			}
		}
	}

	if (diagnostics.some((diagnostic) => diagnostic.severity === "error")) {
		return { content: originalContent, diagnostics };
	}

	const sortedEdits = deduplicated.sort((left, right) => right.start - left.start);

	let content = originalContent;
	for (const edit of sortedEdits) {
		content = `${content.slice(0, edit.start)}${edit.replacement}${content.slice(edit.end)}`;
	}

	return { content, diagnostics };
};
