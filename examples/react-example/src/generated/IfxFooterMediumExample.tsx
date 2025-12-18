import { IfxFooter, IfxIcon, IfxLink } from '@infineon/infineon-design-system-react';

export function IfxFooterMediumExample() {
  return (
    <>
      <IfxFooter copyrightText="© 1999 - 2026 Infineon Technologies AG">
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
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxFooter, IfxIcon, IfxLink } from '@infineon/infineon-design-system-react';

export function IfxFooterExample() {
  return (
      <IfxFooter copyrightText="© 1999 - 2026 Infineon Technologies AG">
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
  );
}`;
