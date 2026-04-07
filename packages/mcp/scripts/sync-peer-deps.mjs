#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, "..", "package.json");

const pkg = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
const version = pkg.version;

// Update all peer dependencies: convert workspace:* to exact version
const peerDeps = pkg.peerDependencies || {};
for (const dep of Object.keys(peerDeps)) {
	if (dep.startsWith("@infineon/infineon-design-system-")) {
		peerDeps[dep] = version;
	}
}

// Write back to package.json
writeFileSync(packageJsonPath, `${JSON.stringify(pkg, null, 2)}\n`);

console.log(`✓ Synced peer dependencies to version ${version}`);
