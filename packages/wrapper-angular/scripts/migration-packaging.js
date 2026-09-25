const fs = require("node:fs");
const { loadReleaseOperations } = require("../migrations/lib/manifest.js");

function getMigrationVersions(collectionPath) {
	const collection = JSON.parse(fs.readFileSync(collectionPath, "utf8"));
	return [
		...new Set(
			Object.values(collection.schematics ?? {})
				.map((schematic) => schematic.version)
				.filter(Boolean),
		),
	];
}

function validateManifestForVersions(manifestPath, versions) {
	for (const version of versions) {
		loadReleaseOperations(version, manifestPath);
	}
}

function validateMigrationAssets(collectionPath, manifestPath) {
	const versions = getMigrationVersions(collectionPath);
	validateManifestForVersions(manifestPath, versions);
	return versions;
}

module.exports = { getMigrationVersions, validateManifestForVersions, validateMigrationAssets };
