import { mkdir, readdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { extractComponentInfo, setupDOM } from "@infineon/dds-tooling";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Setup DOM environment for story parsing
setupDOM();

/**
 * Auto-discovers story files from the components directory
 * Returns a map of component tags to their story file paths
 */
async function discoverStoryFiles() {
	const storyFiles = new Map();
	const componentsDir = join(__dirname, "../../components/src/components");

	try {
		const entries = await readdir(componentsDir, { withFileTypes: true });

		for (const entry of entries) {
			if (entry.isDirectory()) {
				const componentDir = join(componentsDir, entry.name);

				// Look for .stories.ts files in the component directory
				try {
					const files = await readdir(componentDir);
					const storyFile = files.find(
						(f) => f.endsWith(".stories.ts") && !f.includes(".mdx"),
					);

					if (storyFile) {
						// Derive component tag from directory name
						const tag = `ifx-${entry.name}`;
						const relativePath = `../../components/src/components/${entry.name}/${storyFile}`;
						storyFiles.set(tag, relativePath);
					}
				} catch {
					// Directory not accessible, skip
				}
			}
		}

		// Handle special cases with nested directories or non-standard naming
		storyFiles.set(
			"ifx-select",
			"../../components/src/components/select/single-select/select.stories.ts",
		);
		storyFiles.set(
			"ifx-multiselect",
			"../../components/src/components/select/multi-select/multiselect.stories.ts",
		);
		storyFiles.set(
			"ifx-navbar",
			"../../components/src/components/navigation/navbar/navbar.stories.ts",
		);
		storyFiles.set(
			"ifx-sidebar",
			"../../components/src/components/navigation/sidebar/sidebar.stories.ts",
		);

		// Tables: use actual component tags instead of directory names
		storyFiles.delete("ifx-table-basic-version"); // Remove auto-discovered
		storyFiles.delete("ifx-table-advanced-version"); // Remove auto-discovered
		storyFiles.set(
			"ifx-basic-table",
			"../../components/src/components/table-basic-version/table.stories.ts",
		);
		storyFiles.set(
			"ifx-table",
			"../../components/src/components/table-advanced-version/table.stories.ts",
		);
	} catch (error) {
		console.error("Error discovering story files:", error.message);
	}

	return storyFiles;
}

async function main() {
	const assetsDir = join(__dirname, "..", "assets", "examples");

	// Create examples directory
	await mkdir(assetsDir, { recursive: true });

	// Auto-discover story files
	console.log("Discovering story files...");
	const storyFiles = await discoverStoryFiles();

	console.log(`Extracting ${storyFiles.size} component stories...`);

	let successCount = 0;
	let failCount = 0;

	for (const [tag, filePath] of storyFiles.entries()) {
		try {
			console.log(`Extracting ${tag}...`);

			// Convert relative path to absolute path from the script directory
			const absolutePath = resolve(__dirname, filePath);

			// Extract ComponentInfo directly (no HTML rendering!)
			// Pass undefined to use smart fallback: tries Default, Single, Primary, Basic, Medium, DefaultState
			const componentInfos = await extractComponentInfo(absolutePath);

			if (componentInfos.length > 0) {
				// Save as JSON instead of HTML
				const outputPath = join(assetsDir, `${tag}.json`);
				await writeFile(
					outputPath,
					JSON.stringify(componentInfos[0], null, 2),
					"utf-8",
				);
				console.log(`  ✓ Saved ComponentInfo to ${outputPath}`);
				successCount++;
			} else {
				console.warn(`  ⚠ No component info extracted for ${tag}`);
				failCount++;
			}
		} catch (error) {
			console.error(`  ✗ Failed to extract ${tag}:`, error.message);
			failCount++;
		}
	}

	console.log(`\n${"=".repeat(50)}`);
	console.log(`Component extraction complete!`);
	console.log(`  ✓ Success: ${successCount}`);
	if (failCount > 0) {
		console.log(`  ✗ Failed: ${failCount}`);
	}
}

main().catch(console.error);
