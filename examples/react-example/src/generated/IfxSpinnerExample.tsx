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
      <IfxSpinner
        ariaLabelText=""
        variant="default"
        size="m"
        inverted={false} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSpinner } from '@infineon/infineon-design-system-react';

export function IfxSpinnerExample() {
  return (
      <IfxSpinner
        ariaLabelText=""
        variant="default"
        size="m"
        inverted={false} />
  );
}`;
