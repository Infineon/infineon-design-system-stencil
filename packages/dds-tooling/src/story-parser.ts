import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { setupDOM } from "./dom-utils.js";
import { htmlToElement, renderStoryToHTML } from "./story-renderer.js";
import type {
  ComponentEvent,
  ComponentInfo,
  ComponentStructure,
  ParsedStory,
  StoryExport,
  StoryMetadata,
} from "./types.js";

// Ensure DOM is set up before parsing stories
setupDOM();

/**
 * Enriches a component structure with property values from story args
 * This handles cases where Lit property bindings (.prop=) aren't reflected in HTML attributes
 */
function enrichStructureWithArgs(
  structure: ComponentStructure,
  args: Record<string, unknown>
): void {
  // For each arg that is an array or object, check if it should be added as an attribute
  for (const [key, value] of Object.entries(args)) {
    // Skip null, undefined, or primitive values
    if (value == null || typeof value !== "object") {
      continue;
    }

    // Convert camelCase arg name to kebab-case attribute name
    const attrName = key.replace(/([A-Z])/g, "-$1").toLowerCase();

    // If this attribute doesn't exist yet, add it as a JSON string
    if (!(attrName in structure.attributes)) {
      structure.attributes[attrName] = JSON.stringify(value);
    }
  }
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
      `Element does not have a tagName property. Received: ${typeof element}, value: ${JSON.stringify(element)}`
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
  argTypes: Record<string, unknown>
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
      const category = argType.table?.category || "";
      let componentMatch = category.match(/^(ifx-[\w-]+)/);
      let sourceComponent = componentMatch ? componentMatch[1] : null;

      // If not found in category, try to extract from description
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
 * Renders a story module to HTML (for MCP server use case)
 * Returns array of rendered stories with their names
 */
export async function renderStoriesToHTML(
  storyModule: Record<string, unknown>,
  options: {
    preferredStories?: string[];
    renderAll?: boolean;
  } = {}
): Promise<ParsedStory[]> {
  const renderedStories: ParsedStory[] = [];

  // Get the default export (story metadata)
  const storyMeta = (storyModule.default as StoryMetadata) || {};
  const defaultArgs = storyMeta.args || {};

  // Get all exported stories (excluding 'default')
  const storyExports = Object.keys(storyModule).filter(
    (key) => key !== "default"
  );

  if (storyExports.length === 0) {
    return [];
  }

  // Fallback story names to prefer
  const fallbackNames = [
    "Default",
    "Single",
    "Primary",
    "Basic",
    "Medium",
    "DefaultState",
  ];

  // Select which stories to render
  const storiesToRender = new Set<string>();

  if (options.preferredStories && options.preferredStories.length > 0) {
    // Use specified stories
    for (const name of options.preferredStories) {
      if (storyExports.includes(name)) {
        storiesToRender.add(name);
      }
    }
  } else if (!options.renderAll) {
    // Try to find at least one fallback story
    for (const fallbackName of fallbackNames) {
      if (storyExports.includes(fallbackName)) {
        storiesToRender.add(fallbackName);
        break; // Only use the first matching fallback
      }
    }
  }

  // If no stories selected and renderAll is true, render all
  if (storiesToRender.size === 0 && options.renderAll) {
    for (const name of storyExports) {
      storiesToRender.add(name);
    }
  }

  // If still no stories, use the fallback logic from example-generator
  if (storiesToRender.size === 0) {
    for (const fallbackName of fallbackNames) {
      if (storyExports.includes(fallbackName)) {
        storiesToRender.add(fallbackName);
        break;
      }
    }
  }

  // Render each selected story
  for (const storyName of storiesToRender) {
    const storyExport = storyModule[storyName];
    const html = renderStoryToHTML(storyExport as StoryExport, defaultArgs);

    if (html) {
      // Parse to element and unwrap if needed
      const element = htmlToElement(html, true);
      if (element) {
        renderedStories.push({ name: storyName, html: element.outerHTML });
      } else {
        renderedStories.push({ name: storyName, html });
      }
    }
  }

  return renderedStories;
}

/**
 * Extracts complete component information from a story module
 * Returns an array of ComponentInfo, one for each story variant
 * (for example-generator use case)
 */
export async function extractComponentInfo(
  storyPath: string,
  storyNames?: string[]
): Promise<ComponentInfo[]> {
  try {
    // Convert relative path to absolute path from current working directory
    // This ensures the path is correctly resolved regardless of where dds-tooling is located
    const absolutePath = resolve(process.cwd(), storyPath);
    const fileUrl = pathToFileURL(absolutePath).href;
    
    // Dynamic import of the story module using file URL
    const storyModule = await import(fileUrl);
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
          `None of the specified stories [${storyNames.join(", ")}] found in ${storyPath}`
        );
      }
    } else {
      // Fallback: Try multiple story exports
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
          `No Default/Single/Primary/Basic/Medium/DefaultState export found in ${storyPath}`
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

      // Render the story to HTML
      const html = renderStoryToHTML(StoryExport, args);

      if (!html) {
        throw new Error(
          `Story function returned undefined or null. Story path: ${storyPath}, Story: ${usedStoryName}`
        );
      }

      // Parse HTML string into DOM element
      const element = htmlToElement(html, true);

      if (!element) {
        throw new Error(
          `Failed to parse HTML string into DOM element. HTML: ${html}`
        );
      }

      // Parse the structure
      const structure = parseElement(element);

      // Enrich structure with property values from args
      // This handles cases where Lit property bindings (.prop=) aren't reflected in HTML
      enrichStructureWithArgs(structure, args);

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
      `Failed to extract component info from ${storyPath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
