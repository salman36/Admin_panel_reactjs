import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


      useEffect(() => {
        // Define a function to fetch data from the API
        const fetchUsers = async () => {
          try {
            // Make a GET request to the API endpoint
            const response = await axios.get(`https://starter-express-api-rose.vercel.app/api/admin/allusers?page=${currentPage}`);
            

            // Set the retrieved data in the state
            // console.log(response);
            setUsers(response.data.users);
            setTotalPages(response.data.totalPage);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        // Call the fetchUsers function
        fetchUsers();
      }, [currentPage]);

      const handlePageChange = (newPage) => {
        // Validate newPage to ensure it's within the valid range
        if (newPage >= 1 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
      };


  return (
        <div className='container my-8'>
           <h2 className="mb-4">All Users List</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">Phone No</th>
                <th scope="col">Email Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th scope="row">{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                  <button className="page-link" onClick={() => handlePageChange(page)}>
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
  )
}


export default About
