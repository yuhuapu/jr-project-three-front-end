import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import { deleteCourseById } from "../../../../utils/api/course";
import CourseRow from "./CourseRow";

import "../styles/listModel.scss";

const CourseForm = props => {
  const [deleteName, setDeleteName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const { courses } = props;

  useEffect(() => {
    if (isDeleting) {
      if (window.confirm("Are  you sure?")) {
        deleteCourseById(deleteName).then(() => {
          window.location.reload();
        })
      }}
  },[isDeleting,deleteName]);

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
            deleteName={course._id}
            startDate={course.startDate.slice(0,10)}
            endDate={course.endDate.slice(0,10)}
            tutor={course.tutorId.length}
            student={course.studentId.length}
            setShouldDisplay={props.setShouldDisplay}
            setAddFormType={props.setAddFormType}
            setCourseToUpdate={props.setCourseToUpdate}
            setDeleteName={setDeleteName}
            isDeleting={isDeleting}
            setIsDeleting={setIsDeleting}
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
          deleteName={courses._id}
          setDeleteName={setDeleteName}
          isDeleting={isDeleting}
          setIsDeleting={setIsDeleting}
        />
      )}
    </section>
  );
};

export default withRouter(CourseForm);
