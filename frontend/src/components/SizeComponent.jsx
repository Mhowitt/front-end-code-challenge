import React from 'react';
import { Link } from 'react-router-dom';

const SizeComponent = props => {
  return (
    <div>
      <h1>Now tell us what your body type is!</h1>
      <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <div>Petite</div>
        <div>Average</div>
        <div>Tall</div>
      </div>
      <button type="submit">Submit your results!</button>

    </div>
  )
}

export default SizeComponent;