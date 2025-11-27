import { IfxSegment, IfxSegmentedControl } from '@infineon/infineon-design-system-react';

export function IfxSegmentedControlExample() {
  return (
    <>
      <IfxSegmentedControl
        caption="Caption text to describe the controls"
        label="Group Label"
        size="regular"
        error={false}
        required={false}>
        <IfxSegment
          value="Value1"
          icon="star-16" />
        <IfxSegment
          value="Value2"
          icon="star-16" />
        <IfxSegment
          value="Value3"
          icon="star-16" />
        <IfxSegment
          value="Value4"
          icon="star-16" />
        <IfxSegment
          value="Value5"
          icon="star-16" />
      </IfxSegmentedControl>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxSegment, IfxSegmentedControl } from '@infineon/infineon-design-system-react';

export function IfxSegmentedControlExample() {
  return (
      <IfxSegmentedControl
        caption="Caption text to describe the controls"
        label="Group Label"
        size="regular"
        error={false}
        required={false}>
        <IfxSegment
          value="Value1"
          icon="star-16" />
        <IfxSegment
          value="Value2"
          icon="star-16" />
        <IfxSegment
          value="Value3"
          icon="star-16" />
        <IfxSegment
          value="Value4"
          icon="star-16" />
        <IfxSegment
          value="Value5"
          icon="star-16" />
      </IfxSegmentedControl>
  );
}`;
