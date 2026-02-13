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

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleVariant}>Toggle Variant</IfxButton>
        <IfxButton variant="secondary" onClick={toggleClosable}>Toggle Closable State</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Variant:</b> {variants[variantIndex]}</div>
        <div><b>Closable:</b> {String(closable)}</div>
      </div>
    </div>
  )
}

export default Alert;