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
  const [ariaLabelText, setAriaLabelText] = useState("Search field");
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
  const toggleAriaLabelText = (value: string) => setAriaLabelText(value);
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
    "ariaLabelText": ariaLabelText,
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
    ["ariaLabelText", controlledProps["ariaLabelText"]],
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
        onIfxBlur={handleBlur}
        onIfxFocus={handleFocus}
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSearchField
        onIfxBlur={handleBlur}
        onIfxFocus={handleFocus}
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleShowDeleteIcon}>Toggle ShowDeleteIcon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowSuggestions}>Toggle ShowSuggestions</IfxButton>
        <IfxButton variant="secondary" onClick={toggleEnableHistory}>Toggle EnableHistory</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="placeholder" type="text" value={String(placeholder)} onInput={(event) => togglePlaceholder(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="maxlength" type="text" value={String(maxlength)} onInput={(event) => toggleMaxlength(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => toggleValue(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="autocomplete" type="text" value={String(autocomplete)} onInput={(event) => toggleAutocomplete(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="maxSuggestions" type="text" value={String(maxSuggestions)} onInput={(event) => toggleMaxSuggestions(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="maxHistoryItems" type="text" value={String(maxHistoryItems)} onInput={(event) => toggleMaxHistoryItems(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="historyKey" type="text" value={String(historyKey)} onInput={(event) => toggleHistoryKey(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="historyHeaderText" type="text" value={String(historyHeaderText)} onInput={(event) => toggleHistoryHeaderText(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onInput={(event) => toggleAriaLabelText(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaLabelledBy" type="text" value={String(ariaLabelledBy)} onInput={(event) => toggleAriaLabelledBy(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaDescribedBy" type="text" value={String(ariaDescribedBy)} onInput={(event) => toggleAriaDescribedBy(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaControls" type="text" value={String(ariaControls)} onInput={(event) => toggleAriaControls(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaExpanded" type="text" value={String(ariaExpanded)} onInput={(event) => toggleAriaExpanded(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="deleteIconAriaLabel" type="text" value={String(deleteIconAriaLabel)} onInput={(event) => toggleDeleteIconAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="historyDeleteAriaLabel" type="text" value={String(historyDeleteAriaLabel)} onInput={(event) => toggleHistoryDeleteAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="dropdownAriaLabel" type="text" value={String(dropdownAriaLabel)} onInput={(event) => toggleDropdownAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="suggestionAriaLabel" type="text" value={String(suggestionAriaLabel)} onInput={(event) => toggleSuggestionAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="historyItemAriaLabel" type="text" value={String(historyItemAriaLabel)} onInput={(event) => toggleHistoryItemAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>showDeleteIcon:</b> {String(showDeleteIcon)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>placeholder:</b> {String(placeholder)}</div>
          <div><b>maxlength:</b> {String(maxlength)}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>autocomplete:</b> {String(autocomplete)}</div>
          <div><b>showSuggestions:</b> {String(showSuggestions)}</div>
          <div><b>enableHistory:</b> {String(enableHistory)}</div>
          <div><b>maxSuggestions:</b> {String(maxSuggestions)}</div>
          <div><b>maxHistoryItems:</b> {String(maxHistoryItems)}</div>
          <div><b>historyKey:</b> {String(historyKey)}</div>
          <div><b>historyHeaderText:</b> {String(historyHeaderText)}</div>
          <div><b>ariaLabelText:</b> {String(ariaLabelText)}</div>
          <div><b>ariaLabelledBy:</b> {String(ariaLabelledBy)}</div>
          <div><b>ariaDescribedBy:</b> {String(ariaDescribedBy)}</div>
          <div><b>ariaControls:</b> {String(ariaControls)}</div>
          <div><b>ariaExpanded:</b> {String(ariaExpanded)}</div>
          <div><b>deleteIconAriaLabel:</b> {String(deleteIconAriaLabel)}</div>
          <div><b>historyDeleteAriaLabel:</b> {String(historyDeleteAriaLabel)}</div>
          <div><b>dropdownAriaLabel:</b> {String(dropdownAriaLabel)}</div>
          <div><b>suggestionAriaLabel:</b> {String(suggestionAriaLabel)}</div>
          <div><b>historyItemAriaLabel:</b> {String(historyItemAriaLabel)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

