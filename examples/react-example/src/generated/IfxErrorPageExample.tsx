import { IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
    <>
      <IfxErrorPage
        illustrationUrl=""
        alt="ERROR 404"
        type="ERROR 404"
        headline="The requested page cannot be found"
        description="The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for.">
        <h1>
          cenas
        </h1>
      </IfxErrorPage>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
      <IfxErrorPage
        illustrationUrl=""
        alt="ERROR 404"
        type="ERROR 404"
        headline="The requested page cannot be found"
        description="The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for.">
        <h1>
          cenas
        </h1>
      </IfxErrorPage>
  );
}`;
