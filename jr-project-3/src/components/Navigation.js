import React from 'react';
import { Link } from "react-router-dom";

function Navigation() {
    return (
        //Main menu bar
            <nav className = "navbar navbar-expand-xl|lg|md|sm bg-light">
                <Link to = "/">
                <p className = "navbar-brand">Home</p>
                </Link>
                <ul className = "nav nav-pills">
                    <Link to = "/signup">
                    <li className= "nav-item">
                        <p className= "nav-link">Signup</p>
                    </li>
                    </Link>

                    <Link to = "/login">
                    <li className= "nav-item">
                        <p className= "nav-link">Login</p>
                    </li>
                    </Link>

                    {/*This link is set to be testing the static page for admin page*/}
                    <Link to = "/admin">
                    <li className= "nav-item">
                        <p className= "nav-link">Admin</p>
                    </li>
                    </Link>

                </ul>
            </nav>
    );
}

export default Navigation;