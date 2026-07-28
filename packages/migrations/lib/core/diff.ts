import type { TextEdit } from "./types.js";

/**
 * Converts the difference between an original string and an updated string into
 * a list of non-overlapping TextEdits. The algorithm is greedy and works well
 * for small, localised changes such as property renames.
 */
export const diffToEdits = (
	original: string,
	updated: string,
	operationId: string,
): TextEdit[] => {
	const edits: TextEdit[] = [];
	let originalIndex = 0;
	let updatedIndex = 0;

	const findNext = (char: string, source: string, start: number): number => {
		for (let index = start; index < source.length; index++) {
			if (source[index] === char) {
				return index;
			}
		}
		return -1;
	};

	while (originalIndex < original.length && updatedIndex < updated.length) {
		if (original[originalIndex] === updated[updatedIndex]) {
			originalIndex++;
			updatedIndex++;
			continue;
		}

		const nextMatchInOriginal = findNext(
			updated[updatedIndex],
			original,
			originalIndex,
		);
		const nextMatchInUpdated = findNext(
			original[originalIndex],
			updated,
			updatedIndex,
		);

		if (nextMatchInOriginal === -1 && nextMatchInUpdated === -1) {
			edits.push({
				start: originalIndex,
				end: original.length,
				replacement: updated.slice(updatedIndex),
				operationId,
			});
			return edits;
		}

		if (
			nextMatchInOriginal === -1 ||
			(nextMatchInUpdated !== -1 &&
				nextMatchInUpdated - updatedIndex < nextMatchInOriginal - originalIndex)
		) {
			edits.push({
				start: originalIndex,
				end: originalIndex,
				replacement: updated.slice(updatedIndex, nextMatchInUpdated),
				operationId,
			});
			updatedIndex = nextMatchInUpdated;
		} else {
			edits.push({
				start: originalIndex,
				end: nextMatchInOriginal,
				replacement: "",
				operationId,
			});
			originalIndex = nextMatchInOriginal;
		}
	}

	if (originalIndex < original.length) {
		edits.push({
			start: originalIndex,
			end: original.length,
			replacement: "",
			operationId,
		});
	}

	if (updatedIndex < updated.length) {
		edits.push({
			start: originalIndex,
			end: originalIndex,
			replacement: updated.slice(updatedIndex),
			operationId,
		});
	}

	return edits;
};
