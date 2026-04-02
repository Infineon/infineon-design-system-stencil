import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxContentSwitcherExample() {
  return (
    <>
      <IfxContentSwitcher>
        <IfxContentSwitcherItem value="item 1">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="item 2">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="item 3">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="item 4">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
      </IfxContentSwitcher>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxContentSwitcher, IfxContentSwitcherItem, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxContentSwitcherExample() {
  return (
      <IfxContentSwitcher>
        <IfxContentSwitcherItem value="item 1">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="item 2">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="item 3">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
        <IfxContentSwitcherItem value="item 4">
          <IfxIcon icon="applications-16" />
        </IfxContentSwitcherItem>
      </IfxContentSwitcher>
  );
}`;
