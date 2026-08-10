/**
 * Linux-only integration tests for the packed Angular v40 migration.
 *
 * These tests require a working ng CLI, npm, and Angular build toolchain.
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

const SOURCE_VERSION = "39.39.0";

/**
 * Runs a command and returns stdout. Throws on non-zero exit.
 */
function run(command, args, cwd) {
	return execFileSync(command, args, {
		cwd,
		stdio: "pipe",
		encoding: "utf8",
	});
}

/**
 * Sets up a minimal Angular project in a temp directory and installs the
 * packed wrapper. Returns the consumer directory path.
 */
async function setupConsumer(fixtureName, tarballPath) {
	const consumerDir = await mkdtemp(path.join(os.tmpdir(), `ifx-ng-consumer-${fixtureName}-`));

	await cp(path.join(FIXTURES_ROOT, fixtureName), consumerDir, { recursive: true });

	// Patch package.json to reference the packed tarball
	const pkgPath = path.join(consumerDir, "package.json");
	const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
	pkg.dependencies["@infineon/infineon-design-system-angular"] = tarballPath;
	pkg.version = SOURCE_VERSION;
	fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

	run("npm", ["install", "--legacy-peer-deps"], consumerDir);

	return consumerDir;
}

// ──────────────────────────────────────────────────────────────────────────────
// Packed ng update
// ──────────────────────────────────────────────────────────────────────────────

test("packed ng update discovers migration, logs both operations, and exits 0", {
	timeout: 600_000,
}, async () => {
	let packDir;
	let consumerDir;

	try {
		const pack = await createVersionedAngularPackage();
		packDir = pack.packDir;

		consumerDir = await setupConsumer("standalone-consumer", pack.tarballPath);

		// ng update migrates from SOURCE_VERSION to MIGRATION_VERSION
		let stdout = "";
		try {
			stdout = run(
				"ng",
				[
					"update",
					"@infineon/infineon-design-system-angular",
					"--migrate-only",
					"--from", SOURCE_VERSION,
					"--to", MIGRATION_VERSION,
					"--allow-dirty",
					"--force",
				],
				consumerDir,
			);
		} catch (err) {
			stdout = err.stdout ?? "";
			assert.fail(`ng update exited with error:\n${err.stderr ?? ""}\n${stdout}`);
		}

		assert.ok(
			stdout.includes("ifx-text-field-show-delete-icon-to-clearable") ||
			stdout.includes("show-delete-icon"),
			`Expected first operation ID in output:\n${stdout}`,
		);
		assert.ok(
			stdout.includes("ifx-radio-button-group-caption-text-to-caption") ||
			stdout.includes("caption-text"),
			`Expected second operation ID in output:\n${stdout}`,
		);

		const htmlPath = path.join(consumerDir, "src", "app", "app.component.html");
		const html = fs.readFileSync(htmlPath, "utf8");
		assert.ok(html.includes("clearable"), "External template: show-delete-icon → clearable");
		assert.ok(!html.includes("show-delete-icon"), "External template: show-delete-icon removed");
		assert.ok(html.includes("caption="), "External template: caption-text → caption");
		assert.ok(!html.includes("caption-text"), "External template: caption-text removed");
	} finally {
		if (packDir) await rm(packDir, { recursive: true, force: true });
		if (consumerDir) await rm(consumerDir, { recursive: true, force: true });
	}
});

// ──────────────────────────────────────────────────────────────────────────────
// Idempotency
// ──────────────────────────────────────────────────────────────────────────────

test("running migration twice leaves files byte-identical and reports 0 modified files", {
	timeout: 600_000,
}, async () => {
	let packDir;
	let consumerDir;

	try {
		const pack = await createVersionedAngularPackage();
		packDir = pack.packDir;

		consumerDir = await setupConsumer("standalone-consumer", pack.tarballPath);

		const ngUpdateArgs = [
			"update",
			"@infineon/infineon-design-system-angular",
			"--migrate-only",
			"--from", SOURCE_VERSION,
			"--to", MIGRATION_VERSION,
			"--allow-dirty",
			"--force",
		];

		// First run
		run("ng", ngUpdateArgs, consumerDir);

		const htmlAfterFirst = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.html"),
			"utf8",
		);

		// Second run
		const secondOutput = run("ng", ngUpdateArgs, consumerDir);

		const htmlAfterSecond = fs.readFileSync(
			path.join(consumerDir, "src", "app", "app.component.html"),
			"utf8",
		);

		assert.equal(htmlAfterFirst, htmlAfterSecond, "HTML file must be identical after second run");
		assert.ok(
			secondOutput.includes("Modified files: 0"),
			`Expected "Modified files: 0" in second run output:\n${secondOutput}`,
		);
	} finally {
		if (packDir) await rm(packDir, { recursive: true, force: true });
		if (consumerDir) await rm(consumerDir, { recursive: true, force: true });
	}
});

// ──────────────────────────────────────────────────────────────────────────────
// Consumer builds
// ──────────────────────────────────────────────────────────────────────────────

for (const fixtureName of ["standalone-consumer", "module-consumer"]) {
	test(`${fixtureName}: migration + ng build succeeds`, {
		timeout: 600_000,
	}, async () => {
		let packDir;
		let consumerDir;

		try {
			const pack = await createVersionedAngularPackage();
			packDir = pack.packDir;

			consumerDir = await setupConsumer(fixtureName, pack.tarballPath);

			// Migrate
			run(
				"ng",
				[
					"update",
					"@infineon/infineon-design-system-angular",
					"--migrate-only",
					"--from", SOURCE_VERSION,
					"--to", MIGRATION_VERSION,
					"--allow-dirty",
					"--force",
				],
				consumerDir,
			);

			// Verify properties were changed
			const htmlPath = path.join(consumerDir, "src", "app", "app.component.html");
			const html = fs.readFileSync(htmlPath, "utf8");
			assert.ok(html.includes("clearable"), `${fixtureName}: external template migrated`);
			assert.ok(!html.includes("show-delete-icon"), `${fixtureName}: old prop removed`);

			// Build
			run("ng", ["build"], consumerDir);
		} finally {
			if (packDir) await rm(packDir, { recursive: true, force: true });
			if (consumerDir) await rm(consumerDir, { recursive: true, force: true });
		}
	});
}
