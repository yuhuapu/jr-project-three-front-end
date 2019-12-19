import React from "react";

import TutorStudentRow from "./TutorStudentRow";

import "../styles/listModel.scss";

function StudentTutorForm(props) {
  const { users, shouldSearch } = props;
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
      {!shouldSearch ? (
        users.map(user => (
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
        ))
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
        />
      )}
    </section>
  );
}

export default StudentTutorForm;
