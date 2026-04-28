import { useState } from 'react';
import { IfxButton, IfxIndicator } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  const [inverted, setInverted] = useState(false);

  const toggleInverted = () => setInverted((v) => !v);

  const controlledProps = {
    "inverted": inverted,
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
    ["inverted", controlledProps["inverted"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxIndicator } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  return (
      <IfxIndicator
        variant="number"
        number={1}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxIndicator
        variant="number"
        number={1}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleInverted}>Toggle Inverted</IfxButton>
	      </div>
	      

	      <div className="state">
	          <div><b>inverted:</b> {String(inverted)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

