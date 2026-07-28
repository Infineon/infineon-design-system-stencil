import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { resolvePnpmInstalledVersion } from "../lib/project/pnpm-lockfile.js";

describe("resolvePnpmInstalledVersion", () => {
	let tempRoot: string;

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(os.tmpdir(), "pnpm-lockfile-"));
	});

	afterEach(async () => {
		await rm(tempRoot, { recursive: true, force: true });
	});

	test("returns undefined when no lockfile exists", async () => {
		const version = await resolvePnpmInstalledVersion(tempRoot, "@scope/pkg");
		assert.equal(version, undefined);
	});

	test("resolves version from root importer dependencies specifier", async () => {
		const lockfile = {
			lockfileVersion: "9.0",
			importers: {
				".": {
					dependencies: {
						"@scope/pkg": { specifier: "^1.2.3", version: "1.2.3" },
					},
				},
			},
		};

		await writeFile(path.join(tempRoot, "pnpm-lock.yaml"), JSON.stringify(lockfile, null, 2));

		const version = await resolvePnpmInstalledVersion(tempRoot, "@scope/pkg");
		assert.equal(version, "1.2.3");
	});

	test("prefers resolved version over declared specifier range", async () => {
		const lockfile = {
			lockfileVersion: "9.0",
			importers: {
				".": {
					dependencies: {
						"@scope/pkg": { specifier: "^1.0.0", version: "1.2.3" },
					},
				},
			},
		};

		await writeFile(path.join(tempRoot, "pnpm-lock.yaml"), JSON.stringify(lockfile, null, 2));

		const version = await resolvePnpmInstalledVersion(tempRoot, "@scope/pkg");
		assert.equal(version, "1.2.3");
	});

	test("resolves version from root importer devDependencies", async () => {
		const lockfile = {
			lockfileVersion: "9.0",
			importers: {
				".": {
					devDependencies: {
						"@scope/pkg": { specifier: "~4.5.6", version: "4.5.6" },
					},
				},
			},
		};

		await writeFile(path.join(tempRoot, "pnpm-lock.yaml"), JSON.stringify(lockfile, null, 2));

		const version = await resolvePnpmInstalledVersion(tempRoot, "@scope/pkg");
		assert.equal(version, "4.5.6");
	});

	test("resolves version from optionalDependencies", async () => {
		const lockfile = {
			lockfileVersion: "9.0",
			importers: {
				".": {
					optionalDependencies: {
						"@scope/pkg": { specifier: "7.8.9", version: "7.8.9" },
					},
				},
			},
		};

		await writeFile(path.join(tempRoot, "pnpm-lock.yaml"), JSON.stringify(lockfile, null, 2));

		const version = await resolvePnpmInstalledVersion(tempRoot, "@scope/pkg");
		assert.equal(version, "7.8.9");
	});

	test("falls back to scanning packages map", async () => {
		const lockfile = {
			lockfileVersion: "9.0",
			importers: { ".": {} },
			packages: {
				"@scope/pkg@2.0.0": { resolution: { integrity: "sha512-" } },
			},
		};

		await writeFile(path.join(tempRoot, "pnpm-lock.yaml"), JSON.stringify(lockfile, null, 2));

		const version = await resolvePnpmInstalledVersion(tempRoot, "@scope/pkg");
		assert.equal(version, "2.0.0");
	});

	test("prefers importer specifier over packages map", async () => {
		const lockfile = {
			lockfileVersion: "9.0",
			importers: {
				".": {
					dependencies: {
						"@scope/pkg": { specifier: "^1.0.0", version: "1.0.0" },
					},
				},
			},
			packages: {
				"@scope/pkg@2.0.0": { resolution: { integrity: "sha512-" } },
			},
		};

		await writeFile(path.join(tempRoot, "pnpm-lock.yaml"), JSON.stringify(lockfile, null, 2));

		const version = await resolvePnpmInstalledVersion(tempRoot, "@scope/pkg");
		assert.equal(version, "1.0.0");
	});

	test("walks up parent directories to find lockfile", async () => {
		const lockfile = {
			lockfileVersion: "9.0",
			importers: {
				".": {
					dependencies: {
						"@scope/pkg": { specifier: "3.0.0", version: "3.0.0" },
					},
				},
			},
		};

		await writeFile(path.join(tempRoot, "pnpm-lock.yaml"), JSON.stringify(lockfile, null, 2));

		const nested = path.join(tempRoot, "packages", "app");
		await mkdir(nested, { recursive: true });

		const version = await resolvePnpmInstalledVersion(nested, "@scope/pkg");
		assert.equal(version, "3.0.0");
	});
});
