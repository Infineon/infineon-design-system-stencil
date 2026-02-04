import { html } from "lit";
import { action } from "storybook/actions";

//use string instead of json format here to avoid ugly formatting in the storybook code snippet
// let options = "[{'value': 'a','label': 'option a','selected': 'false'},{'value': 'b','label': 'option b','selected': 'false'},{'value': 'c','label': 'option c','selected': 'false'}]"
const options = [
	{
		value: "a",
		label: "option a",
		selected: false,
	},
	{
		value: "b",
		label: "option b",
		selected: false,
	},
	{
		value: "c",
		label: "option c",
		selected: false,
	},
];

export default {
	title: "Components/Select/Single Select",
	// tags: ['autodocs'],
	args: {
		label: "",
		caption: "",
		size: "m",
		showSearch: true,
		searchPlaceholderValue: "Search...",
		placeholder: true,
		placeholderValue: "Placeholder",
		error: false,
		disabled: false,
		required: true,
		showClearButton: true,
		// type: 'single', //for later implementation
	},

	argTypes: {
		// type: { //for later implementation
		//   // control: { type: 'radio' },
		//   control: false,
		// },
		size: {
			description:
				"Specifies the size. Options: small - s (36px) medium - m (40px).",
			control: "radio",
			options: ["s", "m"],
			table: {
				category: "ifx-select props",
				defaultValue: {
					summary: "m",
				},
			},
		},
		placeholder: {
			description: "Determines whether a placeholder is displayed or not.",
			control: "boolean",
			table: {
				category: "ifx-select props",
				defaultValue: {
					summary: true,
				},
			},
		},
		placeholderValue: {
			description:
				"Sets the text displayed as the placeholder when placeholder is set to true.",
			table: {
				category: "ifx-select props",
			},
		},
		error: {
			description: "Displays an error state.",
			control: "boolean",
			table: {
				category: "ifx-select props",
				defaultValue: {
					summary: false,
				},
			},
		},
		label: {
			description: "Sets the label.",
			table: {
				category: "ifx-select props",
			},
		},
		disabled: {
			description: "Disables the dropdown.",
			control: "boolean",
			table: {
				category: "ifx-select props",
				defaultValue: {
					summary: false,
				},
			},
		},
		caption: {
			description:
				"Text displayed below the select component to provide additional information.",
			table: {
				category: "ifx-select props",
			},
		},
		required: {
			description:
				"Marks the Single Selection as required with an asterik for form submission.",
			table: {
				category: "ifx-select props",
				defaultValue: {
					summary: true,
				},
			},
		},
		showSearch: {
			description:
				"Enables a search bar inside the dropdown to filter options.",
			control: "boolean",
			table: {
				category: "ifx-select props",
				defaultValue: {
					summary: true,
				},
			},
		},
		showClearButton: {
			description: "Shows the clear icon button.",
			control: "boolean",
			table: {
				category: "ifx-select props",
				defaultValue: {
					summary: true,
				},
			},
		},
		searchPlaceholderValue: {
			description: "Placeholder text for the search input field.",
			table: {
				category: "ifx-select props",
			},
		},
		options: {
			description: "Takes an array of objects in the following format.",
			table: {
				category: "ifx-select props",
			},
		},
		ifxSelect: {
			action: "ifxSelect",
			description: "Custom event emitted when item is selected.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxSelect={handleInput}\nVue:@ifxSelect="handleInput"\nAngular:(ifxSelect)="handleInput()"\nVanillaJs:.addEventListener("ifxSelect", (event) => {//handle input});',
				},
			},
		},
		ifxInput: {
			action: "ifxInput",
			description:
				"A custom event *ifxInput* is emitted immediately after the value of *Search* changes.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
				},
			},
		},
		clearSelection: {
			description: "Public method for clearing the selected options",
			table: {
				category: "ifx-select public methods",
			},
		},
	},
};

const DefaultTemplate = (args) => {
	const template = html`<ifx-select 
  size='${args.size}'
  placeholder='${args.placeholder}'
  ?show-clear-button='${args.showClearButton}'
  ?show-search='${args.showSearch}'
  search-placeholder-value='${args.searchPlaceholderValue}'
  ?disabled='${args.disabled}'
  ?required='${args.required}'
  ?error='${args.error}'
  label='${args.label}'
  caption='${args.caption}'
  placeholder-value='${args.placeholderValue}'
  options='${JSON.stringify(args.options)}' >
 </ifx-select>`;
	setTimeout(() => {
		document
			.querySelector("ifx-select")
			?.addEventListener("ifxSelect", action("ifxSelect"));
		document
			.querySelector("ifx-select")
			?.addEventListener("ifxInput", action("ifxInput"));
	}, 0);

	return template;
};

export const Default = DefaultTemplate.bind({});
Default.args = {
	// type: 'single',
	options: options,
};

// export const Text = DefaultTemplate.bind({});
// Text.args = {
//   type: 'text',
//   name: 'text',
//   value: 'Placeholder',
//   allowHTML: true,
//   delimiter: ',',
//   editItems: true,
//   maxItemCount: 5,
// };

// export const Text = DefaultTemplate.bind({});
// Text.args = {
//   type: 'multiple',
//   name: 'multiple',
//   choices: 'Choice 1, Choice 2, Choice 3',
// };

// export const SingleWithIcon = DefaultTemplate.bind({});
// SingleWithIcon.args = {
//   type: 'single',
//   choices: "Choice 1, Choice 2 <ifx-icon icon='check16'></ifx-icon>, Choice 3 <ifx-icon icon='check16'></ifx-icon>",
// };

// export const MultiselectCombobox = DefaultTemplate.bind({});
// MultiselectCombobox.args = {
//   type: 'multiple',
//   // removeItemButton: true,
// };
