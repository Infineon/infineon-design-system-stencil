import type { MigrationDiagnostic } from "./types.js";

export const DiagnosticCode = {
	TARGET_PROP_ALREADY_EXISTS: "DDS001",
	AMBIGUOUS_LOCAL_PROP_OBJECT: "DDS002",
	IMPORTED_PROP_OBJECT_UNSUPPORTED: "DDS003",
	HELPER_PROP_OBJECT_UNSUPPORTED: "DDS004",
	INVALID_MANIFEST: "DDS005",
	VERSION_RESOLUTION_FAILED: "DDS006",
	PARSE_FAILED: "DDS007",
	OVERLAPPING_EDITS: "DDS008",
} as const;

export type DiagnosticCodeKey = keyof typeof DiagnosticCode;

/**
 * Sorts diagnostics deterministically by code, file path, start offset, and
 * operation ID. Diagnostics without a location sort before those with one so
 * that manifest-level issues are reported first.
 */
export const compareDiagnostics = (
	left: MigrationDiagnostic,
	right: MigrationDiagnostic,
): number => {
	const codeComparison = left.code.localeCompare(right.code);
	if (codeComparison !== 0) {
		return codeComparison;
	}

	const fileComparison = (left.filePath ?? "").localeCompare(right.filePath ?? "");
	if (fileComparison !== 0) {
		return fileComparison;
	}

	const startComparison = (left.start ?? -1) - (right.start ?? -1);
	if (startComparison !== 0) {
		return startComparison;
	}

	const endComparison = (left.end ?? -1) - (right.end ?? -1);
	if (endComparison !== 0) {
		return endComparison;
	}

	const operationComparison = (left.operationId ?? "").localeCompare(right.operationId ?? "");
	if (operationComparison !== 0) {
		return operationComparison;
	}

	return left.message.localeCompare(right.message);
};

export const sortDiagnostics = (diagnostics: MigrationDiagnostic[]): MigrationDiagnostic[] =>
	[...diagnostics].sort(compareDiagnostics);
