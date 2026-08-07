const assert = require("node:assert/strict");
const test = require("node:test");

const {
	hasErrorDiagnostics,
	formatDiagnostic,
	createMigrationError,
	sortDiagnostics,
} = require("../migrations/lib/diagnostics.js");

test("sortDiagnostics orders diagnostics by file path, offsets, operation id, code, and message", () => {
	const diagnostics = [
		{ code: "DDS001", severity: "error", message: "z", operationId: "b", filePath: "b.ts", start: 12, end: 15 },
		{ code: "DDS010", severity: "warning", message: "a", operationId: "a", filePath: "a.ts", start: 1, end: 2 },
		{ code: "DDS001", severity: "error", message: "a", operationId: "a", filePath: "a.ts", start: 1, end: 2 },
		{ code: "DDS011", severity: "warning", message: "b", operationId: "c", filePath: "a.ts", start: 1, end: 2 },
	];

	const sorted = sortDiagnostics(diagnostics);
	assert.deepEqual(sorted.map((diagnostic) => diagnostic.message), ["a", "a", "b", "z"]);
});

test("hasErrorDiagnostics only flags severity errors", () => {
	assert.equal(hasErrorDiagnostics([{ code: "DDS010", severity: "warning", message: "warning" }]), false);
	assert.equal(hasErrorDiagnostics([{ code: "DDS001", severity: "error", message: "error" }]), true);
});

test("formatDiagnostic renders a stable diagnostic string", () => {
	const diagnostic = { code: "DDS001", severity: "error", message: "boom", filePath: "src/app.ts", start: 2, end: 5 };
	assert.equal(formatDiagnostic(diagnostic), "[error] DDS001 src/app.ts:2-5 boom");
});

test("createMigrationError aggregates and sorts diagnostics", () => {
	const error = createMigrationError([
		{ code: "DDS010", severity: "warning", message: "warn", filePath: "a.ts" },
		{ code: "DDS001", severity: "error", message: "fail", filePath: "b.ts" },
	]);

	assert.equal(error.diagnostics[0].code, "DDS001");
	assert.match(error.message, /DDS001/);
	assert.match(error.message, /DDS010/);
});
