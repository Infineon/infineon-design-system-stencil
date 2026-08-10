/**
 * Linux-only integration tests for the packed Angular v40 migration.
 *
 * These tests require npm and an Angular build toolchain (installed per consumer).
 * They are gated to Linux in CI (see S11).
 */

const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const { mkdtemp, rm, cp } = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const FIXTURES_ROOT = path.join(__dirname, "fixtures");

const {
	createVersionedAngularPackage,
	MIGRATION_VERSION,
} = require("./helpers/create-versioned-angular-package.js");

const SOURCE_VERSION = JSON.parse(
	fs.readFileSync(path.join(PACKAGE_ROOT, "package.json"), "utf8"),
).version;

function run(command, args, cwd) {
	return execFileSync(command, args, {
		cwd,
		stdio: "pipe",
		encoding: "utf8",
	});
}

/** Returns the ng binary installed inside a consumer directory. */
function getNgExecutable(consumerDir) {
	return path.join(consumerDir, "node_modules", ".bin", "ng");
}

async function setupConsumer(fixtureName, tarballPath) {
	const consumerDir = await mkdtemp(path.join(os.tmpdir(), `ifx-ng-consumer-${fixtureName}-`));

	await cp(path.join(FIXTURES_ROOT, fixtureName), consumerDir, { recursive: true });

	const pkgPath = path.join(consumerDir, "package.json");
	const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
	pkg.dependencies["@infineon/infineon-design-system-angular"] = tarballPath;
	pkg.version = SOURCE_VERSION;
	fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

	run("npm", ["install", "--legacy-peer-deps"], consumerDir);

	return consumerDir;
}

// Build the versioned package once for all integration tests in this suite.
let packedPackage;

test.before(async () => {
	packedPackage = await createVersionedAngularPackage();
});

test.after(async () => {
	if (packedPackage) {
		await rm(packedPackage.packDir, { recursive: true, force: true });
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

		run("npm", ["install", "--legacy-peer-deps", "--no-save", packedPackage.tarballPath, "@angular/compiler@^20"], installRoot);

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

// ──────────────────────────────────────────────────────────────────────────────
// Packed ng update
// ──────────────────────────────────────────────────────────────────────────────

test("packed ng update discovers migration, logs both operations, and exits 0", {
	timeout: 600_000,
}, async () => {
	const consumerDir = await setupConsumer("standalone-consumer", packedPackage.tarballPath);

	try {
		const ng = getNgExecutable(consumerDir);
		let stdout = "";
		try {
			stdout = run(ng, [
				"update",
				"@infineon/infineon-design-system-angular",
				"--migrate-only",
				"--from", SOURCE_VERSION,
				"--to", MIGRATION_VERSION,
				"--allow-dirty",
				"--force",
			], consumerDir);
		} catch (err) {
			assert.fail(`ng update exited with error:\n${err.stderr ?? ""}\n${err.stdout ?? ""}`);
		}

		assert.ok(
			stdout.includes("ifx-text-field-show-delete-icon-to-clearable"),
			`Expected ifx-text-field-show-delete-icon-to-clearable in output:\n${stdout}`,
		);
		assert.ok(
			stdout.includes("ifx-radio-button-group-caption-text-to-caption"),
			`Expected ifx-radio-button-group-caption-text-to-caption in output:\n${stdout}`,
		);

		const html = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.html"),
			"utf8",
		);
		assert.ok(html.includes("clearable"), "External template: show-delete-icon → clearable");
		assert.ok(!html.includes("show-delete-icon"), "External template: show-delete-icon removed");
		assert.ok(html.includes('caption="'), "External template: caption-text → caption");
		assert.ok(!html.includes("caption-text"), "External template: caption-text removed");

		const ts = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.ts"),
			"utf8",
		);
		assert.ok(ts.includes("clearable"), "Inline template migrated");
		assert.ok(!ts.includes("show-delete-icon"), "Inline template old property removed");
	} finally {
		await rm(consumerDir, { recursive: true, force: true });
	}
});

// ──────────────────────────────────────────────────────────────────────────────
// Idempotency
// ──────────────────────────────────────────────────────────────────────────────

test("running migration twice leaves files byte-identical and reports 0 modified files", {
	timeout: 600_000,
}, async () => {
	const consumerDir = await setupConsumer("standalone-consumer", packedPackage.tarballPath);

	try {
		const ng = getNgExecutable(consumerDir);
		const ngUpdateArgs = [
			"update",
			"@infineon/infineon-design-system-angular",
			"--migrate-only",
			"--from", SOURCE_VERSION,
			"--to", MIGRATION_VERSION,
			"--allow-dirty",
			"--force",
		];

		run(ng, ngUpdateArgs, consumerDir);

		const htmlAfterFirst = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.html"),
			"utf8",
		);
		const tsAfterFirst = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.ts"),
			"utf8",
		);

		const secondOutput = run(ng, ngUpdateArgs, consumerDir);

		const htmlAfterSecond = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.html"),
			"utf8",
		);
		const tsAfterSecond = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.ts"),
			"utf8",
		);

		assert.equal(htmlAfterFirst, htmlAfterSecond, "HTML file must be identical after second run");
		assert.equal(tsAfterFirst, tsAfterSecond, "TS file must be identical after second run");
		assert.ok(
			secondOutput.includes("Modified files: 0"),
			`Expected "Modified files: 0" in second run output:\n${secondOutput}`,
		);
	} finally {
		await rm(consumerDir, { recursive: true, force: true });
	}
});

// ──────────────────────────────────────────────────────────────────────────────
// Consumer builds
// ──────────────────────────────────────────────────────────────────────────────

for (const fixtureName of ["standalone-consumer", "module-consumer"]) {
	test(`${fixtureName}: migration + ng build succeeds`, {
		timeout: 600_000,
	}, async () => {
		const consumerDir = await setupConsumer(fixtureName, packedPackage.tarballPath);

		try {
			const ng = getNgExecutable(consumerDir);

			run(ng, [
				"update",
				"@infineon/infineon-design-system-angular",
				"--migrate-only",
				"--from", SOURCE_VERSION,
				"--to", MIGRATION_VERSION,
				"--allow-dirty",
				"--force",
			], consumerDir);

			const html = fs.readFileSync(
				path.join(consumerDir, "src", "app", "app.component.html"),
				"utf8",
			);
			assert.ok(html.includes("clearable"), `${fixtureName}: show-delete-icon → clearable`);
			assert.ok(!html.includes("show-delete-icon"), `${fixtureName}: show-delete-icon removed`);
			assert.ok(html.includes('caption="'), `${fixtureName}: caption-text → caption`);
			assert.ok(!html.includes("caption-text"), `${fixtureName}: caption-text removed`);

			const ts = fs.readFileSync(
				path.join(consumerDir, "src", "app", "app.component.ts"),
				"utf8",
			);
			assert.ok(ts.includes("clearable"), `${fixtureName}: inline template migrated`);
			assert.ok(!ts.includes("show-delete-icon"), `${fixtureName}: inline template old property removed`);

			run(ng, ["build"], consumerDir);
		} finally {
			await rm(consumerDir, { recursive: true, force: true });
		}
	});
}

