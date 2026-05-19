import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdown = (event: CustomEvent) => {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  const handleMenuSize = (event: CustomEvent) => {
    console.log('menuSize:', event);
    // Add your handler logic here
  };

  const handleDropdownItem = (event: CustomEvent) => {
    console.log('ifxDropdownItem:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxDropdown
        placement="bottom-start"
        defaultOpen={false}
        noCloseOnOutsideClick={false}
        noCloseOnMenuClick={false}
        noAppendToBody={true}
        disabled={false}
        onIfxClose={handleClose}
        onIfxDropdown={handleDropdown}
        onIfxOpen={handleOpen}>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          size="m"
          onIfxDropdownMenuItem={handleDropdownMenuItem}
          onMenuSize={handleMenuSize}>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}
            onIfxDropdownItem={handleDropdownItem}>
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
  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event);
    // Add your handler logic here
  };

  const handleDropdown = (event: CustomEvent) => {
    console.log('ifxDropdown:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event);
    // Add your handler logic here
  };

  const handleMenuSize = (event: CustomEvent) => {
    console.log('menuSize:', event);
    // Add your handler logic here
  };

  const handleDropdownItem = (event: CustomEvent) => {
    console.log('ifxDropdownItem:', event);
    // Add your handler logic here
  };

  return (
      <IfxDropdown
        placement="bottom-start"
        defaultOpen={false}
        noCloseOnOutsideClick={false}
        noCloseOnMenuClick={false}
        noAppendToBody={true}
        disabled={false}
        onIfxClose={handleClose}
        onIfxDropdown={handleDropdown}
        onIfxOpen={handleOpen}>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu
          size="m"
          onIfxDropdownMenuItem={handleDropdownMenuItem}
          onMenuSize={handleMenuSize}>
          <IfxDropdownItem
            icon="c-info-16"
            target="_self"
            href=""
            error={false}
            onIfxDropdownItem={handleDropdownItem}>
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
