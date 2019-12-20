import React, { useState, useEffect } from 'react';
import { updateCourse } from '../../../utils/api/course';
import { fetchCourseById } from '../../../utils/api/course';
import '../addModal/styles/addModal.scss';
import SwitchAddForm from '../addModal/SwitchAddForm';

const EditCourse = props => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState('');
    const [courseStates, setCourseStates] = useState({});

    // Fetech course info based on its id
    useEffect(()=>{
        fetchCourseById(props.courseToUpdate).then(res => setCourseStates(res.data));
    }, [props.courseToUpdate]);

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

    const handleUpdate = event => {
        event.preventDefault();
        const course = courseStates.code;
        updateCourse(course, courseStates).then(() => {
            window.location.reload();
        });
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
                        <input 
                        name="courseName" 
                        type="text" 
                        className="course-name" 
                        onChange={handleCourseInput} 
                        value={courseStates.courseName} 
                        />
                    </div>

                    <div className="col-md-3">
                        <input 
                        name="code" 
                        type="text" 
                        className="course-code" 
                        value={courseStates.code}
                        disabled={true}
                        />
                    </div>
                </div>

                {/* Date input is not perfect, type is text at the moment, need to be improved */}
                <div className="row">
                    <div className="col-md-3">
                        <p>Course Period</p>
                    </div>
                    <div className="col-md-4">
                        <input 
                        name="startDate" 
                        type="text" 
                        value={courseStates.startDate} 
                        className="course-period" 
                        onFocus={(e) => e.target.type = 'date'} 
                        onChange={handleCourseInput} 
                        />
                    </div>
                    <div className="col-md-1">
                        <span> - </span>
                    </div>
                    <div className="col-md-4">
                        <input 
                        name="endDate" 
                        type="text" 
                        value={courseStates.endDate}
                        className="course-period" 
                        onFocus={(e) => e.target.type = 'date'} 
                        onChange={handleCourseInput} 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <p>Course Description</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <textarea 
                        name="description" 
                        className="description-box" 
                        onChange={handleCourseInput}
                        value={courseStates.description}
                        />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Tutor</p>
                    </div>
                    <div className="col-md-7" />
                    <div className="col-md-2">
                        <p>Total:  </p>
                    </div>
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
                        <p>Total: </p>
                    </div>
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
                            <button onClick={handleUpdate} className="submit-button" >Update</button>
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

            />
        </div>
    );
}

export default EditCourse;