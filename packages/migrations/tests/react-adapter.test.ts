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
});
