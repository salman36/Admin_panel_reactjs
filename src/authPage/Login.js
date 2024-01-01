import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import './LoginStyle.css';

const Login = () => {
  const [credentionals, setcredentionals] = useState({name:"",email:"",password:""});
  const { login } = useAuth();
  let navigate = useNavigate ();


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    
    try {
      // Call the login function from the useAuth hook
       const loginResponse = await login(credentionals.email,credentionals.password);
       const result = await loginResponse;
       if(result === "Successful"){
        navigate("/dashboard/user");
       }
       console.log(result);
      // If the login was successful, you can redirect the user or perform other actions
    } catch (error) {
      // console.log("Login error:", error);
      // Handle the login error, show a message, etc.
    }

  }


  const onChange = (event) => {
    
    setcredentionals({...credentionals,[event.target.name] : event.target.value});
  }

  return (
    <>
    <div className="container">
          <div className="row">
              <div className="col-lg-3 col-md-2"></div>
              <div className="col-lg-6 col-md-8 login-box">
                  <div className="col-lg-12 login-key">
                      <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                  <div className="col-lg-12 login-title">
                      ADMIN LOGIN
                  </div>

                  <div className="col-lg-12 login-form">
                      <div className="col-lg-12 login-form">
                          <form onSubmit={handleSubmit}>
                              <div className="form-group">
                                  <label className="form-control-label">Email</label>
                                  <input type="email" className="form-control" name="email" value={credentionals.email} onChange={onChange} id="email" />
                              </div>
                              <div className="form-group">
                                  <label className="form-control-label">Password</label>
                                  <input type="password" className="form-control" name="password" value={credentionals.password} onChange={onChange} id="password"  />
                              </div>

                              <div className="col-lg-12 loginbttm">
                                  <div className="col-lg-6 login-btm login-text">
                                  </div>
                                  <div className="col-lg-6 login-btm login-button">
                                      <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className="col-lg-3 col-md-2"></div>
              </div>
          </div>
    </div>
    </>
  )
}

export default Login
