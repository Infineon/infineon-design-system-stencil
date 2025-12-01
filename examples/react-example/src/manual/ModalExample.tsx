import { IfxButton, IfxModal } from "@infineon/infineon-design-system-react";
import { useRef } from "react";

export function ModalExample() {
	const modalRef = useRef<HTMLIfxModalElement>(null);

	const openModal = () => {
		if (modalRef.current) {
			modalRef.current.opened = true;
		}
	};

	const handleOpen = (event: CustomEvent) => {
		console.log("ifxOpen:", event.detail);
	};

	const handleClose = (event: CustomEvent) => {
		console.log("ifxClose:", event.detail);
	};

	return (
		<>
			<IfxModal
				ref={modalRef}
				caption="Modal Title"
				captionAriaLabel="Additional information for caption"
				closeButtonAriaLabel="Close modal"
				variant="default"
				closeOnOverlayClick={false}
				showCloseButton={true}
				size="s"
				onIfxOpen={handleOpen}
				onIfxClose={handleClose}
			>
				<div slot="content">
					<span>Modal content</span>
				</div>
				<div slot="buttons">
					<IfxButton variant="secondary">Cancel</IfxButton>
					<IfxButton>OK</IfxButton>
				</div>
			</IfxModal>
			<IfxButton onClick={openModal}>Open Modal</IfxButton>

			<details className="code-details">
				<summary>View Code</summary>
				<pre>
					<code className="language-tsx">{codeString}</code>
				</pre>
			</details>
		</>
	);
}

const codeString = `import { useRef } from 'react';
import { IfxButton, IfxModal } from '@infineon/infineon-design-system-react';

export function ModalExample() {
  const modalRef = useRef<HTMLIfxModalElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.opened = true;
    }
  };

  const handleOpen = (event: CustomEvent) => {
    console.log('ifxOpen:', event.detail);
  };

  const handleClose = (event: CustomEvent) => {
    console.log('ifxClose:', event.detail);
  };

  return (
    <>
      <IfxModal
        ref={modalRef}
        caption="Modal Title"
        captionAriaLabel="Additional information for caption"
        closeButtonAriaLabel="Close modal"
        variant="default"
        closeOnOverlayClick={false}
        showCloseButton={true}
        size="s"
        onIfxOpen={handleOpen}
        onIfxClose={handleClose}>
        <div slot="content">
          <span>Modal content</span>
        </div>
        <div slot="buttons">
          <IfxButton variant="secondary">Cancel</IfxButton>
          <IfxButton>OK</IfxButton>
        </div>
      </IfxModal>
      <IfxButton onClick={openModal}>Open Modal</IfxButton>
    </>
  );
}`;
