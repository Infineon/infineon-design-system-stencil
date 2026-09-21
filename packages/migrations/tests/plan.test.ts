import assert from "node:assert/strict";
import {
	chmod,
	mkdtemp,
	readdir,
	readFile,
	rename,
	rm,
	stat,
	unlink,
	writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, test } from "node:test";
import { HtmlRenamePropAdapter } from "../lib/adapters/html/index.js";
import { createExecutorRegistry } from "../lib/core/executor-registry.js";
import {
	analyseMigration,
	applyMigrationPlan,
	type MigrationFileSystem,
} from "../lib/core/plan.js";
import type {
	MigrationExecutionContext,
	MigrationManifest,
	MigrationPlan,
} from "../lib/core/types.js";
import { RenamePropExecutor } from "../lib/operations/rename-prop/executor.js";
import { readTextFile, writeTextFile } from "../lib/project/file-system.js";

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

const createFileChangePlan = (
	fileChanges: MigrationPlan["fileChanges"],
): MigrationPlan => ({
	framework: "html",
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
	appliedReleases: ["40.0.0"],
	processedFileCount: fileChanges.length,
	fileChanges,
	diagnostics: [],
});

const createFailingFileSystem = (
	shouldFail: (
		operation: "write" | "rename" | "remove",
		firstPath: string,
		secondPath?: string,
	) => boolean,
): MigrationFileSystem => ({
	readTextFile,
	writeTextFile: async (filePath, content) => {
		if (shouldFail("write", filePath)) {
			throw new Error(`forced write failure for ${filePath}`);
		}
		await writeTextFile(filePath, content);
	},
	stat,
	chmod,
	rename: async (oldPath, newPath) => {
		if (shouldFail("rename", oldPath, newPath)) {
			throw new Error(`forced rename failure for ${oldPath}`);
		}
		await rename(oldPath, newPath);
	},
	remove: async (filePath) => {
		if (shouldFail("remove", filePath)) {
			throw new Error(`forced remove failure for ${filePath}`);
		}
		await unlink(filePath);
	},
});

const assertNoTransactionArtifacts = async (
	directory: string,
): Promise<void> => {
	const entries = await readdir(directory);
	assert.equal(
		entries.some((entry) => entry.endsWith(".tmp") || entry.endsWith(".bak")),
		false,
	);
};

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

	test("passes each operation output to the next operation", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-multi-"));
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
								id: "success-to-valid",
								type: "rename-prop",
								component: "ifx-text-field",
								from: "success",
								to: "valid",
							},
							{
								id: "valid-to-state",
								type: "rename-prop",
								component: "ifx-text-field",
								from: "valid",
								to: "state",
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
				'<ifx-text-field state="true"></ifx-text-field>\n',
			);
			assert.deepEqual(plan.fileChanges[0]?.operationIds, [
				"success-to-valid",
				"valid-to-state",
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

			const registry = createExecutorRegistry([
				new RenamePropExecutor([new HtmlRenamePropAdapter()]),
			]);
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

	test("rolls back staged changes when a later operation conflicts", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-rollback-"));
		try {
			const filePath = path.join(directory, "index.html");
			const original = "<ifx-text-field success state></ifx-text-field>\n";
			await writeFile(filePath, original);

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
								id: "valid-to-state",
								type: "rename-prop",
								component: "ifx-text-field",
								from: "valid",
								to: "state",
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

			assert.equal(plan.diagnostics.length, 1);
			assert.equal(plan.diagnostics[0]?.code, "DDS001");
			assert.equal(plan.diagnostics[0]?.operationId, "valid-to-state");
			assert.deepEqual(plan.fileChanges, []);
			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);
			assert.equal(await readFile(filePath, "utf8"), original);
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
			const secondFilePath = path.join(directory, "second.html");
			await writeFile(
				filePath,
				'<ifx-text-field success="true"></ifx-text-field>\n',
			);
			await writeFile(
				secondFilePath,
				'<ifx-text-field success="false"></ifx-text-field>\n',
			);

			const plan = createFileChangePlan([
				{
					filePath,
					originalContent: '<ifx-text-field success="true"></ifx-text-field>\n',
					updatedContent: '<ifx-text-field valid="true"></ifx-text-field>\n',
					operationIds: [],
					changes: [],
				},
				{
					filePath: secondFilePath,
					originalContent:
						'<ifx-text-field success="false"></ifx-text-field>\n',
					updatedContent: '<ifx-text-field valid="false"></ifx-text-field>\n',
					operationIds: [],
					changes: [],
				},
			]);

			await applyMigrationPlan(plan);

			const content = await readFile(filePath, "utf8");
			assert.equal(content, '<ifx-text-field valid="true"></ifx-text-field>\n');
			assert.equal(
				await readFile(secondFilePath, "utf8"),
				'<ifx-text-field valid="false"></ifx-text-field>\n',
			);
			await assertNoTransactionArtifacts(directory);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("cleans staged files when staging a later file fails", async () => {
		const directory = await mkdtemp(
			path.join(tmpdir(), "ifx-plan-stage-fail-"),
		);
		try {
			const firstFilePath = path.join(directory, "first.html");
			const secondFilePath = path.join(directory, "second.html");
			const original = "first";
			await writeFile(firstFilePath, original);
			await writeFile(secondFilePath, "second");
			let stagedWrites = 0;
			const fileSystem = createFailingFileSystem((operation, filePath) => {
				if (operation !== "write" || !filePath.endsWith(".tmp")) {
					return false;
				}
				stagedWrites += 1;
				return stagedWrites === 2;
			});

			await assert.rejects(
				applyMigrationPlan(
					createFileChangePlan([
						{
							filePath: firstFilePath,
							originalContent: original,
							updatedContent: "first updated",
							operationIds: [],
							changes: [],
						},
						{
							filePath: secondFilePath,
							originalContent: "second",
							updatedContent: "second updated",
							operationIds: [],
							changes: [],
						},
					]),
					fileSystem,
				),
				/Migration staging failed/,
			);
			assert.equal(await readFile(firstFilePath, "utf8"), original);
			assert.equal(await readFile(secondFilePath, "utf8"), "second");
			await assertNoTransactionArtifacts(directory);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("rolls back committed files when installing a later file fails", async () => {
		const directory = await mkdtemp(
			path.join(tmpdir(), "ifx-plan-commit-fail-"),
		);
		try {
			const firstFilePath = path.join(directory, "first.html");
			const secondFilePath = path.join(directory, "second.html");
			const laterFilePath = path.join(directory, "later.html");
			await writeFile(firstFilePath, "first");
			await writeFile(secondFilePath, "second");
			await writeFile(laterFilePath, "later");
			const fileSystem = createFailingFileSystem(
				(operation, oldPath, newPath) =>
					operation === "rename" &&
					newPath === secondFilePath &&
					oldPath.endsWith(".tmp"),
			);

			await assert.rejects(
				applyMigrationPlan(
					createFileChangePlan([
						{
							filePath: firstFilePath,
							originalContent: "first",
							updatedContent: "first updated",
							operationIds: [],
							changes: [],
						},
						{
							filePath: secondFilePath,
							originalContent: "second",
							updatedContent: "second updated",
							operationIds: [],
							changes: [],
						},
						{
							filePath: laterFilePath,
							originalContent: "later",
							updatedContent: "later updated",
							operationIds: [],
							changes: [],
						},
					]),
					fileSystem,
				),
				/Migration commit failed/,
			);
			assert.equal(await readFile(firstFilePath, "utf8"), "first");
			assert.equal(await readFile(secondFilePath, "utf8"), "second");
			assert.equal(await readFile(laterFilePath, "utf8"), "later");
			await assertNoTransactionArtifacts(directory);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("restores the current file when installation fails after backup", async () => {
		const directory = await mkdtemp(
			path.join(tmpdir(), "ifx-plan-backup-fail-"),
		);
		try {
			const firstFilePath = path.join(directory, "first.html");
			const secondFilePath = path.join(directory, "second.html");
			await writeFile(firstFilePath, "first");
			await writeFile(secondFilePath, "second");
			const fileSystem = createFailingFileSystem(
				(operation, oldPath, newPath) =>
					operation === "rename" &&
					newPath === secondFilePath &&
					oldPath.endsWith(".tmp"),
			);

			await assert.rejects(
				applyMigrationPlan(
					createFileChangePlan([
						{
							filePath: firstFilePath,
							originalContent: "first",
							updatedContent: "first updated",
							operationIds: [],
							changes: [],
						},
						{
							filePath: secondFilePath,
							originalContent: "second",
							updatedContent: "second updated",
							operationIds: [],
							changes: [],
						},
					]),
					fileSystem,
				),
				/Migration commit failed/,
			);
			assert.equal(await readFile(firstFilePath, "utf8"), "first");
			assert.equal(await readFile(secondFilePath, "utf8"), "second");
			await assertNoTransactionArtifacts(directory);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("rejects a plan when a target changed after analysis", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-stale-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(filePath, "changed after analysis");
			await assert.rejects(
				applyMigrationPlan(
					createFileChangePlan([
						{
							filePath,
							originalContent: "original",
							updatedContent: "updated",
							operationIds: [],
							changes: [],
						},
					]),
				),
				(error: Error) =>
					error.message.includes("changed after analysis") &&
					error.message.includes(filePath),
			);
			assert.equal(await readFile(filePath, "utf8"), "changed after analysis");
			await assertNoTransactionArtifacts(directory);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("rechecks targets after staging before committing", async () => {
		const directory = await mkdtemp(
			path.join(tmpdir(), "ifx-plan-stale-staging-"),
		);
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(filePath, "original");
			const fileSystem = createFailingFileSystem(() => false);
			const originalChmod = fileSystem.chmod;
			let changedDuringStaging = false;
			fileSystem.chmod = async (stagedPath, mode) => {
				await originalChmod(stagedPath, mode);
				if (!changedDuringStaging && stagedPath.endsWith(".tmp")) {
					changedDuringStaging = true;
					await writeFile(filePath, "changed during staging");
				}
			};

			await assert.rejects(
				applyMigrationPlan(
					createFileChangePlan([
						{
							filePath,
							originalContent: "original",
							updatedContent: "updated",
							operationIds: [],
							changes: [],
						},
					]),
					fileSystem,
				),
				/changed during staging/,
			);
			assert.equal(await readFile(filePath, "utf8"), "changed during staging");
			await assertNoTransactionArtifacts(directory);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("reports rollback failures with the affected path", async () => {
		const directory = await mkdtemp(
			path.join(tmpdir(), "ifx-plan-rollback-fail-"),
		);
		try {
			const firstFilePath = path.join(directory, "first.html");
			const secondFilePath = path.join(directory, "second.html");
			await writeFile(firstFilePath, "first");
			await writeFile(secondFilePath, "second");
			const fileSystem = createFailingFileSystem(
				(operation, oldPath, newPath) =>
					operation === "rename" &&
					((newPath === secondFilePath && oldPath.endsWith(".tmp")) ||
						(newPath === firstFilePath && oldPath.endsWith(".bak"))),
			);

			await assert.rejects(
				applyMigrationPlan(
					createFileChangePlan([
						{
							filePath: firstFilePath,
							originalContent: "first",
							updatedContent: "first updated",
							operationIds: [],
							changes: [],
						},
						{
							filePath: secondFilePath,
							originalContent: "second",
							updatedContent: "second updated",
							operationIds: [],
							changes: [],
						},
					]),
					fileSystem,
				),
				(error: Error) =>
					error.message.includes("Migration apply failed") &&
					error.message.includes("rollback failed") &&
					error.message.includes(firstFilePath),
			);
			const entries = await readdir(directory);
			const backupPath = entries
				.filter((entry) => entry.endsWith(".bak"))
				.map((entry) => path.join(directory, entry))
				.find((candidate) => candidate.includes("first.html"));
			assert.ok(backupPath);
			assert.equal(await readFile(backupPath, "utf8"), "first");
			assert.equal(await readFile(secondFilePath, "utf8"), "second");
			assert.equal(
				entries.some((entry) => entry.endsWith(".tmp")),
				false,
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("preserves the original file mode after applying a migration", async () => {
		if (process.platform === "win32") {
			return;
		}

		const directory = await mkdtemp(path.join(tmpdir(), "ifx-plan-mode-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(filePath, "original");
			await chmod(filePath, 0o755);
			const originalMode = (await stat(filePath)).mode & 0o7777;

			await applyMigrationPlan(
				createFileChangePlan([
					{
						filePath,
						originalContent: "original",
						updatedContent: "updated",
						operationIds: [],
						changes: [],
					},
				]),
			);

			assert.equal((await stat(filePath)).mode & 0o7777, originalMode);
			await assertNoTransactionArtifacts(directory);
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
