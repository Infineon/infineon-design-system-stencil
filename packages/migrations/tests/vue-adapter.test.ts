import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { VueRenamePropAdapter } from "../lib/adapters/vue/index.js";
import { applyEdits } from "../lib/core/edit.js";
import type {
	MigrationExecutionContext,
	RenamePropStepDefinition,
} from "../lib/core/types.js";

const createStep = (
	overrides: Partial<RenamePropStepDefinition["operation"]> = {},
): RenamePropStepDefinition => ({
	type: "rename-prop",
	releaseVersion: "40.0.0",
	operation: {
		id: "success-to-valid",
		type: "rename-prop",
		component: "ifx-text-field",
		from: "success",
		to: "valid",
		...overrides,
	},
});

const createContext = (rootDirectory: string): MigrationExecutionContext => ({
	rootDirectory,
	framework: "vue",
	packageName: "@infineon/infineon-design-system-vue",
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
});

describe("VueRenamePropAdapter", () => {
	let tempRoot: string;
	const adapter = new VueRenamePropAdapter();

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-vue-adapter-"));
	});

	afterEach(async () => {
		await rm(tempRoot, { recursive: true, force: true });
	});

	const analyseContent = async (
		filePath: string,
		source: string,
	): Promise<ReturnType<typeof applyEdits>> => {
		await writeFile(filePath, source);

		const analysis = await adapter.analyseFile(
			filePath,
			source,
			0,
			createStep(),
			createContext(tempRoot),
		);
		if (!analysis) {
			return { content: source, diagnostics: [] };
		}

		return applyEdits(analysis.content, analysis.edits);
	};

	describe("SFC template", () => {
		test("renames a static attribute", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const result = await analyseContent(
				filePath,
				'<template>\n  <ifx-text-field success="true" />\n</template>\n',
			);
			assert.equal(
				result.content,
				'<template>\n  <ifx-text-field valid="true" />\n</template>\n',
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames a shorthand bound attribute", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const result = await analyseContent(
				filePath,
				'<template>\n  <ifx-text-field :success="isValid" />\n</template>\n',
			);
			assert.equal(
				result.content,
				'<template>\n  <ifx-text-field :valid="isValid" />\n</template>\n',
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames a v-bind directive attribute", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const result = await analyseContent(
				filePath,
				'<template>\n  <ifx-text-field v-bind:success="isValid" />\n</template>\n',
			);
			assert.equal(
				result.content,
				'<template>\n  <ifx-text-field v-bind:valid="isValid" />\n</template>\n',
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames a PascalCase tag attribute", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const result = await analyseContent(
				filePath,
				'<template>\n  <IfxTextField success="true" />\n</template>\n',
			);
			assert.equal(
				result.content,
				'<template>\n  <IfxTextField valid="true" />\n</template>\n',
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("leaves native elements unchanged", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const original =
				'<template>\n  <input success="true" />\n</template>\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
		});

		test("leaves other DDS components unchanged", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const original =
				'<template>\n  <ifx-accordion success="true" />\n</template>\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
		});

		test("emits an error diagnostic when target attribute already exists", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const content =
				'<template>\n  <ifx-text-field success valid />\n</template>\n';
			await writeFile(filePath, content);

			const analysis = await adapter.analyseFile(
				filePath,
				content,
				0,
				createStep(),
				createContext(tempRoot),
			);
			assert.ok(analysis);
			assert.equal(analysis.edits.length, 0);
			assert.equal(analysis.diagnostics.length, 1);
			assert.equal(analysis.diagnostics[0]?.severity, "error");
			assert.equal(analysis.diagnostics[0]?.code, "DDS001");
		});

		test("preserves formatting and line endings", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const result = await analyseContent(
				filePath,
				'<template>\r\n  <ifx-text-field   success="true"   />\r\n</template>\r\n',
			);
			assert.equal(
				result.content,
				'<template>\r\n  <ifx-text-field   valid="true"   />\r\n</template>\r\n',
			);
		});

		test("is idempotent for template attributes", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const original =
				'<template>\n  <ifx-text-field success="true" />\n</template>\n';
			await writeFile(filePath, original);

			const first = await adapter.analyseFile(
				filePath,
				original,
				0,
				createStep(),
				createContext(tempRoot),
			);
			assert.ok(first);
			const firstResult = applyEdits(first.content, first.edits);
			await writeFile(filePath, firstResult.content);

			const second = await adapter.analyseFile(
				filePath,
				firstResult.content,
				0,
				createStep(),
				createContext(tempRoot),
			);
			assert.equal(second, null);
		});
	});

	describe("JSX", () => {
		test("renames a direct JSX prop", async () => {
			const filePath = path.join(tempRoot, "App.tsx");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField success={isValid} />;\n',
			);
			assert.match(result.content, /<IfxTextField valid=\{isValid\} \/>/);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames an aliased JSX import", async () => {
			const filePath = path.join(tempRoot, "App.tsx");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField as Field } from "@infineon/infineon-design-system-vue";\nexport const App = () => <Field success />;\n',
			);
			assert.match(result.content, /<Field valid \/>/);
		});

		test("leaves third-party JSX imports unchanged", async () => {
			const filePath = path.join(tempRoot, "App.tsx");
			const original =
				'import { IfxTextField } from "some-other-package";\nexport const App = () => <IfxTextField success />;\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
		});
	});

	describe("render functions", () => {
		test("renames props in h() with imported component", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { success: isValid });\n',
			);
			assert.match(result.content, /h\(IfxTextField, \{ valid: isValid \}\)/);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames props in createVNode() with imported component", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { createVNode } from "vue";\nexport const App = () => createVNode(IfxTextField, { success: isValid });\n',
			);
			assert.match(
				result.content,
				/createVNode\(IfxTextField, \{ valid: isValid \}\)/,
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames props in h() with string tag", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const result = await analyseContent(
				filePath,
				'import { h } from "vue";\nexport const App = () => h("ifx-text-field", { success: isValid });\n',
			);
			assert.match(
				result.content,
				/h\("ifx-text-field", \{ valid: isValid \}\)/,
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames shorthand props in render functions", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nconst success = true;\nexport const App = () => h(IfxTextField, { success });\n',
			);
			assert.match(result.content, /h\(IfxTextField, \{ valid: success \}\)/);
			assert.equal(result.diagnostics.length, 0);
		});

		test("leaves arbitrary function calls unchanged", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const original =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => render(IfxTextField, { success: isValid });\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
		});

		test("emits an error diagnostic when target prop exists in render props", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const content =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { success: isValid, valid: true });\n';
			await writeFile(filePath, content);

			const analysis = await adapter.analyseFile(
				filePath,
				content,
				0,
				createStep(),
				createContext(tempRoot),
			);
			assert.ok(analysis);
			assert.equal(analysis.edits.length, 0);
			assert.equal(analysis.diagnostics.length, 1);
			assert.equal(analysis.diagnostics[0]?.severity, "error");
			assert.equal(analysis.diagnostics[0]?.code, "DDS001");
		});
	});
});
