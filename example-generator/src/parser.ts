import { render } from "@lit-labs/ssr";
import { JSDOM } from "jsdom";
import type {
	ComponentEvent,
	ComponentInfo,
	ComponentStructure,
	StoryExport,
	StoryMetadata,
} from "./types.js";

// Ensure DOM is set up before parsing stories
let isDomSetup = false;
setupDOM();

export function setupDOM(): void {
	if (isDomSetup) return;

	const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>", {
		url: "http://localhost",
	});

	global.document = dom.window.document as unknown as Document;
	global.window = dom.window as unknown as Window & typeof globalThis;

	isDomSetup = true;
}

/**
 * Recursively parses a DOM element into a structured format
 */
export function parseElement(element: Element): ComponentStructure {
	if (!element) {
		throw new Error("parseElement received undefined or null element");
	}

	if (!element.tagName) {
		throw new Error(
			`Element does not have a tagName property. Received: ${typeof element}, value: ${JSON.stringify(element)}`,
		);
	}

	const structure: ComponentStructure = {
		tag: element.tagName.toLowerCase(),
		attributes: {},
		textContent: "",
		children: [],
	};

	// Get attributes
	Array.from(element.attributes).forEach((attr) => {
		// Remove literal newlines and excess whitespace from attribute values
		// HTML attributes should not contain literal newlines
		structure.attributes[attr.name] = attr.value.replace(/\s+/g, " ").trim();
	});

	// Get direct text content (not from children)
	const directText = Array.from(element.childNodes)
		.filter((node) => node.nodeType === 3) // Text nodes only
		.map((node) => node.textContent?.trim() || "")
		.filter((text) => text.length > 0)
		.join(" ");

	if (directText) {
		structure.textContent = directText;
	}

	// Parse children recursively
	Array.from(element.children).forEach((child) => {
		structure.children.push(parseElement(child));
	});

	return structure;
}

/**
 * Extracts events from story metadata argTypes
 */
export function extractEvents(
	argTypes: Record<string, unknown>,
): ComponentEvent[] {
	const events: ComponentEvent[] = [];

	Object.entries(argTypes || {}).forEach(([key, value]) => {
		if (value && typeof value === "object" && "action" in value) {
			const argType = value as {
				action?: unknown;
				description?: string;
				table?: { category?: string; type?: { detail?: string } };
			};

			// Extract component from table.category if it exists
			// e.g., "ifx-dropdown-menu props" -> "ifx-dropdown-menu"
			const category = argType.table?.category || "";
			let componentMatch = category.match(/^(ifx-[\w-]+)/);
			let sourceComponent = componentMatch ? componentMatch[1] : null;

			// If not found in category, try to extract from description
			// e.g., "Custom event emitted by ifx-dropdown-menu when..." -> "ifx-dropdown-menu"
			if (!sourceComponent && argType.description) {
				componentMatch = argType.description.match(/\b(ifx-[\w-]+)\b/);
				sourceComponent = componentMatch ? componentMatch[1] : null;
			}

			events.push({
				name: key,
				description: argType.description || "",
				patterns: argType.table?.type?.detail,
				sourceComponent,
			});
		}
	});

	return events;
}

/**
 * Extracts complete component information from a story module
 * Returns an array of ComponentInfo, one for each story variant
 */
export async function extractComponentInfo(
	storyPath: string,
	storyNames?: string[],
): Promise<ComponentInfo[]> {
	try {
		// Dynamic import of the story module
		const storyModule = await import(storyPath);

		const metadata: StoryMetadata = storyModule.default || {};

		// Determine which stories to extract
		const storiesToExtract: { name: string; export: StoryExport }[] = [];

		if (storyNames && storyNames.length > 0) {
			// Extract all specified stories that exist
			for (const storyName of storyNames) {
				if (storyModule[storyName]) {
					storiesToExtract.push({
						name: storyName,
						export: storyModule[storyName],
					});
				}
			}
			if (storiesToExtract.length === 0) {
				throw new Error(
					`None of the specified stories [${storyNames.join(", ")}] found in ${storyPath}`,
				);
			}
		} else {
			// Fallback: Try multiple story exports: Default, Single, Primary, Basic, Medium, DefaultState
			const fallbackNames = [
				"Default",
				"Single",
				"Primary",
				"Basic",
				"Medium",
				"DefaultState",
			];
			for (const name of fallbackNames) {
				if (storyModule[name]) {
					storiesToExtract.push({ name, export: storyModule[name] });
					break; // Only take the first one in fallback mode
				}
			}
			if (storiesToExtract.length === 0) {
				throw new Error(
					`No Default/Single/Primary/Basic/Medium/DefaultState export found in ${storyPath}`,
				);
			}
		}

		// Extract info for each story
		const results: ComponentInfo[] = [];

		for (const story of storiesToExtract) {
			const StoryExport = story.export;
			const usedStoryName = story.name;

			// Merge metadata.args (defaults) with StoryExport.args (overrides)
			const args = {
				...(metadata.args || {}),
				...(StoryExport.args || {}),
			};

			// Call the story function to generate the component
			// Handle both CSF2 (function) and CSF3 (object with render) formats
			let componentElement: string | Element | unknown;
			if (typeof StoryExport === "function") {
				// CSF2: Story is a function
				componentElement = StoryExport(args);
			} else if (
				StoryExport &&
				typeof StoryExport === "object" &&
				"render" in StoryExport
			) {
				// CSF3: Story is an object with a render function
				componentElement = StoryExport.render(args);
			} else {
				throw new Error(
					`Story export is not a function or CSF3 object. Story path: ${storyPath}, Story: ${usedStoryName}`,
				);
			}

			if (!componentElement) {
				throw new Error(
					`Story function returned undefined or null. Story path: ${storyPath}, Story: ${usedStoryName}`,
				);
			}

			// If the story returns a Lit TemplateResult, render it using Lit's SSR
			if (
				componentElement &&
				typeof componentElement === "object" &&
				"_$litType$" in componentElement
			) {
				// Lit TemplateResult - use Lit's server-side rendering
				// render() returns an iterable of strings, so we join them
				const htmlParts = [];
				for (const chunk of render(componentElement)) {
					htmlParts.push(chunk);
				}
				let htmlString = htmlParts.join("");

				// Clean up Lit-specific syntax:
				// - Remove ? prefix for boolean attributes (?attr="value" -> attr="value" or remove if false)
				// - Remove . prefix for property bindings (.prop="value" -> prop="value")
				// - Remove @ prefix for event bindings (@event="handler" -> onevent="handler")
				htmlString = htmlString
					// Remove ?attr="false" entirely
					.replace(/\s+\?[\w-]+="false"/g, "")
					// Convert ?attr="true" to just attr
					.replace(/\s+\?(\w+(?:-\w+)*)="true"/g, " $1")
					// Remove ? from other boolean attrs (keep the attr)
					.replace(/\s+\?(\w+(?:-\w+)*)=/g, " $1=")
					// Remove . prefix from property bindings
					.replace(/\s+\.(\w+(?:-\w+)*)=/g, " $1=")
					// Convert @event to onevent
					.replace(/\s+@(\w+(?:-\w+)*)=/g, " on$1=");

				componentElement = htmlString;
			}

			// If the story returns a string, parse it into a DOM element
			if (typeof componentElement === "string") {
				const tempDiv = document.createElement("div");
				tempDiv.innerHTML = componentElement.trim();
				const parsedElement = tempDiv.firstElementChild;

				if (!parsedElement) {
					throw new Error(
						`Failed to parse HTML string into DOM element. HTML: ${componentElement}`,
					);
				}

				componentElement = parsedElement;
			}

			// If the element is a plain wrapper div (no attributes or only event listeners),
			// and has an ifx-* component as first child, use that instead
			if (
				componentElement.tagName.toLowerCase() === "div" &&
				componentElement.children.length > 0
			) {
				// Check if this is a wrapper div (no meaningful attributes except event listeners)
				const hasOnlyEventAttributes = Array.from(
					componentElement.attributes,
				).every((attr) => attr.name.startsWith("on"));
				const firstChild = componentElement.children[0];
				const isIfxComponent = firstChild?.tagName
					.toLowerCase()
					.startsWith("ifx-");

				// If it's a wrapper div with an ifx-* component inside, unwrap it
				if (
					(componentElement.attributes.length === 0 ||
						hasOnlyEventAttributes) &&
					isIfxComponent
				) {
					// Move event listeners from wrapper to the component if needed
					if (hasOnlyEventAttributes) {
						Array.from(componentElement.attributes).forEach((attr) => {
							if (!firstChild.hasAttribute(attr.name)) {
								firstChild.setAttribute(attr.name, attr.value);
							}
						});
					}
					componentElement = firstChild;
				}
			}

			// Parse the structure
			const structure = parseElement(componentElement);

			// Extract events
			const events = extractEvents(metadata.argTypes || {});

			// Remove "Components/" prefix from title if present
			const title =
				metadata.title?.replace(/^Components\//, "") || metadata.title;

			// Build complete component info
			const componentInfo: ComponentInfo = {
				component: metadata.component || structure.tag,
				title,
				storyName: usedStoryName,
				structure,
				events,
				defaultArgs: args,
				argTypes: metadata.argTypes || {},
			};

			results.push(componentInfo);
		}

		return results;
	} catch (error) {
		throw new Error(
			`Failed to extract component info from ${storyPath}: ${error instanceof Error ? error.message : String(error)}`,
		);
	}
}
