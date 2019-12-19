import React, { useState } from 'react';


const AddTutorRow = props => {
    const id = props.id;
    const tutorIdList = props.tutorIdList;
    const setTutorIdList = props.setTutorIdList;
    const addedTutors = props.addedTutors;
    const setAddedTutors = props.setAddedTutors;
    const [buttonClass, setButtonClass] = useState("edit-button")
    const [isButtonClicked, setButtonClicked] = useState(false); 

    return (
        <div className="row">
            <span className="col-md-3">{props.name}</span>
            <span className="col-md-5">{props.email}</span>
            <span className="col-md-2">{props.phone}</span>
            <span className="col-md-2">
            <button 
            className={buttonClass}
            disabled={isButtonClicked}
            onClick = {(e)=>{
                e.preventDefault();
                setTutorIdList(tutorIdList.concat(id));
                setAddedTutors(addedTutors.concat({name: props.name, tutorID: id}));
                setButtonClass("button-clicked");
                setButtonClicked(true);
            }}
            >
                Add
                </button>
            </span>
        </div>
    );
};

export default AddTutorRow