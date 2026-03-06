import { useState } from 'react';
import { IfxButton, IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [required, setRequired] = useState(true);
  const [readOnly, setReadOnly] = useState(false);
  const resizeOptions = ["both","vertical","horizontal","none"];
  const [resizeIndex, setResizeIndex] = useState(0);
  const wrapOptions = ["soft","hard","off"];
  const [wrapIndex, setWrapIndex] = useState(0);
  const [fullWidth, setFullWidth] = useState(false);

  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleError = () => setError((v) => !v);
  const toggleRequired = () => setRequired((v) => !v);
  const toggleReadOnly = () => setReadOnly((v) => !v);
  const toggleResize = () => setResizeIndex((i) => (i + 1) % resizeOptions.length);
  const toggleWrap = () => setWrapIndex((i) => (i + 1) % wrapOptions.length);
  const toggleFullWidth = () => setFullWidth((v) => !v);

  const controlledProps = {
    "disabled": disabled,
    "error": error,
    "required": required,
    "readOnly": readOnly,
    "resize": resizeOptions[resizeIndex],
    "wrap": wrapOptions[wrapIndex],
    "fullWidth": fullWidth,
  } as const;
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
    ["error", controlledProps["error"]],
    ["required", controlledProps["required"]],
    ["readOnly", controlledProps["readOnly"]],
    ["resize", controlledProps["resize"]],
    ["wrap", controlledProps["wrap"]],
    ["fullWidth", controlledProps["fullWidth"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxTextarea } from '@infineon/infineon-design-system-react';

export function IfxTextareaExample() {
  return (
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        label="Label Text"
        name="textarea"
        placeholder="Placeholder"
        rows={5}
        value=""
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxTextarea
        caption="Caption text, description, error notification"
        cols={43}
        label="Label Text"
        name="textarea"
        placeholder="Placeholder"
        rows={5}
        value=""
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
        <IfxButton variant="secondary" onClick={toggleReadOnly}>Toggle ReadOnly</IfxButton>
        <IfxButton variant="secondary" onClick={toggleResize}>Toggle Resize</IfxButton>
        <IfxButton variant="secondary" onClick={toggleWrap}>Toggle Wrap</IfxButton>
        <IfxButton variant="secondary" onClick={toggleFullWidth}>Toggle FullWidth</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>required:</b> {String(required)}</div>
          <div><b>readOnly:</b> {String(readOnly)}</div>
          <div><b>resize:</b> {String(resizeOptions[resizeIndex])}</div>
          <div><b>wrap:</b> {String(wrapOptions[wrapIndex])}</div>
          <div><b>fullWidth:</b> {String(fullWidth)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

