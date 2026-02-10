import { useRef, useState } from "react";
import { IfxModal, IfxButton } from "@infineon/infineon-design-system-react";

function Modal() {
  const modalRef = useRef(null);
  const [closeButton, setCloseButton] = useState(true);

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["default", "alert-brand", "alert-danger"];

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ["s", "m", "l"];

  const openModal = () => {
    modalRef.current.opened = true;
  };

  const toggleVariant = () => {
    const next = (variantIndex + 1) % variants.length;
    setVariantIndex(next);
    modalRef.current.variant = variants[next];
  };

  const toggleSize = () => {
    const next = (sizeIndex + 1) % sizes.length;
    setSizeIndex(next);
    modalRef.current.size = sizes[next];
  };

  const toggleCloseButton = () => {
    const next = !closeButton;
    setCloseButton(next);
    modalRef.current.showCloseButton = next;
  };

  return (
    <div className="component">
      <h2>Modal</h2>
      <IfxModal
        ref={modalRef}
        caption="Modal Title"
        caption-aria-label="Additional information for caption"
        close-button-aria-label="Close modal"
        close-on-overlay-click={false}
      >
        <div slot="content">
          <span>Modal content</span>
        </div>
        <div slot="buttons">
          <IfxButton
            variant="secondary"
            onClick={() => console.log("modal button 1 click")}
          >
            Cancel
          </IfxButton>
          <IfxButton
            onClick={() => console.log("modal button 2 click")}
          >
            OK
          </IfxButton>
        </div>
      </IfxModal>
      <IfxButton onClick={openModal}>Open Modal</IfxButton>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <IfxButton variant="secondary" onClick={toggleCloseButton}>Toggle Close Button</IfxButton>
      <br />
      <br />
      <b>Variant:</b> {variants[variantIndex]} <br />
      <b>Size:</b> {sizes[sizeIndex]} <br />
      <b>Close Button:</b> {String(closeButton)}
    </div>
  );
}

export default Modal;