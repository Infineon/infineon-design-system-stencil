import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { detectProject } from "../lib/project.js";

test("detectProject derives the framework from package.json", async () => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-project-react-"));
	await writeFile(
		path.join(tempDirectory, "package.json"),
		JSON.stringify(
			{
				dependencies: {
					react: "^19.0.0",
					"@infineon/infineon-design-system-react": "^40.0.0",
				},
			},
			null,
			2,
		),
		"utf8",
	);

	try {
		const result = await detectProject(tempDirectory);
		assert.equal(result.framework, "react");
		assert.equal(result.installedPackage, "@infineon/infineon-design-system-react");
		assert.equal(result.installedVersion, "40.0.0");
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});

test("detectProject resolves package.json from a nested working directory", async () => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-project-nested-"));
	const nestedDirectory = path.join(tempDirectory, "src", "components");
	await writeFile(
		path.join(tempDirectory, "package.json"),
		JSON.stringify(
			{
				dependencies: {
					vue: "^3.5.28",
					"@infineon/infineon-design-system-vue": "^40.0.0",
				},
			},
			null,
			2,
		),
		"utf8",
	);

	try {
		const result = await detectProject(nestedDirectory);
		assert.equal(result.framework, "vue");
		assert.equal(result.installedPackage, "@infineon/infineon-design-system-vue");
		assert.equal(result.installedVersion, "40.0.0");
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});

test("detectProject rejects ambiguous IFX package installations without an explicit framework", async () => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-project-ambiguous-"));
	await writeFile(
		path.join(tempDirectory, "package.json"),
		JSON.stringify(
			{
				dependencies: {
					react: "^19.0.0",
					vue: "^3.5.28",
					"@infineon/infineon-design-system-react": "^40.0.0",
					"@infineon/infineon-design-system-vue": "^40.0.0",
				},
			},
			null,
			2,
		),
		"utf8",
	);

	try {
		await assert.rejects(detectProject(tempDirectory), /Multiple IFX packages were detected/);
		const explicitResult = await detectProject(tempDirectory, "vue");
		assert.equal(explicitResult.framework, "vue");
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});

test("detectProject can infer HTML as a safe fallback when IFX packages are absent", async () => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-project-html-"));
	await writeFile(
		path.join(tempDirectory, "package.json"),
		JSON.stringify({ dependencies: { vite: "^7.0.0" } }, null, 2),
		"utf8",
	);

	try {
		const result = await detectProject(tempDirectory);
		assert.equal(result.framework, "html");
		assert.equal(result.installedPackage, "@infineon/infineon-design-system-stencil");
		assert.equal(result.installedVersion, undefined);
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});

test("detectProject reports a missing package.json cleanly", async () => {
	const tempDirectory = await mkdtemp(path.join(tmpdir(), "ifx-project-empty-"));

	try {
		const result = await detectProject(tempDirectory, "html");
		assert.equal(result.framework, "html");
		assert.equal(result.installedPackage, "@infineon/infineon-design-system-stencil");
		assert.equal(result.installedVersion, undefined);
	} finally {
		await rm(tempDirectory, { recursive: true, force: true });
	}
});