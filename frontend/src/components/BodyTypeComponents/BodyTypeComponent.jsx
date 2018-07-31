import React from 'react';
import BodyTypeProfile from './BodyTypeProfile';
import './BodyTypeProfile.css';

const BodyTypeComponent = props => {
  return (
    <div>
      <h2>Now tell us what your body type is!</h2>
      <div className="card-container">
        <div className="main-body-container">
          {props.bodyTypes.map(bodyType => (
            <BodyTypeProfile
              key={bodyType.type}
              bodyType={bodyType}
              handleChange={props.handleChange}
              name="bodyType"
              value={bodyType.type}
            />
          ))}
        </div>
        {/* <div className="next-button">
          <Link to="/profile/size"><div className="arrow" onClick={props.handleClick}></div></Link>
        </div> */}
      </div>
    </div>
  );
};

export default BodyTypeComponent;
