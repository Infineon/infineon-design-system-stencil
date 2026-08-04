const fs = require("fs");
const path = require("path");

const SEMVER_PATTERN = /(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?/;

function parseVersion(value) {
	const match = value.match(SEMVER_PATTERN);
	if (!match) {
		return null;
	}

	const [, major, minor, patch, prerelease] = match;
	return {
		major: Number(major),
		minor: Number(minor),
		patch: Number(patch),
		prerelease,
	};
}

function compareVersions(left, right) {
	const leftVersion = parseVersion(left);
	const rightVersion = parseVersion(right);

	if (!leftVersion || !rightVersion) {
		throw new Error(`Unable to compare versions: ${left} and ${right}.`);
	}

	for (const key of ["major", "minor", "patch"]) {
		const difference = leftVersion[key] - rightVersion[key];
		if (difference !== 0) {
			return difference;
		}
	}

	if (leftVersion.prerelease && !rightVersion.prerelease) {
		return -1;
	}

	if (!leftVersion.prerelease && rightVersion.prerelease) {
		return 1;
	}

	if (leftVersion.prerelease && rightVersion.prerelease) {
		return leftVersion.prerelease.localeCompare(rightVersion.prerelease);
	}

	return 0;
}

function hasSameBaseVersion(left, right) {
	return left.major === right.major && left.minor === right.minor && left.patch === right.patch;
}

function isVersionGreaterThanOrEqual(left, right) {
	const leftVersion = parseVersion(left);
	const rightVersion = parseVersion(right);

	if (!leftVersion || !rightVersion) {
		throw new Error(`Unable to compare versions: ${left} and ${right}.`);
	}

	if (hasSameBaseVersion(leftVersion, rightVersion) && leftVersion.prerelease && !rightVersion.prerelease) {
		return true;
	}

	return compareVersions(left, right) >= 0;
}

/**
 * Resolve the migration manifest path.
 * Checks (in order): an explicit path supplied by the caller, the package-relative
 * `migrations/shared` JSON file, and the monorepo sibling package location.
 *
 * @param {string | undefined} explicitManifestPath
 * @param {string} migrationsDir  Absolute path to the `migrations/` folder of wrapper-angular.
 */
function getManifestPath(explicitManifestPath, migrationsDir) {
	if (explicitManifestPath) {
		return explicitManifestPath;
	}

	const candidates = [
		path.join(migrationsDir, "shared"),
		path.join(migrationsDir, "shared", "v1.json"),
		path.resolve(migrationsDir, "..", "..", "migrations", "migrations", "v1.json"),
	];

	for (const candidate of candidates) {
		if (fs.existsSync(candidate)) {
			return candidate;
		}
	}

	throw new Error("Unable to locate the shared migration manifest for Angular migrations.");
}

/**
 * Load and filter migration rules from the manifest.
 *
 * @param {string} targetVersion  Semver string of the package being migrated to.
 * @param {string | undefined} manifestPath  Optional explicit path to a manifest JSON file.
 * @param {string} migrationsDir  Absolute path to the `migrations/` folder (used for default resolution).
 */
function loadMigrationRules(targetVersion, manifestPath, migrationsDir) {
	const resolvedPath = getManifestPath(manifestPath, migrationsDir);
	const manifest = JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
	const migrations = Array.isArray(manifest.migrations) ? manifest.migrations : [];

	return migrations.filter(
		(rule) => !rule.targetVersion || isVersionGreaterThanOrEqual(targetVersion, rule.targetVersion),
	);
}

module.exports = { loadMigrationRules };
