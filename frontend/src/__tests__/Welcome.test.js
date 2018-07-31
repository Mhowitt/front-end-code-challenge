import React from 'react'; // for JSX
import { shallow, mount } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import WelcomeComponent from '../components/WelcomeComponent/Welcome.jsx';

describe('<WelcomeComponent />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<WelcomeComponent />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
