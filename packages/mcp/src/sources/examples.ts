import { readdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { ComponentInfo } from "@infineon/dds-tooling";

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function loadBundledExamples(): Promise<
	Map<string, ComponentInfo>
> {
	const examples = new Map<string, ComponentInfo>();

	// When bundled with esbuild, everything is in dist/index.js
	// Assets are at dist/assets/examples/
	// So from the bundle location, assets are at ./assets/examples
	const examplesDir = join(__dirname, "assets/examples");

	try {
		const files = await readdir(examplesDir);

		for (const file of files) {
			if (file.endsWith(".json")) {
				const tag = file.replace(".json", "");
				const filePath = join(examplesDir, file);
				const json = await readFile(filePath, "utf-8");
				const componentInfo = JSON.parse(json) as ComponentInfo;
				examples.set(tag, componentInfo);
			}
		}
	} catch (_error) {
		// Directory doesn't exist or can't be read - return empty map
	}

	return examples;
}
