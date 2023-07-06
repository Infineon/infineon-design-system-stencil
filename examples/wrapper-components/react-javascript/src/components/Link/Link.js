import React from 'react';
import { IfxLink } from '@infineon/infineon-design-system-react';

function Link() {
    return (
        <div>
            <IfxLink href="google.com" target="_blank" position="right" underline="false" icon="true">Example link</IfxLink>
            <div>
                exmaple text for link component
                <br></br>
                example text for link component
            </div>
        </div>
    );
}

export default Link;