import React from 'react';
import { IfxChip } from '@infineon/infineon-design-system-react';
import { IfxDropdownMenu } from '@infineon/infineon-design-system-react';
import { IfxDropdownItem } from '@infineon/infineon-design-system-react';

function Chips() {
    return (
        <div>
            <IfxChip placeholder="Default Label for Chip">
                <IfxDropdownMenu slot='menu'>
                    <IfxDropdownItem value='Option1' checkable>Option1</IfxDropdownItem>
                    <IfxDropdownItem value='Option2' checkable>Option2</IfxDropdownItem>
                    <IfxDropdownItem value='Option3' checkable>Option3</IfxDropdownItem>
                    <IfxDropdownItem value='Option4' checkable>Option4</IfxDropdownItem>
                </IfxDropdownMenu>
            </IfxChip>

            <IfxChip placeholder='Label 2 for Chip'>
                <IfxDropdownMenu slot='menu'>
                    <IfxDropdownItem value='Option1' checkable>Option1</IfxDropdownItem>
                    <IfxDropdownItem value='Option2' checkable>Option2</IfxDropdownItem>
                    <IfxDropdownItem value='Option3' checkable>Option3</IfxDropdownItem>
                    <IfxDropdownItem value='Option4' checkable>Option4</IfxDropdownItem>
                </IfxDropdownMenu>
            </IfxChip> 

            <IfxChip placeholder='Label 3 for Chip'></IfxChip> 
            <IfxChip placeholder='Label 4 for Chip'></IfxChip>
        </div>
    );
}

export default Chips;