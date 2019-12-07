import React, { useState, useEffect } from "react";
import "./styles/adminLogin.scss";
import { Segment } from "semantic-ui-react";

import loginIcon from "../resource/img/login-icon.png";
import { login } from "../utils/api/auth";
import { setToken } from "../utils/authentication";
import { ADMIN_DASHBOARD_URL } from '../routes/URLMap';

const AdminLogin = (props) => {
  const [loginStates, setLoginStates] = useState({
    email: "",
    password: "",
    isLoading: false,
    ...props
  });

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    setLoginStates({ ...loginStates, [key]: value });
  };

  const loginUser = event => {
    setLoginStates({ ...loginStates, isLoading: true });
    event.preventDefault();
  };
  
  useEffect(() => {
    if (loginStates.isLoading) {
      login(loginStates.email, loginStates.password).then(token => {
        setToken(token);
        setLoginStates({ ...loginStates, isLoading: false });
        const locationState = loginStates.location.state;
        const redirectTo = (locationState && locationState.from) || ADMIN_DASHBOARD_URL;
        loginStates.history.replace(redirectTo);
      }).catch(()=>setLoginStates({...loginStates, isLoading: false}));
    }
  }, [loginStates]);


  return (
     <div className="row">
     <div className="col-sm-2" />
     <form className="form col-sm-8">
       <img src={loginIcon} className="form-icon" alt="loginIcon" />
       <h4 className>Admin Login</h4>
       <Segment basic loading={loginStates.isLoading}>
         <div className="form-group">        
           <input
             onChange={handleChange}
             name="email"
             value={loginStates.email}
             type="email"
             className="form-control"
             id="email"
             placeholder="Username"
           />
         </div>
         <div className="form-group">           
           <input
             onChange={handleChange}
             name="password"
             value={loginStates.password}
             type="password"
             className="form-control"
             id="pwd"
             placeholder="Password"
           />
         </div>
         <button onClick={loginUser}>
           Login
         </button>
       </Segment>
     </form>
     <div className="col-sm-2" />
   </div>     
  );
};

export default AdminLogin;
