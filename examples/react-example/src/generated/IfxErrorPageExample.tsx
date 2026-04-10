import { IfxButton, IfxErrorPage } from '@infineon/infineon-design-system-react';

export function IfxErrorPageExample() {
  return (
    <>
      <IfxErrorPage
        alt=""
        type={403}
        headline=""
        description="">
        <div slot="button">
          <IfxButton
            slot="button"
            variant="primary"
            fullWidth={true}>
            Button Custom 1
          </IfxButton>
        </div>
        <div slot="button">
          <IfxButton
            slot="button"
            variant="secondary"
            fullWidth={true}>
            Button Custom 2
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
        alt=""
        type={403}
        headline=""
        description="">
        <div slot="button">
          <IfxButton
            slot="button"
            variant="primary"
            fullWidth={true}>
            Button Custom 1
          </IfxButton>
        </div>
        <div slot="button">
          <IfxButton
            slot="button"
            variant="secondary"
            fullWidth={true}>
            Button Custom 2
          </IfxButton>
        </div>
      </IfxErrorPage>
  );
}`;
