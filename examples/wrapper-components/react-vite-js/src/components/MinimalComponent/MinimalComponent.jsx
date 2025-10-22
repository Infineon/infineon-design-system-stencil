import { MinimalComponent, MinimalComponentWrapper, IfxIcon } from '@infineon/infineon-design-system-react';

function MinimalComponent() {
  
  return (
    <div>
      <MinimalComponentWrapper list-aria-label="Navigation menu">
          <MinimalComponent item-title="Dashboard" description="View your main dashboard" value="dashboard" item-aria-label="Navigation item">
            
            <IfxIcon slot="trailing" icon="chevron-right-16"></IfxIcon>
          </MinimalComponent>
        </MinimalComponentWrapper>
    </div>

  );
}

export default MinimalComponent;