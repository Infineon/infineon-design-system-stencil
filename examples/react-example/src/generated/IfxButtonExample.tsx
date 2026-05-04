import { useState } from 'react';
import { IfxButton, IfxIcon, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxButtonExample() {
  const variantOptions = ["primary","secondary","tertiary"];
  const [variantIndex, setVariantIndex] = useState(0);
  const [ariaLabelText, setAriaLabelText] = useState("Button");
  const themeOptions = ["default","danger","inverse"];
  const [themeIndex, setThemeIndex] = useState(0);
  const typeOptions = ["button","submit","reset"];
  const [typeIndex, setTypeIndex] = useState(0);
  const sizeOptions = ["xs","s","m","l"];
  const [sizeIndex, setSizeIndex] = useState(2);
  const [fullWidth, setFullWidth] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [href, setHref] = useState(false);
  const targetOptions = ["_blank","_self","_parent"];
  const [targetIndex, setTargetIndex] = useState(0);

  const handleVariantChange = () => setVariantIndex((i) => (i + 1) % variantOptions.length);
  const handleAriaLabelTextChange = (value: string) => setAriaLabelText(value);
  const handleThemeChange = () => setThemeIndex((i) => (i + 1) % themeOptions.length);
  const handleTypeChange = () => setTypeIndex((i) => (i + 1) % typeOptions.length);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleFullWidthChange = () => setFullWidth((v) => !v);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleHrefChange = () => setHref((v) => !v);
  const handleTargetChange = () => setTargetIndex((i) => (i + 1) % targetOptions.length);

  const controlledProps = {
    "variant": variantOptions[variantIndex],
    "ariaLabelText": ariaLabelText,
    "theme": themeOptions[themeIndex],
    "type": typeOptions[typeIndex],
    "size": sizeOptions[sizeIndex],
    "fullWidth": fullWidth,
    "disabled": disabled,
    "href": href,
    "target": targetOptions[targetIndex],
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
    ["ariaLabelText", controlledProps["ariaLabelText"]],
    ["theme", controlledProps["theme"]],
    ["type", controlledProps["type"]],
    ["size", controlledProps["size"]],
    ["fullWidth", controlledProps["fullWidth"]],
    ["disabled", controlledProps["disabled"]],
    ["href", controlledProps["href"]],
    ["target", controlledProps["target"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxButton, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxButtonExample() {
  return (
      <IfxButton __CONTROLLED_PROPS__>
        {controlledProps.icon && String(controlledProps.iconPosition ?? "left") === "left" ? <IfxIcon icon={String(controlledProps.icon)} /> : null}
        Button
        {controlledProps.icon && String(controlledProps.iconPosition ?? "left") === "right" ? <IfxIcon icon={String(controlledProps.icon)} /> : null}
      </IfxButton>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxButton {...(controlledProps as any)}>
        {controlledProps.icon && String(controlledProps.iconPosition ?? "left") === "left" ? <IfxIcon icon={String(controlledProps.icon)} /> : null}
        Button
        {controlledProps.icon && String(controlledProps.iconPosition ?? "left") === "right" ? <IfxIcon icon={String(controlledProps.icon)} /> : null}
      </IfxButton>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleVariantChange}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={handleThemeChange}>Toggle Theme</IfxButton>
        <IfxButton variant="secondary" onClick={handleTypeChange}>Toggle Type</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleFullWidthChange}>Toggle FullWidth</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleHrefChange}>Toggle Href</IfxButton>
        <IfxButton variant="secondary" onClick={handleTargetChange}>Toggle Target</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="ariaLabelText" type="text" value={String(ariaLabelText)} onInput={(event) => handleAriaLabelTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>variant:</b> {String(variantOptions[variantIndex])}</div>
          <div><b>ariaLabelText:</b> {String(ariaLabelText)}</div>
          <div><b>theme:</b> {String(themeOptions[themeIndex])}</div>
          <div><b>type:</b> {String(typeOptions[typeIndex])}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>fullWidth:</b> {String(fullWidth)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>href:</b> {String(href)}</div>
          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

