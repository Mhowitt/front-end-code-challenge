import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar.jsx'
import './GenderComponent.css'

const GenderComponent = props => {
  return (
    <div>
      <h2>Hi {props.firstName}! It's great to have you! What's your gender?</h2>
      <ProgressBar question={props.question}/>
      <div className="card-container">
        <div className="card">
          <div className="gender-container">
            <div className="gender-img female"></div>
            <button onClick={props.handleChange} name="gender" value='female' className="gender-button">
            <span className="text-button">I identify as a Female</span></button>
          </div>
          <div className="gender-container">
            <div className="gender-img male"></div>
            <button onClick={props.handleChange} name="gender" value='male' className="gender-button">
            <span className="text-button">I identify as a Male</span></button>
          </div>
        </div>
        <div className="next-button">

          <Link to="/profile/body-type"><div className="arrow"></div></Link>
        </div>
        </div>
      </div>
  )
}

export default GenderComponent;