const assert = require("node:assert/strict");
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const { mkdtemp, readdir, rm } = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const PACKAGE_ROOT = path.resolve(__dirname, "..");

const runInPackageRoot = (command, args) =>
	execFileSync(command, args, {
		cwd: PACKAGE_ROOT,
		stdio: "pipe",
		encoding: "utf8",
	});

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
		assert.ok(
			fs.existsSync(path.join(distPath, "migrations", "migrations.json")),
			"Expected migrations/migrations.json",
		);
		assert.ok(
			fs.existsSync(path.join(distPath, "migrations", "shared", "v1.json")),
			"Expected migrations/shared/v1.json",
		);

		runInPackageRoot("pnpm", ["pack", "--pack-destination", packDestination]);

		const packedFiles = await readdir(packDestination);
		const tarball = packedFiles.find((file) => file.endsWith(".tgz"));
		assert.ok(tarball, `Expected a packed tarball in ${packDestination}`);

		const tarballPath = path.join(packDestination, tarball);
		const listing = execFileSync("tar", ["-tzf", tarballPath], {
			encoding: "utf8",
		});
		assert.ok(
			listing.includes("package/migrations/migrations.json"),
			"Expected tarball to contain migrations/migrations.json",
		);
		assert.ok(
			listing.includes("package/migrations/shared/v1.json"),
			"Expected tarball to contain migrations/shared/v1.json",
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
