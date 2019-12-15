import React from "react";
import "./styles/login.scss";
import loginIcon from "../resource/img/login-icon.png";

const Login = props => {
  if (!props.shouldLoginDisplay) {
    return null;
  } else {
    return (
      <div className="login-modal">
        <form className="login-container">
          <img src={loginIcon} className="form-icon" alt="loginIcon" />
          <h5>Login</h5>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <div className="options">
            <button onClick={()=>{}}>I am a student</button>
            <button>I am a tutor</button>
          </div>
        </form>
      </div>

      /*
            <form className="container">
                <div className="form-group">
                    <label for="email">Email Address:</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="passward" className="form-control" id="pwd" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            */
    );
  }
};

export default Login;
