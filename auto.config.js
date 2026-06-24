const npmOptions = {
	exact: true,
	subPackageChangelogs: false,
	monorepoChangelog: false,
};

module.exports = function rc() {
	return {
		plugins: [
			["npm", npmOptions],
			[
				"omit-release-notes",
				{
					labels: "skip-changelog",
				}
			],
			"released",
			[
				"auto-plugin-webex",
				{
					threshold: "patch",
					message: "## VERSION UPDATE\n\nA new version has been released: [%version](%link).\n\n### Changelog\n\n%notes",
					failOnError: false
				},
			],
			"first-time-contributor"
		],
		author: {
			name: "github-actions[bot]",
			email: "github-actions[bot]@users.noreply.github.com",
		},
	};
};