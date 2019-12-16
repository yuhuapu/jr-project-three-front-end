import React, { useState } from 'react';
import { createTutor } from '../../../utils/api/tutor';
import './styles/addModal.scss';

const AddTutor = props => {
    const adminRestProps = props.adminRestProps;
    const [tutorStates, setTutorStates] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        mobile: '',
        note: '',
        courses: [],
    });

    const handleTutorInput = event => {
        const key = event.target.name;
        const value = event.target.value;
        setTutorStates({ ...tutorStates, [key]: value });
    };

    const handleCreate = event => {
        event.preventDefault();
        const student = { ...tutorStates };
        createTutor(student).then(() => {
            adminRestProps.history.push('/admin/dashboard/studentlist');
        });
    };

    return (
        <div className="add-modal">
            <form className="addCouese-container">
                <h4>Tutor Info</h4>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p>First Name</p>
                        <input name="firstName" type="text" className="input-boxs" onChange={handleTutorInput} />
                    </div>

                    <div className="col-md-6">
                        <p>Last Name</p>
                        <input name="lastName" type="text" className="input-boxs" onChange={handleTutorInput} />
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
                        <input name="DOB" type="text" placeholder="Day/Month/Year" className="input-boxs" onChange={handleTutorInput} />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-6">
                        <p>Mobile</p>
                        <input name="mobile" type="text" className="input-boxs" onChange={handleTutorInput} />
                    </div>

                    <div className="col-md-6">
                        <p>Email</p>
                        <input name="email" type="text" className="input-boxs" onChange={handleTutorInput} />
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
                        <textarea name="note" className="description-box" onChange={handleTutorInput} />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Courses</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8" />
                    <div className="col-md-4">
                        <button className="edit-button">Add</button>
                        <button className="edit-button">Edit</button>
                        <button className="edit-button">Delete</button>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md">
                        <div className="submit-button-container">
                            <button onClick={handleCreate} className="submit-button" >Add</button>
                            <button onClick={(e) => { e.preventDefault(); props.onCloseButtonClick(false) }} className="submit-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddTutor;