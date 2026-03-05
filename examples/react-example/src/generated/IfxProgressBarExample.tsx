import { useState } from 'react';
import { IfxButton, IfxProgressBar } from '@infineon/infineon-design-system-react';

export function IfxProgressBarExample() {
  const [showLabel, setShowLabel] = useState(false);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);

  const toggleShowLabel = () => setShowLabel((v) => !v);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);

  const controlledProps = {
    "showLabel": showLabel,
    "size": sizeOptions[sizeIndex],
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
    ["showLabel", controlledProps["showLabel"]],
    ["size", controlledProps["size"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxProgressBar } from '@infineon/infineon-design-system-react';

export function IfxProgressBarExample() {
  return (
      <IfxProgressBar
        value={50}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxProgressBar
        value={50}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleShowLabel}>Toggle ShowLabel</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
	      </div>

	      <div className="state">
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

