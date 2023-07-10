import React from 'react';
import { IfxLink } from '@infineon/infineon-design-system-react';

function Link() {
  return (
    <div>
      <IfxLink href="http://google.com" color="secondary" target="_blank" bold="" underline="false">Link</IfxLink>
    </div>
  );
}

export default Link;