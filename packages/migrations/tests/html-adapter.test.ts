import assert from "node:assert/strict";
import { describe, test } from "node:test";
import { HtmlRenamePropAdapter } from "../lib/adapters/html/index.js";

const adapter = new HtmlRenamePropAdapter();

const createStep = (
	from: string,
	to: string,
	component = "ifx-text-field",
) => ({
	type: "rename-prop" as const,
	releaseVersion: "40.0.0",
	operation: {
		id: `${component}-${from}-to-${to}`,
		type: "rename-prop" as const,
		component,
		from,
		to,
	},
});

const run = async (
	content: string,
	from: string,
	to: string,
	filePath = "/test/index.html",
) => {
	const result = await adapter.analyseFile(
		filePath,
		content,
		createStep(from, to),
		{
			rootDirectory: "/test",
			framework: "html" as const,
			packageName: "@infineon/infineon-design-system-stencil",
			fromVersion: "39.0.0",
			toVersion: "40.0.0",
		},
	);
	return result;
};

const apply = (content: string, result: Awaited<ReturnType<typeof run>>) => {
	if (!result) {
		return content;
	}
	const ordered = [...result.edits].sort((a, b) => b.start - a.start);
	let output = content;
	for (const edit of ordered) {
		output = output.slice(0, edit.start) + edit.replacement + output.slice(edit.end);
	}
	return output;
};

describe("HtmlRenamePropAdapter", () => {
	test("renames a boolean attribute", async () => {
		const input = '<ifx-text-field show-delete-icon></ifx-text-field>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(apply(input, result), '<ifx-text-field clearable></ifx-text-field>\n');
	});

	test("renames a quoted string attribute", async () => {
		const input = '<ifx-text-field show-delete-icon="true"></ifx-text-field>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(apply(input, result), '<ifx-text-field clearable="true"></ifx-text-field>\n');
	});

	test("renames a single-quoted attribute", async () => {
		const input = "<ifx-text-field show-delete-icon='true'></ifx-text-field>\n";
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(apply(input, result), "<ifx-text-field clearable='true'></ifx-text-field>\n");
	});

	test("renames an unquoted attribute value", async () => {
		const input = '<ifx-text-field show-delete-icon=true></ifx-text-field>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(apply(input, result), '<ifx-text-field clearable=true></ifx-text-field>\n');
	});

	test("renames an empty attribute", async () => {
		const input = '<ifx-text-field show-delete-icon=""></ifx-text-field>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(apply(input, result), '<ifx-text-field clearable=""></ifx-text-field>\n');
	});

	test("preserves whitespace, comments, and unrelated markup", async () => {
		const input = `<!-- header -->
<div>
  <ifx-text-field   show-delete-icon = "true"  ></ifx-text-field>
</div>
`;
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(
			apply(input, result),
			`<!-- header -->
<div>
  <ifx-text-field   clearable = "true"  ></ifx-text-field>
</div>
`,
		);
	});

	test("renames nested targets", async () => {
		const input = `<div>
  <section>
    <ifx-text-field show-delete-icon></ifx-text-field>
  </section>
</div>
`;
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(result.edits.length, 1);
		assert.equal(
			apply(input, result),
			`<div>
  <section>
    <ifx-text-field clearable></ifx-text-field>
  </section>
</div>
`,
		);
	});

	test("renames targets inside a target ancestor", async () => {
		const input = `<ifx-text-field>
  <ifx-text-field show-delete-icon></ifx-text-field>
</ifx-text-field>
`;
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(result.edits.length, 1);
	});

	test("renames targets inside template content", async () => {
		const input = `<template>
  <ifx-text-field show-delete-icon></ifx-text-field>
</template>
`;
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(result.edits.length, 1);
	});

	test("renames targets inside nested template content", async () => {
		const input = `<template>
  <template>
    <ifx-text-field show-delete-icon></ifx-text-field>
  </template>
</template>
`;
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(result.edits.length, 1);
	});

	test("leaves native elements unchanged", async () => {
		const input = '<div show-delete-icon="true"></div>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.equal(result, null);
	});

	test("leaves other DDS components unchanged", async () => {
		const input = '<ifx-button show-delete-icon="true"></ifx-button>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.equal(result, null);
	});

	test("leaves unrelated custom elements unchanged", async () => {
		const input = '<other-ifx-text-field show-delete-icon="true"></other-ifx-text-field>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.equal(result, null);
	});

	test("leaves prefixed attributes unchanged", async () => {
		const input = '<ifx-text-field data-show-delete-icon="true"></ifx-text-field>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.equal(result, null);
	});

	test("emits DDS001 when target attribute already exists", async () => {
		const input = '<ifx-text-field show-delete-icon clearable></ifx-text-field>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(result.edits.length, 0);
		assert.equal(result.diagnostics.length, 1);
		const diagnostic = result.diagnostics[0];
		assert.equal(diagnostic?.code, "DDS001");
		assert.equal(diagnostic?.severity, "error");
		assert.equal(typeof diagnostic?.start, "number");
		assert.equal(typeof diagnostic?.end, "number");
	});

	test("continues scanning after a conflict", async () => {
		const input = `<ifx-text-field show-delete-icon clearable></ifx-text-field>
<ifx-text-field show-delete-icon></ifx-text-field>
`;
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.edits.length, 1);
	});

	test("is idempotent", async () => {
		const input = '<ifx-text-field show-delete-icon="true"></ifx-text-field>\n';
		const first = await run(input, "show-delete-icon", "clearable");
		assert.ok(first);
		const migrated = apply(input, first);
		const second = await run(migrated, "show-delete-icon", "clearable");
		assert.equal(second, null);
	});

	test("handles uppercase source spelling", async () => {
		const input = '<IFX-TEXT-FIELD SHOW-DELETE-ICON="true"></IFX-TEXT-FIELD>\n';
		const result = await run(input, "show-delete-icon", "clearable");
		assert.ok(result);
		assert.equal(apply(input, result), '<IFX-TEXT-FIELD clearable="true"></IFX-TEXT-FIELD>\n');
	});

	test("does not process script content", async () => {
		const input = `<script>
const element = document.querySelector("ifx-text-field");
element.showDeleteIcon = true;
</script>
`;
		const result = await run(input, "show-delete-icon", "clearable");
		assert.equal(result, null);
	});
});
