import { html } from "lit";

export default {
	title: "Components/Indicator",
	tags: ["autodocs"],

	args: {
		number: 1,
		inverted: false,
		variant: "number",
	},
	argTypes: {
		variant: {
			name: "Variant",
			description: "Sets the variant of the Indicator. Number by default.",
			control: "radio",
			options: ["number", "dot"],
			table: {
				category: "story controls",
				defaultValue: {
					summary: "number",
				},
			},
		},
		number: {
			name: "The numerical value of the Indicator",
			description: "Sets the number displayed on the Indicator.",
			table: {
				category: "story controls",
			},
		},
		inverted: {
			description:
				"Toggles the color scheme of the indicator with a numerical value.",
			control: "boolean",
			table: {
				category: "ifx-indicator props",
				defaultValue: {
					summary: false,
				},
			},
		},
	},
};

const DefaultTemplate = (args) =>
	html`<ifx-indicator variant="${args.variant}" number="${args.number}" ?inverted="${args.inverted}" />`;

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
