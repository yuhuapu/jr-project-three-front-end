import React, { useState, useEffect } from 'react';
import { updateTutor, fetchTutorById } from '../../../utils/api/tutor';
import '../addModal/styles/addModal.scss';
import SwitchAddForm from '../addModal/SwitchAddForm';

const EditTutor = props => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState('');
    const [tutorStates, setTutorStates] = useState({});

    useEffect(()=>{
        fetchTutorById(props.tutorToUpdate).then(res => setTutorStates(res.data));
    }, [props.tutorToUpdate]);

    const handleTutorInput = event => {
        const key = event.target.name;
        const value = event.target.value;
        setTutorStates({ ...tutorStates, [key]: value });
    };

    const handleCourseIDs = courseIDs => {
        setTutorStates({...tutorStates, courses: courseIDs});
    };
    
    const handleUpdate = event => {
        event.preventDefault();
        const tutor = tutorStates._id;
        updateTutor(tutor, tutorStates).then(() => {
            window.location.reload();
        });
    };

    return (
        <div className="add-modal">
            <form className="addCourse-container">
                <h4>Tutor Info</h4>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p>First Name</p>
                        <input 
                        name="firstName" 
                        type="text" 
                        className="input-boxs" 
                        onChange={handleTutorInput} 
                        value={tutorStates.firstName}
                        />
                    </div>

                    <div className="col-md-6">
                        <p>Last Name</p>
                        <input 
                        name="lastName" 
                        type="text" 
                        className="input-boxs" 
                        onChange={handleTutorInput} 
                        value={tutorStates.lastName}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <p>Gender</p>
                        <button className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setTutorStates({ ...tutorStates, gender: "Male" });
                            }}>
                            Male
                        </button>
                        <button className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setTutorStates({ ...tutorStates, gender: "Female" });
                            }}>
                            Female
                        </button>
                        <button className="edit-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setTutorStates({ ...tutorStates, gender: "Others" });
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
                        onChange={handleTutorInput} 
                        value={tutorStates.dateOfBirth}
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
                        onChange={handleTutorInput} 
                        value={tutorStates.mobile}
                        />
                    </div>

                    <div className="col-md-6">
                        <p>Email</p>
                        <input 
                        name="email" 
                        type="text" 
                        className="input-boxs" 
                        disabled={true}
                        onChange={handleTutorInput} 
                        value={tutorStates.email}
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
                         onChange={handleTutorInput} 
                         value={tutorStates.note}
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
                        onClick={(e)=> {
                            e.preventDefault(); 
                            setAddFormType('Course List');
                            setShouldDisplay(true);
                            }}>
                        Add
                        </button>
                        {/* <button className="edit-button">Edit</button> */}
                        <button className="edit-button">Delete</button>
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

export default EditTutor;