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
            name={user.firstName + user.lastName}
            email={user.email}
            phone={user.mobile}
          />
        ))
      ) : (
        <TutorStudentRow
          key={users.email}
          name={users.firstName + users.lastName}
          email={users.email}
          phone={users.mobile}
        />
      )}
    </section>
  );
}

export default StudentTutorForm;