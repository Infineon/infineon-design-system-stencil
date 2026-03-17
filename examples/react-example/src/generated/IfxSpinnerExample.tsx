import { useState } from 'react';
import { IfxButton, IfxSpinner, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSpinnerExample() {
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const variantOptions = ["default","brand"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [inverted, setInverted] = useState(false);
  const [ariaLabel, setAriaLabel] = useState("");

  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const toggleInverted = () => setInverted((v) => !v);
  const toggleAriaLabel = (value: string) => setAriaLabel(value);

  const controlledProps = {
    "size": sizeOptions[sizeIndex],
    "variant": variantOptions[variantIndex],
    "inverted": inverted,
    "ariaLabel": ariaLabel,
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
    ["size", controlledProps["size"]],
    ["variant", controlledProps["variant"]],
    ["inverted", controlledProps["inverted"]],
    ["ariaLabel", controlledProps["ariaLabel"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxSpinner } from '@infineon/infineon-design-system-react';

export function IfxSpinnerExample() {
  return (
      <IfxSpinner __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxSpinner {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleInverted}>Toggle Inverted</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="ariaLabel" type="text" value={String(ariaLabel)} onInput={(event) => toggleAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>inverted:</b> {String(inverted)}</div>
          <div><b>ariaLabel:</b> {String(ariaLabel)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

