const npmOptions = {
	exact: true,
};

module.exports = function rc() {
	return {
		plugins: [
			["npm", npmOptions],
			"released",
			[
				"auto-plugin-webex",
				{
					threshold: "patch",
				},
			],
			"first-time-contributor",
		],
		author: {
			name: "github-actions[bot]",
			email: "github-actions[bot]@users.noreply.github.com",
		},
	};
};
