import { useState } from 'react';
import { IfxButton, IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
  const [showDeleteIcon, setShowDeleteIcon] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [enableHistory, setEnableHistory] = useState(true);

  const toggleShowDeleteIcon = () => setShowDeleteIcon((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleShowSuggestions = () => setShowSuggestions((v) => !v);
  const toggleEnableHistory = () => setEnableHistory((v) => !v);

  const controlledProps = {
    "showDeleteIcon": showDeleteIcon,
    "disabled": disabled,
    "size": sizeOptions[sizeIndex],
    "showSuggestions": showSuggestions,
    "enableHistory": enableHistory,
  } as const;
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
    ["showSuggestions", controlledProps["showSuggestions"]],
    ["enableHistory", controlledProps["enableHistory"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxSearchField } from '@infineon/infineon-design-system-react';

export function IfxSearchFieldExample() {
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

  return (
      <IfxSearchField
        maxSuggestions={10}
        maxHistoryItems={5}
        historyKey="ifx-search-history"
        historyHeaderText="Recent Searches"
        value=""
        autocomplete="on"
        placeholder="Search..."
        ariaLabel="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item"
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected}
        onIfxFocus={handleFocus}
        onIfxBlur={handleBlur}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxSearchField
        maxSuggestions={10}
        maxHistoryItems={5}
        historyKey="ifx-search-history"
        historyHeaderText="Recent Searches"
        value=""
        autocomplete="on"
        placeholder="Search..."
        ariaLabel="Search field"
        deleteIconAriaLabel="Clear search"
        historyDeleteAriaLabel="Remove from history"
        dropdownAriaLabel="Search suggestions and history"
        suggestionAriaLabel="Search suggestion"
        historyItemAriaLabel="Search history item"
        onIfxInput={handleInput}
        onIfxSuggestionRequested={handleSuggestionRequested}
        onIfxSuggestionSelected={handleSuggestionSelected}
        onIfxFocus={handleFocus}
        onIfxBlur={handleBlur}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleShowDeleteIcon}>Toggle ShowDeleteIcon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowSuggestions}>Toggle ShowSuggestions</IfxButton>
        <IfxButton variant="secondary" onClick={toggleEnableHistory}>Toggle EnableHistory</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>showDeleteIcon:</b> {String(showDeleteIcon)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>showSuggestions:</b> {String(showSuggestions)}</div>
          <div><b>enableHistory:</b> {String(enableHistory)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

