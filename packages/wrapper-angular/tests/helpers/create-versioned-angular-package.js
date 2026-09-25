/**
 * Builds the Angular wrapper, copies dist to a temp directory, sets the
 * package version to 40.0.0, and packs a tarball — without modifying any
 * repository files.
 *
 * Returns { tarballPath, packDir } so callers can clean up.
 */

const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const { mkdtemp } = require("node:fs/promises");

const PACKAGE_ROOT = path.resolve(__dirname, "..", "..");
const MIGRATION_VERSION = "40.0.0";

/**
 * @returns {Promise<{ tarballPath: string; packDir: string }>}
 */
async function createVersionedAngularPackage() {
	// 1. Build and prepack the wrapper in the real package root.
	execFileSync("pnpm", ["run", "build"], {
		cwd: PACKAGE_ROOT,
		stdio: "pipe",
		encoding: "utf8",
	});
	execFileSync("node", ["./scripts/prepack.js"], {
		cwd: PACKAGE_ROOT,
		stdio: "pipe",
		encoding: "utf8",
	});

	// 2. Copy dist to a temp staging area so we can mutate package.json freely.
	const stagingRoot = await mkdtemp(path.join(os.tmpdir(), "ifx-versioned-dist-"));
	fs.cpSync(path.join(PACKAGE_ROOT, "dist"), stagingRoot, { recursive: true });

	// 3. Set version to 40.0.0 in the staging copy.
	const pkgPath = path.join(stagingRoot, "package.json");
	const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
	pkg.version = MIGRATION_VERSION;
	fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

	// 4. Pack from the staging copy.
	const packDir = await mkdtemp(path.join(os.tmpdir(), "ifx-versioned-pack-"));
	execFileSync("npm", ["pack", "--pack-destination", packDir], {
		cwd: stagingRoot,
		stdio: "pipe",
		encoding: "utf8",
	});

	// Clean up the staging copy; the caller owns packDir.
	fs.rmSync(stagingRoot, { recursive: true, force: true });

	const tarball = fs.readdirSync(packDir).find((f) => f.endsWith(".tgz"));
	if (!tarball) {
		throw new Error(`No tarball produced in ${packDir}`);
	}

	return {
		tarballPath: path.join(packDir, tarball),
		packDir,
	};
}

module.exports = { createVersionedAngularPackage, MIGRATION_VERSION };
