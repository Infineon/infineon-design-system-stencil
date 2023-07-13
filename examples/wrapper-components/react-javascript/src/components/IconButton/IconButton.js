import React from 'react';
import { IfxIconButton } from '@infineon/infineon-design-system-react';

function IconButton() {
    return (
        <div>

            <div>
              <p>
                Example text above IconButton component
              </p>  
            </div>

            <IfxIconButton shape="round" variant="solid" icon="calendar24" href="www.google.com" target="_blank" color="primary" size="s" disabled="false"></IfxIconButton>
            <IfxIconButton shape="round" variant="outline" icon="arrowdown12" href="www.facebook.com" target="_blank" color="secondary" size="m" disabled="false"></IfxIconButton>
            <IfxIconButton shape="round" variant="solid" icon="filemov16" href="www.google.com" target="_blank" color="danger" size="m" disabled="false"></IfxIconButton>
            <IfxIconButton shape="round" variant="outline" icon="glasses24" href="www.google.com" target="_blank" color="primary" size="s" disabled="false"></IfxIconButton>
            <IfxIconButton shape="round" variant="outline-text" icon="share24" href="www.google.com" target="_blank" color="primary" size="m" disabled="true"></IfxIconButton>

            <div>
              <p>
                Example text below IconButton component
              </p>  
            </div>

        </div>
    );
}

export default IconButton;