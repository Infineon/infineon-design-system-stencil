import { useState } from 'react';
import { IfxButton, IfxLink, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxLinkExample() {
  const [href, setHref] = useState("");
  const targetOptions = ["_blank","_self","_parent"];
  const [targetIndex, setTargetIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [download, setDownload] = useState("");
  const sizeOptions = ["s","m","l","xl"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const variantOptions = ["bold","underlined","title","menu"];
  const [variantIndex, setVariantIndex] = useState(0);

  const handleHrefChange = (value: string) => setHref(value);
  const handleTargetChange = () => setTargetIndex((i) => (i + 1) % targetOptions.length);
  const handleDisabledChange = () => setDisabled((v) => !v);
  const handleDownloadChange = (value: string) => setDownload(value);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleVariantChange = () => setVariantIndex((i) => (i + 1) % variantOptions.length);

  const controlledProps = {
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
      <IfxLink
        ariaLabel="Link"
        __CONTROLLED_PROPS__>
        Link
      </IfxLink>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxLink
        ariaLabel="Link"
        {...(controlledProps as any)}>
        Link
      </IfxLink>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleTargetChange}>Toggle Target</IfxButton>
        <IfxButton variant="secondary" onClick={handleDisabledChange}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleVariantChange}>Toggle Variant</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="href" type="text" value={String(href)} onInput={(event) => handleHrefChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="download" type="text" value={String(download)} onInput={(event) => handleDownloadChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
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

