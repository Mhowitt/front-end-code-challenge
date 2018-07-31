import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ProgressBar from './ProgressBar/ProgressBar'

const SizeComponent = props => {
  return (
    <div>
      <h2>Now tell us what your body type is!</h2>
      {/* <ProgressBar question={props.question}/> */}
      <div className="card-container">
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-around'}}>
          <div>Petite</div>
          <div>Average</div>
          <div>Tall</div>
        </div>
        <div>
          <Link to="/results"><button type="submit" className="start-quiz" onClick={props.handleClick} >Submit your results!</button></Link>
        </div>
      </div>
    </div>
  )
}


export default SizeComponent;