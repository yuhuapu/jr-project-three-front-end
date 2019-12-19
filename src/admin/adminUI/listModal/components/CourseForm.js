import React from "react";

import CourseRow from "./CourseRow";

import "../styles/listModel.scss";

function CourseForm(props) {
  const { courses } = props;
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
        courses.map(course => (
          <CourseRow
            key={course._id}
            code={course._id}
            name={course.courseName}
            date={course.coursePeriod}
            tutor={course.tutorId.length}
            student={course.studentId.length}
            setShouldDisplay={props.setShouldDisplay}
            setAddFormType={props.setAddFormType}
            setCourseToUpdate={props.setCourseToUpdate}
          />
        ))
      ) : (
        <CourseRow
          key={courses._id}
          code={courses._id}
          name={courses.courseName}
          date={courses.coursePeriod}
          tutor={courses.tutorId}
          student={courses.studentId}
          setShouldDisplay={props.setShouldDisplay}
          setAddFormType={props.setAddFormType}
          setCourseToUpdate={props.setCourseToUpdate}
        />
      )}
    </section>
  );
}

export default CourseForm;
