import React, { useState, useEffect } from "react";
import { fetchTutors } from "../../../../utils/api/tutor";


import Navigation from "../../../../UI/Navigation";
import DashMenu from "../../DashMenu";
import StudentTutorForm from "../../listModal/components/StudentTutorForm";
import PageNumber from "../../listModal/components/PageNumber";
import Footer from "../../../../UI/Footer";
import SearchBar from "./SearchBar";
import { ButtonText } from "../../menuButton/ButtonText";
import SwitchAddForm from "../../addModal/SwitchAddForm";

const AdminTutorSearch = () => {
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const [addFormType, setAddFormType] = useState("");
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState([]);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchTutors().then(res => setUsers(res.data));
    setSearchName("Tutor");
  }, []);

  return (
    <div className="row">
      <div className="col-md-2" />
      <div className="col-md-8">
        <Navigation />
        <DashMenu
          menuText={ButtonText.tutorText}
          styleText={ButtonText.styleText[1]}
          setShouldDisplay={setShouldDisplay}
          setAddFormType={setAddFormType}
        />
        <SearchBar
          setInput={setInput}
          input={input}
          shouldSearch={shouldSearch}
          setShouldSearch={setShouldSearch}
          setUsers={setUsers}
          searchName={searchName}
        />
        <StudentTutorForm
          users={users}
          shouldSearch={shouldSearch}
          searchName={searchName}
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
};

export default AdminTutorSearch;
