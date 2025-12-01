import { icons } from "@infineon/infineon-icons";
import { action } from "storybook/actions";

export default {
	title: "Components/Text Field",
	// tags: ['autodocs'],

	args: {
		label: "Label",
		error: false,
		disabled: false,
		size: "m",
		icon: "",
		success: false,
		placeholder: "Placeholder",
		readOnly: false,
		caption: "Caption",
		required: true,

		name: "text-field",
		showDeleteIcon: false,
		maxlength: "",
		value: "",
		autocomplete: "on",
		type: "text",
		internalId: "text-field",
		ariaLabel: "text field for user input",
	},

	argTypes: {
		label: {
			name: "Label of Text Field",
			description: "The text label displayed above the *<ifx-text-field>*.",
			table: {
				category: "ifx-text-field props",
			},
		},
		error: {
			description: "Indicates an error state for the text field.",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: false,
				},
			},
		},
		disabled: {
			description: "Disables the text field.",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: false,
				},
			},
		},
		size: {
			description: "Size options: s (36px) and m (40px) - default: m",
			options: ["s", "m"],
			control: "radio",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: "m",
				},
			},
		},
		icon: {
			description: "Specifies an icon to display within the text field.",
			options: Object.keys(icons),
			control: "select",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: "",
				},
			},
		},
		success: {
			description: "Indicates a successful state for the text field.",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: false,
				},
			},
		},
		placeholder: {
			description:
				"Displays a placeholder text inside the text field when it is empty.",
			table: {
				category: "ifx-text-field props",
			},
		},
		readOnly: {
			name: "read-only",
			description: `Text cannot be edited when set to true.\n 
*Note: It is different from disabled prop, control is focusable in readOnly mode unlike disabled.*`,
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: "false",
				},
			},
		},
		caption: {
			description:
				"Text displayed below the text field to provide additional information.",
			table: {
				category: "ifx-text-field props",
			},
		},
		required: {
			description:
				"Marks the text field as required for form submission. Displays an asterisk next to the label when set to **true**.",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: true,
				},
			},
		},
		name: {
			description:
				"Name of the element, that is used as reference when a form is submitted.",
			table: {
				category: "ifx-text-field props",
			},
		},
		showDeleteIcon: {
			description:
				"Displays a delete icon inside the text field when set to **true**, allowing user to clear the input content.",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: false,
				},
			},
		},
		maxlength: {
			description:
				"Specifies the maximum number of characters that can be entered into the text field.",
			control: "number",
			table: {
				category: "ifx-text-field props",
			},
		},
		value: {
			description:
				"The value of the text field. It is used for the form submission.",
			control: "text",
			table: {
				category: "ifx-text-field props",
				type: {
					summary: "string",
				},
			},
		},
		internalId: {
			description:
				"Sets the ID of the internal input and the value of htmlFor for the label element",
			control: "text",
			table: {
				category: "ifx-text-field props",
				defaultValue: {
					summary: "text-field",
				},
				type: {
					summary: "string",
				},
			},
		},
		autocomplete: {
			description: 'Sets the autocomplete attribute. "on" by default.',
			control: "text",
			table: {
				category: "ifx-text-field props",
				type: {
					summary: "string",
				},
			},
		},
		type: {
			description: 'Sets the type attribute. "Text" by default.',
			options: ["text", "password"],
			control: "radio",
			table: {
				category: "ifx-text-field props",
				type: {
					summary: "string",
				},
				defaultValue: {
					summary: "text",
				},
			},
		},
		ariaLabel: {
			description: "Aria label of the Tag.",
			control: "text",
			table: {
				category: "ARIA Labels",
				defaultValue: {
					summary: "",
				},
				type: {
					summary: "string",
				},
			},
		},
		ifxInput: {
			action: "ifxInput",
			description: "Custom event emitted on input change.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
				},
			},
		},
	},
};

const DefaultTemplate = ({
	error,
	disabled,
	success,
	size,
	placeholder,
	readOnly,
	label,
	caption,
	icon,
	required,
	name,
	maxlength,
	showDeleteIcon,
	value,
	autocomplete,
	type,
	internalId,
	ariaLabel,
}) => {
	const element = document.createElement("ifx-text-field");
	element.setAttribute("error", error);
	element.setAttribute("disabled", disabled);
	element.setAttribute("size", size);
	element.setAttribute("icon", icon);
	element.setAttribute("success", success);
	element.setAttribute("placeholder", placeholder);
	element.setAttribute("read-only", readOnly);
	element.setAttribute("caption", caption);
	element.setAttribute("label", label);
	element.setAttribute("required", required);
	element.setAttribute("name", name);
	element.setAttribute("show-delete-icon", showDeleteIcon);
	element.setAttribute("value", value);
	element.setAttribute("autocomplete", autocomplete);
	element.setAttribute("type", type);
	element.setAttribute("internal-id", internalId);
	element.setAttribute("aria-label", ariaLabel);
	if (maxlength) element.setAttribute("maxlength", maxlength);

	element.addEventListener("ifxInput", action("ifxInput"));

	return element;
};

export const Default = DefaultTemplate.bind({});
