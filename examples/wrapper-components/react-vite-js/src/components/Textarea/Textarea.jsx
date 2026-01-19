import { useState } from 'react';
import { IfxTextarea, IfxButton } from '@infineon/infineon-design-system-react';

function Textarea() {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const [required, setRequired] = useState(true);

  const resizeOptions = ['both', 'vertical', 'horizontal', 'none'];
  const [resizeIndex, setResizeIndex] = useState(0);

  return (
    <div>
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
        wrap="soft"
        fullWidth={fullWidth}/>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={() => setDisabled(p => !p)}>Toggle Disabled</IfxButton><IfxButton variant="secondary" onClick={() => setError(p => !p)}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={() => setReadOnly(p => !p)}>Toggle Read Only</IfxButton>
      <IfxButton variant="secondary" onClick={() => setResizeIndex(i => (i + 1) % resizeOptions.length)}>Toggle Resize</IfxButton>
      <IfxButton variant="secondary" onClick={() => setFullWidth(p => !p)}>Toggle Full Width</IfxButton>
      <IfxButton variant="secondary" onClick={() => setRequired(p => !p)}>Toggle Required</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Read Only:</b> {String(readOnly)}</span><br />
      <span><b>Resize:</b> {resizeOptions[resizeIndex]}</span><br />
      <span><b>Full Width:</b> {String(fullWidth)}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
    </div>
  );
}

export default Textarea;