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

		const editResult = applyEdits(analysis.content, analysis.edits);
		return {
			content: editResult.content,
			diagnostics: [...analysis.diagnostics, ...editResult.diagnostics],
		};
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

	test("warns about a helper-returned prop object and leaves it unchanged", async () => {
		const original =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = buildProps();\nconst App = () => <IfxTextField {...props} />;\n';
		const result = await analyseContent(original);
		assert.equal(result.content, original);
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0]?.code, "DDS004");
		assert.equal(result.diagnostics[0]?.severity, "warning");
	});

	test("warns about an imported prop object and leaves it unchanged", async () => {
		const original =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nimport { props } from "./props";\nconst App = () => <IfxTextField {...props} />;\n';
		const result = await analyseContent(original);
		assert.equal(result.content, original);
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0]?.code, "DDS003");
		assert.equal(result.diagnostics[0]?.severity, "warning");
	});

	test("blocks a direct source prop alongside a spread source prop", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField success {...props} />;\n';
		const result = await analyseContent(content);
		assert.equal(result.content, content);
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0]?.code, "DDS001");
	});

	test("blocks a direct source prop alongside a spread target prop", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { valid: true };\nconst App = () => <IfxTextField success {...props} />;\n';
		const result = await analyseContent(content);
		assert.equal(result.content, content);
		assert.equal(result.diagnostics.length, 1);
		assert.equal(result.diagnostics[0]?.code, "DDS001");
	});

	test("blocks a projected conflict with explicit static keys in an unsafe object", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { ...base, valid: true };\nconst App = () => <IfxTextField success {...props} />;\n';
		const result = await analyseContent(content);
		assert.equal(result.content, content);
		assert.ok(
			result.diagnostics.some((diagnostic) => diagnostic.code === "DDS001"),
		);
	});

	test("leaves a shadowed component parameter unchanged", async () => {
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nfunction Example(IfxTextField: OtherComponent) {\n  return <IfxTextField success />;\n}\n';
		const result = await analyseContent(content);
		assert.equal(result.content, content);
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

	test("emits DDS002 for an object literal with a spread assignment", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst base = { success: isValid };\nconst props = { ...base, success: true };\nconst App = () => <IfxTextField {...props} />;\n';
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

	test("emits DDS002 for an object literal with a computed property name", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { [propName]: value, success: true };\nconst App = () => <IfxTextField {...props} />;\n';
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

	test("emits DDS002 for an object literal with a method shorthand", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success() {}, valid: true };\nconst App = () => <IfxTextField {...props} />;\n';
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

	test("emits DDS002 for an object literal with a getter", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { get success() { return true; }, valid: true };\nconst App = () => <IfxTextField {...props} />;\n';
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

	test("emits DDS001 when a spread source conflicts with an existing target prop", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => <IfxTextField {...props} valid />;\n';
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
		assert.ok(
			analysis.diagnostics.some(
				(diagnostic) => diagnostic.code === "DDS001",
			),
		);
	});

	test("emits DDS001 when a direct source conflicts with a spread target prop", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { valid: true };\nconst App = () => <IfxTextField success {...props} />;\n';
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
		assert.ok(
			analysis.diagnostics.some(
				(diagnostic) => diagnostic.code === "DDS001",
			),
		);
	});

	test("emits DDS001 when two spreads would both supply the target prop", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst first = { success: isValid };\nconst second = { success: true };\nconst App = () => <IfxTextField {...first} {...second} />;\n';
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
		assert.ok(
			analysis.diagnostics.some(
				(diagnostic) => diagnostic.code === "DDS001",
			),
		);
	});

	test("does not let a shadowed binding affect an unrelated spread", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => {\n  const props = { other: true };\n  return <IfxTextField {...props} />;\n};\n',
		);
		// The outer object has no supported spread on a target component, so it
		// is left unchanged. The inner shadowed binding is not mistaken for it.
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => {\n  const props = { other: true };\n  return <IfxTextField {...props} />;\n};\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("only migrates the outer binding when a spread is shadowed elsewhere", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid };\nconst App = () => {\n  const props = { other: true };\n  return <IfxTextField {...props} />;\n};\nconst Outer = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { valid: isValid };\nconst App = () => {\n  const props = { other: true };\n  return <IfxTextField {...props} />;\n};\nconst Outer = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("does not treat an object property with the same name as a variable reference", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { success: isValid, props: true };\nconst App = () => <IfxTextField {...props} />;\n';
		await writeFile(filePath, content);

		const analysis = await adapter.analyseFile(
			filePath,
			content,
			0,
			createStep(),
			createContext(tempRoot),
		);
		assert.ok(analysis);
		assert.equal(analysis.diagnostics.length, 0);
		assert.ok(analysis.edits.length > 0);
	});

	test("preserves double-quoted keys in local prop objects", async () => {
		const result = await analyseContent(
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { "success": true };\nconst App = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(
			result.content,
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { "valid": true };\nconst App = () => <IfxTextField {...props} />;\n',
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("preserves single-quoted keys in local prop objects", async () => {
		const result = await analyseContent(
			"import { IfxTextField } from \"@infineon/infineon-design-system-react\";\nconst props = { 'success': true };\nconst App = () => <IfxTextField {...props} />;\n",
		);
		assert.equal(
			result.content,
			"import { IfxTextField } from \"@infineon/infineon-design-system-react\";\nconst props = { 'valid': true };\nconst App = () => <IfxTextField {...props} />;\n",
		);
		assert.equal(result.diagnostics.length, 0);
	});

	test("blocks an exported target spread alongside a direct source prop", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nexport const props = { valid: true };\nconst App = () => <IfxTextField success {...props} />;\n';
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
		assert.ok(
			analysis.diagnostics.some((diagnostic) => diagnostic.code === "DDS001"),
		);
		assert.ok(
			analysis.diagnostics.some((diagnostic) => diagnostic.code === "DDS002"),
		);
	});

	test("blocks a mutable target spread alongside a direct source prop", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nlet props = { valid: true };\nconst App = () => <IfxTextField success {...props} />;\n';
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
		assert.ok(
			analysis.diagnostics.some((diagnostic) => diagnostic.code === "DDS001"),
		);
	});

	test("blocks a shared target spread alongside a direct source prop", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst props = { valid: true };\nconst App = () => (\n  <>\n    <IfxTextField success {...props} />\n    <OtherComponent {...props} />\n  </>\n);\n';
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
		assert.ok(
			analysis.diagnostics.some((diagnostic) => diagnostic.code === "DDS001"),
		);
		assert.ok(
			analysis.diagnostics.some((diagnostic) => diagnostic.code === "DDS002"),
		);
	});

	test("returns no edits and DDS007 for a malformed TSX file", async () => {
		const filePath = path.join(tempRoot, "App.tsx");
		const content =
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nconst App = () => <IfxTextField success\n';
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
	});
});
