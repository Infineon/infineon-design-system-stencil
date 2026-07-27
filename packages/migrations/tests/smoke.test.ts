import assert from "node:assert/strict";
import { execFile as execFileCallback } from "node:child_process";
import { mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);

const PACKAGE_ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const RUN_HELP_TIMEOUT_MS = 60_000;
const RUN_DRY_RUN_TIMEOUT_MS = 60_000;

const runInPackageRoot = (command: string, args: string[]): Promise<{ stdout: string; stderr: string }> =>
	execFile(command, args, { cwd: PACKAGE_ROOT });

const createConsumerProject = async (consumerDirectory: string): Promise<string> => {
	const manifestPath = path.join(consumerDirectory, "migration.json");
	const packageJsonPath = path.join(consumerDirectory, "package.json");
	const htmlPath = path.join(consumerDirectory, "index.html");

	await writeFile(
		packageJsonPath,
		JSON.stringify(
			{
				name: "dds-migrate-smoke-consumer",
				private: true,
				dependencies: {
					"@infineon/infineon-design-system-stencil": "^39.21.0",
				},
			},
			null,
			2,
		),
	);

	await writeFile(
		manifestPath,
		JSON.stringify(
			{
				schemaVersion: 1,
				migrations: [
					{
						type: "prop-rename",
						component: "ifx-text-field",
						from: "show-delete-icon",
						to: "show-clear-button",
					},
				],
			},
			null,
			2,
		),
	);

	await writeFile(
		htmlPath,
		`<!doctype html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@39.21.0/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>
  </head>
  <body>
    <ifx-text-field show-delete-icon="true"></ifx-text-field>
  </body>
</html>
`,
	);

	return manifestPath;
};

test("published binary can be packed, installed, and executed", async () => {
	const packDestination = await mkdtemp(path.join(tmpdir(), "dds-migrate-pack-"));
	const consumerDirectory = await mkdtemp(path.join(tmpdir(), "dds-migrate-consumer-"));

	try {
		await runInPackageRoot("pnpm", ["run", "build"]);

		await runInPackageRoot("pnpm", ["pack", "--pack-destination", packDestination]);

		const packedFiles = await readdir(packDestination);
		const tarball = packedFiles.find((file) => file.endsWith(".tgz"));
		assert.ok(tarball, `Expected a packed tarball in ${packDestination}, found: ${packedFiles.join(", ")}`);
		const tarballPath = path.join(packDestination, tarball);

		const manifestPath = await createConsumerProject(consumerDirectory);

		await execFile("pnpm", ["add", tarballPath], { cwd: consumerDirectory });

		const binaryPath = path.join(
			consumerDirectory,
			"node_modules",
			"@infineon",
			"design-system-migrations",
			"bin",
			"dds-migrate.mjs",
		);
		const { stdout: helpOutput } = await execFile("node", [binaryPath, "--help"], {
			cwd: consumerDirectory,
			timeout: RUN_HELP_TIMEOUT_MS,
		});
		assert.ok(helpOutput.includes("Usage: dds-migrate"), "Expected --help to print usage information");

		const { stdout: dryRunOutput } = await execFile(
			"node",
			[binaryPath, "--dry-run", "--config", manifestPath, "--cwd", consumerDirectory],
			{
				cwd: consumerDirectory,
				timeout: RUN_DRY_RUN_TIMEOUT_MS,
			},
		);
		assert.ok(
			dryRunOutput.includes("ifx-text-field prop show-delete-icon -> show-clear-button"),
			"Expected --dry-run to report the property rename",
		);
		assert.ok(dryRunOutput.includes("Dry run: yes"), "Expected --dry-run to be reported as dry run");
	} finally {
		await rm(packDestination, { recursive: true, force: true });
		await rm(consumerDirectory, { recursive: true, force: true });
	}
});
