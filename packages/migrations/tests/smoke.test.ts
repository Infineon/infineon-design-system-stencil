import assert from "node:assert/strict";
import { execFile as execFileCallback } from "node:child_process";
import { mkdtemp, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { promisify } from "node:util";

const execFile = promisify(execFileCallback);

const PACKAGE_ROOT = path.resolve(
	path.dirname(new URL(import.meta.url).pathname),
	"..",
);
const RUN_DRY_RUN_TIMEOUT_MS = 60_000;

const runInPackageRoot = (
	command: string,
	args: string[],
): Promise<{ stdout: string; stderr: string }> =>
	execFile(command, args, { cwd: PACKAGE_ROOT });

const createConsumerProject = async (
	consumerDirectory: string,
): Promise<void> => {
	const packageJsonPath = path.join(consumerDirectory, "package.json");
	const htmlPath = path.join(consumerDirectory, "index.html");

	await writeFile(
		packageJsonPath,
		JSON.stringify(
			{
				name: "dds-migrate-smoke-consumer",
				private: true,
				dependencies: {
					"@infineon/infineon-design-system-stencil": "39.21.0",
				},
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
};

test("packed CLI runs with the default manifest in dry-run mode", async () => {
	const packDestination = await mkdtemp(
		path.join(tmpdir(), "dds-migrate-pack-"),
	);
	const consumerDirectory = await mkdtemp(
		path.join(tmpdir(), "dds-migrate-consumer-"),
	);

	try {
		await runInPackageRoot("pnpm", ["run", "build"]);

		await runInPackageRoot("pnpm", [
			"pack",
			"--pack-destination",
			packDestination,
		]);

		const packedFiles = await readdir(packDestination);
		const tarball = packedFiles.find((file) => file.endsWith(".tgz"));
		assert.ok(
			tarball,
			`Expected a packed tarball in ${packDestination}, found: ${packedFiles.join(", ")}`,
		);
		const tarballPath = path.join(packDestination, tarball);

		await createConsumerProject(consumerDirectory);

		await execFile("pnpm", ["add", tarballPath], { cwd: consumerDirectory });

		const binaryPath = path.join(
			consumerDirectory,
			"node_modules",
			"@infineon",
			"design-system-migrations",
			"bin",
			"dds-migrate.mjs",
		);

		const { stdout: dryRunOutput } = await execFile(
			"node",
			[
				binaryPath,
				"--dry-run",
				"--from",
				"39.0.0",
				"--to",
				"40.0.0",
				"--cwd",
				consumerDirectory,
			],
			{
				cwd: consumerDirectory,
				timeout: RUN_DRY_RUN_TIMEOUT_MS,
			},
		);
		assert.ok(
			dryRunOutput.includes("show-delete-icon -> show-clear-button"),
			"Expected --dry-run to report the prop rename",
		);
		assert.ok(
			dryRunOutput.includes("Dry run: yes"),
			"Expected --dry-run to be reported as dry run",
		);

		const diskContent = await readFile(
			path.join(consumerDirectory, "index.html"),
			"utf8",
		);
		assert.match(diskContent, /show-delete-icon/);
	} finally {
		await rm(packDestination, { recursive: true, force: true });
		await rm(consumerDirectory, { recursive: true, force: true });
	}
});
