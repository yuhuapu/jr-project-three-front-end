import React, { useState, useEffect } from "react";
import "./styles/login.scss";
import loginIcon from "../resource/img/login-icon.png";
import { login } from "../utils/api/auth";
import { setToken } from "../utils/authentication";
import { HOME_PAGE_URL } from "../routes/URLMap";

const Login = props => {
  const [loginStates, setLoginStates] = useState({
    email: "",
    password: "",
    loginOption: "",
    isLoading: false,
    isErrShowing: false,
    ...props
  });
  
  const handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    setLoginStates({ ...loginStates, [key]: value });
  };

  const closeModal = () => {
    setLoginStates({
      ...loginStates,
      loginOption: "",
      isLoading: false,
      isErrShowing: false,
      shouldLoginDisplay: false
    });
    props.setShouldLoginDisplay(false);
    document.body.style.overflow = "";
  };

  const chooseRole = event => {
    event.target.className = "";

    event.target.className = "role-selected";
    if (event.target.id === "Student") {
      document.getElementById("Tutor").className = "role-not-selected";
    } else {
      document.getElementById("Student").className = "role-not-selected";
    }
    setLoginStates({ ...loginStates, loginOption: event.target.id });
    event.preventDefault();
  };

  const loginUser = event => {
    setLoginStates({ ...loginStates, isLoading: true });
    event.preventDefault();
  };

  useEffect(() => {
    if (loginStates.isLoading) {
      console.log('isLoading is true');
      login(loginStates.email, loginStates.password)
        .then(token => {
          setToken(token);
          setLoginStates({
            ...loginStates,
            loginOption: "",
            isLoading: false,
            isErrShowing: false,
          });
          props.setShouldLoginDisplay(false);
          console.log('success');
          const locationState = loginStates.location.state;
          const redirectTo = (locationState && locationState.from) || HOME_PAGE_URL;
          console.log(props.history);
          props.history.replace(redirectTo);
        })
        .catch(() => {
          setLoginStates({
            ...loginStates,
            loginOption: "",
            isLoading: false,
            isErrShowing: true,
          });
          console.log('fail');}
        );
    }
  }, [loginStates, props]);

  if (!props.shouldLoginDisplay) {
    return null;
  } else {
    const overlay = loginStates.isLoading ? "overlay" : "";
    const spinner = loginStates.isLoading ? "spinner-border" : "";
    const style = loginStates.isErrShowing ? {} : { display: "none" };
    const inputError = loginStates.isErrShowing ? "has-error" : "";

    return (
      <div className="login-modal">
        <form className={`login-container`}>
          <div className={`${overlay}`}>
            <span className="closeButton" onClick={closeModal}>
              x
            </span>
            <img src={loginIcon} className="form-icon" alt="loginIcon" />
            <h5>Login</h5>
            <div className="form-group">
              <input
                type="email"
                onChange={handleChange}
                value={loginStates.email}
                className={`form-control ${inputError}`}
                name="email"
                id="email"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                onChange={handleChange}
                value={loginStates.password}
                className={`form-control ${inputError}`}
                name="password"
                id="pwd"
                placeholder="Password"
              />
            </div>
            <div className="options">
              <button
                id="Student"
                className="role-not-selected"
                onClick={chooseRole}
              >
                I am a student
              </button>
              <button
                id="Tutor"
                className="role-not-selected"
                onClick={chooseRole}
              >
                I am a tutor
              </button>
            </div>
            <div className="error-text" style={style}>
              Invalid username or password!
            </div>
            <div id="login">
              <button onClick={loginUser}>Login</button>
            </div>
            <div className="spinner-location">
              <div className={spinner}></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Login;
