import React from 'react';
import { IfxModal } from '@infineon/infineon-design-system-react';

function Modal() {

    const handleOverlayClick = (event) =>{
        console.log(event)
    }
    const handleOkButtonClick = (event) =>{
        console.log(event)
    }
    const handleCancelButtonClick = (event) =>{
        console.log(event)
    }

    return (
        <div>
           <IfxModal>Modal</IfxModal>
           <div name='DefaultModal'>
            <p>
                Default Modal
            </p>
            <div onIfxOverlayClick = {handleOverlayClick} onIfxHandleOkButtonClick = {handleOkButtonClick} onCancelButtonClick = {handleCancelButtonClick}><ifx-modal caption="Modal Title" close-on-overlay-click="false"><div slot="content">
                <span>This is the content of the modal.</span>
            </div></ifx-modal><ifx-button id="open">Open Modal</ifx-button></div>
           </div>

           <div name='AlertModal'>
            <p>
                Alert Modal
            </p>
            <div><ifx-modal caption="Alert Modal Title" alert-icon="test" alert-color="primary" close-on-overlay-click="true"><div slot="content">
                <span>This is the content of the modal.</span>
            </div></ifx-modal><ifx-button id="open">Open Modal</ifx-button></div>
           </div>
        </div>
    );
}

export default Modal;