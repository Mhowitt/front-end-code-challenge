import React from 'react'; // for JSX
import { shallow, mount } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import GenderComponent from '../components/GenderComponent/Gender.jsx';

describe('<GenderComponent />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<GenderComponent />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
