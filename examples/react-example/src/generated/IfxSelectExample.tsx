import { useState } from 'react';
import { IfxButton, IfxSelect } from '@infineon/infineon-design-system-react';

export function IfxSelectExample() {
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [placeholder, setPlaceholder] = useState(true);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showClearButton, setShowClearButton] = useState(true);

  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const togglePlaceholder = () => setPlaceholder((v) => !v);
  const toggleError = () => setError((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleRequired = () => setRequired((v) => !v);
  const toggleShowSearch = () => setShowSearch((v) => !v);
  const toggleShowClearButton = () => setShowClearButton((v) => !v);

  const controlledProps = {
    "size": sizeOptions[sizeIndex],
    "placeholder": placeholder,
    "error": error,
    "disabled": disabled,
    "required": required,
    "showSearch": showSearch,
    "showClearButton": showClearButton,
  } as const;
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
    ["error", controlledProps["error"]],
    ["disabled", controlledProps["disabled"]],
    ["required", controlledProps["required"]],
    ["showSearch", controlledProps["showSearch"]],
    ["showClearButton", controlledProps["showClearButton"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxSelect } from '@infineon/infineon-design-system-react';

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
        searchPlaceholderValue="Search..."
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={JSON.parse(\`[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]\`)}
        onIfxSelect={handleSelect}
        onIfxInput={handleInput}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxSelect
        searchPlaceholderValue="Search..."
        label=""
        caption=""
        placeholderValue="Placeholder"
        options={JSON.parse(`[{"value":"a","label":"option a","selected":false},{"value":"b","label":"option b","selected":false},{"value":"c","label":"option c","selected":false}]`)}
        onIfxSelect={handleSelect}
        onIfxInput={handleInput}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={togglePlaceholder}>Toggle Placeholder</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowSearch}>Toggle ShowSearch</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowClearButton}>Toggle ShowClearButton</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>placeholder:</b> {String(placeholder)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>required:</b> {String(required)}</div>
          <div><b>showSearch:</b> {String(showSearch)}</div>
          <div><b>showClearButton:</b> {String(showClearButton)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

