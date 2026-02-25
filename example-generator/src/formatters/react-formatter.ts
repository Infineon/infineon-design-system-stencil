import type { FormatOptions, ICodeFormatter } from "../interfaces.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import {
	escapeForTemplateLiteral,
	toCamelCase,
	toHandlerFunctionName,
	toPascalCase,
	toReactEventName,
} from "../utils/string-utils.js";

/**
 * Formats components into React/JSX code
 */
export class ReactCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to React JSX
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "      " } = options;
		const isFirstOfType = new Map<string, boolean>();

		return this.structureToJSX(
			component.structure,
			component,
			indent,
			isFirstOfType,
		);
	}

	/**
	 * Format event handlers for React
	 */
	formatEventHandlers(
		component: ComponentInfo,
		_options: FormatOptions,
	): string {
		if (component.events.length === 0) return "";

		return component.events
			.map((event) => {
				const handlerName = toHandlerFunctionName(event.name);
				return `  const ${handlerName} = (event: CustomEvent) => {
    console.log('${event.name}:', event);
    // Add your handler logic here
  };`;
			})
			.join("\n\n");
	}

	/**
	 * Format imports for React
	 */
	formatImports(component: ComponentInfo): string {
		const componentTags = this.collectComponentTags(component.structure);
		// Only import Infineon components (starting with ifx-), not native HTML elements
		const imports = Array.from(componentTags)
			.filter((tag) => tag.startsWith("ifx-"))
			.map((tag) => toPascalCase(tag))
			.sort()
			.join(", ");

		return `import { ${imports} } from '@infineon/infineon-design-system-react';`;
	}

	/**
	 * Generate complete React component file content
	 */
	formatComponentFile(component: ComponentInfo): string {
		const componentName = toPascalCase(component.component);
		const storyNameSuffix =
			component.storyName && component.storyName !== "Default"
				? component.storyName.replace(/\s+/g, "")
				: "";
		const componentClassName = `${componentName}${storyNameSuffix}Example`;
		const imports = this.formatImports(component);
		const eventHandlers = this.formatEventHandlers(component, { indent: "  " });
		const jsx = this.formatComponent(component, { indent: "      " });

		// Generate the code string for display
		const codeForDisplay = this.generateCodeForDisplay(
			component,
			eventHandlers,
			jsx,
		);

		// Escape for safe embedding in a template literal
		const escapedCodeForDisplay = escapeForTemplateLiteral(codeForDisplay);

		return `${imports}

export function ${componentClassName}() {
${eventHandlers ? `${eventHandlers}\n\n` : ""}  return (
    <>
${jsx}
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = \`${escapedCodeForDisplay}\`;
`;
	}

	/**
	 * Generate code string for display in the details section
	 */
	private generateCodeForDisplay(
		component: ComponentInfo,
		eventHandlers: string,
		jsx: string,
	): string {
		const componentName = toPascalCase(component.component);
		const imports = this.formatImports(component);

		// Build the display code without the details section
		let displayCode = `${imports}

export function ${componentName}Example() {`;

		if (eventHandlers) {
			displayCode += `\n${eventHandlers}\n`;
		}

		displayCode += `\n  return (\n${jsx}\n  );\n}`;

		return displayCode;
	}

	/**
	 * Convert component structure to React JSX
	 */
	private structureToJSX(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
	): string {
		// Use PascalCase for Infineon components (ifx-*), lowercase for native HTML
		const componentName = struct.tag.startsWith("ifx-")
			? toPascalCase(struct.tag)
			: struct.tag;

		// Track if this is the first occurrence of this tag type (for events)
		const isFirst = !isFirstOfType.has(struct.tag);
		if (isFirst) {
			isFirstOfType.set(struct.tag, true);
		}

		// Convert attributes to React props
		const propEntries = Object.entries(struct.attributes)
			.map(([key, value]) => {
				const propName = toCamelCase(key);
				const propValue = this.toReactPropValue(value, key);
				return propValue ? [propName, propValue] : null;
			})
			.filter(Boolean) as [string, string][];

		// Add event handlers only to components that emit them (on first occurrence)
		const eventProps: [string, string][] = [];
		if (isFirst && componentInfo.events.length > 0) {
			// Filter events to only those that belong to this specific component
			const relevantEvents = componentInfo.events.filter((event) => {
				// If sourceComponent is explicitly set, only attach to that component
				if (event.sourceComponent) {
					return event.sourceComponent === struct.tag;
				}
				// If no sourceComponent is set, attach to the main component
				return struct.tag === componentInfo.component;
			});

			relevantEvents.forEach((event) => {
				const reactEventName = toReactEventName(event.name);
				const handlerName = toHandlerFunctionName(event.name);
				eventProps.push([reactEventName, `{${handlerName}}`]);
			});
		}

		const allProps = [...propEntries, ...eventProps];

		// Format opening tag with props
		const openTag = this.formatOpeningTag(componentName, allProps, indent);

		// Handle children
		if (struct.children && struct.children.length > 0) {
			const childrenJSX = struct.children
				.map((child) =>
					this.structureToJSX(
						child,
						componentInfo,
						`${indent}  `,
						isFirstOfType,
					),
				)
				.join("\n");
			return `${openTag}>\n${childrenJSX}\n${indent}</${componentName}>`;
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
	 * Convert attribute value to React prop value
	 */
	private toReactPropValue(value: string, _attrName: string): string | null {
		// Skip undefined values
		if (value === "undefined") return null;

		// Boolean values
		if (value === "true") return "{true}";
		if (value === "false") return "{false}";

		// Numeric values
		if (!Number.isNaN(Number(value)) && value !== "" && value !== "null") {
			return `{${value}}`;
		}

		// Null
		if (value === "null") return null;

		// Try to detect if this is a JSON array or object string
		// These should be passed as JavaScript objects in React, not strings
		const trimmedValue = value.trim();
		if (
			(trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) ||
			(trimmedValue.startsWith("{") && trimmedValue.endsWith("}"))
		) {
			try {
				// Validate it's proper JSON
				JSON.parse(value);
				// Return as a JavaScript expression (will be parsed at runtime)
				// Escape for safe embedding in template literal
				const escapedValue = escapeForTemplateLiteral(value);
				return `{JSON.parse(\`${escapedValue}\`)}`;
			} catch {
				// If not valid JSON, treat as string
			}
		}

		// String values - if contains quotes, use JSX expression with template literal
		if (value.includes('"') || value.includes("'")) {
			// Escape backslashes, backticks and dollar signs for template literals
			const escapedValue = escapeForTemplateLiteral(value);
			return `{\`${escapedValue}\`}`;
		}

		return `"${value}"`;
	}

	/**
	 * Collect all unique component tags from structure (for imports)
	 */
	private collectComponentTags(
		struct: ComponentStructure,
		tags = new Set<string>(),
	): Set<string> {
		tags.add(struct.tag);

		if (struct.children && struct.children.length > 0) {
			struct.children.forEach((child) => {
				this.collectComponentTags(child, tags);
			});
		}

		return tags;
	}
}
