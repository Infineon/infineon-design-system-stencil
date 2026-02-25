import type { Preview } from "@storybook/web-components-vite";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		docs: {
			codePanel: true,
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: "todo",
		},

		options: {
			storySort: {
				order: [
					"Setup & installation",
					[
						"About",
						"Getting started",
						"Framework Integration",
						["HTML", "Angular", "React", "Vue"],
						"Icons Only Usage",
						"Tailwind CSS",
						"FAQ",
					],
					"Foundations",
					"Components",
					// 'Contact'
				],
			},
		},
	},
};

export default preview;
