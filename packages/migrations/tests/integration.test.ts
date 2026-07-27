import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { HtmlCodemodRunner } from "../lib/runners/html.js";
import { transformReactFile } from "../lib/runners/react-jscodeshift.js";
import { VueCodemodRunner } from "../lib/runners/vue.js";
import type { MigrationManifest } from "../lib/types.js";

const manifest: MigrationManifest = {
	schemaVersion: 1,
	migrations: [
		{ type: "prop-rename", component: "ifx-text-field", from: "success", to: "valid" },
	],
};

const context = { manifest };

test("React direct component props are renamed without touching unrelated properties", () => {
	const change = transformReactFile(
		"App.tsx",
		'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst response = { success: true };\nexport const App = () => <IfxTextField success={response.success} />;',
		"@infineon/infineon-design-system-react",
		manifest.migrations,
	);

	assert.ok(change);
	assert.match(change.updatedContent, /<IfxTextField valid=\{response\.success\} \/>/);
	assert.match(change.updatedContent, /response = \{ success: true \}/);
});

test("Vue component attributes are renamed", async () => {
	const directory = await mkdtemp(path.join(tmpdir(), "ifx-migrations-vue-"));
	const filePath = path.join(directory, "App.vue");
	await writeFile(filePath, '<template><ifx-text-field :success="isValid" /></template>\n', "utf8");

	try {
		const change = await new VueCodemodRunner().transformFile(filePath, context);
		assert.ok(change);
		assert.match(change.updatedContent, /:valid="isValid"/);
	} finally {
		await rm(directory, { recursive: true, force: true });
	}
});

test("HTML markup attributes are renamed while script text is untouched", async () => {
	const directory = await mkdtemp(path.join(tmpdir(), "ifx-migrations-html-"));
	const filePath = path.join(directory, "index.html");
	await writeFile(filePath, '<ifx-text-field success="true"></ifx-text-field>\n<script>response.success = true;</script>\n', "utf8");

	try {
		const change = await new HtmlCodemodRunner().transformFile(filePath, context);
		assert.ok(change);
		assert.match(change.updatedContent, /<ifx-text-field valid="true">/);
		assert.match(change.updatedContent, /response\.success = true/);
	} finally {
		await rm(directory, { recursive: true, force: true });
	}
});
