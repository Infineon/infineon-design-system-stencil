import { useState } from 'react';
import { IfxButton, IfxErrorPage, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  const typeOptions = ["403","404","503","maintenance"];
  const [typeIndex, setTypeIndex] = useState(0);
  const [illustrationUrl, setIllustrationUrl] = useState("");
  const [imgAlt, setImgAlt] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");

  const handleTypeChange = () => setTypeIndex((i) => (i + 1) % typeOptions.length);
  const handleIllustrationUrlChange = (value: string) => setIllustrationUrl(value);
  const handleImgAltChange = (value: string) => setImgAlt(value);
  const handleHeadlineChange = (value: string) => setHeadline(value);
  const handleDescriptionChange = (value: string) => setDescription(value);

  const controlledProps = {
    "type": typeOptions[typeIndex],
    "illustrationUrl": illustrationUrl,
    "imgAlt": imgAlt,
    "headline": headline,
    "description": description,
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
    ["type", controlledProps["type"]],
    ["illustrationUrl", controlledProps["illustrationUrl"]],
    ["imgAlt", controlledProps["imgAlt"]],
    ["headline", controlledProps["headline"]],
    ["description", controlledProps["description"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxButton, IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
      <IfxErrorPage __CONTROLLED_PROPS__>
        <div slot="button">
          <IfxButton
            variant="primary"
            fullWidth={true}>
            Go to homepage
          </IfxButton>
        </div>
        <div slot="button">
          <IfxButton
            variant="secondary"
            fullWidth={true}>
            Get support
          </IfxButton>
        </div>
      </IfxErrorPage>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxErrorPage {...(controlledProps as any)}>
        <div slot="button">
          <IfxButton
            variant="primary"
            fullWidth={true}>
            Go to homepage
          </IfxButton>
        </div>
        <div slot="button">
          <IfxButton
            variant="secondary"
            fullWidth={true}>
            Get support
          </IfxButton>
        </div>
      </IfxErrorPage>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleTypeChange}>Toggle Type</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="illustrationUrl" type="text" value={String(illustrationUrl)} onInput={(event) => handleIllustrationUrlChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="imgAlt" type="text" value={String(imgAlt)} onInput={(event) => handleImgAltChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="headline" type="text" value={String(headline)} onInput={(event) => handleHeadlineChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="description" type="text" value={String(description)} onInput={(event) => handleDescriptionChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>type:</b> {String(typeOptions[typeIndex])}</div>
          <div><b>illustrationUrl:</b> {String(illustrationUrl)}</div>
          <div><b>imgAlt:</b> {String(imgAlt)}</div>
          <div><b>headline:</b> {String(headline)}</div>
          <div><b>description:</b> {String(description)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

