import assert from "node:assert/strict";
import { cp, lstat, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { packageNames } from "./package-names.mjs";

export const repositoryRoot = fileURLToPath(new URL("../../", import.meta.url));
const readJson = async (file) => JSON.parse(await readFile(file, "utf8"));
const writeJson = (file, value) =>
	writeFile(file, `${JSON.stringify(value, null, "\t")}\n`);

function targets(value) {
	if (typeof value === "string") return value.includes("*") ? [] : [value];
	return value && typeof value === "object"
		? Object.values(value).flatMap(targets)
		: [];
}

export async function checkEntryPoints(directory, manifest) {
	const entries = [
		"main",
		"module",
		"types",
		"typings",
		"unpkg",
		"collection",
		"collection:main",
	];
	for (const target of [
		...targets(manifest.exports),
		...entries.flatMap((key) => (manifest[key] ? [manifest[key]] : [])),
	]) {
		const file = path.resolve(directory, target);
		assert.ok(
			file.startsWith(`${path.resolve(directory)}${path.sep}`),
			`Out-of-package entry point: ${target}`,
		);
		await readFile(file);
	}
}

async function regularArtifact(file) {
	const stat = await lstat(file);
	assert.ok(
		stat.isFile() || stat.isDirectory(),
		`Unsupported build artifact: ${file}`,
	);
	return true;
}

export async function stageLegacy(entry, root = repositoryRoot) {
	assert.ok(packageNames.includes(entry), "Unknown compatibility package");
	const source = path.join(root, entry.source);
	const alias = path.join(root, "packages/aliases", entry.legacy.split("/")[1]);
	const canonical = await readJson(path.join(source, "package.json"));
	const manifest = await readJson(path.join(alias, "package.json"));
	assert.equal(canonical.name, entry.canonical);
	assert.equal(manifest.name, entry.legacy);
	assert.equal(manifest.version, canonical.version, "Package version mismatch");
	assert.ok(manifest.deprecated?.trim(), "Missing migration notice");
	assert.equal(
		manifest.publishConfig?.directory,
		undefined,
		"Clones publish from their roots",
	);
	if (entry !== packageNames[0])
		assert.ok(
			["workspace:*", manifest.version].includes(
				manifest.dependencies?.[packageNames[0].canonical],
			),
			"Expected matching canonical core dependency",
		);

	const artifacts = path.join(source, "dist");
	const destination = path.join(alias, "dist");
	await readdir(artifacts);
	assert.ok(
		(await lstat(alias)).isDirectory(),
		`Invalid alias directory: ${alias}`,
	);
	await rm(destination, { recursive: true, force: true });
	await cp(artifacts, destination, {
		recursive: true,
		filter: async (file) =>
			(await regularArtifact(file)) &&
			!(
				entry.canonical.endsWith("-angular") &&
				file === path.join(artifacts, "package.json")
			),
	});
	if (entry === packageNames[0]) {
		const file = path.join(destination, "hydrate/package.json");
		const hydrate = await readJson(file);
		assert.equal(hydrate.name, `${entry.canonical}/hydrate`);
		await writeJson(file, { ...hydrate, name: `${entry.legacy}/hydrate` });
	}
	for (const name of ["README.md", "readme.md", "LICENSE"]) {
		try {
			await cp(path.join(source, name), path.join(alias, name), {
				filter: regularArtifact,
			});
		} catch (error) {
			if (error.code !== "ENOENT") throw error;
			if (name === "LICENSE")
				await cp(path.join(root, name), path.join(alias, name), {
					filter: regularArtifact,
				});
		}
	}
	await checkEntryPoints(alias, manifest);
	console.log(`Staged ${manifest.name}@${manifest.version}`);
	return alias;
}

if (
	process.argv[1] &&
	fileURLToPath(import.meta.url) === path.resolve(process.argv[1])
) {
	const selection = process.argv[2];
	const entries = selection
		? packageNames.filter(({ legacy }) => legacy.endsWith(`-${selection}`))
		: packageNames;
	if (!entries.length) throw new Error(`Unknown legacy package: ${selection}`);
	for (const entry of entries) await stageLegacy(entry);
}
