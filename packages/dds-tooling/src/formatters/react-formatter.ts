import type { FormatOptions, ICodeFormatter } from "../formatter-interface.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import {
	escapeForTemplateLiteral,
	toCamelCase,
	toHandlerFunctionName,
	toKebabCase,
	toPascalCase,
	toReactEventName,
} from "../utils/string-utils.js";
import {
	getChildTagFromArgType,
	getControlType,
	inferControlValue,
	inferControlOptions,
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
	    argKey: string;        // e.g. "disabled" or "full-width"
	    propKey: string;       // normalized React prop key (e.g. "fullWidth")
	    stateVar: string;      // e.g. "disabled" or "fullWidth"
	    setter: string;        // e.g. "setDisabled"
	    initial: boolean;
	  }
	| {
	    kind: "options";
	    argKey: string;        // e.g. "variant"
	    propKey: string;       // normalized React prop key (e.g. "ariaLive")
	    stateVar: string;      // e.g. "variant"
	    indexVar: string;      // e.g. "variantIndex"
	    setter: string;        // e.g. "setVariantIndex"
	    optionsVar: string;    // e.g. "variantOptions"
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
		const specs = this.getControlSpecs(component);
		const rootTextControl = this.getRootTextControl(component, specs);
		const controlledArgKeys = new Set(
			specs
				.filter((s) => s.propKey !== rootTextControl?.propKey)
				.map((s) => s.propKey),
		);

		return this.structureToJSX(
			component.structure,
			component,
			indent,
			isFirstOfType,
			controlledArgKeys,
			rootTextControl,
			true,
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

		const specs = this.getControlSpecs(component);
		const controlHandlerNames = new Set(specs.map((s) => this.toControlHandlerName(s.stateVar)));

		return component.events
			.filter((event) => !controlHandlerNames.has(toHandlerFunctionName(event.name)))
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
	formatImports(component: ComponentInfo, includeControls = true): string {
		const specs = this.getControlSpecs(component);
		const needsUseState = includeControls && specs.length > 0;
		const hasToggleControls = includeControls && specs.some((s) => s.kind !== "value");
		const hasValueControls = includeControls && specs.some((s) => s.kind === "value");

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

		// Controls UI uses IfxButton for boolean/options and IfxTextField for value controls
		if (hasToggleControls) importsSet.add("IfxButton");
		if (hasValueControls) importsSet.add("IfxTextField");

		const imports = Array.from(importsSet).sort().join(", ");
		const reactImport = needsUseState ? `import { useState } from 'react';\n` : "";

		return `${reactImport}import { ${imports} } from '@infineon/infineon-design-system-react';`;
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
		const specs = this.getControlSpecs(component);
		const rootTextControl = this.getRootTextControl(component, specs);
		const controlsState = this.renderControlsState(specs);
		const controlsUI = this.renderControlsUI(specs);

		// Generate the code string for display
		const codeForDisplay = this.generateCodeForDisplay(
			component,
			eventHandlers,
			jsx,
			specs.length > 0,
			rootTextControl,
		);

		// Escape for safe embedding in a template literal
		const escapedCodeForDisplay = escapeForTemplateLiteral(codeForDisplay);
		const codeStringDeclaration =
			specs.length > 0
				? this.renderDynamicCodeString(specs, escapedCodeForDisplay, rootTextControl)
				: `  const codeString = \`${escapedCodeForDisplay}\`;`;

		return `${imports}

export function ${componentClassName}() {
${controlsState ? `${controlsState}` : ""}${eventHandlers ? `${eventHandlers}\n\n` : ""}${codeStringDeclaration}
	return (
    <>
${jsx}${controlsUI ? controlsUI : ""}
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

`;
	}

	/**
	 * Generate code string for display in the details section
	 */
	private generateCodeForDisplay(
		component: ComponentInfo,
		eventHandlers: string,
		jsx: string,
		hasControls: boolean,
		rootTextControl?: Extract<ControlSpec, { kind: "value" }>,
	): string {
		const componentName = toPascalCase(component.component);
		const imports = this.formatImports(component, false);
		let displayJsx = hasControls
			? jsx
				.replace("{...(controlledProps as any)}", CONTROLLED_PROPS_PLACEHOLDER)
				.replace("{...controlledProps}", CONTROLLED_PROPS_PLACEHOLDER)
			: jsx;
		if (rootTextControl) {
			displayJsx = displayJsx.replace(
				`{String(${rootTextControl.stateVar})}`,
				controlledTextPlaceholder(rootTextControl.propKey),
			);
		}

		// Build the display code without the details section
		let displayCode = `${imports}

export function ${componentName}Example() {`;

		if (eventHandlers) {
			displayCode += `\n${eventHandlers}\n`;
		}

		displayCode += `\n  return (\n${displayJsx}\n  );\n}`;

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
					`    [${JSON.stringify(s.propKey)}, controlledProps[${JSON.stringify(s.propKey)}]],`,
			)
			.join("\n");

		const textReplacement = rootTextControl
			? `

	const escapedText = String(controlledProps[${JSON.stringify(rootTextControl.propKey)}] ?? "")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");

	const codeString = codeStringWithProps.replace(${JSON.stringify(controlledTextPlaceholder(rootTextControl.propKey))}, escapedText);`
			: "\n\n\tconst codeString = codeStringWithProps;";

		return `  const formatPropValueForCode = (value: unknown): string => {
		if (typeof value === "boolean") return \`{\${value}}\`;
		if (typeof value === "number") return \`{\${value}}\`;
		if (value === null) return "{null}";
		if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
			return \`{\${JSON.stringify(value)}}\`;
		}
		const escaped = String(value).replace(/\\\\/g, "\\\\\\\\").replace(/\"/g, '\\\\"');
		return \`"\${escaped}"\`;
	};

	const controlledPropsCode = [
${entries}
	]
		.map(([name, value]) => \`        \${String(name)}=\${formatPropValueForCode(value)}\`)
		.join("\\n");

	const codeStringWithProps = \`${escapedCodeTemplate}\`.replace(${JSON.stringify(CONTROLLED_PROPS_PLACEHOLDER)}, controlledPropsCode);${textReplacement}`;
	}

	/**
	 * Convert component structure to React JSX
	 */
	private structureToJSX(
		struct: ComponentStructure,
		componentInfo: ComponentInfo,
		indent: string,
		isFirstOfType: Map<string, boolean>,
		controlledArgKeys: Set<string>,
		rootTextControl: Extract<ControlSpec, { kind: "value" }> | undefined,
		isRoot: boolean,
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
			.map(([key, value]) => {
				const propName = this.toPropKey(key);
				const propValue = this.toReactPropValue(value, key);
				return propValue ? ([propName, propValue] as [string, string]) : null;
			})
			.filter((entry): entry is [string, string] => entry !== null);

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

		allProps.push(
			...this.getInjectedControlledProps(componentInfo, struct.tag, controlledArgKeys),
		);

		if (isRoot && controlledArgKeys.size > 0) {
			allProps.push(["{...(controlledProps as any)}", ""]);
		}

		// Format opening tag with props
		const openTag = this.formatOpeningTag(componentName, allProps, indent);

		if (
			isRoot &&
			componentInfo.component === "ifx-button" &&
			this.hasControl(componentInfo, "icon")
		) {
			const textContent = rootTextControl
				? `{String(${rootTextControl.stateVar})}`
				: struct.textContent.trim();
			return `${openTag}>\n${indent}  {controlledProps.icon && String(controlledProps.iconPosition ?? "left") === "left" ? <IfxIcon icon={String(controlledProps.icon)} /> : null}\n${indent}  ${textContent}\n${indent}  {controlledProps.icon && String(controlledProps.iconPosition ?? "left") === "right" ? <IfxIcon icon={String(controlledProps.icon)} /> : null}\n${indent}</${componentName}>`;
		}

		// Handle children
		if (struct.children && struct.children.length > 0) {
			const childrenJSX = struct.children
				.map((child) =>
					this.structureToJSX(
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
			return `${openTag}>\n${childrenJSX}\n${indent}</${componentName}>`;
		}

		// Handle text content
		if (struct.textContent) {
			if (isRoot && rootTextControl) {
				return `${openTag}>\n${indent}  {String(${rootTextControl.stateVar})}\n${indent}</${componentName}>`;
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
		const renderProp = (name: string, value: string) => {
			// Spread prop special-case: ["{...controlledProps}", ""]
			if (name.startsWith("{...") && value === "") return `${name}`;
			return `${name}=${value}`;
		};

		if (props.length === 0) {
			return `${indent}<${componentName}`;
		}

		if (props.length === 1) {
			const [name, value] = props[0];
			return `${indent}<${componentName} ${renderProp(name, value)}`;
		}

		const propsString = props
			.map(([name, value]) => `${indent}  ${renderProp(name, value)}`)
			.join("\n");
		return `${indent}<${componentName}\n${propsString}`;
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

		if (value.startsWith("__JSON__")) {
			const jsonValue = value.replace(/^__JSON__/, "");
			return `{${jsonValue}}`;
		}

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

	private toStateVar(argKey: string) {
		// Handles both "full-width" and "fullWidth" -> "fullWidth".
		return this.toPropKey(argKey);
	}

	private hasControl(component: ComponentInfo, argKey: string): boolean {
		return Object.prototype.hasOwnProperty.call(component.argTypes || {}, argKey);
	}

	private isChildControlledProp(
		component: ComponentInfo,
		structTag: string,
		propKey: string,
	): boolean {
		// Generic: check whether any argType in the component has a category pointing to structTag
		for (const [argKey, raw] of Object.entries(component.argTypes || {})) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			const childTag = getChildTagFromArgType(argType);
			if (childTag && childTag === structTag && this.toPropKey(argKey) === propKey) {
				return true;
			}
		}
		return false;
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
		return false;
	}

	private getInjectedControlledProps(
		component: ComponentInfo,
		structTag: string,
		controlledArgKeys: Set<string>,
	): [string, string][] {
		const injectedProps: [string, string][] = [];
		const seen = new Set<string>();

		for (const [argKey, raw] of Object.entries(component.argTypes || {})) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			const childTag = getChildTagFromArgType(argType);
			if (!childTag || childTag !== structTag) continue;
			const propKey = this.toPropKey(argKey);
			if (!controlledArgKeys.has(propKey) || seen.has(propKey)) continue;
			seen.add(propKey);
			const defaultVal = String((component.defaultArgs ?? {})[argKey] ?? "");
			injectedProps.push([propKey, `{String(controlledProps.${propKey} ?? ${JSON.stringify(defaultVal)})}`]);
		}

		return injectedProps;
	}

	private toPropKey(argKey: string) {
		const camel = toCamelCase(argKey);
		return camel.charAt(0).toLowerCase() + camel.slice(1);
	}

	private toSetter(varName: string) {
		return `set${varName.charAt(0).toUpperCase()}${varName.slice(1)}`;
	}

	private toControlHandlerName(varName: string) {
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

			// Skip Storybook action controls
			if ("action" in argType) continue;
			if (isStoryOnlyControl(argType)) continue;
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

		for (const s of specs) {
			if (s.kind === "options") {
				lines.push(`  const ${s.optionsVar} = ${JSON.stringify(s.options)};`);
				lines.push(`  const [${s.indexVar}, ${s.setter}] = useState(${s.initialIndex});`);
			} else if (s.kind === "value") {
				if (typeof s.initialValue === "number") {
					lines.push(`  const [${s.stateVar}, ${s.setter}] = useState(${s.initialValue});`);
				} else {
					lines.push(`  const [${s.stateVar}, ${s.setter}] = useState(${JSON.stringify(s.initialValue)});`);
				}
			} else {
				lines.push(`  const [${s.stateVar}, ${s.setter}] = useState(${s.initial});`);
			}
		}

		lines.push("");

		for (const s of specs) {
			const fnName = this.toControlHandlerName(s.stateVar);

			if (s.kind === "options") {
				lines.push(
					`  const ${fnName} = () => ${s.setter}((i) => (i + 1) % ${s.optionsVar}.length);`,
				);
			} else if (s.kind === "value") {
				if (isNumericControlType(s.controlType)) {
					lines.push(
						`  const ${fnName} = (value: string) => ${s.setter}(Number(value));`,
					);
				} else {
					lines.push(`  const ${fnName} = (value: string) => ${s.setter}(value);`);
				}
			} else {
				lines.push(`  const ${fnName} = () => ${s.setter}((v) => !v);`);
			}
		}

		lines.push("");

		lines.push("  const controlledProps = {");
		for (const s of specs) {
			if (s.kind === "options") {
				lines.push(`    ${JSON.stringify(s.propKey)}: ${s.optionsVar}[${s.indexVar}],`);
			} else if (s.kind === "value") {
				lines.push(`    ${JSON.stringify(s.propKey)}: ${s.stateVar},`);
			} else {
				lines.push(`    ${JSON.stringify(s.propKey)}: ${s.stateVar},`);
			}
		}
		lines.push("  } as Record<string, unknown>;");
		lines.push("");

		return lines.join("\n");
	}

	private renderControlsUI(specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const toggleButtons = specs
			.filter((s) => s.kind !== "value")
			.map((s) => {
				const fnName = this.toControlHandlerName(s.stateVar);
				const label = `Toggle ${s.stateVar.charAt(0).toUpperCase()}${s.stateVar.slice(1)}`;
				return `        <IfxButton variant="secondary" onClick={${fnName}}>${label}</IfxButton>`;
			})
			.join("\n");

		const inputFields = specs
			.filter((s): s is Extract<ControlSpec, { kind: "value" }> => s.kind === "value")
			.map((s) => {
				const fnName = this.toControlHandlerName(s.stateVar);
				const inputType = s.controlType === "password" ? "password" : "text";
				return `        <IfxTextField label="${s.argKey}" type="${inputType}" value={String(${s.stateVar})} onInput={(event) => ${fnName}(String((event.target as HTMLInputElement | null)?.value ?? ""))} />`;
			})
			.join("\n");

		const stateLines = specs
			.map((s) => {
				if (s.kind === "options") {
					return `          <div><b>${s.argKey}:</b> {String(${s.optionsVar}[${s.indexVar}])}</div>`;
				}
				return `          <div><b>${s.argKey}:</b> {String(${s.stateVar})}</div>`;
			})
			.join("\n");

		return `
	      <h3 className="controls-title">Controls</h3>
	      ${toggleButtons ? `<div className="controls controls-toggle">\n${toggleButtons}\n\t      </div>` : ""}
	      ${inputFields ? `<div className="controls controls-input">\n${inputFields}\n\t      </div>` : ""}

	      <div className="state">
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
}