import React, { useState } from 'react';
import { IfxPagination } from '@infineon/infineon-design-system-react';
import data from './mock-data.json'

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const rows = data.map((item) => ({ firstName: item.first_name, lastName: item.last_name, email: item.email, phone: item.phone }));
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = rows.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (e) => { 
    setCurrentPage(e.detail.currentPage)
    setPostsPerPage(e.detail.itemsPerPage)
  }
  

  return (
    <div>
     <table border="1">
      <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((item, i) => 
            <tr key={i}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
            </tr>
          )}
        </tbody>
      </table>
      <IfxPagination
        currentPage={1}
        total={rows.length}
        onIfxPageChange={handlePageChange}
      />
    </div>
  );
}
