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

const CONTROLLED_ATTRS_PLACEHOLDER = "__CONTROLLED_ATTRS__";

type ControlSpec =
	| {
			kind: "boolean";
			argKey: string;
			propKey: string;
			stateVar: string;
			initial: boolean;
	  }
	| {
			kind: "options";
			argKey: string;
			propKey: string;
			stateVar: string;
			indexVar: string;
			optionsVar: string;
			initialIndex: number;
			options: unknown[];
	  };

/**
 * Formats components into Angular standalone component code
 */
export class AngularCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to Angular template HTML
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "    " } = options;
		const includeControls = (options as FormatOptions & { includeControls?: boolean })
			.includeControls ?? true;
		const isFirstOfType = new Map<string, boolean>();
		const specs = includeControls ? this.getToggleControls(component) : [];
		const controlledPropKeys = new Set(specs.map((s) => s.propKey));

		return this.structureToHTML(
			component.structure,
			component,
			indent,
			isFirstOfType,
			controlledPropKeys,
			true,
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
	formatImports(component: ComponentInfo, includeControls = true): string {
		const specs = includeControls ? this.getToggleControls(component) : [];
		const componentTags = this.collectComponentTags(component.structure);
		// Only import Infineon components (starting with ifx-), not native HTML elements
		const importsSet = new Set(
			Array.from(componentTags)
			.filter((tag) => tag.startsWith("ifx-"))
			.map((tag) => toPascalCase(tag)),
		);
		if (component.component === "ifx-button" && this.hasControl(component, "icon")) {
			importsSet.add("IfxIcon");
		}
		if (specs.length > 0) {
			importsSet.add("IfxButton");
		}
		const imports = Array.from(importsSet).sort().join(", ");

		return `import { ${imports} } from '@infineon/infineon-design-system-angular/standalone';`;
	}

	/**
	 * Generate complete Angular component TypeScript file content
	 */
	formatComponentTypeScript(component: ComponentInfo, includeControls = true): string {
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

		const imports = this.formatImports(component, includeControls);
		const eventHandlers = this.formatEventHandlers(component, { indent: "  " });
		const specs = includeControls ? this.getToggleControls(component) : [];
		const controlsState = this.renderControlsState(specs);
		const hasControls = specs.length > 0;

		const componentTags = this.collectComponentTags(component.structure);
		// Only import Infineon components (starting with ifx-), not native HTML elements
		const componentImportsSet = new Set(
			Array.from(componentTags)
			.filter((tag) => tag.startsWith("ifx-"))
			.map((tag) => toPascalCase(tag)),
		);
		if (
			component.component === "ifx-button" &&
			specs.some((spec) => spec.propKey === "icon")
		) {
			componentImportsSet.add("IfxIcon");
		}
		if (includeControls && hasControls) {
			componentImportsSet.add("IfxButton");
		}
		const componentImports = Array.from(componentImportsSet).sort().join(", ");

		// Generate the code strings for display
		const html = this.structureToHTML(
			component.structure,
			component,
			"  ",
			new Map(),
			new Set(specs.map((s) => s.propKey)),
			true,
		);
		const htmlForDisplay = this.structureToDisplayHTML(
			component.structure,
			component,
			"  ",
			new Map(),
			new Set(specs.map((s) => s.propKey)),
			true,
		);
		const tsCode = this.generateTypeScriptCode(
			component,
			componentImports,
			eventHandlers,
		);
		const htmlCode = this.escapeHtml(htmlForDisplay);
		const htmlCodeDeclaration = hasControls
			? this.renderDynamicHtmlCode(specs, htmlCode)
			: `  protected readonly htmlCode = \`${this.escapeBackticks(htmlCode)}\`;`;

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
${htmlCodeDeclaration}
${controlsState ? `${controlsState}\n` : ""}${eventHandlers ? `\n${eventHandlers}\n` : ""}}
`;
	}

	/**
	 * Generate complete Angular component template HTML file content
	 */
	formatComponentTemplate(component: ComponentInfo, includeControls = true): string {
		const specs = includeControls ? this.getToggleControls(component) : [];
		const html = this.formatComponent(component, { indent: "  ", includeControls });
		const controlsUI = this.renderControlsUI(specs);
		const selectorSuffix =
			component.storyName && component.storyName !== "Default"
				? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
				: "";
		const componentSelector = `${component.component}-example${selectorSuffix}`;

		return `${html}${includeControls && controlsUI ? controlsUI : ""}

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
		controlledPropKeys: Set<string>,
		isRoot: boolean,
	): string {
		const tag = struct.tag;

		// Track if this is the first occurrence of this tag type (for events)
		const isFirst = !isFirstOfType.has(tag);
		if (isFirst) {
			isFirstOfType.set(tag, true);
		}

		// Convert attributes from the actual story DOM only
		const attrs = Object.entries(struct.attributes)
			.filter(([key]) => {
				const propKey = this.toPropKey(key);
				if (isRoot && controlledPropKeys.has(propKey)) return false;
				if (
					this.isChildControlledProp(componentInfo, struct.tag, propKey) &&
					controlledPropKeys.has(propKey)
				) {
					return false;
				}
				return true;
			})
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

		if (isRoot && controlledPropKeys.size > 0) {
			for (const propKey of controlledPropKeys) {
				attrs.push(`${propKey}="{{ controlledProps['${propKey}'] }}"`);
			}
		}

		attrs.push(
			...this.getInjectedControlledAttrs(componentInfo, struct.tag, controlledPropKeys),
		);

		// Format opening tag with attributes
		const openTag = this.formatOpeningTag(tag, attrs, indent);

		if (
			isRoot &&
			componentInfo.component === "ifx-button" &&
			controlledPropKeys.has("icon")
		) {
			const trimmedText = struct.textContent.trim().replace(/\s+/g, " ");
			return `${openTag}>\n${indent}  <ifx-icon [style.display]="controlledProps['icon'] && ((controlledProps['iconPosition'] || 'left') === 'left') ? '' : 'none'" icon="{{ controlledProps['icon'] }}"></ifx-icon>\n${indent}  ${trimmedText}\n${indent}  <ifx-icon [style.display]="controlledProps['icon'] && ((controlledProps['iconPosition'] || 'left') === 'right') ? '' : 'none'" icon="{{ controlledProps['icon'] }}"></ifx-icon>\n${indent}</${tag}>`;
		}

		// Handle children
		if (struct.children && struct.children.length > 0) {
			const childrenHTML = struct.children
				.map((child) =>
					this.structureToHTML(
						child,
						componentInfo,
						`${indent}  `,
						isFirstOfType,
						controlledPropKeys,
						false,
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

	private structureToDisplayHTML(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
		controlledPropKeys: Set<string>,
		isRoot: boolean,
	): string {
		const tag = struct.tag;

		const isFirst = !isFirstOfType.has(tag);
		if (isFirst) {
			isFirstOfType.set(tag, true);
		}

		const attrs = Object.entries(struct.attributes)
			.filter(([key]) => {
				const propKey = this.toPropKey(key);
				if (isRoot && controlledPropKeys.has(propKey)) return false;
				if (
					this.isChildControlledProp(componentInfo, struct.tag, propKey) &&
					controlledPropKeys.has(propKey)
				) {
					return false;
				}
				return true;
			})
			.map(([key, value]) => this.toAngularAttribute(key, value, componentInfo))
			.filter((attr): attr is string => attr !== null);
		attrs.push(
			...this.getInjectedControlledAttrs(componentInfo, struct.tag, controlledPropKeys),
		);


		const shouldAddEvents =
			componentInfo.events.length > 0 &&
			(struct.children && struct.children.length > 0
				? tag !== componentInfo.component
				: tag.includes(componentInfo.component));

		if (shouldAddEvents && isFirst) {
			componentInfo.events.forEach((event) => {
				const angularEventName = toAngularEventName(event.name);
				const handlerName = toHandlerFunctionName(event.name);
				attrs.push(`(${angularEventName})="${handlerName}($any($event))"`);
			});
		}

		if (isRoot && controlledPropKeys.size > 0) {
			attrs.push(CONTROLLED_ATTRS_PLACEHOLDER);
		}

		const openTag = this.formatOpeningTag(tag, attrs, indent);

		if (struct.children && struct.children.length > 0) {
			const childrenHTML = struct.children
				.map((child) =>
					this.structureToDisplayHTML(
						child,
						componentInfo,
						`${indent}  `,
						isFirstOfType,
						controlledPropKeys,
						false,
					),
				)
				.join("\n");
			return `${openTag}>\n${childrenHTML}\n${indent}</${tag}>`;
		}

		if (struct.textContent) {
			const trimmedText = struct.textContent.trim().replace(/\s+/g, " ");
			return `${openTag}>${trimmedText}</${tag}>`;
		}

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

		if (attrValue.startsWith("__JSON__")) {
			attrValue = attrValue.replace(/^__JSON__/, "");
		}

		const isBooleanProp = this.isBooleanProp(attrName, componentInfo);
		const bindingName = toCamelCase(attrName);
		// Boolean values
		if (attrValue === "true") {
			return isBooleanProp
				? `[${bindingName}]="true"`
				: `${attrName}="true"`;
		}
		if (attrValue === "false") {
			return isBooleanProp
				? `[${bindingName}]="false"`
				: `${attrName}="false"`;
		}
		// Some stories render presence-only boolean attributes (empty string) when true
		if (attrValue === "") {
			return isBooleanProp
				? `[${bindingName}]="true"`
				: `${attrName}="true"`;
		}

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

	private isBooleanProp(name: string, componentInfo: ComponentInfo): boolean {
		const argTypes = componentInfo.argTypes || {};
		const camelName = toCamelCase(name);
		const candidates = [name, camelName];

		for (const key of candidates) {
			const argType = argTypes[key] as
				| {
						control?: string | { type?: string };
						table?: { type?: { summary?: string } };
					}
				| undefined;
			if (!argType) continue;

			const controlType =
				typeof argType.control === "string"
					? argType.control
					: argType.control?.type;
			if (controlType?.toLowerCase() === "boolean") return true;

			const summary = argType.table?.type?.summary || "";
			if (summary.toLowerCase().includes("boolean")) return true;
		}

		return false;
	}

	private toPropKey(argKey: string): string {
		const camel = toCamelCase(argKey);
		return camel.charAt(0).toLowerCase() + camel.slice(1);
	}

	private hasControl(component: ComponentInfo, argKey: string): boolean {
		return Object.prototype.hasOwnProperty.call(component.argTypes || {}, argKey);
	}

	private isChildControlledProp(
		component: ComponentInfo,
		structTag: string,
		propKey: string,
	): boolean {
		if (component.component === "ifx-accordion") {
			return structTag === "ifx-accordion-item" && propKey === "icon";
		}
		if (component.component === "ifx-content-switcher") {
			return structTag === "ifx-icon" && propKey === "icon";
		}
		if (component.component === "ifx-tabs") {
			return (
				structTag === "ifx-tab" &&
				(propKey === "icon" || propKey === "iconPosition")
			);
		}
		if (component.component === "ifx-segmented-control") {
			return structTag === "ifx-segment" && propKey === "icon";
		}
		if (component.component === "ifx-dropdown") {
			return structTag === "ifx-dropdown-item" && propKey === "icon";
		}
		if (component.component === "ifx-sidebar") {
			return structTag === "ifx-sidebar-item" && propKey === "icon";
		}
		return false;
	}

	private getInjectedControlledAttrs(
		component: ComponentInfo,
		structTag: string,
		controlledPropKeys: Set<string>,
	): string[] {
		const attrs: string[] = [];

		if (
			component.component === "ifx-accordion" &&
			structTag === "ifx-accordion-item" &&
			controlledPropKeys.has("icon")
		) {
			attrs.push(`icon="{{ controlledProps['icon'] }}"`);
		}

		if (
			component.component === "ifx-content-switcher" &&
			structTag === "ifx-icon" &&
			controlledPropKeys.has("icon")
		) {
			attrs.push(`icon="{{ controlledProps['icon'] }}"`);
		}

		if (component.component === "ifx-tabs" && structTag === "ifx-tab") {
			if (controlledPropKeys.has("icon")) {
				attrs.push(`icon="{{ controlledProps['icon'] }}"`);
			}
			if (controlledPropKeys.has("iconPosition")) {
				attrs.push(
					`icon-position="{{ controlledProps['iconPosition'] || 'left' }}"`,
				);
			}
		}

		if (
			component.component === "ifx-segmented-control" &&
			structTag === "ifx-segment" &&
			controlledPropKeys.has("icon")
		) {
			attrs.push(`icon="{{ controlledProps['icon'] }}"`);
		}

		if (
			component.component === "ifx-dropdown" &&
			structTag === "ifx-dropdown-item" &&
			controlledPropKeys.has("icon")
		) {
			attrs.push(`icon="{{ controlledProps['icon'] }}"`);
		}

		if (
			component.component === "ifx-sidebar" &&
			structTag === "ifx-sidebar-item" &&
			controlledPropKeys.has("icon")
		) {
			attrs.push(`icon="{{ controlledProps['icon'] }}"`);
		}

		return attrs;
	}

	private toToggleName(varName: string): string {
		return `toggle${varName.charAt(0).toUpperCase()}${varName.slice(1)}`;
	}

	private resolveDefaultArgValue(
		args: Record<string, unknown>,
		argKey: string,
		propKey: string,
	): unknown {
		if (argKey in args) return args[argKey];
		if (propKey in args) return args[propKey];
		return undefined;
	}

	private getToggleControls(component: ComponentInfo): ControlSpec[] {
		const specs: ControlSpec[] = [];
		const argTypes = component.argTypes || {};
		const args = component.defaultArgs || {};
		const rootPropKeys = new Set(
			Object.keys(component.structure.attributes || {}).map((key) =>
				this.toPropKey(key),
			),
		);

		for (const [argKey, raw] of Object.entries(argTypes)) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			if ("action" in argType) continue;

			const propKey = this.toPropKey(argKey);
			if (
				!rootPropKeys.has(propKey) &&
				!(component.component === "ifx-accordion" && propKey === "icon") &&
				!(component.component === "ifx-button" && propKey === "icon") &&
				!(component.component === "ifx-content-switcher" && propKey === "icon") &&
				!(component.component === "ifx-tabs" && (propKey === "icon" || propKey === "iconPosition")) &&
				!(component.component === "ifx-segmented-control" && propKey === "icon") &&
				!(component.component === "ifx-dropdown" && propKey === "icon") &&
				!(component.component === "ifx-sidebar" && propKey === "icon")
			) continue;
			const stateVar = propKey;
			const options = Array.isArray(argType.options) ? argType.options : null;
			const controlValue = argType.control;
			const controlType =
				typeof controlValue === "string"
					? controlValue
					: (controlValue as { type?: unknown } | undefined)?.type;
			const defaultValue = this.resolveDefaultArgValue(args, argKey, propKey);

			if (options && options.length > 0) {
				const indexVar = `${stateVar}Index`;
				const optionsVar = `${stateVar}Options`;
				const initialIndex = Math.max(
					0,
					options.findIndex((option) => option === defaultValue),
				);

				specs.push({
					kind: "options",
					argKey,
					propKey,
					stateVar,
					indexVar,
					optionsVar,
					initialIndex,
					options,
				});
				continue;
			}

			const isBool = controlType === "boolean" || typeof defaultValue === "boolean";
			if (isBool) {
				specs.push({
					kind: "boolean",
					argKey,
					propKey,
					stateVar,
					initial: Boolean(defaultValue),
				});
			}
		}

		return specs;
	}

	private renderControlsState(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const lines: string[] = [];

		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(`  protected readonly ${spec.optionsVar} = ${JSON.stringify(spec.options)};`);
				lines.push(`  protected ${spec.indexVar} = ${spec.initialIndex};`);
			} else {
				lines.push(`  protected ${spec.stateVar} = ${spec.initial};`);
			}
		}

		lines.push("");

		for (const spec of specs) {
			const toggleName = this.toToggleName(spec.stateVar);
			if (spec.kind === "options") {
				lines.push(
					`  protected ${toggleName}() { this.${spec.indexVar} = (this.${spec.indexVar} + 1) % this.${spec.optionsVar}.length; }`,
				);
			} else {
				lines.push(`  protected ${toggleName}() { this.${spec.stateVar} = !this.${spec.stateVar}; }`);
			}
		}

		lines.push("");
		lines.push("  protected get controlledProps(): Record<string, unknown> {");
		lines.push("    return {");
		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(`      ${JSON.stringify(spec.propKey)}: this.${spec.optionsVar}[this.${spec.indexVar}],`);
			} else {
				lines.push(`      ${JSON.stringify(spec.propKey)}: this.${spec.stateVar},`);
			}
		}
		lines.push("    };\n  }");

		return lines.join("\n");
	}

	private renderControlsUI(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const buttons = specs
			.map((spec) => {
				const toggleName = this.toToggleName(spec.stateVar);
				const label = `Toggle ${spec.stateVar.charAt(0).toUpperCase()}${spec.stateVar.slice(1)}`;
				return `  <ifx-button variant="secondary" (click)="${toggleName}()">${label}</ifx-button>`;
			})
			.join("\n");

		const stateLines = specs
			.map((spec) => {
				if (spec.kind === "options") {
					return `    <div><b>${spec.argKey}:</b> {{ ${spec.optionsVar}[${spec.indexVar}] }}</div>`;
				}
				return `    <div><b>${spec.argKey}:</b> {{ ${spec.stateVar} }}</div>`;
			})
			.join("\n");

		return `
<h3 class="controls-title">Controls</h3>
<div class="controls">
${buttons}
</div>

<div class="state">
${stateLines}
</div>
`;
	}

	private renderDynamicHtmlCode(specs: ControlSpec[], escapedHtmlCode: string): string {
		const entries = specs
			.map(
				(spec) =>
					`      [${JSON.stringify(spec.argKey)}, this.controlledProps[${JSON.stringify(spec.propKey)}]],`,
			)
			.join("\n");

		return `  protected get htmlCode(): string {
    const controlledAttrs = [
${entries}
    ]
			.map(([name, value]) => '    ' + String(name) + '=&quot;' + String(value) + '&quot;')
      .join("\\n");

    return \`${this.escapeBackticks(escapedHtmlCode)}\`.replace(${JSON.stringify(CONTROLLED_ATTRS_PLACEHOLDER)}, controlledAttrs);
  }`;
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
