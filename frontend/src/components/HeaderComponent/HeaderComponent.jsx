import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css'

const HeaderComponent = props => {
  return (
    <div className="header-container" >
      <div className="title-header"><Link to={'/'}>RightFit</Link></div>
      {
        props.takingQuiz ?
        ''
      :
        <div className="button-header">
        <Link to={'/profile'}><button className="start-quiz" onClick={props.handleClick} >Take our Quiz</button></Link>
        </div>
      }
    </div>
  )
}

export default HeaderComponent;