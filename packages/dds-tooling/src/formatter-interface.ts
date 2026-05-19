import type { ComponentInfo } from "./types.js";

/**
 * Options for code formatting
 */
export interface FormatOptions {
	indent: string;
	baseIndent?: string;
	maxLineLength?: number;
}

/**
 * Interface for code formatters
 * Each framework (HTML, React, Vue, Angular) implements this
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
