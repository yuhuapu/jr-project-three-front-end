import React, { useState, useEffect } from 'react';
import './styles/addModal.scss';
import '../listModal/styles/listModel.scss';
import { fetchTutors } from '../../../utils/api/tutor';
import AddTutorRow from './AddTutorRow';

const AddTutorList = props => {
    const [tutorIdList, setTutorIdList] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchTutors().then(res => setUsers(res.data));
    }, []);

    return (
        <div className="add-modal">
            <form className="addCouese-container">
                <h4>Tutor List</h4>
                <section className="course-list">
                    <div className="row">
                        <span className="col-md-3">Name</span>
                        <span className="col-md-5">Email</span>
                        <span className="col-md-2">Phone</span>
                    </div>
                    <hr />
                    {users.map(user => (
                        <AddTutorRow
                            key={user.email}
                            name={user.firstName + ' ' + user.lastName}
                            email={user.email}
                            phone={user.mobile}
                            id={user._id}
                            tutorIdList={tutorIdList}
                            setTutorIdList={setTutorIdList}
                            addedTutors={props.addedTutors}
                            setAddedTutors={props.setAddedTutors}
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
                                    props.handleTutorIDs(tutorIdList);
                                    props.setTutorNumber(tutorIdList.length);
                                }}
                                className="submit-button">
                                Confirm
                                </button>
                            <button
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    props.onCloseButtonClick(false); 
                                }}
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

export default AddTutorList;