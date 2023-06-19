import './App.css';

import { IfxAlert, IfxTextInput } from '@infineon/infineon-design-system-react';
import React, { useState } from 'react';


function App() {
  const [input, setInput] = useState('');

  const handleClose = (event) => {
    console.log('here', event)
  }

  const handleIfxInput = (e) => {
    console.log('ifxInput event emitted with value:', e.detail);
    setInput(e.detail);
  }

  return (
    <div>
      <IfxAlert icon='calendar16' color='danger' onIfxClose={handleClose} >Achtung! Hast du etwas vergessen?</IfxAlert>
      <IfxTextInput
        onIfxInput={handleIfxInput}
        error={false}
        disabled={false}
        success={false}
        placeholder="Placeholder"
        errorMessage="">Label
      </IfxTextInput>
      <p>Text field value: {input}</p>
    </div>
  );
}

export default App;
