import React from "react";

import "../styles/listModel.scss";

function TutorStudentRow(props) {

  
  return (
    <div className="row course-list-row">
      <span className="col-md-3 course-list-name">{props.name}</span>
      <span className="col-md-5 course-list-date">{props.email}</span>
      <span className="col-md-2 course-list-tutor">{props.phone}</span>
      <button className="edit col-md-1">Edit</button>
      <button className="delete col-md-1" value= {props.id} loading={props.isDeleting}
          onClick={(event) => {
            props.setDeleteName(event.target.value);
            props.setIsDeleting(true);
        }}>Delete</button>
    </div>
  );
}

export default TutorStudentRow;
