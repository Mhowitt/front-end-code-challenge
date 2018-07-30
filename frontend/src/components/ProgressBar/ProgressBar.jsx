import React from 'react';
import './ProgressBar.css'

const ProgressBar = props => {
return (
  <div className="progress-bar-container">
    <div className="progress-bar" style={{width: (props.question/4) * 100 + '%'}} />
  </div>
  )
}

export default ProgressBar;

