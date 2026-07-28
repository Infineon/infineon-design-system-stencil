import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { analyseMigration } from "../lib/core/plan.js";
import type { MigrationExecutionContext, MigrationManifest } from "../lib/core/types.js";

const manifest: MigrationManifest = {
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

const createContext = (rootDirectory: string, framework: MigrationExecutionContext["framework"]): MigrationExecutionContext => ({
	rootDirectory,
	framework,
	packageName: `@infineon/infineon-design-system-${framework}`,
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
});

test("React direct component props are renamed without touching unrelated properties", async () => {
	const directory = await mkdtemp(path.join(tmpdir(), "ifx-migrations-react-"));
	const filePath = path.join(directory, "App.tsx");
	await writeFile(
		filePath,
		'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst response = { success: true };\nexport const App = () => <IfxTextField success={response.success} />;',
	);

	try {
		const plan = await analyseMigration({
			manifest,
			context: createContext(directory, "react"),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		const updated = plan.fileChanges[0]?.updatedContent;
		assert.ok(updated);
		assert.match(updated, /<IfxTextField valid=\{response\.success\} \/>/);
		assert.match(updated, /response = \{ success: true \}/);
	} finally {
		await rm(directory, { recursive: true, force: true });
	}
});

test("Vue component attributes are renamed", async () => {
	const directory = await mkdtemp(path.join(tmpdir(), "ifx-migrations-vue-"));
	const filePath = path.join(directory, "App.vue");
	await writeFile(filePath, '<template><ifx-text-field :success="isValid" /></template>\n', "utf8");

	try {
		const plan = await analyseMigration({
			manifest,
			context: createContext(directory, "vue"),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		const updated = plan.fileChanges[0]?.updatedContent;
		assert.ok(updated);
		assert.match(updated, /:valid="isValid"/);
	} finally {
		await rm(directory, { recursive: true, force: true });
	}
});

test("HTML markup attributes are renamed while script text is untouched", async () => {
	const directory = await mkdtemp(path.join(tmpdir(), "ifx-migrations-html-"));
	const filePath = path.join(directory, "index.html");
	await writeFile(filePath, '<ifx-text-field success="true"></ifx-text-field>\n<script>response.success = true;</script>\n', "utf8");

	try {
		const plan = await analyseMigration({
			manifest,
			context: createContext(directory, "html"),
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		});

		assert.equal(plan.fileChanges.length, 1);
		const updated = plan.fileChanges[0]?.updatedContent;
		assert.ok(updated);
		assert.match(updated, /<ifx-text-field valid="true">/);
		assert.match(updated, /response\.success = true/);
	} finally {
		await rm(directory, { recursive: true, force: true });
	}
});
