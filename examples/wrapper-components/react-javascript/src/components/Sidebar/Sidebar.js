import React from 'react';
import { IfxSidebar, IfxSidebarItem } from '@infineon/infineon-design-system-react';

function Sidebar() {
  return (
    <IfxSidebar application-name="Application Name">
      <IfxSidebarItem>
        Header Section
        <IfxSidebarItem>
        Second Layer Menu
        </IfxSidebarItem>
      </IfxSidebarItem>
    </IfxSidebar>
  
  )
}

export default Sidebar;


