import { icons } from "@infineon/infineon-icons";
import { html } from "lit";

export default {
	title: "Components/Button",
	tags: ["autodocs"],

	args: {
		label: "Button",
		variant: "primary",
		theme: "default",
		type: "button",
		size: "m",
		fullWidth: false,
		disabled: false,
		icon: "",
		iconPosition: "left",
		href: false,
		url: "",
		target: "_blank",
		ariaLabel: "Button",
	},

	argTypes: {
		label: {
			name: "Label of Button",
			description: "Sets the text displayed on the *<ifx-button>*.",
			table: {
				category: "story controls",
			},
		},
		icon: {
			description: "The icon to be displayed.",
			control: "select",
			options: Object.keys(icons),
			table: {
				category: "ifx-button props",
				type: {
					summary: "string",
				},
			},
		},
		variant: {
			description: "Sets the style variant of the button.",
			control: "radio",
			options: ["primary", "secondary", "tertiary"],
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "primary",
				},
			},
		},
		ariaLabel: {
			description:
				"Sets the aria-label attribute of the button.Enhances accessibility.",
			control: "text",
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "Button",
				},
			},
		},
		theme: {
			description: "Specifies the theme style of the button.",
			control: "radio",
			options: ["default", "danger", "inverse"],
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "default",
				},
			},
		},
		type: {
			description: "Sets the type attribute of the button.",
			control: "radio",
			options: ["button", "submit", "reset"],
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "button",
				},
			},
		},
		size: {
			description:
				"Sets the size of the button. Options: xs (32px) s (36px),  m (40px), l (48px)",
			control: "radio",
			options: ["xs", "s", "m", "l"],
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "m",
				},
			},
		},
		fullWidth: {
			description:
				"When set to **true**, expands the button to take the full width of its container.",
			control: "boolean",
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "false",
				},
			},
		},
		disabled: {
			description: "Disables the button when set to true.",
			control: "boolean",
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "false",
				},
			},
		},
		iconPosition: {
			description:
				"Determines the position of an icon within the button if an icon is used.",
			control: "radio",
			options: ["left", "right"],
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "left",
				},
			},
		},
		href: {
			description:
				"When set to **true**, treats the button as a link by setting a URL.",
			control: "boolean",
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "false",
				},
			},
		},
		url: {
			description:
				"Specifies the destination URL for the button when it acts as a link.",
			table: {
				category: "ifx-button props",
				type: {
					summary: "string",
				},
			},
		},
		target: {
			description:
				"Determines where to open the linked document when the button is clicked.",
			control: "radio",
			options: ["_blank", "_self", "_parent"],
			table: {
				category: "ifx-button props",
				defaultValue: {
					summary: "_blank",
				},
			},
		},
	},
};

const DefaultTemplate = (args) =>
	html`<ifx-button type="${args.type}" aria-label="${args.ariaLabel}" ?disabled="${args.disabled}" variant="${args.variant}" size="${args.size}" target="${args.target}" theme="${args.theme}" ${args.href ? `href="${args.url}"` : ""} full-width="${args.fullWidth}">
  ${args.icon && args.iconPosition.toUpperCase() === "LEFT" ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : ""}${args.label}${args.icon && args.iconPosition.toUpperCase() === "RIGHT" ? `<ifx-icon icon="${args.icon}"></ifx-icon>` : ""} 
</ifx-button>`;

export const Default = DefaultTemplate.bind({});
