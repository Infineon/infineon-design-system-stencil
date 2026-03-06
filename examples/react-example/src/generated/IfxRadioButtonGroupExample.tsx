import { useState } from 'react';
import { IfxButton, IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonGroupExample() {
  const alignmentOptions = ["vertical","horizontal"];
  const [alignmentIndex, setAlignmentIndex] = useState(0);
  const sizeOptions = ["s","m"];
  const [sizeIndex, setSizeIndex] = useState(1);
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [showGroupLabel, setShowGroupLabel] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [showCaptionIcon, setShowCaptionIcon] = useState(false);
  const [required, setRequired] = useState(false);

  const toggleAlignment = () => setAlignmentIndex((i) => (i + 1) % alignmentOptions.length);
  const toggleSize = () => setSizeIndex((i) => (i + 1) % sizeOptions.length);
  const toggleChecked = () => setChecked((v) => !v);
  const toggleDisabled = () => setDisabled((v) => !v);
  const toggleError = () => setError((v) => !v);
  const toggleShowGroupLabel = () => setShowGroupLabel((v) => !v);
  const toggleShowCaption = () => setShowCaption((v) => !v);
  const toggleShowCaptionIcon = () => setShowCaptionIcon((v) => !v);
  const toggleRequired = () => setRequired((v) => !v);

  const controlledProps = {
    "alignment": alignmentOptions[alignmentIndex],
    "size": sizeOptions[sizeIndex],
    "checked": checked,
    "disabled": disabled,
    "error": error,
    "showGroupLabel": showGroupLabel,
    "showCaption": showCaption,
    "showCaptionIcon": showCaptionIcon,
    "required": required,
  } as const;
  const handleSetGroupError = (event: CustomEvent) => {
    console.log('setGroupError:', event);
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
    ["checked", controlledProps["checked"]],
    ["disabled", controlledProps["disabled"]],
    ["error", controlledProps["error"]],
    ["showGroupLabel", controlledProps["showGroupLabel"]],
    ["showCaption", controlledProps["showCaption"]],
    ["showCaptionIcon", controlledProps["showCaptionIcon"]],
    ["required", controlledProps["required"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeString = `import { IfxRadioButton, IfxRadioButtonGroup } from '@infineon/infineon-design-system-react';

export function IfxRadioButtonGroupExample() {
  const handleSetGroupError = (event: CustomEvent) => {
    console.log('setGroupError:', event);
    // Add your handler logic here
  };

  return (
      <IfxRadioButtonGroup
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification"
        __CONTROLLED_PROPS__>
        <IfxRadioButton
          value={0}
          size="m">
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
	return (
    <>
      <IfxRadioButtonGroup
        groupLabelText="Group Label"
        captionText="Caption text, description, error notification"
        {...controlledProps}>
        <IfxRadioButton
          value={0}
          size="m">
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
	      <div className="controls">
	        <IfxButton variant="secondary" onClick={toggleAlignment}>Toggle Alignment</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleChecked}>Toggle Checked</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowGroupLabel}>Toggle ShowGroupLabel</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowCaption}>Toggle ShowCaption</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShowCaptionIcon}>Toggle ShowCaptionIcon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
	      </div>

	      <div className="state">
	          <div><b>alignment:</b> {String(alignmentOptions[alignmentIndex])}</div>
          <div><b>size:</b> {String(sizeOptions[sizeIndex])}</div>
          <div><b>checked:</b> {String(checked)}</div>
          <div><b>disabled:</b> {String(disabled)}</div>
          <div><b>error:</b> {String(error)}</div>
          <div><b>showGroupLabel:</b> {String(showGroupLabel)}</div>
          <div><b>showCaption:</b> {String(showCaption)}</div>
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

