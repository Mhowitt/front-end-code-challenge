import React from 'react';
import './BodyTypeProfile.css'

const BodyTypeProfile = props => {
  return (
    <div>
      <figure style={{width:'10vw', height:'300px'}}>
        <img src={props.bodyType.pic} alt={'picture of' + props.bodyType.type + 'body type'}style={{width:'100px', height:'200px'}}/>
        <figcaption>{props.bodyType.description}</figcaption>
      </figure>
      <div>
        <button onClick={props.handleChange} className="body-button" name="bodyType" value={props.bodyType.type} >Is this you?</button>
      </div>
    </div>
  )
}

export default BodyTypeProfile;