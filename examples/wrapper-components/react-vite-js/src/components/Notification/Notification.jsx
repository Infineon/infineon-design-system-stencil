import { useState } from 'react';
import { IfxNotification, IfxButton } from '@infineon/infineon-design-system-react';

function Notification() {
  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["neutral", "success", "locked", "error"];

  const toggleVariant = () => {
    const next = (variantIndex + 1) % variants.length;
    setVariantIndex(next);
    modalRef.current.variant = variants[next];
  };

  return (
    <div>
      <h2>Notification</h2>
      <IfxNotification icon="c-check-16" variant={variants[variantIndex]} link-text="Link" link-href="https://www.example.com">Success notification</IfxNotification>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <br />
      <br />
      <b>Variant:</b> {variants[variantIndex]} <br />
    </div>
  );
}

export default Notification;