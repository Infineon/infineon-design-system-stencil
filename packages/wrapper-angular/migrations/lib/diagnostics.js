const compareNumbers = (left, right) => (left ?? -1) - (right ?? -1);

const compareDiagnostics = (left, right) => {
	const filePathComparison = (left.filePath ?? "").localeCompare(right.filePath ?? "");
	if (filePathComparison !== 0) {
		return filePathComparison;
	}

	const startComparison = compareNumbers(left.start, right.start);
	if (startComparison !== 0) {
		return startComparison;
	}

	const endComparison = compareNumbers(left.end, right.end);
	if (endComparison !== 0) {
		return endComparison;
	}

	const operationComparison = (left.operationId ?? "").localeCompare(right.operationId ?? "");
	if (operationComparison !== 0) {
		return operationComparison;
	}

	const codeComparison = (left.code ?? "").localeCompare(right.code ?? "");
	if (codeComparison !== 0) {
		return codeComparison;
	}

	return (left.message ?? "").localeCompare(right.message ?? "");
};

function sortDiagnostics(diagnostics) {
	return [...diagnostics].sort(compareDiagnostics);
}

function hasErrorDiagnostics(diagnostics) {
	return diagnostics.some((diagnostic) => diagnostic.severity === "error");
}

function formatDiagnostic(diagnostic) {
	const location = diagnostic.filePath
		? `${diagnostic.filePath}:${diagnostic.start ?? 0}-${diagnostic.end ?? 0}`
		: "<unknown>";
	return `[${diagnostic.severity}] ${diagnostic.code} ${location} ${diagnostic.message}`.trim();
}

function createMigrationError(diagnostics) {
	const sorted = sortDiagnostics(diagnostics);
	const message = sorted.map(formatDiagnostic).join("\n");
	const error = new Error(message);
	error.diagnostics = sorted;
	return error;
}

module.exports = {
	sortDiagnostics,
	hasErrorDiagnostics,
	formatDiagnostic,
	createMigrationError,
};
