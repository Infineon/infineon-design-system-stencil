import { useState } from 'react';
import { IfxButton, IfxRadioButton, IfxRadioButtonGroup, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonGroupExample() {
  const alignmentOptions = ["vertical","horizontal"];
  const [alignmentIndex, setAlignmentIndex] = useState(0);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [showGroupLabel, setShowGroupLabel] = useState(false);
  const [groupLabelText, setGroupLabelText] = useState("Group Label");
  const [showCaption, setShowCaption] = useState(false);
  const [captionText, setCaptionText] = useState("Caption text, description, error notification");
  const [showCaptionIcon, setShowCaptionIcon] = useState(false);
  const [required, setRequired] = useState(false);

  const handleAlignmentChange = () => setAlignmentIndex((i) => (i + 1) % alignmentOptions.length);
  const handleSizeChange = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const handleShowGroupLabelChange = () => setShowGroupLabel((v) => !v);
  const handleGroupLabelTextChange = (value: string) => setGroupLabelText(value);
  const handleShowCaptionChange = () => setShowCaption((v) => !v);
  const handleCaptionTextChange = (value: string) => setCaptionText(value);
  const handleShowCaptionIconChange = () => setShowCaptionIcon((v) => !v);
  const handleRequiredChange = () => setRequired((v) => !v);

  const controlledProps = {
    "alignment": alignmentOptions[alignmentIndex],
    "size": sizeOptions[sizeIndex],
    "showGroupLabel": showGroupLabel,
    "groupLabelText": groupLabelText,
    "showCaption": showCaption,
    "captionText": captionText,
    "showCaptionIcon": showCaptionIcon,
    "required": required,
  } as Record<string, unknown>;
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

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
    ["alignment", controlledProps["alignment"]],
    ["size", controlledProps["size"]],
    ["showGroupLabel", controlledProps["showGroupLabel"]],
    ["groupLabelText", controlledProps["groupLabelText"]],
    ["showCaption", controlledProps["showCaption"]],
    ["captionText", controlledProps["captionText"]],
    ["showCaptionIcon", controlledProps["showCaptionIcon"]],
    ["required", controlledProps["required"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonGroupExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleError = (event: CustomEvent) => {
    console.log('ifxError:', event);
    // Add your handler logic here
  };

  return (
      <IfxRadioButtonGroup __CONTROLLED_PROPS__>
        <IfxRadioButton
          value={0}
          size="m"
          onIfxChange={handleChange}
          onIfxError={handleError}>
          Option 0
        </IfxRadioButton>
        <IfxRadioButton
          value={1}
          size="m">
          Option 1
        </IfxRadioButton>
        <IfxRadioButton
          value={2}
          size="m">
          Option 2
        </IfxRadioButton>
      </IfxRadioButtonGroup>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxRadioButtonGroup {...(controlledProps as any)}>
        <IfxRadioButton
          value={0}
          size="m"
          onIfxChange={handleChange}
          onIfxError={handleError}>
          Option 0
        </IfxRadioButton>
        <IfxRadioButton
          value={1}
          size="m">
          Option 1
        </IfxRadioButton>
        <IfxRadioButton
          value={2}
          size="m">
          Option 2
        </IfxRadioButton>
      </IfxRadioButtonGroup>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleAlignmentChange}>Toggle Alignment</IfxButton>
        <IfxButton variant="secondary" onClick={handleSizeChange}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowGroupLabelChange}>Toggle ShowGroupLabel</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowCaptionChange}>Toggle ShowCaption</IfxButton>
        <IfxButton variant="secondary" onClick={handleShowCaptionIconChange}>Toggle ShowCaptionIcon</IfxButton>
        <IfxButton variant="secondary" onClick={handleRequiredChange}>Toggle Required</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="groupLabelText" type="text" value={String(groupLabelText)} onInput={(event) => handleGroupLabelTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="captionText" type="text" value={String(captionText)} onInput={(event) => handleCaptionTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>alignment:</b> {String(alignmentOptions[alignmentIndex])}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>showGroupLabel:</b> {String(showGroupLabel)}</div>
          <div><b>groupLabelText:</b> {String(groupLabelText)}</div>
          <div><b>showCaption:</b> {String(showCaption)}</div>
          <div><b>captionText:</b> {String(captionText)}</div>
          <div><b>showCaptionIcon:</b> {String(showCaptionIcon)}</div>
          <div><b>required:</b> {String(required)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

