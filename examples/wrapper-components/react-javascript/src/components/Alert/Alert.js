import React from 'react';
import { IfxAlert } from '@infineon/infineon-design-system-react';
import "./Alert.css"

function Alert() {

    const handleClose = (event) =>{
        console.log(event)
    }

    return (
        <div className='alertWrapper'>
            <IfxAlert icon='bell24' color='secondary' onIfxClose={handleClose}>This is an alert message! </IfxAlert>
            <div>random text
              <br></br> 
              random text, random text
            </div>
        </div>
    );
}

export default Alert;