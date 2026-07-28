import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { analyseMigration, applyMigrationPlan } from "../lib/core/plan.js";
import type { MigrationExecutionContext, MigrationManifest } from "../lib/core/types.js";

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
	framework: "react",
	packageName: "@infineon/infineon-design-system-react",
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
});

const createChainedContext = (rootDirectory: string): MigrationExecutionContext => ({
	rootDirectory,
	framework: "react",
	packageName: "@infineon/infineon-design-system-react",
	fromVersion: "39.0.0",
	toVersion: "41.0.0",
});

describe("React U1 integration", () => {
	let tempRoot: string;

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-react-u1-"));
	});

	afterEach(async () => {
		await rm(tempRoot, { recursive: true, force: true });
	});

	const writeComponent = async (relativePath: string, content: string): Promise<string> => {
		const filePath = path.join(tempRoot, relativePath);
		await writeFile(filePath, content);
		return filePath;
	};

	test("renames a direct React prop", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success={isValid} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 1);
		assert.match(plan.fileChanges[0]?.updatedContent ?? "", /<IfxTextField valid=\{isValid\} \/>/);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /<IfxTextField valid=\{isValid\} \/>/);
	});

	test("leaves generic response.success unchanged", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst response = { success: true };\nconst App = () => <IfxTextField success={response.success} />;\n',
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
		assert.match(diskContent, /<IfxTextField valid=\{response\.success\} \/>/);
	});

	test("blocks all writes on conflict", async () => {
		const safeFilePath = await writeComponent(
			"Safe.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst Safe = () => <IfxTextField success />;\n',
		);
		const conflictFilePath = await writeComponent(
			"Conflict.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst Conflict = () => <IfxTextField success valid />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.ok(plan.diagnostics.some((diagnostic) => diagnostic.severity === "error"));
		await assert.rejects(applyMigrationPlan(plan), /one or more errors were detected/);

		const safeContent = await readFile(safeFilePath, "utf8");
		assert.match(safeContent, /success/);
		const conflictContent = await readFile(conflictFilePath, "utf8");
		assert.match(conflictContent, /success/);
	});

	test("is idempotent when reapplied", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n',
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
		assert.match(diskContent, /<IfxTextField valid \/>/);
	});

	test("chains renames across releases", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n',
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
		assert.match(plan.fileChanges[0]?.updatedContent ?? "", /<IfxTextField state \/>/);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /<IfxTextField state \/>/);
	});
});
