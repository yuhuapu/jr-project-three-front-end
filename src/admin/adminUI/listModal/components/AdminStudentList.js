import React, { useState } from 'react';
import Navigation from '../../../../UI/Navigation';
import Footer from '../../../../UI/Footer';
import StudentForm from './StudentForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import PoppUpModal from '../../../../UI/PopUpModal';
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminStudentList = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState("");
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText={ButtonText.studentText}
                        styleText={ButtonText.styleText[1]}
                        setShouldDisplay={setShouldDisplay}
                        setAddFormType={setAddFormType}
                    />
                    <StudentForm />
                    <PageNumber />
                    <Footer />
                </div>
                <div className="col-md-2" />
                <PoppUpModal shouldDisplay={shouldDisplay}>{SwitchAddForm(addFormType)}</PoppUpModal>
            </div>
        );
}

export default AdminStudentList;