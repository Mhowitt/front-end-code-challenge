import React from 'react';
import App from '../App';
import toJson from 'enzyme-to-json'; // for snapshotting the component
import { shallow } from 'enzyme';

describe('<App />', () => {
  let wrapper;

    it('renders without crashing', () => {
      wrapper = shallow(<App />);
    });
})

