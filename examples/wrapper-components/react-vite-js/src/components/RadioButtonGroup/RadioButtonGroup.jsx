import { useState } from 'react';
import { IfxRadioButtonGroup, IfxRadioButton, IfxButton } from '@infineon/infineon-design-system-react';

function RadioButtonGroup() {

  const [required, setRequired] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const toggleRequired = () => {
    setRequired(prevRequired => !prevRequired);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  return (
    <div>
      <h2>Radio Button Group</h2>
      <IfxRadioButtonGroup alignment="vertical" show-group-label={true} group-label-text="Group Label" show-caption={true} caption-text="Caption text, description, error notification" show-caption-icon={true} required={required}>
          <IfxRadioButton value="0" disabled={disabled} checked={false} size="m" error={error}>Option 0</IfxRadioButton>
          <IfxRadioButton value="1" disabled={disabled} checked={false} size="m" error={error}>Option 1</IfxRadioButton>
          <IfxRadioButton value="2" disabled={disabled} checked={false} size="m" error={error}>Option 2</IfxRadioButton>
          <IfxRadioButton value="3" disabled={disabled} checked={false} size="m" error={error}>Option 3</IfxRadioButton>
      </IfxRadioButtonGroup>

      <IfxButton variant="primary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <IfxButton variant="primary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="primary" onClick={toggleError}>Toggle Error</IfxButton>
      <br />
      <span>Required: {String(required)} </span><br />
      <span>Disabled: {String(disabled)} </span><br />
      <span>Error: {String(error)}</span><br />
      <br />
    </div>
  );
}

export default RadioButtonGroup;