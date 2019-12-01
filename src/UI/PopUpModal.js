import React from 'react';

const PopUpModal = props => {
    const {shouldDisplay, children} = props;

    if (!shouldDisplay) return null;

    return <div>{children}</div>
}

export default PopUpModal;