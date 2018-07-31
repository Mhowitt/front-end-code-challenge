import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent.jsx';
import HeaderComponent from '../components/HeaderComponent/HeaderComponent.jsx'
import NameComponent from '../components/NameComponent/NameComponent.jsx'
import GenderComponent from '../components/GenderComponent/GenderComponent.jsx'
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx'
import BodyTypeComponent from '../components/BodyTypeComponents/BodyTypeComponent.jsx'
import SizeComponent from '../components/SizeComponent.jsx'
import toJson from 'enzyme-to-json'; // for snapshotting the component
import { shallow, mount } from 'enzyme';

//testing all dumb components w/ shallow
describe('<WelcomeComponent />', () => {
  let wrapper;

  // it('should detect state and all h2s on mounting', () => {
  //   wrapper = mount(<App />);
  //   expect(wrapper.state('takingQuiz')).toBe('false');
  // });

    it('renders without crashing', () => {
      wrapper = shallow(<WelcomeComponent/>);
    });
})

describe('<HeaderComponent />', () => {
  let wrapper;
    it('renders without crashing', () => {
      wrapper = shallow(<HeaderComponent/>);
    });
})

describe('<ProgressBar />', () => {
  let wrapper;
    it('renders without crashing', () => {
      wrapper = shallow(<ProgressBar/>);
    });
})

describe('<NameComponent />', () => {
  let wrapper;
    it('renders without crashing', () => {
      wrapper = shallow(<NameComponent />);
    });
})

describe('<GenderComponent />', () => {
  let wrapper;
    it('renders without crashing', () => {
      wrapper = shallow(<GenderComponent />);
    });
})

describe('<BodyTypeComponent />', () => {
  let wrapper;
    it('renders without crashing', () => {
      wrapper = shallow(<BodyTypeComponent />);
    });
})

describe('<SizeComponent />', () => {
  let wrapper;
    it('renders without crashing', () => {
      wrapper = shallow(<SizeComponent />);
    });
})

