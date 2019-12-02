import React from 'react';

import './styles/addModal.scss';

const AddTutor = props => {
    return (
        <div className="add-modal">
            <form className="addCouese-container">
                <h4>Student Info</h4>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p>First Name</p>
                        <input name="firstName" type="text" className="input-boxs" />
                    </div>

                    <div className="col-md-6">
                        <p>Last Name</p>
                        <input name="lastName" type="text" className="input-boxs" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <p>Gender</p>
                        <button className="edit-button">Male</button>
                        <button className="edit-button">Female</button>
                        <button className="edit-button">Others</button>
                    </div>

                    <div className="col-md-6">
                        <p>DOB</p>
                        <input name="DOB" type="text" placeholder="Day/Month/Year" className="input-boxs" />
                    </div>
                </div>

                <hr />

                <div className="row">
                <div className="col-md-6">
                        <p>Mobile</p>
                        <input name="mobile" type="text" className="input-boxs" />
                    </div>

                    <div className="col-md-6">
                        <p>Email</p>
                        <input name="email" type="text" className="input-boxs" />
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
                        <textarea name="courseDescription" className="description-box" />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Course List</p>
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
                            <button className="submit-button">Add</button>
                            <button onClick={(e)=>{e.preventDefault(); props.onCloseButtonClick(false)}} className="submit-button">Cancle</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddTutor;