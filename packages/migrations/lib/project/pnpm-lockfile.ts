import { readFile } from "node:fs/promises";
import path from "node:path";
import semver from "semver";
import YAML from "yaml";

import { readTextFile } from "./file-system.js";

const LOCKFILE_NAME = "pnpm-lock.yaml";

interface PnpmLockfile {
	packages?: Record<string, PnpmLockfilePackageEntry>;
	importers?: Record<string, PnpmLockfileImporter>;
}

interface PnpmLockfilePackageEntry {
	resolution?: {
		type?: string;
	};
}

interface PnpmLockfileImporter {
	dependencies?: Record<string, PnpmLockfileDependencySpec>;
	devDependencies?: Record<string, PnpmLockfileDependencySpec>;
	optionalDependencies?: Record<string, PnpmLockfileDependencySpec>;
}

interface PnpmLockfileDependencySpec {
	specifier: string;
	version: string;
}

const findLockfilePath = async (cwd: string): Promise<string | null> => {
	let currentDirectory = path.resolve(cwd);

	while (true) {
		const candidate = path.join(currentDirectory, LOCKFILE_NAME);

		try {
			await readFile(candidate);
			return candidate;
		} catch {
			const parentDirectory = path.dirname(currentDirectory);
			if (parentDirectory === currentDirectory) {
				return null;
			}

			currentDirectory = parentDirectory;
		}
	}
};

const deriveImporterId = (cwd: string, lockfileDirectory: string): string => {
	const resolvedCwd = path.resolve(cwd);
	const resolvedLockfileDirectory = path.resolve(lockfileDirectory);

	if (resolvedCwd === resolvedLockfileDirectory) {
		return ".";
	}

	const relativePath = path.relative(resolvedLockfileDirectory, resolvedCwd);
	return relativePath.split(path.sep).join("/");
};

const extractVersion = (candidate: string): string | undefined => {
	const trimmed = candidate.trim();
	return semver.valid(trimmed) ?? undefined;
};

const extractVersionFromPackageKey = (
	packageKey: string,
): string | undefined => {
	// Package keys look like: package@version, package@npm:alias@version, /package/version
	const match = packageKey.match(/@(\d+\.\d+\.\d+[^@]*)$/);
	return extractVersion(match?.[1] ?? "");
};

export const resolvePnpmInstalledVersion = async (
	cwd: string,
	packageName: string,
): Promise<string | undefined> => {
	const lockfilePath = await findLockfilePath(cwd);
	if (!lockfilePath) {
		return undefined;
	}

	const content = await readTextFile(lockfilePath);
	const parsed = YAML.parse(content) as PnpmLockfile;

	// Prefer the importer dependency specifiers for the importer matching cwd.
	const lockfileDirectory = path.dirname(lockfilePath);
	const importerId = deriveImporterId(cwd, lockfileDirectory);
	const importer = parsed.importers?.[importerId];
	if (importer) {
		const allDeps = {
			...importer.dependencies,
			...importer.devDependencies,
			...importer.optionalDependencies,
		};

		const spec = allDeps[packageName];
		if (spec) {
			const fromVersion = extractVersion(spec.version);
			if (fromVersion) {
				return fromVersion;
			}
		}
	}

	// Fallback to scanning the packages map for an unambiguous installed version.
	if (parsed.packages) {
		const prefix = `${packageName}@`;
		const matchingVersions = new Set<string>();

		for (const key of Object.keys(parsed.packages)) {
			if (key.startsWith(prefix)) {
				const version = extractVersionFromPackageKey(key);
				if (version) {
					matchingVersions.add(version);
				}
			}
		}

		if (matchingVersions.size === 1) {
			return [...matchingVersions][0];
		}
	}

	return undefined;
};
