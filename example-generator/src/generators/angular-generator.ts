import * as fs from "node:fs";
import * as path from "node:path";
import { AngularCodeFormatter } from "../formatters/angular-formatter.js";
import type {
	GenerationResult,
	GeneratorConfig,
	IExampleGenerator,
} from "../interfaces.js";
import type { ComponentInfo } from "../types.js";
import { FileUpdater } from "../utils/file-updater.js";
import { formatTitle, toPascalCase } from "../utils/string-utils.js";

/**
 * Angular standalone example generator
 */
export class AngularExampleGenerator implements IExampleGenerator {
	private formatter: AngularCodeFormatter;
	private fileUpdater: FileUpdater;

	constructor() {
		this.formatter = new AngularCodeFormatter();
		this.fileUpdater = new FileUpdater();
	}

	/**
	 * Generate Angular standalone examples
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
			const navbarItems: string[] = [];
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

				// Generate TypeScript file
				const tsCode = this.formatter.formatComponentTypeScript(component);
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

				// Prepare imports and content for app.ts and app.html
				const componentClassName = `${componentName}${component.storyName && component.storyName !== "Default" ? component.storyName.replace(/\s+/g, "") : ""}Example`;
				imports.push(
					`import { ${componentClassName} } from './generated/${componentFileName}/${componentFileName}';`,
				);
				componentsList.push(`${componentClassName}`);

				const selectorName = `${component.component}-example${storyNameSuffix}`;
				if (!defaultId) {
					defaultId = selectorName;
				}

				const title = formatTitle(component.title, component.component, component.storyName);

				navbarItems.push(
					`<ifx-navbar-item href="#${selectorName}">${title}</ifx-navbar-item>`,
				);

				componentsSections.push(
					`<section *ngIf="activeId() === '${selectorName}'" id="${selectorName}" class="component-example">\n` +
						`  <h2>${title}</h2>\n` +
						`  <div class="demo">\n` +
						`    <app-${selectorName}></app-${selectorName}>\n` +
						`  </div>\n` +
						`</section>`,
				);
			}

			// Update app.ts
			const appPath = path.join(config.outputDir, "src", "app", "app.ts");

			if (!this.validate(config)) {
				result.success = false;
				result.errors?.push(
					`app.ts or app.html not found or missing markers: ${appPath}`,
				);
				return result;
			}

			const importsContent = imports.join("\n");
			const componentsContent = componentsList.join(", ");

			const tsUpdated = this.fileUpdater.updateFile(appPath, {
				imports: importsContent,
				components: componentsContent,
				"angular-default-id": `"${defaultId || "ifx-accordion-example"}"`,
			});

			if (tsUpdated) {
				result.filesUpdated.push(appPath);
			}

			// Update app.html
			const htmlPath = path.join(config.outputDir, "src", "app", "app.html");
			const componentsHtmlContent = componentsSections.join("\n\n");

			const htmlUpdated = this.fileUpdater.updateFile(htmlPath, {
				"angular-navbar-items": navbarItems.join("\n"),
				"html-components": componentsHtmlContent,
			});

			if (htmlUpdated) {
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
		return "Angular Standalone";
	}

	/**
	 * Validate output directory and file structure
	 */
	validate(config: GeneratorConfig): boolean {
		const appPath = path.join(config.outputDir, "src", "app", "app.ts");
		const htmlPath = path.join(config.outputDir, "src", "app", "app.html");

		return (
			this.fileUpdater.hasMarkers(appPath, [
				"/* <AUTO-GENERATED-IMPORTS> */",
				"/* </AUTO-GENERATED-IMPORTS> */",
				"/* <AUTO-GENERATED-COMPONENTS> */",
				"/* </AUTO-GENERATED-COMPONENTS> */",
				"/* <AUTO-GENERATED-DEFAULT-ID> */",
				"/* </AUTO-GENERATED-DEFAULT-ID> */",
			]) &&
			this.fileUpdater.hasMarkers(htmlPath, [
				"<!-- <AUTO-GENERATED-NAVBAR-ITEMS> -->",
				"<!-- </AUTO-GENERATED-NAVBAR-ITEMS> -->",
				"<!-- <AUTO-GENERATED-COMPONENTS> -->",
				"<!-- </AUTO-GENERATED-COMPONENTS> -->",
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
