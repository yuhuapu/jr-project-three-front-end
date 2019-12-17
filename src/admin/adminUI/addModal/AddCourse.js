import React, { useState } from 'react';

import { createCourse } from '../../../utils/api/course';
import './styles/addModal.scss';
import SwitchAddForm from './SwitchAddForm';

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

    const [tutorNames, setTutorNames] = useState([]);
    const [studentNames, setStudentNames] = useState([]);

    const [tutorNumber, setTutorNumber] = useState(0);
    const [studentNumber, setStudentNumber] = useState(0);

    const handleCourseInput = event => {
        const key = event.target.name;
        const value = event.target.value;
        setCourseStates({...courseStates, [key]: value});
    };

    const handleTutorIDs = tutorIDs => {
        setCourseStates({...courseStates, tutorIDs: tutorIDs});
    };

    const handleStudentIDs = studentIDs => {
        setCourseStates({...courseStates, studentIDs: studentIDs});
    };

    const handleCreate = event => {
        event.preventDefault();
        const course = {...courseStates};
        createCourse(course).then(() => {
            adminRestProps.history.push('/admin/dashboard/courselist');
        });
    };

    const TutorName = () => {
        if (tutorNumber > 0) {
            return (tutorNames.map((name, i) => <button key={i} className="edit-button">{name}</button>));
        } else {
            return null;
        }
    };

    const StudentName = () => {
        if (studentNumber > 0) {
            return (studentNames.map((name, i) => <button key={i} className="edit-button">{name}</button>));
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
                        <input name="code" type="text" className="course-code" placeholder="Couese Code" onChange={handleCourseInput} />
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
                        <textarea name="description" className="description-box" onChange={handleCourseInput}/>
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
                    <TutorName />
                </div>
                
                <div className="row">
                    <div className="col-md-8" />
                    <div className="col-md-4">
                    <button 
                        className="edit-button" 
                        onClick={(e)=> {
                            e.preventDefault(); 
                            setAddFormType('Tutor List');
                            setShouldDisplay(true);
                            }}>
                        Add
                        </button>
                        <button className="edit-button">Edit</button>
                        <button className="edit-button">Delete</button>
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
                    <StudentName />
                </div>
                <div className="row">
                    <div className="col-md-8" />
                    <div className="col-md-4">
                        <button 
                        className="edit-button" 
                        onClick={(e)=> {
                            e.preventDefault(); 
                            setAddFormType('Student List');
                            setShouldDisplay(true);
                            }}>
                        Add
                        </button>
                        <button className="edit-button">Edit</button>
                        <button className="edit-button">Delete</button>
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
                            <button onClick={(e)=>{e.preventDefault(); props.onCloseButtonClick(false)}} className="submit-button">Cancel</button>
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
                tutorNames={tutorNames}
                setTutorNames={setTutorNames}
                studentNames={studentNames}
                setStudentNames={setStudentNames}
                setTutorNumber={setTutorNumber}
                setStudentNumber={setStudentNumber}
            />
        </div>
    );
}

export default AddCourse;