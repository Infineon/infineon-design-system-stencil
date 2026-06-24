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
  const [deleteIconAriaLabel, setDeleteIconAriaLabel] = useState("Clear search");
  const [historyDeleteAriaLabel, setHistoryDeleteAriaLabel] = useState("Remove from history");
  const [dropdownAriaLabel, setDropdownAriaLabel] = useState("Search suggestions and history");
  const [suggestionAriaLabel, setSuggestionAriaLabel] = useState("Search suggestion");
  const [historyItemAriaLabel, setHistoryItemAriaLabel] = useState("Search history item");

  const handleShowDeleteIconChange = () => setShowDeleteIcon((v) => !v);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handlePlaceholderChange = (value: string) => setPlaceholder(value);
  const handleMaxlengthChange = (value: string) => setMaxlength(Number(value));
  const handleValueChange = (value: string) => setValue(value);
  const handleAutocompleteChange = (value: string) => setAutocomplete(value);
  const handleShowSuggestionsChange = () => setShowSuggestions((v) => !v);
  const handleEnableHistoryChange = () => setEnableHistory((v) => !v);
  const handleMaxSuggestionsChange = (value: string) => setMaxSuggestions(Number(value));
  const handleMaxHistoryItemsChange = (value: string) => setMaxHistoryItems(Number(value));
  const handleHistoryKeyChange = (value: string) => setHistoryKey(value);
  const handleHistoryHeaderTextChange = (value: string) => setHistoryHeaderText(value);
  const handleAriaLabelTextChange = (value: string) => setAriaLabelText(value);
  const handleAriaLabelledByChange = (value: string) => setAriaLabelledBy(value);
  const handleAriaDescribedByChange = (value: string) => setAriaDescribedBy(value);
  const handleDeleteIconAriaLabelChange = (value: string) => setDeleteIconAriaLabel(value);
  const handleHistoryDeleteAriaLabelChange = (value: string) => setHistoryDeleteAriaLabel(value);
  const handleDropdownAriaLabelChange = (value: string) => setDropdownAriaLabel(value);
  const handleSuggestionAriaLabelChange = (value: string) => setSuggestionAriaLabel(value);
  const handleHistoryItemAriaLabelChange = (value: string) => setHistoryItemAriaLabel(value);

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
    "deleteIconAriaLabel": deleteIconAriaLabel,
    "historyDeleteAriaLabel": historyDeleteAriaLabel,
    "dropdownAriaLabel": dropdownAriaLabel,
    "suggestionAriaLabel": suggestionAriaLabel,
    "historyItemAriaLabel": historyItemAriaLabel,
  } as Record<string, unknown>;
  const getControlInputValue = (event: {
    detail?: unknown;
    target?: { value?: unknown } | null;
  }): string => {
    const detail = event.detail;

    if (typeof detail === "string" || typeof detail === "number") {
      return String(detail);
    }

    if (detail && typeof detail === "object" && "value" in detail) {
      return String((detail as { value?: unknown }).value ?? "");
    }

    return String(event.target?.value ?? "");
  };

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
        showDeleteIcon={String(controlledProps.showDeleteIcon ?? "true")}
        disabled={String(controlledProps.disabled ?? "false")}
        size={String(controlledProps.size ?? "m")}
        placeholder={String(controlledProps.placeholder ?? "Search...")}
        maxlength={String(controlledProps.maxlength ?? "")}
        value={String(controlledProps.value ?? "")}
        autocomplete={String(controlledProps.autocomplete ?? "on")}
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
        showDeleteIcon={String(controlledProps.showDeleteIcon ?? "true")}
        disabled={String(controlledProps.disabled ?? "false")}
        size={String(controlledProps.size ?? "m")}
        placeholder={String(controlledProps.placeholder ?? "Search...")}
        maxlength={String(controlledProps.maxlength ?? "")}
        value={String(controlledProps.value ?? "")}
        autocomplete={String(controlledProps.autocomplete ?? "on")}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleShowDeleteIconChange}>Toggle ShowDeleteIcon</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowSuggestionsChange}>Toggle ShowSuggestions</IfxButton>
        <IfxButton variant="secondary" onClick={handleEnableHistoryChange}>Toggle EnableHistory</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="placeholder" type="text" value={String(placeholder)} onIfxInput={(event) => handlePlaceholderChange(getControlInputValue(event))} />
        <IfxTextField label="maxlength" type="text" value={String(maxlength)} onIfxInput={(event) => handleMaxlengthChange(getControlInputValue(event))} />
        <IfxTextField label="value" type="text" value={String(value)} onIfxInput={(event) => handleValueChange(getControlInputValue(event))} />
        <IfxTextField label="autocomplete" type="text" value={String(autocomplete)} onIfxInput={(event) => handleAutocompleteChange(getControlInputValue(event))} />
        <IfxTextField label="maxSuggestions" type="text" value={String(maxSuggestions)} onIfxInput={(event) => handleMaxSuggestionsChange(getControlInputValue(event))} />
        <IfxTextField label="maxHistoryItems" type="text" value={String(maxHistoryItems)} onIfxInput={(event) => handleMaxHistoryItemsChange(getControlInputValue(event))} />
        <IfxTextField label="historyKey" type="text" value={String(historyKey)} onIfxInput={(event) => handleHistoryKeyChange(getControlInputValue(event))} />
        <IfxTextField label="historyHeaderText" type="text" value={String(historyHeaderText)} onIfxInput={(event) => handleHistoryHeaderTextChange(getControlInputValue(event))} />
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onIfxInput={(event) => handleAriaLabelTextChange(getControlInputValue(event))} />
        <IfxTextField label="ariaLabelledBy" type="text" value={String(ariaLabelledBy)} onIfxInput={(event) => handleAriaLabelledByChange(getControlInputValue(event))} />
        <IfxTextField label="ariaDescribedBy" type="text" value={String(ariaDescribedBy)} onIfxInput={(event) => handleAriaDescribedByChange(getControlInputValue(event))} />
        <IfxTextField label="deleteIconAriaLabel" type="text" value={String(deleteIconAriaLabel)} onIfxInput={(event) => handleDeleteIconAriaLabelChange(getControlInputValue(event))} />
        <IfxTextField label="historyDeleteAriaLabel" type="text" value={String(historyDeleteAriaLabel)} onIfxInput={(event) => handleHistoryDeleteAriaLabelChange(getControlInputValue(event))} />
        <IfxTextField label="dropdownAriaLabel" type="text" value={String(dropdownAriaLabel)} onIfxInput={(event) => handleDropdownAriaLabelChange(getControlInputValue(event))} />
        <IfxTextField label="suggestionAriaLabel" type="text" value={String(suggestionAriaLabel)} onIfxInput={(event) => handleSuggestionAriaLabelChange(getControlInputValue(event))} />
        <IfxTextField label="historyItemAriaLabel" type="text" value={String(historyItemAriaLabel)} onIfxInput={(event) => handleHistoryItemAriaLabelChange(getControlInputValue(event))} />
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

