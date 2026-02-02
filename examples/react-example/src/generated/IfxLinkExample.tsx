import { IfxLink } from '@infineon/infineon-design-system-react';

export function IfxLinkExample() {
  return (
    <>
      <IfxLink
        href=""
        ariaLabel="Link"
        target="_blank"
        size="m"
        variant="bold"
        download="">
        Link
      </IfxLink>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxLink } from '@infineon/infineon-design-system-react';

export function IfxLinkExample() {
  return (
      <IfxLink
        href=""
        ariaLabel="Link"
        target="_blank"
        size="m"
        variant="bold"
        download="">
        Link
      </IfxLink>
  );
}`;
