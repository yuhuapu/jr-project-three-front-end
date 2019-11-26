import React from 'react';

import ButtonImg from './ButtonImg';
import ButtonLink from './ButtonLink'
import "../../styles/menuButton.scss";


import { Link } from "react-router-dom";

function MenuButton(props) {


    return (
        <div>
            <Link className="menu-link" to={ButtonLink(props.menuText)}>
                <img src={ButtonImg(props.menuText)} alt="dashboard button" />
                <p>{props.menuText}</p>
            </Link>
        </div>
    );
}

export default MenuButton;