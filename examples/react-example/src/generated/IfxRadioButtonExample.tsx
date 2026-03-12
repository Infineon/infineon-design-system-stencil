import { useState } from 'react';
import { IfxButton, IfxRadioButton, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonExample() {
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [label, setLabel] = useState("Text");
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(0);
  const [name, setName] = useState("radio-button");
  const [value, setValue] = useState("radio");

  const toggleError = () => setError((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleChecked = () => setChecked((v) => !v);
  const toggleLabel = (value: string) => setLabel(value);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleName = (value: string) => setName(value);
  const toggleValue = (value: string) => setValue(value);

  const controlledProps = {
    "error": error,
    "disabled": disabled,
    "checked": checked,
    "label": label,
    "size": sizeOptions[sizeIndex],
    "name": name,
    "value": value,
  } as Record<string, unknown>;
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
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
    ["error", controlledProps["error"]],
    ["disabled", controlledProps["disabled"]],
    ["checked", controlledProps["checked"]],
    ["size", controlledProps["size"]],
    ["name", controlledProps["name"]],
    ["value", controlledProps["value"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxRadioButton } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

  return (
      <IfxRadioButton
        onIfxChange={handleChange}
        onIfxError={handleError}
        __CONTROLLED_PROPS__>
        __CONTROLLED_TEXT_LABEL__
      </IfxRadioButton>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const escapedText = String(controlledProps["label"] ?? "")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");

	const codeString = codeStringWithProps.replace("__CONTROLLED_TEXT_LABEL__", escapedText);
	return (
    <>
      <IfxRadioButton
        onIfxChange={handleChange}
        onIfxError={handleError}
        {...(controlledProps as any)}>
        {String(label)}
      </IfxRadioButton>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleChecked}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => toggleLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="name" type="text" value={String(name)} onInput={(event) => toggleName(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => toggleValue(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>error:</b> {String(error)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>checked:</b> {String(checked)}</div>
          <div><b>label:</b> {String(label)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>name:</b> {String(name)}</div>
          <div><b>value:</b> {String(value)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

