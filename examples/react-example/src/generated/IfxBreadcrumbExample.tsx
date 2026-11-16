import { IfxBreadcrumb, IfxBreadcrumbItem, IfxBreadcrumbItemLabel, IfxDropdownItem, IfxDropdownMenu } from '@infineon/design-system-react';

export function IfxBreadcrumbExample() {
  const handleBreadcrumbMenuIconWrapper = (event: CustomEvent) => {
    console.log('breadcrumbMenuIconWrapper:', event);
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
      <IfxBreadcrumb>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel
            slot="label"
            icon=""
            target="_self"
            onBreadcrumbMenuIconWrapper={handleBreadcrumbMenuIconWrapper}>
            Breadcrumb 1
          </IfxBreadcrumbItemLabel>
          <IfxDropdownMenu
            onIfxDropdownMenuItem={handleDropdownMenuItem}
            onMenuSize={handleMenuSize}>
            <IfxDropdownItem
              href="http://google.com"
              onIfxDropdownItem={handleDropdownItem}>
              Google
            </IfxDropdownItem>
            <IfxDropdownItem href="http://bing.com">
              Bing
            </IfxDropdownItem>
            <IfxDropdownItem href="http://yahoo.com">
              Yahoo
            </IfxDropdownItem>
            <IfxDropdownItem href="http://naver.com">
              Naver
            </IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel
            slot="label"
            icon=""
            target="_self">
            Breadcrumb 2
          </IfxBreadcrumbItemLabel>
          <IfxDropdownMenu>
            <IfxDropdownItem href="http://google.com">
              Google
            </IfxDropdownItem>
            <IfxDropdownItem href="http://bing.com">
              Bing
            </IfxDropdownItem>
            <IfxDropdownItem href="http://yahoo.com">
              Yahoo
            </IfxDropdownItem>
            <IfxDropdownItem href="http://naver.com">
              Naver
            </IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel
            slot="label"
            icon=""
            href="http://yahoo.com"
            target="_self">
            Breadcrumb 3
          </IfxBreadcrumbItemLabel>
        </IfxBreadcrumbItem>
      </IfxBreadcrumb>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxBreadcrumb, IfxBreadcrumbItem, IfxBreadcrumbItemLabel, IfxDropdownItem, IfxDropdownMenu } from '@infineon/design-system-react';

export function IfxBreadcrumbExample() {
  const handleBreadcrumbMenuIconWrapper = (event: CustomEvent) => {
    console.log('breadcrumbMenuIconWrapper:', event);
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
      <IfxBreadcrumb>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel
            slot="label"
            icon=""
            target="_self"
            onBreadcrumbMenuIconWrapper={handleBreadcrumbMenuIconWrapper}>
            Breadcrumb 1
          </IfxBreadcrumbItemLabel>
          <IfxDropdownMenu
            onIfxDropdownMenuItem={handleDropdownMenuItem}
            onMenuSize={handleMenuSize}>
            <IfxDropdownItem
              href="http://google.com"
              onIfxDropdownItem={handleDropdownItem}>
              Google
            </IfxDropdownItem>
            <IfxDropdownItem href="http://bing.com">
              Bing
            </IfxDropdownItem>
            <IfxDropdownItem href="http://yahoo.com">
              Yahoo
            </IfxDropdownItem>
            <IfxDropdownItem href="http://naver.com">
              Naver
            </IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel
            slot="label"
            icon=""
            target="_self">
            Breadcrumb 2
          </IfxBreadcrumbItemLabel>
          <IfxDropdownMenu>
            <IfxDropdownItem href="http://google.com">
              Google
            </IfxDropdownItem>
            <IfxDropdownItem href="http://bing.com">
              Bing
            </IfxDropdownItem>
            <IfxDropdownItem href="http://yahoo.com">
              Yahoo
            </IfxDropdownItem>
            <IfxDropdownItem href="http://naver.com">
              Naver
            </IfxDropdownItem>
          </IfxDropdownMenu>
        </IfxBreadcrumbItem>
        <IfxBreadcrumbItem>
          <IfxBreadcrumbItemLabel
            slot="label"
            icon=""
            href="http://yahoo.com"
            target="_self">
            Breadcrumb 3
          </IfxBreadcrumbItemLabel>
        </IfxBreadcrumbItem>
      </IfxBreadcrumb>
  );
}`;
