import React from 'react';

import '../styles/adminCourseStyle.scss';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li className="pagination-li" key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul className="pagination">{listItems}</ul>
    );
  }


  export default NumberList;