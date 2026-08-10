const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const { mkdtemp, rm } = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");
const tar = require("tar");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(PACKAGE_ROOT, "..", "..");

const { validateMigrationAssets } = require("../scripts/migration-packaging.js");

const runInPackageRoot = (command, args, opts = {}) =>
	execFileSync(command, args, {
		cwd: PACKAGE_ROOT,
		stdio: "pipe",
		encoding: "utf8",
		...opts,
	});

/** Returns all entry paths in a .tgz tarball using the `tar` npm package. */
async function listTarball(tarballPath) {
	const entries = [];
	await tar.list({
		file: tarballPath,
		onentry: (entry) => entries.push(entry.path),
	});
	return entries;
}

// Build and pack once for all packaging tests.
let sharedPackDestination;
let sharedTarballPath;

test.before(async () => {
	sharedPackDestination = await mkdtemp(path.join(os.tmpdir(), "ifx-angular-pack-"));
	runInPackageRoot("pnpm", ["run", "build"]);
	runInPackageRoot("node", ["./scripts/prepack.js"]);
	runInPackageRoot("pnpm", ["pack", "--pack-destination", sharedPackDestination]);
	const tarball = fs.readdirSync(sharedPackDestination).find((f) => f.endsWith(".tgz"));
	assert.ok(tarball, `Expected a packed tarball in ${sharedPackDestination}`);
	sharedTarballPath = path.join(sharedPackDestination, tarball);
});

test.after(async () => {
	if (sharedPackDestination) {
		await rm(sharedPackDestination, { recursive: true, force: true });
	}
});

test("Angular wrapper packages migration assets", {
	timeout: 180_000,
}, async () => {
	const distPath = path.join(PACKAGE_ROOT, "dist");

	const expectedFiles = [
		"migrations/migrations.json",
		"migrations/shared/manifest.json",
		"migrations/releases/v40/index.js",
		"migrations/lib/manifest.js",
		"migrations/lib/angular-adapter.js",
		"migrations/lib/executor-registry.js",
		"migrations/lib/rename-prop-executor.js",
		"migrations/lib/staged-files.js",
	];
	for (const rel of expectedFiles) {
		assert.ok(
			fs.existsSync(path.join(distPath, rel)),
			`Expected dist/${rel}`,
		);
	}

	const listing = await listTarball(sharedTarballPath);

	for (const rel of expectedFiles) {
		assert.ok(
			listing.some((e) => e === `package/${rel}` || e.endsWith(`/${rel}`)),
			`Expected tarball to contain ${rel}`,
		);
	}

	assert.ok(
		!listing.some((e) => e.includes("migrations/shared/v1.json")),
		"Expected tarball to NOT contain migrations/shared/v1.json",
	);
	assert.ok(
		!listing.some((e) => e.includes("migrations/update-v40")),
		"Expected tarball to NOT contain migrations/update-v40/",
	);

	const distPackage = JSON.parse(
		fs.readFileSync(path.join(distPath, "package.json"), "utf8"),
	);
	assert.ok(distPackage["ng-update"], "Expected ng-update metadata in dist/package.json");
	assert.equal(distPackage["ng-update"].migrations, "./migrations/migrations.json");
});

test("Installed package resolves @angular/compiler and typescript without relying on repo node_modules", {
	timeout: 300_000,
}, async () => {
	const installRoot = await mkdtemp(path.join(os.tmpdir(), "ifx-angular-installed-"));

	try {
		fs.writeFileSync(
			path.join(installRoot, "package.json"),
			JSON.stringify({ name: "ifx-resolution-test", version: "1.0.0", private: true }),
		);

		// Install only the wrapper tarball and its Angular peer — no explicit typescript.
		execFileSync("npm", ["install", "--no-save", sharedTarballPath, "@angular/compiler@^20"], {
			cwd: installRoot,
			stdio: "pipe",
			encoding: "utf8",
		});

		const repoNodeModules = path.join(REPO_ROOT, "node_modules");
		const wrapperRoot = path.join(
			installRoot,
			"node_modules",
			"@infineon",
			"infineon-design-system-angular",
		);

		const resolveCompiler = require.resolve("@angular/compiler", { paths: [wrapperRoot] });
		assert.ok(
			resolveCompiler.startsWith(installRoot),
			`@angular/compiler should resolve from installRoot, got: ${resolveCompiler}`,
		);
		assert.ok(
			!resolveCompiler.startsWith(repoNodeModules),
			`@angular/compiler should not resolve from repo node_modules, got: ${resolveCompiler}`,
		);

		// typescript must be provided by the wrapper's own runtime deps — not by the consumer.
		const resolveTs = require.resolve("typescript", { paths: [wrapperRoot] });
		assert.ok(
			resolveTs.startsWith(installRoot),
			`typescript should resolve from installRoot tree, got: ${resolveTs}`,
		);
		assert.ok(
			!resolveTs.startsWith(repoNodeModules),
			`typescript should not resolve from repo node_modules, got: ${resolveTs}`,
		);
	} finally {
		await rm(installRoot, { recursive: true, force: true });
	}
});

test("Installed factory runs on in-memory Angular Tree and applies v40 operations", {
	timeout: 300_000,
}, async () => {
	const installRoot = await mkdtemp(path.join(os.tmpdir(), "ifx-angular-factory-"));

	try {
		fs.writeFileSync(
			path.join(installRoot, "package.json"),
			JSON.stringify({ name: "ifx-factory-test", version: "1.0.0", private: true }),
		);

		execFileSync("npm", ["install", "--no-save", sharedTarballPath, "@angular/compiler@^20"], {
			cwd: installRoot,
			stdio: "pipe",
			encoding: "utf8",
		});

		const wrapperRoot = path.join(installRoot, "node_modules", "@infineon", "infineon-design-system-angular");
		const { updateToV40, loadReleaseOperations } = require(
			path.join(wrapperRoot, "migrations", "releases", "v40", "index.js"),
		);

		const manifestPath = path.join(wrapperRoot, "migrations", "shared", "manifest.json");
		const operations = loadReleaseOperations("40.0.0", manifestPath);
		assert.ok(
			operations.some((op) => op.id === "ifx-text-field-show-delete-icon-to-clearable"),
			"Expected ifx-text-field-show-delete-icon-to-clearable operation",
		);
		assert.ok(
			operations.some((op) => op.id === "ifx-radio-button-group-caption-text-to-caption"),
			"Expected ifx-radio-button-group-caption-text-to-caption operation",
		);

		const externalHtml = `<ifx-text-field show-delete-icon></ifx-text-field>\n<ifx-radio-button-group caption-text="Hello"></ifx-radio-button-group>\n`;
		const inlineTs = `import { Component } from "@angular/core";\n@Component({ template: \`<ifx-text-field show-delete-icon></ifx-text-field>\` })\nexport class AppComponent {}\n`;

		const fileMap = new Map([
			["/app/app.component.html", externalHtml],
			["/app/app.component.ts", inlineTs],
		]);

		const tree = {
			get(filePath) {
				const content = fileMap.get(filePath);
				return content != null ? { content: Buffer.from(content) } : null;
			},
			getDir(dirPath) {
				return {
					visit(cb) {
						for (const fp of fileMap.keys()) {
							if (dirPath === "/" || fp.startsWith(dirPath + "/")) {
								cb(fp);
							}
						}
					},
				};
			},
			overwrite(filePath, content) {
				fileMap.set(filePath, content);
			},
		};

		const logs = [];
		const context = {
			logger: {
				info: (msg) => logs.push(msg),
				warn: (msg) => logs.push(`WARN: ${msg}`),
			},
		};

		const factory = updateToV40();
		factory(tree, context);

		const htmlResult = fileMap.get("/app/app.component.html");
		assert.ok(htmlResult.includes("clearable"), "External template: show-delete-icon → clearable");
		assert.ok(!htmlResult.includes("show-delete-icon"), "External template: show-delete-icon removed");
		assert.ok(htmlResult.includes('caption="Hello"'), "External template: caption-text → caption");
		assert.ok(!htmlResult.includes("caption-text"), "External template: caption-text removed");

		const tsResult = fileMap.get("/app/app.component.ts");
		assert.ok(tsResult.includes("clearable"), "Inline template: show-delete-icon → clearable");
		assert.ok(!tsResult.includes("show-delete-icon"), "Inline template: show-delete-icon removed");

		assert.ok(
			logs.some((l) => l.includes("ifx-text-field-show-delete-icon-to-clearable")),
			"Expected ifx-text-field-show-delete-icon-to-clearable in logs",
		);
		assert.ok(
			logs.some((l) => l.includes("ifx-radio-button-group-caption-text-to-caption")),
			"Expected ifx-radio-button-group-caption-text-to-caption in logs",
		);
	} finally {
		await rm(installRoot, { recursive: true, force: true });
	}
});

test("prepack: succeeds with current migrations.json and manifest", {
	timeout: 60_000,
}, () => {
	// sharedPackDestination was built by test.before() — prepack already ran successfully.
	assert.ok(sharedTarballPath, "prepack produced a tarball");
});

test("prepack: fails when a configured migration version is missing from manifest", {
	timeout: 60_000,
}, async () => {
	const fixtureDir = await mkdtemp(path.join(os.tmpdir(), "ifx-prepack-fail-"));

	try {
		const collection = {
			schematics: {
				test: { version: "99.0.0", factory: "./test.js" },
			},
		};
		const collectionPath = path.join(fixtureDir, "migrations.json");
		fs.writeFileSync(collectionPath, JSON.stringify(collection));

		// Real manifest does not contain 99.0.0
		const manifestPath = path.join(PACKAGE_ROOT, "migrations", "shared", "manifest.json");

		assert.throws(
			() => validateMigrationAssets(collectionPath, manifestPath),
			/99\.0\.0/,
			"Expected error mentioning missing version 99.0.0",
		);
	} finally {
		await rm(fixtureDir, { recursive: true, force: true });
	}
});

test("prepack: fails on invalid manifest schema (malformed operation)", {
	timeout: 60_000,
}, async () => {
	const fixtureDir = await mkdtemp(path.join(os.tmpdir(), "ifx-prepack-invalid-"));

	try {
		const collection = {
			schematics: {
				test: { version: "40.0.0", factory: "./test.js" },
			},
		};
		const collectionPath = path.join(fixtureDir, "migrations.json");
		fs.writeFileSync(collectionPath, JSON.stringify(collection));

		const invalidManifest = {
			schemaVersion: 1,
			releases: [{
				version: "40.0.0",
				operations: [
					{ id: "op-1", type: "rename-prop", component: "ifx-x", from: "", to: "b" },
				],
			}],
		};
		const manifestPath = path.join(fixtureDir, "manifest.json");
		fs.writeFileSync(manifestPath, JSON.stringify(invalidManifest));

		assert.throws(
			() => validateMigrationAssets(collectionPath, manifestPath),
			/from.*non-empty/i,
			"Expected manifest-loader error about empty 'from' field",
		);
	} finally {
		await rm(fixtureDir, { recursive: true, force: true });
	}
});
