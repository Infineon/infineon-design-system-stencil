import { IfxNotification } from '@infineon/infineon-design-system-react';

export function IfxNotificationExample() {
  return (
    <>
      <IfxNotification
        icon="c-check-16"
        variant="success"
        linkText="Link"
        linkHref="https://www.example.com"
        linkTarget="_blank">
        Sample Notification
      </IfxNotification>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxNotification } from '@infineon/infineon-design-system-react';

export function IfxNotificationExample() {
  return (
      <IfxNotification
        icon="c-check-16"
        variant="success"
        linkText="Link"
        linkHref="https://www.example.com"
        linkTarget="_blank">
        Sample Notification
      </IfxNotification>
  );
}`;
