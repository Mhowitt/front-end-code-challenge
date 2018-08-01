import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../WelcomeComponent/Welcome.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import Name from '../NameComponent/Name.jsx';
import Gender from '../GenderComponent/Gender.jsx';
import BodyType from '../BodyTypeComponents/BodyType.jsx';
import Size from '../SizeComponent/Size.jsx';
import Header from '../HeaderComponent/Header.jsx';
import Results from '../ResultsComponents/Results.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      gender: '',
      bodyType: '',
      bodySize: '',
      takingQuiz: false,
      question: null
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = e => {
    let currentQuestion = this.state.question;
    if (+currentQuestion === 4) {
      this.setState({
        takingQuiz: false,
        question: null,
        [e.target.name]: e.target.value
      });
    } else if (!currentQuestion) {
      currentQuestion = '1';
      this.setState({
        takingQuiz: true,
        question: currentQuestion
        // [e.target.name]: e.target.value
      });
    } else {
      currentQuestion = +currentQuestion + 1;
      this.setState({
        question: currentQuestion,
        [e.target.name]: e.target.value
      });
    }
  };

  startQuiz = e => {
    this.setState({
      takingQuiz: true,
      question: '1'
    });
  };

  goHome = e => {
    this.setState({
      takingQuiz: false,
      question: null
    });
  };

  render() {
    const {
      firstName,
      gender,
      bodyType,
      bodySize,
      question,
      takingQuiz
    } = this.state;
    const { maleBodyTypes, femaleBodyTypes } = this.props;

    return (
      <div className="App">
        <Header
          takingQuiz={takingQuiz}
          goHome={this.goHome}
          startQuiz={this.startQuiz}
        />
        {takingQuiz ? (
          <ProgressBar
            question={question}
            firstName={firstName}
            gender={gender}
            bodySize={bodySize}
            bodySize={bodySize}
          />
        ) : (
          ''
        )}
        <Switch>
          <Route
            exact
            path="/profile/size"
            render={routeProps => (
              <Size
                {...routeProps}
                firstName={firstName}
                bodySize={bodySize}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            exact
            path="/profile/body-type"
            render={routeProps => (
              <BodyType
                {...routeProps}
                firstName={firstName}
                gender={gender}
                bodyType={bodyType}
                bodyTypes={
                  this.state.gender === 'male' ? maleBodyTypes : femaleBodyTypes
                }
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            exact
            path="/profile/gender"
            render={routeProps => (
              <Gender
                {...routeProps}
                firstName={firstName}
                gender={gender}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={routeProps => (
              <Name
                {...routeProps}
                firstName={firstName}
                handleChange={this.handleChange}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            exact
            path="/results"
            render={routeProps => (
              <Results
                {...routeProps}
                firstName={firstName}
                gender={gender}
                bodyType={bodyType}
                bodySize={bodySize}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={routeProps => (
              <Welcome {...routeProps} handleClick={this.handleClick} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

App.defaultProps = {
  maleBodyTypes: [
    {
      type: 'rectangle',
      description:
        'SLIM: Narrower build with a taller, thinner frame and flat chest.',
      pic:
        'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22283/35f83626-54f1-419c-b987-461b71b73fd9.png'
    },
    {
      type: 'triangle',
      description:
        'Rectangular, athletic frame where shoulders are wider than waist.',
      pic:
        'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22284/2329c4e1-6cf1-48d1-9a80-2207bdef784c.png'
    },
    {
      type: 'oval',
      description: 'Huskier build with thicker and larger torso and legs.',
      pic:
        'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22285/5c6a178f-e303-4685-8894-2618a0da62e9.png'
    }
  ],
  femaleBodyTypes: [
    {
      type: 'hourglass',
      description:
        'Shoulders and hips are the same width, with a defined waist.',
      pic:
        'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22279/fe0d303e-87ae-4648-befd-a98ae53b8646.png'
    },
    {
      type: 'pear',
      description: 'Shoulders are narrower than the widest part of the hips.',
      pic:
        'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22280/d78eba93-5675-4a08-b825-8d6a69fb3c5e.png'
    },
    {
      type: 'straight',
      description:
        'Shoulders and hips are equal width, with an undefined waist.',
      pic:
        'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22281/c69ba01e-56dd-4923-89b7-048c2aef565a.png'
    },
    {
      type: 'triangle',
      description: 'Hips are narrower than the shoulders.',
      pic:
        'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22282/1dbcdc4e-00e9-4b80-ac7b-84298e4c25e9.png'
    }
  ]
};

export default App;
