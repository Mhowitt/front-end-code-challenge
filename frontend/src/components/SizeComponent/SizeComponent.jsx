import React from 'react';
import { Link } from 'react-router-dom';
import './SizeComponent.css';

const SizeComponent = props => {
  return (
    <div>
      <h2>Now tell us what your body type is!</h2>
      <div className="card-container">
        <div className="size-container">
          <Link to="/results">
            <button className="size-button" onClick={props.handleClick}>
              Petite
            </button>
          </Link>
          <Link to="/results">
            <button className="size-button" onClick={props.handleClick}>
              Average
            </button>
          </Link>
          <Link to="/results">
            <button className="size-button" onClick={props.handleClick}>
              Tall
            </button>
          </Link>
        </div>
        {/* <div>
          <Link to="/results">
            <button
              type="submit"
              className="start-quiz"
              onClick={props.handleClick}
            >
              Submit your results!
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SizeComponent;
