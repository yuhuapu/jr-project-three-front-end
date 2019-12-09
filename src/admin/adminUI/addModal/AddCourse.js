import React from 'react';
// import SwitchAddForm from "./SwitchAddForm";

import './styles/addModal.scss';

const AddCourse = props => {
    
    return (
        <div className="add-modal">
            <form className="addCouese-container">
                <h4>Course Info</h4>
                <div className="row">
                    <div className="col-md-3">
                        <p>Course Name</p>
                    </div>

                    <div className="col-md-6">
                        <input name="courseName" type="text" className="course-name" onChange={props.handleCourseInput} />
                    </div>

                    <div className="col-md-3">
                        <input name="code" type="text" className="course-code" placeholder="Couese Code" onChange={props.handleCourseInput} />
                    </div>
                </div>

                {/* Date input is not perfect, type is text at the moment, need to be improved */}
                <div className="row">
                    <div className="col-md-3">
                        <p>Course Period</p>
                    </div>
                    <div className="col-md-4">
                        <input 
                        name="startDate" type="text" placeholder="Day/Month/Year" className="course-period" onFocus={(e) => e.target.type = 'date'} onChange={props.handleCourseInput} />
                    </div>
                    <div className="col-md-1">
                        <span> - </span>
                    </div>
                    <div className="col-md-4">
                        <input name="endDate" type="text" placeholder="Day/Month/Year" className="course-period" onFocus={(e) => e.target.type = 'date'} onChange={props.handleCourseInput} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <p>Course Description</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <textarea name="description" className="description-box" onChange={props.handleCourseInput}/>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-md-3">
                        <p>Tutor</p>
                    </div>
                    <div className="col-md-7" />
                    <div className="col-md-2">
                        <p>Total:</p>
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

                <hr className="middle-line" />

                <div className="row">
                    <div className="col-md-3">
                        <p>Student</p>
                    </div>
                    <div className="col-md-7" />
                    <div className="col-md-2">
                        <p>Total:</p>
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
                            <button onClick={props.handleCreate} className="submit-button" >Add</button>
                            <button onClick={(e)=>{e.preventDefault(); props.onCloseButtonClick(false)}} className="submit-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddCourse;