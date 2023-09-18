import { IfxSwitch, IfxButton } from '@infineon/infineon-design-system-react';
import { useState } from 'react';

function Switch() {
  const [disabled, setDisabled] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted. Switch value:', switchChecked);
  };

  const handleChange = (event) => {
    console.log("Updating switch value: ", event.detail);
    setSwitchChecked(event.detail);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <IfxSwitch disabled={disabled} onIfxChange={handleChange} value={switchChecked}>
          label
        </IfxSwitch>
        <br />

        <IfxButton type="submit">Submit</IfxButton>
      </form>
      <br />
      <div>
        <IfxButton variant="outline" onClick={() => setDisabled(!disabled)}>Toggle Disabled</IfxButton>


        <IfxButton variant="outline" onClick={() => setSwitchChecked(!switchChecked)}>Toggle Value</IfxButton>

      </div>
      <br />
      <span>Disabled: {String(disabled)} </span>
      <br />

      <span>Value: {String(switchChecked)}</span>
      <br />
      <br />
    </div>
  );
}

export default Switch;
