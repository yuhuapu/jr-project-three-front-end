import React from 'react';
import TutorForm from '../listModal/components/TutorForm';

import './styles/addModal.scss';

const TutorList = props => {
    return (
        <div className="add-modal" >
            <form className="addCouese-container">
                <h4>Course Info</h4>
                <TutorForm />
                <div className="row">
                    <div className="col-md">
                        <div className="submit-button-container">
                            <button onClick={(e) => { e.preventDefault();  props.onCloseButtonClick(false) }} className="submit-button" >Confirm</button>
                            <button onClick={(e) => { e.preventDefault(); props.onCloseButtonClick(false) }} className="submit-button">Cancel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TutorList;