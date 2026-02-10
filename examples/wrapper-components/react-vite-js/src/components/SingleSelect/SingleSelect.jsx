import { useState } from 'react';
import { IfxSelect, IfxButton } from '@infineon/infineon-design-system-react';

function SingleSelect() {
  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ['s', 'm'];

  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(true);
  const [error, setError] = useState(false);
  const [showSearch, setShowSearch] = useState(true);
  const [showClearButton, setShowClearButton] = useState(false);

  const toggleSize = () => {
    setSizeIndex(index => (index + 1) % sizes.length);
  };

  const toggleDisabled = () => {
    setDisabled(prev => !prev);
  };

  const toggleRequired = () => {
    setRequired(prev => !prev);
  };

  const toggleError = () => {
    setError(prev => !prev);
  };

  const toggleShowSearch = () => {
    setShowSearch(prev => !prev);
  };

  const toggleShowClearButton = () => {
    setShowClearButton(prev => !prev);
  };

  return (
    <div className="component">
      <h2>Single Select</h2>

      <IfxSelect
        size={sizes[sizeIndex]}
        placeholder="true"
        show-clear-button={showClearButton}
        show-search={showSearch}
        search-placeholder-value="Search..."
        disabled={disabled}
        required={required}
        error={error}
        label="Label"
        caption="Caption"
        placeholder-value="Placeholder"
        options='[{"value":"a","label":"option a","selected":false}, {"value":"b","label":"option b","selected":false}, {"value":"c","label":"option c","selected":false}]'>
      </IfxSelect>
      <br />
      <br />

      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleRequired}>Toggle Required</IfxButton>
      <IfxButton variant="secondary" onClick={toggleError}>Toggle Error</IfxButton>
      <IfxButton variant="secondary" onClick={toggleShowSearch}>Toggle Search</IfxButton>
      <IfxButton variant="secondary" onClick={toggleShowClearButton}>Toggle Clear Button</IfxButton>
      <br />
      <br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
      <span><b>Disabled:</b> {String(disabled)}</span><br />
      <span><b>Required:</b> {String(required)}</span><br />
      <span><b>Error:</b> {String(error)}</span><br />
      <span><b>Show Search:</b> {String(showSearch)}</span><br />
      <span><b>Show Clear Button:</b> {String(showClearButton)}</span><br />
    </div>
  );
}

export default SingleSelect;