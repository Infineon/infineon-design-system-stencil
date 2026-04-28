import type { FormatOptions, ICodeFormatter } from "../formatter-interface.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import { buildExampleId } from "../utils/navbar-utils.js";
import { escapeHTML, formatTitle, toCamelCase } from "../utils/string-utils.js";
import {
	getControlType,
	inferControlValue,
	inferControlOptions,
	isStoryOnlyControl,
	isNumericControlType,
	resolveControlDefaultValue,
} from "../utils/control-utils.js";

type ControlSpec =
	| {
			kind: "boolean";
			argKey: string;
			propKey: string;
			attrKey: string;
			initial: boolean;
	  }
	| {
			kind: "options";
			argKey: string;
			propKey: string;
			attrKey: string;
			options: unknown[];
			initialIndex: number;
	  }
	| {
			kind: "value";
			argKey: string;
			propKey: string;
			attrKey: string;
			controlType: string;
			initialValue: string | number;
	  };

/**
 * Formats components into HTML/Web Component code
 */
export class HTMLCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to HTML (component only, no wrapping)
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "" } = options;
		return this.structureToHTML(component.structure, indent);
	}

	/**
	 * Format complete example section with component, title, and code preview
	 * Used by example generators to create full example pages
	 */
	formatFullExample(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "        " } = options;
		const componentId = buildExampleId(component.component, component.storyName);
		const specs = this.getToggleControls(component);
		const controlsUI = this.renderControlsUI(componentId, specs);
		const rawCode = this.structureToHTML(component.structure, "");

		return `
    <!-- ${component.component.toUpperCase()} Example -->
		<section id="${componentId}" class="component-example">
      <h2>${formatTitle(component.title, component.component, component.storyName)}</h2>
      <div class="demo">
${this.structureToHTML(component.structure, indent)}
			</div>${controlsUI ? `
${controlsUI}` : ""}
      <details class="code-details">
        <summary>View Code</summary>
				<pre><code id="${componentId}-code" class="language-markup">${escapeHTML(rawCode)}</code></pre>
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
		const componentId = buildExampleId(component.component, component.storyName);
		const specs = this.getToggleControls(component);
		const rootTextControl = this.getRootTextControl(component, specs);

		const handlers = component.events
			.map((event) => {
				const elementSelector = `document.querySelector('#${componentId} ${component.component}')`;

				// Handle multi-line descriptions by prefixing each line with //
				const commentLines = event.description
					.split("\n")
					.map((line) => `  // ${line.trim()}`)
					.join("\n");

				return `${commentLines}
  ${elementSelector}?.addEventListener('${event.name}', (event) => {
    console.log('${event.name}:', event);
    // Add your custom handler logic here
  });`;
			})
			.join("\n\n");

		const controlsScript = this.renderControlsScript(componentId, specs, rootTextControl);

		if (handlers.length === 0) {
			return controlsScript;
		}
		if (controlsScript.length === 0) {
			return handlers;
		}

		return `${handlers}\n\n${controlsScript}`;
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
				if (value.startsWith("__JSON__")) {
					const jsonValue = value.replace(/^__JSON__/, "");
					return `${key}='${jsonValue}'`;
				}
				// For JSON arrays/objects, use single quotes to wrap the attribute value
				if (value.startsWith("[") || value.startsWith("{")) {
					return `${key}='${value}'`;
				}
				// For regular strings, use double quotes
				return `${key}="${value}"`;
			})
			.join(" ");
	}

	private toPropKey(argKey: string): string {
		const camel = toCamelCase(argKey);
		return camel.charAt(0).toLowerCase() + camel.slice(1);
	}

	private getToggleControls(component: ComponentInfo): ControlSpec[] {
		const specs: ControlSpec[] = [];
		const argTypes = component.argTypes || {};
		const rootAttrs = component.structure.attributes || {};

		for (const [argKey, raw] of Object.entries(argTypes)) {
			const argType = (raw ?? {}) as Record<string, unknown>;
			if ("action" in argType) continue;
			if (isStoryOnlyControl(argType)) continue;

			const propKey = this.toPropKey(argKey);
			const attrKey = this.resolveAttributeKey(rootAttrs, argKey, propKey);
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
					attrKey,
					initial: Boolean(defaultValue),
				});
				continue;
			}

			const options =
				explicitOptions && explicitOptions.length > 0
					? explicitOptions.filter((option: unknown) => option !== undefined)
					: inferControlOptions(argKey, controlType, defaultValue);

			if (explicitOptions && options.length > 0) {
				const initialIndex = Math.max(
					0,
					options.findIndex((option) => option === defaultValue),
				);

				specs.push({
					kind: "options",
					argKey,
					propKey,
					attrKey,
					options,
					initialIndex,
				});
				continue;
			}

			specs.push({
				kind: "value",
				argKey,
				propKey,
				attrKey,
				controlType,
				initialValue: inferControlValue(argKey, controlType, defaultValue),
			});
		}

		return specs;
	}

	private renderControlsUI(componentId: string, specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const toggleButtons = specs
			.filter((spec) => spec.kind !== "value")
			.map((spec) => {
				const label = `Toggle ${spec.propKey.charAt(0).toUpperCase()}${spec.propKey.slice(1)}`;
				return `        <ifx-button variant="secondary" data-control-target="${componentId}" data-control-key="${spec.argKey}">${label}</ifx-button>`;
			})
			.join("\n");

		const inputFields = specs
			.filter((spec): spec is Extract<ControlSpec, { kind: "value" }> => spec.kind === "value")
			.map((spec) => {
				const inputType =
					spec.controlType === "color"
						? "color"
						: spec.controlType === "date"
							? "date"
							: isNumericControlType(spec.controlType)
								? "number"
								: "text";
				return `        <ifx-text-field label="${spec.argKey}" type="${inputType}" data-control-input="${componentId}" data-control-key="${spec.argKey}" value="${String(spec.initialValue).replace(/"/g, "&quot;")}"></ifx-text-field>`;
			})
			.join("\n");

		const stateLines = specs
			.map(
				(spec) =>
					`        <div><b>${spec.argKey}:</b> <span data-control-state="${componentId}" data-control-key="${spec.argKey}"></span></div>`,
			)
			.join("\n");

		return `
      <h3 class="controls-title">Controls</h3>
	${toggleButtons ? `<div class="controls controls-toggle">\n${toggleButtons}\n      </div>` : ""}
	${inputFields ? `<div class="controls controls-input">\n${inputFields}\n      </div>` : ""}

      <div class="state">
${stateLines}
      </div>`;
	}

	private renderControlsScript(
		componentId: string,
		specs: ControlSpec[],
		rootTextControl?: Extract<ControlSpec, { kind: "value" }>,
	): string {
		if (specs.length === 0) return "";

		const controlsJson = JSON.stringify(specs);
		const rootTextControlKey = JSON.stringify(rootTextControl?.argKey ?? null);

		return `  (() => {
    const section = document.getElementById('${componentId}');
    if (!section) return;

    const root = section.querySelector('.demo > *');
    const codeNode = section.querySelector('#${componentId}-code');
    if (!(root instanceof Element) || !(codeNode instanceof HTMLElement)) return;

		const controls = ${controlsJson};
		const rootTextControl = ${rootTextControlKey};

	const state = {};
    controls.forEach((control) => {
      if (control.kind === 'options') {
        const options = control.options || [];
        const idx = control.initialIndex ?? 0;
        state[control.argKey] = options[idx] ?? '';
			} else if (control.kind === 'value') {
				state[control.argKey] = control.initialValue ?? '';
      } else {
        state[control.argKey] = Boolean(control.initial);
      }
    });

	const escapeHtml = (value) => value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/'/g, '&#39;');

    const renderCode = () => {
      codeNode.innerHTML = escapeHtml(root.outerHTML);
	const Prism = globalThis.Prism;
	Prism?.highlightElement?.(codeNode);
    };

		const renderButtonContent = () => {
			if (root.tagName !== 'IFX-BUTTON') return;
			const label = rootTextControl ? String(state[rootTextControl] ?? '') : root.textContent ?? '';
			const icon = String(state.icon ?? '');
			const iconPosition = String(state.iconPosition ?? 'left');
			root.replaceChildren();
			if (icon && iconPosition === 'left') {
				const iconEl = document.createElement('ifx-icon');
				iconEl.setAttribute('icon', icon);
				root.append(iconEl);
			}
			root.append(document.createTextNode(label));
			if (icon && iconPosition === 'right') {
				const iconEl = document.createElement('ifx-icon');
				iconEl.setAttribute('icon', icon);
				root.append(iconEl);
			}
		};

    const renderState = () => {
      controls.forEach((control) => {
        const stateNode = section.querySelector(
          '[data-control-state="${componentId}"][data-control-key="' + control.argKey + '"]',
        );
        if (stateNode) stateNode.textContent = String(state[control.argKey]);
      });
    };

    const applyState = () => {
      controls.forEach((control) => {
				if (rootTextControl && control.argKey === rootTextControl) {
					return;
				}
				if (root.tagName === 'IFX-ACCORDION' && control.argKey === 'icon') {
					root.querySelectorAll('ifx-accordion-item').forEach((item) => {
						item.setAttribute('icon', String(state[control.argKey] ?? ''));
					});
					return;
				}
				if (root.tagName === 'IFX-CONTENT-SWITCHER' && control.argKey === 'icon') {
					root.querySelectorAll('ifx-icon[icon]').forEach((item) => {
						item.setAttribute('icon', String(state[control.argKey] ?? ''));
					});
					return;
				}
				if (root.tagName === 'IFX-TABS' && (control.argKey === 'icon' || control.argKey === 'iconPosition')) {
					root.querySelectorAll('ifx-tab').forEach((item) => {
						item.setAttribute(String(control.attrKey || control.argKey), String(state[control.argKey] ?? ''));
					});
					return;
				}
				if (root.tagName === 'IFX-SEGMENTED-CONTROL' && control.argKey === 'icon') {
					root.querySelectorAll('ifx-segment[icon]').forEach((item) => {
						item.setAttribute('icon', String(state[control.argKey] ?? ''));
					});
					return;
				}
				if (root.tagName === 'IFX-DROPDOWN' && control.argKey === 'icon') {
					root.querySelectorAll('ifx-dropdown-item[icon]').forEach((item) => {
						item.setAttribute('icon', String(state[control.argKey] ?? ''));
					});
					return;
				}
				if (root.tagName === 'IFX-SIDEBAR' && control.argKey === 'icon') {
					root.querySelectorAll('ifx-sidebar-item[icon]').forEach((item) => {
						item.setAttribute('icon', String(state[control.argKey] ?? ''));
					});
					return;
				}
				if (root.tagName === 'IFX-BUTTON' && (control.argKey === 'icon' || control.argKey === 'iconPosition')) {
					return;
				}
				root.setAttribute(String(control.attrKey || control.argKey), String(state[control.argKey]));
      });
			if (root.tagName === 'IFX-BUTTON') {
				renderButtonContent();
			} else if (rootTextControl) {
				root.textContent = String(state[rootTextControl] ?? '');
			}
      renderState();
      renderCode();
    };

		section.querySelectorAll('ifx-button[data-control-target="${componentId}"]').forEach((button) => {
      button.addEventListener('click', () => {
        const key = button.getAttribute('data-control-key');
        if (!key) return;
        const control = controls.find((c) => c.argKey === key);
        if (!control) return;

        if (control.kind === 'options') {
          const options = control.options || [];
          const current = state[key];
          const currentIndex = Math.max(0, options.findIndex((opt) => opt === current));
          state[key] = options[(currentIndex + 1) % options.length];
				} else if (control.kind === 'value') {
					return;
        } else {
          state[key] = !Boolean(state[key]);
        }

        applyState();
      });
    });

		section.querySelectorAll('ifx-text-field[data-control-input="${componentId}"]').forEach((inputEl) => {
			const handleInput = (event) => {
				const key = inputEl.getAttribute('data-control-key');
				if (!key) return;
				const control = controls.find((c) => c.argKey === key);
				if (!control || control.kind !== 'value') return;

				const rawValue = event?.detail?.value ?? inputEl.value ?? '';
				if (control.controlType === 'number' || control.controlType === 'range') {
					state[key] = Number(rawValue);
				} else {
					state[key] = String(rawValue);
				}

				applyState();
			};

			inputEl.addEventListener('input', handleInput);
			inputEl.addEventListener('ifxInput', handleInput);
		});

    applyState();
  })();`;
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

	private resolveAttributeKey(
		attributes: Record<string, string>,
		argKey: string,
		propKey: string,
	): string {
		const knownKeys = Object.keys(attributes);
		const byArg = knownKeys.find((key) => key === argKey);
		if (byArg) return byArg;

		const byProp = knownKeys.find((key) => this.toPropKey(key) === propKey);
		if (byProp) return byProp;

		return this.toKebabCase(propKey);
	}

	private toKebabCase(value: string): string {
		return value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
	}
}
