import { useState } from 'react';
import { IfxButton, IfxDatePicker, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
  const [label, setLabel] = useState("Label Text");
  const [caption, setCaption] = useState("Caption text, description, error notification.");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const sizeOptions = ["s","l"];
  const [sizeIndex, setSizeIndex] = useState(0);
  const [value, setValue] = useState("");
  const [ariaLabelText, setAriaLabelText] = useState("Date Picker");
  const [required, setRequired] = useState(false);
  const [autocomplete, setAutocomplete] = useState("on");
  const typeOptions = ["date","datetime-local"];
  const [typeIndex, setTypeIndex] = useState(0);

  const handleLabelChange = (value: string) => setLabel(value);
  const handleCaptionChange = (value: string) => setCaption(value);
  const handleMinChange = (value: string) => setMin(value);
  const handleMaxChange = (value: string) => setMax(value);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleSuccessChange = () => setSuccess((v) => !v);
  const handleErrorChange = () => setError((v) => !v);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleValueChange = (value: string) => setValue(value);
  const handleAriaLabelTextChange = (value: string) => setAriaLabelText(value);
  const handleRequiredChange = () => setRequired((v) => !v);
  const handleAutocompleteChange = (value: string) => setAutocomplete(value);
  const handleTypeChange = () => setTypeIndex((i) => (i + 1) % typeOptions.length);

  const controlledProps = {
    "label": label,
    "caption": caption,
    "min": min,
    "max": max,
    "disabled": disabled,
    "success": success,
    "error": error,
    "size": sizeOptions[sizeIndex],
    "value": value,
    "ariaLabelText": ariaLabelText,
    "required": required,
    "autocomplete": autocomplete,
    "type": typeOptions[typeIndex],
  } as Record<string, unknown>;
  const handleDate = (event: CustomEvent) => {
    console.log('ifxDate:', event);
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
    ["label", controlledProps["label"]],
    ["caption", controlledProps["caption"]],
    ["min", controlledProps["min"]],
    ["max", controlledProps["max"]],
    ["disabled", controlledProps["disabled"]],
    ["success", controlledProps["success"]],
    ["error", controlledProps["error"]],
    ["size", controlledProps["size"]],
    ["value", controlledProps["value"]],
    ["ariaLabelText", controlledProps["ariaLabelText"]],
    ["required", controlledProps["required"]],
    ["autocomplete", controlledProps["autocomplete"]],
    ["type", controlledProps["type"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxDatePicker } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
  const handleDate = (event: CustomEvent) => {
    console.log('ifxDate:', event);
    // Add your handler logic here
  };

  return (
      <IfxDatePicker
        name="date-picker"
        onIfxDate={handleDate}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxDatePicker
        name="date-picker"
        onIfxDate={handleDate}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleSuccessChange}>Toggle Success</IfxButton>
        <IfxButton variant="secondary" onClick={handleErrorChange}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleRequiredChange}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={handleTypeChange}>Toggle Type</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => handleLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="caption" type="text" value={String(caption)} onInput={(event) => handleCaptionChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="min" type="text" value={String(min)} onInput={(event) => handleMinChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="max" type="text" value={String(max)} onInput={(event) => handleMaxChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => handleValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onInput={(event) => handleAriaLabelTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="autocomplete" type="text" value={String(autocomplete)} onInput={(event) => handleAutocompleteChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>label:</b> {String(label)}</div>
          <div><b>caption:</b> {String(caption)}</div>
          <div><b>min:</b> {String(min)}</div>
          <div><b>max:</b> {String(max)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>success:</b> {String(success)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>ariaLabelText:</b> {String(ariaLabelText)}</div>
          <div><b>required:</b> {String(required)}</div>
          <div><b>autocomplete:</b> {String(autocomplete)}</div>
          <div><b>type:</b> {String(typeOptions[typeIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

