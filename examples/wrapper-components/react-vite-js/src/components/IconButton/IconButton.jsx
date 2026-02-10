import { useState } from 'react';
import { IfxIconButton, IfxButton } from '@infineon/infineon-design-system-react';

function IconButton() {
  const [disabled, setDisabled] = useState(false);

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["primary", "secondary", "tertiary"];

  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ["s", "m", "l"];

  const [shapeIndex, setShapeIndex] = useState(0);
  const shapes = ["round", "square"];

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  const toggleShape = () => {
    setShapeIndex((index) => (index + 1) % shapes.length);
  }

  return (
    <div className="component">
      <h2>Icon Button</h2>
      <IfxIconButton shape={shapes[shapeIndex]} variant={variants[variantIndex]} icon="calendar16" href="http://google.com" target="_blank" size={sizes[sizeIndex]} disabled={disabled}></IfxIconButton>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleShape}>Toggle Shape</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Variant:</b> {variants[variantIndex]}</div>
        <div><b>Size:</b> {sizes[sizeIndex]}</div>
        <div><b>Shape:</b> {shapes[shapeIndex]}</div>
      </div>
    </div>
  );
}

export default IconButton;