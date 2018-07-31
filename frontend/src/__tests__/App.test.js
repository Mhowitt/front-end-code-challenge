import React from 'react';
import WelcomeComponent from '../components/WelcomeComponent/Welcome.jsx';
import HeaderComponent from '../components/HeaderComponent/Header.jsx';
import NameComponent from '../components/NameComponent/Name.jsx';
import GenderComponent from '../components/GenderComponent/Gender.jsx';
import ProgressBar from '../components/ProgressBar/ProgressBar.jsx';
import BodyTypeComponent from '../components/BodyTypeComponents/BodyType.jsx';
import SizeComponent from '../components/SizeComponent/Size.jsx';
import BodyTypeProfile from '../components/BodyTypeComponents/BodyTypeProfile.jsx';
import ResultsComponent from '../components/ResultsComponents/Results.jsx';
import App from '../components/App/App.js';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

describe('<App />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
//testing all dumb components w/ shallow
describe('<WelcomeComponent />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<WelcomeComponent />);
  });
});

describe('<HeaderComponent />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<HeaderComponent />);
  });
});

describe('<ProgressBar />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<ProgressBar />);
  });
});

describe('<NameComponent />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<NameComponent firstName="test" />);
  });
});

describe('<GenderComponent />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<GenderComponent />);
  });
});

describe('<BodyTypeComponent />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<BodyTypeComponent bodyTypes={['test-1', 'test-2']} />);
  });
});

describe('<BodyTypeProfile />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(
      <BodyTypeProfile
        bodyType={{
          description: 'test',
          pic:
            'https://tryon-production.s3.amazonaws.com/uploads/asset/file_asset/22280/d78eba93-5675-4a08-b825-8d6a69fb3c5e.png'
        }}
      />
    );
  });
});

describe('<SizeComponent />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<SizeComponent />);
  });
});

describe('<ResultComponent />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(<ResultsComponent />);
  });
});
