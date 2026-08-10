const path = require("path");

function shouldExclude(filePath) {
	return filePath.split("/").some((segment) => [".angular", ".git", "dist", "node_modules"].includes(segment));
}

function collectAngularFiles(tree) {
	const files = [];
	const visit = (dirPath) => {
		const entries = [];
		const dir = tree.getDir(dirPath);
		dir.visit((filePath) => {
			if (filePath.endsWith(".d.ts")) {
				return;
			}
			if (shouldExclude(filePath)) {
				return;
			}
			if (filePath.endsWith(".html") || filePath.endsWith(".ts")) {
				files.push(filePath);
			}
		});
		return entries;
	};
	visit("/");
	return files.sort();
}

function createStagedFiles(tree) {
	const staged = new Map();

	for (const filePath of collectAngularFiles(tree)) {
		const entry = tree.get(filePath);
		if (!entry) {
			continue;
		}
		staged.set(filePath, {
			filePath,
			originalContent: entry.content.toString("utf8"),
			currentContent: entry.content.toString("utf8"),
			operationIds: [],
			changes: [],
		});
	}

	return {
		get(filePath) {
			return staged.get(filePath);
		},
		update(filePath, currentContent, operationId, changes) {
			const entry = staged.get(filePath);
			if (!entry) {
				staged.set(filePath, {
					filePath,
					originalContent: currentContent,
					currentContent,
					operationIds: [operationId],
					changes,
				});
				return;
			}
			entry.currentContent = currentContent;
			entry.operationIds = [...new Set([...entry.operationIds, operationId])];
			entry.changes = [...entry.changes, ...changes];
		},
		entries() {
			return [...staged.values()];
		},
	};
}

function applyStagedFiles(tree, stagedFiles) {
	for (const file of stagedFiles.entries()) {
		if (file.currentContent !== file.originalContent) {
			tree.overwrite(file.filePath, file.currentContent);
		}
	}
}

module.exports = {
	collectAngularFiles,
	createStagedFiles,
	applyStagedFiles,
};
