import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const IGNORED_DIRECTORIES = new Set([
	".git",
	".next",
	".turbo",
	"build",
	"coverage",
	"dist",
	"node_modules",
	"storybook-static",
	"www",
]);

export const readTextFile = async (filePath: string): Promise<string> =>
	readFile(filePath, "utf8");

export const writeTextFile = async (filePath: string, content: string): Promise<void> => {
	await writeFile(filePath, content, "utf8");
};

export interface ResolvedPackageJson {
	directory: string;
	packageJson: Record<string, unknown>;
}

export const readNearestPackageJson = async (cwd: string): Promise<ResolvedPackageJson | null> => {
	let currentDirectory = path.resolve(cwd);

	while (true) {
		const packageJsonPath = path.join(currentDirectory, "package.json");

		try {
			const content = await readTextFile(packageJsonPath);
			return {
				directory: currentDirectory,
				packageJson: JSON.parse(content) as Record<string, unknown>,
			};
		} catch {
			const parentDirectory = path.dirname(currentDirectory);
			if (parentDirectory === currentDirectory) {
				return null;
			}

			currentDirectory = parentDirectory;
		}
	}
};

export const collectFilesByExtension = async (
	rootDirectory: string,
	extensions: string[],
): Promise<string[]> => {
	const normalizedExtensions = new Set(extensions.map((extension) => extension.toLowerCase()));
	const filePaths: string[] = [];

	const visitDirectory = async (directoryPath: string): Promise<void> => {
		const entries = await readdir(directoryPath, { withFileTypes: true });

		for (const entry of entries) {
			const absolutePath = path.join(directoryPath, entry.name);

			if (entry.isDirectory()) {
				if (IGNORED_DIRECTORIES.has(entry.name)) {
					continue;
				}

				await visitDirectory(absolutePath);
				continue;
			}

			const extension = path.extname(entry.name).toLowerCase();
			if (normalizedExtensions.has(extension)) {
				filePaths.push(absolutePath);
			}
		}
	};

	await visitDirectory(rootDirectory);
	return filePaths.sort((left, right) => left.localeCompare(right));
};