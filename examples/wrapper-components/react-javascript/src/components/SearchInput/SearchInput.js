import React from 'react';
import { IfxIcon, IfxSearchInput } from '@infineon/infineon-design-system-react';

function SearchInput() {
  const handleSearch = (event) => {
    console.log("handling input: ", event.detail?.detail)
  };

  return (
    <div  >
        <IfxSearchInput disabled="false" size='m' show-delete-icon="true" onIfxInput={handleSearch}></IfxSearchInput>
    </div>
  )
}

export default SearchInput;


