import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxDropdown
        placement="bottom-start"
        disabled={false}
        defaultOpen={false}
        noCloseOnOutsideClick={false}
        noCloseOnMenuClick={false}
        noAppendToBody={false}
        onIfxOpen={handleOpen}
        onIfxClose={handleClose}>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          size="m"
          onIfxDropdownMenuItem={handleDropdownMenuItem}>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
        </IfxDropdownMenu>
      </IfxDropdown>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  return (
      <IfxDropdown
        placement="bottom-start"
        disabled={false}
        defaultOpen={false}
        noCloseOnOutsideClick={false}
        noCloseOnMenuClick={false}
        noAppendToBody={false}
        onIfxOpen={handleOpen}
        onIfxClose={handleClose}>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          size="m"
          onIfxDropdownMenuItem={handleDropdownMenuItem}>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}>
            Menu Item
          </IfxDropdownItem>
        </IfxDropdownMenu>
      </IfxDropdown>
  );
}`;
