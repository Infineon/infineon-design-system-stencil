import { useState } from 'react';
import { IfxNumberIndicator } from '@infineon/infineon-design-system-react';

function NumberIndicator() {
  const [number, setNumber] = useState(1)
  const handleNumber = (val) => {
    setNumber(val === '+' ? number + 1 : number - 1)
  }
  return (
    <div>
      <IfxNumberIndicator inverted='false'>{number}</IfxNumberIndicator>
      <button onClick={() => handleNumber('+')}>+</button>
      <button onClick={() => handleNumber('-')}>-</button>
    </div>
  );
}

export default NumberIndicator;