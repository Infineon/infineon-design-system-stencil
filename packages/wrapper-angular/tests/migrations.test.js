const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const {
	loadManifestFromPath,
	loadReleaseOperations,
	migrateTemplateContent,
	migrateTypeScriptContent,
} = require("../migrations/update-v40/index.js");

const TEST_MANIFEST_PATH = path.join(__dirname, "fixtures", "test-manifest.json");

const TEST_OPERATIONS = [
	{
		id: "ifx-accordion-auto-collapse-to-single-open",
		type: "rename-prop",
		component: "ifx-accordion",
		from: "auto-collapse",
		to: "single-open",
	},
	{
		id: "ifx-text-field-success-to-valid",
		type: "rename-prop",
		component: "ifx-text-field",
		from: "success",
		to: "valid",
	},
];

test("loadReleaseOperations reads the canonical manifest structure", () => {
	const manifest = loadManifestFromPath(TEST_MANIFEST_PATH);
	const operations = loadReleaseOperations("40.0.0", TEST_MANIFEST_PATH);

	assert.equal(manifest.schemaVersion, 1);
	assert.equal(manifest.releases.length, 1);
	assert.equal(operations.length, 0);
});

test("loadReleaseOperations reads v40 operations from the default manifest path", () => {
	const operations = loadReleaseOperations("40.0.0");

	assert.deepEqual(
		operations.map((operation) => operation.id),
		[
			"ifx-text-field-show-delete-icon-to-clearable",
			"ifx-radio-button-group-caption-text-to-caption",
		],
	);
});

test("loadReleaseOperations fails when the manifest file is missing", () => {
	assert.throws(
		() => loadReleaseOperations("40.0.0", path.join(__dirname, "fixtures", "missing-manifest.json")),
		/Unable to locate migration manifest/,
	);
});

test("loadReleaseOperations fails when the manifest path points to a directory", () => {
	assert.throws(
		() => loadReleaseOperations("40.0.0", path.join(__dirname, "fixtures")),
		/expected a file/,
	);
});

test("loadReleaseOperations fails when requested release is missing", () => {
	assert.throws(
		() => loadReleaseOperations("40.1.0", TEST_MANIFEST_PATH),
		/Migration manifest does not contain release "40\.1\.0"/,
	);
});

test("loadReleaseOperations selects an exact release version", () => {
	const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ifx-wrapper-angular-manifest-"));
	const manifestPath = path.join(tempDir, "manifest.json");

	try {
		fs.writeFileSync(
			manifestPath,
			JSON.stringify(
				{
					schemaVersion: 1,
					releases: [
						{ version: "40.0.0", operations: [{ id: "exact-v40", type: "rename-prop", component: "ifx-test", from: "a", to: "b" }] },
						{ version: "40.0.0-next", operations: [{ id: "not-exact", type: "rename-prop", component: "ifx-test", from: "c", to: "d" }] },
					],
				},
				null,
				2,
			),
			"utf8",
		);

		const operations = loadReleaseOperations("40.0.0", manifestPath);
		assert.equal(operations.length, 1);
		assert.equal(operations[0].id, "exact-v40");
	} finally {
		fs.rmSync(tempDir, { recursive: true, force: true });
	}
});

test("loadReleaseOperations fails when the manifest is invalid", () => {
	const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ifx-wrapper-angular-invalid-manifest-"));
	const manifestPath = path.join(tempDir, "manifest.json");

	try {
		fs.writeFileSync(
			manifestPath,
			JSON.stringify(
				{
					schemaVersion: 1,
					releases: [{ version: "40.0.0", operations: [{ id: "dup", type: "rename-prop", component: "ifx-test", from: "a", to: "b" }, { id: "dup", type: "rename-prop", component: "ifx-test", from: "c", to: "d" }] }],
				},
				null,
				2,
			),
			"utf8",
		);

		assert.throws(() => loadReleaseOperations("40.0.0", manifestPath), /duplicate operation id/);
	} finally {
		fs.rmSync(tempDir, { recursive: true, force: true });
	}
});

test("loadReleaseOperations allows identical component/from mappings when target matches", () => {
	const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ifx-wrapper-angular-duplicate-same-target-"));
	const manifestPath = path.join(tempDir, "manifest.json");

	try {
		fs.writeFileSync(
			manifestPath,
			JSON.stringify(
				{
					schemaVersion: 1,
					releases: [
						{ version: "40.0.0", operations: [{ id: "r40-op", type: "rename-prop", component: "ifx-x", from: "old", to: "new" }] },
						{ version: "41.0.0", operations: [{ id: "r41-op", type: "rename-prop", component: "ifx-x", from: "old", to: "new" }] },
					],
				},
				null,
				2,
			),
			"utf8",
		);

		const operations = loadReleaseOperations("40.0.0", manifestPath);
		assert.equal(operations.length, 1);
		assert.equal(operations[0].id, "r40-op");
	} finally {
		fs.rmSync(tempDir, { recursive: true, force: true });
	}
});

test("loadReleaseOperations rejects conflicting component/from mappings with different targets", () => {
	const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "ifx-wrapper-angular-conflict-target-"));
	const manifestPath = path.join(tempDir, "manifest.json");

	try {
		fs.writeFileSync(
			manifestPath,
			JSON.stringify(
				{
					schemaVersion: 1,
					releases: [
						{ version: "40.0.0", operations: [{ id: "r40-op", type: "rename-prop", component: "ifx-x", from: "old", to: "new" }] },
						{ version: "41.0.0", operations: [{ id: "r41-op", type: "rename-prop", component: "ifx-x", from: "old", to: "newer" }] },
					],
				},
				null,
				2,
			),
			"utf8",
		);

		assert.throws(
			() => loadReleaseOperations("40.0.0", manifestPath),
			/conflicting component\/from mapping "ifx-x:old" targets "new" and "newer"/,
		);
	} finally {
		fs.rmSync(tempDir, { recursive: true, force: true });
	}
});

test("Angular migration applies production manifest operations end-to-end", () => {
	const operations = loadReleaseOperations("40.0.0");
	const input = [
		"<ifx-text-field show-delete-icon></ifx-text-field>",
		"<ifx-radio-button-group caption-text=\"foo\"></ifx-radio-button-group>",
	].join("\n");

	const output = migrateTemplateContent(input, "/src/app.component.html", operations);

	assert.ok(output);
	assert.match(output, /<ifx-text-field clearable><\/ifx-text-field>/);
	assert.match(output, /<ifx-radio-button-group caption="foo"><\/ifx-radio-button-group>/);
	assert.doesNotMatch(output, /show-delete-icon/);
	assert.doesNotMatch(output, /caption-text/);
});

test("Angular migration rewrites parsed template bindings from the shared manifest", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'<ifx-accordion [autoCollapse]="isOpen" (ifxChange)="onChange($event)">',
		"  content",
		"</ifx-accordion>",
		'<ifx-accordion auto-collapse="true" on-ifxChange="onLegacyChange($event)"></ifx-accordion>',
	].join("\n");

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /<ifx-accordion \[singleOpen\]="isOpen" \(ifxChange\)="onChange\(\$event\)">/);
	assert.match(output, /<ifx-accordion single-open="true" on-ifxChange="onLegacyChange\(\$event\)"><\/ifx-accordion>/);
	assert.doesNotMatch(output, /auto-collapse/);
});

test("Angular migration rewrites inline template props from the shared manifest", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, NgModule } from "@angular/core";',
		'import { IfxAccordion } from "@infineon/infineon-design-system-angular/standalone";',
		"",
		"@Component({",
		"  standalone: true,",
		"  imports: [IfxAccordion],",
		"  template: `<ifx-accordion bind-autoCollapse=\"isInlineOpen\" on-ifxChange=\"onInlineChange($event)\"></ifx-accordion>`",
		"})",
		"export class AppComponent {}",
		"",
		"@NgModule({ imports: [IfxAccordion] })",
		"export class AppModule {}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.ok(output);
	assert.match(output, /imports: \[IfxAccordion\]/);
	assert.match(output, /<ifx-accordion bind-singleOpen="isInlineOpen" on-ifxChange="onInlineChange\(\$event\)"><\/ifx-accordion>/);
	assert.doesNotMatch(output, /autoCollapse/);
});

test("Angular migration leaves TypeScript class-body property APIs unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = "export class ProfileComponent { toggle() { this.accordionRef.nativeElement.autoCollapse = false; } }";

	assert.equal(migrateTypeScriptContent(input, "/src/profile.component.ts", rules), null);
});

// ─── Template property bindings (success → valid on ifx-text-field) ───

test("Angular migration renames [prop]=\"true\" literal boolean binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field [success]="true" label="Alias"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="true"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"variable\" variable reference binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field [success]="showSuccess" label="Alias"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="showSuccess"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"expression\" inline expression binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field [success]="alias().trim().length > 0" label="Alias"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="alias\(\)\.trim\(\)\.length > 0"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"x ? true : false\" ternary binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field [success]="x ? true : false" label="Password"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="x \? true : false"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"method()\" method call binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field [success]="getPasswordSuccess()" label="Password"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="getPasswordSuccess\(\)"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"computed()\" computed signal binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field [success]="computedSuccess()" label="Password"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="computedSuccess\(\)"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"false\" literal false binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field [success]="false" label="Search"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="false"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration does not touch a component that has no matching prop rule", () => {
	const rules = TEST_OPERATIONS;
	// ifx-search-field has no success prop — the element must pass through unchanged.
	const input = '<ifx-search-field label="Search" placeholder="Search..."></ifx-search-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	// No match means no changes were made — migrateTemplateContent returns null when nothing changed.
	assert.equal(output, null);
});

// ─── Attribute bindings & ViewChild ───
// HTML cases use migrateTemplateContent.
// TypeScript cases use migrateTypeScriptContent.

test("Angular migration renames prop=\"true\" static attribute in template", () => {
	const rules = TEST_OPERATIONS;
	const input = '<ifx-text-field success="true" label="Name"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /valid="true"/);
	assert.doesNotMatch(output, /success=/);
});

test("Angular migration renames [attr.prop]=\"'true'\" attribute binding literal in template", () => {
	const rules = TEST_OPERATIONS;
	const input = `<ifx-text-field [attr.success]="'true'" label="Name"></ifx-text-field>`;

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[attr\.valid\]="'true'"/);
	assert.doesNotMatch(output, /attr\.success/);
});

test("Angular migration renames [attr.prop]=\"x ? '' : null\" ternary attribute binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = `<ifx-text-field [attr.success]="isValid ? '' : null" label="Name"></ifx-text-field>`;

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[attr\.valid\]="isValid \? '' : null"/);
	assert.doesNotMatch(output, /attr\.success/);
});

test("Angular migration renames [attr.prop]=\"x ? 'true' : null\" ternary attribute binding in template", () => {
	const rules = TEST_OPERATIONS;
	const input = `<ifx-text-field [attr.success]="isValid ? 'true' : null" label="Name"></ifx-text-field>`;

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[attr\.valid\]="isValid \? 'true' : null"/);
	assert.doesNotMatch(output, /attr\.success/);
});

test("Angular migration leaves nativeElement.prop assignment unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"",
		"  onNameChange() {",
		"    this.nameFieldRef.nativeElement.success = true;",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

test("Angular migration leaves nativeElement bracket access unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"",
		"  onNameChange() {",
		"    this.nameFieldRef.nativeElement['success'] = true;",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

test("Angular migration leaves DOM setAttribute calls unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"",
		"  markValid() {",
		"    this.nameFieldRef.nativeElement.setAttribute('success', '');",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

// Class-body APIs are intentionally outside the migration scope.

test("Angular migration leaves Renderer2 setProperty unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"  constructor(private renderer: Renderer2) {}",
		"",
		"  setValid() {",
		"    this.renderer.setProperty(this.nameFieldRef.nativeElement, 'success', true);",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

test("Angular migration leaves Renderer2 setAttribute unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"  constructor(private renderer: Renderer2) {}",
		"",
		"  setValid() {",
		"    this.renderer.setAttribute(this.nameFieldRef.nativeElement, 'success', 'true');",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

test("Angular migration leaves Renderer2 dynamic setProperty unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"  constructor(private renderer: Renderer2) {}",
		"  isValid = false;",
		"",
		"  onInput(value: string) {",
		"    this.renderer.setProperty(this.nameFieldRef.nativeElement, 'success', value.trim().length > 0);",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

test("Angular migration leaves Object.assign inline objects unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"",
		"  apply() {",
		"    Object.assign(this.nameFieldRef.nativeElement, { success: true, label: 'Name' });",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

test("Angular migration leaves Object.assign helper results unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"function getFieldProps() {",
		"  return { success: true, label: 'Name' };",
		"}",
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"",
		"  apply() {",
		"    Object.assign(this.nameFieldRef.nativeElement, getFieldProps());",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

test("Angular migration leaves reactive Renderer2 setProperty unchanged", () => {
	const rules = TEST_OPERATIONS;
	const input = [
		'import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"  constructor(private renderer: Renderer2) {}",
		"  checked = false;",
		"",
		"  onCheckboxChange(event: Event) {",
		"    this.checked = (event.target as HTMLInputElement).checked;",
		"    this.renderer.setProperty(this.nameFieldRef.nativeElement, 'success', this.checked);",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	assert.equal(output, null);
});

// ─── Known limitation — cross-file imports are not traced ───
// When the helper function that returns the prop object is defined in another file,
// the migrator cannot follow the import and leaves the prop key unchanged.
// The caller's Object.assign call itself is not renamed either, because the function's
// return type is unknown at the call site.
// Manual fix: rename `success` → `valid` in the source file (e.g. helpers.ts) directly.

test("limitation — Object.assign with imported helper (cross-file) is NOT migrated", () => {
	const rules = TEST_OPERATIONS;
	// The helper is imported from another module — its return object is not in this file.
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		'import { getFieldProps } from "./field-helpers";',
		"",
		"@Component({ selector: 'app-example', templateUrl: './app.component.html' })",
		"export class AppComponent {",
		"  @ViewChild('nameField') nameFieldRef!: ElementRef;",
		"",
		"  apply() {",
		"    Object.assign(this.nameFieldRef.nativeElement, getFieldProps());",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/app.component.ts", rules);

	// No change can be made — the function body lives in another file.
	// migrateTypeScriptContent returns null when nothing changed.
	assert.equal(output, null);
});