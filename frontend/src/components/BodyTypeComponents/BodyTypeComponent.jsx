import React from 'react';
import { Link } from 'react-router-dom';
import BodyTypeProfile from './BodyTypeProfile'
import ProgressBar from '../ProgressBar/ProgressBar.jsx'

const BodyTypeComponent = props => {
  return (
    <div>
      <h2>Now tell us what your body type is!</h2>
      <ProgressBar question={props.question}/>
      <div className="card-container">
        <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
          {/* {props.bodyTypes} */}
          {props.bodyTypes.map((bodyType) => <BodyTypeProfile key={bodyType.type} bodyType={bodyType} handleChange={props.handleChange} name="bodyType" value={bodyType.type} />)}
          {/* {props.bodyTypes.map((bodyType) => <BodyTypeProfile bodyType={bodyType} onClick={props.handleChange} key={bodyType.type} value={bodyType.type}/>)} */}
        </div>
        <div className="next-button">
          <Link to="/profile/size"><div className="arrow"></div></Link>
        </div>
      </div>

    </div>
  )
}

export default BodyTypeComponent;