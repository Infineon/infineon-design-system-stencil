import { readdir, readFile, writeFile } from "node:fs/promises";
import type { Dirent } from "node:fs";
import ignore from "ignore";
import path from "node:path";

const IGNORED_DIRECTORIES = new Set([
	".angular",
	".git",
	".next",
	".nuxt",
	".turbo",
	"build",
	"coverage",
	"dist",
	"node_modules",
	"storybook-static",
	"www",
]);

const GITIGNORE_NAME = ".gitignore";

const loadGitignore = async (rootDirectory: string): Promise<ignore.Ignore | null> => {
	const gitignorePath = path.join(rootDirectory, GITIGNORE_NAME);

	try {
		const content = await readTextFile(gitignorePath);
		return ignore().add(content);
	} catch {
		return null;
	}
};

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
	const resolvedRoot = path.resolve(rootDirectory);
	const gitignore = await loadGitignore(resolvedRoot);

	const isIgnored = (absolutePath: string): boolean => {
		if (!gitignore) {
			return false;
		}

		const relativePath = path.relative(resolvedRoot, absolutePath);
		if (relativePath === "") {
			return false;
		}

		return gitignore.ignores(relativePath);
	};

	const visitDirectory = async (directoryPath: string): Promise<void> => {
		if (isIgnored(directoryPath)) {
			return;
		}

		let entries: Dirent[];
		try {
			entries = await readdir(directoryPath, { withFileTypes: true });
		} catch {
			// Skip directories that cannot be read (e.g., permission denied).
			return;
		}

		for (const entry of entries) {
			const absolutePath = path.join(directoryPath, entry.name);

			if (entry.isDirectory()) {
				if (IGNORED_DIRECTORIES.has(entry.name)) {
					continue;
				}

				await visitDirectory(absolutePath);
				continue;
			}

			if (isIgnored(absolutePath)) {
				continue;
			}

			const extension = path.extname(entry.name).toLowerCase();
			if (normalizedExtensions.has(extension)) {
				filePaths.push(absolutePath);
			}
		}
	};

	await visitDirectory(resolvedRoot);
	return filePaths.sort((left, right) => left.localeCompare(right));
};