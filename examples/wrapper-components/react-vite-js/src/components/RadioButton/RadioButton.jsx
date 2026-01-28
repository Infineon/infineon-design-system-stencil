import { useState } from 'react';
import { IfxRadioButton, IfxButton } from '@infineon/infineon-design-system-react';

function RadioButton() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(false);

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ['s', 'm'];

  const toggleRadioBtnDisabled = () => {
    setDisabled((prev) => !prev);
  };

  const toggleRadioBtnError = () => {
    setError((prev) => !prev);
  };

  const toggleRadioBtnChecked = () => {
    setChecked((prev) => !prev);
  };

  const toggleRadioBtnSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  };

  return (
    <div>
      <h2>Radio Button</h2>

      <IfxRadioButton
        size={sizes[sizeIndex]}
        name="radio-button"
        value="radio"
        checked={checked}
        disabled={disabled}
        error={error}
      >
        Text
      </IfxRadioButton>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleRadioBtnDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRadioBtnError}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRadioBtnChecked}>Toggle Checked</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRadioBtnSize}>Toggle Size</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Checked:</b> {String(checked)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
    </div>
  );
}

export default RadioButton;