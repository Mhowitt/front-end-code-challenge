import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeComponent = props => {
  return (
    <div>
      <h1>Your Perfect Clothing Brand</h1>
      <button>
      <Link to="/profile">Let's find my perfect brand! </Link>
      </button>
    </div>
  )
}

export default WelcomeComponent;