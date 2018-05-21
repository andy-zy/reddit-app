import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { Search } from '../../src/views/Articles/components'

describe('Search', () => {
  let props

  beforeEach(() => {
    props = {
      query: 'aaa',
      onSearch: jest.fn(),
    }
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Search {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('tab press should call onPress', () => {
    const value = 'aaa'
    const component = shallow(<Search {...props} />)
    component.find('TextInput').simulate('changeText', value)
    expect(props.onSearch).toHaveBeenCalledWith(value)
  })
})