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

  const toggleStatusBorder = () => {
    setBorder((prev) => !prev);
  };

  return (
    <div>
      <h2>Status</h2>

      <IfxStatus
        label="text"
        color={color}
        border={border}
      ></IfxStatus>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleStatusBorder}>Toggle Border</IfxButton>
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
      <br />
      <br />
      <span><b>Border:</b> {String(border)}</span><br />
    </div>
  );
}

export default Status;