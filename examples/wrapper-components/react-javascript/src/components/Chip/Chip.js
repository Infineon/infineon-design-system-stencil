
import React from 'react';

import { IfxChip, IfxDropdownItem, IfxDropdownMenu } from '@infineon/infineon-design-system-react';

function Chip() {

  return (
    <IfxChip placeholder='placeholder'>
        <IfxDropdownMenu size='m' slot='menu'>
            <IfxDropdownItem icon="" target="_self" href="">Menu Item 1</IfxDropdownItem>
            <IfxDropdownItem icon="" target="_self" href="">Menu Item 2</IfxDropdownItem>
            <IfxDropdownItem icon="" target="_self" href="">Menu Item 3</IfxDropdownItem>
            <IfxDropdownItem icon="" target="_self" href="">Menu Item 4</IfxDropdownItem>
            <IfxDropdownItem icon="" target="_self" href="">Menu Item 5</IfxDropdownItem>
        </IfxDropdownMenu>
    </IfxChip>
  );
}

export default Chip;
