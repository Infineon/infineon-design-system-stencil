import React from 'react';
import { IfxNumberIndicator } from '@infineon/infineon-design-system-react';

function NumberIndicator() {
    return (
        <div>
            <IfxNumberIndicator inverted = "false" color='secondary'>Number Indicator</IfxNumberIndicator>
            <div>
                random text NumberIndicator component
            </div>
        </div>
    );
}

export default NumberIndicator;