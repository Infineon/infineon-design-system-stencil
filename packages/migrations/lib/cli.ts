import path from "node:path";
import { parseArgs } from "node:util";

import { writeTextFile } from "./file-system.js";
import { filterManifestByTargetVersion, loadManifest } from "./manifest.js";
import { detectProject } from "./project.js";
import type { SharedCodemodFramework } from "./runners/index.js";
import { getRunner } from "./runners/index.js";
import type { CliOptions, CodemodFramework, RunnerContext, RunnerExecutionResult } from "./types.js";

const FRAMEWORKS = new Set<CodemodFramework>(["html", "react", "angular", "vue"]);

const HELP_TEXT = `Usage: dds-migrate [options]

Options:
  --config <path>   Use a custom migration manifest JSON file.
  --cwd <path>      Run the codemod in a specific working directory.
	--framework <id>  Force one runner: html, react, angular, or vue.
  --dry-run         Print the planned edits without writing files.
  --help            Show this message.

Angular projects are not migrated by dds-migrate. Use:
	ng update @infineon/infineon-design-system-angular
`;

const formatRelativePath = (cwd: string, filePath: string): string => path.relative(cwd, filePath) || ".";

const printSummary = (result: RunnerExecutionResult, cwd: string): void => {
	console.log(`Framework: ${result.framework}`);
	console.log(`Package: ${result.detectedProject.installedPackage}`);
	if (result.targetVersion) {
		console.log(`Target version: ${result.targetVersion}`);
	}
	console.log(`Dry run: ${result.dryRun ? "yes" : "no"}`);
	console.log(`Processed files: ${result.processedFileCount}`);
	console.log(`Modified files: ${result.modifiedFiles.length}`);

	if (result.modifiedFiles.length > 0) {
		console.log("\nChanged files:");
		for (const file of result.modifiedFiles) {
			console.log(`- ${formatRelativePath(cwd, file.filePath)}`);
			for (const change of file.changes) {
				console.log(`  ${change}`);
			}
		}
	}

	if (result.warnings.length > 0) {
		console.log("\nWarnings:");
		for (const warning of result.warnings) {
			console.log(`- ${warning}`);
		}
	}
};

const parseFramework = (value: string | undefined): CodemodFramework | undefined => {
	if (value === undefined) {
		return undefined;
	}

	if (!FRAMEWORKS.has(value as CodemodFramework)) {
		throw new Error(`Unsupported framework: ${value}. Use one of html, react, angular, or vue.`);
	}

	return value as CodemodFramework;
};

const parseCliOptions = (argv: string[]): CliOptions | "help" => {
	const { values } = parseArgs({
		args: argv,
		allowPositionals: false,
		options: {
			config: { type: "string" },
			cwd: { type: "string" },
			"dry-run": { type: "boolean", default: false },
			framework: { type: "string" },
			help: { type: "boolean", default: false },
		},
		strict: true,
	});

	if (values.help) {
		return "help";
	}

	return {
		configPath: values.config,
		cwd: path.resolve(values.cwd ?? process.cwd()),
		dryRun: values["dry-run"],
		framework: parseFramework(values.framework),
	};
};

function assertFrameworkIsSupported(
	framework: CodemodFramework,
): asserts framework is SharedCodemodFramework {
	if (framework !== "angular") {
		return;
	}

	throw new Error(
		"Angular migrations are not supported by dds-migrate. Use `ng update @infineon/infineon-design-system-angular` instead.",
	);
}

const executeRunner = async (options: CliOptions): Promise<RunnerExecutionResult> => {
	const detectedProject = await detectProject(options.cwd, options.framework);
	assertFrameworkIsSupported(detectedProject.framework);
	const manifest = await loadManifest(options.configPath);
	const targetVersion = detectedProject.installedVersion;
	const filteredManifest = filterManifestByTargetVersion(manifest, targetVersion);
	const framework: SharedCodemodFramework = detectedProject.framework;
	const runner = getRunner(framework);
	const files = await runner.collectFiles(options.cwd);
	const warnings: string[] = [];

	if (manifest.migrations.length === 0) {
		warnings.push("The active migration manifest does not define any rename rules yet.");
	}

	if (detectedProject.installedVersion === undefined) {
		warnings.push(
			`Could not detect a concrete version for ${detectedProject.installedPackage}; applying all migrations.`,
		);
	}

	if (
		targetVersion !== undefined &&
		filteredManifest.migrations.length !== manifest.migrations.length
	) {
		warnings.push(
			`Applying ${filteredManifest.migrations.length} of ${manifest.migrations.length} migrations for target version ${targetVersion}.`,
		);
	}

	const context: RunnerContext = {
		manifest: filteredManifest,
	};

	const modifiedFiles: RunnerExecutionResult["modifiedFiles"] = [];
	for (const filePath of files) {
		const change = await runner.transformFile(filePath, context);
		if (!change) {
			continue;
		}

		modifiedFiles.push({ filePath: change.filePath, changes: change.changes });
		if (!options.dryRun) {
			await writeTextFile(change.filePath, change.updatedContent);
		}
	}

	return {
		framework,
		dryRun: options.dryRun,
		detectedProject,
		modifiedFiles,
		processedFileCount: files.length,
		targetVersion,
		warnings,
	};
};

export const runMigration = async (
	argv: string[] = process.argv.slice(2),
): Promise<RunnerExecutionResult> => {
	const parsed = parseCliOptions(argv);
	if (parsed === "help") {
		console.log(HELP_TEXT);
		return {
			framework: "html",
			dryRun: true,
			detectedProject: {
				framework: "html",
				installedPackage: "",
			},
			modifiedFiles: [],
			processedFileCount: 0,
			warnings: [],
		};
	}

	const result = await executeRunner(parsed);
	printSummary(result, parsed.cwd);

	return result;
};