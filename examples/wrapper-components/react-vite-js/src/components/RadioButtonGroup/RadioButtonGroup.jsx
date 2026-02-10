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
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleAlignment}>Toggle Alignment</IfxButton>
      <IfxButton variant="secondary" onClick={toggleLabel}>Toggle Label</IfxButton>
      <IfxButton variant="secondary" onClick={toggleCaption}>Toggle Caption</IfxButton>
      <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <br />
      <br />
      <span><b>Alignment:</b> {alignments[alignmentIndex]}</span><br />
      <span><b>Show Label:</b> {String(showGroupLabel)}</span><br />
      <span><b>Show Caption:</b> {String(showCaption)}</span><br />
      <span><b>Show Icon:</b> {String(showCaptionIcon)}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
    </div>
  );
}

export default RadioButtonGroup;