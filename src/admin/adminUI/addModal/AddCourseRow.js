import React, { useState } from 'react';

const AddCourseRow = props => {
    const id = props.code;
    const courseName = props.courseName;
    const startDate = new Date(props.startDate).toLocaleDateString();
    const endDate = new Date(props.endDate).toLocaleDateString();
    const courseIdList = props.courseIdList;
    const setcourseIdList = props.setcourseIdList;
    const courseNames = props.courseNames;
    const setCourseNames = props.setCourseNames;
    const [buttonClass, setButtonClass] = useState("edit-button")
    const [isButtonClicked, setButtonClicked] = useState(false); 

    return (
        <div className="row">
            <span className="col-md-3">{courseName}</span>
            <span className="col-md-7">{startDate}  -  {endDate}</span>
            <button 
            className={buttonClass}
            disabled={isButtonClicked}
            onClick = {(e)=>{
                e.preventDefault();
                setcourseIdList(courseIdList.concat(id));
                setCourseNames(courseNames.concat(props.courseName))
                setButtonClass("button-clicked");
                setButtonClicked(true);
            }}
            >
                Add
                </button>
        </div>
    );
};

export default AddCourseRow