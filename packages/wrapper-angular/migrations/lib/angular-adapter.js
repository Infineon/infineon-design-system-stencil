const { collectAngularFiles, createStagedFiles } = require("./staged-files.js");

function createAngularAdapter({ tree, registry }) {
	const filePaths = collectAngularFiles(tree);

	return {
		analyse(step, stagedFiles) {
			const context = {
				filePaths,
				stagedFiles: stagedFiles ?? createStagedFiles(tree),
			};
			return registry.analyse(step, context);
		},
	};
}

module.exports = {
	createAngularAdapter,
};
