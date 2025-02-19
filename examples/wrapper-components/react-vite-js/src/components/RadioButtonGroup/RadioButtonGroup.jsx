import { IfxRadioButtonGroup, IfxRadioButton } from '@infineon/infineon-design-system-react';

function RadioButtonGroup() {

  return (
    <div>
      <IfxRadioButtonGroup alignment="vertical" show-group-label="true" group-label-text="Group Label" show-caption="true" caption-text="Caption text, description, error notification" show-caption-icon="true">
          <IfxRadioButton value="0" disabled="false" checked="false" size="m" error="false">Option 0</IfxRadioButton>
          <IfxRadioButton value="1" disabled="false" checked="false" size="m" error="false">Option 1</IfxRadioButton>
          <IfxRadioButton value="2" disabled="false" checked="false" size="m" error="false">Option 2</IfxRadioButton>
          <IfxRadioButton value="3" disabled="false" checked="false" size="m" error="false">Option 3</IfxRadioButton>
      </IfxRadioButtonGroup>
    </div>
  );
}

export default RadioButtonGroup;