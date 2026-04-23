import { IfxButton, IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
    <>
      <IfxErrorPage
        imgAlt=""
        type={403}
        headline=""
        description=""
        illustrationUrl="">
        <div slot="button">
          <IfxButton
            variant="primary"
            fullWidth={true}>
            Go to homepage
          </IfxButton>
        </div>
        <div slot="button">
          <IfxButton
            variant="secondary"
            fullWidth={true}>
            Get support
          </IfxButton>
        </div>
      </IfxErrorPage>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxButton, IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
      <IfxErrorPage
        imgAlt=""
        type={403}
        headline=""
        description=""
        illustrationUrl="">
        <div slot="button">
          <IfxButton
            variant="primary"
            fullWidth={true}>
            Go to homepage
          </IfxButton>
        </div>
        <div slot="button">
          <IfxButton
            variant="secondary"
            fullWidth={true}>
            Get support
          </IfxButton>
        </div>
      </IfxErrorPage>
  );
}`;
