import { html } from "lit";
import { action } from "storybook/actions";

const wireActions = () => {
	setTimeout(() => {
		const el = document.querySelector("ifx-select");
		el?.addEventListener("ifxSelect", action("ifxSelect"));
		el?.addEventListener("ifxInput", action("ifxInput"));
		el?.addEventListener("ifxOpen", action("ifxOpen"));
	}, 0);
};

export default {
	title: "Components/Select/Single Select",
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
		readOnly: false,
		required: false,
		showClearButton: true,
		ariaSelectLabel: "Select",
		ariaSearchLabel: "Search options",
		ariaClearLabel: "Clear selection",
		ariaSelectLabelledBy: "",
		ariaSelectDescribedBy: "",
	},
	argTypes: {
		size: {
			description: "Size of the field: small `s` (36px) or medium `m` (40px).",
			control: "radio",
			options: ["s", "m"],
			table: { category: "ifx-select props", defaultValue: { summary: "m" } },
		},
		placeholder: {
			description: "Whether the placeholder is displayed when nothing is selected.",
			control: "boolean",
			table: { category: "ifx-select props", defaultValue: { summary: true } },
		},
		placeholderValue: {
			description: "Placeholder text shown when nothing is selected.",
			table: { category: "ifx-select props" },
		},
		error: {
			description: "Displays an error state.",
			control: "boolean",
			table: { category: "ifx-select props", defaultValue: { summary: false } },
		},
		label: {
			description: "Label shown above the select.",
			table: { category: "ifx-select props" },
		},
		disabled: {
			description: "Disables the select.",
			control: "boolean",
			table: { category: "ifx-select props", defaultValue: { summary: false } },
		},
		readOnly: {
			name: "read-only",
			description: "Sets the select to read-only mode.",
			control: "boolean",
			table: { category: "ifx-select props", defaultValue: { summary: false } },
		},
		caption: {
			description: "Helper text shown below the select.",
			table: { category: "ifx-select props" },
		},
		required: {
			description: "Marks the field as required with an asterisk.",
			control: "boolean",
			table: { category: "ifx-select props", defaultValue: { summary: false } },
		},
		showSearch: {
			description: "Enables a search bar inside the dropdown to filter options.",
			control: "boolean",
			table: { category: "ifx-select props", defaultValue: { summary: false } },
		},
		showClearButton: {
			description: "Shows the clear icon button when a value is selected.",
			control: "boolean",
			table: { category: "ifx-select props", defaultValue: { summary: true } },
		},
		searchPlaceholderValue: {
			description: "Placeholder text for the search input.",
			table: { category: "ifx-select props" },
		},
		ariaSelectLabel: {
			description: "ARIA label for the select (fallback when no visible label is set).",
			table: { category: "ARIA Labels" },
		},
		ariaSearchLabel: {
			description: "ARIA label for the search input.",
			table: { category: "ARIA Labels" },
		},
		ariaClearLabel: {
			description: "ARIA label for the clear button.",
			table: { category: "ARIA Labels" },
		},
		ariaSelectLabelledBy: {
			description:
				"ID of an external element that labels the select (aria-labelledby).",
			table: { category: "ARIA Labels" },
		},
		ariaSelectDescribedBy: {
			description:
				"ID of an external element that describes the select (aria-describedby).",
			table: { category: "ARIA Labels" },
		},
		ifxSelect: {
			action: "ifxSelect",
			description: "Emitted when the selection changes (`{ value, label }` or `null`).",
			table: { category: "custom events" },
		},
		ifxInput: {
			action: "ifxInput",
			description: "Emitted when the search value changes.",
			table: { category: "custom events" },
		},
		ifxOpen: {
			action: "ifxOpen",
			description: "Emitted when the dropdown opens or closes.",
			table: { category: "custom events" },
		},
	},
};

const baseTemplate = (args: any, slot: unknown) => {
	wireActions();
	return html`<ifx-select
		size="${args.size}"
		?placeholder="${args.placeholder}"
		?show-clear-button="${args.showClearButton}"
		?show-search="${args.showSearch}"
		search-placeholder-value="${args.searchPlaceholderValue}"
		?disabled="${args.disabled}"
		?read-only="${args.readOnly}"
		?required="${args.required}"
		?error="${args.error}"
		label="${args.label}"
		caption="${args.caption}"
		placeholder-value="${args.placeholderValue}"
		aria-select-label="${args.ariaSelectLabel}"
		aria-search-label="${args.ariaSearchLabel}"
		aria-clear-label="${args.ariaClearLabel}"
		aria-select-labelled-by="${args.ariaSelectLabelledBy}"
		aria-select-described-by="${args.ariaSelectDescribedBy}"
	>
		${slot}
	</ifx-select>`;
};

const flatOptions = html`
	<ifx-select-option value="a">Option A</ifx-select-option>
	<ifx-select-option value="b">Option B</ifx-select-option>
	<ifx-select-option value="c">Option C</ifx-select-option>
	<ifx-select-option value="d" disabled>Option D (disabled)</ifx-select-option>
`;

const groupedOptions = html`
	<ifx-select-option value="all">All KPIs</ifx-select-option>
	<ifx-select-group label="Revenue">
		<ifx-select-option value="rev-total">Total revenue</ifx-select-option>
		<ifx-select-option value="rev-region">Revenue by region</ifx-select-option>
	</ifx-select-group>
	<ifx-select-group label="Costs">
		<ifx-select-option value="cost-op">Operating costs</ifx-select-option>
		<ifx-select-option value="cost-cap">Capital expenditure</ifx-select-option>
	</ifx-select-group>
`;

export const Default: any = (args: any) => baseTemplate(args, flatOptions);

export const WithGroups: any = (args: any) => baseTemplate(args, groupedOptions);
WithGroups.args = { label: "KPI", showSearch: true };
