import { useState } from 'react';
import { IfxButton, IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxNavbarExample() {
  const [applicationName, setApplicationName] = useState("Application name");
  const [showLogoAndAppname, setShowLogoAndAppname] = useState(true);
  const [logoHref, setLogoHref] = useState("http://google.com");
  const logoHrefTargetOptions = ["_self","_blank","_parent"];
  const [logoHrefTargetIndex, setLogoHrefTargetIndex] = useState(0);

  const handleApplicationNameChange = (value: string) => setApplicationName(value);
  const handleShowLogoAndAppnameChange = () => setShowLogoAndAppname((v) => !v);
  const handleLogoHrefChange = (value: string) => setLogoHref(value);
  const handleLogoHrefTargetChange = () => setLogoHrefTargetIndex((i) => (i + 1) % logoHrefTargetOptions.length);

  const controlledProps = {
    "applicationName": applicationName,
    "showLogoAndAppname": showLogoAndAppname,
    "logoHref": logoHref,
    "logoHrefTarget": logoHrefTargetOptions[logoHrefTargetIndex],
  } as Record<string, unknown>;
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

  const formatPropValueForCode = (value: unknown): string => {
		if (typeof value === "boolean") return `{${value}}`;
		if (typeof value === "number") return `{${value}}`;
		if (value === null) return "{null}";
		if (Array.isArray(value) || (typeof value === "object" && value !== null)) {
			return `{${JSON.stringify(value)}}`;
		}
		const escaped = String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
		return `"${escaped}"`;
	};

	const controlledPropsCode = [
    ["applicationName", controlledProps["applicationName"]],
    ["showLogoAndAppname", controlledProps["showLogoAndAppname"]],
    ["logoHref", controlledProps["logoHref"]],
    ["logoHrefTarget", controlledProps["logoHrefTarget"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxNavbar, IfxNavbarItem, IfxNavbarProfile, IfxSearchBar } from '@infineon/infineon-design-system-react';

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
        fixed={false}
        onIfxNavbarMobileMenuIsOpen={handleNavbarMobileMenuIsOpen}
        __CONTROLLED_PROPS__>
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
          isOpen={false}
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
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxNavbar
        fixed={false}
        onIfxNavbarMobileMenuIsOpen={handleNavbarMobileMenuIsOpen}
        {...(controlledProps as any)}>
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
          isOpen={false}
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
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={handleShowLogoAndAppnameChange}>Toggle ShowLogoAndAppname</IfxButton>
        <IfxButton variant="secondary" onClick={handleLogoHrefTargetChange}>Toggle LogoHrefTarget</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="applicationName" type="text" value={String(applicationName)} onInput={(event) => handleApplicationNameChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="logoHref" type="text" value={String(logoHref)} onInput={(event) => handleLogoHrefChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>applicationName:</b> {String(applicationName)}</div>
          <div><b>showLogoAndAppname:</b> {String(showLogoAndAppname)}</div>
          <div><b>logoHref:</b> {String(logoHref)}</div>
          <div><b>logoHrefTarget:</b> {String(logoHrefTargetOptions[logoHrefTargetIndex])}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

