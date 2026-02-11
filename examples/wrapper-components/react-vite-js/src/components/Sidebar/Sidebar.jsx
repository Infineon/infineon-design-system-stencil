import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-react';


function Sidebar() {

  return (
    <div className="component">
      <h2>Sidebar</h2>
      <IfxSidebar application-name="Application Name" collapsible="true" collapsed="false" hide-menu-label="Hide Menu" show-header="true" show-footer="true" initial-collapse="true" terms-of-use="undefined" imprint="undefined" privacy-policy="undefined" copyright-text="© 1999 - 2026 Infineon Technologies AG">
        <IfxSidebarTitle>Menu Items</IfxSidebarTitle>
        <IfxSidebarItem href="https://google.com" target="_blank" icon="image-16">Menu Item</IfxSidebarItem>
        <IfxSidebarItem href="https://google.com" target="_blank" icon="image-16">Menu Item</IfxSidebarItem>
        <IfxSidebarItem href="https://google.com" target="_blank" icon="image-16">Menu Item</IfxSidebarItem>
        <IfxSidebarItem href="https://google.com" target="_blank" icon="image-16">Menu Item</IfxSidebarItem>
        <IfxSidebarItem>
          Section
          <IfxSidebarItem href="https://google.com" target="_blank" icon="image-16">Menu Item</IfxSidebarItem>
          <IfxSidebarItem icon="image-16">
            Menu Item
            <IfxSidebarItem>Sub menu item</IfxSidebarItem>
            <IfxSidebarItem active="true">Sub menu item</IfxSidebarItem>
            <IfxSidebarItem>Sub menu item</IfxSidebarItem>
          </IfxSidebarItem>
          <IfxSidebarItem href="https://google.com" target="_blank">Menu Item</IfxSidebarItem>
          <IfxSidebarItem href="https://google.com" target="_blank">Menu Item</IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarTitle>Items group</IfxSidebarTitle>
        <IfxSidebarItem href="https://google.com" target="_self" icon="image-16" number-indicator="" isactionitem="false" active="false">Item 1</IfxSidebarItem>
        <IfxSidebarItem href="https://google.com" target="_blank" icon="image-16">Item 2</IfxSidebarItem>
      </IfxSidebar>
    </div>
  )
}

export default Sidebar;