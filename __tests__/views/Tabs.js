import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Tabs } from '../../src/views/Articles/components'

describe('Tabs', () => {
  let props

  beforeEach(() => {
    props = {
      activeIndex: 1,
      onPress: jest.fn(),
    }
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Tabs {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('tab press should call onPress', () => {
    const component = shallow(<Tabs {...props} />)
    component.find('TouchableHighlight').at(0).simulate('press')
    expect(props.onPress).toHaveBeenCalledWith(0)
    component.find('TouchableHighlight').at(1).simulate('press')
    expect(props.onPress).toHaveBeenCalledWith(1)
  })
})