import { useState } from 'react';
import { IfxButton, IfxDatePicker } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const sizeOptions = ["s","l"];
  const [sizeIndex, setSizeIndex] = useState(0);
  const [required, setRequired] = useState(false);
  const typeOptions = ["date","datetime-local"];
  const [typeIndex, setTypeIndex] = useState(0);

  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleSuccess = () => setSuccess((v) => !v);
  const toggleError = () => setError((v) => !v);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleRequired = () => setRequired((v) => !v);
  const toggleType = () => setTypeIndex((i) => (i + 1) % typeOptions.length);

  const controlledProps = {
    "disabled": disabled,
    "success": success,
    "error": error,
    "size": sizeOptions[sizeIndex],
    "required": required,
    "type": typeOptions[typeIndex],
  } as const;
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
    ["disabled", controlledProps["disabled"]],
    ["success", controlledProps["success"]],
    ["error", controlledProps["error"]],
    ["size", controlledProps["size"]],
    ["required", controlledProps["required"]],
    ["type", controlledProps["type"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxDatePicker } from '@infineon/infineon-design-system-react';

export function IfxDatePickerExample() {
  const handleDate = (event: CustomEvent) => {
    console.log('ifxDate:', event);
    // Add your handler logic here
  };

  return (
      <IfxDatePicker
        name="date-picker"
        value=""
        max=""
        min=""
        label="Label Text"
        caption="Caption text, description, error notification."
        ariaLabelText="Date Picker"
        autocomplete="on"
        onIfxDate={handleDate}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxDatePicker
        name="date-picker"
        value=""
        max=""
        min=""
        label="Label Text"
        caption="Caption text, description, error notification."
        ariaLabelText="Date Picker"
        autocomplete="on"
        onIfxDate={handleDate}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSuccess}>Toggle Success</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={toggleType}>Toggle Type</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>success:</b> {String(success)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>required:</b> {String(required)}</div>
          <div><b>type:</b> {String(typeOptions[typeIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

