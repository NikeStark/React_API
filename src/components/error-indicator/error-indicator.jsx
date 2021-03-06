import React from 'react';

import './error-indicator.css';
import icon from './pngwave.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} className="droid-dog"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids-dogs to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;