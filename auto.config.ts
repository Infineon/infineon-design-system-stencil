import type { AutoRc } from "auto";

const npmOptions = {
	exact: true,
	subPackageChangelogs: false,
	monorepoChangelog: false,
};

export default function rc(): AutoRc {
	return {
		plugins: [
			["npm", npmOptions],
			"released",
			[
				"auto-plugin-webex",
				{
					threshold: "patch",
					message: "## VERSION UPDATE\n\nA new version has been released: [%version](%link).\n\n### Changelog\n\n%notes",
				},
			],
			"first-time-contributor",
		],
		author: {
			name: "github-actions[bot]",
			email: "github-actions[bot]@users.noreply.github.com",
		},
		onlyPublishWithReleaseLabel: true,
	};
};
