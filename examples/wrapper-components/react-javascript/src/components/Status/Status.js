import React from 'react';
import { IfxStatus } from '@infineon/infineon-design-system-react';

function Status() {
  return (
    <div>
      <IfxStatus label="Status without border" color="red" border="false"></IfxStatus>
      <br />
      <IfxStatus label="Status with border" color="orange" border="true"></IfxStatus>
    </div >
  );
}

export default Status;