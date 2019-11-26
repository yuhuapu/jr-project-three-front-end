import React from "react";

import './styles/footerStyle.scss';
import logo from "../resource/img/logo.png";

function Footer() {
    return(
        <footer>
            <img src = {logo} className = "nav-logo-footer" alt = "logo" />
        </footer>
    );
}

export default Footer;