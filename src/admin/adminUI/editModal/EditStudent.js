import React, { useState, useEffect } from 'react';
import { updateStudent, fetchStudentById } from '../../../utils/api/student';
import '../addModal/styles/addModal.scss';
import SwitchAddForm from '../addModal/SwitchAddForm';

const EditStudent = props => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState('');
    const [studentStates, setStudentStates] = useState({});

    useEffect(()=>{
        fetchStudentById(props.studentToUpdate).then(res => setStudentStates(res.data));
    }, [props.studentToUpdate]);

    const handleStudentInput = event => {
        const key = event.target.name;
        const value = event.target.value;
        setStudentStates({ ...studentStates, [key]: value });
    };

    const handleCourseIDs = courseIDs => {
        setStudentStates({ ...studentStates, courses: courseIDs });
    };

    const handleUpdate = event => {
        event.preventDefault();
        const student = studentStates._id;
        updateStudent(student, studentStates).then(() => {
            window.location.reload();
        });
    };

    return (
        <div className="add-modal">
            <form className="addCourse-container">
                <h4>Student Info</h4>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p>First Name</p>
                        <input 
                        name="firstName" 
                        type="text" 
                        className="input-boxs" 
                        onChange={handleStudentInput} 
                        value={studentStates.firstName}
                        />
                    </div>

                    <div className="col-md-6">
                        <p>Last Name</p>
                        <input 
                        name="lastName" 
                        type="text" 
                        className="input-boxs" 
                        onChange={handleStudentInput} 
                        value={studentStates.lastName}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <p>Gender</p>
                        <button className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setStudentStates({ ...studentStates, gender: "Male" })
                            }}>
                            Male
                        </button>
                        <button className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setStudentStates({ ...studentStates, gender: "Female" })
                            }}>
                            Female
                        </button>
                        <button className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setStudentStates({ ...studentStates, gender: "Others" })
                            }}>
                            Others
                        </button>
                    </div>

                    <div className="col-md-6">
                        <p>DOB</p>
                        <input 
                        name="dateOfBirth" 
                        type="text" 
                        placeholder="Day/Month/Year" 
                        className="input-boxs" 
                        onFocus={(e) => e.target.type = 'date'} 
                        onChange={handleStudentInput} 
                        value={studentStates.dateOfBirth}
                        />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-6">
                        <p>Mobile</p>
                        <input 
                        name="mobile" 
                        type="text" 
                        className="input-boxs" 
                        onChange={handleStudentInput} 
                        value={studentStates.mobile}
                        />
                    </div>

                    <div className="col-md-6">
                        <p>Email</p>
                        <input 
                        name="email" 
                        type="text" 
                        className="input-boxs" 
                        onChange={handleStudentInput} 
                        disabled={true}
                        value={studentStates.email}
                        />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Note</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <textarea 
                        name="note" 
                        className="description-box" 
                        onChange={handleStudentInput} 
                        value={studentStates.note}
                        />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Courses</p>
                    </div>
                    <div className="col-md-7" />
                    <div className="col-md-2">
                        <p>Total: </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8" />
                    <div className="col-md-4">
                        <button
                            className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setAddFormType('Course List');
                                setShouldDisplay(true);
                            }}>
                            Add
                        </button>
                        {/* <button className="edit-button">Edit</button> */}
                        <button
                            className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                            }}>
                            Delete
                    </button>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md">
                        <div className="submit-button-container">
                        <button onClick={handleUpdate} className="submit-button" >Update</button>
                            <button onClick={(e) => { e.preventDefault(); props.onCloseButtonClick(false) }} className="submit-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
                handleCourseIDs={handleCourseIDs}
            />
        </div>
    );
}

export default EditStudent;