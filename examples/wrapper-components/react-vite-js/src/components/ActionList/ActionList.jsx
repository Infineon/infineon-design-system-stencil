import { useState } from 'react';
import { IfxActionListItem, IfxActionList, IfxCheckbox, IfxButton } from '@infineon/infineon-design-system-react';

function ActionList() {

  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  return (
    <div className="component">
      <h2>Action List</h2>
      <IfxActionList list-aria-label="Interactive list with checkboxes">
        <IfxActionListItem item-title="Enable notifications" description="Receive notifications for important updates" value="notifications" disabled={disabled} item-aria-label="Interactive item">
          <IfxCheckbox slot="leading" checked="false"></IfxCheckbox>
        </IfxActionListItem>
        <IfxActionListItem item-title="Auto-save documents" description="Automatically save your work" value="autosave" disabled={disabled} item-aria-label="Interactive item">
          <IfxCheckbox slot="leading" checked="false"></IfxCheckbox>
        </IfxActionListItem>
        <IfxActionListItem item-title="Enable backups" description="Create automatic backups" value="backups" disabled={disabled} item-aria-label="Interactive item">
          <IfxCheckbox slot="leading" checked="false"></IfxCheckbox>
        </IfxActionListItem>
      </IfxActionList>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(disabled)}</span>
    </div>
  );
}

export default ActionList;