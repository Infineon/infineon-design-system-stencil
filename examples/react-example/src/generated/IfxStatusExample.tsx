import { useState } from 'react';
import { IfxButton, IfxStatus, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxStatusExample() {
  const [label, setLabel] = useState("text");
  const [border, setBorder] = useState(true);
  const colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
  const [colorIndex, setColorIndex] = useState(16);

  const handleLabelChange = (value: string) => setLabel(value);
  const handleBorderChange = () => setBorder((v) => !v);
  const handleColorChange = () => setColorIndex((i) => (i + 1) % colorOptions.length);

  const controlledProps = {
    "label": label,
    "border": border,
    "color": colorOptions[colorIndex],
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
    ["label", controlledProps["label"]],
    ["border", controlledProps["border"]],
    ["color", controlledProps["color"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxStatus } from '@infineon/infineon-design-system-react';

export function IfxStatusExample() {
  return (
      <IfxStatus __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxStatus {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleBorderChange}>Toggle Border</IfxButton>
        <IfxButton variant="secondary" onClick={handleColorChange}>Toggle Color</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="label" type="text" value={String(label)} onInput={(event) => handleLabelChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>label:</b> {String(label)}</div>
          <div><b>border:</b> {String(border)}</div>
          <div><b>color:</b> {String(colorOptions[colorIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

