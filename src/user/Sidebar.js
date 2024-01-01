import React from 'react';
import { useNavigate,Link } from 'react-router-dom'
import AuthConsumer from "../hooks/useAuth";

const Sidebar = () => {

    let navigate = useNavigate();
  const { logout, authed } = AuthConsumer(); 


  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
        <div className="col-md-2 sidebar">
            <h3><i className="fas fa-cogs"></i> FUNCARE</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link" to='/dashboard/user'><i className="fas fa-home"></i> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/about"><i className="fas fa-chart-bar"></i> Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/playland"><i className="fas fa-user"></i> Playlands</Link>
              </li>
              <li className="nav-item">
                {authed && (
                  <input type='button' onClick={handleLogout} value="Logout" style={{marginTop:"22%"}} className="btn btn-danger px-4" />
                )}
              </li>
            </ul>
        </div>
  )
}

export default Sidebar
