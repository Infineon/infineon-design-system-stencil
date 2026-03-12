import { IfxTab, IfxTabs } from '@infineon/infineon-design-system-react';

export function IfxTabsExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxTabs
        orientation="horizontal"
        activeTabIndex={0}
        fullWidth={false}
        position-sticky={false}
        subline=""
        label=""
        number={0}
        onIfxChange={handleChange}>
        <IfxTab
          header="Tab 1"
          icon=""
          iconPosition="left"
          subline="tes test test"
          label="labelrrrrrrrrrrrrrrrrr222"
          number={0}>
          Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
        <IfxTab
          header="Tab 2"
          disabled={false}
          icon=""
          iconPosition="left"
          subline=""
          label=""
          number={0}>
          Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
        <IfxTab
          header="blablslbslbsl 3"
          icon=""
          iconPosition="left"
          subline="testestestestest"
          label="1234567890123456789012345"
          number={0}>
          Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
      </IfxTabs>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxTab, IfxTabs } from '@infineon/infineon-design-system-react';

export function IfxTabsExample() {
  const handleChange = (event: CustomEvent) => {
    console.log('ifxChange:', event);
    // Add your handler logic here
  };

  return (
      <IfxTabs
        orientation="horizontal"
        activeTabIndex={0}
        fullWidth={false}
        position-sticky={false}
        subline=""
        label=""
        number={0}
        onIfxChange={handleChange}>
        <IfxTab
          header="Tab 1"
          icon=""
          iconPosition="left"
          subline=""
          label=""
          number={0}>
          Content for Tab #1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
        <IfxTab
          header="Tab 2"
          disabled={false}
          icon=""
          iconPosition="left"
          subline=""
          label=""
          number={0}>
          Content for Tab #2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
        <IfxTab
          header="Tab 3"
          icon=""
          iconPosition="left"
          subline=""
          label=""
          number={0}>
          Content for Tab #3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        </IfxTab>
      </IfxTabs>
  );
}`;
