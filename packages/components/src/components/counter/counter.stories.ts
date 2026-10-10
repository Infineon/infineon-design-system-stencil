import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";

export default {
	title: "Components/Counter",
	tags: ["autodocs"],
	args: {
		name: "",
		value: 0,
	},
	argTypes: {
		name: {
			description: "Form field name used when the counter is in a form.",
			table: {
				category: "IFX-Counter-Unit Props",
			},
			control: "text",
		},
		value: {
			description: "Initial value of the counter.",
			table: {
				category: "IFX-Counter-Unit Props",
			},
			control: {
				type: "number",
				min: 0,
			},
		},
		ifxChange: {
			description: "Custom event emitted when the counter value changes.",
			action: "ifxChange",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`,
				},
			},
		},
	},
} as Meta;

export const Default: StoryObj = {
	render: ({ name, value }) => {
		const [, updateArgs] = useArgs();
		const handleChange = (event: CustomEvent<number>) => {
			action("ifxChange")(event.detail);
			updateArgs({ value: event.detail });
		};

		return html`
			<ifx-counter
				name=${name}
				value=${value}
				@ifxChange=${handleChange}></ifx-counter>
		`;
	},
};
