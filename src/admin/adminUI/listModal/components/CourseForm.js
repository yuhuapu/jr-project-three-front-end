import React from "react";

import CourseRow from "./CourseRow";

import "../styles/listModel.scss";

function CourseForm(props) {
  return (
    <section className="course-list">
      <div className="row course-form-title">
        <span className="col-md-3 course-title-name">
          {props.searchName} Name
        </span>
        <span className="col-md-5 course-title-date">Date</span>
        <span className="col-md-1 course-title-tutor">Tutor</span>
        <span className="col-md-1 course-title-student">Student</span>
      </div>
      <hr className="line-top" />
      {!props.shouldSearch ? (
        props.courses.map(course => (
          <CourseRow
            key={course._id}
            name={course.courseName}
            date={course.coursePeriod}
            tutor={course.tutorId.length}
            student={course.studentId.length}
          />
        ))
      ) : (
        <CourseRow
          key={props.courses._id}
          name={props.courses.courseName}
          date={props.courses.coursePeriod}
        />
      )}
    </section>
  );
}

export default CourseForm;
