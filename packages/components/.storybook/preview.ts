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
			source: {
				transform: (code: string, context: { args?: Record<string, unknown> }) => {
					if (!context.args) {
						return code;
					}

					const tagMatch = code.match(/<([a-z0-9-]+)/i);
					const tagName = tagMatch?.[1];
					if (!tagName?.startsWith("ifx-")) {
						return code;
					}

					const toKebabCase = (value: string) =>
						value
							.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
							.replace(/\s+/g, "-")
							.toLowerCase();

					const formatValue = (value: unknown) => {
						if (typeof value === "string") {
							return value;
						}
						if (typeof value === "number" || typeof value === "boolean") {
							return String(value);
						}
						return JSON.stringify(value);
					};

					const attrs = Object.entries(context.args)
						.map(([key, value]) => ({
							key: toKebabCase(key),
							value,
							formatted: formatValue(value),
						}))
						.filter(({ value, formatted }) =>
							value !== undefined &&
							value !== null &&
							value !== "undefined" &&
							value !== "" &&
							typeof value !== "function" &&
							formatted !== undefined
						)
						.map(({ key, formatted }) => `\t${key}='${formatted}'`)
						.join("\n");

					return attrs
						? `<${tagName}\n${attrs}>\n</${tagName}>`
						: `<${tagName}></${tagName}>`;
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
