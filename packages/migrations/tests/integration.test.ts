import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import { runMigration } from "../lib/cli.js";
import {
	assertIncludesAll,
	cleanupTempFixture,
	createTempFixture,
	readFixtureFile,
	withPatchedConsole,
	writeFixtureFile,
	writeTestManifest,
} from "./helpers.js";

test("shared CLI auto-detects the framework and target version", async () => {
	const fixtureDirectory = await createTempFixture("react-jsx-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath]),
		);

		assert.equal(result.framework, "react");
		assert.equal(result.detectedProject.installedPackage, "@infineon/infineon-design-system-react");
		assert.equal(result.detectedProject.installedVersion, "40.0.0");
		assert.equal(result.targetVersion, "40.0.0");
		assert.equal(result.modifiedFiles.length, 1);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("shared CLI can detect the project from a nested working directory", async () => {
	const fixtureDirectory = await createTempFixture("react-jsx-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const nestedDirectory = path.join(fixtureDirectory, "src");
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", nestedDirectory, "--config", manifestPath]),
		);

		assert.equal(result.framework, "react");
		assert.equal(result.detectedProject.installedVersion, "40.0.0");
		assert.equal(result.modifiedFiles.length, 1);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("react migration rewrites component props in write mode", async () => {
	const fixtureDirectory = await createTempFixture("react-jsx-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.tsx"));
		assertIncludesAll(fileContent, [
			"singleOpen",
			"onIfxChange",
			"singleOpen={isExpanded}",
		]);
		assert.ok(!fileContent.includes("autoCollapse"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("react migration rewrites text-field props in write mode", async () => {
	const fixtureDirectory = await createTempFixture("react-text-field-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.tsx"));
		assertIncludesAll(fileContent, [
			"showClearButton",
			"showClearButton={hasValue}",
			"showClearButton",
		]);
		assert.ok(!fileContent.includes("showDeleteIcon"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("react migration rewrites aliased component imports in write mode", async () => {
	const fixtureDirectory = await createTempFixture("react-jsx-alias-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.tsx"));
		assertIncludesAll(fileContent, [
			'import { IfxAccordion as Accordion } from "@infineon/infineon-design-system-react"',
			"<Accordion singleOpen />",
			"<Accordion singleOpen={isExpanded} />",
		]);
		assert.ok(!fileContent.includes("autoCollapse"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("react migration leaves unsupported member-expression components unchanged", async () => {
	const fixtureDirectory = await createTempFixture("react-jsx-member-expression-noop-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const before = await readFixtureFile(fixtureDirectory, path.join("src", "App.tsx"));
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
		);
		const after = await readFixtureFile(fixtureDirectory, path.join("src", "App.tsx"));

		assert.equal(result.modifiedFiles.length, 0);
		assert.equal(before, after);
		assertIncludesAll(after, ["<IFX.IfxAccordion autoCollapse />"]);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("angular projects are redirected to ng update instead of using dds-migrate", async () => {
	const fixtureDirectory = await createTempFixture("angular-redirect-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		await assert.rejects(
			withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "angular"]),
			),
			/ng update @infineon\/infineon-design-system-angular/,
		);

		await assert.rejects(
			withPatchedConsole(() => runMigration(["--cwd", fixtureDirectory, "--config", manifestPath])),
			/ng update @infineon\/infineon-design-system-angular/,
		);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("vue migration rewrites SFC props in write mode", async () => {
	const fixtureDirectory = await createTempFixture("vue-sfc-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.vue"));
		assertIncludesAll(fileContent, [
			"IfxAccordion",
			"<ifx-accordion",
			":single-open",
			"v-bind:single-open",
			'const accordionProps = { "auto-collapse": true };',
			'<ifx-accordion v-bind="accordionProps" />',
			"@ifxChange",
			"v-on:ifxChange",
			"<IfxAccordion single-open=\"true\" @ifxChange=\"handleChange\" />",
		]);
		assert.ok(!fileContent.includes(":auto-collapse"));
		assert.ok(!fileContent.includes("v-bind:auto-collapse"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("vue migration rewrites aliased render function props in write mode", async () => {
	const fixtureDirectory = await createTempFixture("vue-render-alias-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.ts"));
		assertIncludesAll(fileContent, [
			'import { IfxAccordion as Accordion } from "@infineon/infineon-design-system-vue"',
			"h(Accordion, { singleOpen: autoCollapse }",
			"createVNode(Accordion, {",
			"singleOpen: autoCollapse",
			'"singleOpen": autoCollapse',
		]);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("vue migration rewrites string-tag render function props in write mode", async () => {
	const fixtureDirectory = await createTempFixture("vue-render-string-tag-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.ts"));
		assertIncludesAll(fileContent, [
			'h("ifx-accordion", { singleOpen: autoCollapse }',
			'"singleOpen": autoCollapse',
		]);
		assert.ok(!fileContent.includes('"autoCollapse"'));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("vue migration rewrites JSX component props in write mode", async () => {
	const fixtureDirectory = await createTempFixture("vue-jsx-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.tsx"));
		assertIncludesAll(fileContent, [
			"IfxAccordion",
			"singleOpen",
			"onIfxChange",
			"singleOpen={isOpen}",
		]);
		assert.ok(!fileContent.includes("autoCollapse"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("vue migration rewrites aliased JSX imports without renaming the local alias", async () => {
	const fixtureDirectory = await createTempFixture("vue-jsx-alias-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
		);

		assert.equal(result.modifiedFiles.length, 1);
		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.tsx"));
		assertIncludesAll(fileContent, [
			'import { IfxAccordion as Accordion } from "@infineon/infineon-design-system-vue"',
			"<Accordion singleOpen onIfxChange={handleSelectionChange}>",
			"<Accordion singleOpen={isOpen}",
			"onIfxChange=",
		]);
		assert.ok(!fileContent.includes("<Accordion autoCollapse"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("vue migration rewrites render function props in write mode", async () => {
	const fixtureDirectory = await createTempFixture("vue-render-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
		);

		assert.equal(result.modifiedFiles.length, 1);

		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.ts"));
		assertIncludesAll(fileContent, [
			"h(IfxAccordion, { singleOpen: autoCollapse, onIfxChange, onClick: () => console.log(\"click\") }, () => \"content\")",
			'"singleOpen": autoCollapse',
			'"onIfxChange": (event: Event) => console.log(event.type)',
			"createVNode(IfxAccordion, {",
		]);
		assert.ok(!fileContent.includes('"autoCollapse"'));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("html migration rewrites component props in inline scripts and markup", async () => {
	const fixtureDirectory = await createTempFixture("html-inline-script-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
		);

		assert.equal(result.modifiedFiles.length, 1);
		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
		assertIncludesAll(fileContent, [
			"<ifx-accordion single-open=\"true\"></ifx-accordion>",
			"<ifx-accordion single-open></ifx-accordion>",
			"getAttribute(\"single-open\")",
			"hasAttribute(\"single-open\")",
			"setAttribute(\"single-open\", \"true\")",
			"toggleAttribute('single-open')",
			"?.singleOpen = true",
			'?.["singleOpen"] = true',
			".singleOpen = true",
			"[\"singleOpen\"] = true",
		]);
		assert.ok(!fileContent.includes("auto-collapse"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("html migration rewrites prop syntax in external TypeScript files", async () => {
	const fixtureDirectory = await createTempFixture("html-external-typescript-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
		);

		assert.equal(result.modifiedFiles.length, 2);

		const htmlContent = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
		const scriptContent = await readFixtureFile(fixtureDirectory, path.join("src", "main.ts"));
		assertIncludesAll(htmlContent, ["<ifx-accordion single-open></ifx-accordion>"]);
		assertIncludesAll(scriptContent, [
			'getAttribute("single-open")',
			'hasAttribute("single-open")',
			'setAttribute("single-open", "true")',
			'removeAttribute("single-open")',
			'toggleAttribute("single-open")',
			'?.singleOpen = true',
			'?.["singleOpen"] = false',
		]);
		assert.ok(!scriptContent.includes("auto-collapse"));
		assert.ok(!scriptContent.includes("autoCollapse"));
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

	test("html migration supports separate JavaScript files in dry-run mode", async () => {
	const fixtureDirectory = await createTempFixture("html-external-script-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const before = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
		const beforeScript = await readFixtureFile(fixtureDirectory, path.join("src", "main.js"));
		const result = await withPatchedConsole(() =>
			runMigration([
				"--cwd",
				fixtureDirectory,
				"--config",
				manifestPath,
				"--dry-run",
				"--framework",
				"html",
			]),
		);
		const after = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
		const afterScript = await readFixtureFile(fixtureDirectory, path.join("src", "main.js"));

		assert.equal(before, after);
		assert.equal(beforeScript, afterScript);
		assert.equal(result.dryRun, true);
		assert.equal(result.modifiedFiles.length, 2);
		assert.deepEqual(
			result.modifiedFiles.map((file) => path.basename(file.filePath)).sort(),
			["index.html", "main.js"],
		);
		assertIncludesAll(before, [
			"auto-collapse=\"true\"",
			"auto-collapse",
		]);
		assertIncludesAll(beforeScript, [
			'setAttribute("auto-collapse", "true")',
			"removeAttribute('auto-collapse')",
			'toggleAttribute("auto-collapse")',
			".autoCollapse = true",
			'["autoCollapse"] = false',
		]);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("html migration only rewrites parser and AST matched markup and script nodes", async () => {
	const fixtureDirectory = await createTempFixture("html-parser-boundary-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
		);

		assert.equal(result.modifiedFiles.length, 1);
		const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
		assertIncludesAll(fileContent, [
			"Reference text: ifx-accordion and auto-collapse stay untouched here.",
			"<div auto-collapse=\"true\">Plain div attribute stays untouched.</div>",
			"<ifx-accordion single-open=\"true\" data-event=\"ifxChange\"></ifx-accordion>",
			'const propName = "auto-collapse";',
			'setAttribute("single-open", "true")',
		]);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("version-gated migrations are skipped when the installed IFX package is older", async () => {
	const fixtureDirectory = await createTempFixture("html-external-script-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory);

	try {
		await writeFixtureFile(
			fixtureDirectory,
			"package.json",
			JSON.stringify(
				{
					name: "html-codemod-fixture",
					private: true,
					dependencies: {
						vite: "^7.2.4",
						"@infineon/infineon-design-system-stencil": "^39.21.0",
					},
				},
				null,
				2,
			) + "\n",
		);

		const before = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath]),
		);
		const after = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));

		assert.equal(result.framework, "html");
		assert.equal(result.targetVersion, "39.21.0");
		assert.equal(result.modifiedFiles.length, 0);
		assert.equal(before, after);
		assert.match(result.warnings.join("\n"), /Applying 0 of 2 migrations for target version 39.21.0/);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});

test("empty manifests surface warnings through the CLI result", async () => {
	const fixtureDirectory = await createTempFixture("html-external-script-prop-rename-project");
	const manifestPath = await writeTestManifest(fixtureDirectory, { schemaVersion: 1, migrations: [] });

	try {
		const result = await withPatchedConsole(() =>
			runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--dry-run", "--framework", "html"]),
		);

		assert.equal(result.modifiedFiles.length, 0);
		assert.equal(result.warnings.length, 1);
		assert.match(result.warnings[0], /does not define any rename rules/);
	} finally {
		await cleanupTempFixture(fixtureDirectory);
	}
});