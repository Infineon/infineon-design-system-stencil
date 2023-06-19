import './App.css';
import { IfxAlert, IfxAccordion, IfxAccordionItem, IfxTextInput } from '@infineon/infineon-design-system-react';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleItems = () => {
    console.log('here')
  }

  const handleIfxInput = (e) => {
    console.log('ifxInput event emitted with value:', e.detail);
    setInput(e.detail);
  }

  const handleClose = (event) => {
    console.log('here', event)
  }

  return (
    <div>
      <h1 class="header">Stencil Framework integration - React + JS </h1>

      <h2>Alert</h2>
      <IfxAlert icon='calendar16' color='danger' onIfxClose={handleClose} >Achtung! Hast du etwas vergessen?</IfxAlert>

      <h2>Accordion</h2>

      <IfxAccordion auto-collapse="true" onIfxItemOpen={handleItems}>
        <IfxAccordionItem caption="How to be happy?">
          {/* I removed the duplicate text for simplicity */}
          I have no idea.
        </IfxAccordionItem>
        <IfxAccordionItem caption="How to be happy?">
          I have no idea.
        </IfxAccordionItem>
        <IfxAccordionItem caption="How to be happy?">
          I have no idea.
        </IfxAccordionItem>

      </IfxAccordion>

      <h2>Text Input</h2>

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
  )
}

export default App;
