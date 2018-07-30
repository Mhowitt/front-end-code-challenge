import React from 'react';
import './LoadingComponent.css'

const LoadingComponent = props => {
  return (
    <div className="loading-container">
      <div className="loading"></div>
      <div id="loading-text">loading</div>
    </div>
  )
}

export default LoadingComponent;