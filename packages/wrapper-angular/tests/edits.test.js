const assert = require("node:assert/strict");
const test = require("node:test");

const { applyEdits, deduplicateEdits, validateEdits } = require("../migrations/lib/edits.js");

test("applyEdits handles a single edit", () => {
	const result = applyEdits("hello world", [
		{ start: 6, end: 11, replacement: "there", operationId: "op1", description: "rename" },
	]);

	assert.equal(result.content, "hello there");
	assert.deepEqual(result.diagnostics, []);
});

test("applyEdits handles multiple non-overlapping edits", () => {
	const result = applyEdits("hello world", [
		{ start: 6, end: 11, replacement: "there", operationId: "op1", description: "rename" },
		{ start: 0, end: 5, replacement: "bye", operationId: "op2", description: "rename" },
	]);

	assert.equal(result.content, "bye there");
});

test("applyEdits applies edits from highest offset to lowest", () => {
	const result = applyEdits("abcdef", [
		{ start: 0, end: 2, replacement: "X", operationId: "op1", description: "rename" },
		{ start: 2, end: 4, replacement: "Y", operationId: "op2", description: "rename" },
	]);

	assert.equal(result.content, "XYef");
});

test("deduplicateEdits preserves the first duplicate metadata", () => {
	const deduped = deduplicateEdits([
		{ start: 1, end: 2, replacement: "x", operationId: "op1", description: "first" },
		{ start: 1, end: 2, replacement: "x", operationId: "op2", description: "second" },
	]);

	assert.equal(deduped.length, 1);
	assert.equal(deduped[0].description, "first");
});

test("validateEdits rejects negative offsets", () => {
	const diagnostics = validateEdits("hello", [{ start: -1, end: 2, replacement: "x", operationId: "op1", description: "rename" }]);
	assert.equal(diagnostics.length, 1);
	assert.equal(diagnostics[0].code, "DDS008");
});

test("validateEdits rejects non-integer offsets", () => {
	const diagnostics = validateEdits("hello", [{ start: 1.5, end: 2, replacement: "x", operationId: "op1", description: "rename" }]);
	assert.equal(diagnostics.length, 1);
	assert.equal(diagnostics[0].code, "DDS008");
});

test("validateEdits rejects inverted ranges", () => {
	const diagnostics = validateEdits("hello", [{ start: 4, end: 2, replacement: "x", operationId: "op1", description: "rename" }]);
	assert.equal(diagnostics.length, 1);
});

test("validateEdits rejects out-of-bounds ranges", () => {
	const diagnostics = validateEdits("hello", [{ start: 2, end: 10, replacement: "x", operationId: "op1", description: "rename" }]);
	assert.equal(diagnostics.length, 1);
});

test("validateEdits rejects overlapping edits", () => {
	const diagnostics = validateEdits("hello world", [
		{ start: 0, end: 5, replacement: "HELLO", operationId: "op1", description: "rename" },
		{ start: 2, end: 7, replacement: "lower", operationId: "op2", description: "rename" },
	]);
	assert.equal(diagnostics.length, 1);
});

test("applyEdits preserves the original content on validation error", () => {
	const result = applyEdits("hello", [{ start: -1, end: 2, replacement: "x", operationId: "op1", description: "rename" }]);
	assert.equal(result.content, "hello");
	assert.equal(result.diagnostics.length, 1);
});

test("applyEdits preserves content outside edited ranges byte-for-byte", () => {
	const result = applyEdits("line1\nline2\n", [{ start: 0, end: 5, replacement: "first", operationId: "op1", description: "rename" }]);
	assert.equal(result.content, "first\nline2\n");
});
