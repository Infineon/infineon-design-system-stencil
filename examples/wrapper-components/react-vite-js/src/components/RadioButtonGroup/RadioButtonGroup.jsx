import { useState } from 'react';
import { IfxRadioButtonGroup, IfxRadioButton, IfxButton } from '@infineon/infineon-design-system-react';

function RadioButtonGroup() {
  const [alignmentIndex, setAlignmentIndex] = useState(0);
  const alignments = ['vertical', 'horizontal'];

  const [showGroupLabel, setShowGroupLabel] = useState(true);
  const [showCaption, setShowCaption] = useState(true);
  const [showCaptionIcon, setShowCaptionIcon] = useState(true);
  const [required, setRequired] = useState(false);

  const toggleAlignment = () => {
    setAlignmentIndex((index) => (index + 1) % alignments.length);
  };

  const toggleLabel = () => {
    setShowGroupLabel((prev) => !prev);
  };

  const toggleCaption = () => {
    setShowCaption((prev) => !prev);
  };

  const toggleIcon = () => {
    setShowCaptionIcon((prev) => !prev);
  };

  const toggleRequired = () => {
    setRequired((prev) => !prev);
  };

  return (
    <div className="component">
      <h2>Radio Button Group</h2>

      <IfxRadioButtonGroup
        alignment={alignments[alignmentIndex]}
        show-group-label={showGroupLabel}
        group-label-text="Group Label"
        show-caption={showCaption}
        caption-text="Caption text, description, error notification"
        show-caption-icon={showCaptionIcon}
        required={required}
      >
        <IfxRadioButton value="0" size="m">Option 0</IfxRadioButton>
        <IfxRadioButton value="1" size="m">Option 1</IfxRadioButton>
        <IfxRadioButton value="2" size="m">Option 2</IfxRadioButton>
        <IfxRadioButton value="3" size="m">Option 3</IfxRadioButton>
      </IfxRadioButtonGroup>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleAlignment}>Toggle Alignment</IfxButton>
        <IfxButton variant="secondary" onClick={toggleLabel}>Toggle Label</IfxButton>
        <IfxButton variant="secondary" onClick={toggleCaption}>Toggle Caption</IfxButton>
        <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      </div>
      <br />
      
      <div class="state">
        <div><b>Alignment:</b> {alignments[alignmentIndex]}</div>
        <div><b>Show Label:</b> {String(showGroupLabel)}</div>
        <div><b>Show Caption:</b> {String(showCaption)}</div>
        <div><b>Show Icon:</b> {String(showCaptionIcon)}</div>
        <div><b>Required:</b> {String(required)}</div>
      </div>
    </div>
  );
}

export default RadioButtonGroup;