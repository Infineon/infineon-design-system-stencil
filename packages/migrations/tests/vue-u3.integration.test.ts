import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { analyseMigration, applyMigrationPlan } from "../lib/core/plan.js";
import type {
	MigrationExecutionContext,
	MigrationManifest,
} from "../lib/core/types.js";

const singleReleaseManifest: MigrationManifest = {
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
};

const chainedManifest: MigrationManifest = {
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
		{
			version: "41.0.0",
			operations: [
				{
					id: "ifx-text-field-valid-to-state",
					type: "rename-prop",
					component: "ifx-text-field",
					from: "valid",
					to: "state",
				},
			],
		},
	],
};

const createContext = (rootDirectory: string): MigrationExecutionContext => ({
	rootDirectory,
	framework: "vue",
	packageName: "@infineon/infineon-design-system-vue",
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
});

const createChainedContext = (
	rootDirectory: string,
): MigrationExecutionContext => ({
	rootDirectory,
	framework: "vue",
	packageName: "@infineon/infineon-design-system-vue",
	fromVersion: "39.0.0",
	toVersion: "41.0.0",
});

describe("Vue U3 integration", () => {
	let tempRoot: string;

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-vue-u3-"));
	});

	afterEach(async () => {
		await rm(tempRoot, { recursive: true, force: true });
	});

	const writeComponent = async (
		relativePath: string,
		content: string,
	): Promise<string> => {
		const filePath = path.join(tempRoot, relativePath);
		await writeFile(filePath, content);
		return filePath;
	};

	test("renames a direct Vue template prop", async () => {
		const filePath = await writeComponent(
			"App.vue",
			'<template>\n  <ifx-text-field :success="isValid" />\n</template>\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 1);
		assert.match(plan.fileChanges[0]?.updatedContent ?? "", /:valid="isValid"/);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /:valid="isValid"/);
	});

	test("renames a Vue JSX prop in a script block", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField success={isValid} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 1);
		assert.match(
			plan.fileChanges[0]?.updatedContent ?? "",
			/<IfxTextField valid=\{isValid\} \/>/,
		);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /<IfxTextField valid=\{isValid\} \/>/);
	});

	test("renames a render function prop", async () => {
		const filePath = await writeComponent(
			"App.ts",
			'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { success: isValid });\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 1);
		assert.match(
			plan.fileChanges[0]?.updatedContent ?? "",
			/h\(IfxTextField, \{ valid: isValid \}\)/,
		);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /h\(IfxTextField, \{ valid: isValid \}\)/);
	});

	test("leaves generic response.success in script blocks unchanged", async () => {
		const filePath = await writeComponent(
			"App.vue",
			'<script setup lang="ts">\nconst response = { success: true };\n</script>\n<template>\n  <ifx-text-field :success="response.success" />\n</template>\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /response = \{ success: true \}/);
		assert.match(diskContent, /:valid="response\.success"/);
	});

	test("blocks all writes on template conflict", async () => {
		const safeFilePath = await writeComponent(
			"Safe.vue",
			'<template>\n  <ifx-text-field :success="isValid" />\n</template>\n',
		);
		const conflictFilePath = await writeComponent(
			"Conflict.vue",
			"<template>\n  <ifx-text-field success valid />\n</template>\n",
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.ok(
			plan.diagnostics.some((diagnostic) => diagnostic.severity === "error"),
		);
		await assert.rejects(
			applyMigrationPlan(plan),
			/one or more errors were detected/,
		);

		const safeContent = await readFile(safeFilePath, "utf8");
		assert.match(safeContent, /:success/);
		const conflictContent = await readFile(conflictFilePath, "utf8");
		assert.match(conflictContent, /success/);
	});

	test("is idempotent when reapplied", async () => {
		const filePath = await writeComponent(
			"App.vue",
			'<template>\n  <ifx-text-field :success="isValid" />\n</template>\n',
		);

		const firstPlan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});
		await applyMigrationPlan(firstPlan);

		const secondPlan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "40.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(secondPlan.fileChanges.length, 0);
		assert.equal(secondPlan.diagnostics.length, 0);

		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /:valid="isValid"/);
	});

	test("chains renames across releases", async () => {
		const filePath = await writeComponent(
			"App.vue",
			'<template>\n  <ifx-text-field :success="isValid" />\n</template>\n',
		);

		const plan = await analyseMigration({
			manifest: chainedManifest,
			context: createChainedContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "41.0.0",
		});

		assert.deepEqual(plan.appliedReleases, ["40.0.0", "41.0.0"]);
		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 1);
		assert.match(plan.fileChanges[0]?.updatedContent ?? "", /:state="isValid"/);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /:state="isValid"/);
	});

	test("emits DDS007 when an SFC script block cannot be parsed", async () => {
		await writeComponent(
			"Broken.vue",
			'<script setup lang="ts">\nconst x = {\n</script>\n<template>\n  <ifx-text-field :success="isValid" />\n</template>\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.ok(
			plan.diagnostics.some((diagnostic) => diagnostic.code === "DDS007"),
		);
		assert.equal(plan.fileChanges.length, 0);
	});

	test("emits DDS007 when an SFC template cannot be parsed", async () => {
		await writeComponent(
			"Broken.vue",
			'<template>\n  <ifx-text-field :success="isValid"\n</template>\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		const diagnostic = plan.diagnostics.find(
			(d) => d.code === "DDS007" && d.filePath,
		);
		assert.ok(diagnostic);
		assert.equal(plan.fileChanges.length, 0);
	});

	test("conflict diagnostic range points to the conflicting source attribute", async () => {
		const content =
			"<template>\n  <ifx-text-field success valid />\n</template>\n";
		await writeComponent("Conflict.vue", content);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		const conflict = plan.diagnostics.find(
			(d) => d.severity === "error" && d.start !== undefined,
		);
		assert.ok(conflict);
		assert.equal(content.slice(conflict.start, conflict.end), "success");
	});

	test("a single conflict blocks writes for the entire project", async () => {
		const safePath = await writeComponent(
			"Safe.vue",
			'<template>\n  <ifx-text-field :success="isValid" />\n</template>\n',
		);
		await writeComponent(
			"Conflict.vue",
			"<template>\n  <ifx-text-field success valid />\n</template>\n",
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.ok(
			plan.diagnostics.some((diagnostic) => diagnostic.severity === "error"),
		);
		await assert.rejects(
			applyMigrationPlan(plan),
			/one or more errors were detected/,
		);

		const safeContent = await readFile(safePath, "utf8");
		assert.match(safeContent, /:success="isValid"/);
	});

	test("blocks all writes when an inline JSX spread contains both source and target keys", async () => {
		const safePath = await writeComponent(
			"Safe.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField success />;\n',
		);
		await writeComponent(
			"Conflict.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField {...{ success: true, valid: false }} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.ok(
			plan.diagnostics.some((diagnostic) => diagnostic.code === "DDS001"),
		);
		await assert.rejects(
			applyMigrationPlan(plan),
			/one or more errors were detected/,
		);

		const safeContent = await readFile(safePath, "utf8");
		assert.match(safeContent, /<IfxTextField success \/>/);
	});
});
