import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-react';

export function IfxSidebarExample() {
  return (
    <>
      <IfxSidebar
        applicationName="Application Name"
        collapsible={false}
        collapsed={false}
        showHeader={true}
        showFooter={true}
        initialCollapse={true}
        termsOfUse="https://yourwebsite.com/terms"
        imprint="https://yourwebsite.com/imprint"
        privacyPolicy="https://yourwebsite.com/privacy-policy"
        copyrightText="© 1999 - 2026 Infineon Technologies AG"
        position="left">
        <IfxSidebarTitle>
          Menu Items
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon="image-16">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem icon="image-16">
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem active={true}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarTitle>
          Items group
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_self"
          icon="image-16"
          numberIndicator=""
          isactionitem={false}
          active={false}>
          Item 1
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Item 2
        </IfxSidebarItem>
      </IfxSidebar>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSidebar, IfxSidebarItem, IfxSidebarTitle } from '@infineon/infineon-design-system-react';

export function IfxSidebarExample() {
  return (
      <IfxSidebar
        applicationName="Application Name"
        collapsible={false}
        collapsed={false}
        showHeader={true}
        showFooter={true}
        initialCollapse={true}
        termsOfUse="https://yourwebsite.com/terms"
        imprint="https://yourwebsite.com/imprint"
        privacyPolicy="https://yourwebsite.com/privacy-policy"
        copyrightText="© 1999 - 2026 Infineon Technologies AG"
        position="left">
        <IfxSidebarTitle>
          Menu Items
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Menu Item
        </IfxSidebarItem>
        <IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank"
            icon="image-16">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem icon="image-16">
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem active={true}>
              Sub menu item
            </IfxSidebarItem>
            <IfxSidebarItem>
              Sub menu item
            </IfxSidebarItem>
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
          <IfxSidebarItem
            href="https://google.com"
            target="_blank">
            Menu Item
          </IfxSidebarItem>
        </IfxSidebarItem>
        <IfxSidebarTitle>
          Items group
        </IfxSidebarTitle>
        <IfxSidebarItem
          href="https://google.com"
          target="_self"
          icon="image-16"
          numberIndicator=""
          isactionitem={false}
          active={false}>
          Item 1
        </IfxSidebarItem>
        <IfxSidebarItem
          href="https://google.com"
          target="_blank"
          icon="image-16">
          Item 2
        </IfxSidebarItem>
      </IfxSidebar>
  );
}`;
