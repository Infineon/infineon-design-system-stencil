/**
 * Shared JSX utilities for framework adapters.
 *
 * These helpers are framework-agnostic and operate only on file paths or
 * source-level JSX detection.
 */

export const isJsxSourceFile = (filePath: string): boolean =>
	filePath.endsWith(".tsx") || filePath.endsWith(".jsx");
