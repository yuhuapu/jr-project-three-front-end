import React from 'react';

import ButtonImg from './ButtonImg'

function MenuButton(props) {
    return (
        <div className="menu-button">
            <img src={ButtonImg(props.menuText)} alt="dashboard button" />
            <p>{props.menuText}</p>
        </div>
    );
}

export default MenuButton;