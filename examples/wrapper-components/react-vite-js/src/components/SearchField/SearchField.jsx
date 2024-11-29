import { IfxSearchField } from '@infineon/infineon-design-system-react';

function SearchField() {
  const handleSearch = (event) => {
    console.log("handling input: ", event.detail)
  };

  return (
    <div  >
      <IfxSearchField disabled="false" size='m' show-delete-icon="true" onIfxInput={handleSearch}></IfxSearchField>
    </div>
  )
}

export default SearchField;


