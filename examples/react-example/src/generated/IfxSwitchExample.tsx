import { useState } from 'react';
import { IfxButton, IfxSwitch, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSwitchExample() {
  const [label, setLabel] = useState("Switch");
  const [name, setName] = useState("switch");
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("on");
  const [disabled, setDisabled] = useState(false);

  const toggleLabel = (value: string) => setLabel(value);
  const toggleName = (value: string) => setName(value);
  const toggleChecked = () => setChecked((v) => !v);
  const toggleValue = (value: string) => setValue(value);
  const toggleDisabled = () => setDisabled((v) => !v);

  const controlledProps = {
    "label": label,
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
        __CONTROLLED_PROPS__>
        __CONTROLLED_TEXT_LABEL__
      </IfxSwitch>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const escapedText = String(controlledProps["label"] ?? "")
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");

	const codeString = codeStringWithProps.replace("__CONTROLLED_TEXT_LABEL__", escapedText);
	return (
    <>
      <IfxSwitch
        onIfxChange={handleChange}
        {...(controlledProps as any)}>
        {String(label)}
      </IfxSwitch>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleChecked}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => toggleLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="name" type="text" value={String(name)} onInput={(event) => toggleName(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => toggleValue(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>label:</b> {String(label)}</div>
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

