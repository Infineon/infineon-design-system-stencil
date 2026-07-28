import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, test } from "node:test";
import { createExecutorRegistry } from "../lib/core/executor-registry.js";
import { analyseMigration, applyMigrationPlan } from "../lib/core/plan.js";
import type {
	MigrationExecutionContext,
	MigrationManifest,
	MigrationPlan,
	RenamePropStepDefinition,
} from "../lib/core/types.js";
import { RenamePropExecutor } from "../lib/operations/rename-prop/executor.js";

const createManifest = (): MigrationManifest => ({
	schemaVersion: 1,
	releases: [
		{
			version: "40.0.0",
			operations: [
				{
					id: "ifx-text-field-success-to-valid",
					type: "rename-prop",
					component: "ifx-text-field",
					from: "success",
					to: "valid",
				},
			],
		},
	],
});

const createContext = (rootDirectory: string): MigrationExecutionContext => ({
	rootDirectory,
	framework: "html",
	packageName: "@infineon/infineon-design-system-stencil",
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
});

describe("analyseMigration", () => {
	test("produces an empty plan when no releases are crossed", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-empty-"));
		try {
			await writeFile(
				path.join(directory, "index.html"),
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);

			const plan = await analyseMigration({
				manifest: createManifest(),
				context: createContext(directory),
				fromVersion: "40.0.0",
				toVersion: "40.0.0",
			});

			assert.deepEqual(plan.appliedReleases, []);
			assert.equal(plan.fileChanges.length, 0);
			assert.equal(plan.processedFileCount, 0);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("plans a single HTML attribute rename", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-html-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(
				filePath,
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);

			const plan = await analyseMigration({
				manifest: createManifest(),
				context: createContext(directory),
				fromVersion: "39.0.0",
				toVersion: "40.0.0",
			});

			assert.deepEqual(plan.appliedReleases, ["40.0.0"]);
			assert.equal(plan.fileChanges.length, 1);
			assert.equal(plan.fileChanges[0]?.filePath, filePath);
			assert.equal(
				plan.fileChanges[0]?.updatedContent,
				'<ifx-text-field valid="true"></ifx-text-field>\n',
			);
			assert.deepEqual(plan.fileChanges[0]?.operationIds, [
				"ifx-text-field-success-to-valid",
			]);
			assert.equal(plan.diagnostics.length, 0);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("aggregates multiple operations on the same file", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-multi-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(
				filePath,
				'<ifx-text-field success="true" error="false"></ifx-text-field>\n',
			);

			const manifest: MigrationManifest = {
				schemaVersion: 1,
				releases: [
					{
						version: "40.0.0",
						operations: [
							{
								id: "success-to-valid",
								type: "rename-prop",
								component: "ifx-text-field",
								from: "success",
								to: "valid",
							},
							{
								id: "error-to-invalid",
								type: "rename-prop",
								component: "ifx-text-field",
								from: "error",
								to: "invalid",
							},
						],
					},
				],
			};

			const plan = await analyseMigration({
				manifest,
				context: createContext(directory),
				fromVersion: "39.0.0",
				toVersion: "40.0.0",
			});

			assert.equal(plan.fileChanges.length, 1);
			assert.equal(
				plan.fileChanges[0]?.updatedContent,
				'<ifx-text-field valid="true" invalid="false"></ifx-text-field>\n',
			);
			assert.deepEqual(plan.fileChanges[0]?.operationIds, [
				"success-to-valid",
				"error-to-invalid",
			]);
			assert.equal(plan.diagnostics.length, 0);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});
});

describe("analyseMigration diagnostics", () => {
	test("propagates file-level conflict diagnostics and blocks writes", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-conflict-"));
		try {
			const safeFile = path.join(directory, "safe.html");
			const conflictFile = path.join(directory, "conflict.html");
			await writeFile(
				safeFile,
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);
			await writeFile(
				conflictFile,
				'<ifx-text-field success="true" valid="false"></ifx-text-field>\n',
			);

			const registry = createExecutorRegistry([new RenamePropExecutor()]);
			const plan = await analyseMigration({
				manifest: createManifest(),
				context: createContext(directory),
				fromVersion: "39.0.0",
				toVersion: "40.0.0",
				executors: registry,
			});

			assert.equal(plan.diagnostics.length, 1);
			const diagnostic = plan.diagnostics[0];
			assert.equal(diagnostic?.code, "DDS001");
			assert.equal(diagnostic?.severity, "error");
			assert.equal(diagnostic?.filePath, conflictFile);
			assert.equal(typeof diagnostic?.start, "number");
			assert.equal(typeof diagnostic?.end, "number");
			assert.equal(diagnostic?.operationId, "ifx-text-field-success-to-valid");

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);
			const safeContent = await readFile(safeFile, "utf8");
			assert.equal(
				safeContent,
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("leaves virtual workspace unchanged when a step has a conflict", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-virtual-"));
		try {
			const safeFile = path.join(directory, "safe.html");
			const conflictFile = path.join(directory, "conflict.html");
			await writeFile(
				safeFile,
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);
			await writeFile(
				conflictFile,
				'<ifx-text-field success="true" valid="false"></ifx-text-field>\n',
			);

			const plan = await analyseMigration({
				manifest: createManifest(),
				context: createContext(directory),
				fromVersion: "39.0.0",
				toVersion: "40.0.0",
			});

			assert.ok(
				plan.diagnostics.some((diagnostic) => diagnostic.severity === "error"),
			);
			assert.equal(
				plan.fileChanges.some(
					(change) =>
						change.filePath === safeFile || change.filePath === conflictFile,
				),
				false,
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("stops executing later steps after a step failure", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-stop-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(
				filePath,
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);

			const manifest: MigrationManifest = {
				schemaVersion: 1,
				releases: [
					{
						version: "40.0.0",
						operations: [
							{
								id: "conflict",
								type: "rename-prop",
								component: "ifx-text-field",
								from: "success",
								to: "valid",
							},
						],
					},
					{
						version: "41.0.0",
						operations: [
							{
								id: "later",
								type: "rename-prop",
								component: "ifx-text-field",
								from: "valid",
								to: "state",
							},
						],
					},
				],
			};

			const registry = createExecutorRegistry([
				{
					type: "rename-prop",
					async analyse(step) {
						return {
							fileAnalyses: [],
							processedFilePaths: [],
							diagnostics: [
								{
									code: "DDS999",
									severity: "error",
									message: "forced step failure",
									operationId: step.operation.id,
								},
							],
						};
					},
				},
			]);

			const plan = await analyseMigration({
				manifest,
				context: createContext(directory),
				fromVersion: "39.0.0",
				toVersion: "41.0.0",
				executors: registry,
			});

			assert.deepEqual(plan.appliedReleases, ["40.0.0", "41.0.0"]);
			assert.equal(plan.diagnostics.length, 1);
			assert.equal(plan.diagnostics[0]?.code, "DDS999");
			assert.equal(plan.fileChanges.length, 0);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});
});

describe("applyMigrationPlan", () => {
	test("writes planned changes to disk", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-apply-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(
				filePath,
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);

			const plan = await analyseMigration({
				manifest: createManifest(),
				context: createContext(directory),
				fromVersion: "39.0.0",
				toVersion: "40.0.0",
			});

			await applyMigrationPlan(plan);

			const content = await readFile(filePath, "utf8");
			assert.equal(content, '<ifx-text-field valid="true"></ifx-text-field>\n');
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("throws when the plan contains error diagnostics", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-error-"));
		try {
			await writeFile(
				path.join(directory, "index.html"),
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);

			const plan: MigrationPlan = await analyseMigration({
				manifest: createManifest(),
				context: createContext(directory),
				fromVersion: "39.0.0",
				toVersion: "40.0.0",
			});

			plan.diagnostics.push({
				code: "DDS999",
				severity: "error",
				message: "forced error",
			});

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});
});
