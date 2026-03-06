import { useState } from 'react';
import { IfxButton, IfxStatus } from '@infineon/infineon-design-system-react';

export function IfxStatusExample() {
  const [border, setBorder] = useState(true);
  const colorOptions = ["engineering-100","engineering-200","engineering-300","engineering-400","engineering-500","engineering-600","ocean-100","ocean-200","ocean-300","ocean-400","ocean-500","ocean-600","ocean-700","red-500","red-600","red-700","orange-500","green-500","lawn-400","lawn-500","lawn-700","berry-400","berry-500","sun-400","sun-500","sand-400","sand-500"];
  const [colorIndex, setColorIndex] = useState(16);

  const toggleBorder = () => setBorder((v) => !v);
  const toggleColor = () => setColorIndex((i) => (i + 1) % colorOptions.length);

  const controlledProps = {
    "border": border,
    "color": colorOptions[colorIndex],
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
    ["border", controlledProps["border"]],
    ["color", controlledProps["color"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxStatus } from '@infineon/infineon-design-system-react';

export function IfxStatusExample() {
  return (
      <IfxStatus
        label="text"
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxStatus
        label="text"
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleBorder}>Toggle Border</IfxButton>
        <IfxButton variant="secondary" onClick={toggleColor}>Toggle Color</IfxButton>
	      </div>

	      <div className="state">
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

