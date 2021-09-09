import React from 'react';
import Root from '../Root'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import Enzyme, { shallow, mount } from 'enzyme';
// Import Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//use adapter
Enzyme.configure({ adapter: new Adapter() });

const store = createStore(r => r, {
  products: {
    todoApp: {
      products: [],
      cartInfo: {
        total: 10
      },
      filters: {
        display: true
      }
    }
  }
})

describe('shallow render Root', () => {
  const wrapper = shallow(<Root store={store}/>)
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mount render Root', () => {
  const wrapper = mount(
        <Root store={store}/>
  )
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

