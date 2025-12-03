import { IfxIconButton } from '@infineon/infineon-design-system-react';

function IconButton() {
  return (
    <div>
      <h2>Icon Button</h2>
      <IfxIconButton shape="round" variant="primary" icon="calendar16" href="http://google.com" target="_blank" size="s" disabled="true"></IfxIconButton>
    </div>
  );
}

export default IconButton;