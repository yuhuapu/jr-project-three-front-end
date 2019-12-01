import React, { useState } from 'react';
import Navigation from '../../../../UI/Navigation';
import Footer from '../../../../UI/Footer';
import CourseForm from './CourseForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import PoppUpModal from '../../../../UI/PopUpModal';
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminCourseList = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState("");

        return (
            <div className="row main-container" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText={ButtonText.courseText}
                        styleText={ButtonText.styleText[1]}
                        setShouldDisplay={setShouldDisplay}
                        setAddFormType={setAddFormType}
                    />
                    <CourseForm />
                    <PageNumber />
                    <Footer />
                </div>
                <div className="col-md-2" />
                <PoppUpModal shouldDisplay={shouldDisplay}>{SwitchAddForm(addFormType)}</PoppUpModal>
            </div>
        );
}

export default AdminCourseList;