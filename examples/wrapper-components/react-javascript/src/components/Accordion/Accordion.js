import React from 'react';
import { IfxAccordion } from '@infineon/infineon-design-system-react';
import { IfxAccordionItem } from '@infineon/infineon-design-system-react';

function Accordion() {
  const handleItems = (event) => {
    console.log("An accordion item was opened. Event details:", event);
  };

  return (
    <div>


      <IfxAccordion auto-collapse="true" onIfxItemOpen={handleItems}>
        <IfxAccordionItem caption="How to be happy?">
          I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.
          I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.
          I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.
          I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.
          I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.I have no idea. I have no idea.  I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea. I have no idea.
        </IfxAccordionItem>
        <IfxAccordionItem caption="How to be happy?">
          I have no idea.
        </IfxAccordionItem>
        <IfxAccordionItem caption="How to be happy?">
          I have no idea.
        </IfxAccordionItem>
      </IfxAccordion>
    </div>
  )
}

export default Accordion;