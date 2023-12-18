import React from 'react';
import { IfxButton } from '@infineon/infineon-design-system-react';

function Button() {
  return (
    <div >
      <IfxButton theme='default'>Click me</IfxButton>
      <IfxButton theme='default' disabled='true'>Not clickable when disabled</IfxButton>
      <div style={{ backgroundColor: 'grey' }}>
        <IfxButton theme='danger'>  I'm a button in a div</IfxButton>
      </div>
    </div>
  )
}

export default Button;