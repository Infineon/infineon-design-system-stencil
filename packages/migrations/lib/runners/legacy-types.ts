/**
 * @deprecated Legacy flat runner types.
 *
 * These types supported the first-generation runner interface. They remain only
 * while the Vue and HTML adapters are still bridged through the legacy runner
 * implementations under `runners/`.
 *
 * Removal plan:
 * - React runner removed in U1 (done).
 * - Vue runner removed in U3.
 * - HTML runner removed in U5.
 */

import type { CodemodFramework } from "../core/types.js";

export interface PropRenameMigration {
	type: "prop-rename";
	component: string;
	from: string;
	to: string;
	targetVersion?: string;
	notes?: string;
}

export type MigrationRule = PropRenameMigration;

export interface FileChange {
	filePath: string;
	changes: string[];
	updatedContent: string;
}

export interface RunnerContext {
	/** Flattened legacy rename rules, bridged from the canonical release manifest. */
	migrations: PropRenameMigration[];
}

export interface CodemodRunner {
	framework: CodemodFramework;
	collectFiles(cwd: string): Promise<string[]>;
	transformFile(
		filePath: string,
		context: RunnerContext,
	): Promise<FileChange | null>;
}
