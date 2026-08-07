const { DiagnosticCode } = require("./diagnostic-codes.js");

function deduplicateEdits(edits) {
	const deduplicated = [];
	for (const edit of edits) {
		const duplicate = deduplicated.find(
			(existing) =>
				existing.start === edit.start &&
				existing.end === edit.end &&
				existing.replacement === edit.replacement,
		);
		if (!duplicate) {
			deduplicated.push(edit);
		}
	}
	return deduplicated;
}

function validateEdits(content, edits, filePath) {
	const diagnostics = [];
	for (const edit of edits) {
		if (!Number.isInteger(edit.start) || !Number.isInteger(edit.end)) {
			diagnostics.push({
				code: DiagnosticCode.OVERLAPPING_EDITS,
				severity: "error",
				message: `Edit for operation ${edit.operationId} has non-integer offsets.`,
				operationId: edit.operationId,
				filePath,
				start: edit.start,
				end: edit.end,
			});
			continue;
		}

		if (edit.start < 0 || edit.end < 0) {
			diagnostics.push({
				code: DiagnosticCode.OVERLAPPING_EDITS,
				severity: "error",
				message: `Edit for operation ${edit.operationId} has negative offsets.`,
				operationId: edit.operationId,
				filePath,
				start: edit.start,
				end: edit.end,
			});
		}

		if (edit.start > edit.end) {
			diagnostics.push({
				code: DiagnosticCode.OVERLAPPING_EDITS,
				severity: "error",
				message: `Edit for operation ${edit.operationId} has inverted range.`,
				operationId: edit.operationId,
				filePath,
				start: edit.start,
				end: edit.end,
			});
		}

		if (edit.end > content.length) {
			diagnostics.push({
				code: DiagnosticCode.OVERLAPPING_EDITS,
				severity: "error",
				message: `Edit for operation ${edit.operationId} is out of bounds.`,
				operationId: edit.operationId,
				filePath,
				start: edit.start,
				end: edit.end,
			});
		}
	}

	const deduplicated = deduplicateEdits(edits);
	for (let index = 0; index < deduplicated.length; index++) {
		for (let other = index + 1; other < deduplicated.length; other++) {
			const left = deduplicated[index];
			const right = deduplicated[other];
			if (left.start < right.end && right.start < left.end) {
				diagnostics.push({
					code: DiagnosticCode.OVERLAPPING_EDITS,
					severity: "error",
					message: `Overlapping edits from operations ${left.operationId} and ${right.operationId}.`,
					operationId: left.operationId,
					filePath,
					start: left.start,
					end: left.end,
				});
			}
		}
	}

	return diagnostics;
}

function applyEdits(content, edits) {
	const diagnostics = validateEdits(content, edits);
	if (diagnostics.some((diagnostic) => diagnostic.severity === "error")) {
		return {
			content,
			diagnostics,
		};
	}

	const deduplicated = deduplicateEdits(edits);
	const sortedEdits = [...deduplicated].sort((left, right) => right.start - left.start);
	let updatedContent = content;
	for (const edit of sortedEdits) {
		updatedContent = `${updatedContent.slice(0, edit.start)}${edit.replacement}${updatedContent.slice(edit.end)}`;
	}

	return {
		content: updatedContent,
		diagnostics: [],
	};
}

module.exports = {
	deduplicateEdits,
	validateEdits,
	applyEdits,
};
