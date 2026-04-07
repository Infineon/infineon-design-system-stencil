import { access, copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

async function main() {
	const pkgRoot = process.cwd();
	const assetsDir = join(pkgRoot, "assets");
	const docsDestPath = join(assetsDir, "docs.json");
	const docsTypeDestPath = join(assetsDir, "docs.d.ts");

	// Source files from components package
	const componentsPkgRoot = join(pkgRoot, "..", "components");
	const docsSrcPath = join(componentsPkgRoot, "dist", "docs.json");
	const docsTypeSrcPath = join(componentsPkgRoot, "dist", "docs.d.ts");

	try {
		// Check if source exists
		await access(docsSrcPath);
	} catch {
		console.error(`✗ Missing ${docsSrcPath}`);
		console.error("The Stencil build should have generated this file.");
		console.error(
			"Run: pnpm --filter @infineon/infineon-design-system-stencil run build",
		);
		process.exit(1);
	}

	// Create assets directory if it doesn't exist
	await mkdir(assetsDir, { recursive: true });

	// Copy docs.json and docs.d.ts
	await copyFile(docsSrcPath, docsDestPath);
	console.log(`✓ Copied docs.json to ${docsDestPath}`);

	try {
		await access(docsTypeSrcPath);
		await copyFile(docsTypeSrcPath, docsTypeDestPath);
		console.log(`✓ Copied docs.d.ts to ${docsTypeDestPath}`);
	} catch {
		console.warn(`⚠ docs.d.ts not found at ${docsTypeSrcPath}, skipping`);
	}
}

main().catch((err) => {
	console.error(err instanceof Error ? err.message : String(err));
	process.exit(1);
});
