const assert = require("node:assert/strict");
const test = require("node:test");

const { createManifestMigration } = require("../migrations/releases/v40/index.js");
const { createExecutorRegistry } = require("../migrations/lib/executor-registry.js");
const { RenamePropExecutor } = require("../migrations/lib/rename-prop-executor.js");
const { createStagedFiles } = require("../migrations/lib/staged-files.js");

function createTree(files) {
	const entries = new Map(files);
	const overwrites = [];

	return {
		overwrites,
		getDir() {
			return {
				visit(visitor) {
					for (const filePath of [...entries.keys()].sort()) {
						visitor(filePath);
					}
				},
			};
		},
		get(filePath) {
			if (!entries.has(filePath)) {
				return null;
			}
			return { content: Buffer.from(entries.get(filePath), "utf8") };
		},
		overwrite(filePath, content) {
			entries.set(filePath, content);
			overwrites.push([filePath, content]);
		},
		_snapshot() {
			return new Map(entries);
		},
	};
}

test("createExecutorRegistry rejects duplicate executor registrations", () => {
	assert.throws(() => createExecutorRegistry([new RenamePropExecutor(), new RenamePropExecutor()]), /Duplicate migration step executor registration/);
});

test("createStagedFiles tracks operation ids and changes", () => {
	const tree = createTree([['/src/app.component.html', '<ifx-text-field show-delete-icon></ifx-text-field>']]);
	const stagedFiles = createStagedFiles(tree);

	assert.equal(stagedFiles.get('/src/app.component.html').currentContent, '<ifx-text-field show-delete-icon></ifx-text-field>');

	stagedFiles.update('/src/app.component.html', '<ifx-text-field clearable></ifx-text-field>', 'op-1', [{ operationId: 'op-1', replacement: 'clearable' }]);

	const file = stagedFiles.get('/src/app.component.html');
	assert.equal(file.currentContent, '<ifx-text-field clearable></ifx-text-field>');
	assert.deepEqual(file.operationIds, ['op-1']);
	assert.equal(file.changes[0].replacement, 'clearable');
});

test("createManifestMigration skips writes when an operation produces diagnostics", () => {
	const tree = createTree([
		['/src/app.component.html', '<ifx-text-field show-delete-icon></ifx-text-field>'],
		['/src/app.component.ts', [
			'import { Component } from "@angular/core";',
			'',
			'@Component({ template: \'<ifx-text-field show-delete-icon clearable></ifx-text-field>\' })',
			'export class AppComponent {}',
		].join('\n')],
	]);

	const migrate = createManifestMigration("40.0.0");
	const result = migrate(tree);

	assert.equal(result, tree);
	assert.deepEqual(tree.overwrites, []);
	assert.equal(tree.get('/src/app.component.html').content.toString('utf8'), '<ifx-text-field show-delete-icon></ifx-text-field>');
	assert.equal(tree.get('/src/app.component.ts').content.toString('utf8'), [
		'import { Component } from "@angular/core";',
		'',
		'@Component({ template: \'<ifx-text-field show-delete-icon clearable></ifx-text-field>\' })',
		'export class AppComponent {}',
	].join('\n'));
});
