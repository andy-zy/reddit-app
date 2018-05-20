import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrientationHOC from '../../src/components/OrientationHOC'

Enzyme.configure({ adapter: new Adapter() });

describe('OrientationHOC', () => {
  let ElementToBeWrapped = 'TestElement'
  let Component;
  const orientation = 'PORTRAIT'

  beforeEach(() => {
    Component = OrientationHOC(ElementToBeWrapped)
  })

  it('is function', () => {
    expect(OrientationHOC).toBeInstanceOf(Function)
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('initial state', () => {
    const component = shallow(<Component />)
    expect(component.state()).toEqual({ orientation });
  })

  it('handleLayoutChange should set state', () => {
    const component = shallow(<Component />)
    component.setState({ orientation: 'LANDSCAPE' })
    component.instance().handleLayoutChange()
    expect(component.state('orientation')).toEqual(orientation);
  })
})
