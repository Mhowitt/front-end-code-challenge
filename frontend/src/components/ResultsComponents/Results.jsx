import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../config.js';
import LoadingComponent from '../LoadingComponent/LoadingComponent.jsx';
import IndividualResult from './IndividualResult.jsx';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      partners: null,
      brands: null
    };
  }

  componentDidMount() {
    const recommendedPartner = [];
    const shapeType = this.props.bodyType;
    if (this.props.gender === 'female') {
      Promise.all([
        axios.get(`${API_URL}/acme/bodies/female`),
        axios.get(`${API_URL}/delta/bodies/female`),
        axios.get(`${API_URL}`)
      ])
        .then(([acme, delta, brands]) => {
          const femalePartners = ['delta', 'bongo', 'acme'];
          const partners = [acme, delta, brands].slice(0, 2);
          const brandsArray = [acme, delta, brands].slice(2);
          partners.forEach((partner, idx) => {
            let shapeIdx = this.shapeFinder(partner, shapeType);
            let brandKey = femalePartners[idx];
            const dataBrand = Object.assign({}, { [brandKey]: partner });
            if (shapeIdx > -1) {
              recommendedPartner.push(dataBrand);
            }
          });
          this.setState({
            partners: recommendedPartner,
            isLoading: false,
            brands: brandsArray['0'].data
          });
        })
        .catch(err => console.log(err));
    } else {
      Promise.all([
        axios.get(`${API_URL}/delta/bodies/male`),
        axios.get(`${API_URL}/bongo/bodies/male`),
        axios.get(`${API_URL}/acme/bodies/male`),
        axios.get(`${API_URL}`)
      ])
        .then(([delta, bongo, acme, brands]) => {
          const malePartners = ['delta', 'bongo', 'acme'];
          const partners = [delta, bongo, acme, brands].slice(0, 3);
          const brandsArray = [delta, bongo, acme, brands].slice(3);
          partners.forEach((partner, idx) => {
            let shapeIdx = this.shapeFinder(partner, shapeType);
            let brandKey = malePartners[idx];
            const dataBrand = Object.assign({}, { [brandKey]: partner });
            if (shapeIdx > -1) {
              recommendedPartner.push(dataBrand);
            }
          });
          this.setState({
            partners: recommendedPartner,
            isLoading: false,
            brands: brandsArray['0'].data
          });
        })
        .catch(err => console.log(err));
    }
  }

  shapeFinder = (data, shape) => {
    let shapeIdx;
    const shapeArray = data.data.shapes;
    shapeArray.forEach((item, idx) => {
      if (item.name === shape);
      shapeIdx = idx;
    });

    return shapeIdx;
  };

  render() {
    const { brands } = this.state;
    return (
      <div>
        {this.state.isLoading ? (
          <LoadingComponent />
        ) : (
          <div>
            <h2>We recommend these brands for your unique amazingness</h2>
            <div className="card-container">
              <p className="profile">Your Profile</p>
              <div className="profile-results">
                <p>Gender: {this.props.gender}</p>
                <p>Body Type: {this.props.bodyType}</p>
                <p>Size: {this.props.bodySize}</p>
              </div>
              <div className="recommendation-results">
                {this.state.partners.map((partner, idx) => (
                  <IndividualResult
                    key={idx}
                    partner={partner}
                    brand={brands[idx]}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Results;
