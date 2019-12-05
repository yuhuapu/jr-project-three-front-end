import React, { useState,useEffect } from 'react';
import {getInfo} from '../../../../utils/axios.js';


import Navigation from '../../../../UI/Navigation';
import Footer from '../../../../UI/Footer';
import StudentTutorForm from './StudentTutorForm';
import DashMenu from '../../DashMenu';
import PageNumber from './PageNumber';
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminTutorList = () => {
    const [shouldDisplay, setShouldDisplay] = useState(false);
    const [addFormType, setAddFormType] = useState("");
    const [students, setStudents] = useState([]);
    const [searchName,setSearchName] = useState("");


	useEffect(()=> {
		getInfo('tutors')
            .then(res => setStudents(res.data));
            setSearchName("Tutor");
    },[]);

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
                <StudentTutorForm 
                    students={students}
                    searchName = {searchName}
                />
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

export default AdminTutorList;