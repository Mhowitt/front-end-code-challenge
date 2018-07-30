import React, { Component } from 'react';
import axios from 'axios'
import { API_URL }from '../config.js'
import LoadingComponent from './LoadingComponent/LoadingComponent.jsx';

class ResultsComponent  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      partners: null,

     };
  }

componentDidMount() {
const recommendedPartner = [];
  if (this.props.gender === 'female') {
    axios
    .get(`${API_URL}/delta/bodies/female`)
    .then(data => {
      recommendedPartner.push(data.data)
    })
    axios
    .get(`${API_URL}/acme/bodies/female`)
    .then(data => {
      recommendedPartner.push(data.data);
      this.setState({
        partners: recommendedPartner,
        isLoading: false
      });
    })
    .catch(err => console.log(err));
  } else {
    axios
    .get(`${API_URL}/delta/bodies/male`)
    .then(data => {
      recommendedPartner.push(data.data)
    })
    axios
    .get(`${API_URL}/bongo/bodies/male`)
    .then(data => {
      recommendedPartner.push(data.data)
    })
    axios
    .get(`${API_URL}/acme/bodies/male`)
    .then(data => {
      recommendedPartner.push(data.data);
      this.setState({
        partners: recommendedPartner,
        isLoading: false
      });
    })
    .catch(err => {
      this.setState({
        loadingMessage: "",
        errorMessage: "Something went wrong, please try again!"
      });
    });
  }
}

// const listResults;

  render() {
    return (
      <div className="card-container">
        Result page
      {
      this.state.isLoading ?
        <LoadingComponent />
      :
      <div>
        <h2>We recommend these brands for you</h2>
        <div className="recommendation-results">
          <Individual-Result-Component />
        </div>
      </div>
      }
    </div>
    );
  }
}

export default ResultsComponent;