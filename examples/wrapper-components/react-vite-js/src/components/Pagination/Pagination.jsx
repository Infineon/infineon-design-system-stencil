import { useState } from 'react';
import { IfxPagination, IfxButton } from '@infineon/infineon-design-system-react';

export default function App() {
  const [showItemsPerPage, setShowItemsPerPage] = useState(true);

  const toggleShowItemsPerPage = () => {
    setShowItemsPerPage(prevShow => !prevShow);
  }

  return (
    <div className="component">
      <h2>Pagination</h2>
      <IfxPagination
        total="50"
        current-page="1"
        showItemsPerPage={showItemsPerPage}
        items-per-page='[{"value":"10","selected":true}, {"value":"20","selected":false}, {"value":"30","selected":false}]'>
      </IfxPagination>
      <br />
      <br />

      <h3 class="controls-title">Controls</h3>
      <div class="controls">
        <IfxButton variant="secondary" onClick={toggleShowItemsPerPage}>Toggle Show Items per Page</IfxButton>
      </div>
      <br />
      
      <div class="state">
        <div><b>Show Items per Page:</b> {String(showItemsPerPage)} </div>
      </div>
    </div>
  );
}
