import React from 'react';
import { IfxSidebar, IfxSidebarItem } from '@infineon/infineon-design-system-react';

function Sidebar() {
    return (
        <div>
            <IfxSidebar>
                <IfxSidebarItem icon='calendar16'>First Item of the Sidebar</IfxSidebarItem>
                <IfxSidebarItem icon='arrowdown24'>Second Item of the Sidebar</IfxSidebarItem>
                <IfxSidebarItem icon='attachment24'>Third Item of the Sidebar</IfxSidebarItem>
                <IfxSidebarItem icon='bargraph24'>Fourth Item of the Sidebar</IfxSidebarItem>
                <IfxSidebarItem icon='cadd24'>Fifth Item of the Sidebar</IfxSidebarItem>

            </IfxSidebar>
        </div>
    );
}

export default Sidebar;