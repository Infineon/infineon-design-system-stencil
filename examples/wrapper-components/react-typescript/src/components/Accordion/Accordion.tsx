import React, { SyntheticEvent } from 'react';
import { IfxAccordion, IfxAccordionItem } from '@infineon/infineon-design-system-react';

const Accordion: React.FC = () => {
  const handleItems = (event: SyntheticEvent) => {
    console.log("An accordion item was opened. Event details:", event);
  };

  return (
    <div>
      <IfxAccordion autoCollapse={true} onIfxItemOpen={handleItems}>
        <IfxAccordionItem caption="How to be happy?">
          {/* your content here */}
        </IfxAccordionItem>
        <IfxAccordionItem caption="How to be happy?">
          {/* your content here */}
        </IfxAccordionItem>
        <IfxAccordionItem caption="How to be happy?">
          {/* your content here */}
        </IfxAccordionItem>
      </IfxAccordion>
    </div>
  )
}

export default Accordion;
