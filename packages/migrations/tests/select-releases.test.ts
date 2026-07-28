import assert from "node:assert/strict";
import test from "node:test";

import { selectMigrationReleases } from "../lib/core/select-releases.js";
import type { MigrationManifest } from "../lib/core/types.js";

const manifest: MigrationManifest = {
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
					id: "ifx-accordion-auto-collapse-to-single-open",
					type: "rename-prop",
					component: "ifx-accordion",
					from: "auto-collapse",
					to: "single-open",
				},
			],
		},
		{
			version: "39.0.0",
			operations: [
				{
					id: "ifx-button-old-to-new",
					type: "rename-prop",
					component: "ifx-button",
					from: "old",
					to: "new",
				},
			],
		},
	],
};

test("selects a single crossed release", () => {
	const selected = selectMigrationReleases(manifest, "39.5.0", "40.0.0");
	assert.equal(selected.length, 1);
	assert.equal(selected[0].version, "40.0.0");
});

test("selects all crossed releases between two versions", () => {
	const selected = selectMigrationReleases(manifest, "38.0.0", "40.0.0");
	assert.equal(selected.length, 2);
	assert.equal(selected[0].version, "39.0.0");
	assert.equal(selected[1].version, "40.0.0");
});

test("equal versions select no releases", () => {
	const selected = selectMigrationReleases(manifest, "40.0.0", "40.0.0");
	assert.equal(selected.length, 0);
});

test("does not rerun the source release", () => {
	const selected = selectMigrationReleases(manifest, "40.0.0", "41.0.0");
	assert.equal(selected.length, 1);
	assert.equal(selected[0].version, "41.0.0");
});

test("returns releases in ascending order even when manifest is reverse-ordered", () => {
	const reverseManifest: MigrationManifest = {
		schemaVersion: 1,
		releases: [...manifest.releases].reverse(),
	};

	const selected = selectMigrationReleases(reverseManifest, "38.0.0", "41.0.0");
	assert.equal(selected.length, 3);
	assert.deepEqual(selected.map((release) => release.version), ["39.0.0", "40.0.0", "41.0.0"]);
});

test("rejects invalid source versions", () => {
	assert.throws(
		() => selectMigrationReleases(manifest, "not-a-version", "40.0.0"),
		/from version.*not a valid semantic version/,
	);
});

test("rejects invalid target versions", () => {
	assert.throws(
		() => selectMigrationReleases(manifest, "39.0.0", "not-a-version"),
		/to version.*not a valid semantic version/,
	);
});

test("rejects downgrades", () => {
	assert.throws(
		() => selectMigrationReleases(manifest, "41.0.0", "40.0.0"),
		/target version.*older than source version/,
	);
});

test("treats canary versions as valid and selects crossed releases", () => {
	const selected = selectMigrationReleases(
		manifest,
		"39.0.0--canary.1.0",
		"40.0.0--canary.2303.24514467328.0",
	);

	assert.equal(selected.length, 1);
	assert.equal(selected[0].version, "40.0.0");
});

test("preserves operation order within each selected release", () => {
	const multiOperationManifest: MigrationManifest = {
		schemaVersion: 1,
		releases: [
			{
				version: "40.0.0",
				operations: [
					{
						id: "first",
						type: "rename-prop",
						component: "ifx-a",
						from: "a",
						to: "b",
					},
					{
						id: "second",
						type: "rename-prop",
						component: "ifx-c",
						from: "c",
						to: "d",
					},
				],
			},
		],
	};

	const selected = selectMigrationReleases(multiOperationManifest, "39.0.0", "41.0.0");
	assert.equal(selected[0].operations.length, 2);
	assert.equal(selected[0].operations[0].id, "first");
	assert.equal(selected[0].operations[1].id, "second");
});
