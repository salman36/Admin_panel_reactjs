import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Playland = () => {

  const [playlands, setPlaylands] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

      useEffect(() => {
        // Define a function to fetch data from the API
        const fetchPlaylands = async () => {
          try {
            // Make a GET request to the API endpoint
            const response = await axios.get(`https://starter-express-api-rose.vercel.app/api/admin/allplaylands?page=${currentPage}`);
            

            // Set the retrieved data in the state
            console.log(response);
            setPlaylands(response.data.playlands);
            setTotalPages(response.data.totalPage);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        // Call the fetchPlaylands function
        fetchPlaylands();
      }, [currentPage]);

      const handlePageChange = (newPage) => {
        // Validate newPage to ensure it's within the valid range
        if (newPage >= 1 && newPage <= totalPages) {
          setCurrentPage(newPage);
        }
      };

  return (
        <div className='container my-8'>
           <h2 className="mb-4">All Playland List</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Playland Name</th>
                <th scope="col">Description</th>
                <th scope="col">Time Open</th>
                <th scope="col">Time Close</th>
                <th scope="col">Price</th>
                <th scope="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {playlands.map((playland) => (
                <tr key={playland._id}>
                  <th scope="row">{playland._id}</th>
                  <td>{playland.playland_name}</td>
                  <td>{playland.discription}</td>
                  <td>{playland.time_open}</td>
                  <td>{playland.time_close}</td>
                  <td>{playland.price}</td>
                  <td>{playland.location}</td>
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

export default Playland
