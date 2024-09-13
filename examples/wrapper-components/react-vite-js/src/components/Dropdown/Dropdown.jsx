import { IfxDropdown, IfxDropdownMenu, IfxDropdownItem, IfxDropdownSeparator, IfxDropdownHeader, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

function Dropdown() {

  const handleValue = (e) => { 
    console.log('selected dropdown option', e.detail)
  }
  return (
    <IfxDropdown placement="bottom-start" no-close-on-menu-click="true">
    <IfxDropdownTriggerButton icon="calendar16">
      dropdown
    </IfxDropdownTriggerButton>
    <IfxDropdownMenu size="l" onIfxDropdownMenu={handleValue}>
     <IfxDropdownHeader>Header Text</IfxDropdownHeader>
      <IfxDropdownItem>Menu Item</IfxDropdownItem>
      <IfxDropdownSeparator></IfxDropdownSeparator>
      <IfxDropdownItem>Menu Item</IfxDropdownItem>
      <IfxDropdownItem>Menu Item</IfxDropdownItem>
    </IfxDropdownMenu>
  </IfxDropdown>
  );
}

export default Dropdown;