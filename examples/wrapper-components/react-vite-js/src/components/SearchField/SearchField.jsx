import { useState } from 'react';
import { IfxSearchField, IfxButton } from '@infineon/infineon-design-system-react';

function SearchField() {
  const [disabled, setdisabled] = useState(false);
  const [deleteIcon, setDeleteIcon] = useState(true);

  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ['s', 'm'];

  const toggledisabled = () => {
    setdisabled((prev) => !prev);
  };

  const toggledeleteIcon = () => {
    setDeleteIcon((prev) => !prev);
  };

  const toggleSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  };

  const handleSearch = (event) => {
    console.log('handling input:', event.detail);
  };

  return (
    <div className="component">
      <h2>Search Field</h2>

      <IfxSearchField
        size={sizes[sizeIndex]}
        disabled={disabled}
        show-delete-icon={deleteIcon}
        show-suggestions="false"
        enable-history="true"
        max-suggestions="10"
        max-history-items="5"
        history-key="ifx-search-history"
        history-header-text="Recent Searches"
        autocomplete="on"
        placeholder="Search..."
        aria-label="Search field"
        delete-icon-aria-label="Clear search"
        history-delete-aria-label="Remove from history"
        dropdown-aria-label="Search suggestions and history"
        suggestion-aria-label="Search suggestion"
        history-item-aria-label="Search history item"
        onIfxInput={handleSearch}
      ></IfxSearchField>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggledisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggledeleteIcon}>Toggle Delete Icon</IfxButton>
        <IfxButton variant="secondary" onClick={toggleSize}>Toggle Size</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Disabled:</b> {String(disabled)}</div>
        <div><b>Delete Icon:</b> {String(deleteIcon)}</div>
        <div><b>Size:</b> {sizes[sizeIndex]}</div>
      </div>
    </div>
  );
}

export default SearchField;