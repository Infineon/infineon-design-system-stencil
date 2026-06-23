import { useState } from 'react';
import { IfxButton, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSearchBarExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState("");
  const [autocomplete, setAutocomplete] = useState("on");
  const [maxlength, setMaxlength] = useState(0);
  const [showCloseButton, setShowCloseButton] = useState(true);

  const handleIsOpenChange = () => setIsOpen((v) => !v);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleValueChange = (value: string) => setValue(value);
  const handleAutocompleteChange = (value: string) => setAutocomplete(value);
  const handleMaxlengthChange = (value: string) => setMaxlength(Number(value));
  const handleShowCloseButtonChange = () => setShowCloseButton((v) => !v);

  const controlledProps = {
    "isOpen": isOpen,
    "disabled": disabled,
    "value": value,
    "autocomplete": autocomplete,
    "maxlength": maxlength,
    "showCloseButton": showCloseButton,
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
    ["showCloseButton", controlledProps["showCloseButton"]],
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
        isOpen={String(controlledProps.isOpen ?? "true")}
        disabled={String(controlledProps.disabled ?? "false")}
        value={String(controlledProps.value ?? "")}
        autocomplete={String(controlledProps.autocomplete ?? "on")}
        maxlength={String(controlledProps.maxlength ?? "")}
        showCloseButton={String(controlledProps.showCloseButton ?? "true")}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSearchBar
        onIfxInput={handleInput}
        onIfxOpen={handleOpen}
        isOpen={String(controlledProps.isOpen ?? "true")}
        disabled={String(controlledProps.disabled ?? "false")}
        value={String(controlledProps.value ?? "")}
        autocomplete={String(controlledProps.autocomplete ?? "on")}
        maxlength={String(controlledProps.maxlength ?? "")}
        showCloseButton={String(controlledProps.showCloseButton ?? "true")}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleIsOpenChange}>Toggle IsOpen</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowCloseButtonChange}>Toggle ShowCloseButton</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="value" type="text" value={String(value)} onIfxInput={(event) => handleValueChange(getControlInputValue(event))} />
        <IfxTextField label="autocomplete" type="text" value={String(autocomplete)} onIfxInput={(event) => handleAutocompleteChange(getControlInputValue(event))} />
        <IfxTextField label="maxlength" type="text" value={String(maxlength)} onIfxInput={(event) => handleMaxlengthChange(getControlInputValue(event))} />
	      </div>

	      <div className="state">
	          <div><b>isOpen:</b> {String(isOpen)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>autocomplete:</b> {String(autocomplete)}</div>
          <div><b>maxlength:</b> {String(maxlength)}</div>
          <div><b>showCloseButton:</b> {String(showCloseButton)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

