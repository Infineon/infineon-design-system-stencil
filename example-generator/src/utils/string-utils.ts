/**
 * String utility functions for code generation
 */

/**
 * Convert kebab-case to PascalCase
 * Example: ifx-switch -> IfxSwitch
 */
export function toPascalCase(str: string): string {
	return str
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("");
}

/**
 * Convert kebab-case to camelCase
 * Example: aria-level -> ariaLevel
 */
export function toCamelCase(str: string): string {
	return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Convert event name to React handler name
 * Example: ifxChange -> onIfxChange
 */
export function toReactEventName(eventName: string): string {
	return `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`;
}

/**
 * Convert event name to handler function name
 * Example: ifxChange -> handleChange
 */
export function toHandlerFunctionName(eventName: string): string {
	const withoutPrefix = eventName.replace(/^ifx/, "");
	return `handle${withoutPrefix.charAt(0).toUpperCase()}${withoutPrefix.slice(1)}`;
}

/**
 * Convert event name to Angular event name
 * Example: ifxChange -> ifxChange (Angular uses kebab-case in template)
 */
export function toAngularEventName(eventName: string): string {
	// Angular event binding uses the event name as-is in camelCase
	return eventName;
}

/**
 * Escape HTML for display in code blocks
 */
export function escapeHTML(html: string): string {
	return html
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

/**
 * Add indentation to each line of text
 */
export function indent(
	text: string,
	indentStr: string,
	skipFirstLine = false,
): string {
	const lines = text.split("\n");
	return lines
		.map((line, index) => {
			if (index === 0 && skipFirstLine) return line;
			if (line.trim() === "") return "";
			return indentStr + line;
		})
		.join("\n");
}

/**
 * Escape regex special characters
 */
export function escapeRegex(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Format component title with story name if not default
 * Example: ("Button", "Primary") -> "Button - Primary"
 * Example: ("Button", "Default") -> "Button"
 */
export function formatTitle(
	title: string | undefined,
	component: string,
	storyName?: string,
): string {
	const baseTitle = title || component;

	// Don't add story name if it's "Default" or undefined
	if (!storyName || storyName === "Default") {
		return baseTitle;
	}

	return `${baseTitle} - ${storyName}`;
}

/**
 * Escape a string for safe embedding inside a JS template literal (backtick-delimited).
 * Escapes backslashes first, then backticks and dollar signs.
 */
export function escapeForTemplateLiteral(str: string): string {
	return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

/**
 * Escape a string for safe embedding inside a single-quoted attribute/value.
 * Escapes backslashes first, then single quotes.
 */
export function escapeForSingleQuotedAttr(str: string): string {
	return str.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
