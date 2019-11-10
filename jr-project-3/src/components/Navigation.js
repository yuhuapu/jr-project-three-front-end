import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        //Main menu bar
        <nav className="navbar navbar-expand-xl|lg|md|sm">
            <Link to="/">
                <p className="navbar-brand">Logo</p>
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

                {/*This link is set to be testing the static page for admin page*/}
                <Link to="/admin">
                    <li className="nav-item">
                        <p className="nav-link">Admin</p>
                    </li>
                </Link>

            </ul>
        </nav>
    );
}

export default Navigation;