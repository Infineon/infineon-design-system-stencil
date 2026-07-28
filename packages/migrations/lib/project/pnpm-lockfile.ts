import { readFile } from "node:fs/promises";
import path from "node:path";
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

const extractVersionFromSpecifier = (specifier: string): string | undefined => {
	const match = specifier.match(/\d+\.\d+\.\d+.*/);
	return match?.[0];
};

const extractVersionFromPackageKey = (packageKey: string): string | undefined => {
	// Package keys look like: package@version, package@npm:alias@version, /package/version
	const match = packageKey.match(/@(\d+\.\d+\.\d+[^@]*)$/);
	return match?.[1];
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

	// Prefer the importer dependency specifiers for the root importer.
	const rootImporter = parsed.importers?.["."];
	if (rootImporter) {
		const allDeps = {
			...rootImporter.dependencies,
			...rootImporter.devDependencies,
			...rootImporter.optionalDependencies,
		};

		const spec = allDeps[packageName];
		if (spec) {
			const fromSpecifier = extractVersionFromSpecifier(spec.specifier);
			if (fromSpecifier) {
				return fromSpecifier;
			}

			const fromVersion = extractVersionFromSpecifier(spec.version);
			if (fromVersion) {
				return fromVersion;
			}
		}
	}

	// Fallback to scanning the packages map for an installed version.
	if (parsed.packages) {
		for (const key of Object.keys(parsed.packages)) {
			if (key.startsWith(`${packageName}@`)) {
				const version = extractVersionFromPackageKey(key);
				if (version) {
					return version;
				}
			}
		}
	}

	return undefined;
};
