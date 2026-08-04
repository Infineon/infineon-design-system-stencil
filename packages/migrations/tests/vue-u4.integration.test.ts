import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";
import { collectVueTemplate } from "../lib/adapters/vue/template.js";
import { analyseMigration, applyMigrationPlan } from "../lib/core/plan.js";
import type {
	MigrationExecutionContext,
	MigrationManifest,
	MigrationPlan,
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

const kebabManifest: MigrationManifest = {
	schemaVersion: 1,
	releases: [
		{
			version: "40.0.0",
			operations: [
				{
					id: "ifx-text-field-success-indicator-to-valid-indicator",
					type: "rename-prop",
					component: "ifx-text-field",
					from: "success-indicator",
					to: "valid-indicator",
				},
			],
		},
	],
};

const chainedKebabManifest: MigrationManifest = {
	schemaVersion: 1,
	releases: [
		{
			version: "40.0.0",
			operations: [
				{
					id: "ifx-text-field-success-indicator-to-valid-indicator",
					type: "rename-prop",
					component: "ifx-text-field",
					from: "success-indicator",
					to: "valid-indicator",
				},
			],
		},
		{
			version: "41.0.0",
			operations: [
				{
					id: "ifx-text-field-valid-indicator-to-state-indicator",
					type: "rename-prop",
					component: "ifx-text-field",
					from: "valid-indicator",
					to: "state-indicator",
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

const runAnalysis = async (
	context: MigrationExecutionContext,
	manifest: MigrationManifest = singleReleaseManifest,
): Promise<MigrationPlan> =>
	analyseMigration({
		manifest,
		context,
		fromVersion: context.fromVersion,
		toVersion: context.toVersion,
	});

const hasDiagnostic = (
	plan: MigrationPlan,
	code: string,
	severity?: "error" | "warning",
	filePath?: string,
): boolean =>
	plan.diagnostics.some(
		(d) =>
			d.code === code &&
			(severity === undefined || d.severity === severity) &&
			(filePath === undefined || d.filePath === filePath),
	);

const getChange = (
	plan: MigrationPlan,
	filePath: string,
): import("../lib/core/types.js").PlannedFileChange | undefined =>
	plan.fileChanges.find((change) => change.filePath === filePath);

describe("Vue U4 integration", () => {
	let tempRoot: string;

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-vue-u4-"));
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

	describe("U4 Follow-up Requirement Tests", () => {
		describe("1. Template scope extraction and destructuring", () => {
			test("handles destructuring in v-for and v-slot without corrupting top-level declarations", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [{ props: { success: true } }];
</script>

<template>
  <div v-for="{ props: fieldProps } in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>

  <div v-for="{ nested: { fieldProps } } in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>

  <div v-for="[fieldProps] in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>

  <div v-for="{ fieldProps = fallback } in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>

  <MyComponent v-slot="{ props: fieldProps }">
    <IfxTextField v-bind="fieldProps" />
  </MyComponent>

  <MyComponent v-slot="{ nested: { fieldProps } }">
    <IfxTextField v-bind="fieldProps" />
  </MyComponent>
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.equal(plan.fileChanges.length, 0);

				await applyMigrationPlan(plan);
				const diskContent = await readFile(filePath, "utf8");
				assert.match(diskContent, /const fieldProps = \{ success: true \}/);
			});

			test("emits DDS002 and suppresses element when template scope pattern is ambiguous/unsupported", async () => {
				const safePath = await writeComponent(
					"Safe.vue",
					`<script setup lang="ts">
const safeProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="safeProps" />
</template>
`,
				);
				const ambiguousPath = await writeComponent(
					"Ambiguous.vue",
					`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [];
</script>

<template>
  <div v-for="(field, index, count, extra) in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.ok(hasDiagnostic(plan, "DDS002"));
				assert.equal(
					plan.diagnostics.filter(
						(diagnostic) =>
							diagnostic.code === "DDS002" &&
							diagnostic.filePath === ambiguousPath,
					).length,
					1,
				);
				assert.equal(plan.fileChanges.length, 1);
				assert.match(
					getChange(plan, safePath)?.updatedContent ?? "",
					/const safeProps = \{ valid: true \}/,
				);
				assert.equal(getChange(plan, ambiguousPath), undefined);
			});
		});

		describe("2. v-for source scope vs body scope", () => {
				test("collects a top-level v-slot default initializer reference", async () => {
					const filePath = await writeComponent(
						"App.vue",
						`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <MyComponent v-slot="slotProps = fieldProps">
    <OtherComponent v-bind="slotProps" />
  </MyComponent>
</template>
`,
					);

					const plan = await runAnalysis(createContext(tempRoot));

					assert.equal(getChange(plan, filePath), undefined);
					assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));
				});

				test("collects a v-for default initializer reference", async () => {
					const filePath = await writeComponent(
						"App.vue",
						`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [];
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <div v-for="(item = fieldProps, index) in rows">
    <OtherComponent v-bind="item" />
  </div>
</template>
`,
					);

					const plan = await runAnalysis(createContext(tempRoot));

					assert.equal(getChange(plan, filePath), undefined);
					assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));
				});

				test("does not treat v-slot property names as script references", async () => {
					const filePath = await writeComponent(
						"App.vue",
						`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <Wrapper v-slot="{ fieldProps: slotProps }">
    {{ slotProps }}
  </Wrapper>
</template>
`,
					);

					const plan = await runAnalysis(createContext(tempRoot));

					assert.match(
						getChange(plan, filePath)?.updatedContent ?? "",
						/const fieldProps = \{ valid: true \}/,
					);
				});

				test("tracks earlier aliases in v-for and slot defaults", async () => {
					const filePath = await writeComponent(
						"App.vue",
						`<script setup lang="ts">
const item = { success: true };
const first = { success: true };
const rows = [];
</script>

<template>
  <IfxTextField v-bind="item" />
  <IfxTextField v-bind="first" />
  <div v-for="({ first, second = first }, index) in rows">
    {{ second }}
  </div>
  <Wrapper v-slot="{ first, second = first }">
    {{ second }}
  </Wrapper>
</template>
`,
					);

					const plan = await runAnalysis(createContext(tempRoot));

					assert.match(
						getChange(plan, filePath)?.updatedContent ?? "",
						/const item = \{ valid: true \}/,
					);
					assert.match(
						getChange(plan, filePath)?.updatedContent ?? "",
						/const first = \{ valid: true \}/,
					);
				});

				test("keeps a script binding unsafe when a shadowed alias defaults to it", async () => {
					const filePath = await writeComponent(
						"App.vue",
						`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [];
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <div v-for="(fieldProps = fieldProps, index) in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
					);

					const plan = await runAnalysis(createContext(tempRoot));

					assert.equal(getChange(plan, filePath), undefined);
					assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));
				});

			test("v-for source expression is evaluated in parent scope", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup lang="ts">
const props = {
  success: true,
  items: [],
};
</script>

<template>
  <div v-for="props in props.items">
    <IfxTextField />
  </div>

  <IfxTextField v-bind="props" />
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.equal(plan.fileChanges.length, 0);

				await applyMigrationPlan(plan);
				const diskContent = await readFile(filePath, "utf8");
				assert.match(diskContent, /success: true/);
			});

			test("loop alias remains shadowed and does not resolve to same-named script declaration", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup lang="ts">
const item = { success: true };
const items = [{ success: true }];
</script>

<template>
  <div v-for="item in items">
    <IfxTextField v-bind="item" />
  </div>
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.equal(plan.fileChanges.length, 0);

				await applyMigrationPlan(plan);
				const diskContent = await readFile(filePath, "utf8");
				assert.match(diskContent, /const item = \{ success: true \}/);
			});
		});

		describe("dynamic slot argument scope", () => {
			test("analyses long-form dynamic slot arguments in the parent scope", async () => {
				const source = `<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <Wrapper>
    <template v-slot:[fieldProps.success]>Content</template>
  </Wrapper>
</template>
`;
				const filePath = await writeComponent(
					"App.vue",
					source,
				);

				const plan = await runAnalysis(createContext(tempRoot));
				const diagnostic = plan.diagnostics.find((item) => item.code === "DDS002");
				const expressionStart = source.indexOf("fieldProps.success");

				assert.equal(getChange(plan, filePath), undefined);
				assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));
				assert.ok(diagnostic);
				assert.ok(diagnostic.start !== undefined && diagnostic.start <= expressionStart);
				assert.ok(
					diagnostic.end !== undefined &&
					diagnostic.end >= expressionStart + "fieldProps.success".length,
				);
			});

			test("analyses shorthand dynamic slot arguments", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <Wrapper><template #[fieldProps.success]>Content</template></Wrapper>
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.equal(getChange(plan, filePath), undefined);
				assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));
			});

			test("does not treat static slot pattern properties as references", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <Wrapper v-slot:[fieldProps.success]="{ fieldProps: slotProps }">
    {{ slotProps }}
  </Wrapper>
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.equal(getChange(plan, filePath), undefined);
				assert.equal(
					plan.diagnostics.filter((diagnostic) => diagnostic.code === "DDS002").length,
					1,
				);
			});

			test("does not contaminate unrelated script bindings", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup>
const fieldProps = { success: true };
const slotName = "default";
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <Wrapper v-slot:[slotName]>Content</Wrapper>
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.match(
					getChange(plan, filePath)?.updatedContent ?? "",
					/const fieldProps = \{ valid: true \}/,
				);
			});
		});

		describe("same-node v-if and v-for scope", () => {
			const assertUnsafeSameNodeConditional = async (
				template: string,
			): Promise<void> => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup lang="ts">
const item = { success: true };
const rows = [];
</script>

<template>
  <IfxTextField v-bind="item" />
${template}
</template>
`,
				);
				const plan = await runAnalysis(createContext(tempRoot));

				assert.equal(getChange(plan, filePath), undefined);
				assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));
			};

			test("uses the parent scope regardless of attribute order", async () => {
				await assertUnsafeSameNodeConditional(
					`  <div v-for="item in rows" v-if="item.success" />`,
				);
				await assertUnsafeSameNodeConditional(
					`  <div v-if="item.success" v-for="item in rows" />`,
				);
			});

			test("uses the parent scope for v-else-if", async () => {
				await assertUnsafeSameNodeConditional(
					`  <div v-if="showFirst" />
  <div v-else-if="item.success" v-for="item in rows" />`,
				);
			});

			test("uses the enclosing loop scope for nested v-if", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup lang="ts">
const item = { success: true };
const rows = [];
</script>

<template>
  <IfxTextField v-bind="item" />
  <div v-for="item in rows">
    <div v-if="item.success" />
  </div>
</template>
`,
				);
				const plan = await runAnalysis(createContext(tempRoot));

				assert.match(
					getChange(plan, filePath)?.updatedContent ?? "",
					/const item = \{ valid: true \}/,
				);
				assert.equal(
					plan.diagnostics.filter((diagnostic) => diagnostic.code === "DDS002").length,
					0,
				);
			});
		});

		describe("adapter-level Vue expression scopes", () => {
			const step = {
				type: "rename-prop" as const,
				releaseVersion: "40.0.0",
				operation: {
					id: "ifx-text-field-success-to-valid",
					type: "rename-prop" as const,
					component: "ifx-text-field",
					from: "success",
					to: "valid",
				},
			};

			test("assigns parent and child scopes to template expressions", () => {
				const collection = collectVueTemplate(
					`<div v-for="item in rows" v-if="item.success">
	  <div v-if="item.success" />
	</div>`,
					0,
					step,
				);
				const source = collection.expressions.find((expression) => expression.content === "rows");
				const sameNodeIf = collection.expressions.find(
					(expression) => expression.content === "item.success" && !expression.scopeBindings.has("item"),
				);
				const nestedIf = collection.expressions.find(
					(expression) => expression.content === "item.success" && expression.scopeBindings.has("item"),
				);

				assert.ok(source);
				assert.ok(!source.scopeBindings.has("item"));
				assert.ok(sameNodeIf);
				assert.ok(nestedIf);
			});

			test("keeps slot arguments separate from slot patterns", () => {
				const collection = collectVueTemplate(
					`<Wrapper v-slot:[slotName]="{ value }">{{ value }}</Wrapper>`,
					0,
					step,
				);

				assert.ok(collection.expressions.some((expression) => expression.content === "slotName"));
				assert.equal(
					collection.expressions.some((expression) => expression.content.includes("value")),
					true,
				);
				assert.equal(
					collection.expressions.some((expression) => expression.content === "{ value }"),
					false,
				);
			});
		});

		describe("3. Suppress direct edits for non-editable bindings", () => {
			test("mutable object plus direct source prop suppresses direct rename and declaration edit", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup>
let fieldProps = { label: "Name" };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
				assert.equal(plan.fileChanges.length, 0);

				await applyMigrationPlan(plan);
				const diskContent = await readFile(filePath, "utf8");
				assert.match(
					diskContent,
					/<IfxTextField success v-bind="fieldProps" \/>/,
				);
				assert.match(diskContent, /let fieldProps = \{ label: "Name" \}/);
			});

			test("mutable object containing target suppresses the element with a warning", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup>
let fieldProps = { valid: true };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
				assert.equal(plan.fileChanges.length, 0);

				await applyMigrationPlan(plan);

				const diskContent = await readFile(filePath, "utf8");
				assert.match(
					diskContent,
					/<IfxTextField success v-bind="fieldProps" \/>/,
				);
			});

			test("exported object plus direct source prop suppresses direct rename", async () => {
				const filePath = await writeComponent(
					"App.vue",
					`<script setup>
export const fieldProps = { label: "Name" };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.equal(plan.fileChanges.length, 0);

				await applyMigrationPlan(plan);
				const diskContent = await readFile(filePath, "utf8");
				assert.match(
					diskContent,
					/<IfxTextField success v-bind="fieldProps" \/>/,
				);
			});

			test("safe sibling element migrates even when an unsafe element is present", async () => {
				const safePath = await writeComponent(
					"Safe.vue",
					`<script setup>
const safeProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="safeProps" />
</template>
`,
				);
				const unsafePath = await writeComponent(
					"Unsafe.vue",
					`<script setup>
let unsafeProps = { label: "Name" };
</script>

<template>
  <IfxTextField success v-bind="unsafeProps" />
</template>
`,
				);

				const plan = await runAnalysis(createContext(tempRoot));

				assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
				assert.equal(plan.fileChanges.length, 1);
				assert.match(
					getChange(plan, safePath)?.updatedContent ?? "",
					/const safeProps = \{ valid: true \}/,
				);
				assert.equal(getChange(plan, unsafePath), undefined);

				await applyMigrationPlan(plan);
				const safeDisk = await readFile(safePath, "utf8");
				assert.match(safeDisk, /const safeProps = \{ valid: true \}/);
				const unsafeDisk = await readFile(unsafePath, "utf8");
				assert.match(
					unsafeDisk,
					/<IfxTextField success v-bind="unsafeProps" \/>/,
				);
			});
		});
	});

	describe("immediate regressions", () => {
		test("renames a direct prop on a target element", async () => {
			const filePath = await writeComponent(
				"App.vue",
				"<template>\n  <div>\n    <IfxTextField success />\n  </div>\n</template>\n",
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/<IfxTextField valid \/>/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /<IfxTextField valid \/>/);
		});

		test("renames a local v-bind object on a target element", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <div>\n    <IfxTextField v-bind="props" />\n  </div>\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: true \}/);
			assert.match(diskContent, /<IfxTextField v-bind="props" \/>/);
		});

		test("contaminates a declaration referenced in template interpolation", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n  <span>{{ props.success }}</span>\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});
	});

	describe("safe migrations", () => {
		test("renames a basic local v-bind object", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: true \}/);
		});

		test("renames a local object used with a PascalCase component tag", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst fieldProps = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="fieldProps" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const fieldProps = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ valid: true \}/);
		});

		test("renames a local object used with a kebab-case component tag", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst fieldProps = { success: true };\n</script>\n<template>\n  <ifx-text-field v-bind="fieldProps" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const fieldProps = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ valid: true \}/);
		});

		test("renames a source key in a repeated compatible element", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			const change = getChange(plan, filePath);
			assert.match(
				change?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: true \}/);
		});

		test("renames an identifier-style object key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: true \}/);
		});

		test("renames a quoted camelCase object key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { "success": true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ "valid": true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ "valid": true \}/);
		});

		test("renames a quoted kebab-case object key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { "success-indicator": true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot), kebabManifest);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ "valid-indicator": true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ "valid-indicator": true \}/);
		});

		test("converts a shorthand source property to an explicit target pair", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst success = true;\nconst props = { success };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ valid: success \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: success \}/);
		});

		test("preserves quote style and comments around the renamed key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = {\n  // legacy prop\n  "success": true,\n  label: "Name",\n};\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			const change = getChange(plan, filePath);
			assert.match(change?.updatedContent ?? "", /"valid": true/);
			assert.match(change?.updatedContent ?? "", /\/\/ legacy prop/);
			assert.match(change?.updatedContent ?? "", /label: "Name"/);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /"valid": true/);
			assert.match(diskContent, /\/\/ legacy prop/);
		});

		test("unwraps a parenthesized object literal", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = ({ success: true });\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \(\{ valid: true \}\)/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \(\{ valid: true \}\)/);
		});

		test("unwraps an as-const assertion", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true } as const;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ valid: true \} as const/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: true \} as const/);
		});

		test("unwraps a type assertion", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = ({ success: true } as Record<string, boolean>);\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/\(\{ valid: true \} as Record<string, boolean>\)/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/\(\{ valid: true \} as Record<string, boolean>\)/,
			);
		});

		test("unwraps a satisfies expression", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true } satisfies Record<string, boolean>;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ valid: true \} satisfies Record<string, boolean>/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const props = \{ valid: true \} satisfies Record<string, boolean>/,
			);
		});

		test("works inside a script-setup generic block", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts" generic="T extends string">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: true \}/);
		});

		test("works with TSX script content and a template-bound local object", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="tsx">\nimport { IfxTextField } from "@infineon/infineon-design-system-vue";\nconst props = { success: true };\nconst App = () => <IfxTextField success />;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			const change = getChange(plan, filePath);
			assert.match(
				change?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);
			assert.match(change?.updatedContent ?? "", /<IfxTextField valid \/>/);
			assert.match(
				change?.updatedContent ?? "",
				/<IfxTextField v-bind="props" \/>/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ valid: true \}/);
			assert.match(diskContent, /<IfxTextField valid \/>/);
		});
	});

	describe("unsupported bindings", () => {
		test("leaves a let binding unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nlet props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /let props = \{ success: true \}/);
		});

		test("leaves a var binding unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nvar props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /var props = \{ success: true \}/);
		});

		test("leaves an exported const object unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\nexport { props };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
			assert.match(diskContent, /export \{ props \}/);
		});

		test("leaves an imported object binding unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nimport { props } from "./config";\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS003", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /import \{ props \} from "\.\/config"/);
		});

		test("leaves a helper or compiler-macro result unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = defineProps<{ success: boolean }>();\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS004", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = defineProps/);
		});

		test("leaves a member-expression v-bind unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst form = { props: { success: true } };\n</script>\n<template>\n  <IfxTextField v-bind="form.props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const form = \{ props: \{ success: true \} \}/,
			);
		});

		test("leaves an inline object v-bind unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst value = true;\n</script>\n<template>\n  <IfxTextField v-bind="{ success: value }" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField v-bind="\{ success: value \}" \/>/,
			);
		});

		test("leaves a classic script declaration unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script lang="ts">\nconst props = { success: true };\nexport default { setup() { return { props }; } };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("leaves an object with spread assignments unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst base = { label: "Name" };\nconst props = { ...base, success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const props = \{ \.\.\.base, success: true \}/,
			);
		});

		test("leaves an object with computed keys unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst key = "success";\nconst props = { [key]: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ \[key\]: true \}/);
		});

		test("leaves an object with methods unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = {\n  success: true,\n  onClick() {},\n};\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /onClick\(\) \{\}/);
		});

		test("leaves an object with duplicate source keys unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true, success: false };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const props = \{ success: true, success: false \}/,
			);
		});

		test("leaves an object with duplicate target keys unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { valid: true, valid: false };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const props = \{ valid: true, valid: false \}/,
			);
		});

		test("leaves an unresolved declaration unchanged", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst value = true;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /<IfxTextField v-bind="props" \/>/);
		});
	});

	describe("reference safety", () => {
		test("does not edit an object used on a native element", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <div v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object used on a third-party component", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <ThirdPartyInput v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object used on a different DDS component", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxButton v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object referenced inside template interpolation", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n  <span>{{ props.success }}</span>\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object referenced inside a directive expression", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n  <span :title="props.success"></span>\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object read through a member expression", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\nconst value = props.success;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object destructured in script", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\nconst { success } = props;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object passed as a function argument", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\nconsole.log(props);\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object returned from a function", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\nfunction getProps() { return props; }\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object aliased to another binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\nconst alias = props;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit an object reassigned or exposed", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\nprops.success = false;\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit a binding shadowed by v-for", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <div v-for="props in list">\n    <IfxTextField v-bind="props" />\n  </div>\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);
			assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("does not edit a binding shadowed by v-slot", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <Wrapper v-slot="props">\n    <IfxTextField v-bind="props" />\n  </Wrapper>\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);
			assert.ok(hasDiagnostic(plan, "DDS002", "warning", filePath));

			await applyMigrationPlan(plan);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ success: true \}/);
		});

		test("migrates safe outer uses around known shadowing in either order", async () => {
			const vForPath = await writeComponent(
				"VFor.vue",
				`<script setup lang="ts">
const props = { success: true };
const rows = [];
</script>

<template>
  <IfxTextField v-bind="props" />
  <div v-for="props in rows">
    <IfxTextField v-bind="props" />
  </div>
</template>
`,
			);
			const vSlotPath = await writeComponent(
				"VSlot.vue",
				`<script setup lang="ts">
const props = { success: true };
</script>

<template>
  <Wrapper v-slot="props">
    <IfxTextField v-bind="props" />
  </Wrapper>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.match(
				getChange(plan, vForPath)?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);
			assert.match(
				getChange(plan, vSlotPath)?.updatedContent ?? "",
				/const props = \{ valid: true \}/,
			);
		});

		test("safe sibling elements are still migrated when one element is unsafe", async () => {
			const safePath = await writeComponent(
				"Safe.vue",
				'<script setup lang="ts">\nconst safeProps = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="safeProps" />\n</template>\n',
			);
			const unsafePath = await writeComponent(
				"Unsafe.vue",
				'<script setup lang="ts">\nconst unsafeProps = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="unsafeProps" />\n  <span>{{ unsafeProps.success }}</span>\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, safePath)?.updatedContent ?? "",
				/const safeProps = \{ valid: true \}/,
			);
			assert.equal(getChange(plan, unsafePath), undefined);

			await applyMigrationPlan(plan);

			const safeDisk = await readFile(safePath, "utf8");
			assert.match(safeDisk, /const safeProps = \{ valid: true \}/);
			const unsafeDisk = await readFile(unsafePath, "utf8");
			assert.match(unsafeDisk, /const unsafeProps = \{ success: true \}/);
		});
	});

	describe("conflicts", () => {
		test("blocks writes when source and target are in the same object", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true, valid: false };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const props = \{ success: true, valid: false \}/,
			);
		});

		test("blocks writes when a direct source prop and an object target prop coexist", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { valid: true };\n</script>\n<template>\n  <IfxTextField success v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /<IfxTextField success v-bind="props" \/>/);
		});

		test("blocks writes when a direct target prop and an object source prop coexist", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField valid v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /<IfxTextField valid v-bind="props" \/>/);
		});

		test("blocks writes when a direct source prop and an object source prop coexist", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField success v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /<IfxTextField success v-bind="props" \/>/);
		});

		test("blocks writes in one file from affecting a safe file", async () => {
			const safePath = await writeComponent(
				"Safe.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);
			const conflictPath = await writeComponent(
				"Conflict.vue",
				'<script setup lang="ts">\nconst props = { success: true, valid: false };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const safeContent = await readFile(safePath, "utf8");
			assert.match(safeContent, /const props = \{ success: true \}/);
			const conflictContent = await readFile(conflictPath, "utf8");
			assert.match(
				conflictContent,
				/const props = \{ success: true, valid: false \}/,
			);
		});
	});

	describe("chained releases", () => {
		test("renames through an intermediate chained release", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(
				createChainedContext(tempRoot),
				chainedManifest,
			);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ state: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ state: true \}/);
		});

		test("blocks chained writes when an intermediate step discovers a conflict", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true, state: false };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const plan = await runAnalysis(
				createChainedContext(tempRoot),
				chainedManifest,
			);

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const props = \{ success: true, state: false \}/,
			);
		});
	});

	describe("idempotency and formatting", () => {
		test("produces a no-op when the migration is run again", async () => {
			const filePath = await writeComponent(
				"App.vue",
				'<script setup lang="ts">\nconst props = { success: true };\n</script>\n<template>\n  <IfxTextField v-bind="props" />\n</template>\n',
			);

			const firstPlan = await runAnalysis(createContext(tempRoot));
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
			assert.match(diskContent, /const props = \{ valid: true \}/);
		});

		test("preserves whitespace, line endings and unrelated keys", async () => {
			const content =
				'<script setup lang="ts">\r\n' +
				"const props = {\r\n" +
				"  success: true,\r\n" +
				'  label: "Name",\r\n' +
				"};\r\n" +
				"</script>\r\n" +
				"<template>\r\n" +
				'  <IfxTextField v-bind="props" />\r\n' +
				"</template>\r\n";
			const filePath = await writeComponent("App.vue", content);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /\r\n/);
			assert.match(
				diskContent,
				/const props = \{\r\n {2}valid: true,\r\n {2}label: "Name",\r\n\}/,
			);
		});
	});

	describe("provider safety", () => {
		test("mutable provider plus direct source suppresses the element", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
let fieldProps = { label: "Name" };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="fieldProps" \/>/,
			);
			assert.match(diskContent, /let fieldProps = \{ label: "Name" \}/);
		});

		test("exported provider plus direct source suppresses the element", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
export const fieldProps = { label: "Name" };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="fieldProps" \/>/,
			);
		});

		test("malformed provider plus direct source suppresses the element", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
const base = { label: "Name" };
const fieldProps = { ...base, success: true };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="fieldProps" \/>/,
			);
		});

		test("safe unrelated provider plus direct source renames the direct prop", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
const fieldProps = { label: "Name" };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /<IfxTextField valid v-bind="fieldProps" \/>/);
			assert.match(diskContent, /const fieldProps = \{ label: "Name" \}/);
		});
	});

	describe("known conflicts with unknown providers", () => {
		test("direct source + direct target + unresolved binding emits DDS001", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
const value = true;
</script>

<template>
  <IfxTextField success valid v-bind="unknownProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField success valid v-bind="unknownProps" \/>/,
			);
		});

		test("direct source + object target emits DDS001", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
const fieldProps = { valid: true };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ valid: true \}/);
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="fieldProps" \/>/,
			);
		});

		test("direct source + object source emits DDS001", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField success v-bind="fieldProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="fieldProps" \/>/,
			);
		});

		test("one conflict blocks another safe file", async () => {
			const safePath = await writeComponent(
				"Safe.vue",
				`<script setup>
const props = { success: true };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);
			const conflictPath = await writeComponent(
				"Conflict.vue",
				`<script setup>
const props = { success: true, valid: false };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const safeContent = await readFile(safePath, "utf8");
			assert.match(safeContent, /const props = \{ success: true \}/);
			const conflictContent = await readFile(conflictPath, "utf8");
			assert.match(
				conflictContent,
				/const props = \{ success: true, valid: false \}/,
			);
		});
	});

	describe("property spelling", () => {
		test("renames a camelCase identifier key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const props = { successIndicator: true };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot), kebabManifest);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ validIndicator: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ validIndicator: true \}/);
		});

		test("renames a camelCase shorthand key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const successIndicator = true;
const props = { successIndicator };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot), kebabManifest);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ validIndicator: successIndicator \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/const props = \{ validIndicator: successIndicator \}/,
			);
		});

		test("renames a quoted camelCase key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const props = { "successIndicator": true };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot), kebabManifest);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ "validIndicator": true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ "validIndicator": true \}/);
		});

		test("renames a quoted kebab-case key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const props = { "success-indicator": true };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot), kebabManifest);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ "valid-indicator": true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ "valid-indicator": true \}/);
		});

		test("renames a single-quoted kebab-case key", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const props = { 'success-indicator': true };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot), kebabManifest);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ 'valid-indicator': true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ 'valid-indicator': true \}/);
		});

		test("chains multiword renames while preserving identifier spelling", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const props = { successIndicator: true };
</script>

<template>
  <IfxTextField v-bind="props" />
</template>
`,
			);

			const plan = await runAnalysis(
				createChainedContext(tempRoot),
				chainedKebabManifest,
			);

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const props = \{ stateIndicator: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const props = \{ stateIndicator: true \}/);
		});
	});

	describe("complex template scopes", () => {
		test("renamed v-for destructuring shadows the script binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [{ field: { success: true } }];
</script>

<template>
  <div v-for="{ field: fieldProps } in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});

		test("nested v-for destructuring shadows the script binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [{ nested: { fieldProps: { success: true } } }];
</script>

<template>
  <div v-for="{ nested: { fieldProps } } in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});

		test("array v-for destructuring shadows the script binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [[{ success: true }]];
</script>

<template>
  <div v-for="[fieldProps] in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});

		test("default-value v-for destructuring shadows the script binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [{}];
const fallback = { success: true };
</script>

<template>
  <div v-for="{ fieldProps = fallback } in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});

		test("rest v-for destructuring shadows the script binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [{ a: 1, success: true }];
</script>

<template>
  <div v-for="{ ...fieldProps } in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});

		test("renamed slot binding shadows the script binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <MyComponent v-slot="{ field: fieldProps }">
    <IfxTextField v-bind="fieldProps" />
  </MyComponent>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});

		test("nested slot binding shadows the script binding", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <MyComponent v-slot="{ nested: { fieldProps } }">
    <IfxTextField v-bind="fieldProps" />
  </MyComponent>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});

		test("malformed scope expression emits DDS002 and suppresses the subtree", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
const rows = [];
</script>

<template>
  <div v-for="(field, index, count, extra) in rows">
    <IfxTextField v-bind="fieldProps" />
  </div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002"));
			assert.equal(plan.fileChanges.length, 0);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const fieldProps = \{ success: true \}/);
		});
	});

	describe("nested element suppression", () => {
		test("unsafe outer target with safe inner target renames only the inner prop", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
let unknownProps = { success: true };
</script>

<template>
  <IfxTextField success v-bind="unknownProps">
    <IfxTextField success />
  </IfxTextField>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 1);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="unknownProps">\n\s*<IfxTextField valid \/>\n\s*<\/IfxTextField>/,
			);
		});

		test("conflicting outer target with safe inner target renames only the inner prop when unblocked", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField success valid v-bind="fieldProps">
    <IfxTextField success />
  </IfxTextField>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS001", "error"));
			assert.equal(plan.fileChanges.length, 0);

			await assert.rejects(
				applyMigrationPlan(plan),
				/one or more errors were detected/,
			);

			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField success valid v-bind="fieldProps">/,
			);
			assert.match(diskContent, /<IfxTextField success \/>/);
		});

		test("safe outer target with unsafe inner target renames only the outer declaration", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const safeProps = { success: true };
let unknownProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="safeProps">
    <IfxTextField success v-bind="unknownProps" />
  </IfxTextField>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/const safeProps = \{ valid: true \}/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /const safeProps = \{ valid: true \}/);
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="unknownProps" \/>/,
			);
		});

		test("nested non-target element with safe target child renames the child prop", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<template>
  <div>
    <IfxTextField success />
  </div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(plan.diagnostics.length, 0);
			assert.equal(plan.fileChanges.length, 1);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /<IfxTextField valid \/>/);
		});

		test("independent sibling components are suppressed independently", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
let unknownProps = { success: true };
</script>

<template>
  <IfxTextField success v-bind="unknownProps" />
  <IfxTextField success />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.ok(hasDiagnostic(plan, "DDS002", "warning"));
			assert.equal(plan.fileChanges.length, 1);
			assert.match(
				getChange(plan, filePath)?.updatedContent ?? "",
				/<IfxTextField valid \/>/,
			);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(
				diskContent,
				/<IfxTextField success v-bind="unknownProps" \/>/,
			);
			assert.match(diskContent, /<IfxTextField valid \/>/);
		});
	});

	describe("diagnostic deduplication", () => {
		test("mutable object produces one DDS002", async () => {
			const filePath = await writeComponent(
				"App.vue",
				`<script setup>
let fieldProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(
				plan.diagnostics.filter((d) => d.code === "DDS002").length,
				1,
			);
			assert.equal(plan.fileChanges.length, 0);

			await applyMigrationPlan(plan);
			const diskContent = await readFile(filePath, "utf8");
			assert.match(diskContent, /let fieldProps = \{ success: true \}/);
		});

		test("contaminated object used multiple times produces one declaration-level warning", async () => {
			const _filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const fieldProps = { success: true };
</script>

<template>
  <IfxTextField v-bind="fieldProps" />
  <span>{{ fieldProps.success }}</span>
  <div :title="fieldProps.success"></div>
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(
				plan.diagnostics.filter((d) => d.code === "DDS002").length,
				1,
			);
			assert.equal(plan.fileChanges.length, 0);
		});

		test("separate unsafe uses at different locations remain separate", async () => {
			const _filePath = await writeComponent(
				"App.vue",
				`<script setup lang="ts">
const value = true;
</script>

<template>
  <IfxTextField v-bind="{ success: value }" />
  <IfxTextField v-bind="form.props" />
</template>
`,
			);

			const plan = await runAnalysis(createContext(tempRoot));

			assert.equal(
				plan.diagnostics.filter((d) => d.code === "DDS002").length,
				2,
			);
			assert.equal(plan.fileChanges.length, 0);
		});
	});
});

