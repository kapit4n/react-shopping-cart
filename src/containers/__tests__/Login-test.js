import Login from '../Login'

import Enzyme, { shallow } from 'enzyme';
// Import Adapter
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
//use adapter
Enzyme.configure({ adapter: new Adapter() });

describe('shallow render', () => {
  const wrapper = shallow(<Login />)
  it('', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
