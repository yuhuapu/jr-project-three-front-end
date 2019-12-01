import React from 'react';

import NumberList from '../../../../UI/NumberList';

const numbers = ["<",1, 2, 3, 4, 5,">"];
function PageNumber() {
    return(
        <div className="row page-number">
            <NumberList numbers={numbers} />
        </div>
    );
}

export default PageNumber;