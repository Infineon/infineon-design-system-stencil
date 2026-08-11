const assert = require("node:assert/strict");
const path = require("node:path");
const test = require("node:test");

const { createManifestMigration } = require("../migrations/releases/v40/index.js");
const { createExecutorRegistry } = require("../migrations/lib/executor-registry.js");
const { RenamePropExecutor } = require("../migrations/lib/rename-prop-executor.js");
const { collectAngularFiles, createStagedFiles } = require("../migrations/lib/staged-files.js");

const ORCHESTRATION_MANIFEST_PATH = path.resolve(__dirname, "fixtures", "orchestration-manifest.json");

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

test("createExecutorRegistry preflight rejects unsupported operation types", () => {
	const registry = createExecutorRegistry([new RenamePropExecutor()]);
	assert.throws(() => registry.preflight([{ id: "unsupported", type: "unknown", component: "x", from: "a", to: "b" }]), /No executor is registered/);
});

test("collectAngularFiles excludes ignored segments and sorts results", () => {
	const tree = createTree([
		['/src/a.component.html', '<div></div>'],
		['/src/b.component.ts', 'export const a = 1;'],
		['/src/types.d.ts', 'export {};'],
		['/src/app/distro/example.ts', 'export const b = 2;'],
		['/src/app/distribution/example.html', '<div></div>'],
		['/dist/generated.ts', 'export const c = 3;'],
		['/node_modules/pkg/index.ts', 'export const d = 4;'],
		['/.angular/cache.ts', 'export const e = 5;'],
		['/.git/hooks/foo.ts', 'export const f = 6;'],
	]);

	const files = collectAngularFiles(tree);
	assert.deepEqual(files, [
		'/src/a.component.html',
		'/src/app/distribution/example.html',
		'/src/app/distro/example.ts',
		'/src/b.component.ts',
	]);
});

test("migrations.json points at the release-based v40 factory", () => {
	const manifest = require("../migrations/migrations.json");
	assert.equal(manifest.schematics["update-to-v40"].factory, "./releases/v40/index.js#updateToV40");
	assert.equal(require("node:fs").existsSync("./packages/wrapper-angular/migrations/update-v40"), false);
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
	assert.throws(() => migrate(tree), /DDS001/);
	assert.deepEqual(tree.overwrites, []);
	assert.equal(tree.get('/src/app.component.html').content.toString('utf8'), '<ifx-text-field show-delete-icon></ifx-text-field>');
	assert.equal(tree.get('/src/app.component.ts').content.toString('utf8'), [
		'import { Component } from "@angular/core";',
		'',
		'@Component({ template: \'<ifx-text-field show-delete-icon clearable></ifx-text-field>\' })',
		'export class AppComponent {}',
	].join('\n'));
});

test("createManifestMigration aborts the release on DDS007 and does not overwrite safe HTML files", () => {
	const tree = createTree([
		['/src/safe.component.html', '<ifx-text-field show-delete-icon></ifx-text-field>'],
		['/src/broken.component.ts', [
			'import { Component } from "@angular/core";',
			"",
			"@Component({",
			"  template: `<ifx-text-field show-delete-icon />`",
			"})",
			"export class AppComponent {",
		].join('\n')],
	]);

	const migrate = createManifestMigration("40.0.0");
	assert.throws(() => migrate(tree), /DDS007/);
	assert.deepEqual(tree.overwrites, []);
	assert.equal(
		tree.get('/src/safe.component.html').content.toString('utf8'),
		'<ifx-text-field show-delete-icon></ifx-text-field>',
	);
});

test("createManifestMigration stages operation chaining across operations", () => {
	const tree = createTree([
		['/src/app.component.html', '<ifx-example foo></ifx-example>'],
	]);

	const migrate = createManifestMigration("999.0.0-test", { manifestPath: ORCHESTRATION_MANIFEST_PATH });
	migrate(tree);

	assert.equal(tree.get('/src/app.component.html').content.toString('utf8'), '<ifx-example baz></ifx-example>');
	assert.equal(tree.overwrites.length, 1);
});

test("createManifestMigration rolls back staged writes after a later operation fails", () => {
	const tree = createTree([
		['/src/app.component.html', '<ifx-example foo></ifx-example>\n<ifx-other old="A" new="B"></ifx-other>'],
	]);

	const migrate = createManifestMigration("999.0.1-test", { manifestPath: ORCHESTRATION_MANIFEST_PATH });
	assert.throws(() => migrate(tree), /DDS001/);
	assert.equal(tree.overwrites.length, 0);
	assert.equal(tree.get('/src/app.component.html').content.toString('utf8'), '<ifx-example foo></ifx-example>\n<ifx-other old="A" new="B"></ifx-other>');
});

test("createManifestMigration applies only changed files after successful staged operations", () => {
	const tree = createTree([
		['/src/app.component.html', '<ifx-example foo></ifx-example>\n<ifx-other old="A"></ifx-other>\n<div>unchanged</div>'],
		['/src/unchanged.txt', '<div>unchanged</div>'],
	]);

	const migrate = createManifestMigration("999.0.1-test", { manifestPath: ORCHESTRATION_MANIFEST_PATH });
	migrate(tree);

	assert.equal(tree.get('/src/app.component.html').content.toString('utf8'), '<ifx-example bar></ifx-example>\n<ifx-other new="A"></ifx-other>\n<div>unchanged</div>');
	assert.equal(tree.get('/src/unchanged.txt').content.toString('utf8'), '<div>unchanged</div>');
	assert.deepEqual(tree.overwrites.map(([filePath]) => filePath).sort(), ['/src/app.component.html']);
});

test("createManifestMigration logs warnings and successful writes", () => {
	const logs = { info: [], warn: [] };
	const tree = createTree([
		['/src/app.component.html', '<ifx-text-field [(showDeleteIcon)]="unsupported"></ifx-text-field>\n<ifx-text-field show-delete-icon></ifx-text-field>'],
	]);
	const migrate = createManifestMigration("40.0.0");
	migrate(tree, { logger: { info: (message) => logs.info.push(message), warn: (message) => logs.warn.push(message) } });
	assert.equal(tree.overwrites.length, 1);
	assert.ok(logs.warn.some((message) => message.includes('DDS010')));
	assert.ok(logs.info.some((message) => message.includes('40.0.0')));
	assert.ok(logs.info.some((message) => message.includes('Modified files: 1')));
});

test("createManifestMigration logs no-op runs", () => {
	const logs = { info: [], warn: [] };
	const tree = createTree([
		['/src/app.component.html', '<div></div>'],
	]);
	const migrate = createManifestMigration("40.0.0");
	migrate(tree, { logger: { info: (message) => logs.info.push(message), warn: (message) => logs.warn.push(message) } });
	assert.ok(logs.info.some((message) => message.includes('Modified files: 0')));
});
