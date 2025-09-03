import { useState } from 'react';
import { IfxCheckboxGroup, IfxCheckbox, IfxButton } from '@infineon/infineon-design-system-react';

function CheckboxGroup() {
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
      <IfxCheckboxGroup alignment="vertical" show-group-label={true} group-label-text="Group Label" show-caption={true} caption-text="Caption text, description, error notification" show-caption-icon={true} required={false}>
          <IfxCheckbox value="0" disabled={false} checked={false} size="m" indeterminate={false} error={false}>Option 0</IfxCheckbox>
          <IfxCheckbox value="1" disabled={false} checked={false} size="m" indeterminate={false} error={false}>Option 1</IfxCheckbox>
          <IfxCheckbox value="2" disabled={false} checked={false} size="m" indeterminate={false} error={false}>Option 2</IfxCheckbox>
          <IfxCheckbox value="3" disabled={false} checked={false} size="m" indeterminate={false} error={false}>Option 3</IfxCheckbox>
      </IfxCheckboxGroup>

      <IfxButton variant="primary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <IfxButton variant="primary" onClick={toggleDisabled}>Toggle Required</IfxButton>
      <IfxButton variant="primary" onClick={toggleError}>Toggle Required</IfxButton>
    </div>
  );
}

export default CheckboxGroup;