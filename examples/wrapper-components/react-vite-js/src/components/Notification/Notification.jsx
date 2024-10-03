import { IfxNotification } from '@infineon/infineon-design-system-react';

function Notification() {
  return (
    <div>
      <IfxNotification icon="c-check-16" variant="success" link-text="Link" link-href="https://www.example.com">Success notification</IfxNotification>
      <br />
      <IfxNotification icon="lock-16" variant="warning" link-text="Link" link-href="https://www.example.com">Warning notification</IfxNotification>
      <br />
      <IfxNotification icon="c-check-16" variant="error" link-text="Link" link-href="https://www.example.com">Error notification</IfxNotification>
    </div>
  );
}

export default Notification;