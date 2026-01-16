import { useState } from 'react';
import { IfxSearchField, IfxButton } from '@infineon/infineon-design-system-react';

function SearchField() {
  const [searchFieldDisabled, setSearchFieldDisabled] = useState(false);
  const [searchFieldDeleteIcon, setSearchFieldDeleteIcon] = useState(true);

  const [sizeIndex, setSizeIndex] = useState(1);
  const sizes = ['s', 'm'];

  const toggleSearchFieldDisabled = () => {
    setSearchFieldDisabled((prev) => !prev);
  };

  const toggleSearchFieldDeleteIcon = () => {
    setSearchFieldDeleteIcon((prev) => !prev);
  };

  const toggleSearchFieldSize = () => {
    setSizeIndex((index) => (index + 1) % sizes.length);
  };

  const handleSearch = (event) => {
    console.log('handling input:', event.detail);
  };

  return (
    <div>
      <h2>Search Field</h2>

      <IfxSearchField
        size={sizes[sizeIndex]}
        disabled={searchFieldDisabled}
        show-delete-icon={searchFieldDeleteIcon}
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
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleSearchFieldDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSearchFieldDeleteIcon}>Toggle Delete Icon</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSearchFieldSize}>Toggle Size</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(searchFieldDisabled)}</span><br />
      <span><b>Delete Icon:</b> {String(searchFieldDeleteIcon)}</span><br />
      <span><b>Size:</b> {sizes[sizeIndex]}</span><br />
    </div>
  );
}

export default SearchField;