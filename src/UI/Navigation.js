import React from 'react';
import { Link } from "react-router-dom";

import './styles/navigationStyle.scss';
import logo from "../resource/img/logo.png";

function Navigation() {
    return (
        <nav className="navbar navbar-expand-xl|lg|md|sm">
            <Link to="/">
                <img src = {logo} className = "nav-logo" alt = "logo" />
            </Link>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/login">
                        <button className='nav-button' ><p>Login</p></button>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/signup">
                        <button className='nav-button' ><p>Signup</p></button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;