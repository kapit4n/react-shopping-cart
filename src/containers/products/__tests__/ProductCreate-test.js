import React from 'react';
import TestComponent from '../ProductCreate'

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

describe('shallow', () => {
  const wrapper = shallow(<TestComponent store={store} />)
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
/* 
describe('mount', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <TestComponent />
      </Router>
    </Provider>
  )
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
}) */

