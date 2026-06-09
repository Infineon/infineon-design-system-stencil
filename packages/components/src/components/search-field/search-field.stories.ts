import { action } from "storybook/actions";

// Generic Lorem Ipsum mock suggestions for all stories
const genericMockSuggestions = [
	{ id: "short1", text: "Lorem", type: "suggestion" as const },
	{ id: "short2", text: "Ipsum", type: "suggestion" as const },
	{ id: "short3", text: "Dolor", type: "suggestion" as const },
	{
		id: "scope1",
		text: "Consectetur adipiscing",
		type: "suggestion" as const,
		scope: "Elite",
		resultCount: 567,
	},
	{
		id: "scope2",
		text: "Sed do eiusmod",
		type: "suggestion" as const,
		scope: "Tempor",
		resultCount: 2341,
	},
	{ id: "misc1", text: "Alias consequatur", type: "suggestion" as const },
	{
		id: "misc2",
		text: "Aut perferendis",
		type: "suggestion" as const,
		scope: "Doloribus asperiores",
		resultCount: 1234,
	},
];

// Generic Lorem Ipsum mock history for all stories (limited to 5 items to match maxHistoryItems)
const genericMockHistory = [
	"Lorem ipsum dolor sit amet",
	"Consectetur adipiscing elit",
	"Sed do eiusmod tempor",
	"Ut labore et dolore magna",
	"Enim ad minim veniam",
];

// Function to reset history for consistent Storybook demonstrations
const resetHistoryForStorybook = (historyKey: string) => {
	if (typeof localStorage !== "undefined") {
		localStorage.setItem(historyKey, JSON.stringify(genericMockHistory));
	}
};

export default {
	title: "Components/Search Field",
	// tags: ['autodocs'],

	args: {
		showDeleteIcon: true,
		disabled: false,
		size: "l",
		value: "",
		placeholder: "Search...",
		autocomplete: "on",
		showSuggestions: false,
		enableHistory: true,
		maxSuggestions: 10,
		maxHistoryItems: 5,
		historyKey: "ifx-search-history",
		historyHeaderText: "Recent Searches",
		ariaLabelText: "Search field",
		deleteIconAriaLabel: "Clear search",
		historyDeleteAriaLabel: "Remove from history",
		dropdownAriaLabel: "Search suggestions and history",
		suggestionAriaLabel: "Search suggestion",
		historyItemAriaLabel: "Search history item",
	},
	argTypes: {
		showDeleteIcon: {
			description:
				"Determines whether a delete icon is shown in the search field.",
			control: "boolean",
			table: {
				category: "ifx-search-field props",
				defaultValue: {
					summary: true,
				},
			},
		},
		disabled: {
			description: "Disables the search field, preventing user interaction.",
			control: "boolean",
			table: {
				category: "ifx-search-field props",
				defaultValue: {
					summary: false,
				},
			},
		},
		size: {
			description: "Size options: s (36px) and l (40px) - default: l.",
			control: "radio",
			options: ["s", "l"],
			table: {
				category: "ifx-search-field props",
				defaultValue: {
					summary: "l",
				},
			},
		},
		placeholder: {
			description:
				"Placeholder text displayed in the search field when it is empty.",
			control: "text",
			table: {
				category: "ifx-search-field props",
				defaultValue: {
					summary: "Search...",
				},
			},
		},
		maxlength: {
			description:
				"Specifies the maximum number of characters that can be entered into the search field.",
			control: "number",
			table: {
				category: "ifx-search-field props",
			},
		},
		value: {
			description:
				"The value of the search field. It is used for the form submission.",
			control: "text",
			table: {
				category: "ifx-search-field props",
			},
		},
		autocomplete: {
			description: 'Sets the autocomplete attribute. "on" by default.',
			control: "text",
			table: {
				category: "ifx-search-field props",
			},
		},
		ifxInput: {
			action: "ifxInput",
			description:
				"A custom event triggered whenever there is input in the search field.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxInput={handleInput}\nVue:@ifxInput="handleInput"\nAngular:(ifxInput)="handleInput()"\nVanillaJs:.addEventListener("ifxInput", (event) => {//handle input});',
				},
			},
		},
		showSuggestions: {
			description:
				"Enables the suggestions dropdown with external suggestions.",
			control: "boolean",
			table: {
				category: "Search Suggestions",
				defaultValue: {
					summary: false,
				},
			},
		},
		enableHistory: {
			description:
				"Enables search history functionality with localStorage persistence.",
			control: "boolean",
			table: {
				category: "Search Suggestions",
				defaultValue: {
					summary: true,
				},
			},
		},
		maxSuggestions: {
			description: "Maximum number of suggestions to display in the dropdown.",
			control: "number",
			table: {
				category: "Search Suggestions",
				defaultValue: {
					summary: 10,
				},
			},
		},
		maxHistoryItems: {
			description: "Maximum number of history items to store and display.",
			control: "number",
			table: {
				category: "Search Suggestions",
				defaultValue: {
					summary: 5,
				},
			},
		},
		historyKey: {
			description: "LocalStorage key for persisting search history.",
			control: "text",
			table: {
				category: "Search Suggestions",
				defaultValue: {
					summary: "ifx-search-history",
				},
			},
		},
		historyHeaderText: {
			description:
				"Header text displayed above history entries in the dropdown.",
			control: "text",
			table: {
				category: "Search Suggestions",
				defaultValue: {
					summary: "Recent Searches",
				},
			},
		},
		ariaLabelText: {
			description: "ARIA label text for the search field component.",
			control: "text",
			table: {
				category: "Accessibility",
				defaultValue: {
					summary: "Search field",
				},
			},
		},
		ariaLabelledBy: {
			description: "ID of element that labels the search field.",
			control: "text",
			table: {
				category: "Accessibility",
			},
		},
		ariaDescribedBy: {
			description: "ID of element that describes the search field.",
			control: "text",
			table: {
				category: "Accessibility",
			},
		},

		deleteIconAriaLabel: {
			description: "ARIA label for the delete/clear icon.",
			control: "text",
			table: {
				category: "Accessibility",
				defaultValue: {
					summary: "Clear search",
				},
			},
		},
		historyDeleteAriaLabel: {
			description: "ARIA label for history delete buttons.",
			control: "text",
			table: {
				category: "Accessibility",
				defaultValue: {
					summary: "Remove from history",
				},
			},
		},
		dropdownAriaLabel: {
			description: "ARIA label for the suggestions dropdown.",
			control: "text",
			table: {
				category: "Accessibility",
				defaultValue: {
					summary: "Search suggestions and history",
				},
			},
		},
		suggestionAriaLabel: {
			description: "ARIA label prefix for suggestion items.",
			control: "text",
			table: {
				category: "Accessibility",
				defaultValue: {
					summary: "Search suggestion",
				},
			},
		},
		historyItemAriaLabel: {
			description: "ARIA label prefix for history items.",
			control: "text",
			table: {
				category: "Accessibility",
				defaultValue: {
					summary: "Search history item",
				},
			},
		},
		ifxSuggestionRequested: {
			action: "ifxSuggestionRequested",
			description:
				"Event triggered when the component requests suggestions for a query.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxSuggestionRequested={handleSuggestionRequest}\nVue: @ifxSuggestionRequested="handleSuggestionRequest"\nAngular: (ifxSuggestionRequested)="handleSuggestionRequest()"\nVanillaJs: .addEventListener("ifxSuggestionRequested", (event) => {//handle request});',
				},
			},
		},
		ifxSuggestionSelected: {
			action: "ifxSuggestionSelected",
			description:
				"Event triggered when a suggestion is selected from the dropdown.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxSuggestionSelected={handleSuggestionSelection}\nVue: @ifxSuggestionSelected="handleSuggestionSelection"\nAngular: (ifxSuggestionSelected)="handleSuggestionSelection()"\nVanillaJs: .addEventListener("ifxSuggestionSelected", (event) => {//handle selection});',
				},
			},
		},
		ifxFocus: {
			action: "ifxFocus",
			description: "Event triggered when the search field receives focus.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxFocus={handleFocus}\nVue: @ifxFocus="handleFocus"\nAngular: (ifxFocus)="handleFocus()"\nVanillaJs: .addEventListener("ifxFocus", (event) => {//handle focus});',
				},
			},
		},
		ifxBlur: {
			action: "ifxBlur",
			description: "Event triggered when the search field loses focus.",
			table: {
				category: "custom events",
				type: {
					summary: "Framework integration",
					detail:
						'React: onIfxBlur={handleBlur}\nVue: @ifxBlur="handleBlur"\nAngular: (ifxBlur)="handleBlur()"\nVanillaJs: .addEventListener("ifxBlur", (event) => {//handle blur});',
				},
			},
		},
	},
};

const DefaultTemplate = ({
	disabled,
	size,
	showDeleteIcon,
	placeholder,
	maxlength,
	value,
	autocomplete,
	showSuggestions,
	enableHistory,
	maxSuggestions,
	maxHistoryItems,
	historyKey,
	historyHeaderText,
	ariaLabelText,
	ariaLabelledBy,
	ariaDescribedBy,
	deleteIconAriaLabel,
	historyDeleteAriaLabel,
	dropdownAriaLabel,
	suggestionAriaLabel,
	historyItemAriaLabel,
}: Record<string, any>) => {
	const element: any = document.createElement("ifx-search-field");
	element.setAttribute("size", size);
	if (disabled) element.setAttribute("disabled", disabled);
	element.setAttribute("show-delete-icon", showDeleteIcon);
	element.setAttribute("show-suggestions", showSuggestions);
	element.setAttribute("enable-history", enableHistory);
	element.setAttribute("max-suggestions", maxSuggestions);
	element.setAttribute("max-history-items", maxHistoryItems);
	element.setAttribute("history-key", historyKey);
	element.setAttribute("history-header-text", historyHeaderText);
	element.setAttribute("value", value);
	element.setAttribute("autocomplete", autocomplete);
	if (placeholder !== undefined)
		element.setAttribute("placeholder", placeholder);
	if (maxlength !== undefined) element.setAttribute("maxlength", maxlength);
	if (ariaLabelText !== undefined) element.setAttribute("aria-label-text", ariaLabelText);
	if (ariaLabelledBy !== undefined)
		element.setAttribute("aria-labelledby", ariaLabelledBy);
	if (ariaDescribedBy !== undefined)
		element.setAttribute("aria-describedby", ariaDescribedBy);
	if (deleteIconAriaLabel !== undefined)
		element.setAttribute("delete-icon-aria-label", deleteIconAriaLabel);
	if (historyDeleteAriaLabel !== undefined)
		element.setAttribute("history-delete-aria-label", historyDeleteAriaLabel);
	if (dropdownAriaLabel !== undefined)
		element.setAttribute("dropdown-aria-label", dropdownAriaLabel);
	if (suggestionAriaLabel !== undefined)
		element.setAttribute("suggestion-aria-label", suggestionAriaLabel);
	if (historyItemAriaLabel !== undefined)
		element.setAttribute("history-item-aria-label", historyItemAriaLabel);

	// Set initial suggestions if showSuggestions is enabled
	setTimeout(() => {
		if (showSuggestions) {
			element.suggestions = genericMockSuggestions;
		}

		// Set up initial history if enabled - always reset for consistent demo
		if (enableHistory && typeof localStorage !== "undefined") {
			resetHistoryForStorybook(historyKey);
			// History will be loaded automatically when the component initializes
		}
	}, 100);

	// Event listeners
	element.addEventListener("ifxInput", action("ifxInput"));
	element.addEventListener(
		"ifxSuggestionRequested",
		action("ifxSuggestionRequested"),
	);
	element.addEventListener(
		"ifxSuggestionSelected",
		action("ifxSuggestionSelected"),
	);
	element.addEventListener("ifxFocus", action("ifxFocus"));
	element.addEventListener("ifxBlur", action("ifxBlur"));

	// Handle suggestion requests for Default story
	element.addEventListener("ifxSuggestionRequested", (event: any) => {
		const query = event.detail;
		if (query && showSuggestions) {
			// Filter suggestions based on query
			const filteredSuggestions = genericMockSuggestions.filter((s) =>
				s.text.toLowerCase().includes(query.toLowerCase()),
			);
			element.suggestions = filteredSuggestions;
		}
	});

	return element;
};

export const Default: any = DefaultTemplate.bind({});
Default.args = {
	showSuggestions: false,
	enableHistory: false,
	placeholder: "Search...",
};

export const WithSuggestions: any = DefaultTemplate.bind({});
WithSuggestions.args = {
	showSuggestions: true,
	enableHistory: true,
	historyKey: "storybook-search-with-suggestions",
	placeholder: "Search with suggestions...",
};
