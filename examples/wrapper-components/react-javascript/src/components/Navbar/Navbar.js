import React from 'react';
import { IfxDropdownItem, IfxDropdownMenu, IfxNavbar, IfxNavbarMenuItem, IfxSearchBar } from '@infineon/infineon-design-system-react';

function Navbar() {
    return (
        <div>
            <IfxNavbar application-name="Application name">
                <IfxNavbarMenuItem  slot="left-menu-item">Menu Item</IfxNavbarMenuItem>
                <IfxNavbarMenuItem  slot="left-menu-item">Menu Item</IfxNavbarMenuItem>
            
                <IfxDropdownMenu slot="dropdown-menu">
                <IfxDropdownItem>Menu Item</IfxDropdownItem>
                <IfxDropdownItem>Menu Item</IfxDropdownItem>
                <IfxDropdownItem>Menu Item</IfxDropdownItem>
                </IfxDropdownMenu>

                <IfxSearchBar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></IfxSearchBar>

                <IfxNavbarMenuItem hide-label="false" slot="right-menu-item">Right One</IfxNavbarMenuItem>
                <IfxNavbarMenuItem hide-label="false" slot="right-menu-item">Right Two</IfxNavbarMenuItem>
                <IfxNavbarMenuItem hide-label="false" slot="right-menu-profile-item">Right Three</IfxNavbarMenuItem>
            </IfxNavbar>
        </div>
    );
}

export default Navbar;