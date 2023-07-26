
import { IfxIconButton } from '@infineon/infineon-design-system-react';

function IconButton() {
  return (
    <div>
      <IfxIconButton shape="round" variant="outline" icon="calendar16" href="http://google.com" target="_blank" color="secondary" size="s" disabled="true"></IfxIconButton>
    </div>
  );
}

export default IconButton;