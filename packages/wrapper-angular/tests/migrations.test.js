const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const {
	loadMigrationRules,
	migrateTemplateContent,
	migrateTypeScriptContent,
} = require("../migrations/update-v40/index.js");

const TEST_MANIFEST_PATH = path.join(__dirname, "fixtures", "test-manifest.json");

test("Angular migration rewrites parsed template bindings from the shared manifest", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

test("Angular migration renames nativeElement property access in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-profile', templateUrl: './profile.component.html' })",
		"export class ProfileComponent {",
		"  @ViewChild('accordion') accordionRef!: ElementRef;",
		"",
		"  toggle() {",
		"    this.accordionRef.nativeElement.autoCollapse = false;",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/profile.component.ts", rules);

	assert.ok(output);
	assert.match(output, /nativeElement\.singleOpen = false/);
	assert.doesNotMatch(output, /nativeElement\.autoCollapse/);
});

test("Angular migration renames nativeElement bracket access in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-profile', templateUrl: './profile.component.html' })",
		"export class ProfileComponent {",
		"  @ViewChild('accordion') accordionRef!: ElementRef;",
		"",
		"  toggle() {",
		"    this.accordionRef.nativeElement['autoCollapse'] = true;",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/profile.component.ts", rules);

	assert.ok(output);
	assert.match(output, /nativeElement\['singleOpen'\] = true/);
	assert.doesNotMatch(output, /nativeElement\['autoCollapse'\]/);
});

test("Angular migration renames el.setAttribute first-arg in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-profile', templateUrl: './profile.component.html' })",
		"export class ProfileComponent {",
		"  @ViewChild('accordion') accordionRef!: ElementRef;",
		"",
		"  enable() {",
		"    this.accordionRef.nativeElement.setAttribute('auto-collapse', '');",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/profile.component.ts", rules);

	assert.ok(output);
	assert.match(output, /setAttribute\('single-open', ''\)/);
	assert.doesNotMatch(output, /setAttribute\('auto-collapse'/);
});

test("Angular migration renames Renderer2 setProperty second-arg in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = [
		'import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-support', templateUrl: './support.component.html' })",
		"export class SupportComponent {",
		"  @ViewChild('accordion') accordionRef!: ElementRef;",
		"",
		"  constructor(private renderer: Renderer2) {}",
		"",
		"  setOpen(value: boolean) {",
		"    this.renderer.setProperty(this.accordionRef.nativeElement, 'autoCollapse', value);",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/support.component.ts", rules);

	assert.ok(output);
	assert.match(output, /setProperty\(this\.accordionRef\.nativeElement, 'singleOpen', value\)/);
	assert.doesNotMatch(output, /'autoCollapse'/);
});

test("Angular migration renames Renderer2 setAttribute second-arg in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = [
		'import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-support', templateUrl: './support.component.html' })",
		"export class SupportComponent {",
		"  @ViewChild('accordion') accordionRef!: ElementRef;",
		"",
		"  constructor(private renderer: Renderer2) {}",
		"",
		"  setOpen() {",
		"    this.renderer.setAttribute(this.accordionRef.nativeElement, 'auto-collapse', 'true');",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/support.component.ts", rules);

	assert.ok(output);
	assert.match(output, /setAttribute\(this\.accordionRef\.nativeElement, 'single-open', 'true'\)/);
	assert.doesNotMatch(output, /'auto-collapse'/);
});

test("Angular migration renames Object.assign inline object key in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"@Component({ selector: 'app-support', templateUrl: './support.component.html' })",
		"export class SupportComponent {",
		"  @ViewChild('accordion') accordionRef!: ElementRef;",
		"",
		"  apply() {",
		"    Object.assign(this.accordionRef.nativeElement, { autoCollapse: true });",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/support.component.ts", rules);

	assert.ok(output);
	assert.match(output, /Object\.assign\(this\.accordionRef\.nativeElement, \{ singleOpen: true \}\)/);
	assert.doesNotMatch(output, /autoCollapse/);
});

test("Angular migration renames Object.assign with same-file function return object in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = [
		'import { Component, ElementRef, ViewChild } from "@angular/core";',
		"",
		"function getAccordionProps() {",
		"  return { autoCollapse: true };",
		"}",
		"",
		"@Component({ selector: 'app-support', templateUrl: './support.component.html' })",
		"export class SupportComponent {",
		"  @ViewChild('accordion') accordionRef!: ElementRef;",
		"",
		"  apply() {",
		"    Object.assign(this.accordionRef.nativeElement, getAccordionProps());",
		"  }",
		"}",
	].join("\n");

	const output = migrateTypeScriptContent(input, "/src/support.component.ts", rules);

	assert.ok(output);
	assert.match(output, /return \{ singleOpen: true \}/);
	assert.doesNotMatch(output, /autoCollapse/);
});

// ─── Template property bindings (success → valid on ifx-text-field) ───

test("Angular migration renames [prop]=\"true\" literal boolean binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field [success]="true" label="Alias"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="true"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"variable\" variable reference binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field [success]="showSuccess" label="Alias"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="showSuccess"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"expression\" inline expression binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field [success]="alias().trim().length > 0" label="Alias"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="alias\(\)\.trim\(\)\.length > 0"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"x ? true : false\" ternary binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field [success]="x ? true : false" label="Password"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="x \? true : false"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"method()\" method call binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field [success]="getPasswordSuccess()" label="Password"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="getPasswordSuccess\(\)"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"computed()\" computed signal binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field [success]="computedSuccess()" label="Password"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="computedSuccess\(\)"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration renames [prop]=\"false\" literal false binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field [success]="false" label="Search"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[valid\]="false"/);
	assert.doesNotMatch(output, /\[success\]/);
});

test("Angular migration does not touch a component that has no matching prop rule", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = '<ifx-text-field success="true" label="Name"></ifx-text-field>';

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /valid="true"/);
	assert.doesNotMatch(output, /success=/);
});

test("Angular migration renames [attr.prop]=\"'true'\" attribute binding literal in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = `<ifx-text-field [attr.success]="'true'" label="Name"></ifx-text-field>`;

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[attr\.valid\]="'true'"/);
	assert.doesNotMatch(output, /attr\.success/);
});

test("Angular migration renames [attr.prop]=\"x ? '' : null\" ternary attribute binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = `<ifx-text-field [attr.success]="isValid ? '' : null" label="Name"></ifx-text-field>`;

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[attr\.valid\]="isValid \? '' : null"/);
	assert.doesNotMatch(output, /attr\.success/);
});

test("Angular migration renames [attr.prop]=\"x ? 'true' : null\" ternary attribute binding in template", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
	const input = `<ifx-text-field [attr.success]="isValid ? 'true' : null" label="Name"></ifx-text-field>`;

	const output = migrateTemplateContent(input, "/src/app.component.html", rules);

	assert.ok(output);
	assert.match(output, /\[attr\.valid\]="isValid \? 'true' : null"/);
	assert.doesNotMatch(output, /attr\.success/);
});

test("Angular migration renames nativeElement.prop direct property assignment in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /nativeElement\.valid = true/);
	assert.doesNotMatch(output, /nativeElement\.success/);
});

test("Angular migration renames nativeElement['prop'] bracket access in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /nativeElement\['valid'\] = true/);
	assert.doesNotMatch(output, /nativeElement\['success'\]/);
});

test("Angular migration renames el.setAttribute first-arg string in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /setAttribute\('valid', ''\)/);
	assert.doesNotMatch(output, /setAttribute\('success'/);
});

// ─── Renderer2 & Object.assign ───
// All cases use migrateTypeScriptContent.

test("Angular migration renames Renderer2 setProperty second-arg string literal in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /setProperty\(this\.nameFieldRef\.nativeElement, 'valid', true\)/);
	assert.doesNotMatch(output, /'success'/);
});

test("Angular migration renames Renderer2 setAttribute second-arg string literal in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /setAttribute\(this\.nameFieldRef\.nativeElement, 'valid', 'true'\)/);
	assert.doesNotMatch(output, /'success'/);
});

test("Angular migration renames Renderer2 setProperty with dynamic expression value in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /setProperty\(this\.nameFieldRef\.nativeElement, 'valid', value\.trim\(\)\.length > 0\)/);
	assert.doesNotMatch(output, /'success'/);
});

test("Angular migration renames Object.assign inline object key (prop-rename rule) in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /\{ valid: true, label: 'Name' \}/);
	assert.doesNotMatch(output, /success:/);
});

test("Angular migration renames Object.assign with same-file function return object (prop-rename rule) in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /return \{ valid: true, label: 'Name' \}/);
	assert.doesNotMatch(output, /success:/);
});

test("Angular migration renames Renderer2 setProperty with reactive component property in TypeScript body", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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

	assert.ok(output);
	assert.match(output, /setProperty\(this\.nameFieldRef\.nativeElement, 'valid', this\.checked\)/);
	assert.doesNotMatch(output, /'success'/);
});

// ─── Known limitation — cross-file imports are not traced ───
// When the helper function that returns the prop object is defined in another file,
// the migrator cannot follow the import and leaves the prop key unchanged.
// The caller's Object.assign call itself is not renamed either, because the function's
// return type is unknown at the call site.
// Manual fix: rename `success` → `valid` in the source file (e.g. helpers.ts) directly.

test("limitation — Object.assign with imported helper (cross-file) is NOT migrated", () => {
	const rules = loadMigrationRules("40.0.0", TEST_MANIFEST_PATH);
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