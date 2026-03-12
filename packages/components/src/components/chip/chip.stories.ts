import { icons } from "@infineon/infineon-icons";
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
		readOnly: false,
		selected: false,
		value: "Item Value",
		ariaLabel: "Chip",
		disabled: false,
		theme: "outlined",
		icon: "",
	},
	argTypes: {
		amountOfChipItems: {
			name: "Amount of Chip Items",
			control: "number",
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
			description: "Set the *selected* prop to pre-select the chip item.",
			table: {
				category: "ifx-chip-item props",
				defaultValue: {
					summary: "false",
				},
			},
		},
		value: {
			description: "Set the value of chip item.",
			table: {
				category: "ifx-chip-item props",
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

const Template = (args) => {
	const wrapper = document.createElement("div");
	wrapper.innerHTML = `
<ifx-chip
placeholder="${args.placeholder}"
size="${args.size}"
variant="${args.variant}"
theme="${args.theme}"
icon="${args.icon}"
read-only="${args.readOnly}"
aria-label="${args.ariaLabel}"
disabled="${args.disabled}"
>
  ${(() => {
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
	})()}
</ifx-chip>`;

	const chip = wrapper.querySelector("ifx-chip");
	chip.addEventListener("ifxChange", action("ifxChange"));

	return chip;
};

export const Default = Template.bind({});
Default.tags = ["!dev", "!autodocs"];

export const Single = Template.bind({});
Single.args = {
	variant: "single",
};
Single.argTypes = {
	variant: {
		table: {
			disable: true,
		},
	},
};

export const Multi = Template.bind({});
Multi.args = {
	variant: "multi",
};
Multi.argTypes = {
	variant: {
		table: {
			disable: true,
		},
	},
};

export const ReadOnly = Template.bind({});
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
};
