import React from 'react';
import TestCompoent from '../CartInfo'

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
        total: 10,
        products: [{ id: 1, name: 'test', quantity: 12, price: 10 }]
      },
      filters: {
        display: true
      }
    }
  }
})

describe('shallow', () => {
  const wrapper = shallow(<TestCompoent store={store} />)
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mount', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <TestCompoent />
      </Router>
    </Provider>
  )
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

