import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { analyseMigration, applyMigrationPlan } from "../lib/core/plan.js";
import type {
	MigrationExecutionContext,
	MigrationManifest,
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

	describe("safe migrations", () => {
		test("renames a basic local v-bind object");
		test("renames a local object used with a PascalCase component tag");
		test("renames a local object used with a kebab-case component tag");
		test("renames a source key in a repeated compatible element");
		test("renames an identifier-style object key");
		test("renames a quoted camelCase object key");
		test("renames a quoted kebab-case object key");
		test("converts a shorthand source property to an explicit target pair");
		test("preserves quote style and comments around the renamed key");
		test("unwraps a parenthesized object literal");
		test("unwraps an as-const assertion");
		test("unwraps a type assertion");
		test("unwraps a satisfies expression");
		test("works inside a script-setup generic block");
		test("works with TSX script content and a template-bound local object");
	});

	describe("unsupported bindings", () => {
		test("leaves a let binding unchanged");
		test("leaves a var binding unchanged");
		test("leaves an exported const object unchanged");
		test("leaves an imported object binding unchanged");
		test("leaves a helper or compiler-macro result unchanged");
		test("leaves a member-expression v-bind unchanged");
		test("leaves an inline object v-bind unchanged");
		test("leaves a classic script declaration unchanged");
		test("leaves an object with spread assignments unchanged");
		test("leaves an object with computed keys unchanged");
		test("leaves an object with methods unchanged");
		test("leaves an object with duplicate source keys unchanged");
		test("leaves an object with duplicate target keys unchanged");
		test("leaves an unresolved declaration unchanged");
	});

	describe("reference safety", () => {
		test("does not edit an object used on a native element");
		test("does not edit an object used on a third-party component");
		test("does not edit an object used on a different DDS component");
		test("does not edit an object referenced inside template interpolation");
		test("does not edit an object referenced inside a directive expression");
		test("does not edit an object read through a member expression");
		test("does not edit an object destructured in script");
		test("does not edit an object passed as a function argument");
		test("does not edit an object returned from a function");
		test("does not edit an object aliased to another binding");
		test("does not edit an object reassigned or exposed");
		test("does not edit a binding shadowed by v-for");
		test("does not edit a binding shadowed by v-slot");
		test("safe sibling elements are still migrated when one element is unsafe");
	});

	describe("conflicts", () => {
		test("blocks writes when source and target are in the same object");
		test("blocks writes when a direct source prop and an object target prop coexist");
		test("blocks writes when a direct target prop and an object source prop coexist");
		test("blocks writes when a direct source prop and an object source prop coexist");
		test("blocks writes when two bound objects appear on the same element");
		test("blocks writes in one file from affecting a safe file");
	});

	describe("chained releases", () => {
		test("renames through an intermediate chained release");
		test("blocks chained writes when an intermediate step discovers a conflict");
	});

	describe("idempotency and formatting", () => {
		test("produces a no-op when the migration is run again");
		test("preserves whitespace, line endings and unrelated keys");
	});
});
