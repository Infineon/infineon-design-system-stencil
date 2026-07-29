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

		const editResult = applyEdits(analysis.content, analysis.edits);
		return {
			content: editResult.content,
			diagnostics: [...analysis.diagnostics, ...editResult.diagnostics],
		};
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

		test("renames props inside <script setup lang=\"tsx\">", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const result = await analyseContent(
				filePath,
				'<script setup lang="tsx">\nimport { IfxTextField } from "@infineon/infineon-design-system-vue";\n</script>\n<template>\n  <IfxTextField success={isValid} />\n</template>\n',
			);
			assert.match(
				result.content,
				/<IfxTextField valid=\{isValid\} \/>/,
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("renames props inside <script lang=\"ts\"> with a render function", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const result = await analyseContent(
				filePath,
				'<script lang="ts">\nimport { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { success: isValid });\n</script>\n<template>\n  <ifx-text-field other="true" />\n</template>\n',
			);
			assert.match(
				result.content,
				/h\(IfxTextField, \{ valid: isValid \}\)/,
			);
			assert.match(result.content, /other="true"/);
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

		test("emits DDS007 with offsets when an SFC template parse fails", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const content =
				'<template>\n  <ifx-text-field :success="isValid"\n</template>\n';
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
			assert.equal(analysis.diagnostics[0]?.code, "DDS007");
			assert.equal(analysis.diagnostics[0]?.severity, "error");
			assert.ok(
				(analysis.diagnostics[0]?.start ?? -1) >=
					content.indexOf('<template>'),
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

		test("leaves dynamic binding arguments unchanged", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const original =
				'<template>\n  <ifx-text-field :[success]="value" v-bind:[success]="value" :[`success`]=\"value\" />\n</template>\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
			assert.equal(result.diagnostics.length, 0);
		});

		test("does not treat a dynamic valid argument as a static conflict", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const original =
				'<template>\n  <ifx-text-field :[valid]="value" />\n</template>\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
			assert.equal(result.diagnostics.length, 0);
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

		test("blocks a direct source prop alongside an inline spread target prop", async () => {
			const filePath = path.join(tempRoot, "App.tsx");
			const content =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField success {...{ valid: false }} />;\n';
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.equal(result.diagnostics.length, 1);
			assert.equal(result.diagnostics[0]?.code, "DDS001");
		});

		test("migrates a safe inline spread source prop", async () => {
			const filePath = path.join(tempRoot, "App.tsx");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField {...{ success: true }} />;\n',
			);
			assert.match(
				result.content,
				/<IfxTextField \{\.\.\.\{ valid: true \}\} \/>/,
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("preserves quoted inline spread source keys", async () => {
			const filePath = path.join(tempRoot, "App.tsx");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField {...{ "success": true }} />;\n',
			);
			assert.match(
				result.content,
				/<IfxTextField \{\.\.\.\{ "valid": true \}\} \/>/,
			);
			assert.equal(result.diagnostics.length, 0);
		});

		test("warns about an unsupported inline spread shape and leaves the element unchanged", async () => {
			const filePath = path.join(tempRoot, "App.tsx");
			const content =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nconst base = {};\nexport const App = () => <IfxTextField {...{ ...base, success: true }} />;\n';
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.equal(result.diagnostics.length, 1);
			assert.equal(result.diagnostics[0]?.code, "DDS002");
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

		test("leaves local h() declarations unchanged", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const original =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nfunction h() { return null; }\nexport const App = () => h(IfxTextField, { success: isValid });\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
		});

		test("leaves third-party h() imports unchanged", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const original =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "another-library";\nexport const App = () => h(IfxTextField, { success: isValid });\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
		});

		test("leaves shadowed h() unchanged", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const original =
				'import { h } from "vue";\nimport { IfxTextField } from "@infineon/infineon-design-system-vue";\nfunction Component() {\n  const h = () => null;\n  return h(IfxTextField, { success: isValid });\n}\n';
			const result = await analyseContent(filePath, original);
			assert.equal(result.content, original);
		});

		test("renames aliased createVNode() from vue", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { createVNode as vnode } from "vue";\nexport const App = () => vnode(IfxTextField, { success: isValid });\n',
			);
			assert.match(
				result.content,
				/vnode\(IfxTextField, \{ valid: isValid \}\)/,
			);
			assert.equal(result.diagnostics.length, 0);
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

		test("leaves a render props object with a spread assignment unchanged", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const content =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { ...base, success: true });\n';
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.ok(
				result.diagnostics.some((diagnostic) => diagnostic.code === "DDS002"),
			);
		});

		test("prioritizes DDS001 when source and target are explicit alongside an unsupported shape", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const content =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { ...base, success: true, valid: false });\n';
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.ok(
				result.diagnostics.some((diagnostic) => diagnostic.code === "DDS001"),
			);
			assert.ok(
				result.diagnostics.some((diagnostic) => diagnostic.code === "DDS002"),
			);
		});

		test("renames a quoted key while preserving quotes", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { "success": true });\n',
			);
			assert.match(result.content, /\{ "valid": true \}/);
			assert.equal(result.diagnostics.length, 0);
		});

		test("leaves a shadowed DDS component argument unchanged", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const content =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nfunction render(IfxTextField: OtherComponent) {\n  return h(IfxTextField, { success: true });\n}\n';
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.equal(result.diagnostics.length, 0);
		});
	});

	describe("parse failures", () => {
		test("emits DDS007 for an invalid standalone .ts file", async () => {
			const filePath = path.join(tempRoot, "App.ts");
			const content = "export const x = {\n";
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.ok(
				result.diagnostics.some((diagnostic) => diagnostic.code === "DDS007"),
			);
		});

		test("emits DDS007 for an invalid SFC script block", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const content =
				'<script lang="ts">\nconst x = {\n</script>\n<template>\n  <ifx-text-field :success="isValid" />\n</template>\n';
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.ok(
				result.diagnostics.some((diagnostic) => diagnostic.code === "DDS007"),
			);
		});

		test("does not parse a valid TypeScript type assertion as JSX", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const content =
				'<script lang="ts">\nconst value = <string>response.success;\n</script>\n<template>\n  <ifx-text-field :success="value" />\n</template>\n';
			const result = await analyseContent(filePath, content);
			assert.match(result.content, /:valid="value"/);
			assert.match(result.content, /<string>response\.success/);
			assert.equal(result.diagnostics.length, 0);
		});

		test("parses JSX only inside tsx scripts", async () => {
			const filePath = path.join(tempRoot, "App.vue");
			const content =
				'<script lang="tsx">\nimport { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField success />;\n</script>\n';
			const result = await analyseContent(filePath, content);
			assert.match(result.content, /<IfxTextField valid \/>/);
			assert.equal(result.diagnostics.length, 0);
		});
	});

	describe("standalone scripts", () => {
		test("parses a .js render function with JavaScript syntax", async () => {
			const filePath = path.join(tempRoot, "App.js");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { success: true });\n',
			);
			assert.match(result.content, /h\(IfxTextField, \{ valid: true \}\)/);
			assert.equal(result.diagnostics.length, 0);
		});

		test("parses a .jsx render function with JSX syntax", async () => {
			const filePath = path.join(tempRoot, "App.jsx");
			const result = await analyseContent(
				filePath,
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nexport const App = () => <IfxTextField success />;\n',
			);
			assert.match(result.content, /<IfxTextField valid \/>/);
			assert.equal(result.diagnostics.length, 0);
		});

		test("emits DDS007 for malformed JavaScript in a .js file", async () => {
			const filePath = path.join(tempRoot, "App.js");
			const content =
				'import { IfxTextField } from "@infineon/infineon-design-system-vue";\nimport { h } from "vue";\nexport const App = () => h(IfxTextField, { success: true\n';
			const result = await analyseContent(filePath, content);
			assert.equal(result.content, content);
			assert.ok(
				result.diagnostics.some((diagnostic) => diagnostic.code === "DDS007"),
			);
		});
	});
});
