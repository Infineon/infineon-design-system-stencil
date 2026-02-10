import { IfxButton, IfxPopover } from '@infineon/infineon-design-system-react';

function Popover() {

  return (
    <div>
      <IfxPopover popover-title="Popover Title" text="This is the popover content. It can contain multiple lines of text." position="auto" aria-label="Popover with additional information">
      <IfxButton>Click me</IfxButton>
      </IfxPopover>
    </div>
  );
}

export default Popover;