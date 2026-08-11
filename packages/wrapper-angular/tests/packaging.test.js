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

	const listing = [];
	await tar.list({
		file: sharedTarballPath,
		onentry: (entry) => listing.push(entry.path),
	});

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

		// Install only the wrapper tarball and Angular peers — no explicit typescript.
		execFileSync("npm", [
			"install",
			"--no-save",
			sharedTarballPath,
			"@angular/compiler@^20",
			"@angular/core@^20",
			"@angular/forms@^20",
		], {
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

		const typescriptPath = require.resolve("typescript", { paths: [wrapperRoot] });
		const compilerPath = require.resolve("@angular/compiler", { paths: [wrapperRoot] });

		assert.ok(
			typescriptPath.startsWith(installRoot),
			`typescript should resolve from installRoot tree, got: ${typescriptPath}`,
		);
		assert.ok(
			!typescriptPath.startsWith(repoNodeModules),
			`typescript should not resolve from repo node_modules, got: ${typescriptPath}`,
		);

		assert.ok(
			compilerPath.startsWith(installRoot),
			`@angular/compiler should resolve from installRoot, got: ${compilerPath}`,
		);
		assert.ok(
			!compilerPath.startsWith(repoNodeModules),
			`@angular/compiler should not resolve from repo node_modules, got: ${compilerPath}`,
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
