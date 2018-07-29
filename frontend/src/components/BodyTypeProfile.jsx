import React from 'react';

const BodyTypeProfile = props => {
  return (
    <div>
      <figure style={{width:'100px', height:'300px'}}>
        <img src={props.bodyType.pic} alt={'picture of' + props.bodyType.type + 'body type'}style={{width:'100px', height:'200px'}}/>
        <figcaption>{props.bodyType.description}</figcaption>
      </figure>
      <div>
        <button>Is this you?</button>
      </div>
    </div>
  )
}

export default BodyTypeProfile;