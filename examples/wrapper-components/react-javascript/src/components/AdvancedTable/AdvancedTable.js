import React from 'react';
import { IfxTable } from '@infineon/infineon-design-system-react';

function AdvancedTable() {
  const cols = [
    { headerName: 'Make', field: 'make', sortable: true, sort: 'desc', unSortIcon: true },
    { headerName: 'Model', field: 'model', sortable: true, unSortIcon: true },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Age', field: 'age' }
  ];
  const rows = [
    { make: 'Toyota', model: 'Celica', price: 35000, age: 10 },
    { make: 'Ford', model: 'Mondeo', price: 32000, age: 12 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Bmw', model: 'x', price: 72000 },
    { make: 'Mercedes', model: 'y', price: 72000 },
    { make: 'Ferrari', model: 'z', price: 72000 },
    { make: 'Chrysler', model: 'a', price: 72000 },
    { make: 'Range rover', model: 'b', price: 72000 },
    { make: 'Tesla', model: 'x', price: 72000 },
    { make: 'Audi', model: '3', price: 72000 },
    { make: 'Landrover', model: 'x', price: 72000 },
  ];


  return (
    <IfxTable row-height='default'
      cols={JSON.stringify(cols)}
      rows={JSON.stringify(rows)}
      table-height='auto'>
    </IfxTable>
  );
}

export default AdvancedTable;