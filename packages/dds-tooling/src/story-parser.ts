import * as fs from "node:fs";
import * as path from "node:path";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { render } from "@lit-labs/ssr";
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

interface CemTagInfo {
  /** All accepted attribute name variants for whitelist filtering */
  allowedAttributes: Set<string>;
  /** Kebab attribute name → CEM type text (e.g. "boolean", "string", "number") */
  attributeTypes: Map<string, string>;
  /** Events emitted by this element */
  events: ComponentEvent[];
}

let cemCache: Map<string, CemTagInfo> | null = null;

function toKebabCase(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

function findCemPath(): string | null {
  let current = process.cwd();
  for (let i = 0; i < 6; i += 1) {
    const candidate = path.join(current, "packages", "components", "dist", "cem.json");
    if (fs.existsSync(candidate)) return candidate;
    const parent = path.dirname(current);
    if (parent === current) break;
    current = parent;
  }
  return null;
}

function loadCem(): Map<string, CemTagInfo> | null {
  if (cemCache) return cemCache;

  try {
    const cemPath = findCemPath();
    if (!cemPath) return null;

    const cem = JSON.parse(fs.readFileSync(cemPath, "utf-8")) as {
      modules?: Array<{
        declarations?: Array<{
          customElement?: boolean;
          tagName?: string;
          attributes?: Array<{ name?: string; fieldName?: string; type?: { text?: string } }>;
          members?: Array<{ kind?: string; attribute?: string; name?: string; type?: { text?: string } }>;
          events?: Array<{ name?: string; description?: string }>;
        }>;
      }>;
    };

    const map = new Map<string, CemTagInfo>();
    for (const module of cem.modules || []) {
      for (const decl of module.declarations || []) {
        if (!decl.customElement || !decl.tagName) continue;

        const allowed = new Set<string>();
        const attributeTypes = new Map<string, string>();

        for (const attr of decl.attributes || []) {
          // CEM attributes have a canonical kebab `name`
          const kebab = attr.name || (attr.fieldName ? toKebabCase(attr.fieldName) : "");
          if (!kebab) continue;
          allowed.add(kebab);
          if (attr.fieldName) {
            allowed.add(attr.fieldName);
            allowed.add(attr.fieldName.toLowerCase());
          }
          allowed.add(kebab.toLowerCase());
          if (attr.type?.text) {
            attributeTypes.set(kebab, attr.type.text);
          }
        }

        const events: ComponentEvent[] = (decl.events || []).map((ev) => ({
          name: ev.name || "",
          description: ev.description || "",
          sourceComponent: decl.tagName || null,
        }));

        map.set(decl.tagName, { allowedAttributes: allowed, attributeTypes, events });
      }
    }

    cemCache = map;
    return cemCache;
  } catch {
    return null;
  }
}

/** Collect events from CEM for all ifx-* tags present in the component structure */
function extractEventsFromCem(
  structure: ComponentStructure,
  cem: Map<string, CemTagInfo>
): ComponentEvent[] {
  const events: ComponentEvent[] = [];
  const visited = new Set<string>();
  function walk(struct: ComponentStructure) {
    const { tag } = struct;
    if (!visited.has(tag) && tag.startsWith("ifx-")) {
      visited.add(tag);
      const info = cem.get(tag);
      if (info) events.push(...info.events);
    }
    for (const child of struct.children) walk(child);
  }
  walk(structure);
  return events;
}

/** Build propTypes map (tag → kebab-attr-name → type text) for all tags in the structure */
function buildPropTypesFromCem(
  structure: ComponentStructure,
  cem: Map<string, CemTagInfo>
): Record<string, Record<string, string>> {
  const result: Record<string, Record<string, string>> = {};
  function walk(struct: ComponentStructure) {
    const { tag } = struct;
    if (!(tag in result) && tag.startsWith("ifx-")) {
      const info = cem.get(tag);
      if (info) {
        result[tag] = Object.fromEntries(info.attributeTypes);
      }
    }
    for (const child of struct.children) walk(child);
  }
  walk(structure);
  return result;
}

function isDomElement(value: unknown): value is Element {
  return (
    typeof value === "object" &&
    value !== null &&
    "tagName" in value &&
    "attributes" in value &&
    "children" in value
  );
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

      // Call the story function to generate the component
      // Handle both CSF2 (function) and CSF3 (object with render) formats
      let componentElement: string | Element | unknown;
      if (typeof StoryExport === "function") {
        // CSF2: Story is a function
        componentElement = StoryExport(args);
      } else if (
        StoryExport &&
        typeof StoryExport === "object" &&
        "render" in StoryExport &&
        typeof (StoryExport as { render?: unknown }).render === "function"
      ) {
        // CSF3: Story is an object with a render function
        componentElement = (StoryExport as { render: (args: Record<string, unknown>) => unknown }).render(args);
      } else {
        throw new Error(
          `Story export is not a function or CSF3 object. Story path: ${storyPath}, Story: ${usedStoryName}`
        );
      }

      if (!componentElement) {
        throw new Error(
          `Story function returned undefined or null. Story path: ${storyPath}, Story: ${usedStoryName}`
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
            `Failed to parse HTML string into DOM element. HTML: ${componentElement}`
          );
        }

        componentElement = parsedElement;
      }

      if (!isDomElement(componentElement)) {
        throw new Error(
          `Story did not resolve to a DOM element. Story path: ${storyPath}, Story: ${usedStoryName}`
        );
      }

      let resolvedElement: Element = componentElement;

      // If the element is a plain wrapper div (no attributes or only event listeners),
      // and has an ifx-* component as first child, use that instead
      if (
        resolvedElement.tagName.toLowerCase() === "div" &&
        resolvedElement.children.length > 0
      ) {
        // Check if this is a wrapper div (no meaningful attributes except event listeners)
        const hasOnlyEventAttributes = Array.from(
          resolvedElement.attributes
        ).every((attr) => attr.name.startsWith("on"));
        const firstChild = resolvedElement.children[0];
        const isIfxComponent = firstChild?.tagName
          .toLowerCase()
          .startsWith("ifx-");

        // If it's a wrapper div with an ifx-* component inside, unwrap it
        if (
          (resolvedElement.attributes.length === 0 ||
            hasOnlyEventAttributes) &&
          isIfxComponent
        ) {
          // Move event listeners from wrapper to the component if needed
          if (hasOnlyEventAttributes) {
            Array.from(resolvedElement.attributes).forEach((attr) => {
              if (!firstChild.hasAttribute(attr.name)) {
                firstChild.setAttribute(attr.name, attr.value);
              }
            });
          }
          resolvedElement = firstChild;
        }
      }

      // Parse the structure
      const structure = parseElement(resolvedElement);

      const cem = loadCem();
      const cemTagInfo = cem?.get(structure.tag);

      // Merge story args into attributes that are not already serialized as HTML attrs.
      // Only include args that exist in CEM (to exclude story-only controls like "amountOfItems").
      if (cemTagInfo) {
        Object.entries(args).forEach(([key, value]) => {
          if (value === undefined || value === null) return;
          if (typeof value === "function") return;
          const kebabKey = toKebabCase(key);
          if (
            !cemTagInfo.allowedAttributes.has(key) &&
            !cemTagInfo.allowedAttributes.has(kebabKey) &&
            !cemTagInfo.allowedAttributes.has(key.toLowerCase()) &&
            !cemTagInfo.allowedAttributes.has(kebabKey.toLowerCase())
          ) {
            return;
          }
          if (key in structure.attributes || kebabKey in structure.attributes) return;

          let normalized: string | null = null;
          if (typeof value === "string") {
            normalized = value;
          } else if (typeof value === "number" || typeof value === "boolean") {
            normalized = String(value);
          } else if (Array.isArray(value) || typeof value === "object") {
            normalized = `__JSON__${JSON.stringify(value)}`;
          }
          if (normalized !== null) {
            structure.attributes[kebabKey] = normalized;
          }
        });
      }

      const events = cem ? extractEventsFromCem(structure, cem) : [];
      const propTypes = cem ? buildPropTypesFromCem(structure, cem) : {};
      const title = metadata.title?.replace(/^Components\//, "") || metadata.title;

      results.push({
        component: metadata.component || structure.tag,
        title,
        storyName: usedStoryName,
        structure,
        events,
        defaultArgs: args,
        propTypes,
      });
    }

    return results;
  } catch (error) {
    throw new Error(
      `Failed to extract component info from ${storyPath}: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
