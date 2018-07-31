import React, { Component } from 'react';
import axios from 'axios'
import { API_URL }from '../../config.js'
import LoadingComponent from '../LoadingComponent/LoadingComponent.jsx';
import IndividualResultComponent from './IndividualResultComponent.jsx'

class ResultsComponent  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      partners: null,
      brands: null,
     };
  }

componentDidMount() {

const recommendedPartner = [];
const shapeType = this.props.bodyType
  if (this.props.gender === 'female') {
    Promise.all([axios.get(`${API_URL}/acme/bodies/female`), axios.get(`${API_URL}/delta/bodies/female`)])
    .then(response => {
      const brands = ['acme', 'delta']
      response.forEach((data, idx) => {
        let shapeIdx = this.shapeFinder(data, shapeType)
        const dataBrand = Object.assign({brand: brands[idx]}, data)
        if (shapeIdx > -1) {
          recommendedPartner.push(dataBrand)
          }
      })
      this.setState({
        partners: recommendedPartner,
        isLoading: false
      });
    })
    .catch(err => console.log(err));
  } else {
    Promise.all([axios.get(`${API_URL}/delta/bodies/male`), axios.get(`${API_URL}/bongo/bodies/male`), axios.get(`${API_URL}/acme/bodies/male`)])
    .then(response => {
      const brands = ['delta', 'bongo', 'acme'];
      response.forEach((data, idx) => {
        let shapeIdx = this.shapeFinder(data, shapeType)
        const dataBrand = Object.assign({brand: brands[idx]}, data)
        if (shapeIdx > -1) {
          recommendedPartner.push(dataBrand)
          }
      })
      this.setState({
        partners: recommendedPartner,
        isLoading: false
      });
    })
    .catch(err => console.log(err));
  }
  // const brands = [];
  // Promise.all([axios.get(`${API_URL}/acme`), axios.get(`${API_URL}/bongo`), axios.get(`${API_URL}/delta`)])
  //   .then(data => {
  //     brands.push({companyInfo: data.data})
  //     debugger;
  //   })
      // this.setState({brands: brands,
      //   partners: recommendedPartner,
      //   isLoading: false
      // })

}

shapeFinder = (data, shape) => {
  let shapeIdx;
  const shapeArray = data.data.shapes;

  shapeArray.forEach((item, idx) => {
    if (item.name === shape);
    shapeIdx = idx
  })

  return shapeIdx;
}

// brandFinder = (brands, partnerName) => {
//   let targetBrandIdx;
//   brands.forEach((brand, idx) => {
//     if (brand.id === partnerName);
//     targetBrandIdx = idx
//   })
//   return {company: brands[targetBrandIdx]};
// }
  render() {
    console.log("RENDERING", this.state.partners)
    const { brands } = this.props;
    return (
      <div>
      {
      this.state.isLoading ?
        <LoadingComponent />
      :
      <div>
        <h2>We recommend these brands for you</h2>
        <div className="card-container">
          <div className="recommendation-results">
            {this.state.partners.map((partner, idx) => <IndividualResultComponent key={idx} partner={partner} brand={brands} />
            )}
          </div>
        </div>
      </div>
      }
    </div>
    );
  }
}

export default ResultsComponent;