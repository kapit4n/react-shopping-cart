import React from 'react';
import {ProductCreate as TestComponent} from '../ProductCreate'

import Enzyme, { shallow, mount } from 'enzyme';
// Import Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//use adapter
Enzyme.configure({ adapter: new Adapter() });

describe('shallow', () => {

  const props = {
    addProduct: () => { },
    history: {}
  }

  const wrapper = shallow(<TestComponent {...props} />)

  it('snaphost', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mount', () => {
  const props = {
    addProduct: () => { },
    history: {}
  }

  const wrapper = mount(
      <TestComponent {...props} />
  )

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

