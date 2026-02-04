import type { FormatOptions, ICodeFormatter } from "../interfaces.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import {
	escapeForSingleQuotedAttr,
	escapeForTemplateLiteral,
	toAngularEventName,
	toCamelCase,
	toHandlerFunctionName,
	toPascalCase,
} from "../utils/string-utils.js";

/**
 * Formats components into Angular standalone component code
 */
export class AngularCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to Angular template HTML
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "    " } = options;
		const isFirstOfType = new Map<string, boolean>();

		return this.structureToHTML(
			component.structure,
			component,
			indent,
			isFirstOfType,
		);
	}

	/**
	 * Format event handlers for Angular
	 */
	formatEventHandlers(
		component: ComponentInfo,
		_options: FormatOptions,
	): string {
		if (component.events.length === 0) return "";

		return component.events
			.map((event) => {
				const handlerName = toHandlerFunctionName(event.name);
				return `  protected ${handlerName}(event: CustomEvent) {
    console.log('${event.name}:', event);
    // Add your handler logic here
  }`;
			})
			.join("\n\n");
	}

	/**
	 * Format imports for Angular
	 */
	formatImports(component: ComponentInfo): string {
		const componentTags = this.collectComponentTags(component.structure);
		// Only import Infineon components (starting with ifx-), not native HTML elements
		const imports = Array.from(componentTags)
			.filter((tag) => tag.startsWith("ifx-"))
			.map((tag) => toPascalCase(tag))
			.sort()
			.join(", ");

		return `import { ${imports} } from '@infineon/infineon-design-system-angular/standalone';`;
	}

	/**
	 * Generate complete Angular component TypeScript file content
	 */
	formatComponentTypeScript(component: ComponentInfo): string {
		const componentName = toPascalCase(component.component);
		const storyNameSuffix =
			component.storyName && component.storyName !== "Default"
				? component.storyName.replace(/\s+/g, "")
				: "";
		const componentClassName = `${componentName}${storyNameSuffix}Example`;
		const selectorSuffix =
			component.storyName && component.storyName !== "Default"
				? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
				: "";
		const componentSelector = `${component.component}-example${selectorSuffix}`;

		const imports = this.formatImports(component);
		const eventHandlers = this.formatEventHandlers(component, { indent: "  " });

		const componentTags = this.collectComponentTags(component.structure);
		// Only import Infineon components (starting with ifx-), not native HTML elements
		const componentImports = Array.from(componentTags)
			.filter((tag) => tag.startsWith("ifx-"))
			.map((tag) => toPascalCase(tag))
			.sort()
			.join(", ");

		// Generate the code strings for display
		const html = this.structureToHTML(
			component.structure,
			component,
			"  ",
			new Map(),
		);
		const tsCode = this.generateTypeScriptCode(
			component,
			componentImports,
			eventHandlers,
		);
		const htmlCode = this.escapeHtml(html);

		return `${imports}
import { Component } from '@angular/core';

@Component({
  selector: 'app-${componentSelector}',
  imports: [ ${componentImports} ],
  templateUrl: './${componentSelector}.html',
  styleUrl: './${componentSelector}.scss'
})
export class ${componentClassName} {
  protected readonly tsCode = \`${this.escapeBackticks(tsCode)}\`;
  protected readonly htmlCode = \`${this.escapeBackticks(htmlCode)}\`;
${eventHandlers ? `\n${eventHandlers}\n` : ""}}
`;
	}

	/**
	 * Generate complete Angular component template HTML file content
	 */
	formatComponentTemplate(component: ComponentInfo): string {
		const html = this.formatComponent(component, { indent: "  " });
		const selectorSuffix =
			component.storyName && component.storyName !== "Default"
				? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
				: "";
		const componentSelector = `${component.component}-example${selectorSuffix}`;

		return `${html}

<details class="code-details">
  <summary>View Code</summary>
  <div class="code-blocks">
    <h3>${componentSelector}.ts</h3>
    <pre><code class="language-typescript" [innerHTML]="tsCode"></code></pre>
    
    <h3>${componentSelector}.html</h3>
    <pre><code class="language-markup" [innerHTML]="htmlCode"></code></pre>
  </div>
</details>
`;
	}

	/**
	 * Generate component SCSS file content
	 */
	formatComponentStyles(): string {
		return `// Add component-specific styles here
`;
	}

	/**
	 * Generate TypeScript code for display
	 */
	private generateTypeScriptCode(
		component: ComponentInfo,
		componentImports: string,
		eventHandlers: string,
	): string {
		const imports = this.formatImports(component);
		const componentName = toPascalCase(component.component);
		const storyNameSuffix =
			component.storyName && component.storyName !== "Default"
				? component.storyName.replace(/\s+/g, "")
				: "";
		const componentClassName = `${componentName}${storyNameSuffix}Example`;
		const selectorSuffix =
			component.storyName && component.storyName !== "Default"
				? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
				: "";
		const componentSelector = `${component.component}-example${selectorSuffix}`;

		let tsCode = `${imports}
import { Component } from '@angular/core';

@Component({
  selector: 'app-${componentSelector}',
  imports: [ ${componentImports} ],
  templateUrl: './${componentSelector}.html',
  styleUrl: './${componentSelector}.scss'
})
export class ${componentClassName} {`;

		if (eventHandlers) {
			tsCode += `\n${eventHandlers}\n`;
		}

		tsCode += `}`;

		return this.escapeHtml(tsCode);
	}

	/**
	 * Escape backticks for template literal
	 */
	private escapeBackticks(str: string): string {
		// First escape backslashes, then backticks and dollar signs.
		// This avoids introducing escape sequences that could break the surrounding
		// template literal when the input already contains backslashes.
		return escapeForTemplateLiteral(str);
	}

	/**
	 * Escape HTML for display in code block
	 */
	private escapeHtml(html: string): string {
		return html
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	/**
	 * Convert component structure to Angular template HTML
	 */
	private structureToHTML(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
	): string {
		const tag = struct.tag;

		// Track if this is the first occurrence of this tag type (for events)
		const isFirst = !isFirstOfType.has(tag);
		if (isFirst) {
			isFirstOfType.set(tag, true);
		}

		// Convert attributes from the actual story DOM only
		const attrs = Object.entries(struct.attributes)
			.map(([key, value]) => this.toAngularAttribute(key, value, componentInfo))
			.filter((attr): attr is string => attr !== null);

		// Check if this specific element type should have event handlers
		const shouldAddEvents =
			componentInfo.events.length > 0 &&
			(struct.children && struct.children.length > 0
				? tag !== componentInfo.component
				: tag.includes(componentInfo.component));

		// Add event handlers for children elements only on first occurrence
		if (shouldAddEvents && isFirst) {
			componentInfo.events.forEach((event) => {
				const angularEventName = toAngularEventName(event.name);
				const handlerName = toHandlerFunctionName(event.name);
				attrs.push(`(${angularEventName})="${handlerName}($any($event))"`);
			});
		}

		// Format opening tag with attributes
		const openTag = this.formatOpeningTag(tag, attrs, indent);

		// Handle children
		if (struct.children && struct.children.length > 0) {
			const childrenHTML = struct.children
				.map((child) =>
					this.structureToHTML(
						child,
						componentInfo,
						`${indent}  `,
						isFirstOfType,
					),
				)
				.join("\n");
			return `${openTag}>\n${childrenHTML}\n${indent}</${tag}>`;
		}

		// Handle text content
		if (struct.textContent) {
			// Don't add extra whitespace - Angular hydration is sensitive to exact text nodes
			// Normalize all whitespace to single spaces
			const trimmedText = struct.textContent.trim().replace(/\s+/g, " ");
			return `${openTag}>${trimmedText}</${tag}>`;
		}

		// Self-closing tag
		return `${openTag}></${tag}>`;
	}

	/**
	 * Format opening tag with attributes
	 */
	private formatOpeningTag(
		tag: string,
		attrs: string[],
		indent: string,
	): string {
		if (attrs.length === 0) {
			return `${indent}<${tag}`;
		} else if (attrs.length === 1) {
			return `${indent}<${tag} ${attrs[0]}`;
		} else {
			const attrsString = attrs.map((attr) => `${indent}  ${attr}`).join("\n");
			return `${indent}<${tag}\n${attrsString}`;
		}
	}

	/**
	 * Convert attribute to Angular template syntax
	 */
	private toAngularAttribute(
		name: string,
		value: string,
		componentInfo: ComponentInfo,
	): string | null {
		// Skip undefined values
		if (value === "undefined") return null;

		// Normalize Angular-style property binding syntax on custom elements: [prop]="..."
		// We convert these into plain attributes so the web component receives string values reliably.
		let attrName = name;
		let attrValue = value;
		const isBracketBinding = attrName.startsWith("[") && attrName.endsWith("]");
		if (isBracketBinding) {
			attrName = attrName.slice(1, -1); // strip brackets
			// If value is quoted Angular expression like `'text'`, strip quotes
			const m = attrValue.match(/^['"]([\s\S]*)['"]$/);
			if (m) attrValue = m[1];
		}

		// Boolean values
		// Emit explicit string attributes for booleans for clarity and compatibility with web components
		if (attrValue === "true") return `${attrName}="true"`;
		if (attrValue === "false") return `${attrName}="false"`;
		// Some stories render presence-only boolean attributes (empty string) when true
		if (attrValue === "") return `${attrName}="true"`;

		// Numeric values
		if (
			!Number.isNaN(Number(attrValue)) &&
			attrValue !== "" &&
			attrValue !== "null"
		) {
			return `${attrName}="${attrValue}"`;
		}

		// Null
		if (attrValue === "null") return null;

		// JSON arrays or objects (contain { or [ at start) - use property binding
		// Some DOM attributes coerce arrays/objects to "[object Object]"; prefer defaultArgs when available
		if (
			attrValue.startsWith("[") ||
			attrValue.startsWith("{") ||
			attrValue.includes("[object Object")
		) {
			const camelName = toCamelCase(attrName);
			const original = (
				componentInfo?.defaultArgs as Record<string, unknown>
			)?.[camelName];
			let jsonString = attrValue;
			if (original !== undefined && typeof original === "object") {
				try {
					jsonString = JSON.stringify(original);
				} catch {
					// keep existing value if stringify fails
				}
			}
			const escapedValue = escapeForSingleQuotedAttr(jsonString);
			// Bind as string attribute (web components commonly parse JSON from attribute string)
			return `${attrName}='${escapedValue}'`;
		}

		// String values
		return `${attrName}="${attrValue}"`;
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
