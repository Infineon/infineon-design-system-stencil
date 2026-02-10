import { useState } from 'react';
import { IfxTextarea, IfxButton } from '@infineon/infineon-design-system-react';

function Textarea() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [required, setRequired] = useState(true);

  const resizeOptions = ['both', 'vertical', 'horizontal', 'none'];
  const [resizeIndex, setResizeIndex] = useState(0);

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  const toggleReadOnly = () => {
    setReadOnly(prevReadOnly => !prevReadOnly);
  }

  const toggleRequired = () => {
    setRequired(prevRequired => !prevRequired);
  }

  const toggleResize = () => {
    setResizeIndex((index) => (index + 1) % resizeOptions.length);
  }

  return (
    <div className="component">
      <h2>Textarea</h2>

      <IfxTextarea
        caption="Caption text, description, error notification"
        cols="43"
        disabled={disabled}
        error={error}
        label="Label Text"
        name="textarea"
        placeholder="Placeholder"
        required={required}
        readOnly={readOnly}
        resize={resizeOptions[resizeIndex]}
        rows="5"
        value=""
        wrap="soft" />

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={toggleReadOnly}>Toggle Read Only</IfxButton>
      <IfxButton variant="secondary" onClick={toggleResize}>Toggle Resize</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Read Only:</b> {String(readOnly)}</span><br />
      <span><b>Resize:</b> {resizeOptions[resizeIndex]}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
    </div>
  );
}

export default Textarea;