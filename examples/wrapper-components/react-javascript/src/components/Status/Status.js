import React from 'react';
import { IfxStatus } from '@infineon/infineon-design-system-react';

function Status() {
    return (
        <div>
            <IfxStatus label='text' color='orange' border='true'>Status</IfxStatus>
        </div>
    );
}

export default Status;