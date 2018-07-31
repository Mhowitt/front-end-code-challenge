import React from 'react';
import BodyTypeProfile from './BodyTypeProfile';
import './BodyTypeProfile.css';

const BodyType = props => {
  return (
    <div>
      <h2>Now tell us what your body type is!</h2>
      <div className="card-container">
        <div className="main-body-container">
          {props.bodyTypes.map(bodyType => (
            <BodyTypeProfile
              key={bodyType.type}
              bodyType={bodyType}
              handleClick={props.handleClick}
              name="bodyType"
              value={bodyType.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyType;
