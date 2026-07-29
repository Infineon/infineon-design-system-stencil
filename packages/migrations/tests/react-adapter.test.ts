import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { ReactRenamePropAdapter } from "../lib/adapters/react/index.js";
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
	framework: "react",
	packageName: "@infineon/infineon-design-system-react",
	fromVersion: "39.0.0",
	toVersion: "40.0.0",
});

describe("ReactRenamePropAdapter", () => {
	let tempRoot: string;
	const adapter = new ReactRenamePropAdapter();

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-react-adapter-"));
	});

	afterEach(async () => {
		await rm(tempRoot, { recursive: true, force: true });
	});

	const analyseContent = async (
		source: string,
	): Promise<ReturnType<typeof applyEdits>> => {
		const filePath = path.join(tempRoot, "App.tsx");
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

	test("renames a direct boolean prop", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField valid />;\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("renames a direct string prop", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success="true" />;\n',
		);
		assert.match(result.content, /valid="true"/);
	});

	test("renames a direct expression prop", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success={isValid} />;\n',
		);
		assert.match(result.content, /valid=\{isValid\}/);
	});

	test("renames an aliased import", async () => {
		const result = await analyseContent(
			'import { IfxTextField as Field } from "@infineon/infineon-design-system-react";\nconst App = () => <Field success />;\n',
		);
		assert.match(result.content, /<Field valid \/>/);
	});

	test("leaves unrelated components unchanged", async () => {
		const original =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <OtherComponent success />;\n';
		const result = await analyseContent(original);
		assert.equal(result.content, original);
	});

	test("leaves third-party same-name components unchanged", async () => {
		const original =
			'import { IfxTextField } from "some-other-package";\nconst App = () => <IfxTextField success />;\n';
		const result = await analyseContent(original);
		assert.equal(result.content, original);
	});

	test("emits an error diagnostic when target prop already exists", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		await writeFile(
			filePath,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success valid />;\n',
		);

		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success valid />;\n';
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
		assert.ok(analysis.diagnostics[0]?.message.includes("valid"));
	});

	test("reapplying the migration is a no-op", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const original =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success />;\n';
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

	test("preserves formatting and line endings", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\r\nconst App = () => <IfxTextField   success   />;\r\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\r\nconst App = () => <IfxTextField   valid   />;\r\n',
		);
	});

	test("renames a local prop object used in a single JSX spread", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { valid: isValid };\nconst App = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("renames a local prop object used in multiple compatible JSX spreads once", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => (\n  <>\n    <IfxTextField {...props} />\n    <IfxTextField {...props} />\n  </>\n);\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { valid: isValid };\nconst App = () => (\n  <>\n    <IfxTextField {...props} />\n    <IfxTextField {...props} />\n  </>\n);\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("leaves a prop object shared with a third-party component unchanged", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => (\n  <>\n    <IfxTextField {...props} />\n    <OtherComponent {...props} />\n  </>\n);\n';
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
		assert.equal(
			analysis.diagnostics[0]?.code,
			"DDS002",
		);
	});

	test("leaves an exported prop object unchanged", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nexport const props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n';
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
		assert.equal(analysis.diagnostics[0]?.code, "DDS002");
	});

	test("leaves a helper-returned prop object unchanged", async () => {
		const original =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = buildProps();\nconst App = () => <IfxTextField {...props} />;\n';
		const result = await analyseContent(original);
		assert.equal(result.content, original);
		assert.equal(result.diagnostics.length, 0);
	});

	test("leaves an imported prop object unchanged", async () => {
		const original =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nimport { props } from "./props";\nconst App = () => <IfxTextField {...props} />;\n';
		const result = await analyseContent(original);
		assert.equal(result.content, original);
		assert.equal(result.diagnostics.length, 0);
	});

	test("migrates direct props and local spreads in the same file", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField success {...props} />;\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { valid: isValid };\nconst App = () => <IfxTextField valid {...props} />;\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("blocks writes when target prop already exists in the local object", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid, valid: true };\nconst App = () => <IfxTextField {...props} />;\n';
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

	test("renames shorthand properties in local prop objects", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst success = true;\nconst props = { success };\nconst App = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst success = true;\nconst props = { valid: success };\nconst App = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("is idempotent for local prop objects", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const original =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} />;\n';
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
