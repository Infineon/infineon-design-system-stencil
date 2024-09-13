
import { useRef } from 'react';

import { IfxChip, IfxChipItem } from '@infineon/infineon-design-system-react';

function Chip() {

  const multiChip = useRef();
  const singleChip = useRef();

  function logSelectionMulti() {
    console.log(multiChip.current.value)
  }
  function logSelectionSingle() {
    console.log(singleChip.current.value)
  }

  return (
    <div>
      <IfxChip ref={multiChip} size='small' variant='multi' placeholder='Label' onIfxChange={logSelectionMulti}>
          <IfxChipItem value='O1'> Option 1 </IfxChipItem>
          <IfxChipItem value='O2'> Option 2 </IfxChipItem>
          <IfxChipItem value='O3'> Option 3 </IfxChipItem>
          <IfxChipItem value='O4'> Option 4 </IfxChipItem>
      </IfxChip>

      <IfxChip ref={singleChip} placeholder='Label' onIfxChange={logSelectionSingle}>
          <IfxChipItem value='O1'> Option 1 </IfxChipItem>
          <IfxChipItem value='O2'> Option 2 </IfxChipItem>
          <IfxChipItem value='O3'> Option 3 </IfxChipItem>
          <IfxChipItem value='O4'> Option 4 </IfxChipItem>
      </IfxChip>
    </div>
  );
}

export default Chip;
