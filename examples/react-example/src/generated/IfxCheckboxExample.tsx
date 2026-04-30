import { useState } from 'react';
import { IfxButton, IfxCheckbox, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxCheckboxExample() {
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(0);
  const [name, setName] = useState("checkbox");

  const handleErrorChange = () => setError((v) => !v);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleCheckedChange = () => setChecked((v) => !v);
  const handleIndeterminateChange = () => setIndeterminate((v) => !v);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleNameChange = (value: string) => setName(value);

  const controlledProps = {
    "error": error,
    "disabled": disabled,
    "checked": checked,
    "indeterminate": indeterminate,
    "size": sizeOptions[sizeIndex],
    "name": name,
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
    ["indeterminate", controlledProps["indeterminate"]],
    ["size", controlledProps["size"]],
    ["name", controlledProps["name"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxCheckbox } from '@infineon/infineon-design-system-react';

export function IfxCheckboxExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

  return (
      <IfxCheckbox
        onIfxChange={handleChange}
        onIfxError={handleError}
        __CONTROLLED_PROPS__>
        Text
      </IfxCheckbox>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxCheckbox
        onIfxChange={handleChange}
        onIfxError={handleError}
        {...(controlledProps as any)}>
        Text
      </IfxCheckbox>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleErrorChange}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleCheckedChange}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={handleIndeterminateChange}>Toggle Indeterminate</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="name" type="text" value={String(name)} onInput={(event) => handleNameChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>error:</b> {String(error)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>checked:</b> {String(checked)}</div>
          <div><b>indeterminate:</b> {String(indeterminate)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>name:</b> {String(name)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

