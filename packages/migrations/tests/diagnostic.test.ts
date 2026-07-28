import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
	compareDiagnostics,
	DiagnosticCode,
	sortDiagnostics,
} from "../lib/core/diagnostic.js";
import type { MigrationDiagnostic } from "../lib/core/types.js";

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
	});
});

describe("compareDiagnostics", () => {
	test("sorts by code first", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
		};
		const right: MigrationDiagnostic = {
			code: "DDS002",
			severity: "warning",
			message: "b",
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sorts by file path when codes match", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "a.ts",
		};
		const right: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			filePath: "b.ts",
		};
		assert.ok(compareDiagnostics(left, right) < 0);
	});

	test("sorts by start offset", () => {
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

	test("sorts by end offset", () => {
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

	test("sorts by operation id", () => {
		const left: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			operationId: "a",
		};
		const right: MigrationDiagnostic = {
			code: "DDS001",
			severity: "warning",
			message: "a",
			operationId: "b",
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
