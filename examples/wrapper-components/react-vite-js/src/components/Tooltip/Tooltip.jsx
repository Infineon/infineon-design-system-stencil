import { useState } from 'react';
import { IfxTooltip, IfxButton } from '@infineon/infineon-design-system-react';

function Tooltip() {
  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ['compact', 'dismissible', 'extended'];

  const [positionIndex, setPositionIndex] = useState(0);
  const positions = ['auto', 'top', 'right', 'bottom', 'left'];

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  };

  const togglePosition = () => {
    setPositionIndex((index) => (index + 1) % positions.length);
  };

  return (
    <div className="component">
      <h2>Tooltip</h2>

      <IfxTooltip
        header="Tooltip header"
        text="Hi, I'm a tooltip"
        variant={variants[variantIndex]}
        position={positions[positionIndex]}
      >
        Tooltip reference element – interact with me
      </IfxTooltip>

      <br />
      <br />

      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>

      <IfxButton variant="secondary" onClick={toggleVariant}>
        Toggle Variant
      </IfxButton>

      <IfxButton variant="secondary" onClick={togglePosition}>
        Toggle Position
      </IfxButton>

      <br />
      <br />

      <span><b>Variant:</b> {variants[variantIndex]}</span><br />
      <span><b>Position:</b> {positions[positionIndex]}</span><br />
    </div>
  );
}

export default Tooltip;