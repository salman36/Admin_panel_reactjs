import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
// import { useNavigate } from 'react-router-dom'
// import AuthConsumer from "../hooks/useAuth";

const Contact = () => {

  const [users, setUsers] = useState([]);
  const [playlands, setPlaylands] = useState([]);

      useEffect(() => {
        // Define a function to fetch data from the API
        const fetchUsers = async () => {
          try {
            // Make a GET request to the API endpoint
            const response = await axios.get('https://starter-express-api-rose.vercel.app/api/admin/allusers');
            

            // Set the retrieved data in the state
            console.log(response);
            setUsers(response.data.totalCount);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        // Call the fetchUsers function
        fetchUsers();
      }, []);

      useEffect(() => {
        // Define a function to fetch data from the API
        const fetchPlaylands = async () => {
          try {
            // Make a GET request to the API endpoint
            const response = await axios.get('https://starter-express-api-rose.vercel.app/api/admin/allplaylands');
            

            // Set the retrieved data in the state
            console.log(response);
            setPlaylands(response.data.totalCount);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        // Call the fetchPlaylands function
        fetchPlaylands();
      }, []);
  // let navigate = useNavigate();
  // const { logout, authed } = AuthConsumer();
  // const routeChange = () =>{
  //   let path = `/dashboard/about-dashboard`;
  //   navigate(path);
  // }
  // const routelogin = () =>{
  //   let path = `/login`;
  //   navigate(path);
  // }

  // const handleLogout = () => {
  //   logout();
  //   navigate('/login');
  // };
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div className="card-body text-center">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">{users}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div className="card-body text-center">
              <h5 className="card-title">Total Playlands</h5>
              <p className="card-text">{playlands}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
