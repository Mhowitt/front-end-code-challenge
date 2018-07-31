import React from 'react'; // for JSX
import { shallow, mount } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import NameComponent from '../components/NameComponent/Name.jsx';

describe('<NameComponent />', () => {
  let wrapper;
  it('renders', () => {
    wrapper = shallow(<NameComponent firstName="test" />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
