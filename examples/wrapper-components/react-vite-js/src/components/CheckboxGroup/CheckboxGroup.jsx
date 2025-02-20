import { IfxCheckboxGroup, IfxCheckbox } from '@infineon/infineon-design-system-react';

function CheckboxGroup() {

  return (
    <div>
      <IfxCheckboxGroup alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true">
          <IfxCheckbox value="0" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 0</IfxCheckbox>
          <IfxCheckbox value="1" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 1</IfxCheckbox>
          <IfxCheckbox value="2" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 2</IfxCheckbox>
          <IfxCheckbox value="3" disabled="false" checked="false" size="m" indeterminate="false" error="false">Option 3</IfxCheckbox>
      </IfxCheckboxGroup>
    </div>
  );
}

export default CheckboxGroup;