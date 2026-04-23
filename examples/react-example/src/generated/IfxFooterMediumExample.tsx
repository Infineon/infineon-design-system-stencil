import { useState } from 'react';
import { IfxButton, IfxFooter, IfxIcon, IfxLink, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxFooterMediumExample() {
  const handleConsoleError = (event: CustomEvent) => {
    console.log('consoleError:', event);
    // Add your handler logic here
  };

  return (
      <IfxFooter __CONTROLLED_PROPS__>
        <div slot="socials">
          <IfxLink
            variant="title"
            href="http://facebook.com/infineon"
            ariaLabel="Follow us on Facebook">
            <IfxIcon
              icon="facebook"
              onConsoleError={handleConsoleError} />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://youtube.com/infineon"
            ariaLabel="Follow us on Youtube">
            <IfxIcon icon="youtube" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://instagram.com/infineon"
            ariaLabel="Follow us on Instagram">
            <IfxIcon icon="instagram" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://linkedin.com/infineon"
            ariaLabel="Follow us on LinkedIn">
            <IfxIcon icon="linkedin" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://xing.com/infineon"
            ariaLabel="Follow us on Xing">
            <IfxIcon icon="xing" />
          </IfxLink>
        </div>
        <div slot="info">
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/terms"
            target="_blank">
            Terms
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/imprint"
            target="_blank">
            Imprint
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/privacy-policy"
            target="_blank">
            Privacy policy
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/glossary"
            target="_blank">
            Glossary
          </IfxLink>
        </div>
      </IfxFooter>
  );
}`.replace("__CONTROLLED_PROPS__", controlledPropsCode);

	const codeString = codeStringWithProps;
	return (
    <>
      <IfxFooter {...(controlledProps as any)}>
        <div slot="socials">
          <IfxLink
            variant="title"
            href="http://facebook.com/infineon"
            ariaLabel="Follow us on Facebook">
            <IfxIcon icon="facebook" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://youtube.com/infineon"
            ariaLabel="Follow us on Youtube">
            <IfxIcon icon="youtube" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://instagram.com/infineon"
            ariaLabel="Follow us on Instagram">
            <IfxIcon icon="instagram" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://linkedin.com/infineon"
            ariaLabel="Follow us on LinkedIn">
            <IfxIcon icon="linkedin" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://xing.com/infineon"
            ariaLabel="Follow us on Xing">
            <IfxIcon icon="xing" />
          </IfxLink>
        </div>
        <div slot="info">
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/terms"
            target="_blank">
            Terms
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/imprint"
            target="_blank">
            Imprint
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/privacy-policy"
            target="_blank">
            Privacy policy
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/glossary"
            target="_blank">
            Glossary
          </IfxLink>
        </div>
      </IfxFooter>
	      <h3 className="controls-title">Controls</h3>
	      <div className="controls controls-toggle">
        <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
	      </div>
	      <div className="controls controls-input">
        <IfxTextField label="copyrightText" type="text" value={String(copyrightText)} onInput={(event) => toggleCopyrightText(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="href" type="text" value={String(href)} onInput={(event) => toggleHref(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
        <IfxTextField label="ariaLabelOfLink" type="text" value={String(ariaLabelOfLink)} onInput={(event) => toggleAriaLabelOfLink(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>copyrightText:</b> {String(copyrightText)}</div>
          <div><b>icon:</b> {String(iconOptions[iconIndex])}</div>
          <div><b>href:</b> {String(href)}</div>
          <div><b>ariaLabelOfLink:</b> {String(ariaLabelOfLink)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxFooter, IfxIcon, IfxLink } from '@infineon/infineon-design-system-react';

export function IfxFooterExample() {
  const handleConsoleError = (event: CustomEvent) => {
    console.log('consoleError:', event);
    // Add your handler logic here
  };

  return (
      <IfxFooter copyrightText="© 1999 - 2026 Infineon Technologies AG">
        <div slot="socials">
          <IfxLink
            variant="title"
            href="http://facebook.com/infineon"
            ariaLabel="Follow us on Facebook">
            <IfxIcon
              icon="facebook"
              onConsoleError={handleConsoleError} />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://youtube.com/infineon"
            ariaLabel="Follow us on Youtube">
            <IfxIcon icon="youtube" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://instagram.com/infineon"
            ariaLabel="Follow us on Instagram">
            <IfxIcon icon="instagram" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://linkedin.com/infineon"
            ariaLabel="Follow us on LinkedIn">
            <IfxIcon icon="linkedin" />
          </IfxLink>
          <IfxLink
            variant="title"
            href="http://xing.com/infineon"
            ariaLabel="Follow us on Xing">
            <IfxIcon icon="xing" />
          </IfxLink>
        </div>
        <div slot="info">
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/terms"
            target="_blank">
            Terms
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/imprint"
            target="_blank">
            Imprint
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/privacy-policy"
            target="_blank">
            Privacy policy
          </IfxLink>
          <IfxLink
            variant="menu"
            href="https://yourwebsite.com/glossary"
            target="_blank">
            Glossary
          </IfxLink>
        </div>
      </IfxFooter>
  );
}`;
