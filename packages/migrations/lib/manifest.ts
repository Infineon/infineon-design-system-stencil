import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { MigrationManifest, MigrationRule, PackageRenameMigration, PropRenameMigration } from "./types.js";
import { isVersionGreaterThanOrEqual } from "./version.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_MANIFEST_PATH = path.resolve(__dirname, "../migrations/v1.json");

const assertString = (value: unknown, label: string): string => {
	if (typeof value !== "string" || value.trim().length === 0) {
		throw new Error(`Invalid manifest: ${label} must be a non-empty string.`);
	}

	return value;
};

const validateMigration = (entry: unknown, index: number): MigrationRule => {
	if (!entry || typeof entry !== "object") {
		throw new Error(`Invalid manifest: migration ${index + 1} must be an object.`);
	}

	const candidate = entry as { type?: unknown };

	if (candidate.type === "package-rename") {
		const c = candidate as Partial<PackageRenameMigration>;
		return {
			type: "package-rename",
			from: assertString(c.from, `migrations[${index}].from`),
			to: assertString(c.to, `migrations[${index}].to`),
		};
	}

	if (candidate.type === "prop-rename") {
		const c = candidate as Partial<PropRenameMigration>;
		return {
			type: "prop-rename",
			component: assertString(c.component, `migrations[${index}].component`),
			from: assertString(c.from, `migrations[${index}].from`),
			to: assertString(c.to, `migrations[${index}].to`),
			targetVersion:
				typeof c.targetVersion === "string" && c.targetVersion.trim().length > 0
					? c.targetVersion
					: undefined,
			notes:
				typeof c.notes === "string" && c.notes.trim().length > 0
					? c.notes
					: undefined,
		};
	}

	throw new Error(
		`Invalid manifest: migration ${index + 1} has an unsupported type "${String(candidate.type)}".`,
	);
};

export const loadManifest = async (configPath?: string): Promise<MigrationManifest> => {
	const manifestPath = configPath ? path.resolve(configPath) : DEFAULT_MANIFEST_PATH;
	const rawContent = await readFile(manifestPath, "utf8");
	const parsed = JSON.parse(rawContent) as Partial<MigrationManifest>;

	if (parsed.schemaVersion !== 1) {
		throw new Error("Invalid manifest: schemaVersion must be 1.");
	}

	if (!Array.isArray(parsed.migrations)) {
		throw new Error("Invalid manifest: migrations must be an array.");
	}

	return {
		schemaVersion: parsed.schemaVersion,
		migrations: parsed.migrations.map((entry, index) => validateMigration(entry, index)),
	};
};

export const filterManifestByTargetVersion = (
	manifest: MigrationManifest,
	targetVersion?: string,
): MigrationManifest => {
	if (!targetVersion) {
		return manifest;
	}

	return {
		...manifest,
		migrations: manifest.migrations.filter(
			(rule) =>
				rule.type === "package-rename" ||
				!rule.targetVersion ||
				isVersionGreaterThanOrEqual(targetVersion, rule.targetVersion),
		),
	};
};