import React, { useRef } from 'react';
import { IfxAccordion, IfxButton } from '@infineon/infineon-design-system-react';
import { IfxAccordionItem } from '@infineon/infineon-design-system-react';

function Accordion() {
  const handleItems = (event) => {
    console.log("An accordion item was opened. Event details:", event);
  };

  const accordionItemRef = useRef();

  async function handleButtonClick() {
    // Get a reference to the ifx-accordion-item component instance
    const accordionItem = accordionItemRef.current;
    accordionItem.open = !accordionItem.open;
    console.log("accordion item: ", accordionItem)
  }



  return (
    <div>
      <IfxAccordion auto-collapse={true} onIfxItemOpen={handleItems}>
        <IfxAccordionItem initial-collapse={false} open={false} caption="Label" ref={accordionItemRef}>
          Content for Item #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
        <IfxAccordionItem open={false} caption="Label">
          Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
        <IfxAccordionItem open={false} caption="Label">
          Content for Item #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxAccordionItem>
      </IfxAccordion>
      <br />
      <IfxButton onClick={handleButtonClick}>Open/Close the first accordion item</IfxButton>


    </div>
  )
}




export default Accordion;