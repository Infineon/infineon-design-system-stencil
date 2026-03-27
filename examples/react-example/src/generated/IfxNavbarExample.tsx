import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxNavbarExample() {
  const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
    console.log('ifxNavbarMobileMenuIsOpen:', event);
    // Add your handler logic here
  };

  const handleNavItem = (event: CustomEvent) => {
    console.log('ifxNavItem:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxNavbar
        showLogoAndAppname={true}
        applicationName="Application name"
        fixed={false}
        logoHref="http://google.com"
        logoHrefTarget="_self"
        onIfxNavbarMobileMenuIsOpen={handleNavbarMobileMenuIsOpen}>
        <IfxNavbarItem
          icon=""
          slot="left-item"
          target="_self"
          href=""
          hideOnMobile={true}
          onIfxNavItem={handleNavItem}>
          <IfxNavbarItem icon="">
            <IfxNavbarItem>
              <IfxNavbarItem
                href="http://google.com"
                target="_blank">
                Link Layer 3 Nested Item 1
              </IfxNavbarItem>
              <IfxNavbarItem>
                Layer 3 Nested Item 2
              </IfxNavbarItem>
              <IfxNavbarItem>
                Layer 3 Nested Item 3
              </IfxNavbarItem>
              <IfxNavbarItem>
                Layer 3 Nested Item 4
              </IfxNavbarItem>
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Nested Item 3
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Nested Item 4
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Nested Item 5
            </IfxNavbarItem>
          </IfxNavbarItem>
          <IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Item 1
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Item 2
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Item 3
            </IfxNavbarItem>
          </IfxNavbarItem>
          <IfxNavbarItem>
            Nested Item 3
          </IfxNavbarItem>
          <IfxNavbarItem>
            <IfxNavbarItem>
              Nested Item 4
            </IfxNavbarItem>
          </IfxNavbarItem>
        </IfxNavbarItem>
        <IfxNavbarItem
          href=""
          target="_self"
          slot="left-item"
          icon=""
          showLabel={true}>
          Menu Item
        </IfxNavbarItem>
        <IfxNavbarItem slot="left-item">
          <IfxNavbarItem>
            Item1
          </IfxNavbarItem>
          <IfxNavbarItem>
            Item2
          </IfxNavbarItem>
        </IfxNavbarItem>
        <IfxSearchBar
          slot="search-bar-left"
          onIfxInput={handleInput}
          onIfxOpen={handleOpen} />
        <IfxNavbarItem
          numberIndicator=""
          slot="right-item"
          target="_blank"
          href="http://google.com"
          hideOnMobile=""
          showLabel={false}
          icon="image-16" />
        <IfxNavbarItem
          dotIndicator={false}
          slot="right-item"
          hideOnMobile=""
          showLabel={false}
          icon="image-16" />
        <IfxNavbarProfile
          userName=""
          slot="right-item"
          imageUrl=""
          showLabel={true}
          href=""
          target="_self"
          alt="profile image" />
      </IfxNavbar>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-react';

export function IfxNavbarExample() {
  const handleNavbarMobileMenuIsOpen = (event: CustomEvent) => {
    console.log('ifxNavbarMobileMenuIsOpen:', event);
    // Add your handler logic here
  };

  const handleNavItem = (event: CustomEvent) => {
    console.log('ifxNavItem:', event);
    // Add your handler logic here
  };

  const handleInput = (event: CustomEvent) => {
    console.log('ifxInput:', event);
    // Add your handler logic here
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event);
    // Add your handler logic here
  };

  return (
      <IfxNavbar
        showLogoAndAppname={true}
        applicationName="Application name"
        fixed={false}
        logoHref="http://google.com"
        logoHrefTarget="_self"
        onIfxNavbarMobileMenuIsOpen={handleNavbarMobileMenuIsOpen}>
        <IfxNavbarItem
          icon=""
          slot="left-item"
          target="_self"
          href=""
          hideOnMobile={true}
          onIfxNavItem={handleNavItem}>
          <IfxNavbarItem icon="">
            <IfxNavbarItem>
              <IfxNavbarItem
                href="http://google.com"
                target="_blank">
                Link Layer 3 Nested Item 1
              </IfxNavbarItem>
              <IfxNavbarItem>
                Layer 3 Nested Item 2
              </IfxNavbarItem>
              <IfxNavbarItem>
                Layer 3 Nested Item 3
              </IfxNavbarItem>
              <IfxNavbarItem>
                Layer 3 Nested Item 4
              </IfxNavbarItem>
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Nested Item 3
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Nested Item 4
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Nested Item 5
            </IfxNavbarItem>
          </IfxNavbarItem>
          <IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Item 1
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Item 2
            </IfxNavbarItem>
            <IfxNavbarItem>
              Layer 2 Item 3
            </IfxNavbarItem>
          </IfxNavbarItem>
          <IfxNavbarItem>
            Nested Item 3
          </IfxNavbarItem>
          <IfxNavbarItem>
            <IfxNavbarItem>
              Nested Item 4
            </IfxNavbarItem>
          </IfxNavbarItem>
        </IfxNavbarItem>
        <IfxNavbarItem
          href=""
          target="_self"
          slot="left-item"
          icon=""
          showLabel={true}>
          Menu Item
        </IfxNavbarItem>
        <IfxNavbarItem slot="left-item">
          <IfxNavbarItem>
            Item1
          </IfxNavbarItem>
          <IfxNavbarItem>
            Item2
          </IfxNavbarItem>
        </IfxNavbarItem>
        <IfxSearchBar
          slot="search-bar-left"
          onIfxInput={handleInput}
          onIfxOpen={handleOpen} />
        <IfxNavbarItem
          numberIndicator=""
          slot="right-item"
          target="_blank"
          href="http://google.com"
          hideOnMobile=""
          showLabel={false}
          icon="image-16" />
        <IfxNavbarItem
          dotIndicator={false}
          slot="right-item"
          hideOnMobile=""
          showLabel={false}
          icon="image-16" />
        <IfxNavbarProfile
          userName=""
          slot="right-item"
          imageUrl=""
          showLabel={true}
          href=""
          target="_self"
          alt="profile image" />
      </IfxNavbar>
  );
}`;
