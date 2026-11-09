import { icons } from "@infineon/design-system-icons";
import { action } from "storybook/actions";

export default {
	title: "Components/Chip",
	tags: ["autodocs"],
	parameters: {
		docs: {
			story: {
				height: "100px",
			},
		},
	},
	args: {
		amountOfChipItems: 4,
		chipItemLabel: "Item Label",
		placeholder: "Label",
		size: "medium",
		variant: "single",
		href: "",
		target: "_blank",
		readOnly: false,
		selected: false,
		value: "Item Value",
		ariaLabel: "Chip",
		disabled: false,
		theme: "outlined",
		icon: "",
		hideDropdownIcon: false,
	},
	argTypes: {
		amountOfChipItems: {
			name: "Amount of Chip Items",
			control: "number",
			if: { arg: "hideDropdownIcon", eq: false },
			description: "Control the number of *<ifx-chip-item>* in a Chip.",
			table: {
				category: "story controls",
				type: {
					summary: null,
				},
			},
		},
		chipItemLabel: {
			name: "Label of Chip Item",
			if: { arg: "hideDropdownIcon", eq: false },
			description: "Set the label of *<ifx-chip-item>*.",
			table: {
				category: "story controls",
			},
		},
		placeholder: {
			description: "Set the placeholder string.",
			table: {
				category: "ifx-chip props",
			},
		},
		size: {
			description: "Switch the size of Chip.",
			control: "radio",
			options: ["small", "medium", "large"],
			table: {
				category: "ifx-chip props",
				defaultValue: {
					summary: "medium",
				},
				type: {
					summary: "small | medium | large",
				},
			},
		},
		variant: {
			description: "Switch the variant of Chip.",
			control: "radio",
			options: ["single", "multi"],
			table: {
				category: "ifx-chip props",
				defaultValue: {
					summary: "single",
				},
				type: {
					summary: "single | multi",
				},
			},
		},
		theme: {
			description: "Specifies the theme style of the Chip.",
			control: "radio",
			options: ["outlined", "filled-light", "filled-dark"],
			table: {
				category: "ifx-chip props",
				defaultValue: {
					summary: "outlined",
				},
				type: {
					summary: "outlined | filled-light | filled-dark",
				},
			},
		},
		readOnly: {
			name: "read-only",
			description: "No dropdown menu. The chip component is read-only.",
			control: "boolean",
			table: {
				category: "ifx-chip props",
				defaultValue: {
					summary: false,
				},
			},
		},

		icon: {
			options: Object.keys(icons),
			control: { type: "select" },
			description: "Set the icon of the Chip.",
			table: {
				category: "ifx-chip props",
				type: {
					summary: "string",
				},
			},
		},
		hideDropdownIcon: {
			name: "hide-dropdown-icon",
			description:
				"Hide the trailing chevron-down icon on the Single variant. When enabled, href and target configure navigation.",
			control: "boolean",
			if: { arg: "variant", neq: "multi" },
			table: {
				category: "ifx-chip props",
				defaultValue: {
					summary: false,
				},
			},
		},

		disabled: {
			name: "disabled",
			description: "No dropdown menu. The chip component is disabled.",
			control: "boolean",
			table: {
				category: "ifx-chip props",
				defaultValue: {
					summary: false,
				},
			},
		},
		ariaLabel: {
			control: { type: "text" },
			description:
				"Set the aria label of the chip item. Enhances accessibility.",
			table: {
				category: "ifx-chip props",
			},
		},
		selected: {
			if: { arg: "hideDropdownIcon", eq: false },
			description: "Set the *selected* prop to pre-select the chip item.",
			table: {
				category: "ifx-chip-item props",
				defaultValue: {
					summary: "false",
				},
			},
		},
		value: {
			if: { arg: "hideDropdownIcon", eq: false },
			description: "Set the value of chip item.",
			table: {
				category: "ifx-chip-item props",
			},
		},
		href: {
			description: "Specifies the URL of the link.",
			control: "text",
			table: {
				category: "ifx-chip props",
				type: {
					summary: "string",
				},
			},
		},
		target: {
			description:
				"Determines where to open the linked URL when the link is clicked.",
			control: "radio",
			options: ["_blank", "_self", "_parent"],
			table: {
				category: "ifx-chip props",
				defaultValue: {
					summary: "_blank",
				},
			},
		},
		ifxChange: {
			action: "ifxChange",
			description:
				"A custom event emitted when the selection in a *<ifx-chip>* is updated.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `
React: onIfxChange={handleChange}
Vue: @ifxChange="handleChange"
Angular: (ifxChange)="handleChange()"
VanillaJs: .addEventListener("ifxChange", (event) => {/*handle change*/});`,
				},
			},
		},
	},
};
const Template = (args: any) => {
	const wrapper = document.createElement("div");
	wrapper.innerHTML = `
<ifx-chip
placeholder="${args.placeholder}"
size="${args.size}"
variant="${args.variant}"
theme="${args.theme}"
icon="${args.icon}"
aria-label="${args.ariaLabel}"
${args.hideDropdownIcon || args.href ? `href="${args.href || ""}" target="${args.target || "_blank"}"` : ""}
${args.disabled ? "disabled" : ""}
${args.readOnly ? "read-only" : ""}
	${args.hideDropdownIcon ? 'hide-dropdown-icon="true"' : ""}>${args.href || args.hideDropdownIcon ? "" : (() => {
		return Array.from({ length: args.amountOfChipItems }, (_, chipItemId) => {
			const chipItem: HTMLIfxChipItemElement =
				document.createElement("ifx-chip-item");
			chipItem.innerHTML = args.chipItemLabel + " " + (chipItemId + 1);
			chipItem.setAttribute("value", args.value + " " + (chipItemId + 1));
			if (args.selected && chipItemId === 1) {
				chipItem.setAttribute("selected", "true");
			}
			if (args.readOnly) {
				if (args.variant === "multi") {
					chipItem.setAttribute("selected", "true");
				} else if (chipItemId === 0) {
					chipItem.setAttribute("selected", "true");
				}
			}
			return chipItem.outerHTML;
		}).join(`\n    `);
	})()}</ifx-chip>`;

	const chip:any = wrapper.querySelector("ifx-chip");
	chip.addEventListener("ifxChange", action("ifxChange"));

	return chip;
};

export const Default:any = Template.bind({});
Default.tags = ["!dev", "!autodocs"];

export const Single:any = Template.bind({});
Single.args = {
	variant: "single",
};
Single.argTypes = {
	variant: {
		table: {
			disable: true,
		},
	},
	href: {
		if: { arg: "hideDropdownIcon", eq: true },
	},
	target: {
		if: { arg: "hideDropdownIcon", eq: true },
	},
};

export const Multi:any = Template.bind({});
Multi.args = {
	variant: "multi",
};
Multi.argTypes = {
	variant: {
		table: {
			disable: true,
		},
	},
	href: {
		control: false,
		table: {
			disable: true,
		},
	},
	target: {
		control: false,
		table: {
			disable: true,
		},
	},
	hideDropdownIcon: {
		control: false,
		table: {
			disable: true,
		},
	},
};

export const ReadOnly:any = Template.bind({});
ReadOnly.args = {
	readOnly: true,
	variant: "multi",
};
ReadOnly.argTypes = {
	readOnly: {
		table: {
			disable: true,
		},
	},
	href: {
		control: false,
		table: {
			disable: true,
		},
	},
	target: {
		control: false,
		table: {
			disable: true,
		},
	},
};

const ActionTemplate = (args: any) => {
	const wrapper = document.createElement("div");
	wrapper.innerHTML = `
<ifx-chip
placeholder="${args.placeholder}"
size="${args.size}"
variant="single"
theme="${args.theme}"
icon="${args.icon}"
aria-label="${args.ariaLabel}"
href="${args.href || ""}"
target="${args.target || "_blank"}"
${args.disabled ? "disabled" : ""}></ifx-chip>`;

	return wrapper.querySelector("ifx-chip");
};

export const Action:any = ActionTemplate.bind({});
Action.args = {
	href: "",
	target: "_blank",
};
Action.argTypes = {
	variant: {
		table: {
			disable: true,
		},
	},
	readOnly: {
		table: {
			disable: true,
		},
	},
	amountOfChipItems: { control: false, table: { disable: true } },
	chipItemLabel: { control: false, table: { disable: true } },
	selected: { control: false, table: { disable: true } },
	value: { control: false, table: { disable: true } },
	hideDropdownIcon: { control: false, table: { disable: true } },
};