import { useState } from 'react';
import {
  IfxStatus,
  IfxButton,
  IfxDropdown,
  IfxDropdownTriggerButton,
  IfxDropdownMenu,
  IfxDropdownItem
} from '@infineon/infineon-design-system-react';

function Status() {
  const [border, setBorder] = useState(true);
  const [color, setColor] = useState('ocean-500');

  const toggleBorder = () => {
    setBorder((prev) => !prev);
  };

  return (
    <div className="component">
      <h2>Status</h2>
      <IfxStatus label="text" color={color} border={border}></IfxStatus>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleBorder}>Toggle Border</IfxButton>
        <IfxDropdown placement="bottom-start">
          <IfxDropdownTriggerButton variant="secondary">
            Change Color
          </IfxDropdownTriggerButton>
          <IfxDropdownMenu size="s">
            {[
              'green-500',
              'orange-500',
              'ocean-500',
              'red-500',
              'lawn-500',
              'berry-500'
            ].map((c) => (
              <IfxDropdownItem key={c} onClick={() => setColor(c)}>
                {c}
              </IfxDropdownItem>
            ))}
          </IfxDropdownMenu>
        </IfxDropdown>
      </div>
      <br />
      <br />

      <div class="state">
        <div><b>Border:</b> {String(border)}</div>
      </div>
    </div>
  );
}

export default Status;