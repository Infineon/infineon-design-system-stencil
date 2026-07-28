import path from "node:path";
import { parseArgs } from "node:util";

import { sortDiagnostics } from "../core/diagnostic.js";
import { loadManifest } from "../core/manifest.js";
import { analyseMigration, applyMigrationPlan } from "../core/plan.js";
import type {
	CliOptions,
	CodemodFramework,
	RunnerExecutionResult,
	SharedCodemodFramework,
} from "../core/types.js";
import { detectProject } from "../project/detect-project.js";
import { resolvePnpmInstalledVersion } from "../project/pnpm-lockfile.js";
import {
	readMigrationPackageVersion,
	resolveUpgradeRange,
} from "../project/resolve-versions.js";

const FRAMEWORKS = new Set<CodemodFramework>([
	"html",
	"react",
	"angular",
	"vue",
]);

const HELP_TEXT = `Usage: dds-migrate [options]

Options:
  --config <path>   Use a custom migration manifest JSON file.
  --cwd <path>      Run the codemod in a specific working directory.
  --framework <id>  Force one runner: html, react, angular, or vue.
  --from <version>  Source version of the design-system package.
  --to <version>    Target version of the design-system package.
  --dry-run         Print the planned edits without writing files.
  --help            Show this message.

Angular projects are not migrated by dds-migrate. Use:
  ng update @infineon/infineon-design-system-angular
`;

const formatRelativePath = (cwd: string, filePath: string): string =>
	path.relative(cwd, filePath) || ".";

const printSummary = (result: RunnerExecutionResult, cwd: string): void => {
	console.log(`Framework: ${result.framework}`);
	console.log(`Package: ${result.detectedProject.designSystemPackage}`);
	console.log(`Source version: ${result.upgradeRange.fromVersion}`);
	console.log(`Target version: ${result.upgradeRange.toVersion}`);
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

const parseFramework = (
	value: string | undefined,
): CodemodFramework | undefined => {
	if (value === undefined) {
		return undefined;
	}

	if (!FRAMEWORKS.has(value as CodemodFramework)) {
		throw new Error(
			`Unsupported framework: ${value}. Use one of html, react, angular, or vue.`,
		);
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
			from: { type: "string" },
			to: { type: "string" },
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
		fromVersion: values.from,
		toVersion: values.to,
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

const executeRunner = async (
	options: CliOptions,
): Promise<RunnerExecutionResult> => {
	const detectedProject = await detectProject(options.cwd, options.framework);
	assertFrameworkIsSupported(detectedProject.framework);

	const [manifest, lockfileVersion, installedMigrationPackageVersion] =
		await Promise.all([
			loadManifest(options.configPath),
			resolvePnpmInstalledVersion(
				detectedProject.rootDirectory,
				detectedProject.designSystemPackage,
			),
			readMigrationPackageVersion(),
		]);

	const upgradeRange = resolveUpgradeRange({
		rootDirectory: detectedProject.rootDirectory,
		packageName: detectedProject.designSystemPackage,
		explicitFromVersion: options.fromVersion,
		explicitToVersion: options.toVersion,
		declaredVersion: detectedProject.declaredVersion,
		lockfileVersion,
		installedMigrationPackageVersion,
	});

	const context = {
		rootDirectory: detectedProject.rootDirectory,
		framework: detectedProject.framework,
		packageName: detectedProject.designSystemPackage,
		fromVersion: upgradeRange.fromVersion,
		toVersion: upgradeRange.toVersion,
	};

	const plan = await analyseMigration({
		manifest,
		context,
		fromVersion: upgradeRange.fromVersion,
		toVersion: upgradeRange.toVersion,
	});

	const hasErrors = plan.diagnostics.some(
		(diagnostic) => diagnostic.severity === "error",
	);
	if (hasErrors) {
		for (const diagnostic of sortDiagnostics(plan.diagnostics)) {
			console.error(
				`[${diagnostic.severity.toUpperCase()}] ${diagnostic.code}: ${diagnostic.message}`,
			);
		}
		throw new Error("Migration analysis failed. No files were changed.");
	}

	if (!options.dryRun) {
		await applyMigrationPlan(plan);
	}

	const warnings: string[] = [];
	if (detectedProject.declaredVersion === undefined) {
		warnings.push(
			`Could not detect a declared version for ${detectedProject.designSystemPackage}; version resolution may be incomplete.`,
		);
	}

	const modifiedFiles = plan.fileChanges
		.filter((change) => change.updatedContent !== null)
		.map((change) => ({ filePath: change.filePath, changes: change.changes }));

	return {
		framework: plan.framework,
		dryRun: options.dryRun,
		detectedProject,
		upgradeRange,
		modifiedFiles,
		processedFileCount: plan.processedFileCount,
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
				rootDirectory: process.cwd(),
				framework: "html",
				designSystemPackage: "",
			},
			upgradeRange: { fromVersion: "0.0.0", toVersion: "0.0.0" },
			modifiedFiles: [],
			processedFileCount: 0,
			warnings: [],
		};
	}

	const result = await executeRunner(parsed);
	printSummary(result, parsed.cwd);

	return result;
};
