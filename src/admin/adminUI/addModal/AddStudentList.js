import React, { useState, useEffect } from 'react';
import './styles/addModal.scss';
import '../listModal/styles/listModel.scss';
import { fetchStudents } from '../../../utils/api/student';
import AddStudentRow from './AddStudentRow';

const AddStudentList = props => {
    const [studentIdList, setstudentIdList] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchStudents().then(res => setUsers(res.data));
    }, []);

    return (
        <div className="add-modal">
            <form className="addCourse-container">
                <h4>Student List</h4>
                <section className="course-list">
                    <div className="row">
                        <span className="col-md-3">Name</span>
                        <span className="col-md-5">Email</span>
                        <span className="col-md-2">Phone</span>
                    </div>
                    <hr />
                    {users.map(user => (
                        <AddStudentRow
                            key={user.email}
                            name={user.firstName + ' ' + user.lastName}
                            email={user.email}
                            phone={user.mobile}
                            id={user._id}
                            studentIdList={studentIdList}
                            setstudentIdList={setstudentIdList}
                            addedStudents={props.addedStudents}
                            setAddedStudents={props.setAddedStudents}
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
                                    props.handleStudentIDs(studentIdList);
                                    props.setStudentNumber(studentIdList.length);
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

export default AddStudentList;