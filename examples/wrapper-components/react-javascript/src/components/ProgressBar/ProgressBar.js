import React from 'react';
import { IfxProgressBar } from '@infineon/infineon-design-system-react';

function ProgressBar() {
  return (
    <div>
      <IfxProgressBar value={50} showLabel={true}></IfxProgressBar>
    </div>
  );
}

export default ProgressBar;