import { IfxDropdown, IfxDropdownItem, IfxDropdownMenu, IfxDropdownTriggerButton } from '@infineon/infineon-design-system-react';

export function IfxDropdownExample() {
  return (
    <>
      <IfxDropdown
        placement="bottom-start"
        defaultOpen={false}
        noCloseOnOutsideClick={false}
        noCloseOnMenuClick={false}
        noAppendToBody={false}>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu size="m">
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
  return (
      <IfxDropdown
        placement="bottom-start"
        defaultOpen={false}
        noCloseOnOutsideClick={false}
        noCloseOnMenuClick={false}
        noAppendToBody={false}>
        <IfxDropdownTriggerButton variant="primary">
          Dropdown
        </IfxDropdownTriggerButton>
        <IfxDropdownMenu size="m">
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
