import { useState } from 'react';
import { IfxButton, IfxSelect, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [placeholder, setPlaceholder] = useState(true);
  const [placeholderValue, setPlaceholderValue] = useState("Placeholder");
  const [error, setError] = useState(false);
  const [label, setLabel] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [caption, setCaption] = useState("");
  const [required, setRequired] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showClearButton, setShowClearButton] = useState(true);
  const [searchPlaceholderValue, setSearchPlaceholderValue] = useState("Search...");
  const [options, setOptions] = useState("[{\"value\":\"a\",\"label\":\"option a\",\"selected\":false},{\"value\":\"b\",\"label\":\"option b\",\"selected\":false},{\"value\":\"c\",\"label\":\"option c\",\"selected\":false}]");
  const [clearSelection, setClearSelection] = useState("");

  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const togglePlaceholder = () => setPlaceholder((v) => !v);
  const togglePlaceholderValue = (value: string) => setPlaceholderValue(value);
  const toggleError = () => setError((v) => !v);
  const toggleLabel = (value: string) => setLabel(value);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleCaption = (value: string) => setCaption(value);
  const toggleRequired = () => setRequired((v) => !v);
  const toggleShowSearch = () => setShowSearch((v) => !v);
  const toggleShowClearButton = () => setShowClearButton((v) => !v);
  const toggleSearchPlaceholderValue = (value: string) => setSearchPlaceholderValue(value);
  const toggleOptions = (value: string) => setOptions(value);
  const toggleClearSelection = (value: string) => setClearSelection(value);

  const controlledProps = {
    "size": sizeOptions[sizeIndex],
    "placeholder": placeholder,
    "placeholderValue": placeholderValue,
    "error": error,
    "label": label,
    "disabled": disabled,
    "caption": caption,
    "required": required,
    "showSearch": showSearch,
    "showClearButton": showClearButton,
    "searchPlaceholderValue": searchPlaceholderValue,
    "options": options,
    "clearSelection": clearSelection,
  } as Record<string, unknown>;
  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
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
    ["size", controlledProps["size"]],
    ["placeholder", controlledProps["placeholder"]],
    ["placeholderValue", controlledProps["placeholderValue"]],
    ["error", controlledProps["error"]],
    ["label", controlledProps["label"]],
    ["disabled", controlledProps["disabled"]],
    ["caption", controlledProps["caption"]],
    ["required", controlledProps["required"]],
    ["showSearch", controlledProps["showSearch"]],
    ["showClearButton", controlledProps["showClearButton"]],
    ["searchPlaceholderValue", controlledProps["searchPlaceholderValue"]],
    ["options", controlledProps["options"]],
    ["clearSelection", controlledProps["clearSelection"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  return (
      <IfxSelect
        onIfxSelect={handleSelect}
        onIfxInput={handleInput}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSelect
        onIfxSelect={handleSelect}
        onIfxInput={handleInput}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={togglePlaceholder}>Toggle Placeholder</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowSearch}>Toggle ShowSearch</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowClearButton}>Toggle ShowClearButton</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="placeholderValue" type="text" value={String(placeholderValue)} onInput={(event) => togglePlaceholderValue(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => toggleLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="caption" type="text" value={String(caption)} onInput={(event) => toggleCaption(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="searchPlaceholderValue" type="text" value={String(searchPlaceholderValue)} onInput={(event) => toggleSearchPlaceholderValue(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="options" type="text" value={String(options)} onInput={(event) => toggleOptions(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="clearSelection" type="text" value={String(clearSelection)} onInput={(event) => toggleClearSelection(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>placeholder:</b> {String(placeholder)}</div>
          <div><b>placeholderValue:</b> {String(placeholderValue)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>label:</b> {String(label)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>caption:</b> {String(caption)}</div>
          <div><b>required:</b> {String(required)}</div>
          <div><b>showSearch:</b> {String(showSearch)}</div>
          <div><b>showClearButton:</b> {String(showClearButton)}</div>
          <div><b>searchPlaceholderValue:</b> {String(searchPlaceholderValue)}</div>
          <div><b>options:</b> {String(options)}</div>
          <div><b>clearSelection:</b> {String(clearSelection)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

