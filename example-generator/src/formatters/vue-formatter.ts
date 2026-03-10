import type { FormatOptions, ICodeFormatter } from "../interfaces.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import {
	escapeForSingleQuotedAttr,
	escapeForTemplateLiteral,
	toCamelCase,
	toHandlerFunctionName,
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
 * Formats components into Vue/SFC code
 */
export class VueCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to Vue template
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "      " } = options;
		const isFirstOfType = new Map<string, boolean>();
		const specs = this.getToggleControls(component);
		const controlledPropKeys = new Set(specs.map((s) => s.propKey));

		return this.structureToTemplate(
			component.structure,
			component,
			indent,
			isFirstOfType,
			controlledPropKeys,
			true,
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
		const specs = this.getToggleControls(component);
		const controlsState = this.renderControlsState(specs);
		const controlsUI = this.renderControlsUI(specs);

		// Extract all Ifx components used in this example
		const ifxComponents = this.extractIfxComponents(component.structure);
		if (specs.length > 0) {
			ifxComponents.add("IfxButton");
		}
		const componentImports =
			ifxComponents.size > 0
				? `\nimport { ${Array.from(ifxComponents).sort().join(", ")} } from '@infineon/infineon-design-system-vue';`
				: "";

		// Generate the code string for display
		const codeForDisplay = this.generateCodeForDisplay(
			component,
			eventHandlers,
			template,
			specs.length > 0,
		);
		const escapedCodeForDisplay = escapeForTemplateLiteral(codeForDisplay);

		// Break up closing tags using template expressions to prevent Vue SFC parser issues
		// Replace </script> with ${'</'}script> and </template> with ${'</'}template>
		const codeWithBrokenTags = escapedCodeForDisplay
			.replace(/<\/script>/g, "${'</'}script>")
			.replace(/<\/template>/g, "${'</'}template>");
		const codeStringDeclaration =
			specs.length > 0
				? this.renderDynamicCodeString(specs, codeWithBrokenTags)
				: `const codeString = \`${codeWithBrokenTags}\`;`;

		return `<script setup lang="ts">
${componentImports}

${controlsState ? `${controlsState}\n` : ""}${eventHandlers ? `${eventHandlers}\n\n` : ""}${codeStringDeclaration}

</script>

<template>
  <div>
${template}${controlsUI ? controlsUI : ""}
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
		hasControls: boolean,
	): string {
		const displayTemplate = hasControls
			? template.replace('v-bind="controlledProps"', CONTROLLED_ATTRS_PLACEHOLDER)
			: template;

		let displayCode = '<script setup lang="ts">';

		if (eventHandlers) {
			displayCode += `\n${eventHandlers}`;
		}

		displayCode += `\n</script>\n\n<template>\n  <div>\n${displayTemplate}\n  </div>\n</template>`;

		return displayCode;
	}

	private renderDynamicCodeString(
		specs: ControlSpec[],
		escapedCodeTemplate: string,
	): string {
		const entries = specs
			.map(
				(s) =>
					`  [${JSON.stringify(s.argKey)}, controlledProps.value[${JSON.stringify(s.propKey)}]],`,
			)
			.join("\n");

		return `const formatAttrValueForCode = (value: unknown): string => {
  if (typeof value === "boolean") return String(value);
  if (typeof value === "number") return String(value);
  if (value === null) return "null";
  if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
    return JSON.stringify(value);
  }
  return String(value).replace(/\"/g, '&quot;');
};

const controlledAttrsCode = [
${entries}
]
	.map(([name, value]) => '      ' + String(name) + '="' + formatAttrValueForCode(value) + '"')
  .join("\\n");

const codeString = \`${escapedCodeTemplate}\`.replace(${JSON.stringify(CONTROLLED_ATTRS_PLACEHOLDER)}, controlledAttrsCode);`;
	}

	/**
	 * Convert component structure to Vue template
	 */
	private structureToTemplate(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
		controlledPropKeys: Set<string>,
		isRoot: boolean,
	): string {
		const componentName = struct.tag;

		// Track if this is the first occurrence of this tag type (for events)
		const isFirst = !isFirstOfType.has(struct.tag);
		if (isFirst) {
			isFirstOfType.set(struct.tag, true);
		}

		// Convert attributes to Vue props (keep kebab-case for Vue)
		const propEntries = Object.entries(struct.attributes)
			.filter(([key]) => !(isRoot && controlledPropKeys.has(this.toPropKey(key))))
			.map(([key, value]) => {
				const propValue = this.toVuePropValue(value, key);
				if (!propValue) return null;

				// Check if propValue has the __BOOLEAN__ marker for boolean values
				if (propValue.startsWith("__BOOLEAN__")) {
					// Remove the __BOOLEAN__ marker and get the boolean value
					const boolValue = propValue.replace(/^__BOOLEAN__/, "");
					// Use v-bind with the boolean value
					return [`:${key}`, `"${boolValue}"`];
				}

				// Check if propValue has the __VBIND__ marker for JSON objects/arrays
				if (propValue.startsWith("__VBIND__")) {
					// Remove the __VBIND__ marker and extract the actual value (with quotes)
					const actualValue = propValue.replace(/^__VBIND__/, "");
					// Use v-bind with a JSON literal wrapped in single quotes
					return [`:${key}`, actualValue];
				}

				// Check if propValue has the __VBIND_NUMBER__ marker for numeric values
				if (propValue.startsWith("__VBIND_NUMBER__")) {
					const numberValue = propValue.replace(/^__VBIND_NUMBER__/, "");
					return [`:${key}`, numberValue];
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

		if (isRoot && controlledPropKeys.size > 0) {
			allProps.push(["v-bind", '"controlledProps"']);
		}

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
						controlledPropKeys,
						false,
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

		// Boolean values - use special marker for v-bind
		if (value === "true") return "__BOOLEAN__true";
		if (value === "false") return "__BOOLEAN__false";

		// Numeric values
		if (!Number.isNaN(Number(value)) && value !== "" && value !== "null") {
			return `__VBIND_NUMBER__${value}`;
		}

		// Null
		if (value === "null") return null;

		// JSON marker from parser (object/array values)
		if (value.startsWith("__JSON__")) {
			const jsonValue = value.replace(/^__JSON__/, "");
			const escapedValue = escapeForSingleQuotedAttr(jsonValue);
			return `__VBIND__'${escapedValue}'`;
		}

		// String values - if contains double quotes, use single quotes for wrapper
		if (value.includes('"')) {
			// Escape backslashes and single quotes in the value, then wrap in single quotes
			const escapedValue = escapeForSingleQuotedAttr(value);
			return `'${escapedValue}'`;
		}

		return `"${value}"`;
	}

	private toPropKey(argKey: string): string {
		const camel = toCamelCase(argKey);
		return camel.charAt(0).toLowerCase() + camel.slice(1);
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

		for (const [argKey, raw] of Object.entries(argTypes)) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			if ("action" in argType) continue;

			const propKey = this.toPropKey(argKey);
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

		const lines: string[] = ["import { computed, ref } from 'vue';", ""];

		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(`const ${spec.optionsVar} = ${JSON.stringify(spec.options)};`);
				lines.push(`const ${spec.indexVar} = ref(${spec.initialIndex});`);
			} else {
				lines.push(`const ${spec.stateVar} = ref(${spec.initial});`);
			}
		}

		lines.push("");

		for (const spec of specs) {
			const toggleName = this.toToggleName(spec.stateVar);
			if (spec.kind === "options") {
				lines.push(
					`const ${toggleName} = () => (${spec.indexVar}.value = (${spec.indexVar}.value + 1) % ${spec.optionsVar}.length);`,
				);
			} else {
				lines.push(`const ${toggleName} = () => (${spec.stateVar}.value = !${spec.stateVar}.value);`);
			}
		}

		lines.push("");
		lines.push("const controlledProps = computed(() => ({");
		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(`  ${JSON.stringify(spec.propKey)}: ${spec.optionsVar}[${spec.indexVar}.value],`);
			} else {
				lines.push(`  ${JSON.stringify(spec.propKey)}: ${spec.stateVar}.value,`);
			}
		}
		lines.push("}));");
		lines.push("");

		return lines.join("\n");
	}

	private renderControlsUI(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const buttons = specs
			.map((spec) => {
				const toggleName = this.toToggleName(spec.stateVar);
				const label = `Toggle ${spec.stateVar.charAt(0).toUpperCase()}${spec.stateVar.slice(1)}`;
				return `      <IfxButton variant="secondary" @click="${toggleName}">${label}</IfxButton>`;
			})
			.join("\n");

		const stateLines = specs
			.map((spec) => {
				if (spec.kind === "options") {
					return `        <div><b>${spec.argKey}:</b> {{ String(${spec.optionsVar}[${spec.indexVar}.value]) }}</div>`;
				}
				return `        <div><b>${spec.argKey}:</b> {{ String(${spec.stateVar}.value) }}</div>`;
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

	// Note: escaping helpers are imported from string-utils.ts
}
