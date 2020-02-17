import React from 'react';

import './item-dogs.css';

const ItemDogs = ({url}) => {
    return(
        <div className='child'>
            <img src={url} className="item-dogs"></img>
        </div>
    )
}

export default ItemDogs;