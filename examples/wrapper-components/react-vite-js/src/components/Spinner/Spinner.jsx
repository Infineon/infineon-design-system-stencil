import { useState } from 'react';
import { IfxSpinner, IfxButton } from '@infineon/infineon-design-system-react';

function Spinner() {
  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ['default', 'brand'];

  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ['s', 'm'];

  const [inverted, setInverted] = useState(false);

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  };

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  };

  const toggleInverted = () => {
    setInverted((prev) => !prev);
  };

  return (
    <div className="component">
      <h2>Spinner</h2>

      <IfxSpinner
        variant={variants[variantIndex]}
        size={sizes[sizeIndex]}
        inverted={inverted}
      ></IfxSpinner>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <IfxButton variant="secondary" onClick={toggleInverted}>Toggle Inverted</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <br />
      <br />
      <span><b>Variant:</b> {variants[variantIndex]}</span><br />
      <span><b>Inverted:</b> {String(inverted)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
    </div>
  );
}

export default Spinner;