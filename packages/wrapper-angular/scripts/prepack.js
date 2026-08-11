/**
 * Syncs the version from the main package.json to dist/package.json before publishing.
 *
 * ng-packagr generates a separate package.json in the dist/ folder during the build process.
 * When publishConfig.directory is set to "dist", npm publishes from that subdirectory instead
 * of the package root. However, Lerna only updates the version in the root package.json during
 * its version management process, leaving the dist/package.json with stale version information.
 *
 * This prepack script ensures both files are synchronized before the package tarball is created,
 * guaranteeing the published package contains the correct version set by Lerna.
 */
const fs = require("node:fs");
const path = require("node:path");
const { loadReleaseOperations } = require("../migrations/lib/manifest.js");

const mainpackageJsonPath = path.join(__dirname, "..", "package.json");
const distPackageJsonPath = path.join(__dirname, "..", "dist", "package.json");
const migrationsSourcePath = path.join(__dirname, "..", "migrations");
const distMigrationsPath = path.join(__dirname, "..", "dist", "migrations");
const migrationsCollectionPath = path.join(migrationsSourcePath, "migrations.json");

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

const mainPackage = JSON.parse(fs.readFileSync(mainpackageJsonPath, "utf8"));
const distPackage = JSON.parse(fs.readFileSync(distPackageJsonPath, "utf8"));

console.log(
	`Syncing version: ${distPackage.version} -> ${mainPackage.version}`,
);

distPackage.version = mainPackage.version;
if (mainPackage["ng-update"]) {
	distPackage["ng-update"] = mainPackage["ng-update"];
}

distPackage.types = "./index.d.ts";
distPackage.typings = "./index.d.ts";
distPackage.files = [
	"fesm2022",
	"src",
	"standalone",
	"index.d.ts",
	"migrations",
];

delete distPackage.scripts;
delete distPackage.devDependencies;
delete distPackage.wireit;

if (
	distPackage.dependencies?.["@infineon/infineon-design-system-stencil"] ===
	"workspace:*"
) {
	distPackage.dependencies["@infineon/infineon-design-system-stencil"] =
		mainPackage.version;
	console.log(`Resolved workspace dependency to: ${mainPackage.version}`);
}

const migrationVersions = getMigrationVersions(migrationsCollectionPath);

validateManifestForVersions(
	path.join(migrationsSourcePath, "shared", "manifest.json"),
	migrationVersions,
);
console.log(`Manifest validation passed (source): ${migrationVersions.join(", ")}`);

fs.rmSync(distMigrationsPath, { recursive: true, force: true });
fs.cpSync(migrationsSourcePath, distMigrationsPath, { recursive: true });
console.log("Copied Angular migration assets into dist/");

validateManifestForVersions(
	path.join(distMigrationsPath, "shared", "manifest.json"),
	migrationVersions,
);
console.log(`Manifest validation passed (dist copy): ${migrationVersions.join(", ")}`);

fs.writeFileSync(distPackageJsonPath, JSON.stringify(distPackage, null, 2));

console.log("Successfully synced dist/package.json");
