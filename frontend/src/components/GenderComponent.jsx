import React from 'react';
import { Link } from 'react-router-dom';

const GenderComponent = props => {
  return (
    <div>
      <h1>Hi {props.firstName}! It's great to have you!</h1>
      <h1>What's your gender?</h1>
      <button onClick={props.handleChange} name="gender" value='female'>Female</button>
      <button onClick={props.handleChange} name="gender" value='male'>Male</button>
      <div>
        <button><Link to="/profile/body-type"> Next</Link></button>
      </div>

    </div>
  )
}

export default GenderComponent;