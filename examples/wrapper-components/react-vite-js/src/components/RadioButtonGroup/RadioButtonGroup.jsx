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
      <IfxRadioButtonGroup alignment="vertical" show-group-label={true} group-label-text="Group Label" show-caption={true} caption-text="Caption text, description, error notification" show-caption-icon={true} required={false}>
          <IfxRadioButton value="0" disabled={false} checked={false} size="m" error={false}>Option 0</IfxRadioButton>
          <IfxRadioButton value="1" disabled={false} checked={false} size="m" error={false}>Option 1</IfxRadioButton>
          <IfxRadioButton value="2" disabled={false} checked={false} size="m" error={false}>Option 2</IfxRadioButton>
          <IfxRadioButton value="3" disabled={false} checked={false} size="m" error={false}>Option 3</IfxRadioButton>
      </IfxRadioButtonGroup>

      <IfxButton variant="primary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <IfxButton variant="primary" onClick={toggleDisabled}>Toggle Required</IfxButton>
      <IfxButton variant="primary" onClick={toggleError}>Toggle Required</IfxButton>
    </div>
  );
}

export default RadioButtonGroup;