import { icons } from "@infineon/infineon-icons";

export default {
	title: "Components/Tooltip",
	tags: ["autodocs"],
	args: {
		header: "Tooltip headline",
		text: "Hi, I'm a tooltip",
		position: "auto",
		variant: "compact",
		icon: "c-info-16",
		ariaLabel: "Tooltip with important information",
	},
	argTypes: {
		text: {
			description: "Defines the main content of the tooltip.",
			control: "text",
			table: {
				category: "ifx-tooltip props",
				type: {
					summary: "string",
				},
			},
		},
		icon: {
			description:
				"The icon to be displayed. This control is only applicable when the variant is set to ***extended***.",
			options: Object.keys(icons),
			control: "select",
			table: {
				category: "ifx-tooltip props",
				type: {
					summary: "string",
					defaultValue: {
						summary: "c-info-16",
					},
				},
			},
		},
		position: {
			description:
				"Determines the position of the tooltip relative to the reference element.",
			options: [
				"auto",
				"bottom-start",
				"top-start",
				"left",
				"bottom-end",
				"top-end",
				"right",
				"bottom",
				"top",
			],
			control: "radio",
			table: {
				category: "ifx-tooltip props",
				defaultValue: {
					summary: "auto",
				},
			},
		},
		variant: {
			description: "Sets the style variant of the tooltip.",
			control: "radio",
			options: ["compact", "dismissible", "extended"],
			table: {
				category: "ifx-tooltip props",
				defaultValue: {
					summary: "compact",
				},
			},
		},
		header: {
			description:
				"Specifies the header or title of the tooltip. This field is only applicable when the variant is set to ***dismissible*** or ***extended***.",
			control: "text",
			if: { arg: "variant", neq: "compact" },
			table: {
				category: "ifx-tooltip props",
				type: {
					summary: "string",
				},
			},
		},
		ariaLabel: {
			description:
				"Defines the aria-label for the tooltip, providing a text alternative for screen readers.",
			control: "text",
			table: {
				category: "ifx-tooltip props",
				type: {
					summary: "string | null",
				},
				defaultValue: {
					summary: "null",
				},
			},
		},
	},
};

const DefaultTemplate = ({
	header,
	text,
	variant,
	position,
	icon,
	ariaLabel,
}) => {
	const element = document.createElement("ifx-tooltip");
	if (variant === "dismissible" || variant === "extended") {
		element.setAttribute("header", header);
	}
	element.setAttribute("text", text);
	element.setAttribute(
		"variant",
		variant === "extended" ? "extended" : variant,
	);
	element.setAttribute("position", position);
	element.setAttribute("icon", icon);
	element.setAttribute("aria-label", ariaLabel);

	element.textContent = `I'm the tooltip reference element - Please ${variant === "dismissible" ? "click" : "hover"} me`; // Set content for the reference element

	return element;
};

export const Default = DefaultTemplate.bind({});
