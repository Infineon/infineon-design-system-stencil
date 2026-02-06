import { useState } from 'react';
import { IfxPagination, IfxButton } from '@infineon/infineon-design-system-react';
import data from './mock-data.json'

export default function App() {
  const [showItemsPerPage, setShowItemsPerPage] = useState(true);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  const itemsPerPage = JSON.stringify([
    { value: 10, label: '10', selected: true },
    { value: 20, label: '20', selected: false },
    { value: 30, label: '30', selected: false }
  ]);

  const rows = data.map((item) => ({ firstName: item.first_name, lastName: item.last_name, email: item.email, phone: item.phone }));
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = rows.slice(indexOfFirstPost, indexOfLastPost)

  const handlePageChange = (e) => {
    setCurrentPage(e.detail.currentPage)
    setPostsPerPage(e.detail.itemsPerPage)
  };

  const toggleShowItemsPerPage = () => {
    setShowItemsPerPage(prevShowItemsPerPage => !prevShowItemsPerPage);
  }

  return (
    <div>
      <h2>Pagination</h2>
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
        total={36}
        show-items-per-page={showItemsPerPage}
        onIfxPageChange={handlePageChange}
        items-per-page={itemsPerPage}
      />
      <br />
      <br />
      <h3 style={{ textDecoration: "underline" }}>Controls</h3>
      <IfxButton variant="secondary" onClick={toggleShowItemsPerPage}>Toggle Show Items per Page</IfxButton>
      <br />
      <br />
      <span><b>Show Items per Page:</b> {String(showItemsPerPage)} </span><br />
    </div>
  );
}
