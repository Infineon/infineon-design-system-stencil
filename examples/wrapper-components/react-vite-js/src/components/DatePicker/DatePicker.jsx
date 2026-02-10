import { useState } from 'react';
import { IfxDatePicker, IfxButton } from '@infineon/infineon-design-system-react';

function DatePicker() {
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [required, setRequired] = useState(false);

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ["s", "l"];

  const [typeIndex, setTypeIndex] = useState(0);
  const types = ["date", "datetime-local"];

  const toggleSuccess = () => {
    setSuccess(prevSuccess => !prevSuccess);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  const toggleRequired = () => {
    setRequired(prevRequired => !prevRequired);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  const toggleType = () => {
    setTypeIndex((index) => (index + 1) % types.length);
  }

  return (
    <div className="component">
      <h2>Date Picker</h2>
      <IfxDatePicker name="date-picker" error={error} disabled={disabled} size={sizes[sizeIndex]} success={success} value="" max="" min="" label="Label Text" caption="Caption text, description, error notification." aria-label="Date Picker" required={required} autocomplete="on" type={types[typeIndex]}></IfxDatePicker>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleSuccess}>Toggle Success</IfxButton>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <IfxButton variant="secondary" onClick={toggleType}>Toggle Type</IfxButton>
      <br />
      <br />
      <span><b>Success:</b> {String(success)}</span><br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
      <span><b>Type:</b> {types[typeIndex]}</span><br />
    </div >
  );
}

export default DatePicker;