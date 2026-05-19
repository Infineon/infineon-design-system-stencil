import { readdir, readFile } from "node:fs/promises";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

interface FoundationStory {
	title: string;
	category: string;
	content: string;
}

export async function loadFoundationStories(): Promise<
	Map<string, FoundationStory>
> {
	const stories = new Map<string, FoundationStory>();

	// When bundled, stories are at dist/assets/foundations/
	// From the bundle location (dist/index.js), that's ./assets/foundations
	const storiesBaseDir = join(__dirname, "assets/foundations");

	try {
		// Load foundations
		const foundationsDir = join(storiesBaseDir, "foundations");
		const foundationFiles = await readdir(foundationsDir);

		for (const file of foundationFiles) {
			if (file.endsWith(".mdx")) {
				const slug = file.replace(".mdx", "").toLowerCase();
				const content = await readFile(join(foundationsDir, file), "utf-8");
				const title = file
					.replace(".mdx", "")
					.replace(/([A-Z])/g, " $1")
					.trim();

				stories.set(`foundations/${slug}`, {
					title,
					category: "Foundations",
					content: stripMDXImports(content),
				});
			}
		}

		// Load setup and installation guides, including nested sections such as
		// framework-specific integration pages and FAQ entries.
		const setupDir = join(storiesBaseDir, "setup-and-installation");
		await loadNestedStories(stories, {
			rootDir: setupDir,
			baseDir: setupDir,
			slugPrefix: "setup",
			baseCategory: "Setup & Installation",
		});

		// Load root-level stories
		const rootFiles = await readdir(storiesBaseDir);
		for (const file of rootFiles) {
			if (file.endsWith(".mdx")) {
				const slug = file.replace(".mdx", "").toLowerCase();
				const content = await readFile(join(storiesBaseDir, file), "utf-8");
				const title = file.replace(".mdx", "");

				stories.set(slug, {
					title,
					category: "General",
					content: stripMDXImports(content),
				});
			}
		}
	} catch (_error) {
		// Directory doesn't exist or can't be read - return empty map
	}

	return stories;
}

async function loadNestedStories(
	stories: Map<string, FoundationStory>,
	options: {
		rootDir: string;
		baseDir: string;
		slugPrefix: string;
		baseCategory: string;
	},
): Promise<void> {
	const entries = await readdir(options.baseDir, { withFileTypes: true });

	for (const entry of entries) {
		const entryPath = join(options.baseDir, entry.name);

		if (entry.isDirectory()) {
			await loadNestedStories(stories, {
				...options,
				baseDir: entryPath,
			});
			continue;
		}

		if (!entry.name.endsWith(".mdx")) {
			continue;
		}

		const relativeFromRoot = relative(options.rootDir, entryPath)
			.replace(/\.mdx$/i, "")
			.replaceAll("\\", "/");
		const nestedDir = dirname(relativeFromRoot);
		const content = await readFile(entryPath, "utf-8");
		const title = formatStoryTitle(basename(entry.name, ".mdx"));

		stories.set(`${options.slugPrefix}/${relativeFromRoot.toLowerCase()}`, {
			title,
			category:
				nestedDir === "."
					? options.baseCategory
					: `${options.baseCategory} / ${formatCategoryTitle(nestedDir)}`,
			content: stripMDXImports(content),
		});
	}
}

function formatStoryTitle(fileName: string): string {
	return fileName.replace(/([A-Z])/g, " $1").trim();
}

function formatCategoryTitle(pathFragment: string): string {
	return pathFragment
		.split(/[\\/]/)
		.map((part) =>
			part
				.split("-")
				.map((word) =>
					word ? word.charAt(0).toUpperCase() + word.slice(1) : word,
				)
				.join(" "),
		)
		.join(" / ");
}

function stripMDXImports(content: string): string {
	// Remove MDX import statements and Meta tags for cleaner output
	return content
		.split("\n")
		.filter((line) => !line.startsWith("import "))
		.filter((line) => !line.includes("<Meta "))
		.join("\n")
		.trim();
}
