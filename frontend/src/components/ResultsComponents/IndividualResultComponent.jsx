import React, { Component } from 'react';
import './IndividualResults.css'


class  IndividualResultComponent extends Component {
  render() {
    console.log("BRAND IS", this.props.brand)
    console.log("PARTNER IS", this.props.partner)
    return (
    <div>
      <div className="result-card">sup</div>
    </div>
    );
  }
}

export default IndividualResultComponent;
