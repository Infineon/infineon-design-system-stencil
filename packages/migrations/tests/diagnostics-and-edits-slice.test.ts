import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { DiagnosticCode } from "../lib/core/diagnostic.js";
import type { TextEdit } from "../lib/core/types.js";
import { getDiagnosticCodeOrder } from "../lib/diagnostics.js";
import { applyEdits, deduplicateEdits, validateEdits } from "../lib/edits.js";

describe("S4 diagnostics and edits helpers", () => {
	test("keeps the Angular diagnostic code order in sync with the canonical codes", () => {
		assert.deepEqual(getDiagnosticCodeOrder(), [
			DiagnosticCode.TARGET_PROP_ALREADY_EXISTS,
			DiagnosticCode.INVALID_MANIFEST,
			DiagnosticCode.PARSE_FAILED,
			DiagnosticCode.OVERLAPPING_EDITS,
			DiagnosticCode.UNSUPPORTED_ANGULAR_BINDING,
			DiagnosticCode.DYNAMIC_INLINE_TEMPLATE_UNSUPPORTED,
		]);
	});

	test("deduplicates identical edits and preserves the first description", () => {
		const edits: TextEdit[] = [
			{
				start: 6,
				end: 11,
				replacement: "there",
				operationId: "op1",
				description: "rename prop",
			},
			{
				start: 6,
				end: 11,
				replacement: "there",
				operationId: "op2",
				description: "duplicate",
			},
		];

		const deduped = deduplicateEdits(edits);
		assert.equal(deduped.length, 1);
		assert.equal(deduped[0]?.description, "rename prop");
	});

	test("validates invalid ranges and overlapping edits", () => {
		const diagnostics = validateEdits("hello", [
			{ start: -1, end: 2, replacement: "x", operationId: "op1" },
			{ start: 0, end: 5, replacement: "HELLO", operationId: "op1" },
			{ start: 2, end: 4, replacement: "xx", operationId: "op2" },
		]);

		assert.equal(diagnostics.length, 2);
		assert.equal(diagnostics[0]?.code, DiagnosticCode.OVERLAPPING_EDITS);
		assert.equal(diagnostics[1]?.code, DiagnosticCode.OVERLAPPING_EDITS);
	});

	test("applies non-overlapping edits and preserves the original content on validation errors", () => {
		const result = applyEdits("hello world", [
			{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			{ start: 0, end: 5, replacement: "bye", operationId: "op2" },
		]);

		assert.equal(result.content, "bye there");
		assert.deepEqual(result.diagnostics, []);
	});
});
