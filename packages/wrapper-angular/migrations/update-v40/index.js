const { loadManifestFromPath, loadReleaseOperations } = require("../lib/manifest");
const { analyseTemplateContent, migrateTemplateContent } = require("../lib/migrate-template");
const { migrateTypeScriptContent } = require("../lib/migrate-typescript");

const TARGET_VERSION = "40.0.0";
const IGNORED_PATH_SEGMENTS = new Set([".angular", ".git", "dist", "node_modules"]);

/**
 * @typedef {object} Operation
 * @property {string} id
 * @property {string} type
 * @property {string} component
 * @property {string} from
 * @property {string} to
 */

/**
 * Load canonical release operations from the shared manifest.
 *
 * @param {string} targetVersion  Semver string of the package version being migrated to.
 * @param {string | undefined} manifestPath  Optional explicit path to a manifest JSON file.
 */
function loadMigrationRules(targetVersion, manifestPath) {
	return loadReleaseOperations(targetVersion, manifestPath);
}

/**
 * @param {string} filePath
 * @returns {boolean}
 */
function shouldSkipFile(filePath) {
	return filePath.split("/").some((segment) => IGNORED_PATH_SEGMENTS.has(segment));
}

/**
 * Create an ng-update schematic migration factory for the given target version.
 *
 * @param {string} targetVersion
 */
function createManifestMigration(targetVersion) {
	return (tree) => {
		const rules = loadMigrationRules(targetVersion);

		tree.getDir("/").visit((filePath) => {
			if (shouldSkipFile(filePath)) {
				return;
			}

			if (!filePath.endsWith(".html") && !filePath.endsWith(".ts")) {
				return;
			}

			const fileEntry = tree.get(filePath);
			if (!fileEntry) {
				return;
			}

			const originalContent = fileEntry.content.toString("utf8");
			const updatedContent = filePath.endsWith(".html")
				? migrateTemplateContent(originalContent, filePath, rules)
				: migrateTypeScriptContent(originalContent, filePath, rules);

			if (updatedContent && updatedContent !== originalContent) {
				tree.overwrite(filePath, updatedContent);
			}
		});

		return tree;
	};
}

function updateToV40() {
	return createManifestMigration(TARGET_VERSION);
}

module.exports = {
	analyseTemplateContent,
	createManifestMigration,
	loadManifestFromPath,
	loadMigrationRules,
	loadReleaseOperations,
	migrateTemplateContent,
	migrateTypeScriptContent,
	updateToV40,
};
