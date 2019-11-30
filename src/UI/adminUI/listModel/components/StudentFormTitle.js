import React from 'react';

import '../styles/listModel.scss';

function StudentFormTitle() {
	return (
		<div className="row course-form-title">
			<span className="col-md-3 course-title-name">Student Name</span>
			<span className="col-md-5 course-title-date">Email</span>
			<span className="col-md-2 course-title-tutor">Phone</span>

		</div>
	);
}

export default StudentFormTitle;
