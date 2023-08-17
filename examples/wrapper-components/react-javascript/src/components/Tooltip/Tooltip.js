import React from 'react';
import { IfxTooltip } from '@infineon/infineon-design-system-react';

function Tooltip() {

  const handleInput = (event) => {
    console.log('input', event.detail)
  }

  return (
    <div>
      <IfxTooltip text="Hi, I'm a compact tooltip" variant="compact" position="right">I'm the compact tooltip reference
        element -
        Please hover me</IfxTooltip>

      <br />
      <IfxTooltip header="Dismissable tooltip header" text="Hi, I'm a dismissable tooltip" variant="dismissable"
        position="auto">I'm the dismissable tooltip reference
        element - Please click me</IfxTooltip>
    </div>
  );
}

export default Tooltip;