import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event.detail);
    // Add your handler logic here
  };

  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event.detail);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event.detail);
    // Add your handler logic here
  };

  return (
    <>
      <div
        onIfxOpen={handleOpen}
        onIfxClose={handleClose}
        onIfxDropdownMenuItem={handleDropdownMenuItem}>
        <IfxDropdown
          placement="bottom-start"
          disabled={false}
          defaultOpen={false}
          noCloseOnOutsideClick={false}
          noCloseOnMenuClick={false}
          noAppendToBody={false}>
          <IfxDropdownTriggerButton
            variant="primary"
            onIfxOpen={handleOpen}
            onIfxClose={handleClose}
            onIfxDropdownMenuItem={handleDropdownMenuItem}>
            Dropdown
          </IfxDropdownTriggerButton>
          <IfxDropdownMenu
            size="m"
            onIfxOpen={handleOpen}
            onIfxClose={handleClose}
            onIfxDropdownMenuItem={handleDropdownMenuItem}>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href=""
              onIfxOpen={handleOpen}
              onIfxClose={handleClose}
              onIfxDropdownMenuItem={handleDropdownMenuItem}>
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxDropdown>
      </div>
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
    console.log('ifxOpen:', event.detail);
    // Add your handler logic here
  };

  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event.detail);
    // Add your handler logic here
  };

  const handleDropdownMenuItem = (event: CustomEvent) => {
    console.log('ifxDropdownMenuItem:', event.detail);
    // Add your handler logic here
  };

  return (
      <div
        onIfxOpen={handleOpen}
        onIfxClose={handleClose}
        onIfxDropdownMenuItem={handleDropdownMenuItem}>
        <IfxDropdown
          placement="bottom-start"
          disabled={false}
          defaultOpen={false}
          noCloseOnOutsideClick={false}
          noCloseOnMenuClick={false}
          noAppendToBody={false}>
          <IfxDropdownTriggerButton
            variant="primary"
            onIfxOpen={handleOpen}
            onIfxClose={handleClose}
            onIfxDropdownMenuItem={handleDropdownMenuItem}>
            Dropdown
          </IfxDropdownTriggerButton>
          <IfxDropdownMenu
            size="m"
            onIfxOpen={handleOpen}
            onIfxClose={handleClose}
            onIfxDropdownMenuItem={handleDropdownMenuItem}>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href=""
              onIfxOpen={handleOpen}
              onIfxClose={handleClose}
              onIfxDropdownMenuItem={handleDropdownMenuItem}>
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
            <IfxDropdownItem
              icon="c-info-16"
              target="_self"
              href="">
              Menu Item
            </IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxDropdown>
      </div>
  );
}`;
