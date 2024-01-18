import React from 'react';
import { IfxNavbar, IfxNavbarMenuItem, IfxSearchBar, IfxNavbarItem, IfxNavbarMenu } from '@infineon/infineon-design-system-react';

function Navbar() {
  return (
    <div>
      <IfxNavbar application-name="Application name" fixed="false" logo-href="https://google.com">
        <IfxNavbarItem hide-label="false" icon="calendar16" slot="left-item" target="_blank" href="https://google.com">Menu Item1</IfxNavbarItem>
        <IfxNavbarItem  slot="left-item">Menu Item</IfxNavbarItem>
        <IfxNavbarItem  slot="left-item">Menu Item</IfxNavbarItem>

        <IfxNavbarMenu slot="menu">
          <IfxNavbarMenuItem href="https://google.com" target="_blank">Item 1</IfxNavbarMenuItem>
          <IfxNavbarMenuItem href="https://google.com">Item 2</IfxNavbarMenuItem>
          <IfxNavbarMenuItem href="https://google.com">Item 3</IfxNavbarMenuItem>
        </IfxNavbarMenu>

        <IfxSearchBar size="default" slot="search-bar-right" is-open="false" show-close-button="true"></IfxSearchBar>

        <IfxNavbarItem hide-label="false" slot="right-item">Right One</IfxNavbarItem>
        <IfxNavbarItem hide-label="false" slot="right-item">Right Two</IfxNavbarItem>
        <IfxNavbarItem hide-label="false" slot="right-profile-item">Tisho</IfxNavbarItem>
      </IfxNavbar>
    </div>
  );
}

export default Navbar;