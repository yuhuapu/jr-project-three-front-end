import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import { deleteStudentById } from "../../../../utils/api/student";
import { deleteTutorById } from "../../../../utils/api/tutor";
import TutorStudentRow from "./TutorStudentRow";

import "../styles/listModel.scss";

function StudentTutorForm(props) {
  const [deleteName, setDeleteName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { users } = props;


  useEffect(() => {
    if(isDeleting) {
      if (window.confirm("Are you sure?")) {
        if (props.searchName === "Student"){
          deleteStudentById(deleteName).then(() => {
            window.location.reload()});
        }else if (props.searchName === "Tutor"){
          deleteTutorById(deleteName).then(() => {
            window.location.reload()});
        }
      }
    }
  },)

  return (
    <section className="course-list">
      <div className="row course-form-title">
        <span className="col-md-3 course-title-name">
          {props.searchName} Name
        </span>
        <span className="col-md-5 course-title-date">Email</span>
        <span className="col-md-2 course-title-tutor">Phone</span>
      </div>
      <hr className="line-top" />
      {users.map(user => (
          <TutorStudentRow
            key={user.email}
            id={user._id}
            name={user.firstName + user.lastName}
            email={user.email}
            phone={user.mobile}
            setShouldDisplay={props.setShouldDisplay}
            setAddFormType={props.setAddFormType}
            searchName={props.searchName}
            setStudentToUpdate={props.setStudentToUpdate}
            setTutorToUpdate={props.setTutorToUpdate}
          />
        ))}
      ) : (
        <TutorStudentRow
          key={users.email}
          id={users._id}
          name={users.firstName + users.lastName}
          email={users.email}
          phone={users.mobile}
          setShouldDisplay={props.setShouldDisplay}
          setAddFormType={props.setAddFormType}
          searchName={props.searchName}
          setStudentToUpdate={props.setStudentToUpdate}
          setTutorToUpdate={props.setTutorToUpdate}
          setDeleteName={setDeleteName}
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
        />
      )}
    </section>
  );
}

export default withRouter(StudentTutorForm);
