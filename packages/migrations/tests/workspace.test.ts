import assert from "node:assert/strict";
import { describe, test } from "node:test";

import type { FileAnalysis } from "../lib/core/types.js";
import { createVirtualWorkspace } from "../lib/core/workspace.js";

const createAnalysis = (
	filePath: string,
	content: string,
	edits: FileAnalysis["edits"],
	changes: string[] = ["change"],
	diagnostics: FileAnalysis["diagnostics"] = [],
): FileAnalysis => ({
	kind: "modify",
	filePath,
	content,
	edits,
	changes,
	diagnostics,
});

describe("VirtualWorkspace.applyStep", () => {
	test("commits all edits when every analysis is valid", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
		]);

		assert.deepEqual(diagnostics, []);
		const file = workspace.read("/a.txt");
		assert.equal(file?.currentContent, "hello there");
		assert.deepEqual(file?.operationIds, ["op1"]);
		assert.deepEqual(file?.changes, ["change"]);
	});

	test("commits no edits when one analysis has an error diagnostic", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/safe.txt", "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
			createAnalysis(
				"/conflict.txt",
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

	test("does not register files when edits produce unchanged content", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", "hello world", [
				{ start: 6, end: 11, replacement: "world", operationId: "op1" },
			]),
		]);

		assert.deepEqual(diagnostics, []);
		assert.equal(workspace.read("/a.txt"), undefined);
	});

	test("does not register files when edits are empty", () => {
		const workspace = createVirtualWorkspace();
		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", "hello world", []),
		]);

		assert.deepEqual(diagnostics, []);
		assert.equal(workspace.read("/a.txt"), undefined);
	});

	test("does not change existing files when there are no new edits", () => {
		const workspace = createVirtualWorkspace();
		workspace.applyStep([
			createAnalysis("/a.txt", "hello world", [
				{ start: 6, end: 11, replacement: "there", operationId: "op1" },
			]),
		]);

		const diagnostics = workspace.applyStep([
			createAnalysis("/a.txt", "hello there", []),
		]);
		assert.deepEqual(diagnostics, []);
		assert.equal(workspace.read("/a.txt")?.currentContent, "hello there");
		assert.deepEqual(workspace.read("/a.txt")?.operationIds, ["op1"]);
	});
});
