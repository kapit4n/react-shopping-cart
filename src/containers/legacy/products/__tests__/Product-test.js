import React from 'react';
import TestComponent from '../Product'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

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

  const mockedParams = {
    route: { params: { id: 'whatever-id' } },
    navigation: ''
  };

  const wrapper = shallow(<TestComponent 
    store={store} 
    {...mockedParams} 
    match={{ params: { id: 1 }, isExact: true, path: "", url: "" }} />)
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
/* 
describe('mount', () => {
  const wrapper = mount(
    <Provider store={store}>
      <TestComponent />
    </Provider>
  )
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

 */