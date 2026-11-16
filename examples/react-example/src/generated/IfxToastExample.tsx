import { IfxToast } from '@infineon/design-system-react';

export function IfxToastExample() {
  const handleToastAction = (event: CustomEvent) => {
    console.log('ifxToastAction:', event);
    // Add your handler logic here
  };

  const handleToastClose = (event: CustomEvent) => {
    console.log('ifxToastClose:', event);
    // Add your handler logic here
  };

  const handleToastOpen = (event: CustomEvent) => {
    console.log('ifxToastOpen:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxToast
        toastId=""
        status="success"
        message="Insert information text here"
        actionText="Dismiss"
        duration={0}
        onIfxToastAction={handleToastAction}
        onIfxToastClose={handleToastClose}
        onIfxToastOpen={handleToastOpen} />
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxToast } from '@infineon/design-system-react';

export function IfxToastExample() {
  const handleToastAction = (event: CustomEvent) => {
    console.log('ifxToastAction:', event);
    // Add your handler logic here
  };

  const handleToastClose = (event: CustomEvent) => {
    console.log('ifxToastClose:', event);
    // Add your handler logic here
  };

  const handleToastOpen = (event: CustomEvent) => {
    console.log('ifxToastOpen:', event);
    // Add your handler logic here
  };

  return (
      <IfxToast
        toastId=""
        status="success"
        message="Insert information text here"
        actionText="Dismiss"
        duration={0}
        onIfxToastAction={handleToastAction}
        onIfxToastClose={handleToastClose}
        onIfxToastOpen={handleToastOpen} />
  );
}`;
