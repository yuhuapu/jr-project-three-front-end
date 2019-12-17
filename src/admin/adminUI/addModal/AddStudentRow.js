import React, { useState } from 'react';

const AddStudentRow = props => {
    const id = props.id;
    const studentIdList = props.studentIdList;
    const setstudentIdList = props.setstudentIdList;
    const studentNames = props.studentNames;
    const setStudentNames = props.setStudentNames;
    const [buttonClass, setButtonClass] = useState("edit-button")
    const [isButtonClicked, setButtonClicked] = useState(false); 

    return (
        <div className="row">
            <span className="col-md-3">{props.name}</span>
            <span className="col-md-5">{props.email}</span>
            <span className="col-md-2">{props.phone}</span>
            <span className="col-md-2"><button 
            className={buttonClass}
            disabled={isButtonClicked}
            onClick = {(e)=>{
                e.preventDefault();
                setstudentIdList(studentIdList.concat(id));
                setStudentNames(studentNames.concat(props.name))
                setButtonClass("button-clicked");
                setButtonClicked(true);
            }}
            >
                Add
                </button></span>
        </div>
    );
};

export default AddStudentRow