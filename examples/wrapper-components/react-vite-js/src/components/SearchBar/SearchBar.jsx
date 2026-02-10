import { useState } from 'react';
import { IfxSearchBar, IfxButton } from '@infineon/infineon-design-system-react';

function SearchBar() {
  const [searchBarOpen, setSearchBarOpen] = useState(true);
  const [searchBarDisabled, setSearchBarDisabled] = useState(false);

  const toggleOpen = () => {
    setSearchBarOpen((prev) => !prev);
  };

  const toggleDisabled = () => {
    setSearchBarDisabled((prev) => !prev);
  };

  const handleSearch = (event) => {
    console.log('handling search:', event.detail);
  };

  return (
    <div className="component">
      <h2>Search Bar</h2>

      <IfxSearchBar
        isOpen={searchBarOpen}
        disabled={searchBarDisabled}
        autocomplete="on"
        onIfxInput={handleSearch}
      ></IfxSearchBar>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleDisabled}>Toggle Disabled</IfxButton>
        <IfxButton variant="secondary" onClick={toggleOpen}>Toggle Open</IfxButton>
      </div>
      <br />

      <div class="state">
        <div><b>Disabled:</b> {String(searchBarDisabled)}</div>
        <div><b>Open:</b> {String(searchBarOpen)}</div>
      </div>
    </div>
  );
}

export default SearchBar;