import type { ComponentInfo } from "./types.js";

/**
 * Configuration for example generation
 */
export interface GeneratorConfig {
	outputDir: string;
	filePath?: string; // Optional file path relative to outputDir (for HTML generators)
}

/**
 * Result of example generation
 */
export interface GenerationResult {
	success: boolean;
	filesGenerated: string[];
	filesUpdated: string[];
	errors?: string[];
}

/**
 * Options for code formatting
 */
export interface FormatOptions {
	indent: string;
	baseIndent?: string;
	maxLineLength?: number;
}

/**
 * Base interface for example generators
 * Each framework (HTML, React, Vue, Angular) implements this
 */
export interface IExampleGenerator {
	/**
	 * Generate examples for the given components
	 */
	generate(
		components: ComponentInfo[],
		config: GeneratorConfig,
	): GenerationResult;

	/**
	 * Get the name of this generator (for logging)
	 */
	getName(): string;

	/**
	 * Validate that the output directory structure is correct
	 */
	validate(config: GeneratorConfig): boolean;
}

/**
 * Interface for code formatters
 */
export interface ICodeFormatter {
	/**
	 * Format component structure to code
	 */
	formatComponent(component: ComponentInfo, options: FormatOptions): string;

	/**
	 * Format event handlers
	 */
	formatEventHandlers(component: ComponentInfo, options: FormatOptions): string;

	/**
	 * Format imports/dependencies
	 */
	formatImports(component: ComponentInfo): string;
}

/**
 * Interface for file updaters
 */
export interface IFileUpdater {
	/**
	 * Update a file with generated content in marked regions
	 */
	updateFile(filePath: string, regions: Record<string, string>): boolean;

	/**
	 * Check if file has required markers
	 */
	hasMarkers(filePath: string, markers: string[]): boolean;
}
