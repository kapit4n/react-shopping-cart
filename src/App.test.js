import React from 'react';
import App from './App'

import Enzyme, { shallow } from 'enzyme';
// Import Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//use adapter
Enzyme.configure({ adapter: new Adapter() });


describe('shallow render', () => {
  const wrapper = shallow(<App />)
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
