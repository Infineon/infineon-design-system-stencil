import { IfxSearchBar } from '@infineon/infineon-design-system-react';

function SearchBar() {
  const handleSearch = (event) => {
    console.log("handling search: ", event.detail)
  };
  return (
    <div  >
      <IfxSearchBar onIfxInput={handleSearch} style={{ width: '100%' }} show-close-button="true"></IfxSearchBar>

    </div>
  )
}

export default SearchBar;


