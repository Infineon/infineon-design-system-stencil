import React, { useState, useEffect } from 'react';
import { IfxPagination } from '@infineon/infineon-design-system-react'; // Import your Stencil component
import data from './mock-data.json';

let ITEMS_PER_PAGE = 10;

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Slice the data to get the current page's items
    const currentPageData = data.slice(startIndex, endIndex);
    console.log("curr", currentPageData.length)

    // Update the current data
    setCurrentData(currentPageData);

    // Update the total pages based on the data length
    setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
    console.log("total", totalPages)

  }, [currentPage, totalPages]);



  const handlePageChange = (event) => {
    // Update the current page when the pagination component emits a page change event
    setCurrentPage(event.detail.currentPage);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <IfxPagination
        currentPage={currentPage}
        total={totalPages}
        onIfxPageChange={handlePageChange}
      />
    </div>
  );
}
