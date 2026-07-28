import assert from "node:assert/strict";
import test from "node:test";

import {
	resolveFromVersion,
	resolveToVersion,
	resolveUpgradeRange,
} from "../lib/project/resolve-versions.js";

const baseContext = {
	rootDirectory: "/project",
	packageName: "@infineon/infineon-design-system-react",
};

test("resolveFromVersion prefers explicit --from", () => {
	const version = resolveFromVersion({
		...baseContext,
		explicitFromVersion: "40.0.0",
		lockfileVersion: "39.21.0",
		declaredVersion: "^39.0.0",
	});

	assert.equal(version, "40.0.0");
});

test("resolveFromVersion falls back to lockfile version", () => {
	const version = resolveFromVersion({
		...baseContext,
		lockfileVersion: "39.21.0",
		declaredVersion: "^39.0.0",
	});

	assert.equal(version, "39.21.0");
});

test("resolveFromVersion falls back to exact declared version", () => {
	const version = resolveFromVersion({
		...baseContext,
		declaredVersion: "39.21.0",
	});

	assert.equal(version, "39.21.0");
});

test("resolveFromVersion rejects broad declared ranges without a lockfile", () => {
	assert.throws(
		() =>
			resolveFromVersion({
				...baseContext,
				declaredVersion: "^39.0.0",
			}),
		/Pass --from/,
	);
});

test("resolveFromVersion rejects declared versions that are not valid semver", () => {
	assert.throws(
		() =>
			resolveFromVersion({
				...baseContext,
				declaredVersion: "not-a-version",
			}),
		/Pass --from/,
	);
});

test("resolveFromVersion trims whitespace from declared version", () => {
	const version = resolveFromVersion({
		...baseContext,
		declaredVersion: "  39.21.0  ",
	});

	assert.equal(version, "39.21.0");
});

test("resolveFromVersion rejects invalid explicit versions", () => {
	assert.throws(
		() =>
			resolveFromVersion({
				...baseContext,
				explicitFromVersion: "not-a-version",
			}),
		/--from version.*not a valid semantic version/,
	);
});

test("resolveToVersion prefers explicit --to", () => {
	const version = resolveToVersion({
		...baseContext,
		explicitToVersion: "41.0.0",
		installedMigrationPackageVersion: "40.0.0",
	});

	assert.equal(version, "41.0.0");
});

test("resolveToVersion falls back to installed migration package version", () => {
	const version = resolveToVersion({
		...baseContext,
		installedMigrationPackageVersion: "40.0.0",
	});

	assert.equal(version, "40.0.0");
});

test("resolveToVersion fails when no target version is available", () => {
	assert.throws(() => resolveToVersion(baseContext), /Pass --to/);
});

test("resolveUpgradeRange returns the resolved range", () => {
	const range = resolveUpgradeRange({
		...baseContext,
		explicitFromVersion: "39.0.0",
		explicitToVersion: "40.0.0",
	});

	assert.deepEqual(range, { fromVersion: "39.0.0", toVersion: "40.0.0" });
});

test("resolveUpgradeRange rejects downgrades", () => {
	assert.throws(
		() =>
			resolveUpgradeRange({
				...baseContext,
				explicitFromVersion: "40.0.0",
				explicitToVersion: "39.0.0",
			}),
		/Invalid upgrade range/,
	);
});
