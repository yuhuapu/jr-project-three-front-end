import React from 'react';

import '../styles/searchModel.scss';
import Search from '../../../../resource/img/search.png';


const SearchBar = () =>{
 
    return (
        <form className="search-container">
            <div className="col-8 hint">Key Word:</div>
        <div className="row">
            <input name="search" type="text" className="col-11 search-bar" />
            <img src={Search} className="search-icon" alt="search-icon" />

        </div>
        </form>
      
    );
  }


  export default SearchBar;