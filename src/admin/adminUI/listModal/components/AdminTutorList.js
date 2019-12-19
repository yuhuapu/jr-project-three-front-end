import React, { useState, useEffect } from "react";
import { fetchTutors } from "../../../../utils/api/tutor";

import AdminNav from '../../AdminNav';
import Footer from "../../../../UI/Footer";
import StudentTutorForm from "./StudentTutorForm";
import DashMenu from "../../DashMenu";
import PageNumber from "./PageNumber";
import SwitchAddForm from "../../addModal/SwitchAddForm";
import { ButtonText } from "../../menuButton/ButtonText";

const AdminTutorList = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [addFormType, setAddFormType] = useState("");
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchTutors().then(res => setUsers(res.data));
    setSearchName("Tutor");
  }, []);

  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8">
        <AdminNav />
        <DashMenu
          menuText={ButtonText.tutorText}
          styleText={ButtonText.styleText[1]}
          setShouldDisplay={setShouldDisplay}
          setAddFormType={setAddFormType}
        />
        <StudentTutorForm 
            users={users} 
            searchName={searchName} />
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
};

export default AdminTutorList;
