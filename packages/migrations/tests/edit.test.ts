import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { applyEdits } from "../lib/core/edit.js";
import type { TextEdit } from "../lib/core/types.js";

describe("applyEdits", () => {
	test("applies a single edit", () => {
		const result = applyEdits("hello world", [{ start: 6, end: 11, replacement: "there", operationId: "op1" }]);
		assert.equal(result.content, "hello there");
		assert.deepEqual(result.diagnostics, []);
	});

	test("applies multiple non-overlapping edits", () => {
		const edits: TextEdit[] = [
			{ start: 0, end: 5, replacement: "Goodbye", operationId: "op1" },
			{ start: 6, end: 11, replacement: "moon", operationId: "op2" },
		];
		const result = applyEdits("Hello world", edits);
		assert.equal(result.content, "Goodbye moon");
		assert.deepEqual(result.diagnostics, []);
	});

	test("deduplicates identical edits", () => {
		const edits: TextEdit[] = [
			{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			{ start: 6, end: 11, replacement: "there", operationId: "op2" },
		];
		const result = applyEdits("hello world", edits);
		assert.equal(result.content, "hello there");
		assert.equal(result.diagnostics.length, 0);
	});

	test("reports overlapping non-identical edits", () => {
		const edits: TextEdit[] = [
			{ start: 0, end: 5, replacement: "HELLO", operationId: "op1" },
			{ start: 3, end: 8, replacement: "LOWER", operationId: "op2" },
		];
		const result = applyEdits("hello world", edits);
		assert.equal(result.content, "hello world");
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0].severity, "error");
		assert.ok(result.diagnostics[0].message.includes("Overlapping edits"));
	});

	test("rejects negative ranges", () => {
		const result = applyEdits("hello", [{ start: -1, end: 2, replacement: "x", operationId: "op1" }]);
		assert.equal(result.content, "hello");
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0].severity, "error");
		assert.ok(result.diagnostics[0].message.includes("negative range"));
	});

	test("rejects out-of-bounds ranges", () => {
		const result = applyEdits("hello", [{ start: 2, end: 10, replacement: "x", operationId: "op1" }]);
		assert.equal(result.content, "hello");
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0].severity, "error");
		assert.ok(result.diagnostics[0].message.includes("out of bounds"));
	});

	test("rejects inverted ranges", () => {
		const result = applyEdits("hello", [{ start: 4, end: 2, replacement: "x", operationId: "op1" }]);
		assert.equal(result.content, "hello");
		assert.equal(result.diagnostics[0].severity, "error");
		assert.ok(result.diagnostics[0].message.includes("inverted range"));
	});

	test("preserves LF line endings", () => {
		const result = applyEdits("line1\nline2\n", [{ start: 0, end: 5, replacement: "first", operationId: "op1" }]);
		assert.equal(result.content, "first\nline2\n");
		assert.equal(result.diagnostics.length, 0);
	});

	test("preserves CRLF line endings", () => {
		const result = applyEdits("line1\r\nline2\r\n", [{ start: 0, end: 5, replacement: "first", operationId: "op1" }]);
		assert.equal(result.content, "first\r\nline2\r\n");
		assert.equal(result.diagnostics.length, 0);
	});

	test("reports multiple distinct errors", () => {
		const edits: TextEdit[] = [
			{ start: -1, end: 2, replacement: "x", operationId: "op1" },
			{ start: 2, end: 20, replacement: "x", operationId: "op2" },
		];
		const result = applyEdits("hello", edits);
		assert.equal(result.content, "hello");
		assert.equal(result.diagnostics.length, 2);
	});
});
