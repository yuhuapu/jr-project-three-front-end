import React from 'react';


import TutorStudentRow from './TutorStudentRow';

import '../styles/listModel.scss';

function StudentTutorForm(props) {

		return ( 			
			<section className="course-list">
				<div className="row course-form-title">
					<span className="col-md-3 course-title-name">{props.searchName} Name</span>
					<span className="col-md-5 course-title-date">Email</span>
					<span className="col-md-2 course-title-tutor">Phone</span>
				</div>  
				<hr className="line-top"/>
				{(!props.shouldSearch)?
					props.students.map (student => (
					<TutorStudentRow
						key = {student.email}
						name =  {student.firstName + student.lastName}
						email =	{student.email}
						phone = {student.mobile}
					/>))
					:
					<TutorStudentRow
					key = {props.students.email}
					name =  {props.students.firstName + props.students.lastName}
					email =	{props.students.email}
					phone = {props.students.mobile}
				/>
				
				}															  
			</section>
		);
}


export default StudentTutorForm;
