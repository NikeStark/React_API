import React from 'react';
import ItemDogs from '../item-dogs/item-dogs.jsx';

import './dog-image.css';

const DogImage = ({dogImages}) => {
        const dogList = dogImages.map((dogUrl, id) => {
            return <ItemDogs key={id} url={dogUrl}/>
        })

    return(
        <div className='container'>
            {dogList}
        </div>
    )
}

export default DogImage;