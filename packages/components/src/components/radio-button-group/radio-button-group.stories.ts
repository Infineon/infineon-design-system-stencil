import { html } from "lit";

export default {
	title: "Components/Radio Button Group",
	tags: ["autodocs"],
	args: {
		amountOfItems: 3,
		alignment: "vertical",
		size: "m",
		checked: false,
		disabled: false,
		error: false,
		showGroupLabel: false,
		groupLabelText: "Group Label",
		showCaption: false,
		captionText: "Caption text, description, error notification",
		showCaptionIcon: false,
		required: false,
	},
	argTypes: {
		amountOfItems: {
			categpry: "story controls",
			name: "Amount of Items",
			description: "Set the amount of radio buttons.",
			control: { type: "number" },
			table: {
				category: "story controls",
				defaultValue: { summary: 3 },
			},
		},
		alignment: {
			description: "Set the orientation of the radio button group.",
			options: ["vertical", "horizontal"],
			control: { type: "radio" },
			table: {
				category: "ifx-radio-button-group props",
				defaultValue: { summary: "vertical" },
			},
		},
		size: {
			description: "Size options for the radio button.",
			options: ["s", "m"],
			control: { type: "radio" },
			table: {
				category: "ifx-radio-button props",
				defaultValue: { summary: "s" },
				type: {
					summary: "s | m",
				},
			},
		},
		checked: {
			description: "Set the checked state.",
			control: { type: "boolean" },
			table: {
				category: "ifx-radio-button props",
				defaultValue: { summary: "false" },
			},
		},
		disabled: {
			description: "Disable the radio button.",
			control: { type: "boolean" },
			table: {
				category: "ifx-radio-button props",
				defaultValue: { summary: "false" },
			},
		},
		error: {
			description: "Set the error state.",
			control: { type: "boolean" },
			table: {
				category: "ifx-radio-button props",
				defaultValue: { summary: "false" },
			},
		},
		showGroupLabel: {
			description: "Show the group label.",
			control: { type: "boolean" },
			table: {
				category: "ifx-radio-button-group props",
				defaultValue: { summary: "false" },
			},
		},
		groupLabelText: {
			description: "Set the group label text.",
			control: { type: "text" },
			table: {
				category: "ifx-radio-button-group props",
				defaultValue: { summary: "" },
			},
		},
		showCaption: {
			description: "Show the caption.",
			control: { type: "boolean" },
			table: {
				category: "ifx-radio-button-group props",
				defaultValue: { summary: "false" },
			},
		},
		captionText: {
			description: "Set the caption text.",
			control: { type: "text" },
			table: {
				category: "ifx-radio-button-group props",
				defaultValue: { summary: "" },
			},
		},
		showCaptionIcon: {
			description: "Show the caption icon.",
			control: { type: "boolean" },
			table: {
				category: "ifx-radio-button-group props",
				defaultValue: { summary: "false" },
			},
		},
		required: {
			description: "Marks the radio-button-group as required.",
			control: { type: "boolean" },
			table: {
				category: "ifx-radio-button-group props",
				defaultValue: { summary: "false" },
			},
		},
		setGroupError: {
			action: "setGroupError",
			description:
				"Method to set the error state of all checkboxes in the group.",
			table: {
				category: "ifx-radio-buttton-group methods",
				type: {
					summary: "error : boolean",
					detail: "RadioButttonGroup.setGroupError(error)",
				},
			},
		},
	},
};

const Template = (args) => {
	const radioButtons = Array.from({ length: args.amountOfItems }, (_, i) =>
		i === 0
			? html`<ifx-radio-button
					value="${i}"
					.disabled=${args.disabled}
					.checked=${args.checked}
					.error=${args.error}
					size="${args.size}"
				>Option ${i}</ifx-radio-button>`
			: html`<ifx-radio-button value="${i}" size="${args.size}">Option ${i}</ifx-radio-button>`
	);
	return html`
		<ifx-radio-button-group
			alignment="${args.alignment}"
			.showGroupLabel=${args.showGroupLabel}
			group-label-text="${args.groupLabelText}"
			.showCaption=${args.showCaption}
			caption-text="${args.captionText}"
			.showCaptionIcon=${args.showCaptionIcon}
			.required=${args.required}
		>
			${radioButtons}
		</ifx-radio-button-group>
	`;
};

export const Default = Template.bind({});
