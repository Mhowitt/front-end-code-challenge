import React from 'react';
import { Link } from 'react-router-dom';

const NameComponent = props => {
  return (
    <div>
      <h1>Let's Learn a bit more about you!</h1>
      <label htmlFor="firstName">First Name: </label>
      <input type="text" name="firstName" onChange={props.handleChange} value={props.firstName}/>
      <label htmlFor="lastName">last Name: </label>
      <input type="text" name="lastName" onChange={props.handleChange} value={props.lastName}/>
      <button><Link to="/profile/gender"> Next</Link></button>

    </div>
  )
}

export default NameComponent;