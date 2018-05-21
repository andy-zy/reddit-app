import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import Articles from '../../src/views/Articles/Articles'
import { ListItem } from '../../src/views/Articles/components'

describe('Articles', () => {
  let props
  let component
  let instance

  beforeEach(() => {
    props = {
      after: null,
      articles: [
        { id: 'id1', title: 'title1', url: 'url1', preview: {} },
        { id: 'id2', title: 'title2', url: 'url2', preview: {} },
        { id: 'id3', title: 'title3', url: 'url3', preview: {} },
      ],
      favorites: [
        { id: 'id2', title: 'title2', url: 'url2', preview: {} },
      ],
      isFetching: false,
      error: '',
      setActiveArticle: jest.fn(),
      refreshArticles: jest.fn(),
      getArticlesByCategory: jest.fn(),
      orientation: 'PORTRAIT',
      navigation: { navigate: jest.fn() },
    }

    component = shallow(<Articles {...props} />)
    instance = component.instance()
  })

  // react-test-renderer crashes with an error https://github.com/facebook/jest/issues/4710
  // as workaround used enzyme.shallow to check all children/props
  it('renders correctly', () => {
    const search = component.find('Search')
    const tabs = component.find('Tabs')
    const list = component.find('ArticleListAnimated')

    expect(component.name()).toBe('View')
    expect(search).toHaveLength(1)
    expect(search.props()).toEqual({
      query: component.state('query'),
      onSearch: instance.handleSearch,
    })
    expect(tabs).toHaveLength(1)
    expect(tabs.props()).toEqual({
      activeIndex: component.state('activeIndex'),
      onPress: instance.handleTabPress,
    })
    expect(list).toHaveLength(1)
    expect(list.props()).toEqual({
      articles: component.state('articles'),
      isFetching: props.isFetching,
      itemRenderer: instance.renderItem,
      fetchData: instance.fetchArticles,
      onRefresh: props.refreshArticles,
      error: props.error,
    })
  })

  it('initial state', () => {
    const state = {
      articles: [],
      favorites: [],
      query: null,
      activeIndex: 0,
    }
    expect(component.state()).toEqual(state)
  })

  it('componentDidMount should call getArticlesByCategory', () => {
    expect(props.getArticlesByCategory).toHaveBeenCalledWith('reactjs', null, 24)
  })

  describe('componentWillReceiveProps', () => {
    it('should set state.articles/favorites', () => {
      const newProps = {
        articles: [
          { id: 'id3', title: 'title3', url: 'url3', preview: {} },
        ],
        favorites: {},
      }
      component.setProps(newProps)
      expect(component.state()).toMatchObject(newProps)
    })

    it('should call navigation.navigate', () => {
      component.setProps({ isFetching: true })
      component.setProps({ isFetching: false, error: 'error' })
      expect(props.navigation.navigate).toHaveBeenCalledWith('Error', { error: 'error' })
    })

    it('should call fetchArticles', () => {
      const fetchArticlesSpy = jest.spyOn(instance, 'fetchArticles')
      component.setProps({ after: 'abc123' })
      component.setProps({ after: null, articles: [] })
      expect(fetchArticlesSpy).toHaveBeenCalledWith(Articles.INITIAL_BATCH_SIZE, null)
    })
  })

  it('renderItem output', () => {
    const item = props.articles[0]
    const renderer = instance.renderItem({ item })
    expect(renderer.type).toEqual(ListItem)
    expect(renderer.props).toEqual({
      item,
      onPress: instance.handleArticlePress,
      orientation: props.orientation,
    })
  })

  describe('handleArticlePress', () => {
    let item
    let result

    beforeEach(() => {
      item = props.articles[0]
      result = instance.handleArticlePress(item)
    })

    it('returns a function', () => {
      expect(result).toBeInstanceOf(Function)
    })

    it('should call setActiveArticle', () => {
      result()
      expect(props.setActiveArticle).toHaveBeenCalledWith(item)
    })

    it('should call navigation.navigate', () => {
      result()
      expect(props.navigation.navigate).toHaveBeenCalledWith('Browser')
    })
  })

  describe('handleTabPress', () => {
    let index
    let result

    beforeEach(() => {
      index = 1
      result = instance.handleTabPress(index)
    })

    it('returns a function', () => {
      expect(result).toBeInstanceOf(Function)
    })

    it('should set state.activeIndex', () => {
      result()
      expect(component.state('activeIndex')).toBe(index)
    })
  })

  describe('handleSearch', () => {
    it('should set state.query', () => {
      const value = null
      instance.handleSearch(value)
      expect(component.state('query')).toBe(value)
    })

    it('should set state.query/articles/favorites', () => {
      const value = 'title2'
      instance.handleSearch(value)
      expect(component.state()).toMatchObject({
        query: value,
        articles: [ props.articles[1] ],
        favorites: [ props.favorites[0] ],
      })
    })
  })

  it('fetchArticles should call getArticlesByCategory', () => {
    const limit = 10
    const after = null
    instance.fetchArticles(limit, after)
    expect(props.getArticlesByCategory).toHaveBeenCalledWith('reactjs', after, limit)
  })
})
