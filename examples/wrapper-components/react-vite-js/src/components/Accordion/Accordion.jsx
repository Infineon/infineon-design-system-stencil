import  { useRef, useState } from 'react';
import { IfxAccordion, IfxAccordionItem, IfxButton } from '@infineon/infineon-design-system-react';

function Accordion() {

  const [content, setContent] = useState('Short content')


  const handleItems = (event) => {
    console.log("An accordion item was opened. Event details:", event);
  };

  const accordionItemRef = useRef();

  async function handleButtonClick() {
    const accordionItem = accordionItemRef.current;
    accordionItem.open = !accordionItem.open;
    console.log("accordion item: ", accordionItem)
  }

  const updateContent = () => { 
    setContent(`Content for Item #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.`)
  }

  return (
    <div>
      <IfxAccordion auto-collapse={true} onIfxItemOpen={handleItems}>
        <IfxAccordionItem initial-collapse={false} open={false} key={content} caption="Label" ref={accordionItemRef}>
         <div>{content}</div>
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
      <IfxButton onClick={updateContent}>Change Content dynamically</IfxButton>


    </div>
  )
}




export default Accordion;