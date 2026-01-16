import { useState } from 'react';
import { IfxSwitch, IfxButton } from '@infineon/infineon-design-system-react';

function Switch() {
  const [disabled, setDisabled] = useState(false);

  const toggleSwitchDisabled = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div>
      <h2>Switch</h2>

      <IfxSwitch
        disabled={disabled}
        checked="false"
      >
        Label
      </IfxSwitch>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleSwitchDisabled}>Toggle Disabled</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
    </div>
  );
}

export default Switch;