import { action } from "storybook/actions";

export default {
	title: "Components/Radio Button",
	// tags: ['autodocs'],

	args: {
		label: "Text",
		error: false,
		disabled: false,
		checked: false,
		size: "s",
		name: "radio-button",
		value: "radio",
	},
	argTypes: {
		error: {
			description: "Indicates whether the radio button is in an error state.",
			control: "boolean",
			table: {
				category: "ifx-radio-button props",
				defaultValue: {
					summary: false,
				},
			},
		},
		disabled: {
			description: "Disables the radio button.",
			control: "boolean",
			table: {
				category: "ifx-radio-button props",
				defaultValue: {
					summary: false,
				},
			},
		},
		checked: {
			description:
				"Determines whether the radio button is selected by default.",
			control: "boolean",
			table: {
				category: "ifx-radio-button props",
				defaultValue: {
					summary: false,
				},
			},
		},
		label: {
			name: "Label of Radio Button",
			description: "Set the label displayed next to *<ifx-radio-button>*.",
			table: {
				category: "story controls",
			},
		},
		size: {
			description:
				"Specifies the size of the radio button. Options: s (20px) and m (24px).",
			control: "radio",
			options: ["s", "m"],
			table: {
				category: "ifx-radio-button props",
				defaultValue: {
					summary: "s",
				},
				type: {
					summary: "s | m",
				},
			},
		},
		name: {
			description:
				"Name of the element, that is used as reference when a form is submitted.",
			table: {
				category: "ifx-radio-button props",
			},
		},
		value: {
			description:
				"The value that gets submitted, when the radio button is checked.",
			table: {
				category: "ifx-radio-button props",
			},
		},
		ifxChange: {
			description:
				"Custom event emitted when radio button checked and unchecked.",
			action: "ifxChange",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxChange={handleChange}\nVue:@ifxChange="handleChange"\nAngular:(ifxChange)="handleChange()"\nVanillaJs:.addEventListener("ifxChange", (event) => {//handle change});',
				},
			},
		},
		ifxError: {
			description: "Custom event emitted when radio button is in error state.",
			action: "ifxError",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxError={handleError}\nVue:@ifxError="handleError"\nAngular:(ifxError)="handleError()"\nVanillaJs:.addEventListener("ifxError", (event) => {//handle error});',
				},
			},
		},
	},
};

const DefaultTemplate = (args) => {
	// Create the radio button element
	const element = document.createElement("ifx-radio-button") as any;

	// Set boolean properties directly
	element.disabled = args.disabled;
	element.error = args.error;
	element.checked = args.checked;

	// Set string attributes
	element.setAttribute("size", args.size);
	element.setAttribute("name", args.name);
	element.setAttribute("value", args.value);

	// Add the label as a text node
	element.textContent = args.label;

	// Add the event listener
	element.addEventListener("ifxChange", action("ifxChange"));
	element.addEventListener("ifxError", action("ifxError"));

	// Return the element
	return element;
};

export const Default = DefaultTemplate.bind({});
