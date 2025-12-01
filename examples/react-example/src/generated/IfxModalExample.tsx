import { IfxButton, IfxModal } from "@infineon/infineon-design-system-react";

export function IfxModalExample() {
	const handleOpen = (event: CustomEvent) => {
		console.log("ifxOpen:", event.detail);
		// Add your handler logic here
	};

	const handleClose = (event: CustomEvent) => {
		console.log("ifxClose:", event.detail);
		// Add your handler logic here
	};

	return (
		<>
			<div onIfxOpen={handleOpen} onIfxClose={handleClose}>
				<IfxModal
					caption="Modal Title"
					captionAriaLabel="Additional information for caption"
					closeButtonAriaLabel="Close modal"
					variant="default"
					closeOnOverlayClick={false}
					showCloseButton={true}
					size="s"
				>
					<div slot="content">
						<span>Modal content</span>
					</div>
					<div slot="buttons">
						<IfxButton variant="secondary">Cancel</IfxButton>
						<IfxButton>OK</IfxButton>
					</div>
				</IfxModal>
				<IfxButton id="open">Open Modal</IfxButton>
			</div>
			<details className="code-details">
				<summary>View Code</summary>
				<pre>
					<code className="language-tsx">{codeString}</code>
				</pre>
			</details>
		</>
	);
}

const codeString = `import { IfxButton, IfxModal } from '@infineon/infineon-design-system-react';

export function IfxModalExample() {
  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event.detail);
    // Add your handler logic here
  };

  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event.detail);
    // Add your handler logic here
  };

  return (
      <div
        onIfxOpen={handleOpen}
        onIfxClose={handleClose}>
        <IfxModal
          caption="Modal Title"
          captionAriaLabel="Additional information for caption"
          closeButtonAriaLabel="Close modal"
          variant="default"
          closeOnOverlayClick={false}
          showCloseButton={true}
          size="s">
          <div slot="content">
            <span>
              Modal content
            </span>
          </div>
          <div slot="buttons">
            <IfxButton variant="secondary">
              Cancel
            </IfxButton>
            <IfxButton>
              OK
            </IfxButton>
          </div>
        </IfxModal>
        <IfxButton id="open">
          Open Modal
        </IfxButton>
      </div>
  );
}`;
