import { useRef, useEffect, React } from 'react';
import { IfxTabs, IfxTab } from '@infineon/infineon-design-system-react';

function Tabs() {
  const tabsElement = useRef(null);
  const tabIndex = useRef(0);
  const INTERVAL = 20000;

  useEffect(() => {
    const interval = setInterval(() => {
      setTab();
    }, INTERVAL);
    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [])


  const handleChange = (event) => {
    console.log("emitting active tab index: ", event.detail)
  };


  const setTab = () => {
    const next = Math.floor(Math.random() * (3));
    console.log("set next active tab: ", next)
    tabsElement.current.activeTabIndex = next;
  }

  return (
    <IfxTabs onIfxTabChange={handleChange} activeTabIndex={tabIndex} ref={tabsElement} orientation="horizontal">
      <IfxTab header="a" disabled="false">
        Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </IfxTab>
      <IfxTab header="b" disabled="true">
        Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </IfxTab>
      <IfxTab header="c" disabled="false">
        Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec
        egestas odio sapien eget neque. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl
        cursus ipsum, nec egestas odio sapien eget neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </IfxTab>
    </IfxTabs>
  );
}

export default Tabs;