import React from 'react';
import { IfxSwitch } from '@infineon/infineon-design-system-react';

function Switch() {
    return (
        <div>
            <IfxSwitch value='true'></IfxSwitch>

            <div>
                <p>
                    Text for Switch component
                </p>
            </div>
        </div>
    );
}

export default Switch;