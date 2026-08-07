const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const {
	syncMigrationManifest,
	verifyMigrationManifest,
} = require("../scripts/sync-migration-manifest.js");

test("syncMigrationManifest copies the source manifest verbatim", () => {
	const tempDir = fs.mkdtempSync(
		path.join(os.tmpdir(), "ifx-wrapper-manifest-sync-"),
	);
	const sourceManifestPath = path.join(tempDir, "source-manifest.json");
	const targetManifestPath = path.join(tempDir, "target-manifest.json");
	const sourceContents = JSON.stringify(
		{
			schemaVersion: 1,
			releases: [
				{
					version: "40.0.0",
					operations: [{ id: "op-1", type: "rename-prop", component: "ifx-test", from: "old", to: "new" }],
				},
			],
		},
		null,
		2,
	);

	try {
		fs.writeFileSync(sourceManifestPath, sourceContents, "utf8");
		fs.writeFileSync(targetManifestPath, "{\"stale\":true}", "utf8");

		syncMigrationManifest({
			sourceManifestPath,
			targetManifestPath,
		});

		assert.equal(fs.readFileSync(targetManifestPath, "utf8"), sourceContents);
		assert.doesNotThrow(() =>
			verifyMigrationManifest({ sourceManifestPath, targetManifestPath }),
		);
	} finally {
		fs.rmSync(tempDir, { recursive: true, force: true });
	}
});

test("verifyMigrationManifest detects a stale target manifest", () => {
	const tempDir = fs.mkdtempSync(
		path.join(os.tmpdir(), "ifx-wrapper-manifest-verify-"),
	);
	const sourceManifestPath = path.join(tempDir, "source-manifest.json");
	const targetManifestPath = path.join(tempDir, "target-manifest.json");
	const sourceContents = JSON.stringify(
		{
			schemaVersion: 1,
			releases: [
				{
					version: "40.0.0",
					operations: [{ id: "op-1", type: "rename-prop", component: "ifx-test", from: "old", to: "new" }],
				},
			],
		},
		null,
		2,
	);

	try {
		fs.writeFileSync(sourceManifestPath, sourceContents, "utf8");
		fs.writeFileSync(targetManifestPath, "{\"stale\":true}", "utf8");

		assert.throws(
			() => verifyMigrationManifest({ sourceManifestPath, targetManifestPath }),
			/byte-for-byte/, 
		);
	} finally {
		fs.rmSync(tempDir, { recursive: true, force: true });
	}
});
