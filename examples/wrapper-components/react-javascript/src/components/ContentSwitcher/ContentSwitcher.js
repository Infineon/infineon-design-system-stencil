
import React from 'react';

import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-react';

function ContentSwitcher() {

  return (
    <div>
      <IfxContentSwitcher>
          <IfxContentSwitcherItem><IfxIcon icon="applications-16"/>Item 1</IfxContentSwitcherItem>
          <IfxContentSwitcherItem><IfxIcon icon="applications-16"/>Item 2</IfxContentSwitcherItem>
          <IfxContentSwitcherItem><IfxIcon icon="applications-16"/>Item 3</IfxContentSwitcherItem>
          <IfxContentSwitcherItem><IfxIcon icon="applications-16"/>Item 4</IfxContentSwitcherItem>
      </IfxContentSwitcher>
    </div>
  );
}

export default ContentSwitcher;
