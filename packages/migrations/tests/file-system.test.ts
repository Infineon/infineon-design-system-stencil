import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, test } from "node:test";

import { collectFilesByExtension } from "../lib/project/file-system.js";

describe("collectFilesByExtension", () => {
	let tempRoot: string;

	beforeEach(async () => {
		tempRoot = await mkdtemp(path.join(tmpdir(), "dds-file-system-"));
	});

	afterEach(async () => {
		await rm(tempRoot, { recursive: true, force: true });
	});

	test("collects matching files by extension", async () => {
		await writeFile(path.join(tempRoot, "a.html"), "a");
		await writeFile(path.join(tempRoot, "b.txt"), "b");

		const files = await collectFilesByExtension(tempRoot, [".html"]);
		assert.deepEqual(files, [path.join(tempRoot, "a.html")]);
	});

	test("recursively collects files", async () => {
		const nested = path.join(tempRoot, "nested");
		await mkdir(nested);
		await writeFile(path.join(nested, "c.html"), "c");

		const files = await collectFilesByExtension(tempRoot, [".html"]);
		assert.deepEqual(files, [path.join(nested, "c.html")]);
	});

	test("skips built-in ignored directories", async () => {
		const nodeModules = path.join(tempRoot, "node_modules");
		await mkdir(nodeModules);
		await writeFile(path.join(nodeModules, "ignored.html"), "ignored");
		await writeFile(path.join(tempRoot, "kept.html"), "kept");

		const files = await collectFilesByExtension(tempRoot, [".html"]);
		assert.deepEqual(files, [path.join(tempRoot, "kept.html")]);
	});

	test("skips .angular and .nuxt directories", async () => {
		for (const name of [".angular", ".nuxt"]) {
			const dir = path.join(tempRoot, name);
			await mkdir(dir);
			await writeFile(path.join(dir, "ignored.html"), "ignored");
		}

		await writeFile(path.join(tempRoot, "kept.html"), "kept");
		const files = await collectFilesByExtension(tempRoot, [".html"]);
		assert.deepEqual(files, [path.join(tempRoot, "kept.html")]);
	});

	test("respects root .gitignore patterns", async () => {
		await writeFile(path.join(tempRoot, ".gitignore"), "ignored.html\nbuild/\n");
		await writeFile(path.join(tempRoot, "kept.html"), "kept");
		await writeFile(path.join(tempRoot, "ignored.html"), "ignored");
		const buildDir = path.join(tempRoot, "build");
		await mkdir(buildDir);
		await writeFile(path.join(buildDir, "nested.html"), "nested");

		const files = await collectFilesByExtension(tempRoot, [".html"]);
		assert.deepEqual(files, [path.join(tempRoot, "kept.html")]);
	});

	test("returns deterministic sorted order", async () => {
		await writeFile(path.join(tempRoot, "z.html"), "z");
		await writeFile(path.join(tempRoot, "a.html"), "a");
		await writeFile(path.join(tempRoot, "m.html"), "m");

		const files = await collectFilesByExtension(tempRoot, [".html"]);
		assert.deepEqual(files, [
			path.join(tempRoot, "a.html"),
			path.join(tempRoot, "m.html"),
			path.join(tempRoot, "z.html"),
		]);
	});

	test("skips unreadable directories without failing", async () => {
		const restricted = path.join(tempRoot, "restricted");
		await mkdir(restricted, { mode: 0o000 });
		await writeFile(path.join(tempRoot, "kept.html"), "kept");

		try {
			const files = await collectFilesByExtension(tempRoot, [".html"]);
			assert.deepEqual(files, [path.join(tempRoot, "kept.html")]);
		} finally {
			await rm(restricted, { recursive: true, force: true });
		}
	});
});
