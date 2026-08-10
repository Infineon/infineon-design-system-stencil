const path = require("path");

const { loadReleaseOperations } = require("../../lib/manifest.js");
const { createExecutorRegistry } = require("../../lib/executor-registry.js");
const { RenamePropExecutor } = require("../../lib/rename-prop-executor.js");
const { createStagedFiles, applyStagedFiles } = require("../../lib/staged-files.js");
const { createAngularAdapter } = require("../../lib/angular-adapter.js");

const TARGET_VERSION = "40.0.0";
const DEFAULT_MANIFEST_PATH = path.resolve(__dirname, "..", "..", "shared", "manifest.json");

function createManifestMigration(targetVersion = TARGET_VERSION) {
	return (tree) => {
		const operations = loadReleaseOperations(targetVersion, DEFAULT_MANIFEST_PATH);
		const executor = new RenamePropExecutor();
		const registry = createExecutorRegistry([executor]);
		const stagedFiles = createStagedFiles(tree);
		const adapter = createAngularAdapter({ tree, operations, registry });

		const pendingAnalyses = [];
		for (const operation of operations) {
			const analysis = adapter.analyse(operation, stagedFiles);
			pendingAnalyses.push(analysis);
			if (analysis.diagnostics.some((item) => item.severity === "error")) {
				return tree;
			}

			for (const file of analysis.fileAnalyses ?? []) {
				if (file?.changes?.length) {
					stagedFiles.update(file.filePath, file.currentContent, operation.id, file.changes);
				}
			}
		}

		applyStagedFiles(tree, stagedFiles);
		return tree;
	};
}

function updateToV40() {
	return createManifestMigration(TARGET_VERSION);
}

module.exports = {
	createManifestMigration,
	updateToV40,
};
