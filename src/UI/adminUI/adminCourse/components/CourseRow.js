import React from 'react';

import '../styles/adminCourseStyle.scss';

function CourseRow(props) {
	return (
		<div className="row course-list-row">
        
			<span className="col-md-3 course-list-name">{props.name}</span>
			<span className="col-md-5 course-list-date">{props.date}</span>
			<span className="col-md-1 course-list-tutor">{props.tutor}</span>
			<span className="col-md-1 course-list-student">{props.student}</span>
            <button className="edit col-md-1">Edit</button>
			<button className="delete col-md-1">Delete</button>
		</div>
	);
}

export default CourseRow;
