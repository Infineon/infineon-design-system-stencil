import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { createExecutorRegistry } from "../lib/core/executor-registry.js";
import { DiagnosticCode } from "../lib/core/diagnostic.js";
import type {
	MigrationAnalysis,
	MigrationExecutionContext,
	MigrationStepDefinition,
	MigrationStepExecutor,
	RenamePropStepDefinition,
} from "../lib/core/types.js";

describe("createExecutorRegistry", () => {
	const dummyContext: MigrationExecutionContext = {
		rootDirectory: "/tmp",
		framework: "html",
		packageName: "@infineon/infineon-design-system-stencil",
		fromVersion: "39.0.0",
		toVersion: "40.0.0",
	};

	test("rejects duplicate executor registrations", () => {
		const executor: MigrationStepExecutor<MigrationStepDefinition> = {
			type: "rename-prop",
			async analyse() {
				return { fileAnalyses: [], diagnostics: [] };
			},
		};

		assert.throws(
			() => createExecutorRegistry([executor, executor]),
			/Duplicate migration step executor registration/,
		);
	});

	test("returns an error diagnostic for unregistered step types", async () => {
		const registry = createExecutorRegistry([]);
		const step: MigrationStepDefinition = {
			type: "rename-prop",
			releaseVersion: "40.0.0",
			operation: {
				id: "op1",
				type: "rename-prop",
				component: "ifx-text-field",
				from: "success",
				to: "valid",
			},
		};

		const result = await registry.analyse(step, dummyContext);
		assert.equal(result.fileAnalyses.length, 0);
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0].code, DiagnosticCode.INVALID_MANIFEST);
		assert.equal(result.diagnostics[0].severity, "error");
	});

	test("delegates to the registered executor", async () => {
		const expected: MigrationAnalysis = {
			fileAnalyses: [],
			diagnostics: [
				{
					code: "DDS001",
					severity: "warning",
					message: "test",
					operationId: "op1",
				},
			],
		};

		const executor: MigrationStepExecutor<RenamePropStepDefinition> = {
			type: "rename-prop",
			async analyse() {
				return expected;
			},
		};

		const registry = createExecutorRegistry([executor]);
		const step: RenamePropStepDefinition = {
			type: "rename-prop",
			releaseVersion: "40.0.0",
			operation: {
				id: "op1",
				type: "rename-prop",
				component: "ifx-text-field",
				from: "success",
				to: "valid",
			},
		};

		const result = await registry.analyse(step, dummyContext);
		assert.deepEqual(result, expected);
	});
});
