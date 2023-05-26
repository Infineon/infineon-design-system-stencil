import './App.css';
import { useState } from 'react'
import { IfxSearchBar, IfxProgressBar, IfxButton } from '@infineon/infineon-design-system-react';


function App() {
  const [progressValue, setProgressValue] = useState(25);  // Add this line

  // Define your methods here
  const updateProgressOnClick = () => {
    setProgressValue((currentValue) => {
      console.log("updating progress-bar value ", progressValue)
      return currentValue < 100 ? currentValue += 10 : currentValue = 10;
    });
  };
  const handleSearch = (event) => {
    console.log("handling search: ", event.detail?.detail)
  };


  const handleMouseOver = () => {
    console.log('Mouse over event detected');
  };

  return (
    <div className="App">
      <h1 className="green">Stencil Framework integration - React + JS</h1>
      <h2>Ifx-Search-Bar</h2>
      <IfxSearchBar onIfxChange={handleSearch} style={{ width: '100%' }} show-close-button="true"></IfxSearchBar>
      <br />

      <h2>Ifx-Progress-Bar</h2>
      <IfxProgressBar value={progressValue} size="m" show-label="true"></IfxProgressBar>
      <br />

      <IfxButton variant="outline" icon="" position="left" href="" target="_blank" color="primary" size="m"
        disabled={false} onClick={updateProgressOnClick} onMouseOver={handleMouseOver}>
        Increase by 10
      </IfxButton>
    </div>
  );
}

export default App;
