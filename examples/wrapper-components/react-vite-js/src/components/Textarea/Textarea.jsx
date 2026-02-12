import { useState } from 'react';
import { IfxTextarea, IfxButton } from '@infineon/infineon-design-system-react';

function Textarea() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [required, setRequired] = useState(true);
  const [fullWidth, setFullWidth] = useState(false);

  const resizeOptions = ['both', 'vertical', 'horizontal', 'none'];
  const [resizeIndex, setResizeIndex] = useState(0);

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleFullWidth = () => {
    setFullWidth(prevFullWidth => !prevFullWidth);
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
        caption="Caption text, description, error notification" cols="43" disabled={disabled} error={error} label="Label Text" name="textarea" placeholder="Placeholder" required={required} readOnly={readOnly} resize={resizeOptions[resizeIndex]} rows="5" value="" wrap="soft" fullWidth={fullWidth}>
      </IfxTextarea>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
        <IfxButton variant="secondary" onClick={toggleReadOnly}>Toggle Read Only</IfxButton>
        <IfxButton variant="secondary" onClick={toggleResize}>Toggle Resize</IfxButton>
        <IfxButton variant="secondary" onClick={toggleFullWidth}>Toggle Full Width</IfxButton>
        <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Error:</b> {String(error)}</div>
        <div><b>Read Only:</b> {String(readOnly)}</div>
        <div><b>Resize:</b> {resizeOptions[resizeIndex]}</div>
        <div><b>Full Width:</b> {String(fullWidth)}</div>
        <div><b>Required:</b> {String(required)}</div>
      </div>
    </div>
  );
}

export default Textarea;