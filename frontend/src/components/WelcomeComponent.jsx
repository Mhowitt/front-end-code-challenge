import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeComponent = props => {
  return (
    <div>
      <h2>Your Perfect Clothing Brand</h2>
      <div className="card-container">
        <p> Here at RightFit we believe that fashion should be tailored to you rather than the other way around</p>
        <p>Take our quiz to find which of our brand are designed for you</p>
      <Link to="/profile"><button className="start-quiz">
      Let's find my perfect brand!
      </button></Link>
      </div>
    </div>
  )
}

export default WelcomeComponent;