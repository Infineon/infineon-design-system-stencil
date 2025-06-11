import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-react';

function ContentSwitcher() {
 
  return (
    <div>
   <IfxContentSwitcher>
        <IfxContentSwitcherItem value="gallery" selected={true}>
          Gallery1
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="analysis">
          Analysis2
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem><IfxIcon icon="applications-16"/>Item 1</IfxContentSwitcherItem>
      </IfxContentSwitcher>
    </div>
  );
}

export default ContentSwitcher;
