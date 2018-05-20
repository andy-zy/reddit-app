import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Error from '../../src/views/Error/Error'

describe('Error', () => {
  const error = 'error'

  it('renders correctly', () => {
    const tree = renderer.create(<Error error={error} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('navigationOptions title', () => {
    expect(Error.navigationOptions.title).toBe('Error')
  })
})
