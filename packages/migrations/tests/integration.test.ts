import assert from "node:assert/strict";
import path from "node:path";
import test, { describe } from "node:test";

import { runMigration } from "../lib/cli.js";
import {
	assertIncludesAll,
	cleanupTempFixture,
	createTempFixture,
	PACKAGE_RENAME_MANIFEST,
	readFixtureFile,
	withPatchedConsole,
	writeFixtureFile,
	writeTestManifest,
} from "./helpers.js";

describe("cli", () => {
	test("auto-detects framework and target version from package.json", async () => {
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

	test("resolves cwd from a nested sub-directory", async () => {
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

	test("redirects angular projects to ng update", async () => {
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

	test("skips version-gated prop-renames when installed version predates the target", async () => {
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

	test("surfaces a warning when the manifest defines no rules", async () => {
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
});

const successRenameManifest = {
	schemaVersion: 1 as const,
	migrations: [
		{ type: "prop-rename" as const, component: "ifx-text-field", from: "success", to: "valid", targetVersion: "40.0.0" },
	],
};

describe("react / prop-rename", () => {
	test("rewrites component props in JSX", async () => {
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

	test("rewrites text-field props in JSX", async () => {
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

	test("rewrites props when the component import is locally aliased", async () => {
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

	test("leaves member-expression component tags unchanged", async () => {
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

	test("rewrites prop across multiple JSX files", async () => {
		const fixtureDirectory = await createTempFixture("react-text-field-success-multi-file-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, successRenameManifest);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
			);

			assert.equal(result.modifiedFiles.length, 3);

			const literalContent = await readFixtureFile(fixtureDirectory, path.join("src", "pages", "LiteralProp.jsx"));
			assertIncludesAll(literalContent, ["valid={true}"]);
			assert.ok(!literalContent.includes("success"));

			const stateContent = await readFixtureFile(fixtureDirectory, path.join("src", "pages", "StateExpression.jsx"));
			assertIncludesAll(stateContent, ["valid={isSuccess}"]);
			assert.ok(!stateContent.includes("success={isSuccess}"));

			const directContent = await readFixtureFile(fixtureDirectory, path.join("src", "pages", "DirectExpressions.tsx"));
			assertIncludesAll(directContent, [
				"valid={isValid}",
				"valid={isSubmitting}",
				'valid={values.email.includes("@")}',
			]);
			assert.ok(!directContent.includes("success={isValid}"));
			assert.ok(!directContent.includes("success={isSubmitting}"));
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("rewrites prop inside a local const spread object", async () => {
		const fixtureDirectory = await createTempFixture("react-text-field-success-local-spread-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, successRenameManifest);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
			);

			assert.equal(result.modifiedFiles.length, 1);

			const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "LocalSpread.jsx"));
			assertIncludesAll(fileContent, [
				"valid: true",
				"<IfxTextField {...directorySearchProps} />",
			]);
			assert.ok(!fileContent.includes("success:"));
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("leaves prop unchanged when object originates outside the component file", async () => {
		const fixtureDirectory = await createTempFixture("react-text-field-success-spread-noop-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, successRenameManifest);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
			);

			assert.equal(result.modifiedFiles.length, 0);

			const configContent = await readFixtureFile(fixtureDirectory, path.join("src", "data", "fieldConfig.js"));
			assertIncludesAll(configContent, [
				'{ label: "mapped true", success: true }',
				'{ label: "mapped false", success: false }',
			]);

			const helperContent = await readFixtureFile(fixtureDirectory, path.join("src", "pages", "HelperSpread.tsx"));
			assertIncludesAll(helperContent, [
				"success:",
				"<IfxTextField {...getEscalationOwnerFieldProps(values)} />",
			]);

			const sharedPropsContent = await readFixtureFile(fixtureDirectory, path.join("src", "data", "sharedFieldProps.js"));
			assert.ok(sharedPropsContent.includes("success: true"), "imported object key must not be renamed");

			const importedHelperContent = await readFixtureFile(fixtureDirectory, path.join("src", "helpers", "fieldHelpers.ts"));
			assert.ok(importedHelperContent.includes("success:"), "imported helper return key must not be renamed");
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});
});

describe("react / package-rename", () => {
	test("renames bare and subpath imports in .tsx files", async () => {
		const fixtureDirectory = await createTempFixture("react-package-rename-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, PACKAGE_RENAME_MANIFEST);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "react"]),
			);

			// main.tsx (two stencil subpath imports) + package.json
			assert.equal(result.modifiedFiles.length, 2);

			const mainContent = await readFixtureFile(fixtureDirectory, path.join("src", "main.tsx"));
			assert.ok(
				!mainContent.includes("@infineon/infineon-design-system-stencil"),
				"all stencil imports should be renamed in main.tsx",
			);
			assertIncludesAll(mainContent, [
				'"@infineon/design-system-stencil/loader"',
				'"@infineon/design-system-stencil/dist/custom-elements"',
			]);

			const pkgContent = await readFixtureFile(fixtureDirectory, "package.json");
			const pkg = JSON.parse(pkgContent) as { dependencies: Record<string, string> };
			assert.ok(
				"@infineon/design-system-stencil" in pkg.dependencies,
				"dependencies entry should be renamed",
			);
			assert.ok(
				!("@infineon/infineon-design-system-stencil" in pkg.dependencies),
				"old dependencies entry should be removed",
			);
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});
});

describe("vue / prop-rename", () => {
	test("rewrites props in SFC template attributes", async () => {
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
				'const accordionProps = { "single-open": true };',
				'<ifx-accordion v-bind="accordionProps" />',
				"@ifxChange",
				"v-on:ifxChange",
				"<IfxAccordion single-open=\"true\" @ifxChange=\"handleChange\" />",
			]);
			assert.ok(!fileContent.includes(":auto-collapse"));
			assert.ok(!fileContent.includes("v-bind:auto-collapse"));
			assert.ok(!fileContent.includes('"auto-collapse"'));
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("rewrites prop inside a local const spread object in SFC script", async () => {
		const fixtureDirectory = await createTempFixture("vue-sfc-success-local-spread-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, successRenameManifest);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
			);

			assert.equal(result.modifiedFiles.length, 1);

			const fileContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.vue"));
			assertIncludesAll(fileContent, [
				"valid: true",
				'<IfxTextField v-bind="directorySearchProps" />',
			]);
			assert.ok(!fileContent.includes("success:"));
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("rewrites props in render function when component import is locally aliased", async () => {
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

	test("rewrites props in render function called with a string tag", async () => {
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

	test("rewrites props in render function (h / createVNode)", async () => {
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

	test("rewrites props in JSX component syntax", async () => {
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

	test("rewrites JSX props without renaming the local import alias", async () => {
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

	test("leaves prop unchanged when spread object is imported from another file", async () => {
		const fixtureDirectory = await createTempFixture("vue-sfc-success-import-spread-noop-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, successRenameManifest);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
			);

			assert.equal(result.modifiedFiles.length, 0);

			const configContent = await readFixtureFile(fixtureDirectory, path.join("src", "config", "fieldProps.ts"));
			assert.ok(configContent.includes("success: true"), "imported object key must not be renamed");
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});
});

describe("vue / package-rename", () => {
	test("renames imports in .ts files, <script> blocks, and <script setup> blocks", async () => {
		const fixtureDirectory = await createTempFixture("vue-package-rename-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, PACKAGE_RENAME_MANIFEST);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "vue"]),
			);

			// main.ts + App.vue (<script>) + Setup.vue (<script setup>) + package.json
			assert.equal(result.modifiedFiles.length, 4);

			const mainContent = await readFixtureFile(fixtureDirectory, path.join("src", "main.ts"));
			assert.ok(
				!mainContent.includes("@infineon/infineon-design-system-stencil"),
				"import renamed in main.ts",
			);

			const appContent = await readFixtureFile(fixtureDirectory, path.join("src", "App.vue"));
			assert.ok(
				!appContent.includes("@infineon/infineon-design-system-stencil"),
				"import renamed in App.vue <script> block",
			);

			const setupContent = await readFixtureFile(fixtureDirectory, path.join("src", "Setup.vue"));
			assert.ok(
				!setupContent.includes("@infineon/infineon-design-system-stencil"),
				"import renamed in Setup.vue <script setup> block",
			);

			const allContent = [mainContent, appContent, setupContent].join("\n");
			assertIncludesAll(allContent, ['"@infineon/design-system-stencil/loader"']);
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});
});

describe("html / prop-rename", () => {
	test("rewrites component props in inline scripts and markup", async () => {
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

	test("rewrites props in external TypeScript files", async () => {
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

	test("rewrites props in Object.assign inline objects and local const spreads", async () => {
		const fixtureDirectory = await createTempFixture("html-object-assign-prop-rename-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, successRenameManifest);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
			);

			assert.equal(result.modifiedFiles.length, 1);

			const scriptContent = await readFixtureFile(fixtureDirectory, path.join("src", "main.ts"));
			assertIncludesAll(scriptContent, [
				"Object.assign(el, { valid: true, label: 'inline object' })",
				"valid: true,",
			]);
			assert.ok(!scriptContent.includes("success:"));
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("rewrites props inside function return objects spread via Object.assign", async () => {
		const fixtureDirectory = await createTempFixture("html-object-assign-function-return-prop-rename-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, successRenameManifest);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
			);

			assert.equal(result.modifiedFiles.length, 1);

			const scriptContent = await readFixtureFile(fixtureDirectory, path.join("src", "main.ts"));
			assert.ok(!scriptContent.includes("success:"), "no 'success:' key should remain");
			assert.equal((scriptContent.match(/valid:/g) ?? []).length, 5, "all five object keys renamed");
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("supports external JavaScript files in dry-run mode", async () => {
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

	test("only rewrites parser and AST-matched nodes, not plain text", async () => {
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
});

describe("html / package-rename", () => {
	test("renames CDN URLs in script[src] and link[href] attributes and package.json dependencies", async () => {
		const fixtureDirectory = await createTempFixture("html-cdn-package-rename-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, PACKAGE_RENAME_MANIFEST);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
			);

			assert.equal(result.modifiedFiles.length, 3);

			const htmlContent = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
			assert.ok(!htmlContent.includes("@infineon/infineon-design-system-stencil"), "CDN URL should be renamed in HTML");
			assertIncludesAll(htmlContent, ["@infineon/design-system-stencil"]);

			const tsContent = await readFixtureFile(fixtureDirectory, path.join("src", "main.ts"));
			assert.ok(!tsContent.includes("@infineon/infineon-design-system-stencil"), "import should be renamed in TS");
			assertIncludesAll(tsContent, ['from "@infineon/design-system-stencil/loader"']);

			const packageJsonContent = await readFixtureFile(fixtureDirectory, "package.json");
			const packageJson = JSON.parse(packageJsonContent) as { dependencies: Record<string, string> };
			assert.ok(
				"@infineon/design-system-stencil" in packageJson.dependencies,
				"new package name should be in dependencies",
			);
			assert.ok(
				!("@infineon/infineon-design-system-stencil" in packageJson.dependencies),
				"old package name should be removed from dependencies",
			);
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("renames bare and subpath imports in .js files and devDependencies", async () => {
		const fixtureDirectory = await createTempFixture("html-package-rename-js-import-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, PACKAGE_RENAME_MANIFEST);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
			);

			// setup.js (bare import) + loader.js (subpath import) + package.json
			assert.equal(result.modifiedFiles.length, 3);

			const setupContent = await readFixtureFile(fixtureDirectory, path.join("src", "setup.js"));
			assert.ok(
				!setupContent.includes("@infineon/infineon-design-system-stencil"),
				"bare import should be renamed in setup.js",
			);
			assertIncludesAll(setupContent, ['"@infineon/design-system-stencil"']);

			const loaderContent = await readFixtureFile(fixtureDirectory, path.join("src", "loader.js"));
			assert.ok(
				!loaderContent.includes("@infineon/infineon-design-system-stencil"),
				"subpath import should be renamed in loader.js",
			);
			assertIncludesAll(loaderContent, ['"@infineon/design-system-stencil/loader"']);

			const pkgContent = await readFixtureFile(fixtureDirectory, "package.json");
			const pkg = JSON.parse(pkgContent) as { devDependencies: Record<string, string> };
			assert.ok(
				"@infineon/design-system-stencil" in pkg.devDependencies,
				"devDependencies entry should be renamed",
			);
			assert.ok(
				!("@infineon/infineon-design-system-stencil" in pkg.devDependencies),
				"old devDependencies entry should be removed",
			);
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});

	test("renames import inside an inline <script type=module> block", async () => {
		const fixtureDirectory = await createTempFixture("html-package-rename-inline-module-project");
		const manifestPath = await writeTestManifest(fixtureDirectory, PACKAGE_RENAME_MANIFEST);

		try {
			const result = await withPatchedConsole(() =>
				runMigration(["--cwd", fixtureDirectory, "--config", manifestPath, "--framework", "html"]),
			);

			// index.html (inline script import) + package.json
			assert.equal(result.modifiedFiles.length, 2);

			const htmlContent = await readFixtureFile(fixtureDirectory, path.join("src", "index.html"));
			assert.ok(
				!htmlContent.includes("@infineon/infineon-design-system-stencil"),
				"inline script import should be renamed in index.html",
			);
			assertIncludesAll(htmlContent, ['"@infineon/design-system-stencil/loader"']);
		} finally {
			await cleanupTempFixture(fixtureDirectory);
		}
	});
});