import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { runMigration } from "../lib/cli/index.js";

describe("runMigration warnings", () => {
	let tempRoot: string;

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-cli-"));
	});

	afterEach(async () => {
		await rm(tempRoot, { recursive: true, force: true });
	});

	test("surfaces successful opaque-provider warnings", async () => {
		await writeFile(
			path.join(tempRoot, "package.json"),
			JSON.stringify({
				dependencies: {
					"@infineon/infineon-design-system-react": "39.0.0",
				},
			}),
		);
		await writeFile(
			path.join(tempRoot, "App.tsx"),
			'import { IfxTextField } from "@infineon/infineon-design-system-react";\nexport const App = () => <IfxTextField {...props} />;\n',
		);
		const manifestPath = path.join(tempRoot, "manifest.json");
		await writeFile(
			manifestPath,
			JSON.stringify({
				schemaVersion: 1,
				releases: [{
					version: "40.0.0",
					operations: [{
						id: "success-to-valid",
						type: "rename-prop",
						component: "ifx-text-field",
						from: "success",
						to: "valid",
					}],
				}],
			}),
		);

		const result = await runMigration([
			"--cwd",
			tempRoot,
			"--framework",
			"react",
			"--from",
			"39.0.0",
			"--to",
			"40.0.0",
			"--config",
			manifestPath,
		]);

		assert.equal(result.modifiedFiles.length, 0);
		assert.equal(result.warnings.length, 1);
		assert.match(result.warnings[0] ?? "", /DDS003/);
	});
});