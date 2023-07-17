import React from 'react';
import { IfxTabs, IfxTab } from '@infineon/infineon-design-system-react';

function Tab() {
  return (
    <IfxTabs orientation="horizontal">
      <IfxTab header="tab 01">
      This is tab 1
      </IfxTab>
      <IfxTab header="tab 02">
      Another tab
      </IfxTab>
    </IfxTabs>
  );
}

export default Tab;