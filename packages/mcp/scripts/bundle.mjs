import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as esbuild from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

// Read package.json to get version
const packageJson = JSON.parse(
	readFileSync(path.join(rootDir, "package.json"), "utf-8"),
);

await esbuild.build({
	entryPoints: [path.join(rootDir, "src/index.ts")],
	bundle: true,
	platform: "node",
	target: "node20",
	format: "esm",
	outfile: path.join(rootDir, "dist/index.js"),
	banner: {
		js: "#!/usr/bin/env node",
	},
	external: ["@modelcontextprotocol/sdk", "zod"],
	define: {
		__PACKAGE_VERSION__: JSON.stringify(packageJson.version),
	},
	sourcemap: true,
	minify: false,
	logLevel: "info",
});

console.log("✓ Bundle created successfully");
