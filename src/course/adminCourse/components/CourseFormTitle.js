import React from 'react';

import '../../styles/adminCourseStyle.scss';

function CourseFormTitle() {
	return (
		<div className="row course-form-title">
			<span className="col-md-3 course-title-name">Course Name</span>
			<span className="col-md-5 course-title-date">Date</span>
			<span className="col-md-1 course-title-tutor">Tutor</span>
			<span className="col-md-1 course-title-student">Student</span>

		</div>
	);
}

export default CourseFormTitle;
