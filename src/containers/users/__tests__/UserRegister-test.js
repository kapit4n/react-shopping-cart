import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import UserRegister from '../UserRegister'


describe('shallow render Register', () => {
  const wrapper = shallow(<UserRegister />)
  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('mount render Register', () => {
  const wrapper = mount(<UserRegister />)
  it('snaphost', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
