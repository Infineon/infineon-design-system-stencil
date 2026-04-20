import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { filterManifestByTargetVersion, loadManifest } from "../lib/manifest.js";

test("loadManifest returns validated rename rules", async () => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-manifest-"));
	const manifestPath = path.join(tempDirectory, "manifest.json");

	await writeFile(
		manifestPath,
		JSON.stringify(
			{
				schemaVersion: 1,
				migrations: [
					{
						component: "ifx-accordion",
						operations: [{ type: "prop-rename", from: "auto-collapse", to: "single-open" }],
					},
				],
			},
			null,
			2,
		),
		"utf8",
	);

	try {
		const manifest = await loadManifest(manifestPath);
		assert.equal(manifest.schemaVersion, 1);
		assert.equal(manifest.migrations.length, 1);
		assert.deepEqual(manifest.migrations[0].operations[0], {
			type: "prop-rename",
			from: "auto-collapse",
			to: "single-open",
		});
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});

test("loadManifest uses the packaged default manifest", async () => {
	const manifest = await loadManifest();

	assert.equal(manifest.schemaVersion, 1);
	assert.equal(manifest.migrations.length, 1);
	assert.deepEqual(manifest.migrations[0], {
		component: "ifx-text-field",
		operations: [{ type: "prop-rename", from: "show-delete-icon", to: "show-clear-button" }],
		targetVersion: "40.0.0",
		notes: undefined,
	});
});

test("loadManifest rejects unsupported operation types", async () => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-manifest-invalid-"));
	const manifestPath = path.join(tempDirectory, "manifest.json");

	await writeFile(
		manifestPath,
		JSON.stringify(
			{
				schemaVersion: 1,
				migrations: [
					{
						component: "ifx-accordion",
						operations: [{ type: "rename-everything", from: "a", to: "b" }],
					},
				],
			},
			null,
			2,
		),
		"utf8",
	);

	try {
		await assert.rejects(loadManifest(manifestPath), /unsupported type/);
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});

test("filterManifestByTargetVersion includes same-base canary prereleases", () => {
	const manifest = {
		schemaVersion: 1 as const,
		migrations: [
			{
				component: "ifx-text-field",
				operations: [{ type: "prop-rename" as const, from: "show-delete-icon", to: "show-clear-button" }],
				targetVersion: "40.0.0",
			},
		],
	};

	const filtered = filterManifestByTargetVersion(
		manifest,
		"40.0.0--canary.2303.24514467328.0",
	);

	assert.equal(filtered.migrations.length, 1);
});