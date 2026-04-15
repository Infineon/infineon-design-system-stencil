import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import type { MigrationManifest, MigrationRule, RenameOperation } from "./types.js";
import { isVersionGreaterThanOrEqual } from "./version.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_MANIFEST_PATH = path.resolve(__dirname, "../migrations/v1.json");

const assertString = (value: unknown, label: string): string => {
	if (typeof value !== "string" || value.trim().length === 0) {
		throw new Error(`Invalid manifest: ${label} must be a non-empty string.`);
	}

	return value;
};

const SUPPORTED_OPERATION_TYPES = new Set(["prop-rename"] as const);

const validateOperation = (
	operation: unknown,
	ruleIndex: number,
	operationIndex: number,
): RenameOperation => {
	if (!operation || typeof operation !== "object") {
		throw new Error(
			`Invalid manifest: operation ${operationIndex + 1} in migration ${ruleIndex + 1} must be an object.`,
		);
	}

	const candidate = operation as Partial<RenameOperation>;
	if (!SUPPORTED_OPERATION_TYPES.has(candidate.type as "prop-rename")) {
		throw new Error(
			`Invalid manifest: operation ${operationIndex + 1} in migration ${ruleIndex + 1} has an unsupported type.`,
		);
	}

	return {
		type: candidate.type,
		from: assertString(candidate.from, `migrations[${ruleIndex}].operations[${operationIndex}].from`),
		to: assertString(candidate.to, `migrations[${ruleIndex}].operations[${operationIndex}].to`),
		} as RenameOperation;
};

const validateRule = (rule: unknown, ruleIndex: number): MigrationRule => {
	if (!rule || typeof rule !== "object") {
		throw new Error(`Invalid manifest: migration ${ruleIndex + 1} must be an object.`);
	}

	const candidate = rule as Partial<MigrationRule>;
	if (!Array.isArray(candidate.operations)) {
		throw new Error(`Invalid manifest: migration ${ruleIndex + 1} must define an operations array.`);
	}

	return {
		component: assertString(candidate.component, `migrations[${ruleIndex}].component`),
		operations: candidate.operations.map((operation, operationIndex) =>
			validateOperation(operation, ruleIndex, operationIndex),
		),
		notes:
			typeof candidate.notes === "string" && candidate.notes.trim().length > 0
				? candidate.notes
				: undefined,
		targetVersion:
			typeof candidate.targetVersion === "string" &&
			candidate.targetVersion.trim().length > 0
				? candidate.targetVersion
				: undefined,
	};
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
		migrations: parsed.migrations.map((rule, ruleIndex) => validateRule(rule, ruleIndex)),
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
			(rule) => !rule.targetVersion || isVersionGreaterThanOrEqual(targetVersion, rule.targetVersion),
		),
	};
};