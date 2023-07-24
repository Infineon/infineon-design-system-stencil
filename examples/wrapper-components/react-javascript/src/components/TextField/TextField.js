import React from 'react';
import { IfxTextField } from '@infineon/infineon-design-system-react';

function TextField() {

  const handleInput = (event) => {
    console.log('input', event.detail)
  }

  return (
    <div>
      <IfxTextField onIfxInput={handleInput} />
    </div>
  );
}

export default TextField;