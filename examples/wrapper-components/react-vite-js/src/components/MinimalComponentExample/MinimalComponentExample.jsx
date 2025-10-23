import { MinimalComponent, MinimalComponentWrapper, IfxIcon } from '@infineon/infineon-design-system-react';

function MinimalComponentExample() {
  
  return (
    <div>
      <MinimalComponentWrapper list-aria-label="Navigation menu">
          <MinimalComponent item-title="Dashboard" description="View your main dashboard" value="dashboard" item-aria-label="Navigation item">
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </MinimalComponent>
          <MinimalComponent item-title="Settings" value="settings" item-aria-label="Navigation item">
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </MinimalComponent>
          <MinimalComponent item-title="Profile" description="Manage your profile information" value="profile" disabled="true" item-aria-label="Navigation item">
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </MinimalComponent>
          <MinimalComponent item-title="Advanced Analytics and Reporting Dashboard with Extended Functionality" description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics." value="analytics" item-aria-label="Navigation item">
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </MinimalComponent>
        </MinimalComponentWrapper>
    </div>

  );
}

export default MinimalComponentExample;