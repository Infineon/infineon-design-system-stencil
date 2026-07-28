import assert from "node:assert/strict";
import { describe, test } from "node:test";
import type { RenamePropAdapter } from "../lib/operations/rename-prop/adapter.js";
import { RenamePropExecutor } from "../lib/operations/rename-prop/executor.js";

const createFakeAdapter = (framework: string): RenamePropAdapter => ({
	framework: framework as RenamePropAdapter["framework"],
	collectFiles: async () => [],
	analyseFile: async () => null,
});

describe("RenamePropExecutor", () => {
	test("rejects duplicate framework adapters", () => {
		assert.throws(
			() =>
				new RenamePropExecutor([
					createFakeAdapter("html"),
					createFakeAdapter("html"),
				]),
			/duplicate rename-prop adapter registered for framework "html"/iu,
		);
	});

	test("throws when no adapter exists for the target framework", async () => {
		const executor = new RenamePropExecutor([createFakeAdapter("html")]);

		await assert.rejects(
			() =>
				executor.analyse(
					{
						type: "rename-prop",
						releaseVersion: "40.0.0",
						operation: {
							id: "op-1",
							type: "rename-prop",
							component: "ifx-text-field",
							from: "success",
							to: "valid",
						},
					},
					{
						rootDirectory: "/tmp",
						framework: "react",
						packageName: "@infineon/infineon-design-system-react",
						fromVersion: "39.0.0",
						toVersion: "40.0.0",
					},
				),
			/no rename-prop adapter available for framework "react"/iu,
		);
	});
});
