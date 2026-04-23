import { useState } from 'react';
import { IfxButton, IfxSearchField, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  const [showDeleteIcon, setShowDeleteIcon] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [placeholder, setPlaceholder] = useState("Search...");
  const [maxlength, setMaxlength] = useState(0);
  const [value, setValue] = useState("");
  const [autocomplete, setAutocomplete] = useState("on");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [enableHistory, setEnableHistory] = useState(true);
  const [maxSuggestions, setMaxSuggestions] = useState(10);
  const [maxHistoryItems, setMaxHistoryItems] = useState(5);
  const [historyKey, setHistoryKey] = useState("ifx-search-history");
  const [historyHeaderText, setHistoryHeaderText] = useState("Recent Searches");
  const [ariaLabel, setAriaLabel] = useState("Search field");
  const [ariaLabelledBy, setAriaLabelledBy] = useState("");
  const [ariaDescribedBy, setAriaDescribedBy] = useState("");
  const [ariaControls, setAriaControls] = useState("");
  const [ariaExpanded, setAriaExpanded] = useState("");
  const [deleteIconAriaLabel, setDeleteIconAriaLabel] = useState("Clear search");
  const [historyDeleteAriaLabel, setHistoryDeleteAriaLabel] = useState("Remove from history");
  const [dropdownAriaLabel, setDropdownAriaLabel] = useState("Search suggestions and history");
  const [suggestionAriaLabel, setSuggestionAriaLabel] = useState("Search suggestion");
  const [historyItemAriaLabel, setHistoryItemAriaLabel] = useState("Search history item");

  const toggleShowDeleteIcon = () => setShowDeleteIcon((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const togglePlaceholder = (value: string) => setPlaceholder(value);
  const toggleMaxlength = (value: string) => setMaxlength(Number(value));
  const toggleValue = (value: string) => setValue(value);
  const toggleAutocomplete = (value: string) => setAutocomplete(value);
  const toggleShowSuggestions = () => setShowSuggestions((v) => !v);
  const toggleEnableHistory = () => setEnableHistory((v) => !v);
  const toggleMaxSuggestions = (value: string) => setMaxSuggestions(Number(value));
  const toggleMaxHistoryItems = (value: string) => setMaxHistoryItems(Number(value));
  const toggleHistoryKey = (value: string) => setHistoryKey(value);
  const toggleHistoryHeaderText = (value: string) => setHistoryHeaderText(value);
  const toggleAriaLabel = (value: string) => setAriaLabel(value);
  const toggleAriaLabelledBy = (value: string) => setAriaLabelledBy(value);
  const toggleAriaDescribedBy = (value: string) => setAriaDescribedBy(value);
  const toggleAriaControls = (value: string) => setAriaControls(value);
  const toggleAriaExpanded = (value: string) => setAriaExpanded(value);
  const toggleDeleteIconAriaLabel = (value: string) => setDeleteIconAriaLabel(value);
  const toggleHistoryDeleteAriaLabel = (value: string) => setHistoryDeleteAriaLabel(value);
  const toggleDropdownAriaLabel = (value: string) => setDropdownAriaLabel(value);
  const toggleSuggestionAriaLabel = (value: string) => setSuggestionAriaLabel(value);
  const toggleHistoryItemAriaLabel = (value: string) => setHistoryItemAriaLabel(value);

  const controlledProps = {
    "showDeleteIcon": showDeleteIcon,
    "disabled": disabled,
    "size": sizeOptions[sizeIndex],
    "placeholder": placeholder,
    "maxlength": maxlength,
    "value": value,
    "autocomplete": autocomplete,
    "showSuggestions": showSuggestions,
    "enableHistory": enableHistory,
    "maxSuggestions": maxSuggestions,
    "maxHistoryItems": maxHistoryItems,
    "historyKey": historyKey,
    "historyHeaderText": historyHeaderText,
    "ariaLabel": ariaLabel,
    "ariaLabelledBy": ariaLabelledBy,
    "ariaDescribedBy": ariaDescribedBy,
    "ariaControls": ariaControls,
    "ariaExpanded": ariaExpanded,
    "deleteIconAriaLabel": deleteIconAriaLabel,
    "historyDeleteAriaLabel": historyDeleteAriaLabel,
    "dropdownAriaLabel": dropdownAriaLabel,
    "suggestionAriaLabel": suggestionAriaLabel,
    "historyItemAriaLabel": historyItemAriaLabel,
  } as Record<string, unknown>;
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSuggestionRequested = (event: CustomEvent) => {
    console.log('ifxSuggestionRequested:', event);
    // Add your handler logic here
  };

  const handleSuggestionSelected = (event: CustomEvent) => {
    console.log('ifxSuggestionSelected:', event);
    // Add your handler logic here
  };

  const handleFocus = (event: CustomEvent) => {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  };

  const handleBlur = (event: CustomEvent) => {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  };

  const formatPropValueForCode = (value: unknown): string => {
		if (typeof value === "boolean") return `{${value}}`;
		if (typeof value === "number") return `{${value}}`;
		if (value === null) return "{null}";
		if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
			return `{${JSON.stringify(value)}}`;
		}
		const escaped = String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
		return `"${escaped}"`;
	};

	const controlledPropsCode = [
    ["showDeleteIcon", controlledProps["showDeleteIcon"]],
    ["disabled", controlledProps["disabled"]],
    ["size", controlledProps["size"]],
    ["placeholder", controlledProps["placeholder"]],
    ["maxlength", controlledProps["maxlength"]],
    ["value", controlledProps["value"]],
    ["autocomplete", controlledProps["autocomplete"]],
    ["showSuggestions", controlledProps["showSuggestions"]],
    ["enableHistory", controlledProps["enableHistory"]],
    ["maxSuggestions", controlledProps["maxSuggestions"]],
    ["maxHistoryItems", controlledProps["maxHistoryItems"]],
    ["historyKey", controlledProps["historyKey"]],
    ["historyHeaderText", controlledProps["historyHeaderText"]],
    ["ariaLabel", controlledProps["ariaLabel"]],
    ["ariaLabelledBy", controlledProps["ariaLabelledBy"]],
    ["ariaDescribedBy", controlledProps["ariaDescribedBy"]],
    ["ariaControls", controlledProps["ariaControls"]],
    ["ariaExpanded", controlledProps["ariaExpanded"]],
    ["deleteIconAriaLabel", controlledProps["deleteIconAriaLabel"]],
    ["historyDeleteAriaLabel", controlledProps["historyDeleteAriaLabel"]],
    ["dropdownAriaLabel", controlledProps["dropdownAriaLabel"]],
    ["suggestionAriaLabel", controlledProps["suggestionAriaLabel"]],
    ["historyItemAriaLabel", controlledProps["historyItemAriaLabel"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  const handleBlur = (event: CustomEvent) => {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  };

  const handleFocus = (event: CustomEvent) => {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSuggestionRequested = (event: CustomEvent) => {
    console.log('ifxSuggestionRequested:', event);
    // Add your handler logic here
  };

  const handleSuggestionSelected = (event: CustomEvent) => {
    console.log('ifxSuggestionSelected:', event);
    // Add your handler logic here
  };

  return (
      <IfxSearchField
        size="m"
        showDeleteIcon={true}
        showSuggestions={false}
        enableHistory={true}
        maxSuggestions={10}
        maxHistoryItems={5}
        historyKey="ifx-search-history"
        historyHeaderText="Recent Searches"
        value=""
        autocomplete="on"
        placeholder="Search..."
        ariaLabelText="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item"
        disabled={false}
        onIfxBlur={handleBlur}
        onIfxFocus={handleFocus}
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  const handleBlur = (event: CustomEvent) => {
    console.log('ifxBlur:', event);
    // Add your handler logic here
  };

  const handleFocus = (event: CustomEvent) => {
    console.log('ifxFocus:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSuggestionRequested = (event: CustomEvent) => {
    console.log('ifxSuggestionRequested:', event);
    // Add your handler logic here
  };

  const handleSuggestionSelected = (event: CustomEvent) => {
    console.log('ifxSuggestionSelected:', event);
    // Add your handler logic here
  };

  return (
      <IfxSearchField
        size="m"
        showDeleteIcon={true}
        showSuggestions={false}
        enableHistory={true}
        maxSuggestions={10}
        maxHistoryItems={5}
        historyKey="ifx-search-history"
        historyHeaderText="Recent Searches"
        value=""
        autocomplete="on"
        placeholder="Search..."
        ariaLabelText="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item"
        disabled={false}
        onIfxBlur={handleBlur}
        onIfxFocus={handleFocus}
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected} />
  );
}`;
