
import React from 'react';

import { IfxChip, IfxChipItem } from '@infineon/infineon-design-system-react';

function Chip() {

  return (
    <div>
      <IfxChip size='small' variant='multi' placeholder='Label'>
          <IfxChipItem value='O1'> Option 1 </IfxChipItem>
          <IfxChipItem value='O2'> Option 2 </IfxChipItem>
          <IfxChipItem value='O3'> Option 3 </IfxChipItem>
          <IfxChipItem value='O4'> Option 4 </IfxChipItem>
      </IfxChip>
      <IfxChip placeholder='Label'>
          <IfxChipItem value='O1'> Option 1 </IfxChipItem>
          <IfxChipItem value='O2'> Option 2 </IfxChipItem>
          <IfxChipItem value='O3'> Option 3 </IfxChipItem>
          <IfxChipItem value='O4'> Option 4 </IfxChipItem>
      </IfxChip>
    </div>
  );
}

export default Chip;
