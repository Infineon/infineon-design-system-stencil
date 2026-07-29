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

	test("writes a safe local spread", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n',
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
		assert.match(diskContent, /const props = \{ valid: isValid \}/);
	});

	test("edits a declaration once when it is spread multiple times", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => (\n  <>\n    <IfxTextField {...props} />\n    <IfxTextField {...props} />\n  </>\n);\n',
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
			/const props = \{ valid: isValid \}/,
		);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.equal(
			(diskContent.match(/const props = \{ valid: isValid \}/g) ?? []).length,
			1,
		);
	});

	test("leaves a warning-only unsafe spread unchanged", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nimport { props } from "./props";\nconst App = () => <IfxTextField {...props} />;\n';
		const filePath = await writeComponent("App.tsx", content);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 0);
		assert.equal(plan.diagnostics.length, 1);
		assert.equal(plan.diagnostics[0]?.code, "DDS003");
		assert.equal(plan.diagnostics[0]?.severity, "warning");

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.equal(diskContent, content);
	});

	test("migrates a safe direct prop despite an unrelated warning", async () => {
		const safeFilePath = await writeComponent(
			"Safe.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n',
		);
		await writeComponent(
			"Unsafe.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nimport { props } from "./props";\nconst App = () => <IfxTextField {...props} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		assert.ok(
			plan.diagnostics.some((diagnostic) => diagnostic.code === "DDS003"),
		);

		await applyMigrationPlan(plan);
		const safeContent = await readFile(safeFilePath, "utf8");
		assert.match(safeContent, /<IfxTextField valid \/>/);
	});

	test("blocks every project write on a projected direct/spread conflict", async () => {
		const safeFilePath = await writeComponent(
			"Safe.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n',
		);
		const conflictFilePath = await writeComponent(
			"Conflict.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} valid />;\n',
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

		const safeContent = await readFile(safeFilePath, "utf8");
		assert.match(safeContent, /success/);
		const conflictContent = await readFile(conflictFilePath, "utf8");
		assert.match(conflictContent, /success/);
	});

	test("emits DDS002 for an unsupported object shape", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst base = { success: isValid };\nconst props = { ...base, success: true };\nconst App = () => <IfxTextField {...props} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 0);
		assert.ok(
			plan.diagnostics.some((diagnostic) => diagnostic.code === "DDS002"),
		);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /const props = \{ \.\.\.base, success: true \}/);
	});

	test("reports imported objects as DDS003 and helper objects as DDS004", async () => {
		await writeComponent(
			"Imported.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nimport { props } from "./props";\nconst App = () => <IfxTextField {...props} />;\n',
		);
		await writeComponent(
			"Helper.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = buildProps();\nconst App = () => <IfxTextField {...props} />;\n',
		);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 0);
		assert.ok(
			plan.diagnostics.some(
				(diagnostic) =>
					diagnostic.code === "DDS003" &&
					diagnostic.filePath?.includes("Imported"),
			),
		);
		assert.ok(
			plan.diagnostics.some(
				(diagnostic) =>
					diagnostic.code === "DDS004" &&
					diagnostic.filePath?.includes("Helper"),
			),
		);
	});

	test("chains releases on a local spread object", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n',
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
			/const props = \{ state: isValid \}/,
		);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(diskContent, /const props = \{ state: isValid \}/);
	});

	test("is a no-op when executed a second time", async () => {
		const filePath = await writeComponent(
			"App.tsx",
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n',
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
		assert.match(diskContent, /const props = \{ valid: isValid \}/);
	});

	test("applies a warning-only plan to the safe element only", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nimport { importedProps } from "./props";\nconst App = () => (\n  <>\n    <IfxTextField success {...importedProps} />\n    <IfxTextField success />\n  </>\n);\n';
		const filePath = await writeComponent("App.tsx", content);

		const plan = await analyseMigration({
			manifest: singleReleaseManifest,
			context: createContext(tempRoot),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		assert.ok(
			plan.diagnostics.some((diagnostic) => diagnostic.code === "DDS003"),
		);
		assert.ok(
			!plan.diagnostics.some((diagnostic) => diagnostic.severity === "error"),
		);

		await applyMigrationPlan(plan);
		const diskContent = await readFile(filePath, "utf8");
		assert.match(
			diskContent,
			/<IfxTextField success \{\.\.\.importedProps\} \/>/,
		);
		assert.match(diskContent, /<IfxTextField valid \/>/);
	});
});
