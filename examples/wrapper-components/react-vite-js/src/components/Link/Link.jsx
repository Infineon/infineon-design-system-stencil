import { useState } from 'react';
import { IfxLink, IfxButton } from '@infineon/infineon-design-system-react';

function Link() {
  const [disabled, setDisabled] = useState(false);

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["bold", "underlined", "title", "menu"];

  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ["s", "m", "l", "xl"];

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  return (
    <div className="component">
      <h2>Link</h2>
      <IfxLink href="" aria-label="Link" target="_blank" size={sizes[sizeIndex]} variant={variants[variantIndex]} disabled={disabled} download="" >
        Link
      </IfxLink>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Variant:</b> {variants[variantIndex]}</div>
        <div><b>Size:</b> {sizes[sizeIndex]}</div>
        <div><b>Disabled:</b> {String(disabled)}</div>
      </div>
    </div>
  );
}

export default Link;