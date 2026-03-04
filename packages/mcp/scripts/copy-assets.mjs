import fs from 'node:fs/promises';
import path from 'node:path';

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function copyFileEnsuringDir(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(src, dest);
}

async function copyDirRecursive(srcDir, destDir) {
  if (!(await exists(srcDir))) return;

  await fs.mkdir(destDir, { recursive: true });
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await copyDirRecursive(src, dest);
    } else if (entry.isFile()) {
      await copyFileEnsuringDir(src, dest);
    }
  }
}

async function main() {
  // Run from packages/mcp
  const pkgRoot = process.cwd();
  const distAssetsDir = path.join(pkgRoot, 'dist', 'assets');

  await fs.mkdir(distAssetsDir, { recursive: true });

  // Copy docs.json from local assets (Stencil outputs it here directly)
  const docsSrc = path.join(pkgRoot, 'assets', 'docs.json');
  const docsDest = path.join(distAssetsDir, 'docs.json');

  if (!(await exists(docsSrc))) {
    throw new Error(
      `Missing ${docsSrc}. Build the Stencil package first (e.g. \`pnpm --filter @infineon/infineon-design-system-stencil run build\`).`
    );
  }

  await copyFileEnsuringDir(docsSrc, docsDest);

  // Copy rendered examples from local assets
  const examplesSrc = path.join(pkgRoot, 'assets', 'examples');
  const examplesDest = path.join(distAssetsDir, 'examples');

  if (await exists(examplesSrc)) {
    await copyDirRecursive(examplesSrc, examplesDest);
    console.error(`✓ Examples copied to ${examplesDest}`);
  } else {
    console.warn(`⚠ No examples found at ${examplesSrc}. Run render-stories first.`);
  }

  console.error(`✓ Assets copied to ${distAssetsDir}`);
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
