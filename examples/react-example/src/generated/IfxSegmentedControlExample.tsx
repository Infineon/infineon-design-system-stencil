import { IfxSegment, IfxSegmentedControl } from '@infineon/infineon-design-system-react';

export function IfxSegmentedControlExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleSegmentSelect = (event: CustomEvent) => {
    console.log('segmentSelect:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxSegmentedControl
        caption="Caption text to describe the controls"
        label="Group Label"
        size="regular"
        error={false}
        required={false}
        onIfxChange={handleChange}>
        <IfxSegment
          value="Value1"
          icon="star-16"
          onSegmentSelect={handleSegmentSelect} />
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
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  const handleSegmentSelect = (event: CustomEvent) => {
    console.log('segmentSelect:', event);
    // Add your handler logic here
  };

  return (
      <IfxSegmentedControl
        caption="Caption text to describe the controls"
        label="Group Label"
        size="regular"
        error={false}
        required={false}
        onIfxChange={handleChange}>
        <IfxSegment
          value="Value1"
          icon="star-16"
          onSegmentSelect={handleSegmentSelect} />
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
