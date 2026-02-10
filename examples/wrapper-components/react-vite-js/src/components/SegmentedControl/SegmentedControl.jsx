import { useState } from 'react';
import { IfxSegmentedControl, IfxSegment, IfxButton } from '@infineon/infineon-design-system-react';

function SegmentedControl() {
  const [error, setError] = useState(false);
  const [required, setRequired] = useState(false);

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ['regular', 'small'];

  const toggleError = () => {
    setError((prev) => !prev);
  };

  const toggleRequired = () => {
    setRequired((prev) => !prev);
  };

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  };

  return (
    <div className="component">
      <h2>Segmented Control</h2>

      <IfxSegmentedControl
        caption="Caption text to describe the controls"
        label="Group Label"
        size={sizes[sizeIndex]}
        error={error}
        required={required}
      >
        <IfxSegment value="Value1" icon="star-16">Label</IfxSegment>
        <IfxSegment value="Value2" icon="star-16">Label</IfxSegment>
        <IfxSegment value="Value3" icon="star-16">Label</IfxSegment>
        <IfxSegment value="Value4" icon="star-16">Label</IfxSegment>
        <IfxSegment value="Value5" icon="star-16">Label</IfxSegment>
      </IfxSegmentedControl>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <br />
      <br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
    </div>
  );
}

export default SegmentedControl;