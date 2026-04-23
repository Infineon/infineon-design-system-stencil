import { useState } from 'react';
import { IfxButton, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");
  const [autocomplete, setAutocomplete] = useState("on");
  const [maxlength, setMaxlength] = useState(0);

  const toggleIsOpen = () => setIsOpen((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleValue = (value: string) => setValue(value);
  const toggleAutocomplete = (value: string) => setAutocomplete(value);
  const toggleMaxlength = (value: string) => setMaxlength(Number(value));

  const controlledProps = {
    "isOpen": isOpen,
    "disabled": disabled,
    "value": value,
    "autocomplete": autocomplete,
    "maxlength": maxlength,
  } as Record<string, unknown>;
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
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
    ["isOpen", controlledProps["isOpen"]],
    ["disabled", controlledProps["disabled"]],
    ["value", controlledProps["value"]],
    ["autocomplete", controlledProps["autocomplete"]],
    ["maxlength", controlledProps["maxlength"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  return (
      <IfxSearchBar
        onIfxInput={handleInput}
        onIfxOpen={handleOpen}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSearchBar
        isOpen={true}
        disabled={false}
        value=""
        showCloseButton={true}
        autocomplete="on"
        onIfxInput={handleInput}
        onIfxOpen={handleOpen}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleIsOpen}>Toggle IsOpen</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => toggleValue(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="autocomplete" type="text" value={String(autocomplete)} onInput={(event) => toggleAutocomplete(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="maxlength" type="text" value={String(maxlength)} onInput={(event) => toggleMaxlength(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>isOpen:</b> {String(isOpen)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>autocomplete:</b> {String(autocomplete)}</div>
          <div><b>maxlength:</b> {String(maxlength)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  return (
      <IfxSearchBar
        isOpen={true}
        disabled={false}
        value=""
        showCloseButton={true}
        autocomplete="on"
        onIfxInput={handleInput}
        onIfxOpen={handleOpen} />
  );
}`;
