import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, test } from "node:test";
import { HtmlRenamePropAdapter } from "../lib/adapters/html/index.js";
import { createExecutorRegistry } from "../lib/core/executor-registry.js";
import { analyseMigration, applyMigrationPlan } from "../lib/core/plan.js";
import type {
	MigrationExecutionContext,
	MigrationManifest,
} from "../lib/core/types.js";
import { RenamePropExecutor } from "../lib/operations/rename-prop/executor.js";

const createManifest = (): MigrationManifest => ({
	schemaVersion: 1,
	releases: [
		{
			version: "40.0.0",
			operations: [
				{
					id: "v40-text-field-show-delete-icon-to-clearable",
					type: "rename-prop",
					component: "ifx-text-field",
					from: "show-delete-icon",
					to: "clearable",
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

const runHtmlMigration = (rootDirectory: string) =>
	analyseMigration({
		manifest: createManifest(),
		context: createContext(rootDirectory),
		fromVersion: "39.0.0",
		toVersion: "40.0.0",
		executors: createExecutorRegistry([
			new RenamePropExecutor([new HtmlRenamePropAdapter()]),
		]),
	});

describe("HTML U5 integration", () => {
	test("migrates a clean HTML consumer", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-u5-html-"));
		try {
			const filePath = path.join(directory, "index.html");
			const input = `<!DOCTYPE html>
<html>
<body>
  <ifx-text-field show-delete-icon="true"></ifx-text-field>
</body>
</html>
`;
			await writeFile(filePath, input);

			const plan = await runHtmlMigration(directory);
			assert.equal(plan.fileChanges.length, 1);
			assert.equal(
				plan.fileChanges[0]?.updatedContent,
				`<!DOCTYPE html>
<html>
<body>
  <ifx-text-field clearable="true"></ifx-text-field>
</body>
</html>
`,
			);

			await applyMigrationPlan(plan);
			const output = await readFile(filePath, "utf8");
			assert.equal(
				output,
				`<!DOCTYPE html>
<html>
<body>
  <ifx-text-field clearable="true"></ifx-text-field>
</body>
</html>
`,
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("blocks all project writes when one file has a conflict", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-u5-conflict-"));
		try {
			const safeFile = path.join(directory, "safe.html");
			const conflictFile = path.join(directory, "conflict.html");
			await writeFile(
				safeFile,
				'<ifx-text-field show-delete-icon="true"></ifx-text-field>\n',
			);
			await writeFile(
				conflictFile,
				'<ifx-text-field show-delete-icon="true" clearable="false"></ifx-text-field>\n',
			);

			const plan = await runHtmlMigration(directory);
			assert.equal(plan.diagnostics.length, 1);
			assert.equal(plan.diagnostics[0]?.code, "DDS001");
			assert.equal(plan.fileChanges.length, 0);
			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const safeContent = await readFile(safeFile, "utf8");
			assert.equal(
				safeContent,
				'<ifx-text-field show-delete-icon="true"></ifx-text-field>\n',
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("is idempotent when applied a second time", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-u5-idempotent-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(
				filePath,
				'<ifx-text-field show-delete-icon="true"></ifx-text-field>\n',
			);

			const firstPlan = await runHtmlMigration(directory);
			await applyMigrationPlan(firstPlan);

			const secondPlan = await runHtmlMigration(directory);
			assert.equal(secondPlan.fileChanges.length, 0);
			assert.equal(secondPlan.diagnostics.length, 0);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("ignores non-HTML files", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-u5-non-html-"));
		try {
			await writeFile(
				path.join(directory, "script.js"),
				'const el = document.querySelector("ifx-text-field");\nel.showDeleteIcon = true;\n',
			);
			await writeFile(
				path.join(directory, "page.html"),
				'<ifx-text-field show-delete-icon="true"></ifx-text-field>\n',
			);

			const plan = await runHtmlMigration(directory);
			assert.equal(plan.fileChanges.length, 1);
			assert.equal(plan.fileChanges[0]?.filePath, path.join(directory, "page.html"));
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("a migrated project produces an empty second plan", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-u5-dry-run-"));
		try {
			const filePath = path.join(directory, "index.html");
			await writeFile(
				filePath,
				'<ifx-text-field show-delete-icon="true"></ifx-text-field>\n',
			);

			const dryRunPlan = await runHtmlMigration(directory);
			await applyMigrationPlan(dryRunPlan);

			const postApplyPlan = await runHtmlMigration(directory);
			assert.equal(postApplyPlan.fileChanges.length, 0);
			assert.equal(postApplyPlan.diagnostics.length, 0);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});

	test("collects and migrates .htm files", async () => {
		const directory = await mkdtemp(path.join(tmpdir(), "ifx-u5-htm-"));
		try {
			const filePath = path.join(directory, "legacy.htm");
			await writeFile(
				filePath,
				'<ifx-text-field show-delete-icon></ifx-text-field>\n',
			);

			const plan = await runHtmlMigration(directory);
			assert.equal(plan.fileChanges.length, 1);
			assert.equal(plan.fileChanges[0]?.filePath, filePath);
			assert.equal(
				plan.fileChanges[0]?.updatedContent,
				'<ifx-text-field clearable></ifx-text-field>\n',
			);
		} finally {
			await rm(directory, { recursive: true, force: true });
		}
	});
});
