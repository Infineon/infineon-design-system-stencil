import React from 'react';
import { IfxPagination } from '@infineon/infineon-design-system-react';


function pagination() {
  return (
    <div>
      <IfxPagination total="500" current-page="1"></IfxPagination>
    </div>
  );
}

export default pagination;