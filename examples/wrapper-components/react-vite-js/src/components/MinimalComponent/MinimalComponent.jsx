import { MinimalComponent, IfxIcon } from '@infineon/infineon-design-system-react';

function MinimalComponent() {
  
  return (
    <div>
      <MinimalComponent item-title="Dashboard" description="View your main dashboard" value="dashboard" item-aria-label="Navigation item">
        
        <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
      </MinimalComponent>
    </div>

  );
}

export default MinimalComponent;