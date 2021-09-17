import React from 'react';
import TestComponent from '../ProductShow'

import Enzyme, { shallow, mount } from 'enzyme';
// Import Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//use adapter
Enzyme.configure({ adapter: new Adapter() });

describe('shallow', () => {

  const props = {
    addProduct: () => { },
    history: {},
    product: {}
  }

  const wrapper = shallow(<TestComponent {...props} />)

  it('snaphost', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mount', () => {
  const props = {
    addProduct: () => { },
    history: {},
    product: {}
  }

  const wrapper = mount(<TestComponent {...props} />)

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

