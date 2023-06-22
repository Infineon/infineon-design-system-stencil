import { useRef, useState } from 'react'
import './App.css'
import { IfxProgressBar, IfxSearchBar, IfxButton, IfxTextInput } from '@infineon/infineon-design-system-react';


function App() {
  const [progressValue, setProgressValue] = useState(25);  // Add this line
  const ifxButtonRef = useRef(null);

  const [input, setInput] = useState('');
 
  const handleIfxInput = (e: CustomEvent) => {
    console.log('ifxInput event emitted with value:', e.detail);
    setInput(e.detail);
  }

  // Define your methods here
  const updateProgressOnClick = () => {
    setProgressValue((currentValue) => {
      return currentValue < 100 ? currentValue += 10 : currentValue = 10;
    });
    console.log("ifxButtonRef. ", ifxButtonRef.current)
   };

  const handleSearch = (event: CustomEvent) => {
    console.log("handling search: ", event.detail?.detail)
  };
  

  const handleMouseOver = () => {
    console.log('Mouse over event detected');
  };

  return (
    <>
      <div>
    <h1 className="header">Stencil Framework integration - React + TS </h1>
    <h2>Ifx-Search-Bar</h2>
    <IfxSearchBar onIfxChange={handleSearch} style={{ width: '100%' }}  show-close-button="true"></IfxSearchBar>
    <br />

      <h2>Ifx-Progress-Bar</h2>
      <IfxProgressBar value={progressValue} size="m" show-label="true"></IfxProgressBar>
      <br />
 
    <IfxButton ref={ifxButtonRef} variant="outline" icon="" position="left" href="" target="_blank" color="primary" size="m"
      disabled={false} onClick={updateProgressOnClick} onMouseOver={handleMouseOver}>
      Increase by 10
    </IfxButton>
   <h2>Text Input</h2>
      <div>
        <IfxTextInput
          onIfxInput={handleIfxInput} 
          error={false} 
          disabled={false} 
          success={false} 
          placeholder="Placeholder"
          errorMessage="">Label
        </IfxTextInput>
      </div>
      <p>Text field value: {input}</p>
      <br />
      </div>
    
    </>
  )
}

export default App
