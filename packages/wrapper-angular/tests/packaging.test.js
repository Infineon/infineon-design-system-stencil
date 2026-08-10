const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const { mkdtemp, rm } = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const zlib = require("node:zlib");
const test = require("node:test");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(PACKAGE_ROOT, "..", "..");

const runInPackageRoot = (command, args, opts = {}) =>
	execFileSync(command, args, {
		cwd: PACKAGE_ROOT,
		stdio: "pipe",
		encoding: "utf8",
		...opts,
	});

/**
 * Lists all entry names in a .tgz tarball without using the system `tar` binary.
 * @param {string} tarballPath
 * @returns {string[]}
 */
function listTarball(tarballPath) {
	const compressed = fs.readFileSync(tarballPath);
	const raw = zlib.gunzipSync(compressed);
	const entries = [];
	let offset = 0;
	while (offset + 512 <= raw.length) {
		const nameBytes = raw.slice(offset, offset + 100);
		const name = nameBytes.toString("utf8").replace(/\0+$/, "");
		if (!name) break;
		const prefixBytes = raw.slice(offset + 345, offset + 500);
		const prefix = prefixBytes.toString("utf8").replace(/\0+$/, "");
		const fullName = prefix ? `${prefix}/${name}` : name;
		entries.push(fullName);
		const sizeOctal = raw.slice(offset + 124, offset + 136).toString("utf8").replace(/\0+$/, "");
		const size = parseInt(sizeOctal, 8) || 0;
		offset += 512 + Math.ceil(size / 512) * 512;
	}
	return entries;
}

test("Angular wrapper packages migration assets", {
	timeout: 180_000,
}, async () => {
	const packDestination = await mkdtemp(
		path.join(os.tmpdir(), "ifx-angular-pack-"),
	);

	try {
		runInPackageRoot("pnpm", ["run", "build"]);
		runInPackageRoot("node", ["./scripts/prepack.js"]);

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

		runInPackageRoot("pnpm", ["pack", "--pack-destination", packDestination]);

		const packedFiles = fs.readdirSync(packDestination);
		const tarball = packedFiles.find((f) => f.endsWith(".tgz"));
		assert.ok(tarball, `Expected a packed tarball in ${packDestination}`);

		const tarballPath = path.join(packDestination, tarball);
		const listing = listTarball(tarballPath);

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

		const distPackagePath = path.join(distPath, "package.json");
		const distPackage = JSON.parse(fs.readFileSync(distPackagePath, "utf8"));
		assert.ok(
			distPackage["ng-update"],
			"Expected ng-update metadata in dist/package.json",
		);
		assert.equal(
			distPackage["ng-update"].migrations,
			"./migrations/migrations.json",
		);
	} finally {
		await rm(packDestination, { recursive: true, force: true });
	}
});

test("Installed package resolves @angular/compiler and typescript without relying on repo node_modules", {
	timeout: 300_000,
}, async () => {
	const packDestination = await mkdtemp(
		path.join(os.tmpdir(), "ifx-angular-pack-"),
	);
	const installRoot = await mkdtemp(
		path.join(os.tmpdir(), "ifx-angular-installed-"),
	);

	try {
		runInPackageRoot("pnpm", ["run", "build"]);
		runInPackageRoot("node", ["./scripts/prepack.js"]);
		runInPackageRoot("pnpm", ["pack", "--pack-destination", packDestination]);

		const tarball = fs.readdirSync(packDestination).find((f) => f.endsWith(".tgz"));
		const tarballPath = path.join(packDestination, tarball);

		fs.writeFileSync(
			path.join(installRoot, "package.json"),
			JSON.stringify({ name: "ifx-resolution-test", version: "1.0.0", private: true }),
		);

		execFileSync("npm", ["install", "--no-save", tarballPath, "@angular/compiler@^20", "typescript@>=5.5"], {
			cwd: installRoot,
			stdio: "pipe",
			encoding: "utf8",
		});

		const repoNodeModules = path.join(REPO_ROOT, "node_modules");

		const resolveCompiler = require.resolve("@angular/compiler", {
			paths: [installRoot],
		});
		assert.ok(
			resolveCompiler.startsWith(installRoot),
			`@angular/compiler should resolve from installRoot, got: ${resolveCompiler}`,
		);
		assert.ok(
			!resolveCompiler.startsWith(repoNodeModules),
			`@angular/compiler should not resolve from repo node_modules, got: ${resolveCompiler}`,
		);

		const resolveTs = require.resolve("typescript", {
			paths: [installRoot],
		});
		assert.ok(
			resolveTs.startsWith(installRoot),
			`typescript should resolve from installRoot, got: ${resolveTs}`,
		);
		assert.ok(
			!resolveTs.startsWith(repoNodeModules),
			`typescript should not resolve from repo node_modules, got: ${resolveTs}`,
		);
	} finally {
		await rm(packDestination, { recursive: true, force: true });
		await rm(installRoot, { recursive: true, force: true });
	}
});

test("Installed factory runs on in-memory Angular Tree and applies v40 operations", {
	timeout: 300_000,
}, async () => {
	const packDestination = await mkdtemp(
		path.join(os.tmpdir(), "ifx-angular-pack-"),
	);
	const installRoot = await mkdtemp(
		path.join(os.tmpdir(), "ifx-angular-factory-"),
	);

	try {
		runInPackageRoot("pnpm", ["run", "build"]);
		runInPackageRoot("node", ["./scripts/prepack.js"]);
		runInPackageRoot("pnpm", ["pack", "--pack-destination", packDestination]);

		const tarball = fs.readdirSync(packDestination).find((f) => f.endsWith(".tgz"));
		const tarballPath = path.join(packDestination, tarball);

		fs.writeFileSync(
			path.join(installRoot, "package.json"),
			JSON.stringify({ name: "ifx-factory-test", version: "1.0.0", private: true }),
		);

		execFileSync("npm", ["install", "--no-save", tarballPath, "@angular/compiler@^20", "typescript@>=5.5"], {
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
		await rm(packDestination, { recursive: true, force: true });
		await rm(installRoot, { recursive: true, force: true });
	}
});

