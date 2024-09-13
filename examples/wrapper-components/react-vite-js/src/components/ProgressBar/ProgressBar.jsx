import  { useState } from 'react';
import { IfxProgressBar, IfxButton } from '@infineon/infineon-design-system-react';

function ProgressBar() {
  const [progressValue, setProgressValue] = useState(25);

  // Define your methods here
  const updateProgressOnClick = () => {
    setProgressValue((currentValue) => {
      console.log("updating progress-bar value ", progressValue)
      if (currentValue < 100) {
        return currentValue + 10;
      } else {
        return 10;
      }
    });
  };

  return (
    <div>
      Small
      <IfxProgressBar value={progressValue} size="s" ></IfxProgressBar>
      <br/>
      Medium
      <IfxProgressBar value={progressValue} size="m" showLabel={true}></IfxProgressBar>
      <br/>
      <IfxButton onClick={updateProgressOnClick} theme='default' target="_blank">
        Update Progress
      </IfxButton>
    </div >
  );
}

export default ProgressBar;