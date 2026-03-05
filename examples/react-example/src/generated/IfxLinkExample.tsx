import { useState } from 'react';
import { IfxButton, IfxLink } from '@infineon/infineon-design-system-react';

export function IfxLinkExample() {
  const targetOptions = ["_blank","_self","_parent"];
  const [targetIndex, setTargetIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const sizeOptions = ["s","m","l","xl"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const variantOptions = ["bold","underlined","title","menu"];
  const [variantIndex, setVariantIndex] = useState(0);

  const toggleTarget = () => setTargetIndex((i) => (i + 1) % targetOptions.length);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);

  const controlledProps = {
    "target": targetOptions[targetIndex],
    "disabled": disabled,
    "size": sizeOptions[sizeIndex],
    "variant": variantOptions[variantIndex],
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
    ["target", controlledProps["target"]],
    ["disabled", controlledProps["disabled"]],
    ["size", controlledProps["size"]],
    ["variant", controlledProps["variant"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxLink } from '@infineon/infineon-design-system-react';

export function IfxLinkExample() {
  return (
      <IfxLink
        href=""
        ariaLabel="Link"
        download=""
        __CONTROLLED_PROPS__>
        Link
      </IfxLink>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);
	return (
    <>
      <IfxLink
        href=""
        ariaLabel="Link"
        download=""
        {...controlledProps}>
        Link
      </IfxLink>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleTarget}>Toggle Target</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

