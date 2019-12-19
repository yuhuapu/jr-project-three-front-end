import React from 'react';


import "../styles/listModel.scss";

function CourseRow (props) {

const handleClick = (event) => {
    props.setDeleteName(event.target.value);
    props.setIsDeleting(true);
}

  return (
    <div className="course-list-row">
      <div className="row">
        <span className="col-md-3 course-list-name">{props.name}</span>
        <span className="col-md-5 course-list-date">{props.startDate} - {props.endDate}</span>
        <span className="col-md-1 course-list-tutor">{props.tutor}</span>
        <span className="col-md-1 course-list-student">{props.student}</span>
        <span className="col-md-1">
          <button
            className="edit-button"
            onClick={(e) => {
              e.preventDefault();
              props.setAddFormType('Edit Course');
              props.setShouldDisplay(true);
              props.setCourseToUpdate(props.code)
            }}>
            Edit
      </button>
        </span>
        <span className="col-md-1">
        <button className="delete col-md-1" value= {props.code} loading={props.isDeleting}
          onClick={handleClick}>Delete</button>
        </span>
      </div>
    </div>
  );
}

export default CourseRow;
