import 'react-native'
import React from 'react'
import {
  View,
  Text,
} from 'react-native'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { ArticleList } from '../../src/views/Articles/components'

describe('Error', () => {
  let props

  beforeEach(() => {
    props = {
      error: '',
      isFetching: false,
      articles: [
        { id: 'id1', title: 'title1', url: 'url1', preview: {} },
        { id: 'id2', title: 'title2', url: 'url2', preview: {} },
      ],
      itemRenderer: (item) => <View><Text>{item.title}</Text></View>,
      fetchData: jest.fn(),
      onRefresh: jest.fn(),
    }
  })

  it('renders correctly with data', () => {
    const tree = renderer.create(<ArticleList {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when data is fetching', () => {
    const tree = renderer.create(<ArticleList {...props} isFetching />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('contains <FlatList />', () => {
    const component = shallow(<ArticleList {...props} />)
    expect(component.find('FlatList')).toHaveLength(1)
  })

  it('<FlatList /> refreshing should call onRefresh', () => {
    const component = shallow(<ArticleList {...props} />)
    component.find('FlatList').simulate('refresh')
    expect(props.onRefresh).toHaveBeenCalled()
  })

  it('<FlatList /> reaching end should call fetchData', () => {
    const component = shallow(<ArticleList {...props} />)
    component.find('FlatList').simulate('endReached')
    expect(props.fetchData).toHaveBeenCalled()
  })
})