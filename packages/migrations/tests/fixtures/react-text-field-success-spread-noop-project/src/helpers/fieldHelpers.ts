// Exported helper — success key inside return value must NOT be renamed
// (function return tracing is file-scoped in the HTML runner; React does not support it at all)
export function getImportedFieldProps(values: { subject: string }) {
	return {
		label: "imported helper",
		success: values.subject.length > 0,
	};
}
