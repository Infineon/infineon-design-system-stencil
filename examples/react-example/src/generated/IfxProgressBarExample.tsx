import { useState } from 'react';
import { IfxButton, IfxProgressBar, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxProgressBarExample() {
  const [value, setValue] = useState(50);
  const [showLabel, setShowLabel] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);

  const handleValueChange = (value: string) => setValue(Number(value));
  const handleShowLabelChange = () => setShowLabel((v) => !v);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);

  const controlledProps = {
    "value": value,
    "showLabel": showLabel,
    "size": sizeOptions[sizeIndex],
  } as Record<string, unknown>;
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
    ["value", controlledProps["value"]],
    ["showLabel", controlledProps["showLabel"]],
    ["size", controlledProps["size"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxProgressBar } from '@infineon/infineon-design-system-react';

export function IfxProgressBarExample() {
  return (
      <IfxProgressBar __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxProgressBar {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleShowLabelChange}>Toggle ShowLabel</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="value" type="text" value={String(value)} onInput={(event) => handleValueChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>value:</b> {String(value)}</div>
          <div><b>showLabel:</b> {String(showLabel)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

