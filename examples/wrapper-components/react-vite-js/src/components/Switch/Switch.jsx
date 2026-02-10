import { useState } from 'react';
import { IfxSwitch, IfxButton } from '@infineon/infineon-design-system-react';

function Switch() {
  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => {
    setDisabled((prev) => !prev);
  };

  return (
    <div className="component">
      <h2>Switch</h2>
      <IfxSwitch checked="false" name="switch" value="switch" disabled={disabled}> Switch </IfxSwitch>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Disabled:</b> {String(disabled)}</div>
      </div>
    </div>
  );
}

export default Switch;