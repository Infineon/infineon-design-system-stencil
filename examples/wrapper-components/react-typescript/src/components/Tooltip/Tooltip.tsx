import { IfxTooltip } from '@infineon/infineon-design-system-react';

function Tooltip() {


  return (
    <div>
      <IfxTooltip text="Hi, I'm a compact tooltip" variant="compact" position="right">I'm the compact tooltip reference
        element -
        Please hover me</IfxTooltip>

      <br />
      <IfxTooltip header="Dismissible tooltip header" text="Hi, I'm a dismissible tooltip" variant="dismissible"
        position="auto">I'm the dismissible tooltip reference
        element - Please click me</IfxTooltip>
      <br />
      <IfxTooltip header="Dismissible tooltip header" text="Hi, I'm a dismissible tooltip" variant="extended"
        position="auto">I'm the dismissible tooltip reference
        element - Please click me</IfxTooltip>
    </div>
  );
}

export default Tooltip;