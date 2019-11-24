import React from 'react';

import '../../styles/addModal.scss';

const addCourse = () => {
    return (
        <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
                <form className="addModal-container">
                    <h4>Course Info</h4>
                    <div className="row">
                        <div className="col-md-3">
                            <p>Course Name</p>
                        </div>
                        <div className="col-md-9">
                            <input name="courseName" type="text" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-3">
                            <p>Course Period</p>
                        </div>
                        <div className="col-md-4">
                            <input name="startDate" type="date" />
                        </div>
                        <div className="col-md-1">
                            <span> - </span>
                        </div>
                        <div className="col-md-4">
                            <input name="endDate" type="date" />
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-3">
                        <p>Course Description</p>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-12">
                            <textarea name = "courseDescription" />
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-2">
                            <p>Tutor</p>
                        </div>
                        <div className = "col-md-8" />
                        <div className = "col-md-2">
                            <p>Total:</p>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-8" />
                         <div className = "col-md-4">
                            <button>Add</button>
                            <button>Edit</button>
                            <button>Delete</button>
                         </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-2">
                            <p>Student</p>
                        </div>
                        <div className = "col-md-8" />
                        <div className = "col-md-2">
                            <p>Total:</p>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-8" />
                         <div className = "col-md-4">
                            <button>Add</button>
                            <button>Edit</button>
                            <button>Delete</button>
                         </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-3">
                        <p>Cover Picture</p>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md-3">
                            <button>upload</button>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-md">
                            <button>Add</button>
                            <button>Cancle</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-md-2"></div>
        </div>
    );
}

export default addCourse;