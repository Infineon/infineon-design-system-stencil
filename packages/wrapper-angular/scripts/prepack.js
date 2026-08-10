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

const mainpackageJsonPath = path.join(__dirname, "..", "package.json");
const distPackageJsonPath = path.join(__dirname, "..", "dist", "package.json");
const migrationsSourcePath = path.join(__dirname, "..", "migrations");
const distMigrationsPath = path.join(__dirname, "..", "dist", "migrations");

function validateManifest(manifestPath) {
	if (!fs.existsSync(manifestPath)) {
		throw new Error(`Manifest not found: ${manifestPath}`);
	}
	const stat = fs.statSync(manifestPath);
	if (!stat.isFile()) {
		throw new Error(`Manifest path is not a regular file: ${manifestPath}`);
	}
	let manifest;
	try {
		manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
	} catch (err) {
		throw new Error(`Manifest does not parse as JSON: ${err.message}`);
	}
	if (!Array.isArray(manifest.releases) || !manifest.releases.some((r) => r.version === "40.0.0")) {
		throw new Error("Manifest does not contain a v40.0.0 release");
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

const sharedManifestPath = path.join(migrationsSourcePath, "shared", "manifest.json");
validateManifest(sharedManifestPath);
console.log("Manifest validation passed (source)");

fs.rmSync(distMigrationsPath, { recursive: true, force: true });
fs.cpSync(migrationsSourcePath, distMigrationsPath, { recursive: true });
console.log("Copied Angular migration assets into dist/");

const distManifestPath = path.join(distMigrationsPath, "shared", "manifest.json");
validateManifest(distManifestPath);
console.log("Manifest validation passed (dist copy)");

fs.writeFileSync(distPackageJsonPath, JSON.stringify(distPackage, null, 2));

console.log("Successfully synced dist/package.json");
