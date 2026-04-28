import { useState } from 'react';
import { IfxButton, IfxLink, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxLinkExample() {
  const [ariaLabel, setAriaLabel] = useState("Link");
  const [href, setHref] = useState("");
  const targetOptions = ["_blank","_self","_parent"];
  const [targetIndex, setTargetIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [download, setDownload] = useState("");
  const sizeOptions = ["s","m","l","xl"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const variantOptions = ["bold","underlined","title","menu"];
  const [variantIndex, setVariantIndex] = useState(0);

  const toggleAriaLabel = (value: string) => setAriaLabel(value);
  const toggleHref = (value: string) => setHref(value);
  const toggleTarget = () => setTargetIndex((i) => (i + 1) % targetOptions.length);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleDownload = (value: string) => setDownload(value);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleVariant = () => setVariantIndex((i) => (i + 1) % variantOptions.length);

  const controlledProps = {
    "ariaLabel": ariaLabel,
    "href": href,
    "target": targetOptions[targetIndex],
    "disabled": disabled,
    "download": download,
    "size": sizeOptions[sizeIndex],
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
    ["ariaLabel", controlledProps["ariaLabel"]],
    ["href", controlledProps["href"]],
    ["target", controlledProps["target"]],
    ["disabled", controlledProps["disabled"]],
    ["download", controlledProps["download"]],
    ["size", controlledProps["size"]],
    ["variant", controlledProps["variant"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxLink } from '@infineon/infineon-design-system-react';

export function IfxLinkExample() {
  return (
      <IfxLink __CONTROLLED_PROPS__>
        Link
      </IfxLink>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxLink {...(controlledProps as any)}>
        Link
      </IfxLink>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleTarget}>Toggle Target</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="ariaLabel" type="text" value={String(ariaLabel)} onInput={(event) => toggleAriaLabel(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="href" type="text" value={String(href)} onInput={(event) => toggleHref(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="download" type="text" value={String(download)} onInput={(event) => toggleDownload(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>ariaLabel:</b> {String(ariaLabel)}</div>
          <div><b>href:</b> {String(href)}</div>
          <div><b>target:</b> {String(targetOptions[targetIndex])}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>download:</b> {String(download)}</div>
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

