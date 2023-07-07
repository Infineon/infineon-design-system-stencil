import React, { useState } from 'react';
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
      <IfxProgressBar value={progressValue} showLabel={true}></IfxProgressBar>
      <IfxButton onClick={updateProgressOnClick} variant="outline" href="" target="_blank" color="primary" size="s"
        disabled={false} icon={false}>
        Update Progress
      </IfxButton>
    </div >
  );
}

export default ProgressBar;
