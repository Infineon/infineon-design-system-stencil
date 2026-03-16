import type { FormatOptions, ICodeFormatter } from "../interfaces.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import {
	escapeForSingleQuotedAttr,
	escapeForTemplateLiteral,
	toCamelCase,
	toHandlerFunctionName,
} from "../utils/string-utils.js";
import {
	getControlType,
	inferControlValue,
	inferControlOptions,
	isNumericControlType,
	resolveControlDefaultValue,
} from "../utils/control-utils.js";

const CONTROLLED_ATTRS_PLACEHOLDER = "__CONTROLLED_ATTRS__";
const controlledTextPlaceholder = (propKey: string): string =>
	`__CONTROLLED_TEXT_${propKey.toUpperCase()}__`;

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
	  }
	| {
			kind: "value";
			argKey: string;
			propKey: string;
			stateVar: string;
			controlType: string;
			initialValue: string | number;
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
		const rootTextControl = this.getRootTextControl(component, specs);
		const controlledPropKeys = new Set(
			specs
				.filter((s) => s.propKey !== rootTextControl?.propKey)
				.map((s) => s.propKey),
		);

		return this.structureToTemplate(
			component.structure,
			component,
			indent,
			isFirstOfType,
			controlledPropKeys,
			rootTextControl,
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
		const rootTextControl = this.getRootTextControl(component, specs);
		const controlsState = this.renderControlsState(specs, rootTextControl);
		const controlsUI = this.renderControlsUI(specs);

		// Extract all Ifx components used in this example
		const ifxComponents = this.extractIfxComponents(component.structure);
		if (component.component === "ifx-button" && this.hasControl(component, "icon")) {
			ifxComponents.add("IfxIcon");
		}
		if (specs.some((spec) => spec.kind !== "value")) {
			ifxComponents.add("IfxButton");
		}
		if (specs.some((spec) => spec.kind === "value")) {
			ifxComponents.add("IfxTextField");
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
			rootTextControl,
		);
		const escapedCodeForDisplay = escapeForTemplateLiteral(codeForDisplay);

		// Break up closing tags using template expressions to prevent Vue SFC parser issues
		// Replace </script> with ${'</'}script> and </template> with ${'</'}template>
		const codeWithBrokenTags = escapedCodeForDisplay
			.replace(/<\/script>/g, "${'</'}script>")
			.replace(/<\/template>/g, "${'</'}template>");
		const codeStringDeclaration =
			specs.length > 0
				? this.renderDynamicCodeString(specs, codeWithBrokenTags, rootTextControl)
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
		rootTextControl?: Extract<ControlSpec, { kind: "value" }>,
	): string {
		let displayTemplate = hasControls
			? template.replace('v-bind="controlledProps"', CONTROLLED_ATTRS_PLACEHOLDER)
			: template;
		if (rootTextControl) {
			displayTemplate = displayTemplate.replace(
				`{{ String(${rootTextControl.stateVar}) }}`,
				controlledTextPlaceholder(rootTextControl.propKey),
			);
		}

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
		rootTextControl?: Extract<ControlSpec, { kind: "value" }>,
	): string {
		const entries = specs
			.filter((s) => s.propKey !== rootTextControl?.propKey)
			.map(
				(s) =>
					`  [${JSON.stringify(s.argKey)}, controlledProps.value[${JSON.stringify(s.propKey)}]],`,
			)
			.join("\n");

		const textReplacement = rootTextControl
			? `

const escapedText = String(controlledProps.value[${JSON.stringify(rootTextControl.propKey)}] ?? "")
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const codeString = codeStringWithAttrs.replace(${JSON.stringify(controlledTextPlaceholder(rootTextControl.propKey))}, escapedText);`
			: "\n\nconst codeString = codeStringWithAttrs;";

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

const codeStringWithAttrs = \`${escapedCodeTemplate}\`.replace(${JSON.stringify(CONTROLLED_ATTRS_PLACEHOLDER)}, controlledAttrsCode);${textReplacement}`;
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
		rootTextControl: Extract<ControlSpec, { kind: "value" }> | undefined,
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

		allProps.push(
			...this.getInjectedControlledProps(componentInfo, struct.tag, controlledPropKeys),
		);

		if (isRoot && controlledPropKeys.size > 0) {
			allProps.push(["v-bind", rootTextControl ? '"boundProps"' : '"controlledProps"']);
		}

		// Format opening tag with props
		const openTag = this.formatOpeningTag(componentName, allProps, indent);

		if (
			isRoot &&
			componentInfo.component === "ifx-button" &&
			this.hasControl(componentInfo, "icon")
		) {
			const textContent = rootTextControl
				? `{{ String(${rootTextControl.stateVar}) }}`
				: struct.textContent.trim();
			return `${openTag}>\n${indent}  <ifx-icon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'left'" :icon="String(controlledProps.icon)"></ifx-icon>\n${indent}  ${textContent}\n${indent}  <ifx-icon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'right'" :icon="String(controlledProps.icon)"></ifx-icon>\n${indent}</${componentName}>`;
		}

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
						rootTextControl,
						false,
					),
				)
				.join("\n");
			return `${openTag}>\n${childrenTemplate}\n${indent}</${componentName}>`;
		}

		// Handle text content
		if (struct.textContent) {
			if (isRoot && rootTextControl) {
				return `${openTag}>\n${indent}  {{ String(${rootTextControl.stateVar}) }}\n${indent}</${componentName}>`;
			}
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

	private getInjectedControlledProps(
		component: ComponentInfo,
		structTag: string,
		controlledPropKeys: Set<string>,
	): [string, string][] {
		const injectedProps: [string, string][] = [];

		if (
			component.component === "ifx-accordion" &&
			structTag === "ifx-accordion-item" &&
			controlledPropKeys.has("icon")
		) {
			injectedProps.push([":icon", "String(controlledProps.icon ?? '')"]);
		}

		if (
			component.component === "ifx-content-switcher" &&
			structTag === "ifx-icon" &&
			controlledPropKeys.has("icon")
		) {
			injectedProps.push([":icon", "String(controlledProps.icon ?? '')"]);
		}

		if (component.component === "ifx-tabs" && structTag === "ifx-tab") {
			if (controlledPropKeys.has("icon")) {
				injectedProps.push([":icon", "String(controlledProps.icon ?? '')"]);
			}
			if (controlledPropKeys.has("iconPosition")) {
				injectedProps.push([
					":icon-position",
					"String(controlledProps.iconPosition ?? 'left')",
				]);
			}
		}

		if (
			component.component === "ifx-segmented-control" &&
			structTag === "ifx-segment" &&
			controlledPropKeys.has("icon")
		) {
			injectedProps.push([":icon", "String(controlledProps.icon ?? '')"]);
		}

		if (
			component.component === "ifx-dropdown" &&
			structTag === "ifx-dropdown-item" &&
			controlledPropKeys.has("icon")
		) {
			injectedProps.push([":icon", "String(controlledProps.icon ?? '')"]);
		}

		if (
			component.component === "ifx-sidebar" &&
			structTag === "ifx-sidebar-item" &&
			controlledPropKeys.has("icon")
		) {
			injectedProps.push([":icon", "String(controlledProps.icon ?? '')"]);
		}

		return injectedProps;
	}

	private toToggleName(varName: string): string {
		return `toggle${varName.charAt(0).toUpperCase()}${varName.slice(1)}`;
	}

	private getToggleControls(component: ComponentInfo): ControlSpec[] {
		const specs: ControlSpec[] = [];
		const argTypes = component.argTypes || {};

		for (const [argKey, raw] of Object.entries(argTypes)) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			if ("action" in argType) continue;

			const propKey = this.toPropKey(argKey);
			const stateVar = propKey;
			const explicitOptions =
				Array.isArray(argType.options) && argType.options.length > 0
					? argType.options
					: null;
			const controlType = getControlType(argType);
			const defaultValue = resolveControlDefaultValue(component, argKey, propKey);
			const isBool = controlType === "boolean" || typeof defaultValue === "boolean";

			if (isBool) {
				specs.push({
					kind: "boolean",
					argKey,
					propKey,
					stateVar,
					initial: Boolean(defaultValue),
				});
				continue;
			}

			const options =
				explicitOptions && explicitOptions.length > 0
					? explicitOptions.filter((option) => option !== undefined)
					: inferControlOptions(argKey, controlType, defaultValue);

			if (explicitOptions && options.length > 0) {
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

			specs.push({
				kind: "value",
				argKey,
				propKey,
				stateVar,
				controlType,
				initialValue: inferControlValue(argKey, controlType, defaultValue),
			});
		}

		return specs;
	}

	private renderControlsState(
		specs: ControlSpec[],
		rootTextControl?: Extract<ControlSpec, { kind: "value" }>,
	): string {
		if (specs.length === 0) return "";

		const lines: string[] = ["import { computed, ref } from 'vue';", ""];

		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(`const ${spec.optionsVar} = ${JSON.stringify(spec.options)};`);
				lines.push(`const ${spec.indexVar} = ref(${spec.initialIndex});`);
			} else if (spec.kind === "value") {
				if (typeof spec.initialValue === "number") {
					lines.push(`const ${spec.stateVar} = ref(${spec.initialValue});`);
				} else {
					lines.push(`const ${spec.stateVar} = ref(${JSON.stringify(spec.initialValue)});`);
				}
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
			} else if (spec.kind === "value") {
				if (isNumericControlType(spec.controlType)) {
					lines.push(
						`const ${toggleName} = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ${spec.stateVar}.value = Number(raw); };`,
					);
				} else {
					lines.push(
						`const ${toggleName} = (event: Event | CustomEvent<{ value?: unknown }>) => { const custom = event as CustomEvent<{ value?: unknown }>; const target = event.target as { value?: unknown } | null; const raw = custom.detail?.value ?? target?.value ?? ''; ${spec.stateVar}.value = String(raw); };`,
					);
				}
			} else {
				lines.push(`const ${toggleName} = () => (${spec.stateVar}.value = !${spec.stateVar}.value);`);
			}
		}

		lines.push("");
		lines.push("const controlledProps = computed(() => ({");
		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(`  ${JSON.stringify(spec.propKey)}: ${spec.optionsVar}[${spec.indexVar}.value],`);
			} else if (spec.kind === "value") {
				lines.push(`  ${JSON.stringify(spec.propKey)}: ${spec.stateVar}.value,`);
			} else {
				lines.push(`  ${JSON.stringify(spec.propKey)}: ${spec.stateVar}.value,`);
			}
		}
		lines.push("}));");
		if (rootTextControl) {
			lines.push("const boundProps = computed(() => {");
			lines.push("  const source = controlledProps.value as Record<string, unknown>;");
			lines.push(`  const { ${JSON.stringify(rootTextControl.propKey)}: _ignored, ...rest } = source;`);
			lines.push("  return rest;");
			lines.push("});");
		} else {
			lines.push("const boundProps = controlledProps;");
		}
		lines.push("");

		return lines.join("\n");
	}

	private renderControlsUI(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const toggleButtons = specs
			.filter((spec) => spec.kind !== "value")
			.map((spec) => {
				const toggleName = this.toToggleName(spec.stateVar);
				const label = `Toggle ${spec.stateVar.charAt(0).toUpperCase()}${spec.stateVar.slice(1)}`;
				return `      <IfxButton variant="secondary" @click="${toggleName}">${label}</IfxButton>`;
			})
			.join("\n");

		const inputFields = specs
			.filter((spec): spec is Extract<ControlSpec, { kind: "value" }> => spec.kind === "value")
			.map((spec) => {
				const toggleName = this.toToggleName(spec.stateVar);
				const inputType =
					spec.controlType === "color"
						? "color"
						: spec.controlType === "date"
							? "date"
							: isNumericControlType(spec.controlType)
								? "number"
								: "text";
				return `      <IfxTextField label="${spec.argKey}" type="${inputType}" :value="String(${spec.stateVar})" @input="${toggleName}" @ifxInput="${toggleName}" />`;
			})
			.join("\n");

		const stateLines = specs
			.map((spec) => {
				if (spec.kind === "options") {
					return `        <div><b>${spec.argKey}:</b> {{ String(${spec.optionsVar}[${spec.indexVar}]) }}</div>`;
				}
				if (spec.kind === "value") {
					return `        <div><b>${spec.argKey}:</b> {{ String(${spec.stateVar}) }}</div>`;
				}
				return `        <div><b>${spec.argKey}:</b> {{ String(${spec.stateVar}) }}</div>`;
			})
			.join("\n");

		return `
    <h3 class="controls-title">Controls</h3>
	${toggleButtons ? `<div class="controls controls-toggle">\n${toggleButtons}\n    </div>` : ""}
	${inputFields ? `<div class="controls controls-input">\n${inputFields}\n    </div>` : ""}

    <div class="state">
${stateLines}
    </div>
`;
	}

	private getRootTextControl(
		component: ComponentInfo,
		specs: ControlSpec[],
	): Extract<ControlSpec, { kind: "value" }> | undefined {
		if (
			!component.structure.textContent ||
			(component.structure.children?.length ?? 0) > 0
		) {
			return undefined;
		}

		for (const spec of specs) {
			if (spec.kind !== "value") continue;
			const raw = (component.argTypes || {})[spec.argKey] as
				| { table?: { category?: string } }
				| undefined;
			const category = raw?.table?.category?.toLowerCase() || "";
			if (category.includes("story controls")) {
				return spec;
			}
		}

		return undefined;
	}

	// Note: escaping helpers are imported from string-utils.ts
}
