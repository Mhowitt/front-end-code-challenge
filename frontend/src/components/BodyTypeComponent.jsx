import React from 'react';
import { Link } from 'react-router-dom';
import BodyTypeProfile from './BodyTypeProfile'

const BodyTypeComponent = props => {
  return (
    <div>
      <h1>Now tell us what your body type is!</h1>
      <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
        {/* {props.bodyTypes} */}
        {props.bodyTypes.map((bodyType) => <BodyTypeProfile key={bodyType.type} bodyType={bodyType} handleChange={props.handleChange} name="bodyType" value={bodyType.type} />)}
        {/* {props.bodyTypes.map((bodyType) => <BodyTypeProfile bodyType={bodyType} onClick={props.handleChange} key={bodyType.type} value={bodyType.type}/>)} */}
      </div>
      <button><Link to="/profile/size"> Next</Link></button>

    </div>
  )
}

export default BodyTypeComponent;