import React from 'react';
import './ProgressBar.css'

const ProgressBar = props => {
return (
  <div className="progress-bar-container">
    <div className="progress-bar" style={{width: (props.question/4) * 100 + '%', transition: 'width 0.5s linear'}} />
  </div>
  )
}

export default ProgressBar;

