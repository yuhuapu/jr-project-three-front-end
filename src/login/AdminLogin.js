import React, { useState, useEffect } from "react";
import "./styles/adminLogin.scss";

import loginIcon from "../resource/img/login-icon.png";
import { login } from "../utils/api/auth";
import { setToken } from "../utils/authentication";
import { ADMIN_DASHBOARD_URL } from "../routes/URLMap";

const AdminLogin = (props) => {
  const [loginStates, setLoginStates] = useState({
    email: "",
    password: "",
    isLoading: false,
    isErrShowing: false,
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
      login(loginStates.email, loginStates.password)
        .then(token => {
          setToken(token);
          setLoginStates({
            ...loginStates,
            isLoading: false,
            isErrShowing: false
          });
          const locationState = loginStates.location.state;
          const redirectTo =
            (locationState && locationState.from) || ADMIN_DASHBOARD_URL;
          loginStates.history.replace(redirectTo);
        })
        .catch(() =>
          setLoginStates({
            ...loginStates,
            isLoading: false,
            isErrShowing: true
          })
        );
    }
  }, [loginStates]);

  const overlay = loginStates.isLoading ? "overlay" : "";
  const spinnerClass = loginStates.isLoading
    ? "spinner-border spinner-location"
    : "";
  const style = loginStates.isErrShowing ? {} : { display: "none" };
  const inputError = loginStates.isErrShowing ? "has-error" : "";

  return (
    <div className="row">
      <div className="col-sm-2" />
      <form className={`form col-sm-8 ${overlay}`}>
        <img src={loginIcon} className="form-icon" alt="loginIcon" />
        <h4 className>Admin Login</h4>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="email"
            value={loginStates.email}
            type="email"
            className={`form-control ${inputError}`}
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
            className={`form-control ${inputError}`}
            id="pwd"
            placeholder="Password"
          />
        </div>
        <div style={style}>
          <label className="error-text">Invalid username or password!</label>
        </div>
        <button onClick={loginUser}>Login</button>
        <div className={spinnerClass}></div>
      </form>
      <div className="col-sm-2" />
    </div>
  );
};

export default AdminLogin;
