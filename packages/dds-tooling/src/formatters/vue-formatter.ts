import type { FormatOptions, ICodeFormatter } from "../formatter-interface.js";
import type {
	ComponentEvent,
	ComponentInfo,
	ComponentStructure,
} from "../types.js";
import {
	escapeForSingleQuotedAttr,
	escapeForTemplateLiteral,
	toCamelCase,
	toHandlerFunctionName,
	toKebabCase,
	toPascalCase,
} from "../utils/string-utils.js";
import {
	getControlType,
	inferControlOptions,
	inferControlValue,
	isStoryOnlyControl,
	isNumericControlType,
	resolveControlDefaultValue,
} from "../utils/control-utils.js";

const CONTROLLED_PROPS_PLACEHOLDER = "__CONTROLLED_PROPS__";
const controlledTextPlaceholder = (propKey: string): string =>
	`__CONTROLLED_TEXT_${propKey.toUpperCase()}__`;

type ControlSpec =
	| {
			kind: "boolean";
			argKey: string;
			propKey: string;
			stateVar: string;
			setter: string;
			initial: boolean;
	  }
	| {
			kind: "options";
			argKey: string;
			propKey: string;
			stateVar: string;
			indexVar: string;
			setter: string;
			optionsVar: string;
			initialIndex: number;
			options: unknown[];
	  }
	| {
			kind: "value";
			argKey: string;
			propKey: string;
			stateVar: string;
			setter: string;
			controlType: string;
			initialValue: string | number;
	  };

export class VueCodeFormatter implements ICodeFormatter {
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "      " } = options;
		const isFirstOfType = new Map<string, boolean>();
		const specs = this.getControlSpecs(component);
		const rootTextControl = this.getRootTextControl(component, specs);
		const controlledArgKeys = new Set(
			specs
				.filter((spec) => spec.propKey !== rootTextControl?.propKey)
				.map((spec) => spec.propKey),
		);

		return this.structureToTemplate(
			component.structure,
			component,
			indent,
			isFirstOfType,
			controlledArgKeys,
			rootTextControl,
			true,
		);
	}

	formatEventHandlers(
		component: ComponentInfo,
		_options: FormatOptions,
	): string {
		if (component.events.length === 0) return "";

		const specs = this.getControlSpecs(component);
		const controlHandlerNames = new Set(specs.map((s) => this.toControlHandlerName(s.stateVar)));

		return component.events
			.filter((event) => !controlHandlerNames.has(toHandlerFunctionName(event.name)))
			.map((event) => {
				const handlerName = toHandlerFunctionName(event.name);
				return `const ${handlerName} = (event: CustomEvent) => {
  console.log('${event.name}:', event);
  // Add your handler logic here
};`;
			})
			.join("\n\n");
	}

	formatImports(_component: ComponentInfo): string {
		return "";
	}

	formatComponentFile(component: ComponentInfo): string {
		const specs = this.getControlSpecs(component);
		const rootTextControl = this.getRootTextControl(component, specs);
		const hasControls = specs.length > 0;
		const vueImports = hasControls ? `import { computed, ref } from 'vue';` : "";
		const componentImports = this.buildComponentImports(component, hasControls);
		const controlsState = this.renderControlsState(specs);
		const eventHandlers = this.formatEventHandlers(component, { indent: "  " });
		const getInputValueHelper = hasControls
			? 'const getInputValue = (event: Event) => String((event.target as HTMLInputElement | null)?.value ?? "");'
			: "";
		const template = this.formatComponent(component, { indent: "    " });
		const controlsUI = this.renderControlsUI(specs);
		const codeForDisplay = this.generateCodeForDisplay(
			component,
			eventHandlers,
			template,
			hasControls,
			rootTextControl,
		);
		const escapedCodeForDisplay = escapeForTemplateLiteral(codeForDisplay);
		const brokenScriptClosingTag = `\${'</'}script>`;
		const brokenTemplateClosingTag = `\${'</'}template>`;
		const codeWithBrokenTags = escapedCodeForDisplay
			.replace(/<\/script>/g, brokenScriptClosingTag)
			.replace(/<\/template>/g, brokenTemplateClosingTag);
		const codeStringDeclaration = hasControls
			? this.renderDynamicCodeString(specs, codeWithBrokenTags, rootTextControl)
			: `const codeString = \`${codeWithBrokenTags}\`;`;

		const scriptSections = [
			vueImports,
			componentImports,
			controlsState,
			eventHandlers,
			getInputValueHelper,
			codeStringDeclaration,
		].filter(Boolean);

		return `<script setup lang="ts">
${scriptSections.join("\n\n")}
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

	private buildComponentImports(component: ComponentInfo, includeControls: boolean): string {
		const importsSet = new Set(
			Array.from(this.collectComponentTags(component.structure))
				.filter((tag) => tag.startsWith("ifx-"))
				.map((tag) => toPascalCase(tag)),
		);

		const specs = this.getControlSpecs(component);
		if (includeControls && specs.some((spec) => spec.kind !== "value")) {
			importsSet.add("IfxButton");
		}
		if (includeControls && specs.some((spec) => spec.kind === "value")) {
			importsSet.add("IfxTextField");
		}
		if (component.component === "ifx-button" && this.hasControl(component, "icon")) {
			importsSet.add("IfxIcon");
		}

		if (importsSet.size === 0) return "";
		return `import { ${Array.from(importsSet).sort().join(", ")} } from '@infineon/infineon-design-system-vue';`;
	}

	private generateCodeForDisplay(
		component: ComponentInfo,
		eventHandlers: string,
		template: string,
		hasControls: boolean,
		rootTextControl?: Extract<ControlSpec, { kind: "value" }>,
	): string {
		const imports = this.buildComponentImports(component, false);
		let displayTemplate = hasControls
			? template.replace('v-bind="controlledProps"', CONTROLLED_PROPS_PLACEHOLDER)
			: template;

		if (rootTextControl) {
			displayTemplate = displayTemplate.replace(
				`{{ String(${rootTextControl.stateVar}) }}`,
				controlledTextPlaceholder(rootTextControl.propKey),
			);
		}

		let displayCode = '<script setup lang="ts">';
		if (imports) {
			displayCode += `\n${imports}`;
		}
		if (eventHandlers) {
			displayCode += `\n\n${eventHandlers}`;
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
			.filter((spec) => spec.propKey !== rootTextControl?.propKey)
			.map(
				(spec) =>
					`  [${JSON.stringify(spec.argKey)}, ${this.getControlValueExpression(spec)}],`,
			)
			.join("\n");

		const lines = [
			"const formatPropValueForCode = (name: string, value: unknown): string => {",
			"  if (typeof value === 'boolean') return ':' + name + '=\"' + String(value) + '\"';",
			"  if (typeof value === 'number') return ':' + name + '=\"' + String(value) + '\"';",
			"  if (value === null) return ':' + name + '=\"null\"';",
			"  if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {",
			"    const escaped = JSON.stringify(value).replace(/'/g, \"\\\\'\");",
			'    return ":" + name + "=\'" + escaped + "\'";',
			"  }",
			"  const escaped = String(value)",
			"    .replace(/&/g, '&amp;')",
			"    .replace(/</g, '&lt;')",
			"    .replace(/>/g, '&gt;')",
			"    .replace(/\"/g, '&quot;');",
			"  return name + '=\"' + escaped + '\"';",
			"};",
			"",
			"const controlledPropsCode = computed(() => [",
			entries,
			"]",
			"  .map(([name, value]) => '        ' + formatPropValueForCode(String(name), value))",
			"  .join('\\n'));",
			"",
			`const codeTemplate = computed(() => \`${escapedCodeTemplate}\`.replace(${JSON.stringify(CONTROLLED_PROPS_PLACEHOLDER)}, controlledPropsCode.value));`,
		];

		if (rootTextControl) {
			lines.push(
				"",
				"const escapeTextForCode = (value: string) =>",
				"  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');",
				"",
				`const codeString = computed(() => codeTemplate.value.replace(${JSON.stringify(controlledTextPlaceholder(rootTextControl.propKey))}, escapeTextForCode(String(${rootTextControl.stateVar}.value ?? ''))));`,
			);
		} else {
			lines.push("", "const codeString = codeTemplate;");
		}

		return lines.join("\n");
	}

	private structureToTemplate(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
		controlledArgKeys: Set<string>,
		rootTextControl: Extract<ControlSpec, { kind: "value" }> | undefined,
		isRoot: boolean,
	): string {
		const componentName = struct.tag;
		const isFirst = !isFirstOfType.has(struct.tag);
		if (isFirst) {
			isFirstOfType.set(struct.tag, true);
		}

		const propEntries = Object.entries(struct.attributes)
			.filter(([key]) => {
				const propKey = this.toPropKey(key);
				if (isRoot && controlledArgKeys.has(propKey)) return false;
				if (
					this.isChildControlledProp(componentInfo, struct.tag, propKey) &&
					controlledArgKeys.has(propKey)
				) {
					return false;
				}
				return true;
			})
			.map(([key, value]) => this.toVueProp(key, value))
			.filter((entry): entry is string => entry !== null);

		const eventProps: string[] = [];
		if (isFirst && componentInfo.events.length > 0) {
			const relevantEvents = componentInfo.events.filter((event) =>
				this.shouldAttachEvent(event, struct, componentInfo, isRoot),
			);

			relevantEvents.forEach((event) => {
				eventProps.push(`@${event.name}="${toHandlerFunctionName(event.name)}"`);
			});
		}

		const allProps = [...propEntries, ...eventProps];
		allProps.push(
			...this.getInjectedControlledProps(componentInfo, struct.tag, controlledArgKeys),
		);

		if (isRoot && controlledArgKeys.size > 0) {
			allProps.push('v-bind="controlledProps"');
		}

		const openTag = this.formatOpeningTag(componentName, allProps, indent);

		if (
			isRoot &&
			componentInfo.component === "ifx-button" &&
			this.hasControl(componentInfo, "icon")
		) {
			const textContent = rootTextControl
				? `{{ String(${rootTextControl.stateVar}) }}`
				: struct.textContent.trim();
			return `${openTag}>\n${indent}  <IfxIcon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'left'" :icon="String(controlledProps.icon)" />\n${indent}  ${textContent}\n${indent}  <IfxIcon v-if="controlledProps.icon && String(controlledProps.iconPosition ?? 'left') === 'right'" :icon="String(controlledProps.icon)" />\n${indent}</${componentName}>`;
		}

		if (struct.children && struct.children.length > 0) {
			const childrenTemplate = struct.children
				.map((child) =>
					this.structureToTemplate(
						child,
						componentInfo,
						`${indent}  `,
						isFirstOfType,
						controlledArgKeys,
						rootTextControl,
						false,
					),
				)
				.join("\n");
			return `${openTag}>\n${childrenTemplate}\n${indent}</${componentName}>`;
		}

		if (struct.textContent) {
			if (isRoot && rootTextControl) {
				return `${openTag}>\n${indent}  {{ String(${rootTextControl.stateVar}) }}\n${indent}</${componentName}>`;
			}
			const trimmedText = struct.textContent.trim();
			return `${openTag}>\n${indent}  ${trimmedText}\n${indent}</${componentName}>`;
		}

		return `${openTag} />`;
	}

	private formatOpeningTag(componentName: string, props: string[], indent: string): string {
		if (props.length === 0) {
			return `${indent}<${componentName}`;
		}
		if (props.length === 1) {
			return `${indent}<${componentName} ${props[0]}`;
		}

		const propsString = props.map((prop) => `${indent}  ${prop}`).join("\n");
		return `${indent}<${componentName}\n${propsString}`;
	}

	private toVueProp(name: string, value: string): string | null {
		if (value === "undefined") return null;
		if (value === "null") return null;
		if (value === "true") return `:${name}="true"`;
		if (value === "false") return `:${name}="false"`;
		if (!Number.isNaN(Number(value)) && value !== "" && value !== "null") {
			return `:${name}="${value}"`;
		}
		if (value.startsWith("__JSON__")) {
			const jsonValue = value.replace(/^__JSON__/, "");
			const escapedValue = escapeForSingleQuotedAttr(jsonValue);
			return `:${name}='${escapedValue}'`;
		}
		if (value.includes('"')) {
			const escapedValue = escapeForSingleQuotedAttr(value);
			return `${name}='${escapedValue}'`;
		}
		return `${name}="${value}"`;
	}

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

	private shouldAttachEvent(
		event: ComponentEvent,
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		isRoot: boolean,
	): boolean {
		if (event.sourceComponent) {
			return event.sourceComponent === struct.tag;
		}

		return isRoot && struct.tag === componentInfo.component;
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

	private isChildControlledPropForAnyTag(
		component: ComponentInfo,
		propKey: string,
	): boolean {
		const comp = component.component;
		const childTags = component.structure.children?.map((c) => c.tag) ?? [];
		return childTags.some((tag) => this.isChildControlledProp(component, tag, propKey)) ||
			(comp === "ifx-accordion" && propKey === "icon") ||
			(comp === "ifx-content-switcher" && propKey === "icon") ||
			(comp === "ifx-tabs" && (propKey === "icon" || propKey === "iconPosition")) ||
			(comp === "ifx-segmented-control" && propKey === "icon") ||
			(comp === "ifx-dropdown" && propKey === "icon") ||
			(comp === "ifx-sidebar" && propKey === "icon");
	}

	private getInjectedControlledProps(
		component: ComponentInfo,
		structTag: string,
		controlledArgKeys: Set<string>,
	): string[] {
		const injectedProps: string[] = [];

		if (
			component.component === "ifx-accordion" &&
			structTag === "ifx-accordion-item" &&
			controlledArgKeys.has("icon")
		) {
			injectedProps.push(`:icon="String(controlledProps.icon ?? '')"`);
		}

		if (
			component.component === "ifx-content-switcher" &&
			structTag === "ifx-icon" &&
			controlledArgKeys.has("icon")
		) {
			injectedProps.push(`:icon="String(controlledProps.icon ?? '')"`);
		}

		if (component.component === "ifx-tabs" && structTag === "ifx-tab") {
			if (controlledArgKeys.has("icon")) {
				injectedProps.push(`:icon="String(controlledProps.icon ?? '')"`);
			}
			if (controlledArgKeys.has("iconPosition")) {
				injectedProps.push(`:icon-position="String(controlledProps.iconPosition ?? 'left')"`);
			}
		}

		if (
			component.component === "ifx-segmented-control" &&
			structTag === "ifx-segment" &&
			controlledArgKeys.has("icon")
		) {
			injectedProps.push(`:icon="String(controlledProps.icon ?? '')"`);
		}

		if (
			component.component === "ifx-dropdown" &&
			structTag === "ifx-dropdown-item" &&
			controlledArgKeys.has("icon")
		) {
			injectedProps.push(`:icon="String(controlledProps.icon ?? '')"`);
		}

		if (
			component.component === "ifx-sidebar" &&
			structTag === "ifx-sidebar-item" &&
			controlledArgKeys.has("icon")
		) {
			injectedProps.push(`:icon="String(controlledProps.icon ?? '')"`);
		}

		return injectedProps;
	}

	private toStateVar(argKey: string): string {
		return this.toPropKey(argKey);
	}

	private toPropKey(argKey: string): string {
		const camel = toCamelCase(argKey);
		return camel.charAt(0).toLowerCase() + camel.slice(1);
	}

	private toSetter(varName: string): string {
		return `set${varName.charAt(0).toUpperCase()}${varName.slice(1)}`;
	}

	private toControlHandlerName(varName: string): string {
		return `handle${varName.charAt(0).toUpperCase()}${varName.slice(1)}Change`;
	}

	private getControlSpecs(component: ComponentInfo): ControlSpec[] {
		const specs: ControlSpec[] = [];
		const argTypes = component.argTypes || {};

		// Only allow args that correspond to valid attributes of the root component per CEM.
		// This prevents child-component props (e.g., ifx-action-list-item's `disabled`)
		// from being surfaced as controls on the root element.
		const rootPropTypes = (component.propTypes ?? {})[component.component] ?? {};
		const hasCemForRoot = Object.keys(rootPropTypes).length > 0;

		for (const [argKey, raw] of Object.entries(argTypes)) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			if ("action" in argType) continue;
			if (isStoryOnlyControl(argType)) continue;
			if (hasCemForRoot) {
				const kebabArgKey = toKebabCase(argKey);
				const childPropKey = this.toPropKey(argKey);
				const isChildProp = this.isChildControlledPropForAnyTag(component, childPropKey);
				if (!isChildProp && !(kebabArgKey in rootPropTypes) && !(argKey in rootPropTypes)) continue;
			}
			const stateVar = this.toStateVar(argKey);
			const propKey = stateVar;
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
					setter: this.toSetter(stateVar),
					initial: Boolean(defaultValue),
				});
				continue;
			}

			const options =
				explicitOptions && explicitOptions.length > 0
					? explicitOptions.filter((option: unknown) => option !== undefined)
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
					setter: this.toSetter(indexVar),
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
				setter: this.toSetter(stateVar),
				controlType,
				initialValue: inferControlValue(argKey, controlType, defaultValue),
			});
		}

		return specs;
	}

	private renderControlsState(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const lines: string[] = [];

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
			const fnName = this.toControlHandlerName(spec.stateVar);

			if (spec.kind === "options") {
				lines.push(
					`const ${fnName} = () => { ${spec.indexVar}.value = (${spec.indexVar}.value + 1) % ${spec.optionsVar}.length; };`,
				);
			} else if (spec.kind === "value") {
				if (isNumericControlType(spec.controlType)) {
					lines.push(
						`const ${fnName} = (nextValue: string) => { ${spec.stateVar}.value = Number(nextValue); };`,
					);
				} else {
					lines.push(
						`const ${fnName} = (nextValue: string) => { ${spec.stateVar}.value = nextValue; };`,
					);
				}
			} else {
				lines.push(`const ${fnName} = () => { ${spec.stateVar}.value = !${spec.stateVar}.value; };`);
			}
		}

		lines.push("");
		lines.push("const controlledProps = computed<Record<string, unknown>>(() => ({");
		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(`  ${JSON.stringify(spec.propKey)}: ${spec.optionsVar}[${spec.indexVar}.value],`);
			} else {
				lines.push(`  ${JSON.stringify(spec.propKey)}: ${spec.stateVar}.value,`);
			}
		}
		lines.push("}));");

		return lines.join("\n");
	}

	private renderControlsUI(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const toggleButtons = specs
			.filter((spec) => spec.kind !== "value")
			.map((spec) => {
				const fnName = this.toControlHandlerName(spec.stateVar);
				const label = `Toggle ${spec.stateVar.charAt(0).toUpperCase()}${spec.stateVar.slice(1)}`;
				return `        <ifx-button variant="secondary" @click="${fnName}">${label}</ifx-button>`;
			})
			.join("\n");

		const inputFields = specs
			.filter((spec): spec is Extract<ControlSpec, { kind: "value" }> => spec.kind === "value")
			.map((spec) => {
				const fnName = this.toControlHandlerName(spec.stateVar);
				const inputType = spec.controlType === "password" ? "password" : "text";
				return `        <ifx-text-field label="${spec.argKey}" type="${inputType}" :value="String(${spec.stateVar})" @input="${fnName}(getInputValue($event))" />`;
			})
			.join("\n");

		const stateLines = specs
			.map((spec) => {
				if (spec.kind === "options") {
					return `      <div><b>${spec.argKey}:</b> {{ String(${spec.optionsVar}[${spec.indexVar}]) }}</div>`;
				}
				return `      <div><b>${spec.argKey}:</b> {{ String(${spec.stateVar}) }}</div>`;
			})
			.join("\n");

		return `
    <h3 class="controls-title">Controls</h3>
    ${toggleButtons ? `<div class="controls controls-toggle">\n${toggleButtons}\n    </div>` : ""}
    ${inputFields ? `<div class="controls controls-input">\n${inputFields}\n    </div>` : ""}

    <div class="state">
${stateLines}
    </div>`;
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

	private getControlValueExpression(spec: ControlSpec): string {
		if (spec.kind === "options") {
			return `${spec.optionsVar}[${spec.indexVar}.value]`;
		}

		return `${spec.stateVar}.value`;
	}
}