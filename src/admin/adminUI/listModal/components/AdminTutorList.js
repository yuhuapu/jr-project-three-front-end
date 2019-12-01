import React, { useState } from 'react';
import Navigation from '../../../../UI/Navigation';
import Footer from '../../../../UI/Footer';
import TutorForm from './TutorForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import PoppUpModal from '../../../../UI/PopUpModal';
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminTutorList = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState("");
        return (
            <div className="row" >
                <div className="col-md-2" />
                <div className="col-md-8" >
                    <Navigation />
                    <DashMenu 
                        menuText={ButtonText.tutorText}
                        styleText={ButtonText.styleText[1]}
                        setShouldDisplay={setShouldDisplay}
                        setAddFormType={setAddFormType}
                    />
                    <TutorForm />
                    <PageNumber />
                    <Footer />
                </div>
                <div className="col-md-2" />
                <PoppUpModal shouldDisplay={shouldDisplay}>{SwitchAddForm(addFormType)}</PoppUpModal>
            </div>
        );
}

export default AdminTutorList;