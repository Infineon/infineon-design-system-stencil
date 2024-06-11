import React from 'react';
import { IfxDatePicker } from '@infineon/infineon-design-system-react';

function DatePicker() {
  return (
    <div>
      <IfxDatePicker size='s' disabled={false} error={false} success={false}></IfxDatePicker>
    </div >
  );
}

export default DatePicker;