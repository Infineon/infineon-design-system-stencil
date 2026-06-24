import { useState } from 'react';
import { IfxAiLabel, IfxButton } from '@infineon/infineon-design-system-react';

export function IfxAiLabelExample() {
  const [divider, setDivider] = useState(true);
  const variantOptions = ["label","icon"];
  const [variantIndex, setVariantIndex] = useState(0);

  const handleDividerChange = () => setDivider((v) => !v);
  const handleVariantChange = () => setVariantIndex((i) => (i + 1) % variantOptions.length);

  const controlledProps = {
    "divider": divider,
    "variant": variantOptions[variantIndex],
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
    ["divider", controlledProps["divider"]],
    ["variant", controlledProps["variant"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxAiLabel } from '@infineon/infineon-design-system-react';

export function IfxAiLabelExample() {
  return (
      <IfxAiLabel
        divider={String(controlledProps.divider ?? "true")}
        variant={String(controlledProps.variant ?? "label")}
        __CONTROLLED_PROPS__ />
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxAiLabel
        divider={String(controlledProps.divider ?? "true")}
        variant={String(controlledProps.variant ?? "label")}
        {...(controlledProps as any)} />
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleDividerChange}>Toggle Divider</IfxButton>
        <IfxButton variant="secondary" onClick={handleVariantChange}>Toggle Variant</IfxButton>
	      </div>
	      

	      <div className="state">
	          <div><b>divider:</b> {String(divider)}</div>
          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

