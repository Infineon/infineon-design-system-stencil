import { IfxIcon, IfxSearchInput } from '@infineon/infineon-design-system-react';

function SearchInput() {
  const handleSearch = (event: CustomEvent) => {
    console.log("handling input: ", event.detail?.detail)
  };

  return (
    <div  >
        <IfxSearchInput disabled={false} size='m' show-delete-icon="true" onIfxInput={handleSearch}>
          <IfxIcon icon="search-16" class="search-icon"></IfxIcon>
        </IfxSearchInput>
    </div>
  )
}

export default SearchInput;


