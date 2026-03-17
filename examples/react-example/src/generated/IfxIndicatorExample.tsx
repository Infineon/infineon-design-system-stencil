import { useState } from 'react';
import { IfxButton, IfxIndicator, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  const variantOptions = ["number","dot"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [number, setNumber] = useState("1");
  const [inverted, setInverted] = useState(false);

  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const toggleNumber = (value: string) => setNumber(value);
  const toggleInverted = () => setInverted((v) => !v);

  const controlledProps = {
    "variant": variantOptions[variantIndex],
    "number": number,
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
    ["variant", controlledProps["variant"]],
    ["number", controlledProps["number"]],
    ["inverted", controlledProps["inverted"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxIndicator } from '@infineon/infineon-design-system-react';

export function IfxIndicatorExample() {
  return (
      <IfxIndicator __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxIndicator {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleInverted}>Toggle Inverted</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="number" type="text" value={String(number)} onInput={(event) => toggleNumber(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>number:</b> {String(number)}</div>
          <div><b>inverted:</b> {String(inverted)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

