const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } = require("node:fs");
const { tmpdir } = require("node:os");
const { join } = require("node:path");
const { test } = require("node:test");

test("prepares exact CDN URLs without modifying workspace dependencies", () => {
	const directory = mkdtempSync(join(tmpdir(), "dds-cdn-version-"));
	try {
		const version = "41.12.1-canary.123.0";
		const packageJson = readFileSync(join(__dirname, "../package.json"), "utf8");
		writeFileSync(join(directory, "package.json"), packageJson);
		mkdirSync(join(directory, "scripts"));
		const script = join(directory, "scripts/update-cdn-version.js");
		writeFileSync(
			script,
			readFileSync(join(__dirname, "update-cdn-version.js"), "utf8"),
		);
		writeFileSync(
			join(directory, "index.html"),
			readFileSync(join(__dirname, "../index.html"), "utf8"),
		);
		const result = spawnSync(
			process.execPath,
			[script],
			{
				cwd: directory,
				env: { ...process.env, PACKAGE_VERSION: version },
				encoding: "utf8",
			},
		);
		assert.equal(result.status, 0, result.stderr);
		const html = readFileSync(join(directory, "index.html"), "utf8");
		const base = `https://cdn.jsdelivr.net/npm/@infineon/design-system@${version}/dist/infineon-design-system-stencil`;
		assert.ok(html.includes(`${base}/infineon-design-system-stencil.esm.js`));
		assert.ok(html.includes(`${base}/infineon-design-system-stencil.css`));
		assert.ok(!html.includes("<!-- local-dev-only -->"));
		assert.ok(!html.includes("<!-- production-only"));
		assert.equal(
			readFileSync(join(directory, "package.json"), "utf8"),
			packageJson,
		);
	} finally {
		rmSync(directory, { recursive: true, force: true });
	}
});
