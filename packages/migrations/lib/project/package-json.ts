import type { ResolvedPackageJson } from "./file-system.js";

export interface PackageJsonDependencies {
	dependencies: Record<string, string>;
	hasDependency: (name: string) => boolean;
	getDeclaredVersion: (name: string) => string | undefined;
}

const mergeDependencyFields = (packageJson: Record<string, unknown>): Record<string, string> => {
	const merged: Record<string, string> = {};
	const fields = ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"];

	for (const field of fields) {
		const value = packageJson[field];
		if (value && typeof value === "object" && !Array.isArray(value)) {
			Object.assign(merged, value as Record<string, string>);
		}
	}

	return merged;
};

export const readPackageJsonDependencies = (
	resolved: ResolvedPackageJson | null,
): PackageJsonDependencies => {
	const dependencies = resolved ? mergeDependencyFields(resolved.packageJson) : {};

	return {
		dependencies,
		hasDependency: (name: string) => Boolean(dependencies[name]),
		getDeclaredVersion: (name: string) => dependencies[name],
	};
};

export const isExactVersion = (value: string): boolean => /^\d+\.\d+\.\d+/.test(value.trim());
