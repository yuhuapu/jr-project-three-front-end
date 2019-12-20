import React, { useState } from 'react';

const AddFormsButton = props => {
    const { setToDelete, deleteTargetArray, addedID, children } = props;
    const [buttonClass, setButtonClass] = useState("edit-button");
    const [isButtonClicked, setButtonClicked] = useState(false);
    
    return (
        <button
            className={buttonClass}
            disabled={isButtonClicked}
            onClick={(e) => {
                e.preventDefault();
                setButtonClass("button-clicked");
                setButtonClicked(true);
                setToDelete(deleteTargetArray.concat(addedID));
            }}
        >
            {children}
        </button>
    );
}

export default AddFormsButton;