import type { FormatOptions, ICodeFormatter } from "../interfaces.js";
import type { ComponentInfo, ComponentStructure } from "../types.js";
import { escapeHTML, formatTitle, toCamelCase } from "../utils/string-utils.js";

type ControlSpec =
	| {
			kind: "boolean";
			argKey: string;
			propKey: string;
			initial: boolean;
	  }
	| {
			kind: "options";
			argKey: string;
			propKey: string;
			options: unknown[];
			initialIndex: number;
	  };

/**
 * Formats components into HTML/Web Component code
 */
export class HTMLCodeFormatter implements ICodeFormatter {
	/**
	 * Format component structure to HTML
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string {
		const { indent = "        " } = options;
		const componentId = `${component.component}-example`;
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
		const componentId = `${component.component}-example`;
		const specs = this.getToggleControls(component);

		const handlers = component.events
			.map((event) => {
				const elementSelector = `document.querySelector('#${componentId} ${component.component}')`;

				return `  // ${event.description}
  ${elementSelector}?.addEventListener('${event.name}', (event) => {
    console.log('${event.name}:', event);
    // Add your custom handler logic here
  });`;
			})
			.join("\n\n");

		const controlsScript = this.renderControlsScript(componentId, specs);

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
			const options = Array.isArray(argType.options) ? argType.options : null;
			const controlValue = argType.control;
			const controlType =
				typeof controlValue === "string"
					? controlValue
					: (controlValue as { type?: unknown } | undefined)?.type;
			const defaultValue = this.resolveDefaultArgValue(args, argKey, propKey);

			if (options && options.length > 0) {
				const initialIndex = Math.max(
					0,
					options.findIndex((option) => option === defaultValue),
				);

				specs.push({
					kind: "options",
					argKey,
					propKey,
					options,
					initialIndex,
				});
				continue;
			}

			const isBool = controlType === "boolean" || typeof defaultValue === "boolean";
			if (isBool) {
				specs.push({
					kind: "boolean",
					argKey,
					propKey,
					initial: Boolean(defaultValue),
				});
			}
		}

		return specs;
	}

	private renderControlsUI(componentId: string, specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const buttons = specs
			.map((spec) => {
				const label = `Toggle ${spec.propKey.charAt(0).toUpperCase()}${spec.propKey.slice(1)}`;
				return `        <ifx-button variant="secondary" data-control-target="${componentId}" data-control-key="${spec.argKey}">${label}</ifx-button>`;
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
      <div class="controls">
${buttons}
      </div>

      <div class="state">
${stateLines}
      </div>`;
	}

	private renderControlsScript(componentId: string, specs: ControlSpec[]): string {
		if (specs.length === 0) return "";

		const controlsJson = JSON.stringify(specs);

		return `  (() => {
    const section = document.getElementById('${componentId}');
    if (!section) return;

    const root = section.querySelector('.demo > *');
    const codeNode = section.querySelector('#${componentId}-code');
    if (!(root instanceof Element) || !(codeNode instanceof HTMLElement)) return;

		const controls = ${controlsJson};

	const state = {};
    controls.forEach((control) => {
      if (control.kind === 'options') {
        const options = control.options || [];
        const idx = control.initialIndex ?? 0;
        state[control.argKey] = options[idx] ?? '';
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
        root.setAttribute(control.argKey, String(state[control.argKey]));
      });
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
        } else {
          state[key] = !Boolean(state[key]);
        }

        applyState();
      });
    });

    applyState();
  })();`;
	}
}
