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
const fs = require("fs");
const path = require("path");

const mainpackageJsonPath = path.join(__dirname, "..", "package.json");
const distPackageJsonPath = path.join(__dirname, "..", "dist", "package.json");

const mainPackage = JSON.parse(fs.readFileSync(mainpackageJsonPath, "utf8"));
const distPackage = JSON.parse(fs.readFileSync(distPackageJsonPath, "utf8"));

console.log(
	`Syncing version: ${distPackage.version} -> ${mainPackage.version}`,
);

distPackage.version = mainPackage.version;
distPackage.types = distPackage.typings;

const coreDependency = mainPackage.dependencies?.["@infineon/design-system"];
if (
	coreDependency !== "workspace:*" &&
	coreDependency !== mainPackage.version
) {
	throw new Error(
		`Expected matching canonical core dependency, got: ${coreDependency}`,
	);
}
distPackage.dependencies["@infineon/design-system"] = mainPackage.version;
console.log(`Resolved core dependency to: ${mainPackage.version}`);

fs.writeFileSync(distPackageJsonPath, JSON.stringify(distPackage, null, 2));

console.log("Successfully synced dist/package.json");
