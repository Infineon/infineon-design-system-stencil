const SEMVER_PATTERN = /(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?/;

interface ParsedVersion {
	major: number;
	minor: number;
	patch: number;
	prerelease?: string;
}

const parseVersion = (value: string): ParsedVersion | null => {
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
};

export const extractSemverFromRange = (value: string | undefined): string | undefined => {
	if (!value) {
		return undefined;
	}

	const match = value.match(SEMVER_PATTERN);
	return match?.[0];
};

export const compareVersions = (left: string, right: string): number => {
	const leftVersion = parseVersion(left);
	const rightVersion = parseVersion(right);

	if (!leftVersion || !rightVersion) {
		throw new Error(`Unable to compare versions: ${left} and ${right}.`);
	}

	for (const key of ["major", "minor", "patch"] as const) {
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
};

export const isVersionGreaterThanOrEqual = (left: string, right: string): boolean =>
	compareVersions(left, right) >= 0;