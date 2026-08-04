import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import semver from "semver";

import type { UpgradeRange } from "../core/types.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_JSON_PATH = path.resolve(__dirname, "..", "..", "package.json");

export const readMigrationPackageVersion = async (): Promise<string> => {
	const content = await readFile(PACKAGE_JSON_PATH, "utf8");
	const parsed = JSON.parse(content) as { version?: unknown };

	if (typeof parsed.version !== "string") {
		throw new Error(
			"Unable to read the migration package version from package.json.",
		);
	}

	return parsed.version;
};

export interface VersionResolutionContext {
	rootDirectory: string;
	packageName: string;
	explicitFromVersion?: string;
	explicitToVersion?: string;
	declaredVersion?: string;
	lockfileVersion?: string;
	installedMigrationPackageVersion?: string;
}

const assertValidSemver = (value: string, label: string): void => {
	if (!semver.valid(value)) {
		throw new Error(
			`Invalid ${label}: "${value}" is not a valid semantic version.`,
		);
	}
};

export const resolveFromVersion = (
	context: VersionResolutionContext,
): string => {
	if (context.explicitFromVersion) {
		assertValidSemver(context.explicitFromVersion, "--from version");
		return context.explicitFromVersion;
	}

	if (context.lockfileVersion) {
		return context.lockfileVersion;
	}

	if (context.declaredVersion) {
		const trimmed = context.declaredVersion.trim();
		if (semver.valid(trimmed)) {
			return trimmed;
		}
	}

	throw new Error(
		`Could not determine the source version for ${context.packageName}. Pass --from with the currently installed version.`,
	);
};

export const resolveToVersion = (context: VersionResolutionContext): string => {
	if (context.explicitToVersion) {
		assertValidSemver(context.explicitToVersion, "--to version");
		return context.explicitToVersion;
	}

	if (context.installedMigrationPackageVersion) {
		return context.installedMigrationPackageVersion;
	}

	throw new Error(
		"Could not determine the target version. Pass --to with the version you are upgrading to.",
	);
};

export const resolveUpgradeRange = (
	context: VersionResolutionContext,
): UpgradeRange => {
	const fromVersion = resolveFromVersion(context);
	const toVersion = resolveToVersion(context);

	if (
		semver.lt(
			semver.coerce(toVersion) ?? toVersion,
			semver.coerce(fromVersion) ?? fromVersion,
		)
	) {
		throw new Error(
			`Invalid upgrade range: target version "${toVersion}" is older than source version "${fromVersion}".`,
		);
	}

	return { fromVersion, toVersion };
};
