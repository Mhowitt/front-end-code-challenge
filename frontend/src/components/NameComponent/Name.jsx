import React from 'react';
import { Link } from 'react-router-dom';
import './Name.css';

const Name = props => {
  return (
    <div>
      <h2>Let's learn a bit more about you!</h2>
      <div className="card-container">
        <div className="login_field">
          <input
            type="text"
            name="firstName"
            className="login_input"
            onChange={props.handleChange}
            value={props.firstName}
            placeholder="What's your Name"
          />
        </div>
        {props.firstName.length === 0 ? (
          ''
        ) : (
          <div className="button-container">
            <Link to="/profile/gender">
              <button onClick={props.handleClick} className="name-button">
                {' '}
                Let's get started{' '}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Name;
