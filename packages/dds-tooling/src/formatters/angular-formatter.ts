import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { FormatOptions, ICodeFormatter } from "../formatter-interface.js";
import type {
	ComponentInfo,
	ComponentStructure,
} from "../types.js";
import {
	escapeForSingleQuotedAttr,
	escapeForTemplateLiteral,
	toAngularEventName,
	toCamelCase,
	toHandlerFunctionName,
	toKebabCase,
	toPascalCase,
} from "../utils/string-utils.js";
import {
	getChildTagFromArgType,
	getControlType,
	inferControlOptions,
	inferControlValue,
	isStoryOnlyControl,
	isNumericControlType,
	resolveControlDefaultValue,
} from "../utils/control-utils.js";

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

const CURRENT_DIR = dirname(fileURLToPath(import.meta.url));
const ANGULAR_COMPONENTS_FILE_CANDIDATES = [
	resolve(process.cwd(), "../packages/wrapper-angular/src/lib/stencil-generated/components.ts"),
	resolve(process.cwd(), "packages/wrapper-angular/src/lib/stencil-generated/components.ts"),
	resolve(CURRENT_DIR, "../../../wrapper-angular/src/lib/stencil-generated/components.ts"),
	resolve(CURRENT_DIR, "../../wrapper-angular/src/lib/stencil-generated/components.ts"),
];

export class AngularCodeFormatter implements ICodeFormatter {
	private readonly angularInputsByTag = this.loadAngularInputsByTag();

	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "    " } = options;
		const specs = this.getControlledSpecs(component);
		const rootTextControl = this.getRootTextControl(component, specs);
		const controlledSpecs = specs.filter(
			(spec) => spec.propKey !== rootTextControl?.propKey,
		);
		const controlledSpecsByPropKey = new Map(
			controlledSpecs.map((spec) => [spec.propKey, spec]),
		);
		const isFirstOfType = new Map<string, boolean>();

		return this.structureToHTML(
			component.structure,
			component,
			indent,
			isFirstOfType,
			controlledSpecsByPropKey,
			rootTextControl,
			true,
		);
	}

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

	formatImports(component: ComponentInfo): string {
		const imports = this.getStandaloneImports(component).join(", ");
		return `import { ${imports} } from '@infineon/infineon-design-system-angular/standalone';`;
	}

	formatComponentTypeScript(component: ComponentInfo): string {
		return this.formatTypeScript(component, true);
	}

	formatModuleComponentTypeScript(component: ComponentInfo): string {
		return this.formatTypeScript(component, false);
	}

	formatComponentTemplate(component: ComponentInfo): string {
		const html = this.formatComponent(component, { indent: "  " });
		const controlsUI = this.renderControlsUI(this.getControlledSpecs(component));
		const componentFileName = this.getComponentFileName(component);

		return `${html}${controlsUI ? `\n${controlsUI}` : ""}

<details class="code-details">
  <summary>View Code</summary>
  <div class="code-blocks">
    <h3>${componentFileName}.ts</h3>
    <pre><code class="language-typescript" [innerHTML]="tsCode"></code></pre>

    <h3>${componentFileName}.html</h3>
    <pre><code class="language-markup" [innerHTML]="htmlCode"></code></pre>
  </div>
</details>
`;
	}

	formatComponentStyles(): string {
		return `// Add component-specific styles here
`;
	}

	private formatTypeScript(component: ComponentInfo, standalone: boolean): string {
		const componentSelector = this.getComponentSelector(component);
		const componentClassName = this.getComponentClassName(component);
		const componentImports = standalone ? this.getStandaloneImports(component) : [];
		const imports = standalone ? this.formatImports(component) : "";
		const classMembers = this.buildClassMembers(component);
		const displayTypeScript = this.generateTypeScriptCode(
			component,
			standalone,
			componentImports,
			classMembers,
		);
		const htmlCode = this.escapeHtml(
			this.formatComponent(component, { indent: "  " }),
		);

		const decoratorLines = standalone
			? [
				`@Component({`,
				`  selector: 'app-${componentSelector}',`,
				`  imports: [ ${componentImports.join(", ")} ],`,
				`  templateUrl: './${componentSelector}.html',`,
				`  styleUrl: './${componentSelector}.scss'`,
				`})`,
			]
			: [
				`@Component({`,
				`  selector: 'app-${componentSelector}',`,
				`  templateUrl: './${componentSelector}.html',`,
				`  styleUrl: './${componentSelector}.scss',`,
				`  standalone: false`,
				`})`,
			];

		return [
			imports,
			`import { Component } from '@angular/core';`,
			"",
			...decoratorLines,
			`export class ${componentClassName} {`,
			`  protected readonly tsCode = \`${this.escapeBackticks(displayTypeScript)}\`;`,
			`  protected readonly htmlCode = \`${this.escapeBackticks(htmlCode)}\`;`,
			classMembers ? `\n${classMembers}\n` : "",
			`}`,
		]
			.filter(Boolean)
			.join("\n");
	}

	private generateTypeScriptCode(
		component: ComponentInfo,
		standalone: boolean,
		componentImports: string[],
		classMembers: string,
	): string {
		const componentSelector = this.getComponentSelector(component);
		const componentClassName = this.getComponentClassName(component);
		const imports = standalone ? this.formatImports(component) : "";

		const decoratorLines = standalone
			? [
				`@Component({`,
				`  selector: 'app-${componentSelector}',`,
				`  imports: [ ${componentImports.join(", ")} ],`,
				`  templateUrl: './${componentSelector}.html',`,
				`  styleUrl: './${componentSelector}.scss'`,
				`})`,
			]
			: [
				`@Component({`,
				`  selector: 'app-${componentSelector}',`,
				`  templateUrl: './${componentSelector}.html',`,
				`  styleUrl: './${componentSelector}.scss',`,
				`  standalone: false`,
				`})`,
			];

		return [
			imports,
			`import { Component } from '@angular/core';`,
			"",
			...decoratorLines,
			`export class ${componentClassName} {`,
			classMembers ? `\n${classMembers}\n` : "",
			`}`,
		]
			.filter(Boolean)
			.join("\n");
	}

	private buildClassMembers(component: ComponentInfo): string {
		const specs = this.getControlledSpecs(component);
		const lines: string[] = [];

		for (const spec of specs) {
			if (spec.kind === "options") {
				lines.push(
					`  protected readonly ${spec.optionsVar} = ${JSON.stringify(spec.options)};`,
				);
				lines.push(`  protected ${spec.indexVar} = ${spec.initialIndex};`);
				continue;
			}

			if (spec.kind === "value") {
				lines.push(
					typeof spec.initialValue === "number"
						? `  protected ${spec.stateVar} = ${spec.initialValue};`
						: `  protected ${spec.stateVar} = ${JSON.stringify(spec.initialValue)};`,
				);
				continue;
			}

			lines.push(`  protected ${spec.stateVar} = ${spec.initial};`);
		}

		if (specs.length > 0) {
			lines.push("");
		}

		for (const spec of specs) {
			const methodName =
				spec.kind === "value"
					? this.toUpdateName(spec.stateVar)
					: this.toControlHandlerName(spec.stateVar);

			if (spec.kind === "options") {
				lines.push(`  protected ${methodName}() {`);
				lines.push(
					`    this.${spec.indexVar} = (this.${spec.indexVar} + 1) % this.${spec.optionsVar}.length;`,
				);
				lines.push("  }");
				lines.push("");
				continue;
			}

			if (spec.kind === "value") {
				lines.push(`  protected ${methodName}(value: string) {`);
				lines.push(
					isNumericControlType(spec.controlType)
						? `    this.${spec.stateVar} = Number(value);`
						: `    this.${spec.stateVar} = value;`,
				);
				lines.push("  }");
				lines.push("");
				continue;
			}

			lines.push(`  protected ${methodName}() {`);
			lines.push(`    this.${spec.stateVar} = !this.${spec.stateVar};`);
			lines.push("  }");
			lines.push("");
		}

		if (specs.length > 0) {
			lines.push(
				"  protected getControlInputValue(event: Event | CustomEvent): string {",
				"    const target = event.target as (HTMLInputElement & { value?: unknown }) | null;",
				"    return String(target?.value ?? '');",
				"  }",
				"",
				"  protected stringifyValue(value: unknown): string {",
				"    if (value === null || value === undefined) return '';",
				"    if (typeof value === 'string') return value;",
				"    if (typeof value === 'object') {",
				"      try {",
				"        return JSON.stringify(value);",
				"      } catch {",
				"        return String(value);",
				"      }",
				"    }",
				"    return String(value);",
				"  }",
				"",
			);
		}

		const eventHandlers = this.formatEventHandlers(component, { indent: "  " });
		if (eventHandlers) {
			lines.push(eventHandlers);
		}

		return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd();
	}

	private structureToHTML(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
		controlledSpecsByPropKey: Map<string, ControlSpec>,
		rootTextControl: Extract<ControlSpec, { kind: "value" }> | undefined,
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
				return !controlledSpecsByPropKey.has(propKey);
			})
			.map(([key, value]) =>
				this.toAngularAttribute(key, value, componentInfo, tag),
			)
			.filter((attr): attr is string => attr !== null);

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

		attrs.push(
			...this.getControlledBindingsForNode(
				componentInfo,
				struct,
				controlledSpecsByPropKey,
			),
		);

		const openTag = this.formatOpeningTag(tag, attrs, indent);

		if (
			isRoot &&
			componentInfo.component === "ifx-button" &&
			controlledSpecsByPropKey.has("icon")
		) {
			const textContent = rootTextControl
				? `{{ ${rootTextControl.stateVar} }}`
				: struct.textContent.trim().replace(/\s+/g, " ");
			const iconExpression = this.getTemplateExpression(
				controlledSpecsByPropKey.get("icon"),
			);
			const iconPositionExpression = this.getTemplateExpression(
				controlledSpecsByPropKey.get("iconPosition"),
			);

			return `${openTag}>\n${indent}  @if (${iconExpression}) {\n${indent}    @if (${iconPositionExpression} === 'left') {\n${indent}      <ifx-icon [icon]="stringifyValue(${iconExpression})"></ifx-icon>\n${indent}    }\n${indent}  }\n${indent}  ${textContent}\n${indent}  @if (${iconExpression} && ${iconPositionExpression} === 'right') {\n${indent}    <ifx-icon [icon]="stringifyValue(${iconExpression})"></ifx-icon>\n${indent}  }\n${indent}</${tag}>`;
		}

		if (struct.children && struct.children.length > 0) {
			const childrenHTML = struct.children
				.map((child) =>
					this.structureToHTML(
						child,
						componentInfo,
						`${indent}  `,
						isFirstOfType,
						controlledSpecsByPropKey,
						rootTextControl,
						false,
					),
				)
				.join("\n");
			return `${openTag}>\n${childrenHTML}\n${indent}</${tag}>`;
		}

		if (struct.textContent) {
			if (isRoot && rootTextControl) {
				return `${openTag}>\n${indent}  {{ ${rootTextControl.stateVar} }}\n${indent}</${tag}>`;
			}

			const trimmedText = struct.textContent.trim().replace(/\s+/g, " ");
			return `${openTag}>${trimmedText}</${tag}>`;
		}

		return `${openTag}></${tag}>`;
	}

	private formatOpeningTag(tag: string, attrs: string[], indent: string): string {
		if (attrs.length === 0) {
			return `${indent}<${tag}`;
		}
		if (attrs.length === 1) {
			return `${indent}<${tag} ${attrs[0]}`;
		}

		const attrsString = attrs.map((attr) => `${indent}  ${attr}`).join("\n");
		return `${indent}<${tag}\n${attrsString}`;
	}

	private toAngularAttribute(
		name: string,
		value: string,
		componentInfo: ComponentInfo,
		tag: string,
	): string | null {
		if (value === "undefined") return null;

		let attrName = name;
		let attrValue = value;
		const isBracketBinding = attrName.startsWith("[") && attrName.endsWith("]");
		if (isBracketBinding) {
			attrName = attrName.slice(1, -1);
			const match = attrValue.match(/^["']([\s\S]*)["']$/);
			if (match) attrValue = match[1];
		}

		if (attrValue.startsWith("__JSON__")) {
			attrValue = attrValue.replace(/^__JSON__/, "");
		}

		const isBooleanProp = this.isBooleanProp(attrName, tag, componentInfo);
		const bindingName = toCamelCase(attrName);

		if (attrValue === "true") {
			return isBooleanProp ? `[${bindingName}]="true"` : `${attrName}="true"`;
		}
		if (attrValue === "false") {
			return isBooleanProp ? `[${bindingName}]="false"` : `${attrName}="false"`;
		}
		if (attrValue === "") {
			return isBooleanProp ? `[${bindingName}]="true"` : `${attrName}=""`;
		}

		if (!Number.isNaN(Number(attrValue)) && attrValue !== "" && attrValue !== "null") {
			return `${attrName}="${attrValue}"`;
		}

		if (attrValue === "null") return null;

		if (
			attrValue.startsWith("[") ||
			attrValue.startsWith("{") ||
			attrValue.includes("[object Object")
		) {
			const camelName = toCamelCase(attrName);
			const original = (componentInfo.defaultArgs as Record<string, unknown>)?.[
				camelName
			];
			let jsonString = attrValue;
			if (original !== undefined && typeof original === "object") {
				try {
					jsonString = JSON.stringify(original);
				} catch {
					// Keep the original value.
				}
			}
			const escapedValue = escapeForSingleQuotedAttr(jsonString);
			return `${attrName}='${escapedValue}'`;
		}

		return `${attrName}="${attrValue}"`;
	}

	private renderControlsUI(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const toggleButtons = specs
			.filter((spec) => spec.kind !== "value")
			.map((spec) => {
				const methodName = this.toControlHandlerName(spec.stateVar);
				return `  <ifx-button variant="secondary" (click)="${methodName}()">Toggle ${this.toLabel(spec.stateVar)}</ifx-button>`;
			})
			.join("\n");

		const inputFields = specs
			.filter((spec): spec is Extract<ControlSpec, { kind: "value" }> => spec.kind === "value")
			.map((spec) => {
				const methodName = this.toUpdateName(spec.stateVar);
				const inputType = isNumericControlType(spec.controlType)
					? "number"
					: spec.controlType === "password"
						? "password"
						: "text";
				return `  <ifx-text-field label="${spec.argKey}" type="${inputType}" [value]="stringifyValue(${spec.stateVar})" (ifxInput)="${methodName}(getControlInputValue($event))"></ifx-text-field>`;
			})
			.join("\n");

		const stateLines = specs
			.map((spec) => `  <div><b>${spec.argKey}:</b> {{ stringifyValue(${this.getTemplateExpression(spec)}) }}</div>`)
			.join("\n");

		return `
<h3 class="controls-title">Controls</h3>
${toggleButtons ? `<div class="controls controls-toggle">\n${toggleButtons}\n</div>` : ""}
${inputFields ? `<div class="controls controls-input">\n${inputFields}\n</div>` : ""}

<div class="state">
${stateLines}
</div>`;
	}

	private getStandaloneImports(component: ComponentInfo): string[] {
		const imports = new Set(
			Array.from(this.collectComponentTags(component.structure))
				.filter((tag) => tag.startsWith("ifx-"))
				.map((tag) => toPascalCase(tag)),
		);

		const specs = this.getControlledSpecs(component);
		if (specs.some((spec) => spec.kind !== "value")) {
			imports.add("IfxButton");
		}
		if (specs.some((spec) => spec.kind === "value")) {
			imports.add("IfxTextField");
		}
		if (
			component.component === "ifx-button" &&
			specs.some((spec) => spec.propKey === "icon")
		) {
			imports.add("IfxIcon");
		}

		return Array.from(imports).sort();
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
			if (component.events.some((event) => event.name === argKey)) continue;
			if (hasCemForRoot) {
				const kebabArgKey = toKebabCase(argKey);
				const childPropKey = this.toStateVar(argKey);
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

			if (controlType === "boolean" || typeof defaultValue === "boolean") {
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

	private getControlledSpecs(component: ComponentInfo): ControlSpec[] {
		const specs = this.getControlSpecs(component);
		return specs.filter((spec) => this.isBindableControl(component, spec));
	}

	private hasControl(component: ComponentInfo, argKey: string): boolean {
		return Object.prototype.hasOwnProperty.call(component.argTypes || {}, argKey);
	}

	private isBindableControl(component: ComponentInfo, spec: ControlSpec): boolean {
		if (this.getSpecialControlBindings(component, component.structure, spec).length > 0) {
			return true;
		}

		// iconPosition is needed for ifx-button icon rendering logic even though
		// it is not a direct Stencil prop and won't be bound to any element attribute
		if (component.component === "ifx-button" && spec.propKey === "iconPosition") {
			return true;
		}

		if (this.getRootTextControl(component, [spec])) {
			return true;
		}

		return this.structureUsesProp(component.structure, spec.propKey);
	}

	private structureUsesProp(struct: ComponentStructure, propKey: string): boolean {
		for (const key of Object.keys(struct.attributes)) {
			const bindingName = this.getBindingName(key);
			if (
				this.toPropKey(key) === propKey &&
				this.supportsAngularInput(struct.tag, bindingName)
			) {
				return true;
			}
		}

		return (struct.children || []).some((child) => this.structureUsesProp(child, propKey));
	}

	private getControlledBindingsForNode(
		component: ComponentInfo,
		struct: ComponentStructure,
		controlledSpecsByPropKey: Map<string, ControlSpec>,
	): string[] {
		const bindings: string[] = [];

		for (const key of Object.keys(struct.attributes)) {
			const spec = controlledSpecsByPropKey.get(this.toPropKey(key));
			if (!spec) continue;
			const bindingName = this.getBindingName(key);
			if (!this.supportsAngularInput(struct.tag, bindingName)) continue;
			bindings.push(
				`[${bindingName}]="${this.getTemplateExpression(spec)}"`,
			);
		}

		for (const spec of controlledSpecsByPropKey.values()) {
			for (const binding of this.getSpecialControlBindings(component, struct, spec)) {
				if (!this.supportsAngularInput(struct.tag, binding.propName)) continue;
				if (!this.supportsAngularInput(struct.tag, binding.propName)) continue;
				bindings.push(
					`[${binding.propName}]="${this.getTemplateExpression(spec)}"`,
				);
			}
		}

		return Array.from(new Set(bindings));
	}

	private shouldExcludeRootControlledProp(component: ComponentInfo, propKey: string): boolean {
		if (component.component === "ifx-button" && (propKey === "icon" || propKey === "iconPosition")) {
			return true;
		}

		return (
			(component.component === "ifx-accordion" && propKey === "icon") ||
			(component.component === "ifx-content-switcher" && propKey === "icon") ||
			(component.component === "ifx-tabs" && (propKey === "icon" || propKey === "iconPosition")) ||
			(component.component === "ifx-segmented-control" && propKey === "icon") ||
			(component.component === "ifx-dropdown" && propKey === "icon") ||
			(component.component === "ifx-sidebar" && propKey === "icon")
		);
	}

	private isBooleanProp(
		name: string,
		tag: string,
		componentInfo: ComponentInfo,
	): boolean {
		const typeText = componentInfo.propTypes[tag]?.[name];
		return typeText === "boolean";
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

	private getTemplateExpression(spec: ControlSpec | undefined): string {
		if (!spec) return "''";
		if (spec.kind === "options") {
			return `${spec.optionsVar}[${spec.indexVar}]`;
		}

		return spec.stateVar;
	}

	private getComponentClassName(component: ComponentInfo): string {
		const componentName = toPascalCase(component.component);
		const storyNameSuffix =
			component.storyName && component.storyName !== "Default"
				? component.storyName.replace(/\s+/g, "")
				: "";
		return `${componentName}${storyNameSuffix}Example`;
	}

	private getComponentSelector(component: ComponentInfo): string {
		const selectorSuffix =
			component.storyName && component.storyName !== "Default"
				? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
				: "";
		return `${component.component}-example${selectorSuffix}`;
	}

	private getComponentFileName(component: ComponentInfo): string {
		return this.getComponentSelector(component);
	}

	private toStateVar(argKey: string): string {
		return this.toPropKey(argKey);
	}

	private getBindingName(attrName: string): string {
		const normalized = attrName.startsWith("[") && attrName.endsWith("]")
			? attrName.slice(1, -1)
			: attrName;
		if (!normalized.includes("-")) {
			return normalized;
		}
		return toCamelCase(normalized);
	}

	private supportsAngularInput(tag: string, inputName: string): boolean {
		if (!tag.startsWith("ifx-")) {
			return false;
		}

		const supportedInputs = this.angularInputsByTag.get(tag);
		if (!supportedInputs) {
			return true;
		}

		return supportedInputs.has(inputName);
	}

	private loadAngularInputsByTag(): Map<string, Set<string>> {
		for (const candidate of ANGULAR_COMPONENTS_FILE_CANDIDATES) {
			if (!existsSync(candidate)) continue;

			const source = readFileSync(candidate, "utf8");
			const map = new Map<string, Set<string>>();
			const componentPattern = /@Component\(\{[\s\S]*?selector:\s*'([^']+)'[\s\S]*?inputs:\s*\[([\s\S]*?)\][\s\S]*?\}\)\s*export class/g;

			for (const match of source.matchAll(componentPattern)) {
				const [, selector, inputsBlock] = match;
				const inputs = new Set<string>();
				for (const inputMatch of inputsBlock.matchAll(/'([^']+)'/g)) {
					inputs.add(inputMatch[1]);
				}
				map.set(selector, inputs);
			}

			if (map.size > 0) {
				return map;
			}
		}

		return new Map();
	}

	private isChildControlledPropForAnyTag(
		component: ComponentInfo,
		propKey: string,
	): boolean {
		const childTags = new Set(component.structure.children?.map((c) => c.tag) ?? []);
		// Generic: check if any argType resolves to a child tag present in the structure
		for (const [argKey, raw] of Object.entries(component.argTypes || {})) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			const childTag = getChildTagFromArgType(argType);
			if (childTag && childTags.has(childTag) && this.toPropKey(argKey) === propKey) {
				return true;
			}
		}
		// Also allow ifx-button's icon and iconPosition (special case: child is ifx-icon, not in argType category convention)
		return component.component === "ifx-button" && (propKey === "icon" || propKey === "iconPosition");
	}

	private getSpecialControlBindings(
		component: ComponentInfo,
		struct: ComponentStructure,
		spec: ControlSpec,
	): Array<{ propName: string }> {
		// ifx-button icon is a special case: the icon lives in an ifx-icon child element
		if (component.component === "ifx-button" && struct.tag === "ifx-icon" && spec.propKey === "icon") {
			return [{ propName: "icon" }];
		}

		// Generic: check if this struct's tag matches the child tag from the spec's argType category
		for (const [argKey, raw] of Object.entries(component.argTypes || {})) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			const childTag = getChildTagFromArgType(argType);
			if (childTag && childTag === struct.tag && this.toPropKey(argKey) === spec.propKey) {
				return [{ propName: spec.propKey }];
			}
		}

		return [];
	}

	private toPropKey(argKey: string): string {
		const camel = toCamelCase(argKey);
		return camel.charAt(0).toLowerCase() + camel.slice(1);
	}

	private toControlHandlerName(varName: string): string {
		return `handle${varName.charAt(0).toUpperCase()}${varName.slice(1)}Change`;
	}

	private toUpdateName(varName: string): string {
		return `update${varName.charAt(0).toUpperCase()}${varName.slice(1)}`;
	}

	private toLabel(value: string): string {
		return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
	}

	private escapeBackticks(str: string): string {
		return escapeForTemplateLiteral(str);
	}

	private escapeHtml(html: string): string {
		return html
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}
}