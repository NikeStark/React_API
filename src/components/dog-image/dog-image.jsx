import React from 'react';

import './dog-image.css';

const DogImage = ({url}) => {
    return(
            <img src={url} className="dog-images"></img>
    )
}

export default DogImage;