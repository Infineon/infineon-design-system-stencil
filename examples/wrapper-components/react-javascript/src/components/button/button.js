import React from 'react';
import { IfxButton } from '@infineon/infineon-design-system-react';
import './button.css';

function Button() {
  return (
    <div class="chooseApp">
      <h1>Choose Yes or No</h1>
      <div class="button__wrapper">
        <IfxButton color='primary'>Yes</IfxButton>
        <IfxButton color='secondary'>No</IfxButton>
      </div>
    </div>
  )
}

export default Button;