import * as path from "node:path";
import {
	ALL_COMPONENTS_ID,
	buildAlphabeticalNavbarGroups,
	buildExampleId,
	formatTitle,
	HTMLCodeFormatter,
} from "@infineon/dds-tooling";
import type {
	GenerationResult,
	GeneratorConfig,
	IExampleGenerator,
} from "../interfaces.js";
import type { ComponentInfo } from "../types.js";
import { FileUpdater } from "../utils/file-updater.js";

/**
 * HTML/Web Components example generator
 */
export class HTMLExampleGenerator implements IExampleGenerator {
	private formatter: HTMLCodeFormatter;
	private fileUpdater: FileUpdater;

	constructor() {
		this.formatter = new HTMLCodeFormatter();
		this.fileUpdater = new FileUpdater();
	}

	/**
	 * Generate HTML examples
	 */
	generate(
		components: ComponentInfo[],
		config: GeneratorConfig,
	): GenerationResult {
		const result: GenerationResult = {
			success: true,
			filesGenerated: [],
			filesUpdated: [],
			errors: [],
		};

		try {
			const htmlPath = path.join(
				config.outputDir,
				config.filePath || "index.html",
			);

			// Validate file exists
			if (!this.validate(config)) {
				result.success = false;
				result.errors?.push(
					`HTML file not found or missing markers: ${htmlPath}`,
				);
				return result;
			}

			// Default ID
			const defaultId = components[0]?.component
				? buildExampleId(components[0].component, components[0].storyName)
				: "ifx-accordion-example";

			// Navbar items
			const navbarItems = buildAlphabeticalNavbarGroups(
				components.map((component) => ({
					exampleId: buildExampleId(component.component, component.storyName),
					title: formatTitle(
						component.title,
						component.component,
						component.storyName,
					),
				})),
				(label, items) => {
					const groupItems = items
						.map(
							(item) =>
								`  <ifx-navbar-item href="#${item.exampleId}">${item.title}</ifx-navbar-item>`,
						)
						.join("\n");

					return [
						'<ifx-navbar-item icon="block16" slot="left-item">',
						`  ${label}`,
						groupItems,
						"</ifx-navbar-item>",
					].join("\n");
				},
			);
			const navbarWithAllComponents = [
				navbarItems,
				`<ifx-navbar-item href="#${ALL_COMPONENTS_ID}" slot="left-item">All Components</ifx-navbar-item>`,
			].join("\n");

			// Generate component HTML sections
			const componentSections = components
				.map((c) => this.formatter.formatFullExample(c, { indent: "        " }))
				.join("\n");

			// Generate event handlers
			const generatedHandlers = components
				.map((c) => this.formatter.formatEventHandlers(c, { indent: "  " }))
				.filter((h) => h.length > 0)
				.join("\n\n    ");

			// Navigation script
			const navigationScript = `
			// --- Generated Navigation (hash-based) ---
			const allComponentsId = "${ALL_COMPONENTS_ID}";
			const defaultId = window.__ifxDefaultExampleId || "ifx-accordion-example";
			
			const getHashId = () => (window.location.hash ? window.location.hash.slice(1) : "");
			
			const setActive = (id) => {
				const sections = document.querySelectorAll("section.component-example");
				sections.forEach((s) => {
					const shouldShow = id === allComponentsId || s.id === id;
					s.style.display = shouldShow ? "" : "none";
				});
				
				// Prism highlight the active section
				const Prism = globalThis.Prism;
				const activeSection = document.getElementById(id);
				if (id === allComponentsId && Prism?.highlightAll) {
					Prism.highlightAll();
				} else if (Prism?.highlightAllUnder && activeSection) {
					Prism.highlightAllUnder(activeSection);
				} else if (Prism?.hightlightAll) {
					Prism.highlightAll();
				}
			};

			const run = () => {
				const next = getHashId();
				if (next) {
					setActive(next);
				} else {
					window.location.hash = "#${defaultId}";
					setActive(defaultId);
				}
			};

			if (document.readyState === "loading") {
				document.addEventListener("DOMContentLoaded", run, { once: true});
			} else {
				run();
			}

			window.addEventListener("hashchange", run);
			window.addEventListener("popstate", run);

			// Some navbar implementations update the URL without firing "hashchange".
			// So also react to clicks on items that have href="#..."
			document.addEventListener(
			  "click",
			  (e) => {
			    const target = e.target;
			    if (!(target instanceof Element)) return;

			    const item = target.closest("ifx-navbar-item");
			    if (!item) return;

			    const href = item.getAttribute("href") || "";
			    if (!href.startsWith("#")) return;

			    // allow the component to update the URL first
			    setTimeout(run, 0);
			  },
			  true,
			);
			`;

			// Combine generated handlers with navigation script
			const scriptsContent = [generatedHandlers, navigationScript].filter((s) => s.trim().length > 0).join("\n\n");

			// Update the HTML file
			const updated = this.fileUpdater.updateFile(htmlPath, {
				"html-navbar-items": navbarWithAllComponents,
				"html-default-id": `"${defaultId}"`,
				"html-components": componentSections,
				"html-scripts": scriptsContent,
			});

			if (updated) {
				result.filesUpdated.push(htmlPath);
			} else {
				// File exists and is valid, even if not updated (no changes)
				result.filesUpdated.push(htmlPath);
			}
		} catch (error) {
			result.success = false;
			result.errors?.push(
				error instanceof Error ? error.message : String(error),
			);
		}

		return result;
	}

	/**
	 * Get generator name
	 */
	getName(): string {
		return "HTML/Web Components";
	}

	/**
	 * Validate output directory and file structure
	 */
	validate(config: GeneratorConfig): boolean {
		const htmlPath = path.join(
			config.outputDir,
			config.filePath || "index.html",
		);

		return this.fileUpdater.hasMarkers(htmlPath, [
			"<!-- <AUTO-GENERATED-COMPONENTS> -->",
			"<!-- </AUTO-GENERATED-COMPONENTS> -->",
			"<!-- <AUTO-GENERATED-NAVBAR-ITEMS> -->",
			"<!-- </AUTO-GENERATED-NAVBAR-ITEMS> -->",
			"/* <AUTO-GENERATED-DEFAULT-ID> */",
			"/* </AUTO-GENERATED-DEFAULT-ID> */",
			"/* <AUTO-GENERATED-SCRIPTS> */",
			"/* </AUTO-GENERATED-SCRIPTS> */",
		]);
	}
}
