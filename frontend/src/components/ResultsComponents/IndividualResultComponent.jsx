import React, { Component } from 'react';
import './IndividualResults.css';

class IndividualResultComponent extends Component {
  render() {
    console.log('BRAND IS', this.props.brand);
    console.log('PARTNER IS', this.props.partner);
    return (
      <div className="result-card">
        <div>{this.props.brand.name}</div>
        <div className="brand-logo">
          <img src={this.props.brand.logo.url} alt="" />
        </div>
        <div>
          <a href={this.props.brand.web}>{this.props.brand.web}</a>
        </div>
      </div>
    );
  }
}

export default IndividualResultComponent;
