import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";

export default {
	title: "Components/Counter",
	tags: ["autodocs"],
	args: {
		value: 0,
	},
	argTypes: {
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
					summary: "CustomEvent<number>",
				},
			},
		},
	},
} as Meta;

export const Default: StoryObj = {
	render: ({ value }) => {
		const [, updateArgs] = useArgs();
		const handleChange = (event: CustomEvent<number>) => {
			action("ifxChange")(event.detail);
			updateArgs({ value: event.detail });
		};

		return html`
			<ifx-counter
				.value=${value}
				@ifxChange=${handleChange}
			></ifx-counter>
		`;
	},
};
