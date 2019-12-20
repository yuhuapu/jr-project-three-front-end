import React from "react";

import "../styles/listModel.scss";

function TutorStudentRow(props) {
  const userType = props.searchName;
  return (
    <div className="row course-list-row">
      <span className="col-md-3 course-list-name">{props.name}</span>
      <span className="col-md-5 course-list-date">{props.email}</span>
      <span className="col-md-2 course-list-tutor">{props.phone}</span>
      <button
        className="edit-button"
        onClick={(e) => {
          e.preventDefault();
          props.setShouldDisplay(true);
          if (userType === 'Student') {
            props.setAddFormType('Edit Student');
            props.setStudentToUpdate(props.id);
          } else {
            props.setAddFormType('Edit Tutor');
            props.setTutorToUpdate(props.id);
          }
        }}>
        Edit
      </button>
      <button className="edit-button" value= {props.id} loading={props.isDeleting}
          onClick={(event) => {
            props.setDeleteName(event.target.value);
            props.setIsDeleting(true);
        }}>Delete</button>
    </div>
  );
}

export default TutorStudentRow;
