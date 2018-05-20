import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import Favorite from '../../src/components/Favorite/Favorite'

describe('Favorite', () => {
  let props

  beforeEach(() => {
    props = {
      isFavorite: false,
      toggleFavorite: jest.fn(),
    }
  })

  it('renders correctly non-favorite layout', () => {
    const tree = renderer.create(<Favorite {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly favorite layout', () => {
    const tree = renderer.create(<Favorite {...props} isFavorite />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('onPress should call toggleFavorite', () => {
    const component = shallow(<Favorite {...props} />)
    component.simulate('press')
    expect(props.toggleFavorite).toHaveBeenCalled()
  })
})