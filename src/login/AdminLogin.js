import React, { useState, useEffect } from "react";
import "./styles/adminLogin.scss";
import { Segment } from "semantic-ui-react";

import loginIcon from "../resource/img/login-icon.png";
import { login } from "../utils/api/auth";
import { setToken } from "../utils/authentication";
import { ADMIN_DASHBOARD_URL } from '../routes/URLMap';

const AdminLogin = (props) => {
  const [states, setStates] = useState({
    email: "",
    password: "",
    isLoading: false,
    ...props
  });

  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    setStates({ ...states, [key]: value });
  };

  const loginUser = event => {
    setStates({ ...states, isLoading: true });
    event.preventDefault();
  };
  
  useEffect(() => {
    if (states.isLoading) {
      login(states.email, states.password).then(token => {
        setToken(token);
        setStates({ ...states, isLoading: false });
        const locationState = states.location.state;
        const redirectTo = (locationState && locationState.from) || ADMIN_DASHBOARD_URL;
        states.history.replace(redirectTo);
      }).catch(()=>setStates({...states, isLoading: false}));
    }
  }, [states]);


  return (
     <div className="row">
     <div className="col-sm-2" />
     <form className="form col-sm-8">
       <img src={loginIcon} className="form-icon" alt="loginIcon" />
       <h4 className>Admin Login</h4>
       <Segment basic loading={states.isLoading}>
         <div className="form-group">        
           <input
             onChange={handleChange}
             name="email"
             value={states.email}
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
             value={states.password}
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
