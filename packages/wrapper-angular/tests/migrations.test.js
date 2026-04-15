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