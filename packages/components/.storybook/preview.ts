import type { Preview } from "@storybook/web-components-vite";
import { html as formatHtml } from "js-beautify";

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
			source: {
				transform: (code: string) => {
					// if JSON is passed as an attribute/string, unescape it
					const unescaped = code
						.replace(/&quot;/g, "\"")
						.replace(/&#39;/g, "'")
						.replace(/&amp;/g, "&")
    					.replace(/(\s[\w-:]+)="(\[[\s\S]*?\]|\{[\s\S]*?\})"/g, "$1='$2'");


					const normalized = unescaped.replace(/></g, ">\n<");				

					try {
						return formatHtml(normalized, {
							indent_size: 2,
							wrap_line_length: 120,
							indent_inner_html: true,
							preserve_newlines: true,
						});
					} catch {
						return normalized;
					}
				},
			},
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
						"ECharts",
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