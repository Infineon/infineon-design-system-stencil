import { useState } from 'react';
import { IfxButton, IfxSpinner, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxSpinnerExample() {
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const variantOptions = ["default","brand"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [inverted, setInverted] = useState(false);
  const [ariaLabelText, setAriaLabelText] = useState("");

  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleVariantChange = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const handleInvertedChange = () => setInverted((v) => !v);
  const handleAriaLabelTextChange = (value: string) => setAriaLabelText(value);

  const controlledProps = {
    "size": sizeOptions[sizeIndex],
    "variant": variantOptions[variantIndex],
    "inverted": inverted,
    "ariaLabelText": ariaLabelText,
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
    ["ariaLabelText", controlledProps["ariaLabelText"]],
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
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleVariantChange}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={handleInvertedChange}>Toggle Inverted</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onInput={(event) => handleAriaLabelTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>inverted:</b> {String(inverted)}</div>
          <div><b>ariaLabelText:</b> {String(ariaLabelText)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

