import { useState } from 'react';
import { IfxIndicator } from '@infineon/infineon-design-system-react';

function Indicator() {
  const [number, setNumber] = useState(1)
  const [variant, setVariant] = useState('number')

  const handleNumber = (val) => {
    setNumber(val === '+' ? number + 1 : number - 1)
    console.log('number', number)
  }

  const toggleVariant = () => { 
    setVariant(variant === 'dot' ? 'number' : 'dot')
  }

  return (
    <div>
      <IfxIndicator inverted='false' variant={variant} number={number} />
      <button onClick={() => handleNumber('+')}>+</button>
      <button onClick={() => handleNumber('-')}>-</button>
      <button onClick={toggleVariant}>Toggle variants</button>
    </div>
  );
}

export default Indicator;