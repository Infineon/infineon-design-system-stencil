import { useState } from 'react';
import { IfxTextField, IfxButton } from '@infineon/infineon-design-system-react';

function TextField() {
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [required, setRequired] = useState(false);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);

  const sizes = ['s', 'm'];
  const [sizeIndex, setSizeIndex] = useState(1);

  const icons = ['', 'calendar-16'];
  const [iconIndex, setIconIndex] = useState(0);

  return (
    <div>
      <h2>Text Field</h2>

      <IfxTextField
        error={error}
        disabled={disabled}
        size={sizes[sizeIndex]}
        icon={icons[iconIndex]}
        success={success}
        placeholder="Placeholder"
        readOnly={readOnly}
        caption="Caption"
        label="Label"
        required={required}
        name="text-field"
        showDeleteIcon={showDeleteIcon}
        value=""
        autocomplete="on"
        type="text"
        aria-label="text field for user input"
      />

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={() => setError(p => !p)}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={() => setDisabled(p => !p)}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={() => setSizeIndex(i => (i + 1) % sizes.length)}>Toggle Size</IfxButton>
      <IfxButton variant="secondary" onClick={() => setSuccess(p => !p)}>Toggle Success</IfxButton>
      <IfxButton variant="secondary" onClick={() => setReadOnly(p => !p)}>Toggle Read Only</IfxButton>
      <IfxButton variant="secondary" onClick={() => setRequired(p => !p)}>Toggle Required</IfxButton>
      <IfxButton variant="secondary" onClick={() => setShowDeleteIcon(p => !p)}>Toggle Delete Icon</IfxButton>
      <IfxButton variant="secondary" onClick={() => setIconIndex(i => (i + 1) % icons.length)}>Toggle Icon</IfxButton>
      <br />
      <br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
      <span><b>Success:</b> {String(success)}</span><br />
      <span><b>Read Only:</b> {String(readOnly)}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
      <span><b>Delete Icon:</b> {String(showDeleteIcon)}</span><br />
      <span><b>Icon:</b> {icons[iconIndex] || 'none'}</span><br />
    </div>
  );
}

export default TextField;