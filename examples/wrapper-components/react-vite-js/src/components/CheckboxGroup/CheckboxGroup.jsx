import { useState } from 'react';
import { IfxCheckboxGroup, IfxCheckbox, IfxButton } from '@infineon/infineon-design-system-react';

function CheckboxGroup() {
  const [required, setRequired] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [label, setLabel] = useState(true);
  const [caption, setCaption] = useState(true);
  const [captionIcon, setCaptionIcon] = useState(true);

  const [alignmentIndex, setAlignmentIndex] = useState(0);
  const alignments = ["vertical", "horizontal"];

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ["m", "s"];

  const toggleRequired = () => {
    setRequired(prevRequired => !prevRequired);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  const toggleAlignment = () => {
    setAlignmentIndex((index) => (index + 1) % alignments.length);
  }

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  const toggleLabel = () => {
    setLabel(prevLabel => !prevLabel);
  }

  const toggleCaption = () => {
    setCaption(prevCaption => !prevCaption);
  }

  const toggleCaptionIcon = () => {
    setCaptionIcon(prevCaptionIcon => !prevCaptionIcon);
  }

  return (
    <div className="component">
      <h2>Checkbox Group</h2>
      <IfxCheckboxGroup
        alignment={alignments[alignmentIndex]}
        showGroupLabel={label}
        group-label-text="Group Label"
        showCaption={caption}
        caption-text="Caption text, description, error notification"
        showCaptionIcon={captionIcon}
        required={required}>
        <IfxCheckbox value="0" disabled={disabled} checked="false" size={sizes[sizeIndex]} indeterminate="false" error={error}>Option 0</IfxCheckbox>
        <IfxCheckbox value="1" disabled={disabled} checked="false" size={sizes[sizeIndex]} indeterminate="false" error={error}>Option 1</IfxCheckbox>
        <IfxCheckbox value="2" disabled={disabled} checked="false" size={sizes[sizeIndex]} indeterminate="false" error={error}>Option 2</IfxCheckbox>
        <IfxCheckbox value="3" disabled={disabled} checked="false" size={sizes[sizeIndex]} indeterminate="false" error={error}>Option 3</IfxCheckbox>
      </IfxCheckboxGroup>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleAlignment}>Toggle Alignment</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleLabel}>Toggle Label</IfxButton>
        <IfxButton variant="secondary" onClick={toggleCaption}>Toggle Caption</IfxButton>
        <IfxButton variant="secondary" onClick={toggleCaptionIcon}>Toggle Caption Icon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      </div>
      <br />
      
      <div class="state">
        <div><b>Alignment:</b> {alignments[alignmentIndex]}</div>
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Error:</b> {String(error)}</div>
        <div><b>Size:</b> {sizes[sizeIndex]}</div>
        <div><b>Label:</b> {String(label)}</div>
        <div><b>Caption:</b> {String(caption)}</div>
        <div><b>Caption Icon:</b> {String(captionIcon)}</div>
        <div><b>Required:</b> {String(required)}</div>
        <br />
      </div>
    </div>
  );
}

export default CheckboxGroup;