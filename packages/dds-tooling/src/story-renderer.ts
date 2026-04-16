import { render } from "@lit-labs/ssr";
import { collectResultSync } from "@lit-labs/ssr/lib/render-result.js";
import type { StoryExport } from "./types.js";
import { cleanLitHTML, unwrapComponent } from "./utils/html-utils.js";

/**
 * Renders a single story export to HTML string
 * Handles CSF2 (function exports) and CSF3 (object with render function)
 *
 * @param storyExport - The story export (function or object with render)
 * @param args - Arguments to pass to the story
 * @returns HTML string or null if rendering failed
 */
export function renderStoryToHTML(
	storyExport:
		| StoryExport
		| {
				render: (args: Record<string, unknown>) => unknown;
				args?: Record<string, unknown>;
		  },
	args: Record<string, unknown>,
): string | null {
	// Handle both CSF2 (function) and CSF3 (object with render) formats
	let result: unknown;

	if (typeof storyExport === "function") {
		// CSF2: Story is a function
		result = storyExport(args);
	} else if (
		storyExport &&
		typeof storyExport === "object" &&
		"render" in storyExport
	) {
		// CSF3: Story is an object with a render function
		// Merge story-specific args with default args
		const storyArgs = { ...args, ...(storyExport.args || {}) };
		result = storyExport.render(storyArgs);
	} else {
		return null;
	}

	if (!result) {
		return null;
	}

	let html: string;

	// Handle Lit TemplateResult
	if (result && typeof result === "object" && "_$litType$" in result) {
		const ssrResult = render(result);
		html = collectResultSync(ssrResult);
		html = cleanLitHTML(html);
	}
	// Handle string template
	else if (typeof result === "string") {
		html = result;
	}
	// Handle DOM element
	else if (result && typeof result === "object" && "outerHTML" in result) {
		html = (result as Element).outerHTML;
	} else {
		return null;
	}

	return html;
}

/**
 * Converts HTML string to DOM element and optionally unwraps it
 *
 * @param html - HTML string to parse
 * @param unwrap - Whether to unwrap wrapper divs
 * @returns DOM Element or null
 */
export function htmlToElement(html: string, unwrap = true): Element | null {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = html.trim();
	let element = tempDiv.firstElementChild;

	if (!element) {
		return null;
	}

	// Unwrap wrapper divs if requested
	if (unwrap) {
		element = unwrapComponent(element);
	}

	return element;
}
