import React from 'react';

import ButtonContent from '../menuButton/ButtonContent'

function MenuButton(props) {
    return (
        <div className="menu-button">
            <img src={ButtonContent(props.menuText)} alt="dashboard button" />
            <p>{props.menuText}</p>
        </div>
    );
}

export default MenuButton;