import type { FormatOptions, ICodeFormatter } from "../interfaces.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import { escapeHTML, formatTitle } from "../utils/string-utils.js";

/**
 * Formats components into HTML/Web Component code
 */
export class HTMLCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to HTML
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "        " } = options;

		return `
    <!-- ${component.component.toUpperCase()} Example -->
    <section id="${component.component}-example" class="component-example">
      <h2>${formatTitle(component.title, component.component, component.storyName)}</h2>
      <div class="demo">
${this.structureToHTML(component.structure, indent)}
      </div>
      <details class="code-details">
        <summary>View Code</summary>
        <pre><code class="language-markup">${escapeHTML(this.structureToHTML(component.structure, ""))}</code></pre>
      </details>
    </section>
`;
	}

	/**
	 * Format event handlers for HTML
	 */
	formatEventHandlers(
		component: ComponentInfo,
		_options: FormatOptions,
	): string {
		if (component.events.length === 0) return "";

		const handlers = component.events
			.map((event) => {
				const elementSelector = `document.querySelector('#${component.component}-example ${component.component}')`;

				return `  // ${event.description}
  ${elementSelector}?.addEventListener('${event.name}', (event) => {
    console.log('${event.name}:', event);
    // Add your custom handler logic here
  });`;
			})
			.join("\n\n");

		return handlers;
	}

	/**
	 * Format imports (not used for HTML/vanilla)
	 */
	formatImports(_component: ComponentInfo): string {
		return "";
	}

	/**
	 * Convert component structure to HTML string
	 */
	private structureToHTML(struct: ComponentStructure, indent: string): string {
		const attrs = this.attributesToString(struct.attributes);
		const openTag = `${indent}<${struct.tag}${attrs ? ` ${attrs}` : ""}>`;

		let content = "";
		if (struct.textContent) {
			content = struct.textContent;
		}

		if (struct.children && struct.children.length > 0) {
			const childHTML = struct.children
				.map((child: ComponentStructure) =>
					this.structureToHTML(child, `${indent}  `),
				)
				.join("\n");
			content = `\n${childHTML}\n${indent}`;
		}

		const closeTag = `</${struct.tag}>`;
		return `${openTag}${content}${closeTag}`;
	}

	/**
	 * Convert attributes object to HTML string
	 */
	private attributesToString(attrs: Record<string, string>): string {
		return Object.entries(attrs)
			.filter(([_, value]) => value !== "undefined" && value !== "null") // Skip undefined/null values
			.map(([key, value]) => {
				// For JSON arrays/objects, use single quotes to wrap the attribute value
				if (value.startsWith("[") || value.startsWith("{")) {
					return `${key}='${value}'`;
				}
				// For regular strings, use double quotes
				return `${key}="${value}"`;
			})
			.join(" ");
	}
}
