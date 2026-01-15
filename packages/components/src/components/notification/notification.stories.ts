import { icons } from "@infineon/infineon-icons";
import { html } from "lit";

export default {
	title: "Components/Notification",
	tags: ["autodocs"],

	args: {
		label: "Sample Notification",
		variant: "success",
		icon: "c-check-16",
		linkText: "Link",
		linkHref: "https://www.example.com",
		linkTarget: "_blank",
	},
	argTypes: {
		label: {
			name: "Label of Notification",
			description: "Set the text label of the *<ifx-notification>*.",
			table: {
				category: "story controls",
				type: {
					summary: "string",
				},
			},
		},
		variant: {
			description: "Variant of the notification.",
			options: ["success", "locked", "error", "neutral"],
			control: { type: "radio" },
			table: {
				category: "ifx-notification props",
				defaultValue: {
					summary: "success",
				},
				type: {
					summary: "success | warning | error",
				},
			},
		},
		icon: {
			description:
				'The icon to be displayed in the notification. Choose "none" to display no icon.',
			options: Object.keys(icons),
			control: { type: "select" },
			table: {
				category: "ifx-notification props",
				type: {
					summary: "string",
				},
			},
		},
		linkText: {
			description: "Text for the link.",
			table: {
				category: "ifx-notification props",
				type: {
					summary: "string",
				},
			},
		},
		linkHref: {
			description: "URL for the link.",
			table: {
				category: "ifx-notification props",
				type: {
					summary: "string",
				},
			},
		},
		linkTarget: {
			options: ["_blank", "_self", "_parent"],
			control: { type: "radio" },
			description: "Specifies where to open the linked document.",
			table: {
				category: "ifx-notification props",
				defaultValue: {
					summary: "_blank",
				},
				type: {
					summary: "_blank | _self | _parent",
				},
			},
		},
	},
};

const DefaultTemplate = (args) => {
	const icon = args.icon === "none" ? "" : args.icon;

	return html`<ifx-notification 
  icon = "${icon}"
  variant="${args.variant}" 
  link-text="${args.linkText}" 
  link-href="${args.linkHref}"
  link-target="${args.linkTarget}">
  ${args.label}
</ifx-notification>`;
};

export const Default = DefaultTemplate.bind({});
Default.argTypes = {};
