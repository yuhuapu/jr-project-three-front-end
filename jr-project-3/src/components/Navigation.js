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

                    {/* Link need to be changed later, admin is for test only */}
                    <Link to = "/admin">
                    <li className= "nav-item">
                        <p className= "nav-link">Login</p>
                    </li>
                    </Link>
                </ul>
            </nav>
    );
}

export default Navigation;