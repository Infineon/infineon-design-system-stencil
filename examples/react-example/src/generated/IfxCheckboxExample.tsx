import { useState } from 'react';
import { IfxButton, IfxCheckbox } from '@infineon/infineon-design-system-react';

export function IfxCheckboxExample() {
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(0);

  const toggleError = () => setError((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleChecked = () => setChecked((v) => !v);
  const toggleIndeterminate = () => setIndeterminate((v) => !v);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);

  const controlledProps = {
    "error": error,
    "disabled": disabled,
    "checked": checked,
    "indeterminate": indeterminate,
    "size": sizeOptions[sizeIndex],
  } as const;
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
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxCheckbox } from '@infineon/infineon-design-system-react';

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
        name="checkbox"
        onIfxChange={handleChange}
        onIfxError={handleError}
        __CONTROLLED_PROPS__>
        Text
      </IfxCheckbox>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxCheckbox
        name="checkbox"
        onIfxChange={handleChange}
        onIfxError={handleError}
        {...controlledProps}>
        Text
      </IfxCheckbox>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleChecked}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIndeterminate}>Toggle Indeterminate</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>error:</b> {String(error)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>checked:</b> {String(checked)}</div>
          <div><b>indeterminate:</b> {String(indeterminate)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

