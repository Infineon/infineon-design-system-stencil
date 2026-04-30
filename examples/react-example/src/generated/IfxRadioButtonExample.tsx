import { useState } from 'react';
import { IfxButton, IfxRadioButton, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonExample() {
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(0);
  const [name, setName] = useState("radio-button");
  const [value, setValue] = useState("radio");

  const handleErrorChange = () => setError((v) => !v);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleCheckedChange = () => setChecked((v) => !v);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleNameChange = (value: string) => setName(value);
  const handleValueChange = (value: string) => setValue(value);

  const controlledProps = {
    "error": error,
    "disabled": disabled,
    "checked": checked,
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
        Text
      </IfxRadioButton>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxRadioButton
        onIfxChange={handleChange}
        onIfxError={handleError}
        {...(controlledProps as any)}>
        Text
      </IfxRadioButton>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleErrorChange}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleCheckedChange}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="name" type="text" value={String(name)} onInput={(event) => handleNameChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => handleValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>error:</b> {String(error)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>checked:</b> {String(checked)}</div>
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

