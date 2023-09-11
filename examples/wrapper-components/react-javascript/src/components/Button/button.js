import React from 'react';
import { IfxButton } from '@infineon/infineon-design-system-react';

function Button() {
  return (
    <div >
      <IfxButton theme='default'>Yes</IfxButton>
      <IfxButton theme='danger'>No</IfxButton>
    </div>
  )
}

export default Button;