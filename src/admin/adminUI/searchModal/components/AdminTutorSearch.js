import React, { useState } from 'react';
import Navigation from '../../../../UI/Navigation';
import DashMenu from '../../DashMenu';
import TutorForm from '../../listModal/components/TutorForm';
import PageNumber from '../../listModal/components/PageNumber';
import Footer from '../../../../UI/Footer';
import SearchBar from './SearchBar';
import { ButtonText } from "../../menuButton/ButtonText";
import SwitchAddForm from "../../addModal/SwitchAddForm";

const AdminTutorSearch = () => {
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
                <SearchBar />
                <TutorForm />
                <PageNumber />
                <Footer />
            </div>
            <div className="col-md-2" />
            <SwitchAddForm
                shouldDisplay={shouldDisplay}
                onCloseButtonClick={setShouldDisplay}
                addFormType={addFormType}
            />
        </div>
    );
}

export default AdminTutorSearch;