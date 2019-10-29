import React from 'react';

function Navigation() {
    return (
        //Main menu bar
            <nav className = "navbar navbar-expand-xl|lg|md|sm bg-light">
                <a className = "navbar-brand" href = "*">Home</a>
                <ul className = "nav nav-pills">
                    <li className= "nav-item">
                        <a className= "nav-link" href = "*">Signup</a>
                    </li>
                    <li className= "nav-item">
                        <a className= "nav-link" href = "*">Login</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Navigation;