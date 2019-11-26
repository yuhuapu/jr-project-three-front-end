import React from 'react';

import ButtonImg from './ButtonImg';
import ButtonLink from './ButtonLink'
import "../../styles/menuButton.scss";


import { Link } from "react-router-dom";

function MenuButton(props) {


    return (
<<<<<<< HEAD
        <div>
            <Link className="menu-link" to={ButtonLink(props.menuText)}>
                <img src={ButtonImg(props.menuText)} alt="dashboard button" />
                <p>{props.menuText}</p>
            </Link>
=======
        <div className="menu-button" onClick = {props.handleShow}>
            <img src={ButtonImg(props.menuText)} alt="dashboard button" />
            <p>{props.menuText}</p>
>>>>>>> Add forms completed with minor differences to the design, pop up not completed, need to be improved
        </div>
    );
}

export default MenuButton;