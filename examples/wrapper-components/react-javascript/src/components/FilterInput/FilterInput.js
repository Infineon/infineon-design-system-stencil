import React from 'react';
import { IfxFilterInput } from '@infineon/infineon-design-system-react';

function FilterInput() {
    return (
        <div>
           <IfxFilterInput label='Dropdown' size='m' disabled='true' icon='calendar16' search='false' filter='true' color='danger'></IfxFilterInput> 
        </div>
    );
}

export default FilterInput;