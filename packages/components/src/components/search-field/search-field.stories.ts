import { action } from "storybook/actions";

// Generic Lorem Ipsum mock suggestions for all stories
const genericMockSuggestions = [
	// Short suggestions without scope
	{ id: "short1", text: "Lorem", type: "suggestion" as const },
	{ id: "short2", text: "Ipsum", type: "suggestion" as const },
	{ id: "short3", text: "Dolor", type: "suggestion" as const },
	{ id: "short4", text: "Sit", type: "suggestion" as const },
	{ id: "short5", text: "Amet", type: "suggestion" as const },

	// Medium suggestions with scope
	{
		id: "medium1",
		text: "Lorem ipsum",
		type: "suggestion" as const,
		scope: "Consectetur",
		resultCount: 1247,
	},
	{
		id: "medium2",
		text: "Dolor sit",
		type: "suggestion" as const,
		scope: "Adipiscing",
		resultCount: 892,
	},
	{
		id: "medium3",
		text: "Consectetur adipiscing",
		type: "suggestion" as const,
		scope: "Elite",
		resultCount: 567,
	},
	{
		id: "medium4",
		text: "Sed do eiusmod",
		type: "suggestion" as const,
		scope: "Tempor",
		resultCount: 2341,
	},
	{
		id: "medium5",
		text: "Ut labore",
		type: "suggestion" as const,
		scope: "Dolore",
		resultCount: 1098,
	},

	// Medium suggestions without scope
	{ id: "medium6", text: "Magna aliqua", type: "suggestion" as const },
	{ id: "medium7", text: "Enim ad minim", type: "suggestion" as const },
	{ id: "medium8", text: "Veniam quis", type: "suggestion" as const },
	{ id: "medium9", text: "Nostrud exercitation", type: "suggestion" as const },
	{ id: "medium10", text: "Ullamco laboris", type: "suggestion" as const },

	// Long suggestions with scope and result count
	{
		id: "long1",
		text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
		type: "suggestion" as const,
		scope: "Fugiat nulla pariatur",
		resultCount: 156,
	},
	{
		id: "long2",
		text: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
		type: "suggestion" as const,
		scope: "Deserunt mollit anim",
		resultCount: 789,
	},
	{
		id: "long3",
		text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
		type: "suggestion" as const,
		scope: "Doloremque laudantium",
		resultCount: 234,
	},

	// Long suggestions without scope
	{
		id: "long4",
		text: "Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt",
		type: "suggestion" as const,
	},
	{
		id: "long5",
		text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores",
		type: "suggestion" as const,
	},

	// Medium suggestions with scope but no result count
	{
		id: "scope1",
		text: "Neque porro quisquam",
		type: "suggestion" as const,
		scope: "Adipisci velit",
	},
	{
		id: "scope2",
		text: "Ut enim ad minima",
		type: "suggestion" as const,
		scope: "Veniam quis nostrum",
	},
	{
		id: "scope3",
		text: "Quis autem vel eum",
		type: "suggestion" as const,
		scope: "Iure reprehenderit",
	},

	// Long scope names for truncation testing
	{
		id: "longscope1",
		text: "Temporibus autem",
		type: "suggestion" as const,
		scope:
			"Quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet",
		resultCount: 445,
	},
	{
		id: "longscope2",
		text: "Et harum quidem",
		type: "suggestion" as const,
		scope: "Rerum facilis est et expedita distinctio nam libero tempore",
		resultCount: 1876,
	},

	// Very long text for extreme truncation testing
	{
		id: "extreme1",
		text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
		type: "suggestion" as const,
		scope:
			"Similique sunt in culpa qui officia deserunt mollitia animi id est laborum et dolorum fuga",
		resultCount: 999,
	},

	// Additional variety
	{
		id: "misc1",
		text: "Itaque earum rerum",
		type: "suggestion" as const,
		scope: "Hic tenetur",
		resultCount: 1567,
	},
	{ id: "misc2", text: "Sapiente delectus", type: "suggestion" as const },
	{
		id: "misc3",
		text: "Aut reiciendis",
		type: "suggestion" as const,
		scope: "Voluptatibus maiores",
		resultCount: 823,
	},
	{ id: "misc4", text: "Alias consequatur", type: "suggestion" as const },
	{
		id: "misc5",
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
		size: "m",
		value: "",
		placeholder: "Search...",
		autocomplete: "on",
		showSuggestions: false,
		enableHistory: true,
		maxSuggestions: 10,
		maxHistoryItems: 5,
		historyKey: "ifx-search-history",
		historyHeaderText: "Recent Searches",
		ariaLabel: "Search field",
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
			description: "Size options: s (36px) and m (40px) - default: m.",
			control: "radio",
			options: ["s", "m"],
			table: {
				category: "ifx-search-field props",
				defaultValue: {
					summary: "m",
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
		ariaLabel: {
			description: "ARIA label for the search field component.",
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

		ariaControls: {
			description:
				"Identifies the ID of the dropdown element that this input controls.",
			control: "text",
			table: {
				category: "Accessibility",
			},
		},

		ariaExpanded: {
			description:
				"Indicates whether the dropdown is currently open (true) or closed (false).",
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
	ariaLabel,
	ariaLabelledBy,
	ariaDescribedBy,
	ariaExpanded,
	ariaControls,
	deleteIconAriaLabel,
	historyDeleteAriaLabel,
	dropdownAriaLabel,
	suggestionAriaLabel,
	historyItemAriaLabel,
}) => {
	const element = document.createElement("ifx-search-field");
	element.setAttribute("size", size);
	element.setAttribute("disabled", disabled);
	element.setAttribute("show-delete-icon", showDeleteIcon);
	element.setAttribute("show-suggestions", showSuggestions);
	element.setAttribute("enable-history", enableHistory);
	element.setAttribute("max-suggestions", maxSuggestions);
	element.setAttribute("max-history-items", maxHistoryItems);
	element.setAttribute("history-key", historyKey);
	element.setAttribute("history-header-text", historyHeaderText);
	element.setAttribute("value", value);
	element.setAttribute("autocomplete", autocomplete);
	if (placeholder != undefined)
		element.setAttribute("placeholder", placeholder);
	if (maxlength != undefined) element.setAttribute("maxlength", maxlength);
	if (ariaLabel != undefined) element.setAttribute("aria-label", ariaLabel);
	if (ariaLabelledBy != undefined)
		element.setAttribute("aria-labelledby", ariaLabelledBy);
	if (ariaDescribedBy != undefined)
		element.setAttribute("aria-describedby", ariaDescribedBy);
	if (ariaExpanded != undefined)
		element.setAttribute("aria-expanded", ariaExpanded);
	if (ariaControls != undefined)
		element.setAttribute("aria-controls", ariaControls);
	if (deleteIconAriaLabel != undefined)
		element.setAttribute("delete-icon-aria-label", deleteIconAriaLabel);
	if (historyDeleteAriaLabel != undefined)
		element.setAttribute("history-delete-aria-label", historyDeleteAriaLabel);
	if (dropdownAriaLabel != undefined)
		element.setAttribute("dropdown-aria-label", dropdownAriaLabel);
	if (suggestionAriaLabel != undefined)
		element.setAttribute("suggestion-aria-label", suggestionAriaLabel);
	if (historyItemAriaLabel != undefined)
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
	element.addEventListener("ifxSuggestionRequested", (event) => {
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

export const Default = DefaultTemplate.bind({});

// Template for Dropdown Search Field with suggestions and history
const DropdownTemplate = ({
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
	ariaLabel,
	ariaLabelledBy,
	ariaDescribedBy,
	ariaExpanded,
	ariaControls,
	deleteIconAriaLabel,
	historyDeleteAriaLabel,
	dropdownAriaLabel,
	suggestionAriaLabel,
	historyItemAriaLabel,
}) => {
	const element = document.createElement("ifx-search-field");
	element.setAttribute("size", size);
	element.setAttribute("disabled", disabled);
	element.setAttribute("show-delete-icon", showDeleteIcon);
	element.setAttribute("show-suggestions", showSuggestions);
	element.setAttribute("enable-history", enableHistory);
	element.setAttribute("max-suggestions", maxSuggestions);
	element.setAttribute("max-history-items", maxHistoryItems);
	element.setAttribute("history-key", historyKey);
	element.setAttribute("history-header-text", historyHeaderText);
	element.setAttribute("value", value);
	element.setAttribute("autocomplete", autocomplete);
	if (placeholder != undefined)
		element.setAttribute("placeholder", placeholder);
	if (maxlength != undefined) element.setAttribute("maxlength", maxlength);
	if (ariaLabel != undefined) element.setAttribute("aria-label", ariaLabel);
	if (ariaLabelledBy != undefined)
		element.setAttribute("aria-labelledby", ariaLabelledBy);
	if (ariaDescribedBy != undefined)
		element.setAttribute("aria-describedby", ariaDescribedBy);
	if (ariaControls != undefined)
		element.setAttribute("aria-controls", ariaControls);
	if (ariaExpanded != undefined)
		element.setAttribute("aria-expanded", ariaExpanded);
	if (deleteIconAriaLabel != undefined)
		element.setAttribute("delete-icon-aria-label", deleteIconAriaLabel);
	if (historyDeleteAriaLabel != undefined)
		element.setAttribute("history-delete-aria-label", historyDeleteAriaLabel);
	if (dropdownAriaLabel != undefined)
		element.setAttribute("dropdown-aria-label", dropdownAriaLabel);
	if (suggestionAriaLabel != undefined)
		element.setAttribute("suggestion-aria-label", suggestionAriaLabel);
	if (historyItemAriaLabel != undefined)
		element.setAttribute("history-item-aria-label", historyItemAriaLabel);

	// Initialize with mock data
	setTimeout(() => {
		// Set suggestions - use the same generic mockup as Default story
		element.suggestions = genericMockSuggestions;

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

	// Handle suggestion requests
	element.addEventListener("ifxSuggestionRequested", (event) => {
		const query = event.detail;
		if (query) {
			// Filter suggestions based on query - use the same generic mockup
			const filteredSuggestions = genericMockSuggestions.filter((s) =>
				s.text.toLowerCase().includes(query.toLowerCase()),
			);
			element.suggestions = filteredSuggestions;
		}
	});

	return element;
};

export const SearchSuggestions = DropdownTemplate.bind({});
SearchSuggestions.args = {
	showDeleteIcon: true,
	disabled: false,
	size: "m",
	value: "",
	placeholder: "Search with suggestions...",
	autocomplete: "off",
	showSuggestions: true,
	enableHistory: true,
	maxSuggestions: 10,
	maxHistoryItems: 5,
	historyKey: "storybook-search-history",
	historyHeaderText: "Recent Searches",
	ariaLabel: "Search field",
	deleteIconAriaLabel: "Clear search",
	historyDeleteAriaLabel: "Remove from history",
	dropdownAriaLabel: "Search suggestions and history",
	suggestionAriaLabel: "Search suggestion",
	historyItemAriaLabel: "Search history item",
};
