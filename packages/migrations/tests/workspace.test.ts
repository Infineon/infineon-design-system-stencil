import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { DiagnosticCode } from "../lib/core/diagnostic.js";
import type { FileAnalysis } from "../lib/core/types.js";
import { createVirtualWorkspace } from "../lib/core/workspace.js";

const createAnalysis = (
	filePath: string,
	baseRevision: number,
	content: string,
	edits: FileAnalysis["edits"],
	changes: string[] = ["change"],
	diagnostics: FileAnalysis["diagnostics"] = [],
): FileAnalysis => ({
	kind: "modify",
	filePath,
	baseRevision,
	content,
	edits,
	changes,
	diagnostics,
});

describe("VirtualWorkspace.applyStep", () => {
	test("commits all edits when every analysis is valid", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", 0, "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
		]);

		assert.deepEqual(diagnostics, []);
		const file = workspace.read("/a.txt");
		assert.equal(file?.currentContent, "hello there");
		assert.equal(file?.revision, 1);
		assert.deepEqual(file?.operationIds, ["op1"]);
		assert.deepEqual(file?.changes, ["change"]);
	});

	test("commits no edits when one analysis has an error diagnostic", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/safe.txt", 0, "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
			createAnalysis(
				"/conflict.txt",
				0,
				"hello world",
				[],
				[],
				[
					{
						code: "DDS001",
						severity: "error",
						message: "conflict",
						filePath: "/conflict.txt",
					},
				],
			),
		]);

		assert.equal(diagnostics.length, 0);
		assert.equal(workspace.read("/safe.txt"), undefined);
		assert.equal(workspace.read("/conflict.txt"), undefined);
	});

	test("commits no edits when one analysis is stale", () => {
		const workspace = createVirtualWorkspace();
		workspace.load("/a.txt", "hello world");
		const file = workspace.read("/a.txt");
		assert.equal(file?.revision, 0);

		const first = workspace.applyStep([
			createAnalysis("/a.txt", 0, "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
		]);
		assert.deepEqual(first, []);
		assert.equal(workspace.read("/a.txt")?.revision, 1);

		const stale = createAnalysis("/a.txt", 0, "hello there", [
			{ start: 6, end: 11, replacement: "again", operationId: "op2" },
		]);
		const second = workspace.applyStep([stale]);

		assert.equal(second.length, 1);
		assert.equal(second[0]?.code, DiagnosticCode.STALE_FILE_ANALYSIS);
		assert.equal(workspace.read("/a.txt")?.currentContent, "hello there");
		assert.equal(workspace.read("/a.txt")?.revision, 1);
	});

	test("does not register files when edits produce unchanged content", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", 0, "hello world", [
				{ start: 6, end: 11, replacement: "world", operationId: "op1" },
			]),
		]);

		assert.deepEqual(diagnostics, []);
		assert.equal(workspace.read("/a.txt"), undefined);
	});

	test("does not register files when edits are empty", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", 0, "hello world", []),
		]);

		assert.deepEqual(diagnostics, []);
		assert.equal(workspace.read("/a.txt"), undefined);
	});

	test("does not change revision for existing files with no new edits", () => {
		const workspace = createVirtualWorkspace();
		workspace.applyStep([
			createAnalysis("/a.txt", 0, "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
		]);
		assert.equal(workspace.read("/a.txt")?.revision, 1);

		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", 1, "hello there", []),
		]);
		assert.deepEqual(diagnostics, []);
		assert.equal(workspace.read("/a.txt")?.revision, 1);
		assert.deepEqual(workspace.read("/a.txt")?.operationIds, ["op1"]);
	});

	test("rejects the entire step when one file is stale", () => {
		const workspace = createVirtualWorkspace();
		workspace.load("/stale.txt", "alpha");

		const diagnostics = workspace.applyStep([
			createAnalysis("/new.txt", 0, "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
			createAnalysis("/stale.txt", 1, "alpha", [
				{ start: 0, end: 5, replacement: "beta", operationId: "op2" },
			]),
		]);

		assert.equal(diagnostics.length, 1);
		assert.equal(diagnostics[0]?.code, DiagnosticCode.STALE_FILE_ANALYSIS);
		assert.equal(workspace.read("/new.txt"), undefined);
		assert.equal(workspace.read("/stale.txt")?.currentContent, "alpha");
		assert.equal(workspace.read("/stale.txt")?.revision, 0);
	});
});
