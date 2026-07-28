import type { RenamePropOperation } from "../../core/types.js";

export interface RenamePropValidationResult {
	operation: RenamePropOperation;
	key: string;
}

const assertNonEmptyString = (value: unknown, label: string): string => {
	if (typeof value !== "string" || value.trim().length === 0) {
		throw new Error(`Invalid manifest: ${label} must be a non-empty string.`);
	}

	return value;
};

export const validateRenamePropOperation = (
	operation: unknown,
	releaseVersion: string,
	operationIndex: number,
	seenIds: Set<string>,
	seenRenames: Map<string, string>,
): RenamePropValidationResult => {
	if (!operation || typeof operation !== "object") {
		throw new Error(
			`Invalid manifest: release ${releaseVersion} operation ${operationIndex + 1} must be an object.`,
		);
	}

	const candidate = operation as Partial<RenamePropOperation> &
		Record<string, unknown>;

	const id = assertNonEmptyString(
		candidate.id,
		`releases[${releaseVersion}].operations[${operationIndex}].id`,
	);

	if (seenIds.has(id)) {
		throw new Error(`Invalid manifest: duplicate operation id "${id}".`);
	}

	const component = assertNonEmptyString(
		candidate.component,
		`releases[${releaseVersion}].operations[${operationIndex}].component`,
	);
	const from = assertNonEmptyString(
		candidate.from,
		`releases[${releaseVersion}].operations[${operationIndex}].from`,
	);
	const to = assertNonEmptyString(
		candidate.to,
		`releases[${releaseVersion}].operations[${operationIndex}].to`,
	);

	if (from === to) {
		throw new Error(
			`Invalid manifest: operation "${id}" renames "${from}" to itself in component "${component}".`,
		);
	}

	const conflictKey = `${component}#${from}`;
	const existingTarget = seenRenames.get(conflictKey);
	if (existingTarget !== undefined && existingTarget !== to) {
		throw new Error(
			`Invalid manifest: conflicting targets for ${component} property "${from}" (${existingTarget} and ${to}).`,
		);
	}

	seenIds.add(id);
	seenRenames.set(conflictKey, to);

	return {
		operation: {
			id,
			type: "rename-prop",
			component,
			from,
			to,
			notes:
				typeof candidate.notes === "string" && candidate.notes.trim().length > 0
					? candidate.notes
					: undefined,
		},
		key: conflictKey,
	};
};
