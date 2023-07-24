import React from 'react';
import { IfxTextInput } from '@infineon/infineon-design-system-react';

function TextField() {

  const handleInput = (event) => { 
    console.log('input', event.detail)
  }

  return (
    <div>
      <IfxTextInput onIfxInput={handleInput} />
    </div>
  );
}

export default TextField;