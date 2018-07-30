import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css'

const HeaderComponent = props => {
  return (
    <div className="header-container" >
      <div className="title-header">RightFit</div>
      <div className="button-header">
      <Link to={'/'}><button className="start-quiz">Take our Quiz</button></Link>
      </div>

    </div>
  )
}

export default HeaderComponent;