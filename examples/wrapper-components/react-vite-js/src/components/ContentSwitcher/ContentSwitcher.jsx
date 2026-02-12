import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-react';

function ContentSwitcher() {

  return (
    <div className="component">
      <h2>Content Switcher</h2>
      <IfxContentSwitcher><IfxContentSwitcherItem value="item 1">
        <IfxIcon icon="applications-16"></IfxIcon> Item 1
      </IfxContentSwitcherItem><IfxContentSwitcherItem value="item 2">
          <IfxIcon icon="applications-16"></IfxIcon> Item 2
        </IfxContentSwitcherItem><IfxContentSwitcherItem value="item 3">
          <IfxIcon icon="applications-16"></IfxIcon> Item 3
        </IfxContentSwitcherItem><IfxContentSwitcherItem value="item 4">
          <IfxIcon icon="applications-16"></IfxIcon> Item 4
        </IfxContentSwitcherItem></IfxContentSwitcher>
    </div>
  );
}

export default ContentSwitcher;