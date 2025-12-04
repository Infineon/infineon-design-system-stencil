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
				const tsCode = this.formatModuleComponentTypeScript(component);
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

				const selectorName = `${component.component}-example${storyNameSuffix}`;
				componentsSections.push(
					`<section id="${selectorName}" class="component-example">\n` +
						`  <h2>${formatTitle(component.title, component.component, component.storyName)}</h2>\n` +
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

			const htmlUpdated = this.fileUpdater.updateFile(htmlPath, {
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
	 * Format module-based component TypeScript
	 */
	private formatModuleComponentTypeScript(component: ComponentInfo): string {
		const componentName = toPascalCase(component.component);
		const storyNameSuffix =
			component.storyName && component.storyName !== "Default"
				? component.storyName.replace(/\s+/g, "")
				: "";
		const componentClassName = `${componentName}${storyNameSuffix}Example`;
		const selectorSuffix =
			component.storyName && component.storyName !== "Default"
				? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
				: "";
		const componentSelector = `${component.component}-example${selectorSuffix}`;

		const eventHandlers = this.formatter.formatEventHandlers(component, {
			indent: "  ",
		});

		// Generate the code strings for display
		const html = this.formatter.formatComponent(component, { indent: "  " });
		const tsCode = this.generateTypeScriptCode(component, eventHandlers);
		const htmlCode = this.escapeHtml(html);

		return `import { Component } from '@angular/core';

@Component({
  selector: 'app-${componentSelector}',
  templateUrl: './${componentSelector}.html',
  styleUrl: './${componentSelector}.scss',
  standalone: false
})
export class ${componentClassName} {
  protected readonly tsCode = \`${this.escapeBackticks(tsCode)}\`;
  protected readonly htmlCode = \`${this.escapeBackticks(htmlCode)}\`;
${eventHandlers ? `\n${eventHandlers}\n` : ""}}
`;
	}

	/**
	 * Generate TypeScript code for display
	 */
	private generateTypeScriptCode(
		component: ComponentInfo,
		eventHandlers: string,
	): string {
		const componentName = toPascalCase(component.component);
		const storyNameSuffix =
			component.storyName && component.storyName !== "Default"
				? component.storyName.replace(/\s+/g, "")
				: "";
		const componentClassName = `${componentName}${storyNameSuffix}Example`;
		const selectorSuffix =
			component.storyName && component.storyName !== "Default"
				? `-${component.storyName.toLowerCase().replace(/\s+/g, "-")}`
				: "";
		const componentSelector = `${component.component}-example${selectorSuffix}`;

		let tsCode = `import { Component } from '@angular/core';

@Component({
  selector: 'app-${componentSelector}',
  templateUrl: './${componentSelector}.html',
  styleUrl: './${componentSelector}.scss',
  standalone: false
})
export class ${componentClassName} {`;

		if (eventHandlers) {
			tsCode += `\n${eventHandlers}\n`;
		}

		tsCode += `}`;

		return this.escapeHtml(tsCode);
	}

	/**
	 * Escape backticks for template literal
	 */
	private escapeBackticks(str: string): string {
		return str
			.replace(/\\/g, "\\\\")
			.replace(/`/g, "\\`")
			.replace(/\$/g, "\\$");
	}

	/**
	 * Escape HTML for display in code block
	 */
	private escapeHtml(html: string): string {
		return html
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
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
