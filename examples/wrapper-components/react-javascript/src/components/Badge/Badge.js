import React from 'react';
import { IfxBadge } from '@infineon/infineon-design-system-react';

function Badge() {
  return (
    <div style={{ '--ifx-font-family': '"Arial black"' }}>
      <IfxBadge>Label</IfxBadge>
    </div>
  );
}

export default Badge;