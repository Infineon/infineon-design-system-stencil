import { useState } from 'react';
import { IfxButton, IfxSwitch, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  const [name, setName] = useState("switch");
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("on");
  const [disabled, setDisabled] = useState(false);

  const handleNameChange = (value: string) => setName(value);
  const handleCheckedChange = () => setChecked((v) => !v);
  const handleValueChange = (value: string) => setValue(value);
  const handleDisabledChange = () => setDisabled((v) => !v);

  const controlledProps = {
    "name": name,
    "checked": checked,
    "value": value,
    "disabled": disabled,
  } as Record<string, unknown>;
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
    ["name", controlledProps["name"]],
    ["checked", controlledProps["checked"]],
    ["value", controlledProps["value"]],
    ["disabled", controlledProps["disabled"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSwitch } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxSwitch
        onIfxChange={handleChange}
        name={String(controlledProps.name ?? "switch")}
        checked={String(controlledProps.checked ?? "false")}
        value={String(controlledProps.value ?? "on")}
        disabled={String(controlledProps.disabled ?? "false")}
        __CONTROLLED_PROPS__>
        Switch
      </IfxSwitch>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSwitch
        onIfxChange={handleChange}
        name={String(controlledProps.name ?? "switch")}
        checked={String(controlledProps.checked ?? "false")}
        value={String(controlledProps.value ?? "on")}
        disabled={String(controlledProps.disabled ?? "false")}
        {...(controlledProps as any)}>
        Switch
      </IfxSwitch>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleCheckedChange}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="name" type="text" value={String(name)} onInput={(event) => handleNameChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => handleValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>name:</b> {String(name)}</div>
          <div><b>checked:</b> {String(checked)}</div>
          <div><b>value:</b> {String(value)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

