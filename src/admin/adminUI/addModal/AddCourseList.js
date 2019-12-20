import React, { useState, useEffect } from 'react';
import './styles/addModal.scss';
import '../listModal/styles/listModel.scss';
import { fetchCourses } from '../../../utils/api/course';
import AddCourseRow from './AddCourseRow';

const AddCourseList = props => {
    const [courseIdList, setcourseIdList] = useState([]);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetchCourses().then(res => setCourses(res.data));
    }, []);

    return (
        <div className="add-modal">
            <form className="addCourse-container">
                <h4>Course List</h4>
                <section className="course-list">
                    <div className="row">
                        <span className="col-md-3">Course Name</span>
                        <span className="col-md-7">Course Period</span>
                    </div>
                    <hr />
                    {courses.map(course => (
                        <AddCourseRow
                            key={course.code}
                            code={course.code}
                            courseName={course.courseName}
                            startDate={course.startDate}
                            endDate={course.endDate}
                            courseIdList={courseIdList}
                            setcourseIdList={setcourseIdList}
                            courseNames={props.courseNames}
                            setCourseNames={props.setCourseNames}
                        />
                    ))}
                </section>
                <div className="row">
                    <div className="col-md">
                        <div className="submit-button-container">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    props.onCloseButtonClick(false);
                                    props.handleCourseIDs(courseIdList);
                                    props.setCourseNumber(courseIdList.length);
                                }}
                                className="submit-button">
                                Confirm
                                </button>
                            <button
                                onClick={(e) => { e.preventDefault(); props.onCloseButtonClick(false) }}
                                className="submit-button">
                                Cancel
                                </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCourseList;