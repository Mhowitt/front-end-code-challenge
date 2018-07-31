import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { API_URL }from './config.js'
import WelcomeComponent from './components/WelcomeComponent'
import ProgressBar from './components/ProgressBar/ProgressBar'
import NameComponent from './components/NameComponent/NameComponent.jsx'
import GenderComponent from './components/GenderComponent/GenderComponent.jsx'
import BodyTypeComponent from './components/BodyTypeComponents/BodyTypeComponent.jsx'
import SizeComponent from './components/SizeComponent'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'
import ResultsComponent from './components/ResultsComponents/ResultsComponent.jsx'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: '',
        lastName: '',
        gender: '',
        bodyType: '',
        bodySize: '',
        takingQuiz: false,
        question: null,
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = () => {
    let currentQuestion = parseInt(this.state.question);
    if (currentQuestion === 4) {
      this.setState({takingQuiz: false})
      this.setState({question: null})
    } else if (!currentQuestion) {
      currentQuestion = '1'
      this.setState({takingQuiz: true})
      this.setState({question: currentQuestion})
    } else if (currentQuestion >= 1 && currentQuestion < 4) {
      currentQuestion = currentQuestion + 1;
      this.setState({question: currentQuestion.toString()})
    }

  }

  render() {
   const { firstName, lastName, gender, bodyType, bodySize, question, takingQuiz } = this.state;
   const { maleBodyTypes, femaleBodyTypes } = this.props;

    return (
      <div className="App">
      <HeaderComponent takingQuiz={takingQuiz} handleClick={this.handleClick}/>
      {
          takingQuiz ?
            <ProgressBar question={question}/>
        :
          ''
      }
      <Switch>
        <Route exact path='/profile/size' render={(routeProps) =>
          <SizeComponent {...routeProps}
            firstName={firstName}
            bodySize={bodySize}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />}
        />
        <Route exact path='/profile/body-type' render={(routeProps) =>
          <BodyTypeComponent {...routeProps}
            firstName={firstName}
            gender={gender}
            bodyType={bodyType}
            bodyTypes={this.state.gender === 'male' ? maleBodyTypes : femaleBodyTypes}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />}
        />
        <Route exact path='/profile/gender' render={(routeProps) =>
          <GenderComponent {...routeProps}
            firstName={firstName}
            gender={gender}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />}
        />
        <Route exact path='/profile' render={(routeProps) =>
          <NameComponent {...routeProps}
            firstName={firstName}
            lastName={lastName}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            />}
        />
        <Route exact path='/results' render={(routeProps) =>
          <ResultsComponent {...routeProps}
            firstName={firstName}
            lastName={lastName}
            gender={gender}
            bodyType={bodyType}
            bodySize={bodySize}
            getResult = {this.getResult}
            />}
        />
        <Route exact path='/' render={(routeProps) => <WelcomeComponent {...routeProps}  handleClick={this.handleClick} />} />
    </Switch>
      </div>
    );
  }

}

App.defaultProps = {
  maleBodyTypes: [
      {
        type: 'rectangle',
        description: 'SLIM: Narrower build with a taller, thinner frame and flat chest.',
        pic: 'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22283/35f83626-54f1-419c-b987-461b71b73fd9.png',
      },
      {
        type: 'triangle',
        description: 'Rectangular, athletic frame where shoulders are wider than waist.',
        pic: 'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22284/2329c4e1-6cf1-48d1-9a80-2207bdef784c.png',
      },
      {
      type: 'oval',
        description: 'Huskier build with thicker and larger torso and legs.',
        pic: 'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22285/5c6a178f-e303-4685-8894-2618a0da62e9.png',
      }],
    femaleBodyTypes: [
      {
        type: 'hourglass',
        description: 'Shoulders and hips are the same width, with a defined waist.',
        pic: 'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22279/fe0d303e-87ae-4648-befd-a98ae53b8646.png',
      }, {
      type: 'pear',
        description: 'Shoulders are narrower than the widest part of the hips.',
        pic: 'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22280/d78eba93-5675-4a08-b825-8d6a69fb3c5e.png',
      }, {
        type: 'straight',
        description: 'Shoulders and hips are equal width, with an undefined waist.',
        pic: 'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22281/c69ba01e-56dd-4923-89b7-048c2aef565a.png',
      }, {
        type: 'triangle',
        description: 'Hips are narrower than the shoulders.',
        pic: 'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22282/1dbcdc4e-00e9-4b80-ac7b-84298e4c25e9.png',
      }
  ]
}

export default App;
