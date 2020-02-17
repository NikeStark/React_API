import React from 'react';

import './search-box.css';

const SearchBox = () => {
    return(
        <div className="container">
            <div className='child'>
                <input type="text" className="search" placeholder="Enter text for searching..."></input> 
            </div>
        </div>
    )
}

export default SearchBox;