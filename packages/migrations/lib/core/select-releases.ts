import semver from "semver";

import type { MigrationManifest, MigrationRelease } from "./types.js";

export type SelectedMigrationRelease = MigrationRelease;

export interface SelectedReleasesResult {
	selectedReleases: SelectedMigrationRelease[];
}

const assertValidVersion = (value: string, label: string): string => {
	const normalized = semver.valid(value);
	if (!normalized) {
		throw new Error(`Invalid ${label}: "${value}" is not a valid semantic version.`);
	}

	return normalized;
};

const getBaseVersion = (value: string): string => {
	const coerced = semver.coerce(value);
	if (!coerced) {
		throw new Error(`Unable to coerce "${value}" to a base semantic version.`);
	}

	return coerced.version;
};

/**
 * Selects migration releases crossed by an upgrade.
 *
 * Rule: fromVersion < releaseVersion <= toVersion
 *
 * Source, target and release versions are compared by their coerced base
 * versions so that canary/prerelease versions are treated as part of their
 * release line rather than as earlier releases.
 *
 * Releases are returned in ascending semantic-version order while preserving
 * the original operation order within each release. Equal source and target
 * versions yield an empty selection. Downgrades are rejected.
 */
export const selectMigrationReleases = (
	manifest: MigrationManifest,
	fromVersion: string,
	toVersion: string,
): SelectedMigrationRelease[] => {
	const from = assertValidVersion(fromVersion, "from version");
	const to = assertValidVersion(toVersion, "to version");

	const fromBase = getBaseVersion(from);
	const toBase = getBaseVersion(to);

	if (semver.lt(toBase, fromBase)) {
		throw new Error(
			`Invalid upgrade range: target version "${toVersion}" is older than source version "${fromVersion}".`,
		);
	}

	if (semver.eq(toBase, fromBase)) {
		return [];
	}

	const sorted = [...manifest.releases].sort((left, right) =>
		semver.compare(left.version, right.version),
	);

	return sorted.filter((release) => {
		const releaseBase = getBaseVersion(release.version);
		return semver.gt(releaseBase, fromBase) && semver.lte(releaseBase, toBase);
	});
};
