import assert from "node:assert/strict";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import type { MigrationManifest } from "../lib/types.js";

const TEST_MANIFEST: MigrationManifest = {
	schemaVersion: 1,
	migrations: [
		{
			component: "ifx-accordion",
			operations: [
				{ type: "prop-rename", from: "auto-collapse", to: "single-open" },
			],
			targetVersion: "40.0.0",
		},
		{
			component: "ifx-text-field",
			operations: [
				{ type: "prop-rename", from: "show-delete-icon", to: "show-clear-button" },
			],
			targetVersion: "40.0.0",
		},
	],
};

const TEST_FIXTURES_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "fixtures");

export const createTempFixture = async (fixtureName: string): Promise<string> => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), `ifx-codemod-${fixtureName}-`));
	await cp(path.join(TEST_FIXTURES_ROOT, fixtureName), tempDirectory, { recursive: true });
	return tempDirectory;
};

export const writeTestManifest = async (directory: string, manifest: MigrationManifest = TEST_MANIFEST): Promise<string> => {
	const manifestPath = path.join(directory, "migration.json");
	await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
	return manifestPath;
};

export const readFixtureFile = async (directory: string, relativePath: string): Promise<string> =>
	readFile(path.join(directory, relativePath), "utf8");

export const writeFixtureFile = async (
	directory: string,
	relativePath: string,
	content: string,
): Promise<void> => {
	await writeFile(path.join(directory, relativePath), content, "utf8");
};

export const cleanupTempFixture = async (directory: string): Promise<void> => {
	await rm(directory, { recursive: true, force: true });
};

export const withPatchedConsole = async <T>(callback: () => Promise<T>): Promise<T> => {
	const originalLog = console.log;
	const originalError = console.error;
	const lines: string[] = [];

	console.log = (...args: unknown[]) => {
		lines.push(args.map((arg) => String(arg)).join(" "));
	};

	console.error = (...args: unknown[]) => {
		lines.push(args.map((arg) => String(arg)).join(" "));
	};

	try {
		return await callback();
	} finally {
		console.log = originalLog;
		console.error = originalError;
	}
};

export const assertIncludesAll = (actual: string, expectedSubstrings: string[]): void => {
	for (const substring of expectedSubstrings) {
		assert.ok(actual.includes(substring), `Expected output to include: ${substring}`);
	}
};

export { TEST_MANIFEST };