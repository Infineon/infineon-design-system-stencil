import { useState } from 'react';
import { IfxIndicator, IfxButton } from '@infineon/infineon-design-system-react';

function Indicator() {
  const [inverted, setInverted] = useState(false);

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["number", "dot",];

  const toggleInverted = () => {
    setInverted(prevInverted => !prevInverted);
  }

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  return (
    <div className="component">
      <h2>Indicator</h2>
      <IfxIndicator variant={variants[variantIndex]} number="1" inverted={inverted} />
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleInverted}>Toggle Inverted</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Variant:</b> {variants[variantIndex]}</div>
        <div><b>Inverted:</b> {String(inverted)}</div>
      </div>
    </div>
  );
}

export default Indicator;