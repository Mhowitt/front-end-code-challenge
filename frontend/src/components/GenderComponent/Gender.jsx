import React from 'react';
import { Link } from 'react-router-dom';
import './Gender.css';

const Gender = props => {
  return (
    <div>
      <h2>Hi {props.firstName}! It's great to have you! What's your gender?</h2>
      <div className="card-container">
        <div className="card">
          <div className="gender-container">
            <div className="gender-img female" />
            <Link to="/profile/body-type">
              <button
                onClick={props.handleClick}
                name="gender"
                value="female"
                className="gender-button"
              >
                I identify as a Female
              </button>
            </Link>
          </div>
          <div className="gender-container">
            <div className="gender-img male" />
            <Link to="/profile/body-type">
              <button
                onClick={props.handleClick}
                name="gender"
                value="male"
                className="gender-button"
              >
                I identify as a Male
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
