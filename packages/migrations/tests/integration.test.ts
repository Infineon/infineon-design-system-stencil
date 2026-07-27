import assert from "node:assert/strict";
import test from "node:test";
import path from "node:path";

import { runMigration } from "../lib/index.js";
import {
	cleanupTempFixture,
	createTempFixture,
	readFixtureFile,
	withPatchedConsole,
	writeTestManifest,
} from "./helpers.js";

const accordionManifest = {
	schemaVersion: 1 as const,
	migrations: [
		{ type: "prop-rename" as const, component: "ifx-accordion", from: "auto-collapse", to: "single-open" },
	],
};

const textFieldManifest = {
	schemaVersion: 1 as const,
	migrations: [
		{ type: "prop-rename" as const, component: "ifx-text-field", from: "show-delete-icon", to: "show-clear-button" },
	],
};

const runFixture = async (fixtureName: string, framework: "html" | "react" | "vue") => {
	const fixtureDirectory = await createTempFixture(fixtureName);
	const manifestPath = await writeTestManifest(fixtureDirectory, accordionManifest);

	try {
		return await withPatchedConsole(() =>
			runMigration([
				"--cwd",
				fixtureDirectory,
				"--config",
				manifestPath,
				"--framework",
				framework,
			]),
		);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
};

test("HTML renames exact custom-element attributes only", async () => {
	const fixtureDirectory = await createTempFixture("html-parser-boundary-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory, accordionManifest);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
		);
		assert.equal(result.modifiedFiles.length, 1);
		const content = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
		assert.ok(content.includes('<ifx-accordion single-open="true"'));
		assert.ok(content.includes("<div auto-collapse=\"true\">"));
		assert.ok(content.includes('const propName = "auto-collapse"'));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("React direct property rename remains supported", async () => {
	const fixtureDirectory = await createTempFixture("react-text-field-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory, textFieldManifest);
	const result = await withPatchedConsole(() =>
		runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
	);
	await cleanupTempFixture(fixtureDirectory);
	assert.ok(result.modifiedFiles.length > 0);
});

test("Vue direct property rename remains supported", async () => {
	const result = await runFixture("vue-sfc-prop-rename-project", "vue");
	assert.ok(result.modifiedFiles.length > 0);
});

test("HTML runner does not process external script files", async () => {
	const fixtureDirectory = await createTempFixture("html-external-script-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory, accordionManifest);

	try {
		const before = await readFixtureFile(fixtureDirectory, path.join("src", "main.js"));
		await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
		);
		assert.equal(await readFixtureFile(fixtureDirectory, path.join("src", "main.js")), before);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});
