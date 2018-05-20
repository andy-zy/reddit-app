import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Browser from '../../src/views/Browser/Browser'
import { Favorite } from '../../src/components'

describe('Error', () => {
  let props

  beforeEach(() => {
    props = {
      activeArticle: { url: 'https://test.com/' },
    }
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Browser {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('navigationOptions headerRight is <Favorite />', () => {
    expect(Browser.navigationOptions.headerRight).toMatchObject(<Favorite />)
  })
})
