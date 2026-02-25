import { IfxActionList, IfxActionListItem, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const handleActionListItemClick = (event: CustomEvent) => {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxActionList
        listAriaLabel="Navigation menu"
        onIfxActionListItemClick={handleActionListItemClick}>
        <IfxActionListItem
          itemTitle="Dashboard"
          description="View your main dashboard"
          value="dashboard"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Settings"
          value="settings"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Profile"
          description="Manage your profile information"
          value="profile"
          disabled={true}
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Advanced Analytics and Reporting Dashboard with Extended Functionality"
          description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
          value="analytics"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
      </IfxActionList>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxActionList, IfxActionListItem, IfxIcon } from '@infineon/infineon-design-system-react';

export function IfxActionListExample() {
  const handleActionListItemClick = (event: CustomEvent) => {
    console.log('ifxActionListItemClick:', event);
    // Add your handler logic here
  };

  return (
      <IfxActionList
        listAriaLabel="Navigation menu"
        onIfxActionListItemClick={handleActionListItemClick}>
        <IfxActionListItem
          itemTitle="Dashboard"
          description="View your main dashboard"
          value="dashboard"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Settings"
          value="settings"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Profile"
          description="Manage your profile information"
          value="profile"
          disabled={true}
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
        <IfxActionListItem
          itemTitle="Advanced Analytics and Reporting Dashboard with Extended Functionality"
          description="This comprehensive analytics dashboard provides detailed insights into user behavior and system performance metrics."
          value="analytics"
          itemAriaLabel="Navigation item">
          <IfxIcon
            slot="trailing"
            icon="chevron-right-16" />
        </IfxActionListItem>
      </IfxActionList>
  );
}`;
