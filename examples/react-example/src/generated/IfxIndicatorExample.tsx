import { useState } from 'react';
import { IfxButton, IfxIndicator } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  const variantOptions = ["number","dot"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [inverted, setInverted] = useState(false);

  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const toggleInverted = () => setInverted((v) => !v);

  const controlledProps = {
    "variant": variantOptions[variantIndex],
    "inverted": inverted,
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
    ["variant", controlledProps["variant"]],
    ["inverted", controlledProps["inverted"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxIndicator } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  return (
      <IfxIndicator
        number={1}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxIndicator
        number={1}
        {...controlledProps} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleInverted}>Toggle Inverted</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>inverted:</b> {String(inverted)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

