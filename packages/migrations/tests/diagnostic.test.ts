import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
	compareDiagnostics,
	DiagnosticCode,
	sortDiagnostics,
} from "../lib/core/diagnostic.js";
import type { MigrationDiagnostic } from "../lib/core/types.js";
import { getDiagnosticCodeOrder } from "../lib/diagnostics.js";

describe("DiagnosticCode", () => {
	test("exposes the DDS codes", () => {
		assert.equal(DiagnosticCode.TARGET_PROP_ALREADY_EXISTS, "DDS001");
		assert.equal(DiagnosticCode.AMBIGUOUS_LOCAL_PROP_OBJECT, "DDS002");
		assert.equal(DiagnosticCode.IMPORTED_PROP_OBJECT_UNSUPPORTED, "DDS003");
		assert.equal(DiagnosticCode.HELPER_PROP_OBJECT_UNSUPPORTED, "DDS004");
		assert.equal(DiagnosticCode.INVALID_MANIFEST, "DDS005");
		assert.equal(DiagnosticCode.VERSION_RESOLUTION_FAILED, "DDS006");
		assert.equal(DiagnosticCode.PARSE_FAILED, "DDS007");
		assert.equal(DiagnosticCode.OVERLAPPING_EDITS, "DDS008");
		assert.equal(DiagnosticCode.STALE_FILE_ANALYSIS, "DDS009");
		assert.equal(DiagnosticCode.UNSUPPORTED_ANGULAR_BINDING, "DDS010");
		assert.equal(DiagnosticCode.DYNAMIC_INLINE_TEMPLATE_UNSUPPORTED, "DDS011");
	});
});

describe("compareDiagnostics", () => {
	test("sorts by file path before other diagnostic fields", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "a.ts",
		};
		const right: MigrationDiagnostic = {
			code: "DDS002",
			severity: "warning",
			message: "b",
			filePath: "b.ts",
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sorts by start offset after file path", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
		};
		const right: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 20,
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sorts by end offset after start offset", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
			end: 15,
		};
		const right: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
			end: 20,
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sorts by operation id after end offset", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
			end: 20,
			operationId: "a",
		};
		const right: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
			end: 20,
			operationId: "b",
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sorts by code after operation id", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
			end: 20,
			operationId: "a",
		};
		const right: MigrationDiagnostic = {
			code: "DDS002",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
			end: 20,
			operationId: "a",
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sorts by message last", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 10,
			end: 20,
			operationId: "a",
		};
		const right: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "b",
			filePath: "x.ts",
			start: 10,
			end: 20,
			operationId: "a",
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("diagnostics without a location sort before located diagnostics", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
		};
		const right: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "x.ts",
			start: 0,
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sortDiagnostics returns a new sorted array", () => {
		const diagnostics: MigrationDiagnostic[] = [
			{ code: "DDS002", severity: "warning", message: "b" },
			{ code: "DDS001", severity: "warning", message: "a" },
		];
		const sorted = sortDiagnostics(diagnostics);
		assert.deepEqual(
			sorted.map((d) => d.code),
			["DDS001", "DDS002"],
		);
		assert.notStrictEqual(sorted, diagnostics);
	});
});
