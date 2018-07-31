import React from 'react'; // for JSX
import { shallow, mount } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import HeaderComponent from '../components/HeaderComponent/Header.jsx';

describe('<HeaderComponent />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<HeaderComponent />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
