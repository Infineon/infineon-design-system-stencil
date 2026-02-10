import { useState } from 'react';
import { IfxAlert, IfxButton } from '@infineon/infineon-design-system-react';

function Alert() {

  const [closable, setClosable] = useState(true);

  const [variantIndex, setVariantIndex] = useState(0);
  const variants = ["primary", "success", "danger", "warning"];

  const toggleClosable = () => {
    setClosable(prevClosable => !prevClosable);
  }

  const toggleVariant = () => {
    setVariantIndex((index) => (index + 1) % variants.length);
  }

  return (
    <div className="component">
      <h2>Alert</h2>
      <IfxAlert aria-live="assertive" variant={variants[variantIndex]} icon="c-info-16" closable={closable}>Attention! This is an alert message — check it out!</IfxAlert>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
      <IfxButton variant="secondary" onClick={toggleClosable}>Toggle Closable State</IfxButton>
      <br />
      <br />
      <span><b>Variant:</b> {variants[variantIndex]}</span>
      <br />
      <span><b>Closable State:</b> {String(closable)}</span>
    </div>
  )
}

export default Alert;