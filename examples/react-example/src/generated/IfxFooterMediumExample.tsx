import { useState } from 'react';
import { IfxFooter, IfxIcon, IfxLink, IfxTextField } from '@infineon/infineon-design-system-react';

export function IfxFooterMediumExample() {
  const [copyrightText, setCopyrightText] = useState("© 1999 - 2026 Infineon Technologies AG");

  const handleCopyrightTextChange = (value: string) => setCopyrightText(value);

  const controlledProps = {
    "copyrightText": copyrightText,
  } as Record<string, unknown>;
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
    ["copyrightText", controlledProps["copyrightText"]],
	]
		.map(([name, value]) => `        ${String(name)}=${formatPropValueForCode(value)}`)
		.join("\n");

	const codeStringWithProps = `import { IfxFooter, IfxIcon, IfxLink } from '@infineon/infineon-design-system-react';

export function IfxFooterExample() {
  return (
      <IfxFooter __CONTROLLED_PROPS__>
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
	      
	      <div className="controls controls-input">
        <IfxTextField label="copyrightText" type="text" value={String(copyrightText)} onInput={(event) => handleCopyrightTextChange(String((event.target as HTMLInputElement | null)?.value ?? ""))} />
	      </div>

	      <div className="state">
	          <div><b>copyrightText:</b> {String(copyrightText)}</div>
	      </div>
	
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

