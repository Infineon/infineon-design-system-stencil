import type { FormatOptions, ICodeFormatter } from "../interfaces.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import {
	escapeForSingleQuotedAttr,
	escapeForTemplateLiteral,
	toHandlerFunctionName,
} from "../utils/string-utils.js";

/**
 * Formats components into Vue/SFC code
 */
export class VueCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to Vue template
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "      " } = options;
		const isFirstOfType = new Map<string, boolean>();

		return this.structureToTemplate(
			component.structure,
			component,
			indent,
			isFirstOfType,
		);
	}

	/**
	 * Format event handlers for Vue
	 */
	formatEventHandlers(
		component: ComponentInfo,
		_options: FormatOptions,
	): string {
		if (component.events.length === 0) return "";

		return component.events
			.map((event) => {
				const handlerName = toHandlerFunctionName(event.name);
				return `const ${handlerName} = (event: CustomEvent) => {
  console.log('${event.name}:', event);
  // Add your handler logic here
};`;
			})
			.join("\n\n");
	}

	/**
	 * Format imports for Vue
	 */
	formatImports(_component: ComponentInfo): string {
		// Vue wrapper uses component registration, not individual imports
		return "";
	}

	/**
	 * Extract all unique Ifx component tags from the component structure
	 */
	private extractIfxComponents(structure: ComponentStructure): Set<string> {
		const components = new Set<string>();

		// Check if current tag is an Ifx component
		if (structure.tag.startsWith("ifx-")) {
			// Convert kebab-case to PascalCase (e.g., 'ifx-accordion' -> 'IfxAccordion')
			const pascalCase = structure.tag
				.split("-")
				.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
				.join("");
			components.add(pascalCase);
		}

		// Recursively check children
		if (structure.children) {
			for (const child of structure.children) {
				const childComponents = this.extractIfxComponents(child);
				for (const comp of childComponents) {
					components.add(comp);
				}
			}
		}

		return components;
	}

	/**
	 * Generate complete Vue SFC file content
	 */
	formatComponentFile(component: ComponentInfo): string {
		const eventHandlers = this.formatEventHandlers(component, { indent: "  " });
		const template = this.formatComponent(component, { indent: "    " });

		// Extract all Ifx components used in this example
		const ifxComponents = this.extractIfxComponents(component.structure);
		const componentImports =
			ifxComponents.size > 0
				? `\nimport { ${Array.from(ifxComponents).sort().join(", ")} } from '@infineon/infineon-design-system-vue';`
				: "";

		// Generate the code string for display
		const codeForDisplay = this.generateCodeForDisplay(
			component,
			eventHandlers,
			template,
		);
		const escapedCodeForDisplay = escapeForTemplateLiteral(codeForDisplay);

		// Break up closing tags using template expressions to prevent Vue SFC parser issues
		// Replace </script> with ${'</'}script> and </template> with ${'</'}template>
		const codeWithBrokenTags = escapedCodeForDisplay
			.replace(/<\/script>/g, "${'</'}script>")
			.replace(/<\/template>/g, "${'</'}template>");

		return `<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';${componentImports}

${eventHandlers ? `${eventHandlers}\n\n` : ""}const codeString = \`${codeWithBrokenTags}\`;

onMounted(() => {
  nextTick(() => {
    Prism.highlightAll();
  });
});
</script>

<template>
  <div>
${template}
    <details class="code-details">
      <summary>View Code</summary>
      <pre><code class="language-markup">{{ codeString }}</code></pre>
    </details>
  </div>
</template>
`;
	}

	/**
	 * Generate code string for display in the details section
	 */
	private generateCodeForDisplay(
		_component: ComponentInfo,
		eventHandlers: string,
		template: string,
	): string {
		let displayCode = '<script setup lang="ts">';

		if (eventHandlers) {
			displayCode += `\n${eventHandlers}`;
		}

		displayCode += `\n</script>\n\n<template>\n  <div>\n${template}\n  </div>\n</template>`;

		return displayCode;
	}

	/**
	 * Convert component structure to Vue template
	 */
	private structureToTemplate(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
	): string {
		const componentName = struct.tag;

		// Track if this is the first occurrence of this tag type (for events)
		const isFirst = !isFirstOfType.has(struct.tag);
		if (isFirst) {
			isFirstOfType.set(struct.tag, true);
		}

		// Convert attributes to Vue props (keep kebab-case for Vue)
		const propEntries = Object.entries(struct.attributes)
			.map(([key, value]) => {
				const propValue = this.toVuePropValue(value, key);
				if (!propValue) return null;

				// Check if propValue has the __VBIND__ marker for JSON objects/arrays
				if (propValue.startsWith("__VBIND__")) {
					// Remove the __VBIND__ marker and extract the actual value (with quotes)
					const actualValue = propValue.replace(/^__VBIND__/, "");
					// Extract the JSON string (remove outer quotes)
					const jsonString = actualValue.slice(1, -1);
					// Replace double quotes with HTML entity &quot; since we're in an HTML attribute
					const escapedJson = jsonString.replace(/"/g, "&quot;");
					// Use v-bind with JSON.parse
					return [`:${key}`, `"JSON.parse('${escapedJson}')"`];
				}

				return [key, propValue];
			})
			.filter(Boolean) as [string, string][];

		// Check if this specific element type should have event handlers
		const shouldAddEvents =
			componentInfo.events.length > 0 &&
			(struct.children && struct.children.length > 0
				? struct.tag !== componentInfo.component
				: struct.tag.includes(componentInfo.component));

		// Add event handlers for children elements only on first occurrence
		const eventProps: [string, string][] = [];
		if (shouldAddEvents && isFirst) {
			componentInfo.events.forEach((event) => {
				const handlerName = toHandlerFunctionName(event.name);
				eventProps.push([`@${event.name}`, `"${handlerName}"`]);
			});
		}

		const allProps = [...propEntries, ...eventProps];

		// Format opening tag with props
		const openTag = this.formatOpeningTag(componentName, allProps, indent);

		// Handle children
		if (struct.children && struct.children.length > 0) {
			const childrenTemplate = struct.children
				.map((child) =>
					this.structureToTemplate(
						child,
						componentInfo,
						`${indent}  `,
						isFirstOfType,
					),
				)
				.join("\n");
			return `${openTag}>\n${childrenTemplate}\n${indent}</${componentName}>`;
		}

		// Handle text content
		if (struct.textContent) {
			const trimmedText = struct.textContent.trim();
			return `${openTag}>\n${indent}  ${trimmedText}\n${indent}</${componentName}>`;
		}

		// Self-closing tag
		return `${openTag} />`;
	}

	/**
	 * Format opening tag with props
	 */
	private formatOpeningTag(
		componentName: string,
		props: [string, string][],
		indent: string,
	): string {
		if (props.length === 0) {
			return `${indent}<${componentName}`;
		} else if (props.length === 1) {
			const [name, value] = props[0];
			return `${indent}<${componentName} ${name}=${value}`;
		} else {
			const propsString = props
				.map(([name, value]) => `${indent}  ${name}=${value}`)
				.join("\n");
			return `${indent}<${componentName}\n${propsString}`;
		}
	}

	/**
	 * Convert attribute value to Vue prop value
	 */
	private toVuePropValue(value: string, attrName: string): string | null {
		// Skip undefined values
		if (value === "undefined") return null;

		// Boolean values
		if (value === "true") return '"true"';
		if (value === "false") return '"false"';

		// Numeric values
		if (!Number.isNaN(Number(value)) && value !== "" && value !== "null") {
			return `"${value}"`;
		}

		// Null
		if (value === "null") return null;

		// Try to detect if this is a JSON array or object string
		// These should use v-bind in Vue to pass as JavaScript objects
		const trimmedValue = value.trim();
		if (
			(trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) ||
			(trimmedValue.startsWith("{") && trimmedValue.endsWith("}"))
		) {
			try {
				// Validate it's proper JSON
				JSON.parse(value);
				// Return with special marker to indicate this should use v-bind
				// The marker will be handled in the conversion process
				const escapedValue = escapeForSingleQuotedAttr(value);
				return `__VBIND__'${escapedValue}'`;
			} catch {
				// If not valid JSON, fall through to string handling
			}
		}

		// String values - if contains double quotes, use single quotes for wrapper
		if (value.includes('"')) {
			// Escape backslashes and single quotes in the value, then wrap in single quotes
			const escapedValue = escapeForSingleQuotedAttr(value);
			return `'${escapedValue}'`;
		}

		return `"${value}"`;
	}

	// Note: escaping helpers are imported from string-utils.ts
}
