import { useState } from 'react';
import { IfxSearchBar, IfxButton } from '@infineon/infineon-design-system-react';

function SearchBar() {
  const [searchBarOpen, setSearchBarOpen] = useState(true);
  const [searchBarDisabled, setSearchBarDisabled] = useState(false);

  const toggleSearchBarOpen = () => {
    setSearchBarOpen((prev) => !prev);
  };

  const toggleSearchBarDisabled = () => {
    setSearchBarDisabled((prev) => !prev);
  };

  const handleSearch = (event) => {
    console.log('handling search:', event.detail);
  };

  return (
    <div>
      <h2>Search Bar</h2>

      <IfxSearchBar
        isOpen={searchBarOpen}
        disabled={searchBarDisabled}
        autocomplete="on"
        onIfxInput={handleSearch}
      ></IfxSearchBar>

      <br />
      <br />
      <h3 style={{ textDecoration: 'underline' }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleSearchBarDisabled}>Toggle Disabled</IfxButton>
      <IfxButton variant="secondary" onClick={toggleSearchBarOpen}>Toggle Open</IfxButton>
      <br />
      <br />
      <span><b>Disabled:</b> {String(searchBarDisabled)}</span><br />
      <span><b>Open:</b> {String(searchBarOpen)}</span><br />
    </div>
  );
}

export default SearchBar;