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
	framework: "react",
	packageName: "@infineon/infineon-design-system-react",
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
});

const createChainedContext = (
	rootDirectory: string,
): MigrationExecutionContext => ({
	rootDirectory,
	framework: "react",
	packageName: "@infineon/infineon-design-system-react",
	fromVersion: "39.0.0",
	toVersion: "41.0.0",
});

describe("React U2 integration", () => {
	let tempRoot: string;

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-react-u2-"));
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

	test("keeps an identifier spread unchanged", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n';
		const filePath = await writeComponent("App.tsx", content);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 0);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.equal(diskContent, content);
	});

	test("keeps an inline object spread unchanged", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField {...{ success: true }} />;\n';
		const filePath = await writeComponent("App.tsx", content);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 0);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.equal(diskContent, content);
	});

	test("migrates a direct prop even when a spread is present", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { other: true };\nconst App = () => <IfxTextField success {...props} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.diagnostics.length, 0);
		assert.equal(plan.fileChanges.length, 1);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /<IfxTextField valid \{\.\.\.props\} \/>/);
	});

	test("migrates a safe direct prop despite an opaque spread", async () => {
		const safeFilePath = await writeComponent(
			"Safe.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n',
		);
		await writeComponent(
			"Opaque.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: true };\nconst App = () => <IfxTextField {...props} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		assert.equal(plan.diagnostics.length, 0);

		await applyMigrationPlan(plan);
		const safeContent = await readFile(safeFilePath, "utf8");
		assert.match(safeContent, /<IfxTextField valid \/>/);
	});

	test("keeps an opaque spread unchanged and does not block direct props", async () => {
		const safeFilePath = await writeComponent(
			"Safe.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n',
		);
		const opaqueFilePath = await writeComponent(
			"Opaque.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		assert.equal(plan.diagnostics.length, 0);
		await applyMigrationPlan(plan);

		const safeContent = await readFile(safeFilePath, "utf8");
		assert.match(safeContent, /<IfxTextField valid \/>/);
		const opaqueContent = await readFile(opaqueFilePath, "utf8");
		assert.match(opaqueContent, /<IfxTextField \{\.\.\.props\} \/>/);
	});

	test("chains releases on a direct prop rename", async () => {
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
		assert.match(
			plan.fileChanges[0]?.updatedContent ?? "",
			/<IfxTextField state \/>/,
		);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /<IfxTextField state \/>/);
	});

	test("is a no-op when executed a second time", async () => {
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
			context: {
				...createContext(tempRoot),
				fromVersion: "40.0.0",
				toVersion: "40.0.0",
			},
			fromVersion: "40.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(secondPlan.fileChanges.length, 0);
		assert.equal(secondPlan.diagnostics.length, 0);

		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /<IfxTextField valid \/>/);
	});

	test("leaves an opaque spread unchanged while migrating the direct prop", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: true };\nconst App = () => (\n  <>\n    <IfxTextField {...props} />\n    <IfxTextField success />\n  </>\n);\n';
		const filePath = await writeComponent("App.tsx", content);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		assert.equal(plan.diagnostics.length, 0);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /<IfxTextField \{\.\.\.props\} \/>/);
		assert.match(diskContent, /<IfxTextField valid \/>/);
	});
});
