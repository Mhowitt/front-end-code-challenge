import React from 'react'; // for JSX
import { shallow, mount } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import SizeComponent from '../components/SizeComponent/Size.jsx';

describe('<SizeComponent />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<SizeComponent />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
