import React from "react";

import { fetchTutorsByName } from "../../../../utils/api/tutor";
import { fetchStudentsByName } from "../../../../utils/api/student";
import { fetchCourseById } from "../../../../utils/api/course";

import "../styles/searchModel.scss";
import Search from "../../../../resource/img/search.svg";

function SearchBar(props) {
  const { input,searchName } = props;

  return (
    <form className="search-container">
      <div className="col-8 hint">Key Word:</div>
      <div className="row">
        <input
          name="search"
          type="text"
          className="col-11 search-bar"
          value={input}
          onChange={event => props.setInput(event.target.value)}
        />
        <div
          onClick={() => {
            if (searchName === "Student") {
              fetchStudentsByName(`${input}`).then(res =>
                props.setUsers(res.data)
              );
            } else if (searchName === "Tutor") {
              fetchTutorsByName(`${input}`).then(res =>{
                props.setUsers(res.data);
              }
              );
            } else if (searchName === "Course") {
              fetchCourseById(`${input}`).then(res =>
                props.setCourses(res.data)
              );
            }
            props.setShouldSearch(true);

          }}
        >
          <img src={Search} className="search-icon" alt="search-icon" />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
