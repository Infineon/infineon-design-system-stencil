export function render(container) {

  container.innerHTML = `
  <h2>Sidebar</h2>
  
  <ifx-sidebar application-name="Application Name" collapsible="false" collapsed="false" show-header="true" show-footer="true" initial-collapse="true" terms-of-use="https://yourwebsite.com/terms" imprint="https://yourwebsite.com/imprint" privacy-policy="https://yourwebsite.com/privacy-policy" copyright-text="© 1999 - 2026 Infineon Technologies AG">
    <ifx-sidebar-title>Menu Items</ifx-sidebar-title>
    <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item>
    Section
    <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item icon="image-16">
    Menu Item
    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
    <ifx-sidebar-item active="true">Sub menu item</ifx-sidebar-item>
    <ifx-sidebar-item>Sub menu item</ifx-sidebar-item>
    </ifx-sidebar-item>
    <ifx-sidebar-item href="https://google.com" target="_blank">Menu Item</ifx-sidebar-item>
    <ifx-sidebar-item href="https://google.com" target="_blank">Menu Item</ifx-sidebar-item>
    </ifx-sidebar-item>
    <ifx-sidebar-title>Items group</ifx-sidebar-title>
    <ifx-sidebar-item href="https://google.com" target="_self" icon="image-16" number-indicator="" isactionitem="false" active="false">Item 1</ifx-sidebar-item>
    <ifx-sidebar-item href="https://google.com" target="_blank" icon="image-16">Item 2</ifx-sidebar-item>
  </ifx-sidebar>
  `;
}