import { useState } from 'react';
import { IfxCheckbox, IfxButton } from '@infineon/infineon-design-system-react';

function App() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  const [sizeIndex, setSizeIndex] = useState(0);
  const sizes = ["m", "s"];

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  const toggleIndeterminate = () => {
    setIndeterminate(prevIndeterminate => !prevIndeterminate);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  return (
    <div className="component">
      <h2>Checkbox</h2>
      <IfxCheckbox disabled={disabled} indeterminate={indeterminate} size={sizes[sizeIndex]} error={error} checked="false" name="name">Text</IfxCheckbox>
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={toggleIndeterminate}>Toggle Indeterminate</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
      <span><b>Indeterminate:</b> {String(indeterminate)}</span><br />
    </div>
  );
}

export default App;
