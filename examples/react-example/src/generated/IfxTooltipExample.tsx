import { IfxTooltip } from '@infineon/infineon-design-system-react';

export function IfxTooltipExample() {
  return (
    <>
      <IfxTooltip
        text={`Hi, I'm a tooltip`}
        variant="compact"
        position="auto"
        icon="c-info-16"
        ariaLabelText="Tooltip with important information"
        header="Tooltip headline">
        I'm the tooltip reference element - Please hover me
      </IfxTooltip>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTooltip } from '@infineon/infineon-design-system-react';

export function IfxTooltipExample() {
  return (
      <IfxTooltip
        text={\`Hi, I'm a tooltip\`}
        variant="compact"
        position="auto"
        icon="c-info-16"
        ariaLabelText="Tooltip with important information"
        header="Tooltip headline">
        I'm the tooltip reference element - Please hover me
      </IfxTooltip>
  );
}`;
