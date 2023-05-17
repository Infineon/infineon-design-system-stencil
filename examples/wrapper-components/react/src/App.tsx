import { useState } from 'react'
import './App.css'
import { IfxProgressBar, IfxButton } from '@infineon/infineon-design-system-react';


function App() {
  const [count, setCount] = useState(0);
  const [progressValue, setProgressValue] = useState(25);  // Add this line

  // Define your methods here
  // const handleProgressUpdate = (event:number) => {
  //   // The event details would depend on how your IfxProgressBar's 'ifxChange' event is structured
  //   // For example, if it provides the new value in 'event.detail.value'
  //   console.log("new value ", event)
  //   const newValue = event;
  //   setProgressValue(newValue);
  // };
  const updateProgressOnClick = () => {
    setProgressValue((currentValue) => {
      return currentValue + 10;
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
