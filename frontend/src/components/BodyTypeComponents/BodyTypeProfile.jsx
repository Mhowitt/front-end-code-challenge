import React from 'react';
import { Link } from 'react-router-dom';
import './BodyTypeProfile.css';

const BodyTypeProfile = props => {
  return (
    <div>
      <figure>
        <img
          src={props.bodyType.pic}
          alt={'picture of' + props.bodyType.type + 'body type'}
        />
        <figcaption>{props.bodyType.description}</figcaption>
      </figure>
      <div>
        <Link to="/profile/size">
          <button
            onClick={props.handleClick}
            className="body-button"
            name="bodyType"
            value={props.value}
          >
            Is this you?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BodyTypeProfile;
