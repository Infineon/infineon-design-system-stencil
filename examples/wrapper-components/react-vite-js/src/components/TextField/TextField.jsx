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

  const toggleError = () => {
    setError(prevError => !prevError);
  }

  const toggleDisabled = () => {
    setDisabled(prevDisabled => !prevDisabled);
  }

  const toggleSuccess = () => {
    setSuccess(prevSuccess => !prevSuccess);
  }

  const toggleReadOnly = () => {
    setReadOnly(prevReadOnly => !prevReadOnly);
  }

  const toggleRequired = () => {
    setRequired(prevRequired => !prevRequired);
  }

  const toggleDeleteIcon = () => {
    setShowDeleteIcon(prevShowDeleteIcon => !prevShowDeleteIcon);
  }

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  }

  const toggleIcon = () => {
    setIconIndex((index) => (index + 1) % icons.length);
  }

  return (
    <div className="component">
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
      <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSuccess}>Toggle Success</IfxButton>
      <IfxButton variant="secondary" onClick={toggleReadOnly}>Toggle Read Only</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <IfxButton variant="secondary" onClick={toggleDeleteIcon}>Toggle Delete Icon</IfxButton>
      <IfxButton variant="secondary" onClick={toggleIcon}>Toggle Icon</IfxButton>
      <br />
      <br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
      <span><b>Success:</b> {String(success)}</span><br />
      <span><b>Read Only:</b> {String(readOnly)}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
      <span><b>Delete Icon:</b> {String(showDeleteIcon)}</span><br />
      <span><b>Icon:</b> {icons[iconIndex]}</span><br />
    </div>
  );
}

export default TextField;