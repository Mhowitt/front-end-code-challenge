import React from 'react';
import { Link } from 'react-router-dom';
import './Size.css';

const Size = props => {
  return (
    <div>
      <h2>Now tell us what your body type is!</h2>
      <div className="card-container">
        <div className="size-container">
          <Link to="/results">
            <button
              className="size-button"
              onClick={props.handleClick}
              value="petite"
            >
              Petite
            </button>
          </Link>
          <Link to="/results">
            <button
              className="size-button"
              onClick={props.handleClick}
              value="average"
            >
              Average
            </button>
          </Link>
          <Link to="/results">
            <button
              className="size-button"
              onClick={props.handleClick}
              value="tall"
            >
              Tall
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Size;
