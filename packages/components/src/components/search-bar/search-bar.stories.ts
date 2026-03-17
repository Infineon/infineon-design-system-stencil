import { action } from "storybook/actions";

export default {
	title: "Components/Search Bar",
	// tags: ['autodocs'],

	args: {
		disabled: false,
		isOpen: true,
		value: "",
		autocomplete: "on",
	},

	argTypes: {
		isOpen: {
			description: "Controls the display of the search bar.",
			control: { type: "boolean" },
			table: {
				defaultValue: { summary: "true" },
				category: "ifx-search-bar props",
				type: {
					summary: "boolean",
				},
			},
		},
		disabled: {
			description: "Disables the search bar.",
			control: { type: "boolean" },
			table: {
				defaultValue: { summary: "false" },
				category: "ifx-search-bar props",
				type: {
					summary: "boolean",
				},
			},
		},
		value: {
			description: "The value is used to handle the search bar input.",
			control: { type: "text" },
			table: {
				category: "ifx-search-bar props",
				type: {
					summary: "string",
				},
			},
		},
		autocomplete: {
			description:
				"The value of the search field. It is used for the form submission.",
			control: { type: "text" },
			table: {
				category: "ifx-search-bar props",
				type: {
					summary: "string",
				},
			},
		},
		maxlength: {
			description: "Maximum input length.",
			control: { type: "number" },
			table: {
				category: "ifx-search-bar props",
				type: {
					summary: "number",
				},
			},
		},
		ifxInput: {
			action: "ifxInput",
			description: "Custom event emitted on input.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});`,
				},
			},
		},
		ifxOpen: {
			action: "ifxOpen",
			description: "Custom event emitted when the state of *isOpen* changes.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail: `React: onIfxOpen={handleOpen}\nVue:@ifxOpen="handleOpen"\nAngular:(ifxOpen)="handleOpen()"\nVanillaJs:.addEventListener("ifxOpen", (event) => {//handle open});`,
				},
			},
		},
	},
};

const DefaultTemplate = ({
	isOpen,
	disabled,
	maxlength,
	value,
	autocomplete,
}) => {
	const element = document.createElement("ifx-search-bar");
	element.setAttribute("is-open", isOpen);
	element.setAttribute("disabled", disabled);
	element.setAttribute("value", value);
	element.setAttribute("autocomplete", autocomplete);
	element.addEventListener("ifxInput", action("ifxInput"));
	element.addEventListener("ifxOpen", action("ifxOpen"));

	if (maxlength != undefined) element.setAttribute("maxlength", maxlength);

	return element;
};

export const Default = DefaultTemplate.bind({});
Default.args = {};
