import React from 'react';
import { IfxSidebar, IfxSidebarItem } from '@infineon/infineon-design-system-react';

function Sidebar() {
  return (
    <div >
      <IfxSidebar>
        <IfxSidebarItem href="http://google.com" target="_blank">
        Header section
        <IfxSidebarItem href="http://google.com" target="_blank">
          Second Layer
          <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">
            Third Layer
          </IfxSidebarItem>
        </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">Item Two</IfxSidebarItem>
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">Item Three</IfxSidebarItem>
        <IfxSidebarItem href="http://google.com" target="_blank" icon="image-16">Item Four</IfxSidebarItem>
      </IfxSidebar>
    </div>
  )
}

export default Sidebar;


