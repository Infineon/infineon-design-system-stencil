import { IfxActionListItem, IfxActionList, IfxIcon } from '@infineon/infineon-design-system-react';

function ActionList() {
  
  return (
    <div>
      <IfxActionList list-aria-label="Navigation menu">
          <IfxActionListItem item-title="Dashboard" description="View your main dashboard" value="dashboard" item-aria-label="Navigation item" onIfxActionListItemClick={(e) => console.log("Dashboard action list item clicked", e)}>
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </IfxActionListItem>
          <IfxActionListItem item-title="Settings" value="settings" item-aria-label="Navigation item" onIfxActionListItemClick={(e) => console.log("Settings action list item clicked", e)}>
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </IfxActionListItem>
          <IfxActionListItem item-title="Profile" description="Manage your profile information" value="profile" disabled="true" item-aria-label="Navigation item" onIfxActionListItemClick={(e) => console.log("Profile action list item clicked", e)}>
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </IfxActionListItem>
          <IfxActionListItem item-title="Advanced Analytics and Reporting Dashboard with Extended Functionality" description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics." value="analytics" item-aria-label="Navigation item" onIfxActionListItemClick={(e) => console.log("Advanced Analytics action list item clicked", e)}>
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </IfxActionListItem>
        </IfxActionList>
    </div>

  );
}

export default ActionList;