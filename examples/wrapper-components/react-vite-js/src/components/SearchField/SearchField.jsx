import { IfxSearchField } from '@infineon/infineon-design-system-react';

function SearchField() {
  const handleSearch = (event) => {
    console.log("handling input: ", event.detail)
  };

  return (
    <div  >
      <h2>Search Field</h2>
      <IfxSearchField disabled="false" size='m' show-delete-icon="true" onIfxInput={handleSearch}></IfxSearchField>
    </div>
  )
}

export default SearchField;


