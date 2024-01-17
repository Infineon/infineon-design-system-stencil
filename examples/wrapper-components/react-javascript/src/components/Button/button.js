import React, { useState } from 'react';
import { IfxButton } from '@infineon/infineon-design-system-react';

function Button() {
  const [fullWidth, setFullWidth] = useState(false);

  return (
    <div >
      <IfxButton theme='default'>Click me</IfxButton>
      <IfxButton theme='default' disabled='true'>Not clickable when disabled</IfxButton>
      <div style={{ backgroundColor: 'grey' }}>
        <IfxButton fullWidth = {fullWidth} theme='danger' onClick={() => {setFullWidth(!fullWidth)}}>  I'm a button in a div. Click to toggle full width</IfxButton>
      </div>
    </div>
  )
}

export default Button;