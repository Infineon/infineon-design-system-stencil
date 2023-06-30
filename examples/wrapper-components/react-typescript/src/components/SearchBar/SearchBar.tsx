import { IfxSearchBar } from '@infineon/infineon-design-system-react';

function SearchBar() {
  const handleSearch = (event: CustomEvent) => {
    console.log("search: ", event.detail?.detail)
  };
  return (
    <div>
      <IfxSearchBar onIfxChange={handleSearch} show-close-button="true"></IfxSearchBar>
    </div>
  )
}

export default SearchBar;


