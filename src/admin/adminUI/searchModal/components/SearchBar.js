import React from 'react';
import {getInfo} from '../../../../utils/axios.js';

import '../styles/searchModel.scss';
import Search from '../../../../resource/img/search.svg';


function SearchBar(props) {

    return (

        <form className="search-container">
            <div className="col-8 hint">Key Word:</div>
        <div className="row">
            <input 
                name="search" type="text" className="col-11 search-bar" 
                value={props.input} onChange={ event=> props.setInput(event.target.value)} 
            />
            <div
                onClick={() => {
                    getInfo(`${props.searchField}/${props.input}`)
                    .then(res => props.setStudents(res.data));
                    props.setShouldSearch(true);
               
            }}>
            <img src={Search} className="search-icon" alt="search-icon" />
			</div>
        </div>
        </form>
      
    );
  }


  export default SearchBar;