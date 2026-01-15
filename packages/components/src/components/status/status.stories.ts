import { html } from "lit";

export default {
	title: "Components/Status",
	tags: ["autodocs"],

	args: {
		label: "text",
		color: "orange-500",
		border: true,
	},
	argTypes: {
		label: {
			name: "Label of Status",
			description: "Set the label of *<ifx-status>*.",
			table: {
				category: "ifx-status props",
				type: {
					summary: "string",
				},
			},
		},
		border: {
			description: "When set to **true** the status has a border.",
			control: "boolean",
			attr: "border",
			table: {
				category: "ifx-status props",
				defaultValue: {
					summary: true,
				},
			},
		},
		color: {
			options: [
				"engineering-100",
				"engineering-200",
				"engineering-300",
				"engineering-400",
				"engineering-500",
				"engineering-600",
				"ocean-100",
				"ocean-200",
				"ocean-300",
				"ocean-400",
				"ocean-500",
				"ocean-600",
				"ocean-700",
				"red-500",
				"red-600",
				"red-700",
				"orange-500",
				"green-500",
				"lawn-400",
				"lawn-500",
				"lawn-700",
				"berry-400",
				"berry-500",
				"sun-400",
				"sun-500",
				"sand-400",
				"sand-500",
			],
			control: { type: "select" },
		},
	},
};

const DefaultTemplate = (args) =>
	html`<ifx-status label="${args.label}" color="${args.color}" border="${args.border}"/>`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
