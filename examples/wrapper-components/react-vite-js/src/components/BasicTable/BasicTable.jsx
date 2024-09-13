import  { useState } from 'react';
import { IfxBasicTable } from '@infineon/infineon-design-system-react';

function BasicTable() {
  const [rows] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000, age: 10 },
    { make: 'Ford', model: 'Mondeo', price: 32000, age: 12 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
    ]
  )

  const [cols] = useState([
    { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
    { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Age', field: 'age' }
  ]
  )

  return (
    <div>
      <IfxBasicTable id='myTable' row-height='default'
        cols={JSON.stringify(cols)}
        rows={JSON.stringify(rows)}
        table-height='auto'>
      </IfxBasicTable>
    </div>

  );
}

export default BasicTable;