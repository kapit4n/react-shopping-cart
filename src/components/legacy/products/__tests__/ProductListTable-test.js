import React from 'react';
import TestComponent from '../ProductListTable'
import { BrowserRouter as Router } from "react-router-dom";

import Enzyme, { shallow, mount } from 'enzyme';
// Import Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//use adapter
Enzyme.configure({ adapter: new Adapter() });

describe('shallow', () => {

  const props = {
    addProduct: () => { },
    history: {},
    products: []
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
    products: []
  }

  const wrapper = mount(
    <Router>
      <TestComponent {...props} />
    </Router>
  )

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

