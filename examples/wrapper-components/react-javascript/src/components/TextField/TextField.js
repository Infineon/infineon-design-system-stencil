import React from 'react';
import { IfxButton, IfxTextField } from '@infineon/infineon-design-system-react';

function TextField() {

  const handleInput = (event) => {
    console.log('input', event.detail)
  }

  return (
    <div>
      <form id="another-form">
        <IfxTextField onIfxInput={handleInput} />
        <IfxButton type="submit" theme="default" size="s" disabled="false" icon="false">
          Submit form
        </IfxButton>
        <IfxButton type="reset" variant="secondary" theme="default" size="s" disabled="false" icon="false">
          Reset form
        </IfxButton>
      </form>
    </div>
  );
}

export default TextField;