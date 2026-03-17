import { html } from "lit";

export default {
	title: "Components/Spinner",
	tags: ["autodocs"],

	args: {
		size: "m",
		variant: "default",
		inverted: false,
		ariaLabel: "",
	},
	argTypes: {
		size: {
			description: "Size options: s (24px) and m (40px).",
			options: ["s", "m"],
			control: { type: "radio" },
			table: {
				category: "ifx-spinner props",
				defaultValue: {
					summary: "m",
				},
				type: {
					summary: "s | m",
				},
			},
		},
		variant: {
			description: "Variant of the spinner.",
			options: ["default", "brand"],
			control: { type: "radio" },
			table: {
				category: "ifx-spinner props",
				defaultValue: {
					summary: "default",
				},
				type: {
					summary: "string",
				},
			},
		},
		inverted: {
			description: "Changes the color of spinner to white.",
			table: {
				category: "ifx-spinner props",
				defaultValue: {
					summary: "false",
				},
				type: {
					summary: "boolean",
				},
			},
		},
		ariaLabel: {
			description: "Aria label of the Spinner.",
			control: "text",
			table: {
				category: "ARIA Labels",
				defaultValue: {
					summary: "",
				},
				type: {
					summary: "string",
				},
			},
		},
	},
};

const DefaultTemplate = (args) =>
	html`<ifx-spinner aria-label="${args.ariaLabel}" variant="${args.variant}" size="${args.size}" inverted="${args.inverted}"></ifx-spinner>`;

export const Default = DefaultTemplate.bind({});
Default.argsTypes = {};
