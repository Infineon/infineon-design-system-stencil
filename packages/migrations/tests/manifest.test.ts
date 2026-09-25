import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { loadManifest } from "../lib/core/manifest.js";

const writeManifest = async (manifest: unknown): Promise<string> => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-manifest-"));
	const manifestPath = path.join(tempDirectory, "manifest.json");
	await writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
	return manifestPath;
};

const releaseManifest = (
	overrides: Record<string, unknown> = {},
): Record<string, unknown> => ({
	schemaVersion: 1,
	releases: [
		{
			version: "40.0.0",
			operations: [
				{
					id: "ifx-accordion-auto-collapse-to-single-open",
					type: "rename-prop",
					component: "ifx-accordion",
					from: "auto-collapse",
					to: "single-open",
				},
			],
		},
	],
	...overrides,
});

test("loadManifest returns validated release-based manifest", async () => {
	const manifestPath = await writeManifest(releaseManifest());

	try {
		const manifest = await loadManifest(manifestPath);
		assert.equal(manifest.schemaVersion, 1);
		assert.equal(manifest.releases.length, 1);
		assert.equal(manifest.releases[0].version, "40.0.0");
		assert.equal(manifest.releases[0].operations.length, 1);
		assert.deepEqual(manifest.releases[0].operations[0], {
			id: "ifx-accordion-auto-collapse-to-single-open",
			type: "rename-prop",
			component: "ifx-accordion",
			from: "auto-collapse",
			to: "single-open",
			notes: undefined,
		});
		assert.ok(Object.isFrozen(manifest));
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});

test("loadManifest uses the packaged default manifest", async () => {
	const manifestPath = path.resolve(__dirname, "fixtures/manifest.json");
	const manifest = await loadManifest(manifestPath);

	assert.equal(manifest.schemaVersion, 1);
	assert.equal(manifest.releases.length, 1);
	assert.equal(manifest.releases[0].operations.length, 2);
	assert.deepEqual(manifest.releases[0].operations[0], {
		id: "ifx-text-field-show-delete-icon-to-show-clear-button",
		type: "rename-prop",
		component: "ifx-text-field",
		from: "show-delete-icon",
		to: "show-clear-button",
		notes: undefined,
	});
});

test("loadManifest rejects unsupported operation types", async () => {
	const manifestPath = await writeManifest(
		releaseManifest({
			releases: [
				{
					version: "40.0.0",
					operations: [
						{ id: "bad", type: "rename-everything", from: "a", to: "b" },
					],
				},
			],
		}),
	);

	try {
		await assert.rejects(loadManifest(manifestPath), /unsupported type/);
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});

test("loadManifest rejects invalid semantic versions", async () => {
	const manifestPath = await writeManifest(
		releaseManifest({
			releases: [{ version: "not-a-version", operations: [] }],
		}),
	);

	try {
		await assert.rejects(
			loadManifest(manifestPath),
			/not a valid semantic version/,
		);
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});

test("loadManifest rejects duplicate release versions", async () => {
	const manifestPath = await writeManifest(
		releaseManifest({
			releases: [
				{ version: "40.0.0", operations: [] },
				{ version: "40.0.0", operations: [] },
			],
		}),
	);

	try {
		await assert.rejects(
			loadManifest(manifestPath),
			/duplicate release version/,
		);
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});

test("loadManifest rejects duplicate operation ids", async () => {
	const manifestPath = await writeManifest(
		releaseManifest({
			releases: [
				{
					version: "40.0.0",
					operations: [
						{
							id: "same",
							type: "rename-prop",
							component: "a",
							from: "b",
							to: "c",
						},
						{
							id: "same",
							type: "rename-prop",
							component: "d",
							from: "e",
							to: "f",
						},
					],
				},
			],
		}),
	);

	try {
		await assert.rejects(loadManifest(manifestPath), /duplicate operation id/);
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});

test("loadManifest rejects self-renames", async () => {
	const manifestPath = await writeManifest(
		releaseManifest({
			releases: [
				{
					version: "40.0.0",
					operations: [
						{
							id: "self",
							type: "rename-prop",
							component: "a",
							from: "b",
							to: "b",
						},
					],
				},
			],
		}),
	);

	try {
		await assert.rejects(loadManifest(manifestPath), /renames .* to itself/);
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});

test("loadManifest rejects conflicting targets for the same component and source property", async () => {
	const manifestPath = await writeManifest(
		releaseManifest({
			releases: [
				{
					version: "40.0.0",
					operations: [
						{
							id: "one",
							type: "rename-prop",
							component: "ifx-text-field",
							from: "success",
							to: "valid",
						},
						{
							id: "two",
							type: "rename-prop",
							component: "ifx-text-field",
							from: "success",
							to: "ok",
						},
					],
				},
			],
		}),
	);

	try {
		await assert.rejects(loadManifest(manifestPath), /conflicting targets/);
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});

test("loadManifest freezes the returned manifest", async () => {
	const manifestPath = await writeManifest(releaseManifest());

	try {
		const manifest = await loadManifest(manifestPath);
		assert.ok(Object.isFrozen(manifest));
		assert.ok(Object.isFrozen(manifest.releases));
		assert.ok(Object.isFrozen(manifest.releases[0].operations));
	} finally {
		await rm(path.dirname(manifestPath), { recursive: true, force: true });
	}
});
