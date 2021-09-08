import React from 'react';
import App from '../App'

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

describe('shallow render App', () => {
  const wrapper = shallow(<App />)
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mount render App', () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

