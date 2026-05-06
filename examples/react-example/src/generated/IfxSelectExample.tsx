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

  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handlePlaceholderChange = () => setPlaceholder((v) => !v);
  const handlePlaceholderValueChange = (value: string) => setPlaceholderValue(value);
  const handleErrorChange = () => setError((v) => !v);
  const handleLabelChange = (value: string) => setLabel(value);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleCaptionChange = (value: string) => setCaption(value);
  const handleRequiredChange = () => setRequired((v) => !v);
  const handleShowSearchChange = () => setShowSearch((v) => !v);
  const handleShowClearButtonChange = () => setShowClearButton((v) => !v);
  const handleSearchPlaceholderValueChange = (value: string) => setSearchPlaceholderValue(value);
  const handleOptionsChange = (value: string) => setOptions(value);

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
  } as Record<string, unknown>;
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
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
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleSelect = (event: CustomEvent) => {
    console.log('ifxSelect:', event);
    // Add your handler logic here
  };

  return (
      <IfxSelect
        onIfxInput={handleInput}
        onIfxSelect={handleSelect}
        size={String(controlledProps.size ?? "m")}
        placeholder={String(controlledProps.placeholder ?? "true")}
        placeholderValue={String(controlledProps.placeholderValue ?? "Placeholder")}
        error={String(controlledProps.error ?? "false")}
        label={String(controlledProps.label ?? "")}
        disabled={String(controlledProps.disabled ?? "false")}
        caption={String(controlledProps.caption ?? "")}
        required={String(controlledProps.required ?? "true")}
        showSearch={String(controlledProps.showSearch ?? "true")}
        showClearButton={String(controlledProps.showClearButton ?? "true")}
        searchPlaceholderValue={String(controlledProps.searchPlaceholderValue ?? "Search...")}
        options={String(controlledProps.options ?? "[object Object],[object Object],[object Object]")}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSelect
        onIfxInput={handleInput}
        onIfxSelect={handleSelect}
        size={String(controlledProps.size ?? "m")}
        placeholder={String(controlledProps.placeholder ?? "true")}
        placeholderValue={String(controlledProps.placeholderValue ?? "Placeholder")}
        error={String(controlledProps.error ?? "false")}
        label={String(controlledProps.label ?? "")}
        disabled={String(controlledProps.disabled ?? "false")}
        caption={String(controlledProps.caption ?? "")}
        required={String(controlledProps.required ?? "true")}
        showSearch={String(controlledProps.showSearch ?? "true")}
        showClearButton={String(controlledProps.showClearButton ?? "true")}
        searchPlaceholderValue={String(controlledProps.searchPlaceholderValue ?? "Search...")}
        options={String(controlledProps.options ?? "[object Object],[object Object],[object Object]")}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handlePlaceholderChange}>Toggle Placeholder</IfxButton>
        <IfxButton variant="secondary" onClick={handleErrorChange}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleRequiredChange}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowSearchChange}>Toggle ShowSearch</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowClearButtonChange}>Toggle ShowClearButton</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="placeholderValue" type="text" value={String(placeholderValue)} onInput={(event) => handlePlaceholderValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => handleLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="caption" type="text" value={String(caption)} onInput={(event) => handleCaptionChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="searchPlaceholderValue" type="text" value={String(searchPlaceholderValue)} onInput={(event) => handleSearchPlaceholderValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="options" type="text" value={String(options)} onInput={(event) => handleOptionsChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
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
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

