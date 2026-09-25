#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

function resolvePath(candidatePath, fallbackPath) {
	if (candidatePath) {
		return path.resolve(candidatePath);
	}

	return path.resolve(fallbackPath);
}

function syncMigrationManifest(options = {}) {
	const sourceManifestPath = resolvePath(
		options.sourceManifestPath,
		path.join(__dirname, "..", "..", "migrations", "migrations", "manifest.json"),
	);
	const targetManifestPath = resolvePath(
		options.targetManifestPath,
		path.join(__dirname, "..", "migrations", "shared", "manifest.json"),
	);

	const sourceContents = fs.readFileSync(sourceManifestPath, "utf8");
	const sourceManifest = JSON.parse(sourceContents);
	const manifestModulePath = path.join(
		__dirname,
		"..",
		"migrations",
		"lib",
		"manifest.js",
	);

	const manifestModule = require(manifestModulePath);
	manifestModule.loadManifestFromPath(sourceManifestPath);

	fs.writeFileSync(targetManifestPath, sourceContents, "utf8");
	console.log(`Synced migration manifest to ${targetManifestPath}`);

	return {
		sourceManifestPath,
		targetManifestPath,
		sourceManifest,
	};
}

function verifyMigrationManifest(options = {}) {
	const sourceManifestPath = resolvePath(
		options.sourceManifestPath,
		path.join(__dirname, "..", "..", "migrations", "migrations", "manifest.json"),
	);
	const targetManifestPath = resolvePath(
		options.targetManifestPath,
		path.join(__dirname, "..", "migrations", "shared", "manifest.json"),
	);

	const sourceContents = fs.readFileSync(sourceManifestPath, "utf8");
	const targetContents = fs.readFileSync(targetManifestPath, "utf8");

	if (sourceContents !== targetContents) {
		throw new Error(
			`Migration manifest mismatch: ${targetManifestPath} is not byte-for-byte identical to ${sourceManifestPath}`,
		);
	}

	const manifestModulePath = path.join(
		__dirname,
		"..",
		"migrations",
		"lib",
		"manifest.js",
	);
	const manifestModule = require(manifestModulePath);

	manifestModule.loadManifestFromPath(sourceManifestPath);
	manifestModule.loadManifestFromPath(targetManifestPath);

	return {
		sourceManifestPath,
		targetManifestPath,
	};
}

if (require.main === module) {
	const command = process.argv[2];
	if (command === "verify") {
		verifyMigrationManifest();
		console.log("Migration manifest verification passed.");
	} else {
		syncMigrationManifest();
	}
}

module.exports = {
	syncMigrationManifest,
	verifyMigrationManifest,
};
