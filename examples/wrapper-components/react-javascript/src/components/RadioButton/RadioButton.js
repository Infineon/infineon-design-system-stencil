import React from 'react';
import { IfxRadioButton } from '@infineon/infineon-design-system-react';

function RadioButton() {
    return (
        <div>
            <div>
                RadioButton example text
            </div>
            <br></br>
           <IfxRadioButton disabled='false' mutable='true' error='false'>RadioButton</IfxRadioButton> 
           <div>
                <br></br>
                RadioButton example text
           </div>
        </div>
    );
}

export default RadioButton;