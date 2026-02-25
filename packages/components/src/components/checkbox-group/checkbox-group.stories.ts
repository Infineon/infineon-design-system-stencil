import { html } from "lit";

export default {
	title: "Components/Checkbox Group",
	tags: ["autodocs"],
	args: {
		amountOfItems: 3,
		alignment: "vertical",
		checked: false,
		disabled: false,
		indeterminate: false,
		error: false,
		size: "m",
		showGroupLabel: false,
		groupLabelText: "Group Label",
		showCaption: false,
		captionText: "Caption text, description, error notification",
		showCaptionIcon: false,
		required: false,
	},
	argTypes: {
		alignment: {
			description: "Set the orientation of the checkbox group.",
			options: ["vertical", "horizontal"],
			control: { type: "radio" },
			table: {
				category: "ifx-checkbox-group props",
				defaultValue: { summary: "vertical" },
			},
		},
		size: {
			description: "Size options for the checkbox.",
			options: ["s", "m"],
			control: { type: "radio" },
			table: {
				category: "ifx-checkbox props",
				defaultValue: { summary: "m" },
				type: {
					summary: "s | m",
				},
			},
		},
		amountOfItems: {
			name: "Amount of Items",
			description: "Set the amount of checkboxes.",
			control: { type: "number" },
			table: {
				category: "story controls",
				defaultValue: { summary: 3 },
			},
		},
		checked: {
			description: "Set the checked state.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox props",
				defaultValue: { summary: "false" },
			},
		},
		disabled: {
			description: "Disable the checkbox.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox props",
				defaultValue: { summary: "false" },
			},
		},
		error: {
			description: "Set the error state for the entire checkbox group.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox props",
				defaultValue: { summary: "false" },
			},
		},
		indeterminate: {
			description: "Set the partially checked state.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox props",
				defaultValue: { summary: "false" },
			},
		},
		showGroupLabel: {
			description: "Show the group label.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox-group props",
				defaultValue: { summary: "false" },
			},
		},
		groupLabelText: {
			description: "Set the group label text.",
			control: { type: "text" },
			table: {
				category: "ifx-checkbox-group props",
				defaultValue: { summary: "" },
			},
		},
		showCaption: {
			description: "Show the caption.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox-group props",
				defaultValue: { summary: "false" },
			},
		},
		captionText: {
			description: "Set the caption text.",
			control: { type: "text" },
			table: {
				category: "ifx-checkbox-group props",
				defaultValue: { summary: "" },
			},
		},
		showCaptionIcon: {
			description: "Show the caption icon.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox-group props",
				defaultValue: { summary: "false" },
			},
		},
		required: {
			description: "Marks the checkbox-group as required.",
			control: { type: "boolean" },
			table: {
				category: "ifx-checkbox-group props",
				defaultValue: { summary: "false" },
			},
		},
		setGroupError: {
			action: "setGroupError",
			description:
				"Method to set the error state of all checkboxes in the group.",
			table: {
				category: "ifx-checkbox-group methods",
				type: {
					summary: "error : boolean",
					detail: "CheckboxGroup.setGroupError(error)",
				},
			},
		},
	},
};

const Template = (args) => {
	const checkboxes = Array.from({ length: args.amountOfItems }, (_, i) =>
		i === 0
			? html`<ifx-checkbox value="${i}" ?disabled="${args.disabled}" ?checked="${args.checked}" size="${args.size}" ?indeterminate="${args.indeterminate}" ?error="${args.error}">Option ${i}</ifx-checkbox>`
			: html`<ifx-checkbox value="${i}" size="${args.size}">Option ${i}</ifx-checkbox>`
	);

	return html`
		<ifx-checkbox-group
			alignment="${args.alignment}"
			?show-group-label="${args.showGroupLabel}"
			group-label-text="${args.groupLabelText}"
			?show-caption="${args.showCaption}"
			caption-text="${args.captionText}"
			?show-caption-icon="${args.showCaptionIcon}"
			?required="${args.required}"
		>
			${checkboxes}
		</ifx-checkbox-group>
	`;
};

export const Default = Template.bind({});
