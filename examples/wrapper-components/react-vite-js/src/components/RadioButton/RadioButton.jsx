import { useState } from 'react';
import { IfxRadioButton, IfxButton } from '@infineon/infineon-design-system-react';

function RadioButton() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ['s', 'm'];

  const toggleDisabled = () => {
    setDisabled((prev) => !prev);
  };

  const toggleError = () => {
    setError((prev) => !prev);
  };

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  };

  return (
    <div className="component">
      <h2>Radio Button</h2>

      <IfxRadioButton size={sizes[sizeIndex]} name="radio-button" value="radio" checked="false" disabled={disabled} error={error}> Text </IfxRadioButton>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Error:</b> {String(error)}</div>
        <div><b>Size:</b> {sizes[sizeIndex]}</div>
      </div>
    </div>
  );
}

export default RadioButton;