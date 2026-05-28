import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-react';

export function IfxCardExample() {
  const handleImgPosition = (event: CustomEvent) => {
    console.log('imgPosition:', event);
    // Add your handler logic here
  };

  return (
    <>
      <IfxCard
        direction="vertical"
        href=""
        target="_blank"
        ariaLabel=""
        ariaLabelText="Card"
        fullWidth={false}>
        <IfxCardImage
          position="right"
          src="https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-logo.png"
          alt="Default"
          slot="img"
          onImgPosition={handleImgPosition} />
        <IfxCardOverline>
          Overline
        </IfxCardOverline>
        <IfxCardHeadline>
          Headline
        </IfxCardHeadline>
        <IfxCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </IfxCardText>
        <IfxCardLinks slot="buttons">
          <IfxButton variant="primary">
            Button
          </IfxButton>
          <IfxButton variant="secondary">
            Button
          </IfxButton>
        </IfxCardLinks>
      </IfxCard>
      <details className="code-details">
        <summary>View Code</summary>
        <pre><code className="language-tsx">{codeString}</code></pre>
      </details>
    </>
  );
}

const codeString = `import { IfxButton, IfxCard, IfxCardHeadline, IfxCardImage, IfxCardLinks, IfxCardOverline, IfxCardText } from '@infineon/infineon-design-system-react';

export function IfxCardExample() {
  const handleImgPosition = (event: CustomEvent) => {
    console.log('imgPosition:', event);
    // Add your handler logic here
  };

  return (
      <IfxCard
        direction="vertical"
        href=""
        target="_blank"
        ariaLabel=""
        ariaLabelText="Card"
        fullWidth={false}>
        <IfxCardImage
          position="right"
          src="https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-logo.png"
          alt="Default"
          slot="img"
          onImgPosition={handleImgPosition} />
        <IfxCardOverline>
          Overline
        </IfxCardOverline>
        <IfxCardHeadline>
          Headline
        </IfxCardHeadline>
        <IfxCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </IfxCardText>
        <IfxCardLinks slot="buttons">
          <IfxButton variant="primary">
            Button
          </IfxButton>
          <IfxButton variant="secondary">
            Button
          </IfxButton>
        </IfxCardLinks>
      </IfxCard>
  );
}`;
