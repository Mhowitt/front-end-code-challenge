import React from 'react';
import { Link } from 'react-router-dom';
import'./NameComponent.css'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'

const NameComponent = props => {
  return (
    <div>
      <h2>Let's Learn a bit more about you!</h2>
      <ProgressBar question={props.question}/>
      <div className="card-container" >
        <div className="login_field">
        <input type="text" name="firstName" className="login_input" onChange={props.handleChange} value={props.firstName} placeholder="What's your Name" />
        </div>
        <div className="next-button">
          <Link to="/profile/gender"><div className="arrow"></div></Link>
        </div>
      </div>
    </div>
  )
}

export default NameComponent;