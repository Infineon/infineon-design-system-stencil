/**
 * Shared replacement helpers used by all migration passes.
 */

/**
 * @param {string} value
 * @returns {string}
 */
function kebabToCamelCase(value) {
	return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Append a replacement to the list, deduplicating identical entries.
 *
 * @param {{ start: number, end: number, text: string, label: string }[]} replacements
 * @param {number} start
 * @param {number} end
 * @param {string} text
 * @param {string} label
 */
function pushReplacement(replacements, start, end, text, label) {
	if (
		replacements.some(
			(replacement) =>
				replacement.start === start && replacement.end === end && replacement.text === text,
		)
	) {
		return;
	}

	replacements.push({ start, end, text, label });
}

/**
 * Apply a sorted list of non-overlapping replacements to a string, from last to first
 * so that earlier offsets stay valid.
 *
 * @param {string} content
 * @param {{ start: number, end: number, text: string }[]} replacements
 * @returns {string}
 */
function applyReplacements(content, replacements) {
	return [...replacements]
		.sort((left, right) => right.start - left.start)
		.reduce(
			(currentContent, replacement) =>
				`${currentContent.slice(0, replacement.start)}${replacement.text}${currentContent.slice(replacement.end)}`,
			content,
		);
}

module.exports = { kebabToCamelCase, pushReplacement, applyReplacements };
