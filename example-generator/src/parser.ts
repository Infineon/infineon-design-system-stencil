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

	const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
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
		structure.attributes[attr.name] = attr.value;
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
				table?: { type?: { detail?: string } };
			};
			events.push({
				name: key,
				description: argType.description || "",
				patterns: argType.table?.type?.detail,
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
			let componentElement = StoryExport(args);

			if (!componentElement) {
				throw new Error(
					`Story function returned undefined or null. Story path: ${storyPath}, Story: ${usedStoryName}`,
				);
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
