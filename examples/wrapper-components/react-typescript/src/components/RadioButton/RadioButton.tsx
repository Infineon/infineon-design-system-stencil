import React, { FormEvent, useState } from 'react';
import { IfxRadioButton, IfxButton } from '@infineon/infineon-design-system-react';

const RadioButton: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [radioBtnValue, setRadioBtnValue] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted. Radio Button value:', radioBtnValue);
  };

  const handleChange = (event: CustomEvent) => {
    console.log("Updating radio btn value: ", event.detail);
    setRadioBtnValue(event.detail);
  };

  return (
    <div>
 
      <form onSubmit={handleSubmit}>
        <IfxRadioButton disabled={disabled} onIfxChange={handleChange} value={radioBtnValue} error={error} name="name">
          label
        </IfxRadioButton>
        <br />

        <IfxButton type="submit">Submit</IfxButton>
      </form>
      <br />
      <div>
        <IfxButton variant="outline" onClick={() => setDisabled(!disabled)}>Toggle Disabled</IfxButton>

        <IfxButton variant="outline" onClick={() => setError(!error)}>Toggle Error</IfxButton>

        <IfxButton variant="outline" onClick={() => setRadioBtnValue(!radioBtnValue)}>Toggle Value</IfxButton>

      </div>
      <br />
      <span>Disabled: {String(disabled)} </span>
      <br />
      <span>Error: {String(error)} </span>
      <br />
      <span>Value: {String(radioBtnValue)}</span>
      <br />
      <br />
    </div>
  );
}

export default RadioButton;
