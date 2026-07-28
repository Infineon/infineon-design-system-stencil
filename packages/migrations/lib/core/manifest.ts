import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import semver from "semver";

import { validateRenamePropOperation } from "../operations/rename-prop/validate.js";
import type { MigrationManifest, MigrationOperation, MigrationRelease, PropRenameMigration } from "./types.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_MANIFEST_PATH = path.resolve(__dirname, "../migrations/manifest.json");

const assertString = (value: unknown, label: string): string => {
	if (typeof value !== "string" || value.trim().length === 0) {
		throw new Error(`Invalid manifest: ${label} must be a non-empty string.`);
	}

	return value;
};

const assertNonEmptyObject = (value: unknown, label: string): Record<string, unknown> => {
	if (!value || typeof value !== "object" || Array.isArray(value)) {
		throw new Error(`Invalid manifest: ${label} must be an object.`);
	}

	return value as Record<string, unknown>;
};

const validateOperation = (
	operation: unknown,
	releaseVersion: string,
	operationIndex: number,
	seenIds: Set<string>,
	seenRenames: Map<string, string>,
): MigrationOperation => {
	const candidate = assertNonEmptyObject(
		operation,
		`releases[${releaseVersion}].operations[${operationIndex}]`,
	);

	const type = assertString(
		candidate.type,
		`releases[${releaseVersion}].operations[${operationIndex}].type`,
	);

	switch (type) {
		case "rename-prop": {
			const validated = validateRenamePropOperation(
				operation,
				releaseVersion,
				operationIndex,
				seenIds,
				seenRenames,
			);
			return validated.operation;
		}
		default:
			throw new Error(
				`Invalid manifest: release ${releaseVersion} operation ${operationIndex + 1} has unsupported type "${type}".`,
			);
	}
};

const validateRelease = (
	release: unknown,
	index: number,
	seenVersions: Set<string>,
	seenIds: Set<string>,
	seenRenames: Map<string, string>,
): MigrationRelease => {
	const candidate = assertNonEmptyObject(release, `releases[${index}]`);
	const version = assertString(candidate.version, `releases[${index}].version`);

	if (!semver.valid(version)) {
		throw new Error(`Invalid manifest: releases[${index}].version "${version}" is not a valid semantic version.`);
	}

	if (seenVersions.has(version)) {
		throw new Error(`Invalid manifest: duplicate release version "${version}".`);
	}

	seenVersions.add(version);

	if (!Array.isArray(candidate.operations)) {
		throw new Error(`Invalid manifest: releases[${index}].operations must be an array.`);
	}

	const operations = candidate.operations.map((operation, operationIndex) =>
		validateOperation(operation, version, operationIndex, seenIds, seenRenames),
	);

	return { version, operations };
};

export const loadManifest = async (configPath?: string): Promise<MigrationManifest> => {
	const manifestPath = configPath ? path.resolve(configPath) : DEFAULT_MANIFEST_PATH;
	const rawContent = await readFile(manifestPath, "utf8");
	const parsed = JSON.parse(rawContent) as Partial<MigrationManifest>;

	if (parsed.schemaVersion !== 1) {
		throw new Error("Invalid manifest: schemaVersion must be 1.");
	}

	if (!Array.isArray(parsed.releases)) {
		throw new Error("Invalid manifest: releases must be an array.");
	}

	const seenVersions = new Set<string>();
	const seenIds = new Set<string>();
	const seenRenames = new Map<string, string>();

	const releases = parsed.releases.map((release, index) =>
		validateRelease(release, index, seenVersions, seenIds, seenRenames),
	);

	return Object.freeze({
		schemaVersion: parsed.schemaVersion,
		releases: Object.freeze(
			releases.map((release) =>
				Object.freeze({
					...release,
					operations: Object.freeze(release.operations),
				}),
			),
		),
	});
};

export const flattenManifest = (manifest: MigrationManifest): PropRenameMigration[] => {
	const migrations: PropRenameMigration[] = [];

	for (const release of manifest.releases) {
		for (const operation of release.operations) {
			if (operation.type !== "rename-prop") {
				continue;
			}

			migrations.push({
				type: "prop-rename",
				component: operation.component,
				from: operation.from,
				to: operation.to,
				targetVersion: release.version,
				notes: operation.notes,
			});
		}
	}

	return migrations;
};