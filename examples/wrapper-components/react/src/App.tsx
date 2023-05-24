import { useState } from 'react'
import './App.css'
import { IfxProgressBar, IfxButton } from '@infineon/infineon-design-system-react';


function App() {
  const [progressValue, setProgressValue] = useState(25);  // Add this line

  // Define your methods here
  const updateProgressOnClick = () => {
    setProgressValue((currentValue) => {
      return currentValue < 100 ? currentValue += 10 : currentValue = 10;
    });
  };
  


  return (
    <>
      <div className="greetings">
    <h1 className="green">Stencil Framework integration - React </h1>
      <h2>Ifx-Progress-Bar</h2>
      <IfxProgressBar value={progressValue} size="m" show-label="true"></IfxProgressBar>
      <br />
 
    <IfxButton variant="outline" icon="" position="left" href="" target="_blank" color="primary" size="m"
      disabled={false} onClick={updateProgressOnClick}>
      Increase by 10
    </IfxButton>

      </div>
    
    </>
  )
}

export default App
