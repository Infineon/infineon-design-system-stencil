const path = require("path");

const { loadManifestFromPath, loadReleaseOperations } = require("../../lib/manifest.js");
const { createExecutorRegistry } = require("../../lib/executor-registry.js");
const { RenamePropExecutor } = require("../../lib/rename-prop-executor.js");
const { createStagedFiles, applyStagedFiles } = require("../../lib/staged-files.js");
const { createAngularAdapter } = require("../../lib/angular-adapter.js");
const { hasErrorDiagnostics, formatDiagnostic, createMigrationError } = require("../../lib/diagnostics.js");
const { analyseTemplateContent, migrateTemplateContent } = require("../../lib/migrate-template.js");
const { analyseTypeScriptContent, migrateTypeScriptContent } = require("../../lib/migrate-typescript.js");

const TARGET_VERSION = "40.0.0";
const DEFAULT_MANIFEST_PATH = path.resolve(__dirname, "..", "..", "shared", "manifest.json");

function createManifestMigration(targetVersion = TARGET_VERSION) {
	return (tree, context = {}) => {
		const operations = loadReleaseOperations(targetVersion, DEFAULT_MANIFEST_PATH);
		const executor = new RenamePropExecutor();
		const registry = createExecutorRegistry([executor]);
		registry.preflight(operations);
		const stagedFiles = createStagedFiles(tree);
		const adapter = createAngularAdapter({ tree, operations, registry });
		const logger = context.logger ?? { info() {}, warn() {} };

		logger.info(`Migration release: ${targetVersion}`);

		for (const operation of operations) {
			logger.info(`Operation: ${operation.id}`);
			const analysis = adapter.analyse(operation, stagedFiles);
			const operationDiagnostics = [...analysis.diagnostics];
			for (const diagnostic of operationDiagnostics) {
				if (diagnostic.severity === "warning") {
					logger.warn(formatDiagnostic(diagnostic));
				}
			}
			if (hasErrorDiagnostics(operationDiagnostics)) {
				throw createMigrationError(operationDiagnostics);
			}

			for (const file of analysis.fileAnalyses ?? []) {
				if (file?.changes?.length) {
					stagedFiles.update(file.filePath, file.currentContent, operation.id, file.changes);
				}
			}
		}

		const changedFiles = stagedFiles.entries().filter((file) => file.currentContent !== file.originalContent);
		for (const file of changedFiles) {
			logger.info(`Modified: ${file.filePath} (${file.operationIds.join(",")})`);
		}
		logger.info(`Modified files: ${changedFiles.length}`);
		applyStagedFiles(tree, stagedFiles);
		return tree;
	};
}

function updateToV40() {
	return createManifestMigration(TARGET_VERSION);
}

module.exports = {
	analyseTemplateContent,
	analyseTypeScriptContent,
	createManifestMigration,
	loadManifestFromPath,
	loadReleaseOperations,
	migrateTemplateContent,
	migrateTypeScriptContent,
	updateToV40,
};
