import { IfxStatus } from '@infineon/infineon-design-system-react';

function Status() {
  return (
    <div>
      <h2>Status</h2>
      <IfxStatus label="Status without border" color="ocean-500" border="false"></IfxStatus>
      <br />
      <IfxStatus label="Status with border" color="orange-500" border="true"></IfxStatus>
    </div >
  );
}

export default Status;