import React from 'react';

function Dropdown() {
  return (
    <ifx-dropdown placement="bottom-start" no-close-on-menu-click="true">
    <ifx-dropdown-trigger-button icon="calendar16">
      dropdown
    </ifx-dropdown-trigger-button>
    <ifx-dropdown-menu size="l">
     <ifx-dropdown-header>Header Text</ifx-dropdown-header>
      <ifx-dropdown-item target="_blank" href="https://www.google.de">lorem10</ifx-dropdown-item>
      <ifx-dropdown-separator></ifx-dropdown-separator>
      <ifx-dropdown-item icon="calendar16">Link Item</ifx-dropdown-item>
      <ifx-dropdown-item>Menu Item lorem10</ifx-dropdown-item>
    </ifx-dropdown-menu>
  </ifx-dropdown>
  );
}

export default Dropdown;