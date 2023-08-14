
import { IfxDropdown, IfxDropdownMenu, IfxDropdownItem, IfxDropdownSeparator, IfxDropdownHeader, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

function Dropdown() {
  return (
    <IfxDropdown placement="bottom-start" no-close-on-menu-click="true">
    <IfxDropdownTriggerButton icon="calendar16">
      dropdown
    </IfxDropdownTriggerButton>
    <IfxDropdownMenu size="l">
     <IfxDropdownHeader>Header Text</IfxDropdownHeader>
      <IfxDropdownItem target="_blank" href="https://www.google.de">lorem10</IfxDropdownItem>
      <IfxDropdownSeparator></IfxDropdownSeparator>
      <IfxDropdownItem icon="calendar16">Link Item</IfxDropdownItem>
      <IfxDropdownItem>Menu Item lorem10</IfxDropdownItem>
    </IfxDropdownMenu>
  </IfxDropdown>
  );
}

export default Dropdown;