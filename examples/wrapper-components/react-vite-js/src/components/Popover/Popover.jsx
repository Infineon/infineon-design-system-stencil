import { IfxPopover, IfxButton } from '@infineon/infineon-design-system-react';

function Popover() {

  return (
    <div className="component">
      <h2>Popover</h2>
      <div className="popover">
        <IfxPopover popover-title="Popover Title" text="This is the popover content. It can contain multiple lines of text." position="auto" aria-label="Popover with additional information">
          <IfxButton>Click me</IfxButton>
        </IfxPopover>
      </div>
    </div>
  )
}

export default Popover;