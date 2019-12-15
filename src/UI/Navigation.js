import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./styles/navigationStyle.scss";
import logo from "../resource/img/logo.png";

import loginIcon from "../resource/img/login-icon.png";

const Navigation = props => {
  return (
    <nav className="navbar navbar-expand-xl|lg|md|sm">
      <Link to="/">
        <img src={logo} className="nav-logo" alt="logo" />
      </Link>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/login">
            <button
              className="nav-button"
              onClick={() => props.setShouldLoginDisplay(true)}
            >
              <img src={loginIcon} className="form-icon" alt="loginIcon" />
              <span>Login</span>
            </button>
          </NavLink>
        </li>

        <li className="nav-item">
          <Link to="/signup">
            <button className="nav-button">
              <span>Signup</span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
