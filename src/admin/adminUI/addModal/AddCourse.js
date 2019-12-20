import React, { useState } from 'react';

import { createCourse } from '../../../utils/api/course';
import './styles/addModal.scss';
import SwitchAddForm from './SwitchAddForm';
import AddFormsButton from './addFormsButton';

const AddCourse = props => {
    const adminRestProps = props.adminRestProps;
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState('');
    const [courseStates, setCourseStates] = useState({
        code: '',
        courseName: '',
        startDate: '',
        endDate: '',
        description: '',
        studentIDs: [],
        tutorIDs: [],
    });

    const [addedTutors, setAddedTutors] = useState([]);
    const [tutorsToDelete, setTutorToDelete] = useState([]);
    const [tutorNumber, setTutorNumber] = useState(0);
    const handleTutorIDs = tutorIDs => {
        setCourseStates({ ...courseStates, tutorIDs: tutorIDs });
    };

    // BUG HERE!!!!!!!!
    const deleteAddedTutor = () => {
        const existedTutorIDs = new Set(courseStates.tutorIDs);
        const tutorIDsToDelete = new Set(tutorsToDelete);
        const newTutorIDs = new Set([...existedTutorIDs].filter(x => !tutorIDsToDelete.has(x)));
        setTutorNumber(newTutorIDs.size);
        const newStateTutorIDs = Array.from(newTutorIDs);
        setCourseStates({ ...courseStates, tutorIDs: newStateTutorIDs });
        newStateTutorIDs.forEach(element => {
            const targetAddedTutor = addedTutors.find(addedTutor=> addedTutor.tutorID === element)
            const addedTutorIndex = addedTutors.findIndex(addedTutor=> addedTutor === targetAddedTutor)
            setAddedTutors(addedTutors.splice(addedTutorIndex,1));
        });
        console.log(addedTutors);
        setTutorToDelete(tutorsToDelete.splice(0, -1));
    };

    const [addedStudents, setAddedStudents] = useState([]);
    const [studentsToDelete, setStudentToDelete] = useState([]);
    const [studentNumber, setStudentNumber] = useState(0);

    const handleStudentIDs = studentIDs => {
        setCourseStates({ ...courseStates, studentIDs: studentIDs });
    };

    const deleteAddedStudent = studentsToDelete => {
        let existedStudentIDs = new Set(courseStates.studentIDs);
        let studentIDsToDelete = new Set(studentsToDelete);
        let newStudentIDs = new Set([...existedStudentIDs].filter(x => !studentIDsToDelete.has(x)));
        setStudentNumber(newStudentIDs.size);

        let newStateStudentIDs = Array.from(newStudentIDs);
        setCourseStates({ ...courseStates, studentIDs: newStateStudentIDs });

        newStateStudentIDs.forEach(newStudentId => {
            const updatedAddedStudents = addedStudents.filter(x => x.studentID === newStudentId);
            setAddedStudents(updatedAddedStudents);
        });

        setStudentToDelete([]);
    };


    const handleCourseInput = event => {
        const key = event.target.name;
        const value = event.target.value;
        setCourseStates({ ...courseStates, [key]: value });
    };

    const handleCreate = event => {
        event.preventDefault();
        const course = { ...courseStates };
        createCourse(course).then(() => {
            adminRestProps.history.push('/admin/dashboard/courselist');
        });
    };

    // Need to be updated
    const AddedTutor = () => {
        if (tutorNumber > 0) {
            return (addedTutors.map(addedTutor => (
                <AddFormsButton
                    key={addedTutor.tutorID}
                    setToDelete={setTutorToDelete}
                    deleteTargetArray={tutorsToDelete}
                    addedID={addedTutor.tutorID}
                >
                    {addedTutor.name}
                </AddFormsButton>)));
        } else {
            return null;
        }
    };

    // Need to be updated
    const AddedStudent = () => {
        if (studentNumber > 0) {
            return (addedStudents.map(addedStudent =>(
                <AddFormsButton
                    key={addedStudent.studentID}
                    setToDelete={setStudentToDelete}
                    deleteTargetArray={studentsToDelete}
                    addedID={addedStudent.studentID}
                >
                    {addedStudent.name}
                </AddFormsButton>)));
        } else {
            return null;
        }
    };

    return (
        <div className="add-modal">
            <form className="addCourse-container">
                <h4>Course Info</h4>
                <div className="row">
                    <div className="col-md-3">
                        <p>Course Name</p>
                    </div>

                    <div className="col-md-6">
                        <input name="courseName" type="text" className="course-name" onChange={handleCourseInput} />
                    </div>

                    <div className="col-md-3">
                        <input name="code" type="text" className="course-code" placeholder="Course Code" onChange={handleCourseInput} />
                    </div>
                </div>

                {/* Date input is not perfect, type is text at the moment, need to be improved */}
                <div className="row">
                    <div className="col-md-3">
                        <p>Course Period</p>
                    </div>
                    <div className="col-md-4">
                        <input
                            name="startDate" type="text" placeholder="Day/Month/Year" className="course-period" onFocus={(e) => e.target.type = 'date'} onChange={handleCourseInput} />
                    </div>
                    <div className="col-md-1">
                        <span> - </span>
                    </div>
                    <div className="col-md-4">
                        <input name="endDate" type="text" placeholder="Day/Month/Year" className="course-period" onFocus={(e) => e.target.type = 'date'} onChange={handleCourseInput} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <p>Course Description</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <textarea name="description" className="description-box" onChange={handleCourseInput} />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Tutor</p>
                    </div>
                    <div className="col-md-7" />
                    <div className="col-md-2">
                        <p>Total: {tutorNumber} </p>
                    </div>
                </div>

                <div className="row">
                    <AddedTutor />
                </div>

                <div className="row">
                    <div className="col-md-9" />
                    <div className="col-md-3">
                        <button
                            className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setAddFormType('Tutor List');
                                setShouldDisplay(true);
                            }}>
                            Add
                        </button>
                        {/* <button className="edit-button">Edit</button> */}
                        <button
                            className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                if (tutorsToDelete.length > 0) {
                                    deleteAddedTutor();
                                }
                            }}>
                            Delete
                    </button>
                    </div>
                </div>

                <hr className="middle-line" />

                <div className="row">
                    <div className="col-md-3">
                        <p>Student</p>
                    </div>
                    <div className="col-md-7" />
                    <div className="col-md-2">
                        <p>Total: {studentNumber} </p>
                    </div>
                </div>
                <div className="row">
                    <AddedStudent />
                </div>
                <div className="row">
                    <div className="col-md-9" />
                    <div className="col-md-3">
                        <button
                            className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setAddFormType('Student List');
                                setShouldDisplay(true);
                            }}>
                            Add
                        </button>
                        {/* <button className="edit-button">Edit</button> */}
                        <button
                            className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                if (studentsToDelete.length > 0) {
                                    deleteAddedStudent(studentsToDelete);
                                }
                            }}>
                            Delete
                    </button>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Cover Picture</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <button className="edit-button">upload</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md">
                        <div className="submit-button-container">
                            <button onClick={handleCreate} className="submit-button" >Add</button>
                            <button onClick={(e) => { e.preventDefault(); props.onCloseButtonClick(false) }} className="submit-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>

            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
                handleTutorIDs={handleTutorIDs}
                handleStudentIDs={handleStudentIDs}
                addedTutors={addedTutors}
                setAddedTutors={setAddedTutors}
                addedStudents={addedStudents}
                setAddedStudents={setAddedStudents}
                setTutorNumber={setTutorNumber}
                setStudentNumber={setStudentNumber}
            />
        </div>
    );
}

export default AddCourse;