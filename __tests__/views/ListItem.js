import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { ListItem } from '../../src/views/Articles/components'

jest.mock('../../src/components/Favorite', () => {
  return require('../../src/components/Favorite/Favorite')
})

describe('ListItem', () => {
  let props

  beforeEach(() => {
    props = {
      item: { id: 'id1', title: 'title1', url: 'url1', preview: {} },
      orientation: 'PORTRAIT',
      onPress: jest.fn(),
    }
  })

  it('renders correctly', () => {
    const tree = renderer.create(<ListItem {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('item press should call onPress', () => {
    const component = shallow(<ListItem {...props} />)
    component.simulate('press')
    expect(props.onPress).toHaveBeenCalledWith(props.item)
  })
})