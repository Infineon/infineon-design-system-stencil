import { IfxDatePicker } from '@infineon/infineon-design-system-react';

function DatePicker() {
  return (
    <div>
      <h2>Date Picker</h2>
      <IfxDatePicker size='s' disabled={false} error={false} success={false}></IfxDatePicker>
    </div >
  );
}

export default DatePicker;