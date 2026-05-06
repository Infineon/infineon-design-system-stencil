import * as fs from "node:fs";
import * as path from "node:path";
import {
	ALL_COMPONENTS_ID,
	AngularCodeFormatter,
	buildAlphabeticalNavbarGroups,
	buildExampleId,
	formatTitle,
	toPascalCase,
} from "@infineon/dds-tooling";
import type {
	GenerationResult,
	GeneratorConfig,
	IExampleGenerator,
} from "../interfaces.js";
import type { ComponentInfo } from "../types.js";
import { FileUpdater } from "../utils/file-updater.js";

/**
 * Angular module-based example generator
 */
export class AngularModuleExampleGenerator implements IExampleGenerator {
	private formatter: AngularCodeFormatter;
	private fileUpdater: FileUpdater;

	constructor() {
		this.formatter = new AngularCodeFormatter();
		this.fileUpdater = new FileUpdater();
	}

	/**
	 * Generate Angular module-based examples
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
			// Ensure directory structure exists
			this.ensureDirectoryStructure(config.outputDir);

			// Generate component files
			const imports: string[] = [];
			const componentsList: string[] = [];
			const componentsSections: string[] = [];
			const navbarEntries: Array<{ exampleId: string; title: string }> = [];
			let defaultId = "";

			for (const component of components) {
				const componentName = toPascalCase(component.component);
				const storyNameSuffix =
					component.storyName && component.storyName !== "Default"
						? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
						: "";
				const componentFileName = `${component.component}-example${storyNameSuffix}`;
				const componentDir = path.join(
					config.outputDir,
					"src",
					"app",
					"generated",
					componentFileName,
				);

				// Create component directory if it doesn't exist
				if (!fs.existsSync(componentDir)) {
					fs.mkdirSync(componentDir, { recursive: true });
				}

				// Generate TypeScript file for module-based component
				const tsCode = this.formatter.formatModuleComponentTypeScript(component);
				const tsPath = path.join(componentDir, `${componentFileName}.ts`);
				fs.writeFileSync(tsPath, tsCode);
				result.filesGenerated.push(tsPath);

				// Generate Template file
				const htmlCode = this.formatter.formatComponentTemplate(component);
				const htmlPath = path.join(componentDir, `${componentFileName}.html`);
				fs.writeFileSync(htmlPath, htmlCode);
				result.filesGenerated.push(htmlPath);

				// Generate SCSS file
				const scssCode = this.formatter.formatComponentStyles();
				const scssPath = path.join(componentDir, `${componentFileName}.scss`);
				fs.writeFileSync(scssPath, scssCode);
				result.filesGenerated.push(scssPath);

				// Prepare imports and content for app-module.ts and app.html
				const componentClassName = `${componentName}${component.storyName && component.storyName !== "Default" ? component.storyName.replace(/\s+/g, "") : ""}Example`;
				imports.push(
					`import { ${componentClassName} } from './generated/${componentFileName}/${componentFileName}';`,
				);
				componentsList.push(`${componentClassName}`);

				const selectorName = buildExampleId(
					component.component,
					component.storyName,
				);
				if (!defaultId) {
					defaultId = selectorName;
				}

				const title = formatTitle(component.title, component.component, component.storyName);

				navbarEntries.push({ exampleId: selectorName, title });

				componentsSections.push(
					`<section *ngIf="activeId() === '${selectorName}' || activeId() === '${ALL_COMPONENTS_ID}'" id="${selectorName}" class="component-example">\n` +
						`  <h2>${title}</h2>\n` +
						`  <div class="demo">\n` +
						`    <app-${selectorName}></app-${selectorName}>\n` +
						`  </div>\n` +
						`</section>`,
				);
			}

			// Update app-module.ts
			const appModulePath = path.join(
				config.outputDir,
				"src",
				"app",
				"app-module.ts",
			);

			if (!this.validate(config)) {
				result.success = false;
				result.errors?.push(
					`app-module.ts or app.html not found or missing markers: ${appModulePath}`,
				);
				return result;
			}

			const importsContent = imports.join("\n");
			const componentsContent = componentsList.join(",\n    ");

			const tsUpdated = this.fileUpdater.updateFile(appModulePath, {
				imports: importsContent,
				components: componentsContent,
			});

			if (tsUpdated) {
				result.filesUpdated.push(appModulePath);
			}

			// Update app.html
			const htmlPath = path.join(config.outputDir, "src", "app", "app.html");
			const componentsHtmlContent = componentsSections.join("\n\n");
			const navbarContent = buildAlphabeticalNavbarGroups(
				navbarEntries,
				(label, items) => {
					const groupItems = items
						.map(
							(item) =>
								`  <ifx-navbar-item href="#${item.exampleId}">${item.title}</ifx-navbar-item>`,
						)
						.join("\n");

					return [
						'<ifx-navbar-item icon="block16" slot="left-item" href="" target="_self">',
						`  ${label}`,
						groupItems,
						"</ifx-navbar-item>",
					].join("\n");
				},
			);
			const navbarWithAllComponents = [
				navbarContent,
				`<ifx-navbar-item href="#${ALL_COMPONENTS_ID}" slot="left-item">All Components</ifx-navbar-item>`,
			].join("\n");

			const htmlUpdated = this.fileUpdater.updateFile(htmlPath, {
				"angular-navbar-items": navbarWithAllComponents,
				"html-components": componentsHtmlContent,
			});

			if (htmlUpdated) {
				result.filesUpdated.push(htmlPath);
			}

			// Update app.ts with defaultId
			const appTsPath = path.join(config.outputDir, "src", "app", "app.ts");
			const appTsUpdated = this.fileUpdater.updateFile(appTsPath, {
				"angular-default-id": `"${defaultId || "ifx-accordion-example"}"`,
			});

			if (appTsUpdated) {
				result.filesUpdated.push(appTsPath);
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
		return "Angular Module";
	}

	/**
	 * Validate output directory and file structure
	 */
	validate(config: GeneratorConfig): boolean {
		const appModulePath = path.join(
			config.outputDir,
			"src",
			"app",
			"app-module.ts",
		);
		const htmlPath = path.join(config.outputDir, "src", "app", "app.html");
		const appTsPath = path.join(config.outputDir, "src", "app", "app.ts");

		return (
			this.fileUpdater.hasMarkers(appModulePath, [
				"/* <AUTO-GENERATED-IMPORTS> */",
				"/* </AUTO-GENERATED-IMPORTS> */",
				"/* <AUTO-GENERATED-COMPONENTS> */",
				"/* </AUTO-GENERATED-COMPONENTS> */",
			]) &&
			this.fileUpdater.hasMarkers(htmlPath, [
				"<!-- <AUTO-GENERATED-COMPONENTS> -->",
				"<!-- </AUTO-GENERATED-COMPONENTS> -->",
			]) &&
			this.fileUpdater.hasMarkers(appTsPath, [
				"/* <AUTO-GENERATED-DEFAULT-ID> */",
				"/* </AUTO-GENERATED-DEFAULT-ID> */",
			])
		);
	}

	/**
	 * Ensure directory structure exists
	 */
	private ensureDirectoryStructure(outputDir: string): void {
		const dirs = [
			outputDir,
			path.join(outputDir, "src"),
			path.join(outputDir, "src", "app"),
			path.join(outputDir, "src", "app", "generated"),
		];

		dirs.forEach((dir) => {
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, { recursive: true });
			}
		});
	}
}
