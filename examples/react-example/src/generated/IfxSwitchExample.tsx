import { useState } from 'react';
import { IfxButton, IfxSwitch } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => setChecked((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);

  const controlledProps = {
    "checked": checked,
    "disabled": disabled,
  } as const;
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
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
    ["checked", controlledProps["checked"]],
    ["disabled", controlledProps["disabled"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxSwitch } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxSwitch
        name="switch"
        value="on"
        onIfxChange={handleChange}
        __CONTROLLED_PROPS__>
        Switch
      </IfxSwitch>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxSwitch
        name="switch"
        value="on"
        onIfxChange={handleChange}
        {...controlledProps}>
        Switch
      </IfxSwitch>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleChecked}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>checked:</b> {String(checked)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

